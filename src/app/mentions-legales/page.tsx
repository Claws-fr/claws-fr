import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mentions légales | Claws",
  description: "Mentions légales du site claws.fr : éditeur, hébergeur, données personnelles, propriété intellectuelle.",
  alternates: { canonical: "https://claws.fr/mentions-legales" },
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

export default function MentionsLegalesPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Mentions légales
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Éditeur du site", <>
              <p>Claws est une marque exploitée par <strong>ThalerTech SAS</strong>, société par actions simplifiée au capital de 1 000 €.</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>RCS Nanterre :</strong> 834 785 610</li>
                <li><strong>SIREN :</strong> 834 785 610</li>
                <li><strong>TVA intracommunautaire :</strong> FR75834785610</li>
                <li><strong>Siège social :</strong> 116 rue Danton, 92300 Levallois-Perret, France</li>
                <li><strong>Email :</strong> contact@claws.fr</li>
              </ul>
            </>)}

            {section("2. Hébergement", <>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p><strong>Site :</strong> https://vercel.com</p>
            </>)}

            {section("3. Propriété intellectuelle", <>
              <p>
                L&apos;ensemble du contenu de ce site (textes, visuels, structure, code source) est la propriété exclusive de ThalerTech SAS, sauf mention contraire.
              </p>
              <p style={{ marginTop: 12 }}>
                OpenClaw est un logiciel open source distribué sous licence MIT. Claws est une agence de services indépendante qui propose des prestations autour de ce framework.
              </p>
              <p style={{ marginTop: 12 }}>
                Toute reproduction, même partielle, du contenu de ce site sans autorisation préalable écrite de ThalerTech SAS est interdite.
              </p>
            </>)}

            {section("4. Données personnelles et cookies", <>
              <p>
                La collecte et le traitement de vos données personnelles sont décrits dans notre{" "}
                <a href="/politique-confidentialite" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de confidentialité</a>.
              </p>
              <p style={{ marginTop: 12 }}>
                Les informations relatives aux cookies déposés sur ce site sont disponibles dans notre{" "}
                <a href="/politique-cookies" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de cookies</a>.
              </p>
            </>)}

            {section("5. Droit applicable", <>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux de Nanterre seront seuls compétents.
              </p>
            </>)}

            {section("6. Contact", <>
              <p>
                Pour toute question relative au présent site : <strong>contact@claws.fr</strong>
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
