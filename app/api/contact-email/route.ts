import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactAcknowledgementEmail from "@/emails/ContactAcknowledgementEmail";
import ContactNotificationEmail from "@/emails/ContactNotificationEmail";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}
const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.BUSINESS_EMAIL) {
  throw new Error("Missing BUSINESS_EMAIL");
}
if (!process.env.RESEND_FROM) {
  throw new Error("Missing RESEND_FROM");
}
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL;
const FROM_EMAIL = process.env.RESEND_FROM;
export async function POST(req: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  let parsedBody: {
    email?: string;
    name?: string;
    subject?: string;
    message?: string;
  };
  try {
    parsedBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email, name, subject, message } = parsedBody || {};

  if (!email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: email, message" },
      { status: 400 }
    );
  }

  const acknowledgementSubject =
    "Thanks for contacting Bunbury Wellness Remedial Massage";
  const businessSubject = `New contact form submission${subject ? ": " + String(subject) : ""}`;

  const origin =
    req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "";
  const websiteBase = process.env.NEXT_PUBLIC_BASE_URL || origin || "";
  const absoluteLogo = websiteBase
    ? `${websiteBase.replace(/\/$/, "")}/icon.png`
    : undefined;

  const { data: ackData, error: ackError } = await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: acknowledgementSubject,
    react: ContactAcknowledgementEmail({
      name,
      message,
      logoUrl: absoluteLogo,
      siteUrl: origin || undefined,
    }),
  });

  if (ackError) {
    return NextResponse.json({ error: ackError.message }, { status: 500 });
  }

  const { data: bizData, error: bizError } = await resend.emails.send({
    from: FROM_EMAIL,
    to: BUSINESS_EMAIL,
    subject: businessSubject,
    react: ContactNotificationEmail({ name, email, subject, message }),
    replyTo: email,
  });

  if (bizError) {
    return NextResponse.json({ error: bizError.message }, { status: 500 });
  }

  return NextResponse.json(
    {
      ok: true,
      acknowledgementId: ackData?.id || null,
      businessMessageId: bizData?.id || null,
    },
    { status: 200 }
  );
}
