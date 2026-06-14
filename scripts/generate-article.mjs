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
];

const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 2));
const topic = TOPICS[dayIndex % TOPICS.length];
console.log(`📝 Sujet : ${topic}`);

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

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": ANTHROPIC_API_KEY,
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

function injectPost(article) {
  const postsContent = readFileSync(POSTS_FILE, "utf-8");
  if (postsContent.includes(`slug: "${article.slug}"`)) {
    console.log(`⚠️  Slug "${article.slug}" existe déjà, skip.`);
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
  try {
    console.log("🤖 Génération de l'article...");
    const article = await generateArticle(topic);
    console.log(`📄 Titre : ${article.title}`);
    const injected = injectPost(article);
    if (!injected) process.exit(0);
    gitPush(article.slug);
    console.log(`slug: ${article.slug}`);
    console.log(`\n🎉 Push OK : https://claws.fr/blog/${article.slug}`);
  } catch (err) {
    console.error("❌ Erreur :", err.message);
    process.exit(1);
  }
})();
