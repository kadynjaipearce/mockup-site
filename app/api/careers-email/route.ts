import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import CareersAcknowledgementEmail from "@/emails/CareersAcknowledgementEmail";

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

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  const resume = formData.get("resume") as File | null;

  if (!email || !name) {
    return NextResponse.json(
      { error: "Missing required fields: name, email" },
      { status: 400 }
    );
  }

  const attachments: Array<{ filename: string; content: string }> = [];
  if (resume && typeof resume === "object" && "arrayBuffer" in resume) {
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    attachments.push({
      filename: resume.name,
      content: buffer.toString("base64"),
    });
  }

  const subject = `New job application: ${name}`;
  const acknowledgementSubject = `Thanks for your application${name ? ", " + name : ""}`;

  const origin =
    req.headers.get("origin") || process.env.NEXT_PUBLIC_BASE_URL || "";
  const websiteBase = process.env.NEXT_PUBLIC_BASE_URL || origin || "";
  const absoluteLogo = websiteBase
    ? `${websiteBase.replace(/\/$/, "")}/Icon.png`
    : undefined;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: BUSINESS_EMAIL,
    subject,
    text: `New application from ${name} <${email}>\n\n${message}`,
    attachments,
    replyTo: email,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send acknowledgement to applicant
  const { error: ackError } = await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: acknowledgementSubject,
    react: CareersAcknowledgementEmail({
      name,
      logoUrl: absoluteLogo,
      siteUrl: websiteBase || undefined,
    }),
    replyTo: BUSINESS_EMAIL,
  });

  if (ackError) {
    return NextResponse.json({ error: ackError.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
