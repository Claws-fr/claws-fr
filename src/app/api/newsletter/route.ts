import { NextRequest, NextResponse } from "next/server";

const BREVO_LIST_ID = 2;

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
      const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Bienvenue chez Claws</title></head>
<body style="margin:0;padding:0;background:#F5F2EE;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F2EE;padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#F5F2EE;">
      <tr><td style="padding:0 0 32px 0;"><span style="font-size:20px;font-weight:700;color:#0E0E0E;letter-spacing:-0.5px;">Claws</span><span style="display:inline-block;width:8px;height:8px;background:#E85D04;margin-left:6px;vertical-align:middle;"></span></td></tr>
      <tr><td style="height:3px;background:#E85D04;"></td></tr>
      <tr>
        <td style="background:#ffffff;padding:48px 40px;">
          <h1 style="margin:0 0 24px;font-size:28px;font-weight:800;color:#0E0E0E;letter-spacing:-1px;line-height:1.2;">Bienvenue dans la newsletter Claws.</h1>
          <p style="margin:0 0 20px;font-size:16px;color:#444;line-height:1.7;">Vous venez de rejoindre une liste de personnes qui veulent comprendre ce que les agents IA changent vraiment au travail quotidien.</p>
          <p style="margin:0 0 20px;font-size:16px;color:#444;line-height:1.7;">Chaque semaine, on partage un cas d'usage concret, un retour terrain ou un guide pratique sur OpenClaw et l'automatisation par agents IA.</p>
          <p style="margin:0 0 32px;font-size:16px;color:#444;line-height:1.7;">Pas de contenu generique. Pas de listes a cocher. Juste ce qui fonctionne vraiment.</p>
          <table cellpadding="0" cellspacing="0"><tr><td style="background:#0E0E0E;padding:14px 28px;"><a href="https://claws.fr/blog" style="color:#F5F2EE;font-size:15px;font-weight:600;text-decoration:none;">Lire les derniers articles &rarr;</a></td></tr></table>
        </td>
      </tr>
      <tr>
        <td style="background:#F5F2EE;padding:32px 40px;border-top:1px solid #E8E4DF;">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#0E0E0E;letter-spacing:0.08em;text-transform:uppercase;">A quoi s'attendre</p>
          <p style="margin:0 0 12px;font-size:14px;color:#666;line-height:1.6;"><strong style="color:#0E0E0E;">1 email par semaine</strong>, le mardi matin.</p>
          <p style="margin:0 0 12px;font-size:14px;color:#666;line-height:1.6;"><strong style="color:#0E0E0E;">Cas d'usage metiers</strong> : BTP, sante, professions liberales, retail.</p>
          <p style="margin:0;font-size:14px;color:#666;line-height:1.6;"><strong style="color:#0E0E0E;">Guides OpenClaw</strong> : installation, configuration, maintenance.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 40px;border-top:1px solid #E8E4DF;">
          <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">Vous recevez cet email car vous vous etes inscrit sur <a href="https://claws.fr" style="color:#E85D04;text-decoration:none;">claws.fr</a>.<br><a href="{{unsubscribe}}" style="color:#999;text-decoration:underline;">Se desabonner</a> &nbsp;|&nbsp; Claws, Paris, France</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [{ email }],
          subject: "Bienvenue dans la newsletter Claws",
          htmlContent,
          sender: { name: "Claws", email: "newsletter@claws.fr" },
          replyTo: { name: "Claws", email: "newsletter@claws.fr" },
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
