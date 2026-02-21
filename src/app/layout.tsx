import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://claws.fr"),
  title: {
    default: "Claws — Agence d'agents IA autonomes en France",
    template: "%s | Claws",
  },
  description:
    "Claws installe, configure et maintient vos agents IA autonomes sur OpenClaw. Première agence française spécialisée en automatisation par agents IA — pour PME et entreprises.",
  keywords: [
    "installation OpenClaw",
    "maintenance OpenClaw",
    "agent IA autonome",
    "agence automatisation IA",
    "agence agent IA France",
    "OpenClaw France",
    "automatisation entreprise IA",
  ],
  openGraph: {
    title: "Claws — Agence d'agents IA autonomes en France",
    description:
      "Nous installons, configurons et maintenons vos agents IA autonomes. Première agence française spécialisée OpenClaw.",
    url: "https://claws.fr",
    siteName: "Claws",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claws — Agents IA autonomes",
    description: "Première agence française spécialisée en agents IA autonomes OpenClaw.",
  },
  alternates: { canonical: "https://claws.fr" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Claws",
  url: "https://claws.fr",
  description: "Agence française spécialisée en installation, configuration et maintenance d'agents IA autonomes OpenClaw.",
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  contactPoint: { "@type": "ContactPoint", email: "contact@claws.fr", contactType: "customer service" },
  sameAs: [],
  knowsAbout: ["OpenClaw", "agents IA autonomes", "automatisation par IA", "LLM", "Anthropic Claude"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
