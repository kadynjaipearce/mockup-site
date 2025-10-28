import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { error: `OAuth error: ${error}` },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json(
      { error: "No authorization code provided" },
      { status: 400 }
    );
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/google-reviews/callback`;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Missing Google OAuth2 credentials" },
      { status: 500 }
    );
  }

  try {
    // Exchange authorization code for tokens
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          error: `Failed to exchange code for tokens: ${JSON.stringify(errorData)}`,
        },
        { status: 400 }
      );
    }

    const tokens = await response.json();

    // Return the refresh token for you to save in your environment variables
    return NextResponse.json({
      success: true,
      message:
        "OAuth setup successful! Please add the following to your environment variables:",
      refreshToken: tokens.refresh_token,
      accessToken: tokens.access_token,
      instructions: [
        "1. Add GOOGLE_REFRESH_TOKEN to your .env.local file",
        "2. Set GOOGLE_REFRESH_TOKEN=" + tokens.refresh_token,
        "3. Restart your development server",
        "4. The reviews API should now work properly",
      ],
    });
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "Failed to exchange authorization code";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
