import type { Metadata } from "next";
import Link from "next/link";
import { sectors, sectorSlugs } from "../../sectorData";

const VILLES = [
  { slug: "paris", name: "Paris", dept: "75", region: "Île-de-France" },
  { slug: "lyon", name: "Lyon", dept: "69", region: "Auvergne-Rhône-Alpes" },
  { slug: "marseille", name: "Marseille", dept: "13", region: "PACA" },
  { slug: "bordeaux", name: "Bordeaux", dept: "33", region: "Nouvelle-Aquitaine" },
  { slug: "toulouse", name: "Toulouse", dept: "31", region: "Occitanie" },
  { slug: "nantes", name: "Nantes", dept: "44", region: "Pays de la Loire" },
  { slug: "lille", name: "Lille", dept: "59", region: "Hauts-de-France" },
  { slug: "strasbourg", name: "Strasbourg", dept: "67", region: "Grand Est" },
  { slug: "rennes", name: "Rennes", dept: "35", region: "Bretagne" },
  { slug: "montpellier", name: "Montpellier", dept: "34", region: "Occitanie" },
];

export async function generateStaticParams() {
  const params = [];
  for (const secteur of sectorSlugs) {
    for (const ville of VILLES) {
      params.push({ secteur, ville: ville.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { secteur: string; ville: string } }): Promise<Metadata> {
  const s = sectors[params.secteur];
  const ville = VILLES.find(v => v.slug === params.ville);
  if (!s || !ville) return {};
  return {
    title: `Agent IA pour ${s.name} à ${ville.name} — OpenClaw | Claws`,
    description: `Claws installe un agent IA OpenClaw pour les ${s.name} à ${ville.name}. 100% local, RGPD, configuration en 2h. À partir de 189€.`,
    alternates: { canonical: `https://claws.fr/solutions/${params.secteur}/villes/${params.ville}` },
  };
}

export default function VillePage({ params }: { params: { secteur: string; ville: string } }) {
  const s = sectors[params.secteur];
  const ville = VILLES.find(v => v.slug === params.ville);
  if (!s || !ville) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Claws",
    description: `Agent IA OpenClaw pour les ${s.name} à ${ville.name}`,
    url: `https://claws.fr/solutions/${params.secteur}/villes/${params.ville}`,
    telephone: "+33612345678",
    address: { "@type": "PostalAddress", addressLocality: ville.name, addressRegion: ville.region, addressCountry: "FR" },
    areaServed: { "@type": "City", name: ville.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ fontFamily: "system-ui, sans-serif" }}>
        <section style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A0A00 100%)", padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "rgba(232,93,4,0.15)", border: "1px solid rgba(232,93,4,0.3)", color: "#E85D04", padding: "6px 16px", borderRadius: "40px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
              {ville.name} · {s.name}
            </div>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: "#FFF8F0", lineHeight: 1.15, marginBottom: "20px" }}>
              Agent IA pour les {s.name}<br/>à {ville.name}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,248,240,0.65)", maxWidth: "560px", margin: "0 auto 32px" }}>
              {s.subheadline} 100% local, zéro cloud. Claws intervient à {ville.name} et dans toute la {ville.region}.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/installation" style={{ background: "#E85D04", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
                Démarrer à {ville.name}
              </a>
              <a href="mailto:contact@claws.fr" style={{ background: "rgba(255,255,255,0.08)", color: "#FFF8F0", padding: "14px 28px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem", textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)" }}>
                Contacter l&rsquo;agence
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "16px" }}>Pourquoi les {s.name} de {ville.name} choisissent Claws</h2>
          <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "32px" }}>
            À {ville.name}, les {s.name} font face aux mêmes défis qu&rsquo;ailleurs — sauf que la concurrence locale est intense et que chaque heure gagnée compte davantage. Un agent IA OpenClaw configuré par Claws automatise vos tâches répétitives sans que vos données ne quittent votre bureau à {ville.name}.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {s.useCases.slice(0, 6).map((uc, i) => (
              <div key={i} style={{ background: "#FFF8F0", border: "1px solid #F0E8DC", borderRadius: "8px", padding: "20px" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "8px" }}>{uc.emoji}</div>
                <p style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "6px" }}>{uc.title}</p>
                <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.5 }}>{uc.desc}</p>
                {uc.result && <p style={{ fontSize: "0.78rem", color: "#E85D04", marginTop: "8px", fontWeight: 600 }}>{uc.result}</p>}
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#FFF8F0", padding: "64px 24px" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px" }}>Intervention à {ville.name} et en {ville.region}</h2>
            <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "32px" }}>
              Claws intervient en remote sur toute la France, y compris à {ville.name}. L&rsquo;installation OpenClaw prend 2h en visio, la mise en service le jour même. Pas de déplacement requis.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              {VILLES.filter(v => v.slug !== ville.slug).slice(0, 5).map(v => (
                <Link key={v.slug} href={`/solutions/${params.secteur}/villes/${v.slug}`}
                  style={{ padding: "6px 14px", border: "1px solid #E0D4C8", borderRadius: "40px", fontSize: "0.8rem", color: "#666", textDecoration: "none" }}>
                  {v.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}>Prêt à automatiser votre activité à {ville.name} ?</h2>
          <p style={{ color: "#666", marginBottom: "28px" }}>Installation OpenClaw à partir de 189€. Premier appel de diagnostic gratuit.</p>
          <a href="/installation" style={{ background: "#E85D04", color: "#fff", padding: "16px 32px", borderRadius: "8px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", display: "inline-block" }}>
            Démarrer maintenant
          </a>
          <div style={{ marginTop: "24px" }}>
            <Link href={`/solutions/${params.secteur}`} style={{ color: "#E85D04", textDecoration: "none", fontSize: "0.9rem" }}>
              ← Retour : Claws pour les {s.name}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
