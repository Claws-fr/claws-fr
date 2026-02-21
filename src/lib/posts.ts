export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  keywords: string[];
};

export const posts: Post[] = [
  {
    slug: "installer-openclaw-mac-mini-2025",
    title: "Installer OpenClaw sur Mac Mini : guide complet 2025",
    description:
      "Tout ce que vous devez savoir pour installer et configurer OpenClaw sur un Mac Mini en 2025. Configuration sécurisée, canal Telegram ou WhatsApp, bonnes pratiques.",
    date: "2025-02-15",
    category: "Installation",
    readTime: "8 min",
    keywords: ["installation OpenClaw", "OpenClaw Mac Mini", "configurer OpenClaw", "OpenClaw France"],
    content: `
## Pourquoi OpenClaw sur Mac Mini ?

OpenClaw est la plateforme de référence pour déployer des agents IA autonomes directement sur votre machine locale. Contrairement aux solutions cloud, vos données ne quittent jamais votre infrastructure — un avantage décisif pour les entreprises soucieuses de conformité RGPD.

Le Mac Mini M4 est la machine idéale pour ce type de déploiement : silencieux, économe en énergie, et suffisamment puissant pour faire tourner des agents IA en continu. Un Mac Mini consomme entre 10 et 20W en charge normale, contre 80 à 300W pour un serveur classique.

## Prérequis avant l'installation

Avant de commencer, assurez-vous de disposer de :

- **Mac Mini M4** (ou M2 Pro/M3) avec macOS Ventura ou supérieur
- **Node.js 20+** installé (via Homebrew : \`brew install node\`)
- **Un compte Anthropic** avec une clé API (claude.ai/settings)
- **15 minutes** de disponibilité

## Installation étape par étape

### 1. Installer OpenClaw

\`\`\`bash
npm install -g openclaw
\`\`\`

Une fois installé, lancez le wizard de configuration :

\`\`\`bash
openclaw configure
\`\`\`

Le wizard vous guidera pour configurer votre clé API Anthropic, le modèle IA (Claude Sonnet par défaut), et le canal de communication.

### 2. Configurer un canal Telegram

Telegram est le canal le plus simple à configurer. Créez un bot via @BotFather sur Telegram :

1. Envoyez \`/newbot\` à @BotFather
2. Choisissez un nom et un username pour votre bot
3. Copiez le token fourni

Puis dans OpenClaw :

\`\`\`bash
openclaw channels add --channel telegram --token VOTRE_TOKEN
\`\`\`

### 3. Garder le Mac Mini actif en permanence

Par défaut, macOS met l'écran en veille mais pas la machine si un processus actif tourne. Pour s'assurer que le gateway reste actif :

\`\`\`bash
openclaw gateway start
\`\`\`

Pour démarrer automatiquement au boot :

\`\`\`bash
openclaw gateway install
\`\`\`

### 4. Sécuriser l'installation

Points de sécurité essentiels à vérifier :

- **Chiffrement disque** : activez FileVault dans Réglages Système → Confidentialité et sécurité
- **Firewall** : activez le pare-feu macOS
- **Permissions** : vérifiez que le gateway écoute uniquement en local (\`localhost:18789\`)
- **Clés API** : ne stockez jamais vos clés dans des fichiers de code versionnés

## Erreurs courantes

**"Gateway token missing"** : le gateway tourne mais le client ne trouve pas le token. Lancez \`openclaw dashboard\` pour récupérer le token d'accès.

**"Telegram channel not responding"** : vérifiez le mode confidentialité du bot via @BotFather → Group Privacy → Disable.

**Agent ne répond pas** : vérifiez que le gateway tourne avec \`openclaw gateway status\` et que votre clé Anthropic est valide.

## Conclusion

L'installation d'OpenClaw sur Mac Mini est accessible, même sans compétences techniques avancées. En suivant ce guide, vous disposez d'un agent IA autonome, sécurisé, disponible 24h/24, pour un coût d'infrastructure minimal.

Vous préférez déléguer l'installation et la configuration à des experts ? [Contactez Claws](/contact) — nous intervenons à distance ou en présentiel en Île-de-France.
`,
  },
  {
    slug: "maintenance-openclaw-agents-ia-stables",
    title: "Maintenance OpenClaw : guide pour des agents IA fiables en production",
    description:
      "Comment maintenir vos agents IA OpenClaw en production ? Mises à jour, monitoring, rotation des clés API, sauvegardes — les bonnes pratiques pour une disponibilité maximale.",
    date: "2025-02-20",
    category: "Maintenance",
    readTime: "6 min",
    keywords: ["maintenance OpenClaw", "OpenClaw production", "agent IA fiable", "monitoring OpenClaw"],
    content: `
## La maintenance, l'étape oubliée de l'IA d'entreprise

Beaucoup d'équipes installent OpenClaw, configurent leurs agents, puis oublient la machine pendant des mois. C'est une erreur. Comme tout système de production, vos agents IA ont besoin d'une maintenance régulière pour rester performants, sécurisés et à jour.

Ce guide couvre les 5 axes de la maintenance OpenClaw en production.

## 1. Mises à jour régulières

OpenClaw publie des mises à jour fréquentes — nouvelles fonctionnalités, correctifs de sécurité, support de nouveaux modèles IA. Pour vérifier votre version :

\`\`\`bash
openclaw --version
npm list -g openclaw
\`\`\`

Pour mettre à jour :

\`\`\`bash
npm update -g openclaw
openclaw gateway restart
\`\`\`

**Fréquence recommandée** : vérifiez les mises à jour toutes les 2 semaines. Les mises à jour de sécurité doivent être appliquées dans les 48h.

## 2. Rotation des clés API

Vos clés API (Anthropic, Telegram, etc.) doivent être renouvelées régulièrement. En cas de doute sur une compromission, changez-les immédiatement.

Pour mettre à jour une clé Anthropic :

\`\`\`bash
openclaw config set providers.anthropic.apiKey NOUVELLE_CLE
openclaw gateway restart
\`\`\`

**Fréquence recommandée** : tous les 90 jours, ou immédiatement après un départ d'équipe.

## 3. Monitoring et alertes

OpenClaw expose des logs détaillés que vous pouvez surveiller :

\`\`\`bash
# Suivre les logs en temps réel
openclaw logs

# Vérifier le statut complet
openclaw doctor
\`\`\`

Points à surveiller :
- **Taux d'erreur** : plus de 5% d'erreurs sur les réponses indique un problème
- **Latence** : une réponse > 30 secondes est anormale
- **Quota API** : surveillez votre consommation Anthropic pour éviter les interruptions

## 4. Sauvegardes de la configuration

Votre configuration OpenClaw se trouve dans \`~/.openclaw/\`. Sauvegardez ce répertoire régulièrement :

\`\`\`bash
# Sauvegarde manuelle
tar -czf openclaw-backup-$(date +%Y%m%d).tar.gz ~/.openclaw/

# Ou via Time Machine (déjà inclus sur macOS)
\`\`\`

**Ce qu'il ne faut PAS sauvegarder en clair** : les clés API. Utilisez un gestionnaire de secrets (1Password, Bitwarden) pour les stocker séparément.

## 5. Audit de sécurité

\`\`\`bash
openclaw security audit --deep
\`\`\`

Cette commande vérifie :
- Les ports exposés (seul localhost:18789 doit être ouvert)
- Les permissions des fichiers de configuration
- Les skills installés et leur statut de sécurité

## Déléguer la maintenance

La maintenance d'un système IA de production demande du temps et de l'expertise. Si vous préférez vous concentrer sur votre cœur de métier, notre formule **Retainer à 149€/mois** couvre l'ensemble de ces opérations — mises à jour, monitoring, rotation des clés, support direct.

[Découvrir le Retainer Claws](/contact)
`,
  },
  {
    slug: "agence-automatisation-agents-ia-france",
    title: "Agence d'automatisation par agents IA : comment ça marche, et pourquoi maintenant",
    description:
      "Les agents IA autonomes changent radicalement la façon de travailler. Voici ce que fait une agence d'automatisation IA, comment elle peut transformer votre entreprise, et pourquoi 2025 est le bon moment.",
    date: "2025-02-25",
    category: "Stratégie",
    readTime: "10 min",
    keywords: ["agence automatisation IA", "agent IA autonome entreprise", "automatisation PME", "IA agentic"],
    content: `
## Un agent IA n'est pas un chatbot

La confusion est fréquente. Quand on parle d'IA en entreprise, beaucoup pensent à ChatGPT — un outil auquel on pose des questions et qui répond. C'est utile. Mais ce n'est pas un agent.

Un **agent IA autonome** est fondamentalement différent. Il ne répond pas à des questions — il exécute des tâches. Il consulte votre boîte mail, triage les messages, répond aux demandes standards, planifie des rendez-vous dans votre agenda, génère des rapports et vous notifie des points d'attention. Le tout sans que vous ayez ouvert un seul outil.

C'est la différence entre un moteur de recherche et un assistant personnel.

## Ce qu'une agence d'automatisation IA fait concrètement

Une agence spécialisée en agents IA comme Claws intervient sur plusieurs niveaux :

### 1. Audit et identification des opportunités

Avant d'automatiser quoi que ce soit, il faut comprendre où votre équipe passe du temps. Les tâches les plus automatisables sont généralement :
- Le traitement des emails entrants (tri, réponses standards, escalade)
- La gestion des agendas et planification de réunions
- La production de rapports récurrents
- Le suivi client (relances, mises à jour de statut)
- La veille concurrentielle et sectorielle

### 2. Configuration et déploiement

L'agent IA est ensuite configuré selon votre contexte spécifique : votre secteur, votre jargon, vos processus, vos outils. Un agent configuré pour une agence de communication ne ressemble pas à un agent configuré pour un cabinet d'expertise comptable.

OpenClaw permet cette personnalisation profonde, avec un déploiement 100% local — vos données ne transitent jamais par des serveurs tiers.

### 3. Formation et onboarding

Un agent IA n'est utile que si votre équipe sait comment interagir avec lui. Nous formons vos équipes à déléguer intelligemment — quoi confier à l'agent, comment vérifier son travail, comment l'affiner.

### 4. Maintenance continue

Un agent de production doit être maintenu : mises à jour du moteur IA, adaptation aux changements de process, monitoring des performances. C'est ce que couvre notre formule Retainer.

## Pourquoi 2025 est le bon moment

Trois facteurs convergent en 2025 :

**Les modèles sont suffisamment capables.** Claude 3.5 Sonnet et les modèles de génération actuelle atteignent un niveau de fiabilité suffisant pour déléguer des tâches à enjeux modérés en autonomie.

**Le coût d'infrastructure est minimal.** Un Mac Mini M4 (800€) fait tourner un agent complet. Il y a deux ans, il fallait un serveur GPU à 5 000€+.

**La compétition s'accélère.** Vos concurrents commencent à automatiser. Les entreprises qui adoptent maintenant prendront une avance difficile à rattraper dans 18-24 mois.

## Les secteurs les plus concernés

Certains secteurs bénéficient immédiatement et massivement de l'automatisation par agents IA :

- **Agences et cabinets** : gestion clients, reporting, suivi de projets
- **E-commerce** : service client, suivi commandes, gestion fournisseurs
- **Professions libérales** : prise de rendez-vous, suivi dossiers, facturation
- **Startups tech** : support utilisateurs, onboarding, veille concurrentielle

## Ce qu'on ne remplace pas

Un agent IA autonome excelle dans les tâches répétitives, structurées et à fort volume. Il ne remplace pas le jugement humain dans les situations complexes, la créativité, la relation client à haute valeur ajoutée, ou les décisions stratégiques.

L'objectif n'est pas de supprimer des postes — c'est de libérer du temps pour ce qui compte vraiment.

---

Vous souhaitez évaluer le potentiel d'automatisation dans votre entreprise ? [Discutons.](/contact)
`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
