import { NextResponse } from "next/server";

// Simple in-memory cache for serverless/runtime
let cachedResponse: {
  data: unknown;
  timestamp: number;
} | null = null;

const CACHE_MS = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID" },
      { status: 500 }
    );
  }

  // Serve from cache if fresh
  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_MS) {
    return NextResponse.json(cachedResponse.data, { status: 200 });
  }

  try {
    // Google Places Details API (may return up to 5 reviews)
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { next: { revalidate: 300 } });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Google API error: ${res.status}` },
        { status: 502 }
      );
    }

    type GoogleReview = {
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
    };
    type GoogleResult = {
      status: string;
      result?: {
        rating?: number;
        user_ratings_total?: number;
        reviews?: GoogleReview[];
      };
      error_message?: string;
    };

    const json = (await res.json()) as GoogleResult;
    if (json.status !== "OK" || !json.result) {
      return NextResponse.json(
        { error: json.error_message || "Invalid Google response" },
        { status: 502 }
      );
    }

    const result = json.result || {};
    const reviews = Array.isArray(result.reviews) ? result.reviews : [];

    // Normalize reviews to a lean shape for the client
    const normalized = reviews.map((r) => ({
      authorName: r.author_name,
      rating: r.rating,
      text: r.text,
      time: r.relative_time_description,
    }));

    // Count 5-star reviews from the available set (Google API does not expose global 5-star histogram in v2)
    const fiveStarCountFromSample = normalized.filter(
      (r) => r.rating === 5
    ).length;

    const payload = {
      rating: result.rating ?? null,
      totalRatings: result.user_ratings_total ?? null,
      reviews: normalized,
      fiveStarCount: fiveStarCountFromSample,
    };

    cachedResponse = { data: payload, timestamp: Date.now() };
    return NextResponse.json(payload, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch Google reviews";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
