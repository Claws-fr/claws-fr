import { getAllPosts } from "@/lib/posts";
import ContactTerminal from "@/components/ContactTerminal";
import NavBar from "@/components/NavBar";

const differentiators = [
  {
    icon: "01",
    title: "Spécialistes OpenClaw, pas généralistes IA",
    desc: "On ne fait que ça. On connaît OpenClaw de l'intérieur parce qu'on l'utilise au quotidien, on suit ses évolutions, on le débugge. Vous n'êtes pas notre cobaye.",
  },
  {
    icon: "02",
    title: "Vos données restent chez vous",
    desc: "Pas de cloud, pas de serveur tiers, pas d'API qui aspire vos emails. Votre agent tourne sur votre machine. Ce n'est pas une promesse marketing, c'est l'architecture.",
  },
  {
    icon: "03",
    title: "La même personne du début à la fin",
    desc: "Vous appelez, vous tombez sur quelqu'un qui connaît votre setup par cœur. Pas de centre d'appels, pas de numéro de ticket, pas d'escalade vers un N+1.",
  },
  {
    icon: "04",
    title: "Des agents plus intelligents que la config de base",
    desc: "On a passé des mois à optimiser les prompts et les paramètres sur des déploiements réels. Vos agents font moins d'erreurs et tiennent mieux dans le temps.",
  },
  {
    icon: "05",
    title: "Si ça ne marche pas, on revient",
    desc: "30 jours après l'installation, si votre agent ne fait pas ce qu'il devrait faire, on refait le travail gratuitement. Sans discussion.",
  },
  {
    icon: "06",
    title: "Telegram, WhatsApp et iMessage en même temps",
    desc: "Un seul agent, accessible depuis tous vos canaux dès l'installation. Vous n'avez pas à choisir ni à payer en supplément pour chaque canal.",
  },
];

const offers = [
  {
    code: "SETUP",
    price: "À partir de 189 €",
    title: "Installation OpenClaw",
    desc: "On installe et configure OpenClaw sur votre machine, on connecte votre canal de communication, et on reste disponible jusqu'à ce que vous soyez à l'aise.",
    cta: "Démarrer",
  },
  {
    code: "AGENT SUR MESURE",
    price: "Sur devis",
    title: "Agent configuré pour votre métier",
    desc: "On passe du temps à comprendre comment vous travaillez, puis on configure un agent qui fait vraiment ce dont vous avez besoin. Pas un template avec votre nom dessus.",
    cta: "Nous contacter",
    featured: true,
  },
  {
    code: "RETAINER",
    price: "À partir de 149 €/mois",
    title: "Suivi et évolutions dans le temps",
    desc: "Les mises à jour, le monitoring, les ajustements quand votre activité change. Vous avez un interlocuteur fixe qui connaît votre système.",
    cta: "En savoir plus",
  },
];

const steps = [
  {
    num: "01",
    title: "On écoute.",
    desc: "Un appel pour comprendre votre activité, vos outils et ce qui vous prend le plus de temps.",
  },
  {
    num: "02",
    title: "On configure.",
    desc: "Installation complète sur votre machine, sécurisée, testée. Vous ne touchez à rien.",
  },
  {
    num: "03",
    title: "Votre agent prend le relai.",
    desc: "Il gère, planifie, répond. Vous faites autre chose.",
  },
];

const faqItems = [
  {
    q: "C'est quoi exactement OpenClaw ?",
    a: "OpenClaw est une plateforme open-source qui fait tourner des agents IA sur votre machine. Concrètement, c'est ce qui permet à un agent de lire vos emails, répondre à vos messages Telegram ou chercher des infos sur le web, sans que vos données ne sortent de chez vous.",
  },
  {
    q: "En quoi c'est différent de ChatGPT ?",
    a: "ChatGPT vous répond quand vous lui parlez. Un agent OpenClaw travaille même quand vous ne lui parlez pas. Il surveille, agit, et vous prévient quand il a besoin de vous. C'est la différence entre un outil et un collaborateur.",
  },
  {
    q: "Combien ça coûte ?",
    a: "L'installation démarre à partir de 189 €. Ça dépend de votre configuration et du nombre de canaux à connecter. On fait un point avant de commencer pour qu'il n'y ait pas de surprise.",
  },
  {
    q: "Est-ce que mes données sont vraiment privées ?",
    a: "Oui. L'agent tourne en local sur votre machine. Il n'y a pas de serveur Claws qui reçoit vos données, pas de logs stockés chez nous. Le seul service externe qui voit vos requêtes, c'est Anthropic pour le modèle IA.",
  },
  {
    q: "Il faut quel matériel ?",
    a: "Un Mac Mini M4 est idéal : il consomme peu, ne fait aucun bruit et tient la charge en continu. Mais ça marche aussi sur n'importe quel autre Mac ou serveur Linux.",
  },
  {
    q: "On peut connecter plusieurs applications en même temps ?",
    a: "Oui, Telegram, WhatsApp, iMessage, Discord peuvent tous être actifs simultanément sur le même agent. Pas besoin d'en choisir un.",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <NavBar />

      <main>

        {/* HERO */}
        <section className="section hero-section">
          <p className="eyebrow">Paris · 2025 · Agents IA autonomes</p>
          <h1 className="hero-title">
            87 % des tâches répétitives de votre équipe{" "}
            <span className="accent">sont automatisables.</span>
          </h1>
          <div className="hero-sub">
            <p>Claws installe des agents IA qui travaillent à votre place, en continu, sans que vous ayez à surveiller quoi que ce soit.</p>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Discutons →</a>
            <a href="#offres" className="btn-secondary">Voir les offres</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">+200%</span>
              <span className="stat-label">de productivité mesurée</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">48h</span>
              <span className="stat-label">pour être opérationnel</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">0</span>
              <span className="stat-label">donnée dans le cloud</span>
            </div>
          </div>
        </section>

        {/* PROBLÈME */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">002 / Le problème</p>
            <h2 className="section-title">Ce que vos outils actuels ne font pas.</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card problem-card-bad">
              <p className="problem-label">ChatGPT, Copilot, Gemini</p>
              <h3>Ils répondent.</h3>
              <p>Vous posez une question, ils répondent. Ensuite c'est vous qui devez agir.</p>
              <ul className="problem-list">
                <li>❌ Pas d&apos;accès à vos outils</li>
                <li>❌ Aucune autonomie</li>
                <li>❌ Pas de mémoire entre les sessions</li>
                <li>❌ Vos données sur leurs serveurs</li>
              </ul>
            </div>
            <div className="problem-card problem-card-good">
              <p className="problem-label">Votre agent Claws</p>
              <h3>Il <em>agit</em>.</h3>
              <p>Il accède à vos outils, prend des décisions, exécute et vous rend compte quand c&apos;est fait.</p>
              <ul className="problem-list">
                <li>✓ Connecté à vos vrais outils</li>
                <li>✓ Autonome sur les tâches qu&apos;on lui confie</li>
                <li>✓ Il se souvient de votre contexte</li>
                <li>✓ Tout reste sur votre machine</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIFFÉRENCIATEURS */}
        <section className="section section-dark">
          <div className="section-header">
            <p className="section-tag light">003 / Pourquoi Claws</p>
            <h2 className="section-title light">Ce qui nous distingue vraiment.</h2>
          </div>
          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <div key={i} className="diff-card">
                <span className="diff-icon">{d.icon}</span>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OFFRES */}
        {/* Section Sécurité */}
        <section className="section" style={{ background: "#0E0E0E" }}>
          <div className="section-header">
            <p className="section-tag light">004 / Sécurité</p>
            <h2 className="section-title light">Installé blindé. Garanti 90 jours.</h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: 520, lineHeight: 1.75, marginBottom: 40 }}>
              OpenClaw est open-source. N&apos;importe qui peut l&apos;installer. Le problème : une mauvaise configuration expose votre machine entière. Claws applique un protocole de sécurité en 12 points sur chaque installation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, border: "1px solid rgba(255,255,255,0.07)", marginBottom: 40 }}>
            {[
              { icon: "01", title: "Gateway loopback uniquement", desc: "Jamais exposé sur le réseau." },
              { icon: "02", title: "Clés API en variables d'env", desc: "Jamais en clair dans les fichiers." },
              { icon: "03", title: "Zéro backdoor, zéro monitoring", desc: "La machine est 100% à vous après le setup." },
              { icon: "04", title: "Skills officiels uniquement", desc: "Aucun code tiers non audité." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 24px", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", marginBottom: 12 }}>{item.icon}</p>
                <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F5F2EE", margin: "0 0 6px" }}>{item.title}</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="/securite" style={{ display: "inline-block", border: "1.5px solid rgba(232,93,4,0.6)", color: "#E85D04", padding: "12px 24px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            Voir le Protocole Claws complet →
          </a>
        </section>

        <section id="offres" className="section">
          <div className="section-header">
            <p className="section-tag">005 / Offres</p>
            <h2 className="section-title">Ce qu&apos;on fait pour vous.</h2>
          </div>
          <div className="offers-grid">
            {offers.map((o, i) => (
              <div key={i} className={`offer-card ${o.featured ? "offer-featured" : ""}`}>
                {o.featured && <span className="offer-badge">Populaire</span>}
                <p className="offer-code">{o.code}</p>
                <p className="offer-price">{o.price}</p>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-desc">{o.desc}</p>
                <a href="#contact" className={o.featured ? "btn-primary" : "btn-outline"}>{o.cta} →</a>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">005 / Process</p>
            <h2 className="section-title">Comment ça se passe.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <p className="step-num">{s.num}</p>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">006 / Ressources</p>
            <h2 className="section-title">Ce qu&apos;on partage.</h2>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <p className="blog-category">{post.category}</p>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.description}</p>
                <p className="blog-meta">{post.readTime} de lecture</p>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/blog" className="btn-outline">Voir tous les articles →</a>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="section-header">
            <p className="section-tag">Questions</p>
            <h2 className="section-title">Ce qu&apos;on nous demande souvent.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-contact">
          <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 24px" }}>
            {/* Header */}
            <div style={{ marginBottom: 48 }}>
              <p className="section-tag light">Contact</p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#F5F2EE", letterSpacing: "-1.5px", lineHeight: 1.1, margin: "12px 0 16px" }}>
                Discutons.
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 420, margin: 0 }}>
                Une question, un projet, une installation à prévoir. On répond dans la journée.
              </p>
            </div>
            {/* Terminal centré */}
            <ContactTerminal />
            <p style={{ marginTop: 16, fontSize: "0.8rem", color: "rgba(255,255,255,0.2)" }}>
              Ou directement : <a href="mailto:contact@claws.fr" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}>contact@claws.fr</a>
            </p>
          </div>
        </section>

      </main>

      <footer className="footer">
        <img src="/logo-claws.png" alt="Claws" style={{height: '36px', width: 'auto', display: 'block', margin: '0 auto 12px'}} />
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
