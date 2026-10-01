import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, whatsapp, message } = await request.json();

    if (!name || !whatsapp || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "singh.mukul2026@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured yet. Add RESEND_API_KEY to the environment." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Portfolio enquiry from ${name}`,
        reply_to: undefined,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#172033">
            <h2>New portfolio enquiry</h2>
            <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
            <p><strong>WhatsApp:</strong> ${escapeHtml(String(whatsapp))}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${escapeHtml(String(message))}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Unable to send email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unable to process your message." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
