import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Transparence sur l'intelligence artificielle | Claws",
  description: "Note de transparence de Claws (ThalerTech SAS) sur l'utilisation de l'intelligence artificielle, conformément au règlement européen AI Act (UE) 2024/1689.",
  alternates: { canonical: "https://claws.fr/transparence-ia" },
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

export default function TransparenceIaPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Note de transparence sur l&apos;intelligence artificielle
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Cadre réglementaire", <>
              <p>
                <strong>ThalerTech SAS</strong> (marque Claws) conçoit et déploie des agents IA autonomes basés sur le framework open source <strong>OpenClaw</strong>. La présente note est publiée au titre du Règlement (UE) 2024/1689 sur l&apos;intelligence artificielle (« AI Act »), entré en application progressivement à compter de 2024.
              </p>
            </>)}

            {section("2. Classification des systèmes IA utilisés pour le compte propre de ThalerTech SAS", <>
              <p>
                Les systèmes d&apos;IA utilisés par ThalerTech SAS pour ses propres activités (rédaction assistée, analyse interne) sont classifiés en catégorie <strong>risque limité</strong> au sens de l&apos;AI Act.
              </p>
              <p style={{ marginTop: 12 }}>
                Conformément aux obligations de l&apos;article 50 du règlement, ThalerTech SAS s&apos;engage à :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Informer les utilisateurs lorsqu&apos;ils interagissent avec un système IA ;</li>
                <li>Identifier clairement les contenus générés ou assistés par IA.</li>
              </ul>
            </>)}

            {section("3. Solutions déployées pour les clients", <>
              <p>
                Les agents IA déployés par Claws pour le compte de ses clients sont classifiés selon la finalité et le contexte d&apos;usage déterminés par chaque client responsable de traitement. La classification (risque minimal, limité, élevé ou inacceptable) dépend du secteur d&apos;activité, des données traitées et des décisions automatisées éventuelles.
              </p>
              <p style={{ marginTop: 12 }}>
                Le Client assume les obligations qui lui incombent en tant que déployeur au sens de l&apos;AI Act, notamment : l&apos;information des utilisateurs, la documentation technique, la gestion des risques et la tenue de registres le cas échéant.
              </p>
              <p style={{ marginTop: 12 }}>
                ThalerTech SAS informe et accompagne ses clients dans cette démarche, sans se substituer à leurs obligations propres.
              </p>
            </>)}

            {section("4. Gouvernance interne", <>
              <p>
                ThalerTech SAS tient un inventaire interne des systèmes d&apos;IA utilisés et déployés, soumis à une réévaluation périodique au regard de l&apos;évolution réglementaire. Une politique de gouvernance de l&apos;IA est disponible sur demande, sous réserve de signature d&apos;un accord de confidentialité.
              </p>
            </>)}

            {section("5. Contact", <>
              <p>
                Pour toute question relative à l&apos;utilisation de l&apos;intelligence artificielle par Claws :<br />
                <strong>privacy@thalertech.io</strong>
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
