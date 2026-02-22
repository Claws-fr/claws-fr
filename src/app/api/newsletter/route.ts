import { NextRequest, NextResponse } from "next/server";

const BREVO_LIST_ID = 2;
const WELCOME_TEMPLATE_ID = 1;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    // 1. Add contact to list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    const isNew = contactRes.status === 201;
    const isDuplicate =
      contactRes.status === 400 &&
      (await contactRes.json().then((d) => d.code === "duplicate_parameter").catch(() => false));

    if (!contactRes.ok && !isDuplicate) {
      return NextResponse.json({ error: "Erreur inscription" }, { status: 400 });
    }

    // 2. Send welcome email (only to new subscribers)
    if (isNew) {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [{ email }],
          templateId: WELCOME_TEMPLATE_ID,
          sender: { name: "Claws", email: "julie.decroix.pro@gmail.com" },
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
