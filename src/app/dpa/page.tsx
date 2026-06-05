import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Accord de traitement des données (DPA) | Claws",
  description: "Data Processing Agreement de Claws (ThalerTech SAS) : obligations sous-traitant, sécurité, sous-traitants ultérieurs, violations, conformité RGPD art. 28.",
  alternates: { canonical: "https://claws.fr/dpa" },
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

export default function DpaPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Accord de traitement des données (DPA)
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("Préambule", <>
              <p>
                Le présent Accord de traitement des données (« DPA ») est conclu entre <strong>ThalerTech SAS</strong> (marque Claws), agissant en qualité de <strong>sous-traitant</strong>, et le Client, agissant en qualité de <strong>responsable de traitement</strong>.
              </p>
              <p style={{ marginTop: 12 }}>
                Le présent DPA fait partie intégrante du contrat principal (devis et{" "}
                <a href="/cgv" style={{ color: "#E85D04", textDecoration: "none" }}>CGV</a>) conclu entre les parties. Il est établi conformément à l&apos;article 28 du Règlement (UE) 2016/679 (RGPD).
              </p>
            </>)}

            {section("Art. 1 — Définitions", <>
              <p>
                Les termes « données à caractère personnel », « traitement », « responsable du traitement », « sous-traitant », « violation de données à caractère personnel » et « autorité de contrôle » ont la signification qui leur est donnée à l&apos;article 4 du RGPD.
              </p>
            </>)}

            {section("Art. 2 — Objet", <>
              <p>
                ThalerTech SAS traite des données à caractère personnel pour le compte du Client dans le cadre de l&apos;exécution de ses prestations : installation, configuration, déploiement et maintenance d&apos;agents IA autonomes basés sur le framework OpenClaw.
              </p>
            </>)}

            {section("Art. 3 — Description du traitement", <>
              <ul style={{ marginTop: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li><strong>Nature des opérations :</strong> opérations techniques liées à l&apos;exécution des prestations définies au contrat principal.</li>
                <li><strong>Finalités :</strong> définies par le Client responsable de traitement.</li>
                <li><strong>Personnes concernées :</strong> déterminées par le Client.</li>
                <li><strong>Catégories de données :</strong> déterminées par le Client.</li>
                <li><strong>Durée :</strong> durée du contrat principal.</li>
              </ul>
            </>)}

            {section("Art. 4 — Obligations de ThalerTech SAS", <>
              <p>ThalerTech SAS s&apos;engage à :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Traiter les données uniquement sur instruction documentée du Client ;</li>
                <li>Garantir la confidentialité des données traitées ;</li>
                <li>Mettre en œuvre les mesures de sécurité prévues à l&apos;article 7 ;</li>
                <li>Recourir uniquement aux sous-traitants ultérieurs autorisés (art. 8) ;</li>
                <li>Aider le Client à répondre aux demandes d&apos;exercice des droits des personnes concernées ;</li>
                <li>Contribuer aux obligations des articles 32 à 36 du RGPD (sécurité, AIPD, consultation préalable) ;</li>
                <li>Restituer ou supprimer les données à la fin du contrat (art. 11) ;</li>
                <li>Mettre à disposition les informations nécessaires pour démontrer la conformité à l&apos;article 28 du RGPD.</li>
              </ul>
            </>)}

            {section("Art. 5 — Obligations du Client", <>
              <p>Le Client s&apos;engage à :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Documenter ses instructions de traitement ;</li>
                <li>S&apos;assurer de l&apos;existence d&apos;une base légale pour chaque traitement ;</li>
                <li>Ne pas donner d&apos;instructions contraires au RGPD ;</li>
                <li>Qualifier correctement les données traitées (données sensibles, données de santé, etc.).</li>
              </ul>
            </>)}

            {section("Art. 6 — Architecture, hébergement et modèles IA", <>
              <p>
                Le Client détermine seul le choix de l&apos;architecture technique, de l&apos;hébergeur et des modèles d&apos;intelligence artificielle utilisés dans le cadre des agents déployés. ThalerTech SAS présente les options disponibles :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Hébergement standard au sein de l&apos;Union européenne ;</li>
                <li>Infrastructure certifiée HDS pour les traitements impliquant des données de santé ;</li>
                <li>Modèles d&apos;IA de fournisseurs tiers ou solutions auto-hébergées.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                ThalerTech SAS exerce un devoir d&apos;alerte et notifie le Client par écrit si une option sélectionnée lui paraît non conforme à la réglementation applicable. Les fournisseurs de modèles IA choisis par le Client sont considérés comme des sous-traitants ultérieurs sélectionnés et assumés par le Client.
              </p>
            </>)}

            {section("Art. 7 — Sécurité", <>
              <p>ThalerTech SAS met en œuvre les mesures de sécurité suivantes :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Chiffrement des données en transit (TLS) et au repos ;</li>
                <li>Authentification et gestion des accès selon le principe de moindre privilège ;</li>
                <li>Journalisation des accès aux systèmes ;</li>
                <li>Sauvegardes régulières des données.</li>
              </ul>
            </>)}

            {section("Art. 8 — Sous-traitants ultérieurs", <>
              <p>
                La liste des sous-traitants ultérieurs de ThalerTech SAS est disponible à la page{" "}
                <a href="/sous-traitants" style={{ color: "#E85D04", textDecoration: "none" }}>Sous-traitants</a>.
              </p>
              <p style={{ marginTop: 12 }}>
                ThalerTech SAS notifie le Client de tout ajout ou remplacement avec un préavis de <strong>30 jours</strong>. Le Client dispose de <strong>15 jours</strong> pour s&apos;y opposer par écrit à privacy@thalertech.io. ThalerTech SAS demeure responsable envers le Client des obligations imposées à ses propres sous-traitants.
              </p>
            </>)}

            {section("Art. 9 — Violation de données", <>
              <p>
                En cas de violation de données à caractère personnel, ThalerTech SAS notifie le Client dans un délai de <strong>48 heures</strong> après en avoir pris connaissance, en précisant la nature de la violation, les catégories et le nombre approximatif de personnes et d&apos;enregistrements concernés, ainsi que les mesures prises ou envisagées. ThalerTech SAS assiste le Client dans ses démarches au titre des articles 33 et 34 du RGPD.
              </p>
            </>)}

            {section("Art. 10 — Audit", <>
              <p>
                Le Client peut demander un audit de conformité avec un préavis de <strong>30 jours ouvrés</strong>, à raison d&apos;un audit par an. ThalerTech SAS peut proposer des rapports de certification en lieu et place d&apos;un audit sur site. Les coûts de l&apos;audit sont à la charge du Client, sauf manquement avéré de ThalerTech SAS.
              </p>
            </>)}

            {section("Art. 11 — Fin du contrat", <>
              <p>
                À la fin du contrat principal, ThalerTech SAS restitue les données au Client ou les supprime dans un délai de <strong>30 jours</strong>, selon instruction du Client. À défaut d&apos;instruction, les données sont supprimées dans un délai de <strong>90 jours</strong>.
              </p>
            </>)}

            {section("Art. 12 — Responsabilité", <>
              <p>
                Chaque partie répond de ses propres manquements au RGPD et au présent DPA. Les plafonds de responsabilité sont ceux définis au contrat principal.
              </p>
            </>)}

            {section("Art. 13 — Dispositions générales", <>
              <p>
                En cas de contradiction entre le présent DPA et les{" "}
                <a href="/cgv" style={{ color: "#E85D04", textDecoration: "none" }}>CGV</a>{" "}
                sur les questions relatives aux données personnelles, le présent DPA prévaut. Il est soumis au droit français.
              </p>
            </>)}

            {section("Art. 14 — Contact", <>
              <p>
                Pour toute question relative au présent DPA :<br />
                <strong>ThalerTech SAS</strong><br />
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
