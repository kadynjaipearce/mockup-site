import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY ?? "dont put this in production lol"
);

const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "kadynjaipearce@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM ||
  "Bunbury Wellness Remedial Massage <kadynpearce@kadynpearce.dev>";

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

  let attachments: Array<{ filename: string; content: string }> = [];
  if (resume && typeof resume === "object" && "arrayBuffer" in resume) {
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    attachments.push({
      filename: resume.name,
      content: buffer.toString("base64"),
    });
  }

  const subject = `New job application: ${name}`;

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

  return NextResponse.json({ ok: true }, { status: 200 });
}
