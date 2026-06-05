import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Claws",
  description: "Politique de confidentialité de Claws (ThalerTech SAS) : données collectées, durées de conservation, droits RGPD, transferts hors UE.",
  alternates: { canonical: "https://claws.fr/politique-confidentialite" },
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

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Politique de confidentialité
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Responsable du traitement", <>
              <p>
                <strong>ThalerTech SAS</strong> (marque Claws)<br />
                116 rue Danton, 92300 Levallois-Perret, France<br />
                Contact données personnelles : <strong>privacy@thalertech.io</strong>
              </p>
            </>)}

            {section("2. Traitements de données et bases légales", <>
              <p>Claws traite vos données dans les cas suivants :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Prospects :</strong> traitement des demandes de contact et de renseignements sur la base de l&apos;intérêt légitime de ThalerTech SAS à développer son activité commerciale.</li>
                <li><strong>Clients :</strong> exécution du contrat de prestations de services.</li>
                <li><strong>Navigation et cookies :</strong> mesure d&apos;audience et personnalisation, sur la base de votre consentement.</li>
                <li><strong>Comptabilité et facturation :</strong> respect d&apos;une obligation légale (conservation 10 ans).</li>
              </ul>
            </>)}

            {section("3. Durées de conservation", <>
              <ul style={{ marginTop: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact.</li>
                <li><strong>Données clients :</strong> durée du contrat + 3 ans.</li>
                <li><strong>Documents comptables :</strong> 10 ans.</li>
                <li><strong>Cookies analytiques et marketing :</strong> 13 mois maximum.</li>
                <li><strong>Logs techniques :</strong> 12 mois.</li>
              </ul>
            </>)}

            {section("4. Destinataires et sous-traitants", <>
              <p>
                Vos données ne sont jamais vendues à des tiers. Elles peuvent être transmises à des prestataires techniques agissant en qualité de sous-traitants au sens du RGPD. La liste de ces sous-traitants est disponible sur la page{" "}
                <a href="/sous-traitants" style={{ color: "#E85D04", textDecoration: "none" }}>Sous-traitants</a>.
              </p>
            </>)}

            {section("5. Transferts hors Union européenne", <>
              <p>
                Certains de nos prestataires sont établis hors de l&apos;Union européenne. Dans ce cas, le transfert est encadré par :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Le Data Privacy Framework (DPF) entre l&apos;UE et les États-Unis, lorsqu&apos;applicable ;</li>
                <li>Les Clauses Contractuelles Types (CCT) adoptées par la Décision de la Commission européenne 2021/914.</li>
              </ul>
            </>)}

            {section("6. Sécurité", <>
              <p>ThalerTech SAS met en œuvre les mesures techniques et organisationnelles appropriées :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Chiffrement des données en transit (TLS) et au repos ;</li>
                <li>Authentification et gestion des accès selon le principe de moindre privilège ;</li>
                <li>Journalisation des accès aux systèmes ;</li>
                <li>Sauvegardes régulières.</li>
              </ul>
            </>)}

            {section("7. Délégué à la protection des données", <>
              <p>
                ThalerTech SAS n&apos;est pas soumise à l&apos;obligation de désigner un délégué à la protection des données (DPO) au titre de l&apos;article 37(1) du RGPD. Un référent interne est néanmoins disponible pour toute question relative à la protection des données : <strong>privacy@thalertech.io</strong>.
              </p>
              <p style={{ marginTop: 12 }}>
                Vous pouvez également adresser une réclamation auprès de la CNIL :{" "}
                <a href="https://www.cnil.fr" style={{ color: "#E85D04", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">cnil.fr</a>.
              </p>
            </>)}

            {section("8. Vos droits", <>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Droit d&apos;accès</strong> à vos données ;</li>
                <li><strong>Droit de rectification</strong> des données inexactes ;</li>
                <li><strong>Droit à l&apos;effacement</strong> (droit à l&apos;oubli) ;</li>
                <li><strong>Droit à la limitation</strong> du traitement ;</li>
                <li><strong>Droit à la portabilité</strong> de vos données ;</li>
                <li><strong>Droit d&apos;opposition</strong> au traitement.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Pour exercer ces droits, contactez : <strong>privacy@thalertech.io</strong>. Nous répondons dans un délai d&apos;un mois.
              </p>
            </>)}

            {section("9. Intelligence artificielle", <>
              <p>
                Des informations sur l&apos;utilisation de l&apos;intelligence artificielle dans nos services sont disponibles dans notre{" "}
                <a href="/transparence-ia" style={{ color: "#E85D04", textDecoration: "none" }}>Note de transparence sur l&apos;intelligence artificielle</a>.
              </p>
            </>)}

            {section("10. Cookies", <>
              <p>
                Pour en savoir plus sur les cookies utilisés sur ce site, consultez notre{" "}
                <a href="/politique-cookies" style={{ color: "#E85D04", textDecoration: "none" }}>Politique de cookies</a>.
              </p>
            </>)}

            {section("11. Contact", <>
              <p>
                ThalerTech SAS<br />
                116 rue Danton, 92300 Levallois-Perret<br />
                privacy@thalertech.io
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
