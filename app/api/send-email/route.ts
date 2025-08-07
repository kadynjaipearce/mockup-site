import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email, "info@fukospa.com.au"],
    subject: subject,
    text: message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: data }, { status: 200 });
}
