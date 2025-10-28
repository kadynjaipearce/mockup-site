import { NextRequest, NextResponse } from "next/server";

// Simple in-memory cache for serverless/runtime
let cachedResponse: {
  data: unknown;
  timestamp: number;
} | null = null;

const CACHE_MS = 5 * 60 * 1000; // 5 minutes

// Google My Business API types
type GoogleMyBusinessReview = {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string;
    isAnonymous: boolean;
  };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment: string;
  createTime: string;
  updateTime: string;
  reviewReply?: {
    comment: string;
    updateTime: string;
  };
};

type GoogleMyBusinessResponse = {
  reviews?: GoogleMyBusinessReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

// Convert star rating string to number
function starRatingToNumber(rating: string): number {
  const ratingMap: Record<string, number> = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  };
  return ratingMap[rating] || 0;
}

// Get OAuth2 access token
async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Google OAuth2 credentials");
  }

  // If no refresh token, we need to start the OAuth flow
  if (!refreshToken) {
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/google-reviews/callback`;
    const scope = "https://www.googleapis.com/auth/business.manage";
    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${encodeURIComponent(scope)}&` +
      `response_type=code&` +
      `access_type=offline&` +
      `prompt=consent`;

    throw new Error(`OAuth setup required. Please visit: ${authUrl}`);
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function GET(request: NextRequest) {
  // If no refresh token yet, instruct client to start OAuth (avoid cross-origin redirect from XHR)
  if (!process.env.GOOGLE_REFRESH_TOKEN) {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = `${request.nextUrl.origin}/api/google-reviews/callback`;
    const scope = "https://www.googleapis.com/auth/business.manage";
    const authUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${encodeURIComponent(clientId || "")}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${encodeURIComponent(scope)}&` +
      `response_type=code&access_type=offline&prompt=consent`;
    return NextResponse.json(
      { error: "OAuth setup required", authUrl },
      { status: 401 }
    );
  }
  // Serve from cache if fresh
  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_MS) {
    return NextResponse.json(cachedResponse.data, { status: 200 });
  }

  try {
    // Get OAuth2 access token
    const accessToken = await getAccessToken();

    // Resolve accountId and locationId when missing via Google Business Profile APIs
    let accountId = process.env.GOOGLE_ACCOUNT_ID;
    let locationId = process.env.GOOGLE_LOCATION_ID;

    // Helper: fetch first account id if not provided
    async function resolveAccountId(): Promise<string> {
      const res = await fetch(
        "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error(`Accounts API error: ${res.status}`);
      const data: { accounts?: Array<{ name?: string }> } = await res.json();
      const fullName = data.accounts?.[0]?.name; // e.g. "accounts/123"
      const id = fullName?.split("/")[1];
      if (!id) throw new Error("No Google Business accounts found");
      return id;
    }

    // Helper: fetch first location id for account if not provided
    async function resolveLocationId(accId: string): Promise<string> {
      const url = `https://mybusinessbusinessinformation.googleapis.com/v1/accounts/${accId}/locations?readMask=name,title,storeCode`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Locations API error: ${res.status}`);
      const data: { locations?: Array<{ name?: string; title?: string }> } =
        await res.json();
      const fullName = data.locations?.[0]?.name; // e.g. "locations/987..."
      const id = fullName?.split("/")[1];
      if (!id)
        throw new Error("No Google Business locations found for account");
      return id;
    }

    if (!accountId) {
      accountId = await resolveAccountId();
    }
    if (!locationId && accountId) {
      locationId = await resolveLocationId(accountId);
    }

    if (!accountId || !locationId) {
      return NextResponse.json(
        { error: "Unable to resolve Google account or location id" },
        { status: 500 }
      );
    }

    // Google My Business API endpoint
    const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Google My Business API error: ${res.status}` },
        { status: 502 }
      );
    }

    const json = (await res.json()) as GoogleMyBusinessResponse;

    if (!json.reviews) {
      return NextResponse.json(
        { error: "No reviews found in response" },
        { status: 502 }
      );
    }

    // Normalize reviews to a lean shape for the client
    const normalized = json.reviews.map((review) => ({
      authorName: review.reviewer.displayName,
      rating: starRatingToNumber(review.starRating),
      text: review.comment,
      time: new Date(review.createTime).toLocaleDateString(),
      profilePhotoUrl: review.reviewer.profilePhotoUrl,
      isAnonymous: review.reviewer.isAnonymous,
      reviewId: review.reviewId,
      reply: review.reviewReply?.comment,
    }));

    // Calculate average rating and counts
    const ratings = normalized.map((r) => r.rating);
    const averageRating =
      ratings.length > 0
        ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
        : null;

    const fiveStarCount = normalized.filter((r) => r.rating === 5).length;

    const payload = {
      rating: averageRating,
      totalRatings: json.totalReviewCount || normalized.length,
      reviews: normalized,
      fiveStarCount: fiveStarCount,
    };

    cachedResponse = { data: payload, timestamp: Date.now() };
    return NextResponse.json(payload, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch Google reviews";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
