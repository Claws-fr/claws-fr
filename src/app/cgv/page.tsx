import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Claws",
  description: "Conditions Générales de Vente de Claws (ThalerTech SAS) : prestations d'agents IA autonomes OpenClaw, prix, responsabilité, propriété intellectuelle.",
  alternates: { canonical: "https://claws.fr/cgv" },
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

export default function CgvPage() {
  return (
    <>
      <NavBar />
      <main style={{ background: "#F5F2EE", minHeight: "100vh", paddingTop: "72px" }}>
        <article style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 80px" }}>

          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#E85D04", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Légal
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0E0E0E", letterSpacing: "-1px", margin: "0 0 12px" }}>
            Conditions Générales de Vente
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
            Dernière mise à jour : juin 2026
          </p>

          <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 48 }}>

            {section("1. Prestataire", <>
              <p>
                Les présentes Conditions Générales de Vente (CGV) sont conclues entre <strong>ThalerTech SAS</strong>, société par actions simplifiée au capital de 1 000 €, immatriculée au RCS de Nanterre sous le numéro 834 785 610, dont le siège social est situé 116 rue Danton, 92300 Levallois-Perret, exploitant la marque <strong>Claws</strong> (ci-après « Claws » ou « le Prestataire »), et toute personne physique ou morale souhaitant bénéficier de ses services (ci-après « le Client »).
              </p>
              <p style={{ marginTop: 12 }}>
                Contact : contact@claws.fr
              </p>
            </>)}

            {section("2. Objet", <>
              <p>
                Les présentes CGV régissent les prestations proposées par Claws, notamment :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Installation, configuration et déploiement d&apos;agents IA autonomes basés sur le framework OpenClaw ;</li>
                <li>Maintenance et évolution des agents déployés ;</li>
                <li>Formations liées à l&apos;utilisation et à l&apos;administration de ces agents.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                Tout devis accepté par le Client vaut commande ferme et emporte acceptation des présentes CGV.
              </p>
            </>)}

            {section("3. Prix et paiement", <>
              <p>
                Les prix sont exprimés en euros hors taxes (HT). La TVA applicable est ajoutée au taux en vigueur au jour de la facturation.
              </p>
              <p style={{ marginTop: 12 }}>
                Sauf stipulation contraire dans le devis, les factures sont payables à 30 jours date de facture. En cas de retard de paiement, des pénalités sont appliquées au taux légal en vigueur, majorées d&apos;une indemnité forfaitaire de recouvrement de 40 € conformément à l&apos;article L441-10 du Code de commerce.
              </p>
              <p style={{ marginTop: 12 }}>
                Les coûts liés aux services tiers (hébergement cloud, licences de modèles IA, accès API) ne sont pas inclus dans les tarifs Claws, sauf mention expresse contraire dans le devis.
              </p>
            </>)}

            {section("4. Obligations de Claws", <>
              <p>
                Claws s&apos;engage à exécuter les prestations avec soin et diligence. Les prestations sont fournies à titre d&apos;obligation de moyens ; Claws ne garantit pas de résultat particulier, notamment en ce qui concerne les performances des modèles d&apos;intelligence artificielle utilisés.
              </p>
            </>)}

            {section("5. Architecture, hébergement et modèles IA", <>
              <p>
                Le choix de l&apos;architecture technique, de l&apos;hébergeur et des modèles d&apos;intelligence artificielle utilisés relève de la seule décision du Client. Claws présente les options disponibles, notamment :
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Hébergement standard au sein de l&apos;Union européenne ;</li>
                <li>Infrastructure certifiée HDS pour les données de santé ;</li>
                <li>Modèles d&apos;IA de fournisseurs tiers ou auto-hébergés.</li>
              </ul>
              <p style={{ marginTop: 12 }}>
                La responsabilité du choix incombe au Client. Claws exerce un devoir d&apos;alerte et informe par écrit le Client si une option sélectionnée lui paraît non conforme à la réglementation applicable ou inadaptée aux données traitées.
              </p>
            </>)}

            {section("6. Obligations du Client", <>
              <p>Le Client s&apos;engage à :</p>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
                <li>Fournir en temps utile toutes les informations et accès nécessaires à la bonne exécution des prestations ;</li>
                <li>S&apos;assurer de la licéité des données traitées via les agents déployés ;</li>
                <li>Coopérer activement avec Claws tout au long de la mission.</li>
              </ul>
            </>)}

            {section("7. Propriété intellectuelle", <>
              <p>
                Les outils, méthodes et savoir-faire préexistants de Claws et ThalerTech SAS demeurent leur propriété exclusive.
              </p>
              <p style={{ marginTop: 12 }}>
                Les livrables spécifiques développés pour le Client dans le cadre de la mission sont cédés au Client à titre définitif après paiement intégral de la prestation correspondante.
              </p>
              <p style={{ marginTop: 12 }}>
                Les modèles d&apos;IA tiers utilisés restent soumis aux conditions d&apos;utilisation de leurs éditeurs respectifs. Claws ne cède aucun droit sur ces modèles.
              </p>
            </>)}

            {section("8. Responsabilité", <>
              <p>
                La responsabilité de Claws est limitée aux dommages directs et prouvés causés par une faute de sa part. En aucun cas Claws ne pourra être tenu responsable de dommages indirects (perte de chiffre d&apos;affaires, manque à gagner, perte de données, etc.).
              </p>
              <p style={{ marginTop: 12 }}>
                Le plafond d&apos;indemnisation est fixé au montant total des sommes effectivement payées par le Client au titre du contrat concerné au cours des 12 derniers mois précédant le sinistre.
              </p>
              <p style={{ marginTop: 12 }}>
                Claws n&apos;est pas responsable des contenus générés par les modèles d&apos;IA tiers intégrés dans les agents déployés.
              </p>
            </>)}

            {section("9. Confidentialité", <>
              <p>
                Chaque partie s&apos;engage à maintenir strictement confidentielles toutes les informations de nature confidentielle communiquées par l&apos;autre partie dans le cadre de la mission, et ce pendant une durée de 3 ans après la fin du contrat.
              </p>
            </>)}

            {section("10. Données personnelles", <>
              <p>
                Le traitement des données personnelles dans le cadre des prestations est régi par l&apos;{" "}
                <a href="/dpa" style={{ color: "#E85D04", textDecoration: "none" }}>Accord de traitement des données (DPA)</a>{" "}
                conclu entre les parties, conformément au RGPD.
              </p>
            </>)}

            {section("11. Durée et résiliation", <>
              <p>
                La durée de la mission est définie dans le devis. En cas de manquement grave de l&apos;une des parties à ses obligations, l&apos;autre partie peut résilier le contrat après mise en demeure restée sans effet pendant 30 jours.
              </p>
            </>)}

            {section("12. Force majeure", <>
              <p>
                Aucune des parties ne pourra être tenue responsable d&apos;un manquement résultant d&apos;un cas de force majeure au sens de l&apos;article 1218 du Code civil.
              </p>
            </>)}

            {section("13. Droit applicable et juridiction", <>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux de Nanterre seront seuls compétents.
              </p>
            </>)}

          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
