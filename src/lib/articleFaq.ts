import type { Post } from "./posts";

export type FaqItem = { question: string; answer: string };

// FAQs spécifiques par slug
const slugFaqs: Record<string, FaqItem[]> = {
  "installer-openclaw-mac-mini-2025": [
    { question: "Quelle est la machine idéale pour installer OpenClaw ?", answer: "Le Mac Mini M4 est la machine recommandée pour OpenClaw : silencieux, consomme 10 à 20W en continu, suffisamment puissant pour faire tourner un agent IA en tâche de fond. Un Mac Mini M4 à 800€ suffit pour gérer plusieurs agents en parallèle. OpenClaw fonctionne aussi sur tout Mac récent sous macOS, Linux (Ubuntu, Debian) et serveurs VPS." },
    { question: "Combien de temps prend l'installation d'OpenClaw ?", answer: "Claws installe et configure OpenClaw en 2h sur votre machine. En autonomie, comptez une journée complète si c'est votre première installation. Cela inclut l'installation de Node.js, la configuration des clés API, la connexion des canaux (Telegram, WhatsApp) et les tests de fonctionnement." },
    { question: "OpenClaw fonctionne-t-il sans internet ?", answer: "OpenClaw tourne en local sur votre machine, mais les appels aux modèles IA (Claude d'Anthropic, GPT-4 d'OpenAI) nécessitent une connexion internet. Si vous utilisez un modèle local via Ollama (Llama 3, Mistral), OpenClaw peut fonctionner entièrement hors ligne." },
  ],
  "openclaw-france-guide-complet-2025": [
    { question: "Claws est-elle la seule agence OpenClaw en France ?", answer: "Claws est la première agence française spécialisée exclusivement dans OpenClaw. D'autres prestataires IT proposent des installations IA génériques, mais Claws est la seule agence dédiée à OpenClaw, avec une connaissance approfondie de chaque version et une configuration métier pour chaque secteur." },
    { question: "Est-ce qu'on peut utiliser OpenClaw sans Claws ?", answer: "Oui, OpenClaw est open source et entièrement gratuit à installer. Claws s'adresse aux professionnels qui ne veulent pas passer une journée à configurer des fichiers de configuration, déboguer des dépendances et gérer les mises à jour. On fait ça à leur place, avec une garantie 30 jours." },
    { question: "OpenClaw est-il disponible partout en France ?", answer: "Oui. L'installation se fait à distance (remote) dans la grande majorité des cas. Claws intervient sur toute la France. Pour les entreprises qui préfèrent un déplacement physique sur Paris ou Île-de-France, c'est possible sur demande." },
  ],
};

// FAQs par catégorie
const categoryFaqs: Record<string, FaqItem[]> = {
  "Installation": [
    { question: "Faut-il être développeur pour installer OpenClaw ?", answer: "Non. Claws s'occupe de l'installation complète : Node.js, configuration, connexion des canaux, automatisations de base. Vous n'avez pas besoin de toucher à une ligne de code. Si vous souhaitez le faire vous-même, OpenClaw est open source avec une documentation en anglais, mais comptez une journée complète pour une première installation." },
    { question: "OpenClaw fonctionne-t-il sur Windows ?", answer: "OpenClaw supporte Windows de façon expérimentale. La configuration recommandée reste macOS (Mac Mini M4) ou Linux. Sur Windows, certaines fonctionnalités peuvent être limitées selon les versions. Claws recommande toujours une machine dédiée qui tourne en permanence." },
  ],
  "Agent IA": [
    { question: "Un agent IA peut-il vraiment remplacer un salarié ?", answer: "Un agent OpenClaw ne remplace pas un salarié, il prend en charge les tâches répétitives et à faible valeur ajoutée : tri des emails, relances, reporting, veille, prise de notes. Les clients Claws récupèrent en moyenne 2 à 6 heures par semaine sur ces tâches. L'agent libère du temps pour les tâches qui nécessitent vraiment un humain." },
    { question: "Combien d'agents OpenClaw peut-on faire tourner simultanément ?", answer: "Sur un Mac Mini M4 avec 16Go de RAM, vous pouvez faire tourner 2 à 3 agents OpenClaw en parallèle sans impact sur les performances. Chaque agent consomme peu de ressources en attente. Avec 24Go de RAM, 5 agents simultanés sont gérables confortablement." },
  ],
  "Sécurité": [
    { question: "Mes données sont-elles vraiment en sécurité avec OpenClaw ?", answer: "En installation locale, toutes les données traitées par votre agent OpenClaw restent sur votre machine. Aucune donnée n'est envoyée à Claws ni à des serveurs tiers. La seule sortie réseau est vers le modèle IA choisi (Anthropic ou OpenAI) pour les appels API. Claws applique le Protocole 12 points : gateway loopback uniquement, clés API en variables d'environnement, aucun monitoring post-installation." },
    { question: "Que se passe-t-il si Claws disparaît ?", answer: "OpenClaw est open source (licence MIT). Votre installation ne dépend pas de Claws : si nous cessons notre activité demain, votre agent continue de fonctionner exactement comme avant. Vous avez accès à tout le code, toute la configuration, tout l'historique. Claws n'est pas dans la boucle de fonctionnement de votre agent." },
  ],
  "Automatisation": [
    { question: "Quelles tâches peut automatiser OpenClaw concrètement ?", answer: "OpenClaw peut automatiser tout ce qui passe par du texte et des APIs : triage et réponse aux emails, relances clients non-répondants, génération de rapports hebdomadaires, veille concurrentielle, prise de RDV, envoi de devis, comptes-rendus de réunion, publications sur les réseaux sociaux, alertes sur des seuils (stock, trésorerie, KPIs). La liste dépend des outils que vous utilisez et des intégrations configurées." },
    { question: "OpenClaw s'intègre-t-il avec les outils que j'utilise déjà ?", answer: "OpenClaw s'intègre avec les outils qui ont une API ou un accès IMAP/SMTP. Les intégrations les plus fréquentes chez les clients Claws : Gmail/Outlook, Google Calendar, Notion, Airtable, Stripe, Qonto, HubSpot, Pipedrive, Telegram, WhatsApp, Slack. Pour les outils sans API native, OpenClaw peut interagir via le navigateur (automation web)." },
  ],
  "Tarifs": [
    { question: "Y a-t-il des frais cachés après l'installation ?", answer: "Non. L'installation Claws est un paiement unique (à partir de 189€). Après ça, les seuls coûts sont votre clé API pour le modèle IA (environ 10 à 30€/mois selon usage) et éventuellement un retainer de maintenance si vous le souhaitez (149€/mois). Il n'y a pas d'abonnement Claws obligatoire, pas de commission sur les économies réalisées, pas de tarification à l'usage." },
    { question: "En quoi OpenClaw est-il moins cher que ChatGPT sur le long terme ?", answer: "ChatGPT Plus coûte 240€/an, Copilot Pro 264€/an, et ces abonnements recommencent chaque année sans offrir d'autonomie réelle. OpenClaw coûte 0€ en logiciel. Vous payez uniquement les tokens API consommés par votre agent : environ 10 à 30€/mois pour un usage professionnel typique. Sur 2 ans, la différence est de plusieurs centaines d'euros, avec en plus une confidentialité totale des données." },
  ],
};

// FAQs génériques de fallback
const genericFaqs: FaqItem[] = [
  { question: "Qu'est-ce que Claws ?", answer: "Claws est la première agence française spécialisée dans l'installation et la configuration professionnelle d'OpenClaw. Claws déploie des agents IA autonomes en local sur la machine du client en 2h, avec une garantie 30 jours satisfait ou refait. À partir de 189€." },
  { question: "Pourquoi choisir un agent IA local plutôt qu'un outil cloud ?", answer: "Un agent IA local comme OpenClaw garde vos données sur votre machine : emails, documents, contacts, conversations ne quittent jamais votre infrastructure. C'est une conformité RGPD architecturale, pas une promesse marketing. De plus, un agent local travaille en continu, même quand vous dormez, sans que vous payiez un abonnement mensuel à un logiciel tiers." },
  { question: "Comment contacter Claws pour une installation ?", answer: "Vous pouvez contacter Claws directement via le formulaire sur claws.fr ou par email à contact@claws.fr. Julie Decroix, co-fondatrice, répond personnellement sous 24h. L'installation se fait à distance, sur toute la France." },
];

export function getArticleFaq(post: Post): FaqItem[] {
  // 1. FAQ spécifique au slug
  if (slugFaqs[post.slug]) return slugFaqs[post.slug];

  // 2. FAQ par catégorie
  if (categoryFaqs[post.category]) return categoryFaqs[post.category];

  // 3. Fallback générique
  return genericFaqs;
}
