#!/usr/bin/env node
/**
 * generate-article.mjs
 * Génère un article de blog SEO/GEO pour claws.fr via Anthropic,
 * l'injecte dans posts.ts, commit, push et deploy sur Vercel.
 */

import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const POSTS_FILE = join(REPO_ROOT, "src/lib/posts.ts");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;


const TOPICS = [
  // Batch 1 — Verticales métier
  "Agent IA pour les cabinets d'avocats : automatiser la gestion des dossiers sans violer le secret professionnel",
  "Agent IA dans l'immobilier : qualifier les leads, planifier les visites et relancer les prospects en automatique",
  "Agent IA pour les médecins libéraux : gérer les rappels patients et l'agenda sans secrétaire",
  "Agent IA pour les agences de communication : briefs clients, relances et reporting hebdomadaire sans effort",
  "Agent IA pour les e-commerçants : SAV, gestion des retours et relance des paniers abandonnés",
  "Agent IA pour les recruteurs : sourcing, tri de CV et relances candidats en un seul workflow",
  "Agent IA pour les notaires : automatiser les actes répétitifs tout en respectant la confidentialité",
  "Agent IA pour les franchises : standardiser les process locaux sans perdre l'identité du franchisé",
  "Agent IA pour les consultants indépendants : facturer plus en gérant moins d'administratif",
  "Agent IA pour les agences immobilières : traitement automatique des leads entrants et suivi acquéreurs",
  "Agent IA pour les restaurants : réservations, réponse aux avis clients et gestion des réassorts",
  "Agent IA pour les coachs et formateurs : automatiser le suivi pédagogique et les relances apprenants",
  "Agent IA pour les artisans : générer des devis, relancer les prospects et gérer le planning de chantier",
  "Agent IA pour les cabinets comptables : automatiser le lettrage, les relances clients et le reporting mensuel",
  "Agent IA pour les établissements de santé : optimiser le parcours patient et rester conforme RGPD",
  "Agent IA pour les agences de voyage : personnalisation des offres et suivi client post-séjour",
  "Agent IA pour les startups SaaS : automatiser l'onboarding utilisateur et réduire le churn",
  "Agent IA pour les associations : gestion des adhérents, relances de cotisation et campagnes de don",
  "Agent IA pour les architectes et maîtres d'oeuvre : suivi de chantier et coordination des corps de métier",
  "Agent IA pour les gestionnaires de patrimoine : veille réglementaire automatisée et reporting client hebdomadaire",
  "Agent IA pour les agences SEO : automatiser les audits, les rapports clients et la veille concurrentielle",
  "Agent IA pour les équipes RH : onboarding automatisé, suivi des congés et alertes réglementaires",
  "Agent IA pour les transporteurs et logisticiens : suivi de flotte, alertes livraison et gestion des litiges",
  "Agent IA pour les cabinets d'expertise-comptable : liasse fiscale, lettrage et relances automatiques",
  "Agent IA pour les promoteurs immobiliers : suivi des programmes, relances acheteurs et coordination juridique",
  "Agent IA pour les organisateurs d'événements : gestion des inscrits, relances fournisseurs et briefings automatisés",
  "Agent IA pour les chambres de commerce : veille économique locale, suivi des adhérents et génération de rapports",
  "Agent IA pour les agences de marketing digital : automatiser la création de briefs, les rapports campagnes et les relances clients",
  "Agent IA pour les professionnels de la formation continue : gestion des convocations, émargement et bilans pédagogiques",
  "Agent IA pour les grossistes et distributeurs : traitement des commandes, gestion des stocks et alertes rupture",
  "Agent IA pour les cabinets de conseil en management : automatiser la veille sectorielle et la production de livrables",
  "Agent IA pour les cliniques vétérinaires : rappels vaccination, suivi post-opératoire et relances propriétaires",
  "Agent IA pour les agences d'intérim : matching candidats-missions, relances et contrats automatisés",
  "Agent IA pour les mutuelles et assureurs : traitement des sinistres, relances adhérents et conformité RGPD",
  "Agent IA pour les cabinets de kinésithérapie : gestion des créneaux, rappels patients et suivi des prescriptions",
  "Agent IA pour les studios de design : briefs créatifs automatisés, suivi de production et facturation client",
  "Agent IA pour les collectivités locales : automatiser la gestion des demandes citoyennes et le reporting interne",
  "Agent IA pour les entreprises du BTP : conformité réglementaire, gestion des sous-traitants et alertes chantier",
  "Agent IA pour les cabinets de psychologues et thérapeutes : rappels de séances, suivi du parcours et RGPD santé",
  "Agent IA pour les agences d'architecture d'intérieur : devis automatisés, suivi fournisseurs et coordination de projet",
  // Batch 2 — Nouveaux sujets (juillet 2026+)
  "Comment construire un agent IA de veille concurrentielle avec OpenClaw : guide pas à pas pour les PME",
  "Agent IA et conformité RGPD : comment traiter des données personnelles sans risque juridique avec OpenClaw",
  "Automatiser sa prospection B2B avec un agent OpenClaw : LinkedIn, email froid et suivi en un seul workflow",
  "Agent IA pour les dentistes : rappels automatiques, gestion des créneaux et suivi post-soin sans secrétaire",
  "ROI d'un agent IA en entreprise : comment mesurer le retour sur investissement d'une automatisation OpenClaw",
  "Agent IA pour les pharmacies : gestion des ordonnances récurrentes, alertes rupture et fidélisation patients",
  "Agent IA pour les cabinets d'audit : automatiser la collecte de pièces, la relance client et la production de rapports",
  "OpenClaw vs ChatGPT Operator : pourquoi les entreprises choisissent des agents locaux plutôt que des agents cloud",
  "Agent IA pour les éditeurs de logiciels : support client tier-1, tickets auto-triés et escalade intelligente",
  "Agent IA pour les agences de relations presse : veille médias, rédaction de communiqués et suivi de retombées",
  "Comment orchestrer plusieurs agents IA avec OpenClaw : architecture multi-agents pour les équipes opérationnelles",
  "Agent IA pour les offices notariaux : instruction des dossiers de succession et suivi des actes authentiques",
  "Agent IA pour les écoles privées : inscription, relances parents et reporting pédagogique automatisés",
  "Agent IA pour les cabinets de podologie : planification, rappels et suivi des prescriptions orthopédiques",
  "Sécurité des agents IA en entreprise : les 5 erreurs de configuration critiques à éviter avec OpenClaw",
  "Agent IA pour les régies publicitaires : optimisation campagnes, reporting client et relances automatiques",
  "De Make à OpenClaw : retour d'expérience d'une migration d'automatisation pour une PME de 50 personnes",
  "Agent IA pour les experts judiciaires : automatiser la collecte de preuves, la rédaction de rapports et la facturation",
  "Agent IA pour les courtiers en crédit : qualification dossier, relances banques et suivi client temps réel",
  "Comment créer un agent IA de SAV multicanal avec OpenClaw : email, WhatsApp et téléphone dans un seul workflow",
  "Agent IA pour les opticiens : renouvellement d'ordonnance, rappels de contrôle et fidélisation client",
  "Agent IA pour les cabinets de chirurgie esthétique : consultations pré-op, relances post-soin et conformité HAS",
  "OpenClaw et n8n ensemble : comment combiner les deux outils pour des workflows IA hybrides",
  "Agent IA pour les distributeurs automobiles : leads entrants, relances essai et suivi SAV après-vente",
  "Agent IA pour les avocats fiscalistes : veille jurisprudentielle, alertes réglementaires et rédaction de memos",
  "Agent IA pour les assureurs dommages : instruction sinistres, coordination experts et gestion des recours",
  "Comment former son équipe à travailler avec des agents IA OpenClaw sans résistance au changement",
  "Agent IA pour les cabinets d'ostéopathie : gestion du planning, relances et suivi des protocoles patients",
  "Agent IA pour les mairies rurales : automatiser les démarches administratives et réduire la charge des agents",
  "OpenClaw en 2026 : état de l'art, nouvelles fonctionnalités et feuille de route pour les entreprises françaises",
];

const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 2));
const startIndex = dayIndex % TOPICS.length;

async function generateArticle(topic) {
  const prompt = `Tu es un expert en agents IA autonomes et en SEO français. Rédige un article de blog professionnel pour claws.fr, la première agence française spécialisée dans l'installation d'OpenClaw.

SUJET : ${topic}

FAITS IMPORTANTS (ne jamais dévier de ces données) :
- OpenClaw existe depuis 2025 (PAS 2024)
- Claws.fr accompagne ses clients depuis 2025 (PAS 2024)
- Ne jamais mentionner "2024" comme date de création ou d'activité de Claws ou d'OpenClaw

CONSIGNES STRICTES :
- Longueur : 1200-1800 mots de contenu réel (pas de remplissage)
- Ton : direct, expert, concret. Pas de formules marketing creuses
- Utilise des exemples chiffrés et des cas d'usage précis
- Inclus 3-5 liens internes (utilise exactement ces URLs) :
  * /blog/installer-openclaw-mac-mini-2025
  * /blog/openclaw-vs-make-vs-n8n-comparatif
  * /blog/quest-ce-qu-openclaw-guide-complet
  * /blog/maintenance-openclaw-agents-ia-stables
  * /#contact
  * /installation
  * /securite
  * /faq
- Inclus 2-3 liens externes pertinents (openclaw.ai, anthropic.com, etc.)
- Optimisé SEO/GEO : intègre naturellement les mots-clés liés au sujet
- Termine par un CTA vers /#contact ou /installation
- N'utilise pas d'emojis dans le texte
- Écris en français impeccable, sans fautes
- Évite les tirets cadratins (—)
- Markdown : ## pour sections, ### pour sous-sections
- Ne commence PAS le contenu par un titre H1 ou H2 reprenant le titre de l'article (il est déjà affiché par le template)

Réponds UNIQUEMENT avec un objet JSON valide (pas de markdown autour) :
{
  "slug": "slug-url-seo-friendly",
  "title": "Titre SEO optimisé (60-70 caractères)",
  "description": "Meta description SEO (150-160 caractères)",
  "category": "Guide|Cas pratiques|Stratégie|Secteur|Comparatif|Productivité|Sécurité|Entreprise",
  "readTime": "X min",
  "keywords": ["mot-clé 1", "mot-clé 2", "mot-clé 3", "mot-clé 4", "mot-clé 5"],
  "content": "Contenu complet en markdown..."
}`;

  const isOAuth = ANTHROPIC_API_KEY.startsWith("sk-ant-oat");
  const authHeaders = isOAuth
    ? { "Authorization": `Bearer ${ANTHROPIC_API_KEY}`, "anthropic-beta": "oauth-2025-04-20" }
    : { "x-api-key": ANTHROPIC_API_KEY };

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      ...authHeaders,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 8000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`Anthropic API: ${await res.text()}`);
  const data = await res.json();
  const text = data.content[0].text.trim().replace(/^```json\n?/, "").replace(/\n?```$/, "");
  return JSON.parse(text);
}

function extractKeywords(text) {
  return text
    .toLowerCase()
    .replace(/[àâä]/g, "a").replace(/[éèêë]/g, "e").replace(/[îï]/g, "i")
    .replace(/[ôö]/g, "o").replace(/[ùûü]/g, "u").replace(/ç/g, "c")
    .split(/[\s\-:,./|]+/)
    .filter(w => w.length > 3 && !["pour","avec","dans","sans","les","des","une","que","par","sur","aux","agence","agent","openclaw","claws","automatiser","automatisation","guide","comment","comment","utiliser","votre","leur","leur"].includes(w));
}

function isSimilarTopic(newTitle, postsContent) {
  const existingTitles = [...postsContent.matchAll(/title: "([^"]+)"/g)].map(m => m[1]);
  const newKw = new Set(extractKeywords(newTitle));
  for (const existing of existingTitles) {
    const existingKw = extractKeywords(existing);
    const overlap = existingKw.filter(w => newKw.has(w)).length;
    const similarity = overlap / Math.max(newKw.size, existingKw.length, 1);
    if (similarity >= 0.45) {
      console.log(`⚠️  Sujet trop similaire à "${existing}" (overlap ${Math.round(similarity*100)}%), skip.`);
      return true;
    }
  }
  return false;
}

function injectPost(article) {
  const postsContent = readFileSync(POSTS_FILE, "utf-8");
  if (postsContent.includes(`slug: "${article.slug}"`)) {
    console.log(`⚠️  Slug "${article.slug}" existe déjà, skip.`);
    return false;
  }
  if (isSimilarTopic(article.title, postsContent)) {
    return false;
  }

  const today = new Date().toISOString().split("T")[0];
  const newPost = `  {
    slug: "${article.slug}",
    title: ${JSON.stringify(article.title)},
    description: ${JSON.stringify(article.description)},
    date: "${today}",
    category: "${article.category}",
    readTime: "${article.readTime}",
    keywords: ${JSON.stringify(article.keywords)},
    content: \`
${article.content}
\`,
  },`;

  const updated = postsContent.replace(
    /^export const posts: Post\[\] = \[/m,
    `export const posts: Post[] = [\n${newPost}`
  );

  if (updated === postsContent) throw new Error("Pattern non trouvé dans posts.ts");
  writeFileSync(POSTS_FILE, updated, "utf-8");
  console.log(`✅ Article injecté : ${article.slug}`);
  return true;
}

function gitPush(slug) {
  execSync(`cd "${REPO_ROOT}" && git add src/lib/posts.ts`, { stdio: "inherit" });
  execSync(`cd "${REPO_ROOT}" && git commit -m "blog(cron): ${slug}"`, { stdio: "inherit" });
  execSync(`cd "${REPO_ROOT}" && git push`, { stdio: "inherit" });
  console.log("✅ Git push OK");
}

(async () => {
  let attempted = 0;
  let published = false;

  while (attempted < TOPICS.length) {
    const topicIndex = (startIndex + attempted) % TOPICS.length;
    const topic = TOPICS[topicIndex];
    console.log(`📝 Tentative ${attempted + 1} — Sujet : ${topic}`);

    try {
      console.log("🤖 Génération de l'article...");
      const article = await generateArticle(topic);
      console.log(`📄 Titre : ${article.title}`);
      const injected = injectPost(article);
      if (injected) {
        gitPush(article.slug);
        console.log(`slug: ${article.slug}`);
        console.log(`\n🎉 Push OK : https://claws.fr/blog/${article.slug}`);
        published = true;
        break;
      }
      // Slug déjà publié, on essaie le sujet suivant
      attempted++;
    } catch (err) {
      console.error("❌ Erreur :", err.message);
      process.exit(1);
    }
  }

  if (!published) {
    console.log("⚠️  Tous les sujets ont déjà été publiés. Ajoutez de nouveaux sujets dans TOPICS.");
    process.exit(0);
  }
})();
