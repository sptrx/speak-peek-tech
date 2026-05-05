import { NextResponse } from "next/server";

const ADMIN_EMAIL = "admin@speakpeek.net";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type Body = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  _hp?: unknown;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof body._hp === "string" && body._hp.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const company =
    typeof body.company === "string" ? body.company.trim().slice(0, 200) : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 8000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 8,000 characters." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_EMAIL_TO?.trim() || ADMIN_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM?.trim();

  if (!resendKey || !from) {
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_EMAIL_FROM");
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Set RESEND_API_KEY and CONTACT_EMAIL_FROM (verified sender in Resend).",
      },
      { status: 503 },
    );
  }

  const subject = `[Speak Peek] Contact from ${name}`;
  const html = `
    <p><strong>Name</strong><br />${escapeHtml(name)}</p>
    <p><strong>Email</strong><br /><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${company ? `<p><strong>Company</strong><br />${escapeHtml(company)}</p>` : ""}
    <p><strong>Message</strong></p>
    <pre style="font-family:system-ui,sans-serif;white-space:pre-wrap;">${escapeHtml(message)}</pre>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      html,
    }),
  });

  const payload = (await res.json().catch(() => ({}))) as { message?: string | string[] };
  const apiMessage = Array.isArray(payload.message)
    ? payload.message.join(" ")
    : payload.message;

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, payload);
    return NextResponse.json(
      { error: apiMessage || "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
