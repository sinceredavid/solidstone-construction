import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  contact?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  let payload: QuotePayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = payload?.name?.trim();
  const contact = payload?.contact?.trim();
  const projectType = payload?.projectType?.trim();
  const message = payload?.message?.trim();

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const to = process.env.RESEND_TO ?? "sinceredavid@gmail.com";
  const from = process.env.RESEND_FROM ?? "SolidStone <onboarding@resend.dev>";

  const text = [
    "New quote request",
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Project Type: ${projectType || "Not provided"}`,
    "Message:",
    message || "Not provided",
  ].join("\n");

  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(
      projectType || "Not provided"
    )}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || "Not provided").replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New Quote Request - ${projectType}`,
      text,
      html,
      reply_to: contact,
    }),
  });

  const data = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return NextResponse.json(
      { error: "Resend error", details: data },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, id: data?.id });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
