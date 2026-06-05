import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nos agents IA — Claws",
  description: "Découvrez les agents IA autonomes développés et déployés par Claws : email, prospection, reporting, veille, finance, support client et plus. Alimentés par OpenClaw, tournant en local sur votre machine.",
  alternates: { canonical: "https://claws.fr/agents" },
  openGraph: {
    title: "Nos agents IA — Claws",
    description: "Agents IA autonomes développés par Claws. En production. Sur votre machine.",
    url: "https://claws.fr/agents",
  },
};

const agents = [
  {
    code: "01",
    name: "InboxZero",
    tagline: "Triage email autonome.",
    desc: "Classe, priorise et répond aux emails routiniers selon vos règles. Relances automatiques, détection d'urgences, résumé quotidien. Votre boite mail n'attend plus après vous.",
    tags: ["Gmail", "Outlook", "Relances", "Résumé"],
    metrics: "6h/semaine récupérées en moyenne",
    sector: "Tous secteurs",
  },
  {
    code: "02",
    name: "Prospect",
    tagline: "Prospection commerciale en pilote automatique.",
    desc: "Identifie des leads qualifiés, envoie les premiers messages, relance selon un calendrier précis, qualifie les réponses. Vous n'intervenez que quand c'est chaud.",
    tags: ["Email", "LinkedIn", "CRM", "Relances"],
    metrics: "+40% de devis envoyés",
    sector: "Freelances · Agences · B2B",
  },
  {
    code: "03",
    name: "Report",
    tagline: "Le reporting que vous n'avez jamais le temps de faire.",
    desc: "Agrège vos données (Stripe, Notion, Sheets, Airtable), rédige le rapport de la semaine et vous l'envoie le vendredi à 8h. Sans intervention humaine.",
    tags: ["Stripe", "Notion", "Google Sheets", "Airtable"],
    metrics: "Rapport hebdo en 0 min de votre temps",
    sector: "DAF · Agences · Startups",
    featured: true,
  },
  {
    code: "04",
    name: "Veille",
    tagline: "Votre équipe concurrence. Elle ne dort jamais.",
    desc: "Surveille vos concurrents, mots-clés, mentions de votre marque et secteur. Vous alerte en temps réel sur Telegram. Résumé hebdomadaire avec les points saillants.",
    tags: ["Web", "RSS", "Telegram", "Alertes"],
    metrics: "Veille 24/7, alerte en <5 min",
    sector: "Marketing · Startups · Médias",
  },
  {
    code: "05",
    name: "Finance",
    tagline: "La réconciliation comptable sans Excel.",
    desc: "Rapproche automatiquement Stripe et Qonto, détecte les écarts, génère les factures manquantes et prépare l'export comptable mensuel. Zéro saisie manuelle.",
    tags: ["Stripe", "Qonto", "Pennylane", "Facturation"],
    metrics: "3h de saisie mensuelle supprimées",
    sector: "Freelances · SaaS · E-commerce",
  },
  {
    code: "06",
    name: "Support",
    tagline: "Service client 24/7 sans recruter.",
    desc: "Répond aux questions fréquentes sur tous vos canaux simultanément. Escalade vers vous uniquement quand c'est nécessaire. Mémorise le contexte de chaque client.",
    tags: ["Telegram", "WhatsApp", "iMessage", "Email"],
    metrics: "80% des tickets résolus sans intervention",
    sector: "E-commerce · SaaS · Services",
    featured: false,
  },
  {
    code: "07",
    name: "Contenu",
    tagline: "Une idée. Dix formats.",
    desc: "Transforme un sujet ou un enregistrement vocal en article de blog, fil LinkedIn, newsletter et thread. Cohérent avec votre ton. Prêt à publier.",
    tags: ["Blog", "LinkedIn", "Newsletter", "Repurposing"],
    metrics: "10x plus de contenu, même budget temps",
    sector: "Créateurs · Consultants · Agences",
  },
  {
    code: "08",
    name: "Secrétaire",
    tagline: "L'assistant de direction que vous ne pouviez pas vous offrir.",
    desc: "Gère votre agenda, confirme les RDV, envoie les rappels, prend les notes de réunion et rédige les comptes-rendus. Disponible sur iMessage, Telegram et WhatsApp.",
    tags: ["Google Calendar", "Notion", "iMessage", "WhatsApp"],
    metrics: "RDV manqués : zéro",
    sector: "Dirigeants · Indépendants · Professions libérales",
  },
];

export default function AgentsPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* HERO */}
        <section style={{ paddingTop: 140, paddingBottom: 80, borderBottom: "1px solid rgba(14,14,14,0.1)", background: "#F5F2EE" }}>
          <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 var(--pad)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B6560", marginBottom: 32 }}>
              Claws · Agents en production
            </p>
            <h1 style={{ fontSize: "clamp(40px, 8vw, 96px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: 32, color: "#0E0E0E" }}>
              Nos agents.<br />
              <span style={{ color: "#E85D04" }}>Déployés.</span><br />
              En production.
            </h1>
            <div style={{ borderLeft: "3px solid #E85D04", paddingLeft: 20, maxWidth: 540 }}>
              <p style={{ fontSize: "clamp(17px, 2vw, 20px)", fontWeight: 500, lineHeight: 1.6, color: "rgba(14,14,14,0.7)" }}>
                Ces agents tournent sur des machines réelles, chez des clients réels.
                Pas des démos. Alimentés par OpenClaw, configurés par Claws pour votre métier.
              </p>
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/#contact" className="btn-primary">Obtenir un agent sur mesure →</a>
              <a href="/#offres" className="btn-secondary">Voir les offres</a>
            </div>
          </div>
        </section>

        {/* AGENTS GRID */}
        <section style={{ padding: "80px var(--pad)", background: "#F5F2EE" }}>
          <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 2, background: "rgba(14,14,14,0.08)" }}>
              {agents.map((agent) => (
                <div
                  key={agent.code}
                  style={{
                    background: agent.featured ? "#0E0E0E" : "#F5F2EE",
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    transition: "background 0.2s",
                  }}
                >
                  {/* Code */}
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#E85D04",
                    marginBottom: 24,
                  }}>
                    AGENT {agent.code}
                  </p>

                  {/* Name */}
                  <h2 style={{
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: agent.featured ? "#F5F2EE" : "#0E0E0E",
                    marginBottom: 8,
                  }}>
                    {agent.name}
                  </h2>

                  {/* Tagline */}
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: agent.featured ? "rgba(245,242,238,0.5)" : "#6B6560",
                    marginBottom: 20,
                    letterSpacing: "0.02em",
                  }}>
                    {agent.tagline}
                  </p>

                  {/* Desc */}
                  <p style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: agent.featured ? "rgba(245,242,238,0.7)" : "rgba(14,14,14,0.65)",
                    marginBottom: 28,
                    flexGrow: 1,
                  }}>
                    {agent.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {agent.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        border: agent.featured ? "1px solid rgba(245,242,238,0.15)" : "1px solid rgba(14,14,14,0.12)",
                        color: agent.featured ? "rgba(245,242,238,0.5)" : "#6B6560",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div style={{
                    borderTop: agent.featured ? "1px solid rgba(245,242,238,0.1)" : "1px solid rgba(14,14,14,0.08)",
                    paddingTop: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 12,
                  }}>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        color: "#E85D04",
                        marginBottom: 4,
                      }}>
                        {agent.metrics}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: agent.featured ? "rgba(245,242,238,0.3)" : "rgba(14,14,14,0.35)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                        {agent.sector}
                      </p>
                    </div>
                    <a href="/#contact" style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "#E85D04",
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                    }}>
                      Demander →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SUR MESURE */}
        <section style={{ background: "#0E0E0E", padding: "80px var(--pad)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
            <div style={{ display: "grid", gap: 48 }}>
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>
                  Agent sur mesure
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#F5F2EE", lineHeight: 1.15, marginBottom: 20, maxWidth: 640 }}>
                  Votre cas ne ressemble à aucun autre.<br />
                  <span style={{ color: "#E85D04" }}>On configure un agent pour ça.</span>
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
                  Les 8 agents ci-dessus sont nos configurations les plus courantes.
                  Si votre besoin est différent, on part d&apos;une feuille blanche.
                  Un appel, un brief, un agent calibré pour vous.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                  <a href="/#contact" className="btn-primary">Parler de mon projet →</a>
                  <a href="/securite" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "14px 28px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "all 0.15s",
                  }}>
                    Protocole sécurité →
                  </a>
                </div>
              </div>

              {/* Stack */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 48 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 24 }}>
                  Stack technique — tous nos agents
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {["OpenClaw", "Claude (Anthropic)", "GPT-4.1", "Llama 3 (local)", "Next.js", "Telegram Bot API", "Gmail API", "Google Calendar", "Stripe", "Qonto", "Notion API", "Airtable", "Brevo"].map((tech) => (
                    <span key={tech} style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      padding: "6px 14px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.4)",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
