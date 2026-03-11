import { NextRequest, NextResponse } from "next/server";

// ── Rate limiting (in-memory, par IP) ─────────────────────────────────────
const rateMap = new Map<string, { count: number; firstAt: number }>();
const RATE_LIMIT = 3;        // max requêtes
const RATE_WINDOW = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.firstAt > RATE_WINDOW) {
    rateMap.set(ip, { count: 1, firstAt: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── Validation email robuste ───────────────────────────────────────────────
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// ── Détection patterns bots connus ────────────────────────────────────────
function looksLikeBot(name: string, email: string, message: string): boolean {
  // Nom trop long sans espaces (chaîne aléatoire)
  if (name.length > 60) return true;
  if (name.length > 20 && !/\s/.test(name)) return true;

  // Email avec pattern généré (hoook, h.o.o.k, etc.)
  if (/([a-z]\.){3,}/.test(email)) return true;

  // Message trop court ou trop long
  if (message.length < 5) return true;
  if (message.length > 5000) return true;

  // Contenu spam classique
  const spamKeywords = [
    "buy now", "click here", "free money", "casino", "viagra", "crypto investment",
    "prêt rapide", "gagner de l'argent", "investissement garanti", "bitcoin", "forex",
    "référencement pas cher", "backlink", "seo pas cher", "guest post",
  ];
  const lower = message.toLowerCase();
  if (spamKeywords.some((kw) => lower.includes(kw))) return true;

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // ── Rate limiting ─────────────────────────────────────────────────────
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Trop de requêtes" }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, message, _hp, _elapsed } = body;

    // ── Honeypot : doit être vide (les bots le remplissent) ───────────────
    if (_hp && _hp !== "") {
      return NextResponse.json({ ok: true, qualified: false });
    }

    // ── Timing check : < 3 secondes = bot ────────────────────────────────
    if (typeof _elapsed === "number" && _elapsed < 3000) {
      return NextResponse.json({ ok: true, qualified: false });
    }

    // ── Validation basique ────────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }
    if (name.trim().length < 2) {
      return NextResponse.json({ error: "Nom trop court" }, { status: 400 });
    }

    // ── Détection bot ─────────────────────────────────────────────────────
    if (looksLikeBot(name, email, message)) {
      // Simuler un succès silencieux
      return NextResponse.json({ ok: true, qualified: false });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    const html = `
      <div style="font-family:monospace;background:#0E0E0E;color:#F5F2EE;padding:32px;max-width:600px;">
        <p style="color:#E85D04;margin:0 0 24px;font-size:14px;">// Nouveau message claws.fr</p>
        <p style="margin:0 0 8px;font-size:14px;"><span style="color:#E85D04;">nom</span> → ${name}</p>
        <p style="margin:0 0 8px;font-size:14px;"><span style="color:#E85D04;">email</span> → ${email}</p>
        <p style="margin:0 0 8px;font-size:14px;"><span style="color:#E85D04;">ip</span> → ${ip}</p>
        <p style="margin:0 0 24px;font-size:14px;"><span style="color:#E85D04;">message</span> →</p>
        <div style="border-left:3px solid #E85D04;padding:16px;color:rgba(255,255,255,0.8);font-size:14px;line-height:1.7;">${message.replace(/\n/g, "<br>")}</div>
        <p style="margin:24px 0 0;font-size:12px;color:rgba(255,255,255,0.3);">Envoyé depuis claws.fr/contact</p>
      </div>
    `;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: { name: "Claws Contact", email: "newsletter@claws.fr" },
        to: [{ email: "julie.decroix.pro@gmail.com", name: "Julie" }],
        replyTo: { email, name },
        subject: `Nouveau contact : ${name}`,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, qualified: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
