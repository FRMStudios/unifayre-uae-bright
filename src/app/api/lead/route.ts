import { NextResponse, type NextRequest } from "next/server";

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;
const CC_EMAIL = process.env.FORMSPREE_CC_EMAIL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, country, business, interests } =
      body ?? {};

    if (!name || !company || !email || !phone || !country || !business) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submission = {
      at: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      country,
      business,
      interests: Array.isArray(interests) ? interests.join(", ") : "",
      _subject: `New Unifayre lead: ${company} (${country})`,
      _replyto: email,
      ...(CC_EMAIL ? { _cc: CC_EMAIL } : {}),
    };

    console.log("[unifayre-lead]", submission);

    if (FORMSPREE_ENDPOINT) {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[unifayre-lead] formspree error", res.status, text);
        return NextResponse.json(
          { ok: false, error: "Could not forward submission" },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[unifayre-lead] parse error", err);
    return NextResponse.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }
}
