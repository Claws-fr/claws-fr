import NavBar from "@/components/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatif 2026 : OpenClaw vs ChatGPT, Copilot, Gemini | Claws",
  description: "Comparatif honnête entre OpenClaw et les assistants IA du marché : ChatGPT, Copilot, Gemini, Siri. Prix réel, vie privée, autonomie, open source. Claws, Paris.",
  alternates: { canonical: "https://claws.fr/comparatif" },
  openGraph: {
    title: "OpenClaw vs ChatGPT, Copilot, Gemini : lequel choisir en 2026 ?",
    description: "Comparatif honnête entre OpenClaw et les assistants IA du marché. Prix, vie privée, autonomie, open source. Pas de bullshit.",
    url: "https://claws.fr/comparatif",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
};

const comparatifData = [
  {
    critere: "Données privées",
    claws: { label: "100% local", positive: true },
    chatgpt: { label: "Cloud OpenAI", positive: false },
    copilot: { label: "Cloud Microsoft", positive: false },
    gemini: { label: "Cloud Google", positive: false },
    siri: { label: "Cloud Apple partiel", positive: null },
  },
  {
    critere: "Autonomie réelle",
    claws: { label: "Agit seul", positive: true },
    chatgpt: { label: "Répond uniquement", positive: false },
    copilot: { label: "Actions Office limitées", positive: null },
    gemini: { label: "Actions Google limitées", positive: null },
    siri: { label: "Très limité", positive: false },
  },
  {
    critere: "Personnalisation",
    claws: { label: "Totale (skills, voix, persona)", positive: true },
    chatgpt: { label: "GPTs partiels", positive: null },
    copilot: { label: "Limitée", positive: null },
    gemini: { label: "Limitée", positive: null },
    siri: { label: "Quasi nulle", positive: false },
  },
  {
    critere: "Intégrations",
    claws: { label: "Email, agenda, SMS, domotique, SSH…", positive: true },
    chatgpt: { label: "Plugins tiers", positive: null },
    copilot: { label: "Microsoft 365 uniquement", positive: null },
    gemini: { label: "Google Workspace uniquement", positive: null },
    siri: { label: "Écosystème Apple uniquement", positive: null },
  },
  {
    critere: "Open source",
    claws: { label: "100%", positive: true },
    chatgpt: { label: "Non", positive: false },
    copilot: { label: "Non", positive: false },
    gemini: { label: "Non", positive: false },
    siri: { label: "Non", positive: false },
  },
  {
    critere: "Prix mensuel",
    claws: { label: "0€ (logiciel) + 189€ installation une fois", positive: true },
    chatgpt: { label: "20-25€/mois", positive: false },
    copilot: { label: "22€/mois", positive: false },
    gemini: { label: "22€/mois", positive: false },
    siri: { label: "Inclus Apple (mais écosystème fermé)", positive: null },
  },
  {
    critere: "Fonctionne hors ligne",
    claws: { label: "Oui (modèles locaux)", positive: true },
    chatgpt: { label: "Non", positive: false },
    copilot: { label: "Non", positive: false },
    gemini: { label: "Non", positive: false },
    siri: { label: "Basique uniquement", positive: null },
  },
];

const faq = [
  {
    q: "OpenClaw est-il vraiment plus sûr que ChatGPT pour ma vie privée ?",
    a: "Oui, structurellement. ChatGPT, Copilot et Gemini envoient vos requêtes sur des serveurs cloud américains. OpenClaw tourne en local sur votre machine — vos emails, documents et conversations ne quittent jamais votre disque dur. C'est une différence d'architecture, pas juste de politique de confidentialité."
  },
  {
    q: "Quelle est la différence entre OpenClaw et un agent GPT ?",
    a: "Un GPT répond à des questions. OpenClaw agit. Il peut lire vos emails et y répondre, gérer votre calendrier, envoyer des messages, exécuter des scripts, surveiller des sites web et enchaîner des tâches complexes de façon autonome. C'est la différence entre un conseiller et un collaborateur."
  },
  {
    q: "Peut-on vraiment changer le modèle IA d'OpenClaw ?",
    a: "Oui. OpenClaw fonctionne avec Claude (Anthropic), GPT-4 (OpenAI), Llama ou Mistral en local, et d'autres. Vous n'êtes pas lié à un fournisseur. Si Anthropic augmente ses prix ou change ses conditions, vous changez de modèle en 5 minutes."
  },
  {
    q: "Combien coûte vraiment OpenClaw sur un an ?",
    a: "Le logiciel est gratuit et open source. Vous payez l'installation professionnelle par Claws (à partir de 189€, une seule fois) et éventuellement votre clé API pour le modèle IA choisi (environ 10 à 30€/mois selon l'usage). Total sur un an : 189€ + ~120€ API = ~309€. ChatGPT Plus coûte 240€/an, sans autonomie réelle, et recommence chaque année."
  },
  {
    q: "OpenClaw fonctionne-t-il sans connexion internet ?",
    a: "En partie, oui. Avec un modèle local comme Llama ou Mistral via Ollama, OpenClaw fonctionne hors ligne pour la plupart des tâches. C'est particulièrement utile dans les secteurs avec des contraintes de connectivité (santé, juridique, sites industriels). ChatGPT, Copilot et Gemini sont totalement inutilisables sans internet."
  },
  {
    q: "Pourquoi Siri et Copilot n'arrivent pas au niveau d'OpenClaw ?",
    a: "Siri est conçu pour l'écosystème Apple, pas pour l'autonomie professionnelle. Copilot est un add-on Microsoft 365 — excellent dans cet écosystème, mais limité en dehors. OpenClaw est conçu dès le départ comme un agent autonome qui s'intègre à votre environnement existant, quel qu'il soit."
  },
  {
    q: "Est-ce que l'installation par Claws est vraiment nécessaire ?",
    a: "Non, si vous êtes développeur ou très à l'aise techniquement. OpenClaw est open source, la documentation est publique. Mais l'installation sécurisée (chiffrement, permissions, configuration des intégrations, tests) prend 4 à 8 heures pour quelqu'un qui connaît bien l'outil. Claws le fait en 48h avec une garantie de 30 jours."
  },
];

export default function ComparatifPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar />

      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ padding: "72px 24px 64px", maxWidth: 820, margin: "0 auto", borderBottom: "3px solid #E85D04" }}>
          <p className="section-tag" style={{ color: "#E85D04" }}>Comparatif 2026</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#0E0E0E", lineHeight: 1.1, letterSpacing: "-1.5px", margin: "16px 0 24px" }}>
            OpenClaw vs ChatGPT, Copilot, Gemini : lequel choisir en 2026 ?
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#555", lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
            Un comparatif sans bullshit marketing entre OpenClaw et les assistants IA les plus utilisés. Prix réel, vie privée, autonomie, open source.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              Demander une démo →
            </a>
            <a href="/faq" style={{ display: "inline-block", border: "1.5px solid #0E0E0E", color: "#0E0E0E", padding: "14px 28px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
              Voir la FAQ complète
            </a>
          </div>
        </section>

        {/* Table comparatif */}
        <section style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <p className="section-tag">Vue d'ensemble</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              La comparaison directe
            </h2>

            {/* Mobile: cartes par critère */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", minWidth: 600 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #0E0E0E" }}>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#0E0E0E", width: "18%" }}>Critère</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "#E85D04", background: "rgba(232,93,4,0.05)", width: "22%" }}>OpenClaw via Claws</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#555", width: "15%" }}>ChatGPT Plus</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#555", width: "15%" }}>Copilot Pro</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#555", width: "15%" }}>Gemini Adv.</th>
                    <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600, color: "#555", width: "15%" }}>Siri</th>
                  </tr>
                </thead>
                <tbody>
                  {comparatifData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DF", background: i % 2 === 0 ? "#fff" : "transparent" }}>
                      <td style={{ padding: "14px 16px", fontWeight: 600, color: "#0E0E0E", fontSize: "0.85rem" }}>{row.critere}</td>
                      <td style={{ padding: "14px 16px", background: "rgba(232,93,4,0.04)" }}>
                        <span style={{ color: "#E85D04", fontWeight: 700, marginRight: 6 }}>
                          {row.claws.positive === true ? "✓" : row.claws.positive === null ? "~" : "✗"}
                        </span>
                        <span style={{ color: "#0E0E0E", fontWeight: 600, fontSize: "0.85rem" }}>{row.claws.label}</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <span style={{ color: row.chatgpt.positive === true ? "#16a34a" : row.chatgpt.positive === null ? "#92400e" : "#dc2626", marginRight: 6 }}>
                          {row.chatgpt.positive === true ? "✓" : row.chatgpt.positive === null ? "~" : "✗"}
                        </span>
                        <span style={{ color: "#555", fontSize: "0.85rem" }}>{row.chatgpt.label}</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <span style={{ color: row.copilot.positive === true ? "#16a34a" : row.copilot.positive === null ? "#92400e" : "#dc2626", marginRight: 6 }}>
                          {row.copilot.positive === true ? "✓" : row.copilot.positive === null ? "~" : "✗"}
                        </span>
                        <span style={{ color: "#555", fontSize: "0.85rem" }}>{row.copilot.label}</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <span style={{ color: row.gemini.positive === true ? "#16a34a" : row.gemini.positive === null ? "#92400e" : "#dc2626", marginRight: 6 }}>
                          {row.gemini.positive === true ? "✓" : row.gemini.positive === null ? "~" : "✗"}
                        </span>
                        <span style={{ color: "#555", fontSize: "0.85rem" }}>{row.gemini.label}</span>
                      </td>
                      <td style={{ padding: "14px 16px" }}>
                        <span style={{ color: row.siri.positive === true ? "#16a34a" : row.siri.positive === null ? "#92400e" : "#dc2626", marginRight: 6 }}>
                          {row.siri.positive === true ? "✓" : row.siri.positive === null ? "~" : "✗"}
                        </span>
                        <span style={{ color: "#555", fontSize: "0.85rem" }}>{row.siri.label}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 16, fontSize: "0.8rem", color: "#999" }}>
              ✓ avantage · ~ partiel · ✗ absent ou limité · Dernière mise à jour : février 2026
            </p>
          </div>
        </section>

        {/* Arguments développés */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <p className="section-tag">Analyse</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 48px" }}>
              Ce que le tableau ne dit pas.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {[
                {
                  num: "01",
                  title: "La vraie différence sur la vie privée",
                  body: "ChatGPT, Copilot et Gemini ne sont pas malveillants — ils envoient vos données sur le cloud parce que c'est leur modèle économique. C'est structurel. Votre boite mail, vos documents, vos requêtes passent par leurs serveurs. Pour beaucoup d'usages, c'est acceptable. Pour un avocat, un médecin, un DAF ou un entrepreneur qui traite des données sensibles, c'est un risque. OpenClaw tourne sur votre machine. La donnée ne bouge pas.",
                },
                {
                  num: "02",
                  title: "L'autonomie : chatbot vs agent",
                  body: "La plupart des assistants IA du marché sont des chatbots améliorés — vous posez une question, ils répondent. OpenClaw est un agent : il surveille, déclenche, agit et enchaîne des tâches sans que vous interveniez à chaque étape. La différence concrète : ChatGPT peut rédiger un email de relance. OpenClaw peut surveiller votre CRM, détecter un prospect silencieux depuis 14 jours, rédiger l'email personnalisé, l'envoyer et noter dans le CRM que la relance a été faite.",
                },
                {
                  num: "03",
                  title: "Le vrai coût sur 3 ans",
                  body: "ChatGPT Plus : 240€/an × 3 = 720€. Copilot Pro : 264€/an × 3 = 792€. Vous ne possédez rien, vous ne faites que louer. OpenClaw : 189€ d'installation + ~120€/an d'API = 189 + 360 = 549€ sur 3 ans. Et vous possédez votre configuration, vos automatisations, vos données. L'écart se creuse chaque année.",
                },
                {
                  num: "04",
                  title: "L'open source change les règles",
                  body: "OpenClaw est 100% open source. Vous pouvez auditer le code — pas besoin de faire confiance à une promesse marketing. Vous pouvez changer de modèle IA (Claude, GPT-4, Llama, Mistral) selon vos besoins. Vous pouvez ajouter des skills sur mesure pour votre métier. Aucun des concurrents dans ce comparatif n'offre ça.",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#E85D04", letterSpacing: "0.1em", paddingTop: 4 }}>{item.num}</div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 12px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "#0E0E0E", padding: "64px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0 }}>
            {[
              { value: "189€", label: "installation une seule fois (vs 240€/an pour ChatGPT)" },
              { value: "0€", label: "abonnement logiciel mensuel" },
              { value: "100%", label: "open source, auditable, modifiable" },
              { value: "48h", label: "pour être opérationnel avec garantie 30 jours" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#E85D04", margin: "0 0 8px", letterSpacing: "-1px" }}>{stat.value}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <p className="section-tag">Questions fréquentes</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              Vos questions sur le comparatif.
            </h2>
            {faq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #E8E4DF", padding: "20px 0" }}>
                <summary style={{ fontSize: "1rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: "#E85D04", fontSize: "1.25rem", flexShrink: 0, marginTop: 2 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: "0.95rem", color: "#555", lineHeight: 1.8 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Liens secteurs */}
        <section style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <p className="section-tag">Par profil</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              OpenClaw adapté à votre métier.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { href: "/solutions/entrepreneurs", label: "Entrepreneurs & Startups" },
                { href: "/solutions/freelances", label: "Freelances & Indépendants" },
                { href: "/solutions/createurs", label: "Créateurs de contenu" },
                { href: "/solutions/cfo", label: "DAF & Directeurs financiers" },
                { href: "/solutions/avocats", label: "Avocats & Cabinets juridiques" },
                { href: "/solutions/medecins", label: "Médecins & Santé" },
                { href: "/solutions/agences", label: "Agences & Consultants" },
                { href: "/solutions/btp", label: "BTP & Artisans" },
                { href: "/solutions/retail", label: "Commerce & Retail" },
              ].map((link, i) => (
                <a key={i} href={link.href} className="sector-card-link">
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Convaincu ?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F5F2EE", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Votre agent tourne en 48h. À partir de 189€.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Installation professionnelle. 30 jours de garantie. Si ça ne marche pas, on refait gratuitement.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: "#E85D04", color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
              Demander une démo →
            </a>
            <a href="/solutions/entrepreneurs" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "16px 36px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              Voir mon profil →
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-copy">© 2025 Claws, Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/faq">FAQ</a>
          <a href="/a-propos">À propos</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
