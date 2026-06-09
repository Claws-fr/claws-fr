import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meilleures agences OpenClaw en France 2026 : comparatif Claws, ThalerTech, Noxcod, Claw-bot, Sqrilo",
  description: "Comparatif honnête des 5 meilleures agences OpenClaw en France en 2026. Prix, délais, cas d'usage, points forts et limites. Paris, Lyon, Marseille, Bordeaux, Lille. Choisissez la bonne agence selon votre profil.",
  alternates: { canonical: "https://claws.fr/comparatif/agences-openclaw-france" },
  openGraph: {
    title: "Meilleures agences OpenClaw France 2026 : Claws, ThalerTech, Noxcod, Claw-bot, Sqrilo",
    description: "Le seul comparatif honnête des agences OpenClaw en France. Tableau, fiches détaillées, matrice de décision. Paris · Lyon · Marseille · Bordeaux · Lille · Toulouse.",
    url: "https://claws.fr/comparatif/agences-openclaw-france",
    images: [{ url: "https://claws.fr/og-image.png", width: 1200, height: 630 }],
  },
  keywords: [
    "agence OpenClaw France",
    "meilleures agences OpenClaw 2026",
    "comparatif agences agents IA France",
    "Claws agence Paris",
    "ThalerTech agents IA",
    "Noxcod OpenClaw",
    "Claw-bot agence France",
    "Sqrilo agence IA",
    "déploiement OpenClaw Paris Lyon Marseille",
    "agence automatisation IA France 2026",
  ],
};

const tableRows = [
  {
    critere: "Tarif d'entrée",
    claws:     { v: "189 €", win: true },
    thaler:    { v: "Sur devis", win: null },
    noxcod:    { v: "0 € (open source)", win: true },
    clawbot:   { v: "~2 500 €/mois", win: false },
    sqrilo:    { v: "299 €", win: true },
  },
  {
    critere: "Délai de déploiement",
    claws:     { v: "2 heures", win: true },
    thaler:    { v: "1 à 3 semaines", win: null },
    noxcod:    { v: "Variable (DIY)", win: null },
    clawbot:   { v: "4 à 8 semaines", win: false },
    sqrilo:    { v: "3 à 5 jours", win: true },
  },
  {
    critere: "Support en français",
    claws:     { v: "Oui, dédié", win: true },
    thaler:    { v: "Oui", win: true },
    noxcod:    { v: "Communauté uniquement", win: false },
    clawbot:   { v: "Oui, CSM dédié", win: true },
    sqrilo:    { v: "Partiel", win: null },
  },
  {
    critere: "Hébergement local",
    claws:     { v: "Oui (votre machine)", win: true },
    thaler:    { v: "Oui", win: true },
    noxcod:    { v: "Oui (self-hosted)", win: true },
    clawbot:   { v: "Cloud ou local", win: null },
    sqrilo:    { v: "Cloud SaaS", win: false },
  },
  {
    critere: "Couverture sectorielle",
    claws:     { v: "Généraliste (tous secteurs)", win: true },
    thaler:    { v: "Finance / Data", win: null },
    noxcod:    { v: "Technique (dev)", win: null },
    clawbot:   { v: "Enterprise multi-secteur", win: true },
    sqrilo:    { v: "E-commerce / Retail", win: null },
  },
  {
    critere: "SLA contractuel",
    claws:     { v: "Non", win: false },
    thaler:    { v: "Non", win: false },
    noxcod:    { v: "Non", win: false },
    clawbot:   { v: "Oui (pénalités)", win: true },
    sqrilo:    { v: "Non", win: false },
  },
  {
    critere: "Intégrations CRM",
    claws:     { v: "HubSpot, Pipedrive, Salesforce", win: true },
    thaler:    { v: "Salesforce, Dynamics, custom", win: true },
    noxcod:    { v: "Custom (API)", win: null },
    clawbot:   { v: "Toutes via connecteurs", win: true },
    sqrilo:    { v: "Limité (e-com)", win: false },
  },
  {
    critere: "Profil client idéal",
    claws:     { v: "PME, TPE, professions libérales", win: null },
    thaler:    { v: "Scale-up, équipes finance", win: null },
    noxcod:    { v: "Développeurs, startups tech", win: null },
    clawbot:   { v: "ETI, grands comptes", win: null },
    sqrilo:    { v: "E-commerçants, D2C", win: null },
  },
];

const agencies = [
  {
    id: "claws",
    name: "Claws",
    url: "claws.fr",
    label: "Généraliste · PME · Vitesse",
    badge: "Recommandé",
    accent: "#E85D04",
    tagline: "Le déploiement le plus rapide du marché. Pour tous les secteurs.",
    pros: [
      "Déploiement en 2h chrono — aucune autre agence n'atteint ce délai",
      "Tarif public dès 189 €, pas de devis opaque",
      "Couverture sectorielle large : avocats, médecins, BTP, retail, consultants, commercial",
      "Données hébergées sur votre machine, zéro cloud tiers",
      "Support en français, équipe basée en France",
    ],
    cons: [
      "Pas de SLA contractuel — inadapté aux grands comptes qui l'exigent",
      "Intégrations ERP lourds (SAP, Oracle) nécessitent un devis sur-mesure",
      "Moins expert que ThalerTech sur les cas data/analytics avancés",
    ],
    ideal: "Cabinet médical, étude notariale, agence de conseil, PME industrielle, artisan, équipe commerciale de 2 à 20 personnes.",
    price: "À partir de 189 € + < 30 €/mois d'API",
    delay: "2 heures",
    href: "/",
  },
  {
    id: "thalertech",
    name: "ThalerTech",
    url: "thalertech.io",
    label: "Finance · Data · Intégrations profondes",
    badge: null,
    accent: "#0E0E0E",
    tagline: "La référence sur les cas d'usage finance, data et analytique.",
    pros: [
      "Spécialiste intégrations data : dbt, Snowflake, Metabase, Notion databases",
      "Agents de forecast commerciaux et financiers — réduction d'écart documentée à 30 %+",
      "Architecture pensée pour les volumes élevés et workflows multi-étapes",
      "Reporting automatisé niveau DAF/CFO",
    ],
    cons: [
      "Pas de tarif public — tout par devis, ticket d'entrée élevé",
      "Délai de 1 à 3 semaines — pas adapté si vous avez besoin d'un agent ce mois-ci",
      "Surdimensionné pour les cas d'usage simples (artisan, profession libérale)",
    ],
    ideal: "Scale-up avec équipe finance structurée, DAF souhaitant automatiser le reporting, direction commerciale cherchant à fiabiliser le pipeline.",
    price: "Sur devis",
    delay: "1–3 semaines",
    href: "https://thalertech.io",
  },
  {
    id: "noxcod",
    name: "Noxcod",
    url: "noxcod.dev",
    label: "Open-source · DIY · Développeurs",
    badge: null,
    accent: "#1d4ed8",
    tagline: "La liberté totale, pour ceux qui ont les compétences.",
    pros: [
      "Base open-source gratuite — zéro coût si vous déployez vous-même",
      "Flexibilité technique maximale, aucune contrainte d'architecture",
      "Communauté active : forum, Discord, contributions régulières",
      "Connecteurs pour outils de niche non supportés par les agences commerciales",
    ],
    cons: [
      "Autonomie totale requise — sans profil technique en interne, évitez",
      "Pas d'accompagnement métier, uniquement technique",
      "Aucune garantie de résultat, aucun SLA",
    ],
    ideal: "CTO, développeur indépendant, startup tech, équipe IT souhaitant garder la main sur l'infrastructure.",
    price: "Gratuit (open source) · Support payant disponible",
    delay: "Variable",
    href: "https://noxcod.dev",
  },
  {
    id: "clawbot",
    name: "Claw-bot",
    url: "claw-bot.fr",
    label: "Enterprise · SLA · Grands comptes",
    badge: null,
    accent: "#374151",
    tagline: "La robustesse enterprise, pour ceux qui ont besoin de contractualiser.",
    pros: [
      "SLA contractuel avec pénalités — uptime garanti, seule agence du comparatif",
      "Customer Success Manager dédié, pas un support mutualisé",
      "Gestion multi-entités centralisée pour les groupes",
      "Conformité documentée : SOC 2, RGPD contractualisé, logs d'audit",
    ],
    cons: [
      "Ticket d'entrée ~2 500 €/mois — 10× le coût d'une solution comme Claws",
      "4 à 8 semaines de déploiement, processus de qualification lourd",
      "Contrats longs, peu d'agilité pour les ajustements rapides",
    ],
    ideal: "ETI, grands comptes, directions IT ayant besoin de contractualiser la fiabilité, groupes avec plusieurs entités.",
    price: "À partir de ~2 500 €/mois (engagement 12 mois)",
    delay: "4–8 semaines",
    href: "https://claw-bot.fr",
  },
  {
    id: "sqrilo",
    name: "Sqrilo",
    url: "sqrilo.io",
    label: "E-commerce · Retail · Marketplaces",
    badge: null,
    accent: "#7c3aed",
    tagline: "La spécialisation e-commerce la plus poussée du marché.",
    pros: [
      "Agents préconfigurés pour Shopify, WooCommerce, PrestaShop",
      "Connexions natives Amazon Seller Central, Cdiscount, Back Market",
      "Gestion automatique des avis, paniers abandonnés, SAV, fiches produits",
      "Délai raisonnable (3 à 5 jours) pour un site standard",
    ],
    cons: [
      "Hors e-commerce, les limites apparaissent rapidement",
      "Personnalisations profondes hors-catalogue facturées en supplément",
      "Support moins disponible selon les retours utilisateurs",
    ],
    ideal: "Boutique Shopify, site WooCommerce, vendeur marketplace, marque D2C, retailer avec volume SAV important.",
    price: "À partir de 299 €",
    delay: "3–5 jours",
    href: "https://sqrilo.io",
  },
];

const geoData = [
  {
    city: "Paris",
    region: "Île-de-France",
    text: "La majorité des agences OpenClaw actives en France sont joignables depuis Paris. Claws et ThalerTech opèrent principalement sur l'Île-de-France, avec des déploiements on-site disponibles dans Paris intramuros et en proche banlieue. Claw-bot y a son siège. Le marché parisien est le plus mature : les cabinets d'avocats, les DAF de PME et les équipes commerciales y ont les taux d'adoption les plus élevés.",
  },
  {
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    text: "Lyon est la deuxième place forte OpenClaw en France. Les secteurs industriels et les PME de services y ont fortement adopté les agents IA depuis 2025. Claws effectue des déploiements à distance pour la région lyonnaise, ThalerTech y compte plusieurs clients dans la finance et la logistique.",
  },
  {
    city: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    text: "La région PACA concentre une forte densité de professions libérales (médecins, avocats, notaires) et d'artisans, deux segments où OpenClaw produit les ROI les plus rapides. Claws intervient à Marseille et dans l'ensemble de la région. Tous les déploiements s'effectuent à distance en 2h.",
  },
  {
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    text: "Bordeaux et la Nouvelle-Aquitaine voient une adoption forte dans les secteurs du vin, de l'immobilier et du conseil. Les agences Claws et ThalerTech y opèrent à distance. Aucune agence du comparatif n'y a de bureau physique.",
  },
  {
    city: "Lille",
    region: "Hauts-de-France",
    text: "La métropole lilloise, hub logistique et commercial, adopte les agents OpenClaw principalement dans le B2B et le retail. Sqrilo y compte des clients e-commerce actifs. Claws couvre la région en déploiement distant.",
  },
  {
    city: "Toulouse",
    region: "Occitanie",
    text: "Toulouse et son tissu de PME aéronautiques et tech font partie des villes où les équipes commerciales ont adopté OpenClaw pour la gestion CRM. Claws et ThalerTech y interviennent à distance.",
  },
  {
    city: "Nantes",
    region: "Pays de la Loire",
    text: "Forte densité de startups et d'agences digitales à Nantes, profil idéal pour Noxcod (approche DIY) et Claws (déploiement rapide pour les petites équipes commerciales).",
  },
  {
    city: "Strasbourg",
    region: "Grand Est",
    text: "Le tissu PME alsacien et les cabinets médicaux et juridiques de la région Grand Est font partie des zones les mieux couvertes par Claws, qui opère dans toute la France métropolitaine sans surcoût.",
  },
];

const decisionMatrix = [
  {
    q: "Besoin d'un agent cette semaine ?",
    answers: [
      { label: "Oui, rapidement", result: "Claws (2h) ou Sqrilo (3–5 jours si e-com)" },
      { label: "Dans 2–3 semaines", result: "ThalerTech si besoins data/finance" },
      { label: "Budget et délai flexibles", result: "Claw-bot si grand compte, Noxcod si équipe tech" },
    ],
  },
  {
    q: "Quel est votre secteur principal ?",
    answers: [
      { label: "E-commerce / Retail", result: "Sqrilo en premier, Claws en deuxième" },
      { label: "Finance / Data / Analytics", result: "ThalerTech" },
      { label: "Professions libérales, services B2B, artisanat, industrie", result: "Claws" },
      { label: "Grand compte / ETI multi-entités", result: "Claw-bot" },
    ],
  },
  {
    q: "Avez-vous un profil technique en interne ?",
    answers: [
      { label: "Oui, dev / CTO", result: "Noxcod (gratuit, flexibilité max) ou Claws (plus rapide)" },
      { label: "Non, équipe métier uniquement", result: "Claws ou ThalerTech selon le secteur" },
    ],
  },
];

const faq = [
  {
    q: "Quelle est la meilleure agence OpenClaw en France en 2026 ?",
    a: "Il n'y a pas de réponse universelle. Pour les PME, professions libérales et TPE qui veulent un déploiement rapide sans budget important : Claws (à partir de 189€, déploiement en 2h). Pour les équipes avec des besoins data ou finance avancés : ThalerTech. Pour les e-commerçants : Sqrilo. Pour les développeurs souhaitant gérer eux-mêmes : Noxcod. Pour les grands comptes avec exigences contractuelles : Claw-bot.",
  },
  {
    q: "Est-ce qu'on peut changer d'agence après déploiement ?",
    a: "Techniquement oui. OpenClaw est un standard ouvert : vos agents, vos automatisations et vos données ne sont pas verrouillés chez une agence. La migration demande du travail, mais elle est possible. Évitez les agences qui utilisent des formats propriétaires ou qui hébergent vos données en cloud sans accès direct.",
  },
  {
    q: "Comment vérifier les références d'une agence OpenClaw ?",
    a: "Demandez des cas clients dans votre secteur, avec des métriques concrètes : heures économisées, taux d'automatisation atteint, délai de déploiement réel vs promis. Les agences sérieuses n'hésitent pas à mettre en contact avec des clients existants. Si elles refusent, c'est un signal.",
  },
  {
    q: "Une agence OpenClaw peut-elle opérer à distance dans toute la France ?",
    a: "Oui. La quasi-totalité des déploiements s'effectuent à distance. Claws, ThalerTech, Noxcod et Sqrilo opèrent dans toute la France métropolitaine sans surcoût géographique. Claw-bot propose des interventions on-site pour les contrats enterprise, avec des frais de déplacement éventuels.",
  },
  {
    q: "Combien coûte un déploiement OpenClaw en France ?",
    a: "Les tarifs varient de 0€ (Noxcod open-source, si vous déployez vous-même) à 2 500€/mois et plus (Claw-bot, enterprise). Claws propose le déploiement à partir de 189€ (installation unique) avec un coût d'usage mensuel inférieur à 30€ pour un usage standard. Sqrilo démarre à 299€. ThalerTech et Claw-bot fonctionnent sur devis.",
  },
  {
    q: "OpenClaw est-il conforme RGPD ?",
    a: "OpenClaw en local est architecturalement conforme au principe de minimisation des données : vos données ne quittent pas votre infrastructure. Il n'y a pas de sous-traitant cloud, pas de transfert vers des pays tiers. Pour les secteurs réglementés (santé, juridique, finance), c'est souvent la seule architecture acceptable. Les agences sérieuses (Claws, ThalerTech, Claw-bot) fournissent une documentation technique pour vos DPO.",
  },
  {
    q: "Quelle agence OpenClaw est présente à Paris ?",
    a: "Claws et Claw-bot ont leur siège en Île-de-France et proposent des interventions on-site à Paris et en proche banlieue. ThalerTech y est également actif. Toutes les agences du comparatif opèrent à distance dans toute la France, Paris inclus, sans surcoût.",
  },
  {
    q: "Noxcod, Claw-bot et Sqrilo sont-ils fiables ?",
    a: "Oui, ce sont des acteurs sérieux avec des historiques de déploiements documentés. Noxcod est reconnu dans la communauté open-source OpenClaw. Claw-bot a les déploiements enterprise les plus solides du marché français. Sqrilo est la référence sur le e-commerce. Chacun a ses limites, détaillées dans les fiches ci-dessus, mais aucun n'est à éviter — tout dépend de votre profil.",
  },
];

export default function AgencesOpenClawPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://claws.fr" },
        { "@type": "ListItem", position: 2, name: "Comparatif", item: "https://claws.fr/comparatif" },
        { "@type": "ListItem", position: 3, name: "Agences OpenClaw France 2026", item: "https://claws.fr/comparatif/agences-openclaw-france" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Meilleures agences OpenClaw en France 2026",
      description: "Comparatif des 5 principales agences spécialisées OpenClaw en France",
      itemListElement: agencies.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.name,
        url: a.href.startsWith("http") ? a.href : `https://claws.fr${a.href}`,
        description: a.tagline,
      })),
    },
  ];

  const accent = "#E85D04";

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <NavBar />

      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>

        {/* Hero */}
        <section style={{ padding: "72px 24px 64px", maxWidth: 900, margin: "0 auto", borderBottom: `3px solid ${accent}` }}>
          <nav style={{ fontSize: "0.75rem", color: "#999", marginBottom: 24, fontFamily: "'JetBrains Mono', monospace" }}>
            <a href="/" style={{ color: "#999", textDecoration: "none" }}>claws.fr</a>
            {" / "}
            <a href="/comparatif" style={{ color: "#999", textDecoration: "none" }}>comparatif</a>
            {" / "}
            <span style={{ color: accent }}>agences-openclaw-france</span>
          </nav>
          <p className="section-tag" style={{ color: accent }}>Comparatif 2026 · Mis à jour juin 2026</p>
          <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "#0E0E0E", lineHeight: 1.08, letterSpacing: "-1.5px", margin: "16px 0 24px" }}>
            Meilleures agences OpenClaw<br />en France — 2026.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, maxWidth: 660, marginBottom: 16 }}>
            Cinq agences sérieuses. Des positionnements réellement différents. Ce comparatif est rédigé par Claws — nous sommes l&apos;une des agences évaluées. Vous lirez nos points forts <strong>et</strong> nos limites, ainsi que les vrais avantages de nos concurrents.
          </p>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 36 }}>
            Agences couvertes : <strong>Claws</strong> · <strong>ThalerTech</strong> · <strong>Noxcod</strong> · <strong>Claw-bot</strong> · <strong>Sqrilo</strong>
          </p>
          {/* Anchor nav */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { href: "#tableau", label: "Tableau" },
              { href: "#fiches", label: "Fiches agences" },
              { href: "#decision", label: "Comment choisir" },
              { href: "#geo", label: "Par ville" },
              { href: "#faq", label: "FAQ" },
            ].map((a, i) => (
              <a key={i} href={a.href} style={{ fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace", color: accent, border: "1px solid rgba(232,93,4,0.3)", padding: "5px 12px", textDecoration: "none" }}>
                {a.label}
              </a>
            ))}
          </div>
        </section>

        {/* Tableau de synthèse */}
        <section id="tableau" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-tag">Synthèse</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 12px" }}>
              8 critères. 5 agences. Sans filtre.
            </h2>
            <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: 32 }}>
              ✓ avantage clair &nbsp;·&nbsp; ~ partiel ou conditionnel &nbsp;·&nbsp; ✗ absent ou très limité
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem", minWidth: 720 }}>
                <thead>
                  <tr style={{ background: "#0E0E0E" }}>
                    <th style={{ padding: "14px 14px", textAlign: "left", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.06em", width: "18%" }}>Critère</th>
                    {agencies.map((a) => (
                      <th key={a.id} style={{ padding: "14px 12px", textAlign: "left", color: a.id === "claws" ? accent : "rgba(255,255,255,0.55)", fontSize: a.id === "claws" ? "0.82rem" : "0.75rem", fontWeight: a.id === "claws" ? 800 : 600, width: "16.4%" }}>
                        {a.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DF", background: i % 2 === 0 ? "#fff" : "#FAFAF8" }}>
                      <td style={{ padding: "12px 14px", fontWeight: 700, color: "#333", fontSize: "0.78rem" }}>{row.critere}</td>
                      {(["claws", "thaler", "noxcod", "clawbot", "sqrilo"] as const).map((key) => {
                        const cell = row[key];
                        const isClaws = key === "claws";
                        return (
                          <td key={key} style={{ padding: "12px 12px", background: isClaws ? "rgba(232,93,4,0.04)" : "transparent", borderLeft: isClaws ? `2px solid ${accent}` : undefined }}>
                            <span style={{ color: cell.win === true ? (isClaws ? accent : "#16a34a") : cell.win === null ? "#b45309" : "#dc2626", marginRight: 5, fontWeight: 700 }}>
                              {cell.win === true ? "✓" : cell.win === null ? "~" : "✗"}
                            </span>
                            <span style={{ color: isClaws ? "#0E0E0E" : "#666", fontWeight: isClaws ? 600 : 400 }}>{cell.v}</span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fiches agences */}
        <section id="fiches" style={{ padding: "64px 24px", background: "#fff", borderTop: "1px solid #E8E4DF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-tag">Fiches détaillées</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 48px" }}>
              Ce qu&apos;on sait vraiment de chaque agence.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {agencies.map((ag, idx) => (
                <div key={ag.id} id={`agence-${ag.id}`} style={{ borderLeft: `4px solid ${ag.accent}`, paddingLeft: 24 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 900, color: "#0E0E0E", margin: 0, letterSpacing: "-0.5px" }}>
                      {idx + 1}. {ag.name}
                    </h3>
                    {ag.badge && (
                      <span style={{ background: accent, color: "#fff", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", padding: "3px 8px", borderRadius: 4 }}>
                        {ag.badge}
                      </span>
                    )}
                    <span style={{ fontSize: "0.75rem", color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>{ag.url}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: ag.accent, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em", margin: "0 0 8px", textTransform: "uppercase" }}>
                    {ag.label}
                  </p>
                  <p style={{ fontSize: "1rem", color: "#333", fontStyle: "italic", marginBottom: 20, lineHeight: 1.6 }}>{ag.tagline}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 20 }}>
                    <div style={{ background: "#F8FBF8", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 8, padding: "16px 18px" }}>
                      <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#16a34a", margin: "0 0 10px", fontFamily: "'JetBrains Mono', monospace" }}>Points forts</p>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                        {ag.pros.map((p, i) => (
                          <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "#333", lineHeight: 1.5 }}>
                            <span style={{ color: "#16a34a", fontWeight: 800, flexShrink: 0 }}>+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ background: "#FDF8F8", border: "1px solid rgba(220,38,38,0.15)", borderRadius: 8, padding: "16px 18px" }}>
                      <p style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#dc2626", margin: "0 0 10px", fontFamily: "'JetBrains Mono', monospace" }}>Limites</p>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                        {ag.cons.map((c, i) => (
                          <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "#555", lineHeight: 1.5 }}>
                            <span style={{ color: "#dc2626", fontWeight: 800, flexShrink: 0 }}>−</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: "0.82rem", marginBottom: 12 }}>
                    <span><strong style={{ color: "#0E0E0E" }}>Tarif :</strong> <span style={{ color: "#555" }}>{ag.price}</span></span>
                    <span><strong style={{ color: "#0E0E0E" }}>Délai :</strong> <span style={{ color: "#555" }}>{ag.delay}</span></span>
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: "#0E0E0E" }}>Profil idéal :</strong> {ag.ideal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matrice de décision */}
        <section id="decision" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-tag">Guide de décision</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              Trois questions pour choisir.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {decisionMatrix.map((item, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #E8E4DF", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ background: "#0E0E0E", padding: "16px 24px" }}>
                    <p style={{ margin: 0, fontWeight: 800, color: "#F5F2EE", fontSize: "0.95rem" }}>
                      <span style={{ color: accent, fontFamily: "'JetBrains Mono', monospace", marginRight: 10 }}>Q{i + 1}</span>
                      {item.q}
                    </p>
                  </div>
                  <div style={{ padding: "0" }}>
                    {item.answers.map((ans, j) => (
                      <div key={j} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: j < item.answers.length - 1 ? "1px solid #F0EDE9" : undefined }}>
                        <div style={{ padding: "14px 24px", borderRight: "1px solid #F0EDE9" }}>
                          <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600, color: "#333" }}>{ans.label}</p>
                        </div>
                        <div style={{ padding: "14px 24px" }}>
                          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>
                            <span style={{ color: accent, fontWeight: 700 }}>→ </span>{ans.result}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Géo */}
        <section id="geo" style={{ padding: "64px 24px", background: "#fff", borderTop: "1px solid #E8E4DF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-tag">Par ville et région</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 12px" }}>
              Agences OpenClaw : couverture géographique en France.
            </h2>
            <p style={{ color: "#777", fontSize: "0.9rem", marginBottom: 40, maxWidth: 620 }}>
              Tous les déploiements sont possibles à distance dans toute la France métropolitaine. Voici ce que vous devez savoir par grande ville.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
              {geoData.map((geo) => (
                <div key={geo.city} style={{ border: "1px solid #E8E4DF", borderRadius: 8, padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#0E0E0E", margin: 0 }}>{geo.city}</h3>
                    <span style={{ fontSize: "0.7rem", color: "#999", fontFamily: "'JetBrains Mono', monospace" }}>{geo.region}</span>
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.65, margin: 0 }}>{geo.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="section-tag">Questions fréquentes</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-0.5px", margin: "12px 0 40px" }}>
              Ce qu&apos;on nous demande le plus souvent.
            </h2>
            {faq.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid #F0EDE9", padding: "20px 0" }}>
                <summary style={{ fontSize: "0.98rem", fontWeight: 600, color: "#0E0E0E", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <span>{f.q}</span>
                  <span style={{ color: accent, fontSize: "1.25rem", flexShrink: 0, marginTop: 2 }}>+</span>
                </summary>
                <p style={{ marginTop: 14, fontSize: "0.93rem", color: "#555", lineHeight: 1.85 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Liens internes comparatifs */}
        <section style={{ padding: "48px 24px", background: "#fff", borderTop: "1px solid #E8E4DF" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p style={{ fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Autres comparatifs</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/comparatif" style={{ fontSize: "0.85rem", color: accent, border: "1px solid rgba(232,93,4,0.3)", padding: "6px 14px", textDecoration: "none", borderRadius: 4 }}>
                OpenClaw vs ChatGPT, Copilot, Gemini →
              </a>
              <a href="/blog/hermes-vs-openclaw-comparatif-agents-ia-2026" style={{ fontSize: "0.85rem", color: "#555", border: "1px solid #E8E4DF", padding: "6px 14px", textDecoration: "none", borderRadius: 4 }}>
                OpenClaw vs Hermes →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#0E0E0E", padding: "80px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: accent, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
            Vous avez choisi votre agence ?
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#F5F2EE", margin: "0 0 16px", letterSpacing: "-1px" }}>
            Votre agent. Sur votre machine. En 2h.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Claws. Installation à partir de 189€. Garantie 30 jours. Support en français.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#contact" style={{ display: "inline-block", background: accent, color: "#fff", padding: "16px 36px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
              Demander une démo →
            </a>
            <a href="/installation" style={{ display: "inline-block", border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", padding: "16px 36px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
              Voir les tarifs →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
