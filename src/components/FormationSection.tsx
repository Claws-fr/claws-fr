"use client";

const profiles = [
  {
    num: "01",
    title: "Indépendant & Freelance",
    desc: "Automatise ta prospection, tes devis, ta veille",
  },
  {
    num: "02",
    title: "Chef d'entreprise",
    desc: "Délègue à des agents, pas à des prestataires",
  },
  {
    num: "03",
    title: "Salarié & Manager",
    desc: "Gagne 2h/jour, monte en compétence avant tout le monde",
  },
];

const modules = [
  {
    num: "01",
    title: "Agents IA — Comprendre & Utiliser",
    duration: "2h",
    desc: "ChatGPT, Claude, Perplexity — ce qui change vraiment dans votre façon de travailler.",
  },
  {
    num: "02",
    title: "n8n — Automatiser sans coder",
    duration: "3h",
    desc: "Workflows, triggers, intégrations API. Zéro ligne de code, résultats concrets.",
  },
  {
    num: "03",
    title: "Installer & utiliser Claude Cowork",
    duration: "1h30",
    desc: "Installation, configuration, cas d'usage métier. Votre assistant IA opérationnel.",
  },
  {
    num: "04",
    title: "Boîte à outils IA du quotidien",
    duration: "2h",
    desc: "Stack complète : email, docs, veille, réunions. L'arsenal de l'équipe efficace.",
  },
];

const pedagogie = [
  {
    num: "01",
    title: "Vidéos asynchrones",
    desc: "Regardez à votre rythme, accès à vie inclus",
  },
  {
    num: "02",
    title: "Sessions live",
    desc: "1 live/semaine, questions en direct avec l'équipe Claws",
  },
  {
    num: "03",
    title: "Communauté privée",
    desc: "Slack/WhatsApp, entraide et partage de workflows entre participants",
  },
  {
    num: "04",
    title: "Ressources téléchargeables",
    desc: "Templates n8n, prompts prêts à l'emploi, checklists actionnables",
  },
];

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.7rem",
  color: "#E85D04",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export default function FormationSection() {
  return (
    <section id="formations">

      {/* ── 1. EN-TÊTE ── */}
      <div style={{ background: "#0E0E0E", padding: "80px 24px 56px" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={MONO}>008 / Formations IA</p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#F5F2EE",
            margin: "16px 0 20px",
          }}>
            Maîtrisez l&apos;IA. Vraiment.
          </h2>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "rgba(255,255,255,0.55)", maxWidth: 620, lineHeight: 1.7, marginBottom: 48 }}>
            Pas des slides. Des compétences concrètes pour automatiser votre quotidien avec les Agents IA, n8n et Claude.
          </p>
          {/* Stat bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 0", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
            {["4 modules", "100% pratique", "Indépendants & Salariés", "Accès à vie"].map((s, i) => (
              <div key={i} style={{ paddingRight: 40, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 700, color: "#F5F2EE" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. POUR QUI ── */}
      <div style={{ background: "#0E0E0E", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={{ ...MONO, marginBottom: 32 }}>Pour qui ?</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}>
            {profiles.map((p) => (
              <div key={p.num} style={{
                background: "#0E0E0E",
                padding: "40px 32px",
                transition: "border-bottom 0.2s",
                borderBottom: "2px solid transparent",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderBottomColor = "#E85D04")}
                onMouseLeave={e => (e.currentTarget.style.borderBottomColor = "transparent")}
              >
                <p style={{ ...MONO, marginBottom: 16 }}>{p.num}</p>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F5F2EE", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                <a href="#contact" style={{ fontSize: "0.8rem", color: "#E85D04", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                  Voir le programme →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. LES 4 MODULES ── */}
      <div style={{ background: "#0E0E0E", padding: "0 24px 80px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={{ ...MONO, marginBottom: 32 }}>Les 4 modules</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}>
            {modules.map((m) => (
              <div key={m.num} style={{
                background: "#0E0E0E",
                padding: "40px 32px",
                borderBottom: "2px solid transparent",
                transition: "border-bottom 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderBottomColor = "#E85D04")}
                onMouseLeave={e => (e.currentTarget.style.borderBottomColor = "transparent")}
              >
                <p style={{ ...MONO, marginBottom: 12 }}>{m.num}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#F5F2EE", marginBottom: 8 }}>{m.title}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#E85D04", letterSpacing: "0.06em", marginBottom: 12 }}>{m.duration}</p>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 20 }}>{m.desc}</p>
                <a href="#contact" style={{ fontSize: "0.8rem", color: "#E85D04", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                  Voir le module →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. PREUVES SOCIALES WHATSAPP ── */}
      <div style={{ background: "#F5F2EE", padding: "80px 24px", borderTop: "1px solid #E8E4DF" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={{ ...MONO, color: "#E85D04", marginBottom: 16 }}>Témoignages</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, letterSpacing: "-0.5px", color: "#0E0E0E", marginBottom: 12 }}>
            Ce que ça change, concrètement.
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.4)", marginBottom: 48 }}>
            Messages reçus de participants — non filtrés.
          </p>
          {/* Placeholder mosaïque — remplacer avec les vraies images */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 24,
          }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #E8E4DF",
                borderRadius: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transform: `rotate(${i % 2 === 0 ? 1.5 : -1.5}deg)`,
                minHeight: 160,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(0,0,0,0.2)", textAlign: "center", padding: 16 }}>
                  Screenshot<br />à venir
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. FORMAT PÉDAGOGIQUE ── */}
      <div style={{ background: "#F5F2EE", padding: "0 24px 80px", borderTop: "1px solid #E8E4DF" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={{ ...MONO, color: "#E85D04", marginBottom: 32 }}>Format pédagogique</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 40,
          }}>
            {pedagogie.map((p) => (
              <div key={p.num}>
                <p style={{ ...MONO, color: "#E85D04", marginBottom: 12 }}>{p.num}</p>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0E0E0E", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. TARIFS ── */}
      <div style={{ background: "#F5F2EE", padding: "0 24px 80px", borderTop: "1px solid #E8E4DF" }}>
        <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
          <p style={{ ...MONO, color: "#E85D04", marginBottom: 32 }}>Tarifs</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 720,
          }}>
            {/* SOLO */}
            <div style={{
              background: "#fff",
              border: "1px solid #E8E4DF",
              borderRadius: 8,
              padding: "40px 32px",
            }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#0E0E0E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>SOLO</p>
              <p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", marginBottom: 4 }}>490€</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(0,0,0,0.35)", marginBottom: 24 }}>ou 3x 165€</p>
              <p style={{ fontWeight: 600, color: "#0E0E0E", marginBottom: 16 }}>Accès complet vidéos</p>
              <ul style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 8 }}>
                {["4 modules vidéo", "Ressources & templates", "Accès à vie"].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#E85D04", fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: "inline-block",
                padding: "12px 24px",
                border: "2px solid #E85D04",
                color: "#E85D04",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: 4,
                textDecoration: "none",
                transition: "all 0.15s",
                width: "100%",
                textAlign: "center",
                boxSizing: "border-box",
              }}>
                Rejoindre la formation →
              </a>
            </div>

            {/* PRO */}
            <div style={{
              background: "#0E0E0E",
              border: "2px solid #E85D04",
              borderRadius: 8,
              padding: "40px 32px",
              position: "relative",
            }}>
              <span style={{
                position: "absolute",
                top: -12,
                left: "50%",
                transform: "translateX(-50%)",
                background: "#E85D04",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 99,
              }}>Populaire</span>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>PRO</p>
              <p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-1px", marginBottom: 4 }}>890€</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>ou 3x 300€</p>
              <p style={{ fontWeight: 600, color: "#F5F2EE", marginBottom: 16 }}>Vidéos + Lives + Communauté</p>
              <ul style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 8 }}>
                {["Tout Solo inclus", "3 mois de sessions live", "Communauté privée"].map((item) => (
                  <li key={item} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#E85D04", fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#E85D04",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: 4,
                textDecoration: "none",
                width: "100%",
                textAlign: "center",
                boxSizing: "border-box",
              }}>
                Rejoindre la formation →
              </a>
            </div>
          </div>

          {/* Garantie */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#E85D04", textAlign: "center", marginTop: 24, maxWidth: 720 }}>
            Garantie 14 jours satisfait ou remboursé
          </p>
        </div>
      </div>

      {/* ── 7. CTA FINAL ── */}
      <div style={{ background: "#E85D04", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.5px", color: "#fff", marginBottom: 16 }}>
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginBottom: 36, lineHeight: 1.7 }}>
            Rejoignez les indépendants et dirigeants qui automatisent déjà leur quotidien.
          </p>
          <a href="#contact" style={{
            display: "inline-block",
            padding: "14px 32px",
            border: "2px solid #fff",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.95rem",
            borderRadius: 4,
            textDecoration: "none",
          }}>
            Voir le programme complet →
          </a>
        </div>
      </div>

    </section>
  );
}
