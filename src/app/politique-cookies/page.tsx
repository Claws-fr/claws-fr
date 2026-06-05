import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de cookies | Claws",
  description: "Politique de cookies de Claws (ThalerTech SAS) : cookies utilisés, durées, gestion des préférences, conformité RGPD et Directive ePrivacy.",
  alternates: { canonical: "https://claws.fr/politique-cookies" },
  robots: { index: false, follow: false },
};

const section = (title: string, children: React.ReactNode) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0E0E0E", margin: "0 0 16px", letterSpacing: "-0.3px" }}>
      {title}
    </h2>
    <div style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

export default function PolitiqueCookiesPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Politique de cookies
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Introduction", <>
              <p>
                ThalerTech SAS (marque <strong>Claws</strong>), éditrice du site claws.fr, utilise des cookies et technologies similaires conformément à la Directive ePrivacy (2002/58/CE) et au Règlement général sur la protection des données (RGPD), ainsi qu&apos;aux recommandations de la CNIL.
              </p>
            </>)}

            {section("2. Qu'est-ce qu'un cookie ?", <>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de votre visite sur un site web. Il permet au site de mémoriser des informations sur votre navigation, comme vos préférences ou votre session.
              </p>
            </>)}

            {section("3. Cookies utilisés sur claws.fr", <>
              <ul style={{ marginTop: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                <li>
                  <strong>Cookie de consentement</strong><br />
                  Catégorie : Essentiel — Durée : 12 mois<br />
                  Mémorise vos choix en matière de cookies afin de ne pas afficher le bandeau à chaque visite.
                </li>
                <li>
                  <strong>Cookie de sécurité</strong><br />
                  Catégorie : Essentiel — Durée : 30 minutes<br />
                  Assure la sécurité des formulaires et prévient les requêtes frauduleuses (CSRF).
                </li>
                <li>
                  <strong>_ga, _ga_*</strong> (Google Analytics)<br />
                  Catégorie : Analytique — Durée : 13 mois — Consentement requis<br />
                  Mesure l&apos;audience du site : pages visitées, durée de session, source de trafic. Aucune donnée identifiante n&apos;est transmise à Google.
                </li>
                <li>
                  <strong>_gcl_au</strong> (Google Ads)<br />
                  Catégorie : Marketing — Durée : 90 jours — Consentement requis<br />
                  Mesure l&apos;efficacité des campagnes publicitaires Google en liant les clics aux conversions.
                </li>
              </ul>
            </>)}

            {section("4. Cookies essentiels", <>
              <p>
                Les cookies essentiels sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés. Ils ne collectent aucune donnée à des fins de profilage ou de publicité.
              </p>
            </>)}

            {section("5. Cookies analytiques", <>
              <p>
                Ces cookies nous permettent de mesurer la performance du site et de comprendre comment les visiteurs l&apos;utilisent, afin de l&apos;améliorer. Ils ne sont déposés qu&apos;avec votre consentement.
              </p>
            </>)}

            {section("6. Cookies marketing", <>
              <p>
                Ces cookies sont utilisés pour suivre l&apos;efficacité de nos campagnes publicitaires. Ils ne sont déposés qu&apos;avec votre consentement et peuvent être retirés à tout moment.
              </p>
            </>)}

            {section("7. Gérer vos préférences", <>
              <p>Vous disposez de plusieurs moyens pour gérer vos préférences en matière de cookies :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Bandeau de consentement :</strong> affiché lors de votre première visite sur le site, il vous permet d&apos;accepter ou refuser les catégories de cookies non essentiels.</li>
                <li><strong>Lien « Gérer mes cookies » :</strong> disponible en bas de chaque page, il vous permet de modifier vos préférences à tout moment.</li>
                <li><strong>Paramètres de votre navigateur :</strong> vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Consultez l&apos;aide de votre navigateur pour en savoir plus.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Le retrait de votre consentement est possible à tout moment, sans effet rétroactif.
              </p>
            </>)}

            {section("8. Cookies tiers", <>
              <p>
                Les cookies déposés par des tiers (Google Analytics, Google Ads) sont soumis aux politiques de confidentialité de ces sociétés. Nous vous invitons à les consulter directement pour en savoir plus sur leurs pratiques.
              </p>
            </>)}

            {section("9. Contact", <>
              <p>
                Pour toute question relative aux cookies : <strong>privacy@thalertech.io</strong>
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
