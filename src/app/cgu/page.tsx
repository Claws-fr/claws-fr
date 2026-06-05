import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Claws",
  description: "Conditions Générales d'Utilisation du site claws.fr : accès, propriété intellectuelle, responsabilité, données personnelles.",
  alternates: { canonical: "https://claws.fr/cgu" },
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

export default function CguPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Conditions Générales d&apos;Utilisation
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Objet", <>
              <p>
                Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation du site claws.fr, édité par <strong>ThalerTech SAS</strong> (marque Claws). Ce site a pour objet de présenter les services Claws (déploiement d&apos;agents IA autonomes OpenClaw), de mettre à disposition des contenus informatifs et de permettre la prise de contact via des formulaires.
              </p>
            </>)}

            {section("2. Accès au site", <>
              <p>
                L&apos;accès au site claws.fr est gratuit. ThalerTech SAS s&apos;efforce d&apos;assurer la disponibilité du site mais ne garantit pas un accès ininterrompu. Des interruptions peuvent intervenir pour des raisons de maintenance, de mise à jour ou de force majeure.
              </p>
            </>)}

            {section("3. Comportement de l'utilisateur", <>
              <p>En accédant au site, l&apos;utilisateur s&apos;engage à :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Respecter la législation en vigueur ;</li>
                <li>Ne pas entraver le fonctionnement du site ;</li>
                <li>Ne pas introduire de code malveillant ;</li>
                <li>Ne pas procéder à une extraction massive de données (scraping) ;</li>
                <li>Ne pas usurper l&apos;identité d&apos;un tiers.</li>
              </ul>
            </>)}

            {section("4. Formulaires de contact", <>
              <p>
                Les données saisies via les formulaires présents sur le site sont traitées conformément à notre{" "}
                <a href="/politique-confidentialite" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de confidentialité</a>.
              </p>
            </>)}

            {section("5. Propriété intellectuelle", <>
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels, structure, code) est la propriété de ThalerTech SAS, sauf mention contraire. Toute reproduction sans autorisation préalable écrite est interdite.
              </p>
              <p style={{ marginTop: 12 }}>
                Les marques de tiers mentionnées sur ce site (OpenClaw, Google, etc.) sont la propriété de leurs titulaires respectifs.
              </p>
            </>)}

            {section("6. Contenus générés par intelligence artificielle", <>
              <p>
                Certains contenus de ce site peuvent avoir été produits ou assistés par des outils d&apos;intelligence artificielle. Ils sont fournis à titre informatif uniquement. Pour en savoir plus, consultez notre{" "}
                <a href="/transparence-ia" style={{ color: "#E85D04", textDecoration: "none" }}>Note de transparence sur l&apos;intelligence artificielle</a>.
              </p>
            </>)}

            {section("7. Liens externes", <>
              <p>
                Ce site peut contenir des liens vers des sites tiers. ThalerTech SAS décline toute responsabilité quant au contenu, aux pratiques de confidentialité ou à la disponibilité de ces sites.
              </p>
            </>)}

            {section("8. Responsabilité", <>
              <p>
                Les informations publiées sur ce site sont fournies à titre indicatif. ThalerTech SAS ne garantit pas leur exhaustivité ni leur exactitude à tout moment et décline toute responsabilité pour les décisions prises sur la base des informations publiées.
              </p>
            </>)}

            {section("9. Données personnelles et cookies", <>
              <p>
                L&apos;utilisation de ce site peut entraîner la collecte de données personnelles et le dépôt de cookies, décrits dans :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><a href="/politique-confidentialite" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de confidentialité</a></li>
                <li><a href="/politique-cookies" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de cookies</a></li>
              </ul>
            </>)}

            {section("10. Modification des CGU", <>
              <p>
                Les présentes CGU peuvent être modifiées à tout moment. La version en vigueur est celle datée en tête de page. La poursuite de l&apos;utilisation du site après modification vaut acceptation des nouvelles CGU.
              </p>
            </>)}

            {section("11. Droit applicable et juridiction", <>
              <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux de Nanterre seront seuls compétents.
              </p>
            </>)}

            {section("12. Contact", <>
              <p>
                Pour toute question relative aux présentes CGU : <strong>contact@claws.fr</strong>
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
