import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liste des sous-traitants | Claws",
  description: "Liste des sous-traitants de ThalerTech SAS (marque Claws) conformément au RGPD et à notre DPA.",
  alternates: { canonical: "https://claws.fr/sous-traitants" },
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

export default function SousTraitantsPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Liste des sous-traitants
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Introduction", <>
              <p>
                Conformément à notre{" "}
                <a href="/dpa" style={{ color: "#E85D04", textDecoration: "none" }}>Accord de traitement des données (DPA)</a>{" "}
                et à l&apos;article 28 du RGPD, ThalerTech SAS (marque Claws) publie la liste de ses sous-traitants ultérieurs, c&apos;est-à-dire des prestataires auxquels elle fait appel pour traiter des données personnelles dans le cadre de ses propres opérations.
              </p>
              <p style={{ marginTop: 12 }}>
                Cette liste est distincte des fournisseurs d&apos;infrastructure ou de modèles IA qui seraient sélectionnés directement par le Client dans le cadre d&apos;une prestation.
              </p>
            </>)}

            {section("2. Sous-traitants propres de ThalerTech SAS", <>
              <ul style={{ marginTop: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>
                  <strong>Vercel Inc.</strong> — Hébergement du site claws.fr<br />
                  440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                  Garantie : DPF (Data Privacy Framework UE-USA) et CCT
                </li>
                <li>
                  <strong>Google LLC</strong> — Google Workspace (messagerie professionnelle, Drive, Docs)<br />
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis<br />
                  Transferts : UE / USA — DPF et Clauses Contractuelles Types (SCC)
                </li>
              </ul>
              <p style={{ marginTop: 16, fontSize: "0.85rem", color: "#888", fontStyle: "italic" }}>
                D&apos;autres sous-traitants pourront être ajoutés à cette liste lors de sa prochaine mise à jour (CRM, outil d&apos;analytics).
              </p>
            </>)}

            {section("3. Garanties pour les transferts hors Union européenne", <>
              <p>Pour tout transfert de données vers des pays tiers, ThalerTech SAS s&apos;appuie sur :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Le Data Privacy Framework (DPF) UE-USA, lorsque le prestataire y est certifié ;</li>
                <li>Les Clauses Contractuelles Types (CCT) adoptées par la Décision de la Commission européenne 2021/914 ;</li>
                <li>Des mesures complémentaires techniques et organisationnelles si nécessaire.</li>
              </ul>
            </>)}

            {section("4. Notification des changements", <>
              <p>
                ThalerTech SAS notifie ses Clients de tout ajout ou remplacement d&apos;un sous-traitant avec un préavis de <strong>30 jours</strong>. Le Client dispose de <strong>15 jours</strong> pour s&apos;y opposer en motivant son opposition par écrit à : <strong>privacy@thalertech.io</strong>.
              </p>
            </>)}

            {section("5. Contact", <>
              <p>
                Pour toute question relative à cette liste : <strong>privacy@thalertech.io</strong>
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
