import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultRecipient = "viktor@sitestudio.lt";

function getMailTransport() {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass || Number.isNaN(port)) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const transport = getMailTransport();
    const to = process.env.CONTACT_TO_EMAIL || defaultRecipient;
    const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

    if (!transport || !from) {
      return NextResponse.json(
        {
          error:
            "SMTP config is missing. Set SMTP_USER, SMTP_PASS and optionally SMTP_HOST/SMTP_PORT."
        },
        { status: 500 }
      );
    }

    await transport.sendMail({
      from: `SiteStudio <${from}>`,
      to,
      replyTo: email,
      subject: `New SiteStudio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process contact request." },
      { status: 500 }
    );
  }
}
