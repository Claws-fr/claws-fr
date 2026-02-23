import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Claws — Agents IA OpenClaw",
  description:
    "Toutes les réponses sur les agents IA autonomes, OpenClaw, l'installation locale et les services Claws. Prix, délais, compatibilité, RGPD.",
  alternates: { canonical: "https://claws.fr/faq" },
  openGraph: {
    title: "FAQ Claws — Agents IA OpenClaw",
    description:
      "Toutes les réponses sur les agents IA autonomes, OpenClaw, l'installation locale et les services Claws.",
    url: "https://claws.fr/faq",
  },
};

const faq = [
  {
    category: "OpenClaw — Les bases",
    questions: [
      {
        q: "Qu'est-ce qu'OpenClaw ?",
        a: "OpenClaw est un framework open-source qui permet de créer et déployer des agents IA autonomes sur votre propre machine. Contrairement aux solutions cloud comme ChatGPT ou Notion AI, OpenClaw tourne entièrement en local. Vos données ne quittent jamais votre ordinateur.",
      },
      {
        q: "Quelle est la différence entre un agent IA et ChatGPT ?",
        a: "ChatGPT répond à des questions. Un agent IA exécute des tâches de manière autonome et répétée, sans intervention humaine. Par exemple, un agent IA peut surveiller votre boîte mail toutes les heures, trier les messages, relancer automatiquement les clients en retard et mettre à jour un tableau de suivi. ChatGPT ne fait rien de tout ça sans que vous lui demandiez explicitement à chaque fois.",
      },
      {
        q: "OpenClaw est-il gratuit ?",
        a: "OpenClaw est open-source et gratuit à installer. Vous avez besoin d'une clé API pour le modèle de langage (Claude d'Anthropic, GPT-4, etc.), ce qui a un coût variable selon l'usage. Pour un usage professionnel typique, comptez entre 10 et 30 euros par mois en coût de modèle.",
      },
      {
        q: "Sur quels systèmes fonctionne OpenClaw ?",
        a: "OpenClaw fonctionne sur macOS, Linux et Windows. Pour un usage en production (agent actif 24h/24), un Mac Mini M1 ou M2 est la solution la plus courante en France. Un vieux PC Linux reconditionné fonctionne très bien aussi.",
      },
      {
        q: "OpenClaw est-il compatible RGPD ?",
        a: "Oui. Parce qu'OpenClaw tourne localement, aucune donnée n'est envoyée à un tiers hors de votre contrôle. La seule exception concerne les appels au modèle de langage (ex: Anthropic). Pour les données vraiment sensibles, des modèles locaux comme Mistral ou LLaMA peuvent être utilisés, ce qui rend le système 100% offline.",
      },
    ],
  },
  {
    category: "Installation et configuration",
    questions: [
      {
        q: "Combien de temps prend l'installation d'OpenClaw ?",
        a: "Une installation standard prend entre 2 et 4 heures pour quelqu'un de technique. Pour un non-technicien, comptez une journée complète. Claws installe et configure OpenClaw en 48 heures ouvrées, sans que vous ayez à toucher à une ligne de commande.",
      },
      {
        q: "Faut-il être développeur pour utiliser OpenClaw ?",
        a: "Pour l'installation initiale, oui. Pour l'utilisation quotidienne, non. Une fois configuré, l'agent tourne seul. Vous interagissez avec lui via Telegram ou une interface web, comme vous le feriez avec n'importe quelle application.",
      },
      {
        q: "Quel matériel faut-il pour faire tourner OpenClaw ?",
        a: "Un Mac Mini M1 reconditionné (environ 300 euros) est la solution idéale pour les professionnels français. Il tourne 24h/24, consomme peu d'énergie (environ 10W), et n'a pas de ventilateur audible. Un PC Linux avec 8 Go de RAM minimum fonctionne aussi très bien.",
      },
      {
        q: "Peut-on installer OpenClaw sur un serveur cloud ?",
        a: "Oui, techniquement. Mais l'intérêt principal d'OpenClaw est précisément de ne pas dépendre du cloud. Si vous installez sur un VPS, vos données transitent quand même par un serveur tiers. Pour les professionnels soucieux du RGPD, l'installation locale sur votre propre machine est recommandée.",
      },
      {
        q: "OpenClaw peut-il être connecté à mes outils existants ?",
        a: "Oui. OpenClaw s'intègre avec les emails (Gmail, Outlook), les calendriers, Notion, Slack, les fichiers locaux, les APIs web, et bien d'autres. La configuration des connecteurs fait partie du travail d'installation.",
      },
    ],
  },
  {
    category: "Services Claws",
    questions: [
      {
        q: "Qu'est-ce que Claws ?",
        a: "Claws est la première agence française spécialisée dans l'installation et la maintenance d'agents IA autonomes OpenClaw. On installe, configure et maintient des agents qui tournent sur votre machine, en local, sans cloud imposé.",
      },
      {
        q: "Où est basée Claws ?",
        a: "Claws est basée à Paris, France. On intervient sur toute la France, principalement à distance.",
      },
      {
        q: "Combien coute une installation par Claws ?",
        a: "L'installation OpenClaw commence à 189 euros. Ce forfait comprend l'installation complète sur votre machine, la configuration d'un premier agent adapté à votre activité, et 30 jours de garantie. Pour les projets plus complexes (plusieurs agents, intégrations sur mesure), un devis est établi après un appel de découverte.",
      },
      {
        q: "Claws propose-t-il un service de maintenance ?",
        a: "Oui. Le retainer mensuel commence à 149 euros par mois. Il comprend les mises à jour d'OpenClaw, la surveillance des agents, les ajustements de configuration et le support en cas de problème. La plupart des clients passent au retainer après la première installation.",
      },
      {
        q: "Quel est le délai pour une installation ?",
        a: "48 heures ouvrées après la signature du devis et le paiement. Pour les projets complexes avec de nombreuses intégrations, comptez une semaine.",
      },
      {
        q: "Claws travaille-t-il avec des non-techniciens ?",
        a: "Oui, c'est même notre cible principale. On s'adapte à votre niveau technique. Vous n'avez pas besoin de comprendre comment fonctionne OpenClaw pour en bénéficier. Notre travail est précisément de rendre ça accessible.",
      },
    ],
  },
  {
    category: "Cas d'usage",
    questions: [
      {
        q: "À quoi sert concrètement un agent IA OpenClaw ?",
        a: "Les usages les plus courants en France : triage et résumé des emails chaque matin, relances automatiques des clients, comptes-rendus de réunion générés depuis des notes vocales, veille sectorielle quotidienne, suivi des paiements et relances de factures, mise à jour automatique de tableaux de bord.",
      },
      {
        q: "Un agent IA OpenClaw peut-il remplacer un assistant ?",
        a: "Partiellement. Un agent IA gère très bien les tâches répétitives et structurées : triage, relances, résumés, surveillance. Il ne remplace pas les tâches qui demandent de la relation humaine, du jugement complexe ou de la créativité. La plupart de nos clients gagnent entre 5 et 10 heures par semaine.",
      },
      {
        q: "OpenClaw est-il utile pour les freelances ?",
        a: "Particulièrement oui. Les freelances portent seuls des tâches qui, dans une entreprise, sont réparties sur plusieurs personnes. Un agent IA peut gérer l'administratif pendant qu'ils se concentrent sur leur cœur de métier.",
      },
      {
        q: "OpenClaw fonctionne-t-il pour les TPE et PME ?",
        a: "Oui. On travaille principalement avec des entreprises de 1 à 50 personnes. Les secteurs les plus courants : cabinets de conseil, agences, professions libérales (avocats, architectes, médecins), artisans et TPE de services.",
      },
      {
        q: "Peut-on avoir plusieurs agents sur la même machine ?",
        a: "Oui. Une seule machine peut faire tourner plusieurs agents spécialisés simultanément. Par exemple : un agent email, un agent veille, un agent CRM. Chacun a son périmètre et ses règles.",
      },
    ],
  },
  {
    category: "Sécurité et confidentialité",
    questions: [
      {
        q: "Mes données sont-elles en sécurité avec OpenClaw ?",
        a: "Oui. L'architecture locale d'OpenClaw est sa principale garantie de sécurité. Vos données restent sur votre machine. Claws n'a pas accès à vos données après l'installation, sauf si vous nous donnez explicitement accès pour un support.",
      },
      {
        q: "Que se passe-t-il si ma machine s'éteint ?",
        a: "L'agent s'arrête. Pour un usage professionnel, la machine doit rester allumée. Un Mac Mini configuré en mode 'éveil permanent' consomme environ 10W en veille. Certains clients utilisent un Raspberry Pi ou un mini PC dédié pour minimiser les coûts énergétiques.",
      },
      {
        q: "OpenClaw peut-il accéder à mes données bancaires ?",
        a: "Uniquement si vous le configurez explicitement pour ça. Par défaut, OpenClaw accède aux sources que vous lui autorisez : emails, calendrier, fichiers spécifiques. Il n'a pas accès à votre système de fichiers entier ni à vos applications bancaires sans configuration explicite.",
      },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.flatMap((cat) =>
      cat.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ background: "#F5F2EE", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          style={{
            borderBottom: "3px solid #E85D04",
            padding: "80px 24px 48px",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#E85D04",
              marginBottom: 16,
            }}
          >
            FAQ
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#0E0E0E",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: 24,
            }}
          >
            Toutes les réponses
            <br />
            sur les agents IA.
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#444",
              lineHeight: 1.7,
              maxWidth: 600,
            }}
          >
            OpenClaw, installation, prix, RGPD, cas d'usage. Si la réponse
            n'est pas ici,{" "}
            <a href="/#contact" style={{ color: "#E85D04" }}>
              posez la question directement
            </a>
            .
          </p>
        </section>

        {/* FAQ Categories */}
        <section style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 80px" }}>
          {faq.map((cat) => (
            <div key={cat.category} style={{ marginBottom: 64 }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#E85D04",
                  marginBottom: 24,
                  paddingBottom: 12,
                  borderBottom: "1px solid #E8E4DF",
                }}
              >
                {cat.category}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {cat.questions.map((item, i) => (
                  <details
                    key={i}
                    style={{
                      borderBottom: "1px solid #E8E4DF",
                      padding: "20px 0",
                    }}
                  >
                    <summary
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#0E0E0E",
                        cursor: "pointer",
                        lineHeight: 1.4,
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 16,
                      }}
                    >
                      <span>{item.q}</span>
                      <span
                        style={{
                          color: "#E85D04",
                          fontSize: 20,
                          lineHeight: 1,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        +
                      </span>
                    </summary>
                    <p
                      style={{
                        marginTop: 16,
                        fontSize: 16,
                        color: "#444",
                        lineHeight: 1.75,
                      }}
                    >
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#0E0E0E",
            padding: "64px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 800,
              color: "#F5F2EE",
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            Une question qui n'est pas là ?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#aaa",
              marginBottom: 32,
            }}
          >
            On répond en général dans la journée.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: "#E85D04",
              color: "#F5F2EE",
              padding: "14px 32px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Poser une question
          </a>
        </section>
      </main>
    </>
  );
}
