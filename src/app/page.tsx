export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-brand/95 backdrop-blur-sm">
        <span className="text-xl font-bold tracking-tight text-ink">Claws</span>
        <a
          href="#contact"
          className="text-sm font-medium text-accent hover:underline underline-offset-4 transition-all"
        >
          Contact →
        </a>
      </nav>

      <main className="pt-24">

        {/* SECTION 1 — OUVERTURE */}
        <section className="px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32 border-b border-ink/10">
          <div className="max-w-5xl">
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-10">
              Paris · 2025 · Agents IA autonomes
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight text-ink max-w-4xl">
              87 % des tâches répétitives de votre équipe
              <span className="text-accent"> sont automatisables.</span>
            </h1>
            <div className="mt-12 md:mt-16 border-l-2 border-accent pl-6">
              <p className="text-xl md:text-2xl font-medium text-ink/80 leading-relaxed max-w-xl">
                Claws les automatise.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — LE PROBLÈME */}
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-ink/10">
          <div className="max-w-5xl grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest uppercase text-muted">
                Le problème
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                Ce que vos outils actuels ne font pas.
              </h2>
              <p className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
                ChatGPT répond. Votre agent Claws{" "}
                <span className="text-ink font-medium">agit</span>. Il envoie,
                planifie, analyse et revient avec un résultat — sans que vous
                ayez ouvert un seul onglet.
              </p>
              <p className="mt-6 text-lg md:text-xl text-ink/70 leading-relaxed max-w-2xl">
                Un agent IA n'est pas un chatbot. C'est un collaborateur
                disponible 24h/24, connecté à vos outils, qui prend des
                initiatives et vous rend compte.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — OFFRES */}
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-ink/10">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted">
                  Offres
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Ce qu'on fait pour vous.
                </h2>
              </div>
            </div>

            <div className="divide-y divide-ink/10 border-t border-ink/10">

              {/* Offre 1 */}
              <div className="py-10 grid md:grid-cols-12 gap-6 group">
                <div className="md:col-span-4">
                  <p className="font-mono text-sm font-medium text-muted tracking-wide">
                    — SETUP
                  </p>
                  <p className="font-mono text-3xl font-bold text-accent mt-2">
                    199 €
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-semibold mb-3">
                    Installation OpenClaw
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    Installation et configuration d'OpenClaw sur votre machine.
                    Canal Telegram ou WhatsApp connecté. Opérationnel en 48h.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-5 text-sm font-medium text-accent border border-accent px-5 py-2.5 hover:bg-accent hover:text-brand transition-all"
                  >
                    Démarrer →
                  </a>
                </div>
              </div>

              {/* Offre 2 */}
              <div className="py-10 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <p className="font-mono text-sm font-medium text-muted tracking-wide">
                    — AGENT SUR MESURE
                  </p>
                  <p className="font-mono text-3xl font-bold text-accent mt-2">
                    Sur devis
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-semibold mb-3">
                    Un agent pensé pour votre workflow
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    Analyse de vos processus, configuration d'un agent
                    entièrement personnalisé, intégrations avec vos outils
                    existants, formation de votre équipe.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-5 text-sm font-medium text-accent border border-accent px-5 py-2.5 hover:bg-accent hover:text-brand transition-all"
                  >
                    Discutons →
                  </a>
                </div>
              </div>

              {/* Offre 3 */}
              <div className="py-10 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <p className="font-mono text-sm font-medium text-muted tracking-wide">
                    — RETAINER
                  </p>
                  <p className="font-mono text-3xl font-bold text-accent mt-2">
                    149 €<span className="text-lg font-normal text-muted">/mois</span>
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-xl font-semibold mb-3">
                    Maintenance et évolutions continues
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    Maintenance, mises à jour, support direct. Un interlocuteur
                    — pas un ticket. Votre agent évolue avec votre activité.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-5 text-sm font-medium text-accent border border-accent px-5 py-2.5 hover:bg-accent hover:text-brand transition-all"
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4 — COMMENT ÇA MARCHE */}
        <section className="px-6 md:px-12 py-24 md:py-32 border-b border-ink/10">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="font-mono text-xs tracking-widest uppercase text-muted">
                  Comment
                </p>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Trois étapes. Pas plus.
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border-t border-ink/10">
              {[
                {
                  num: "01",
                  title: "On écoute.",
                  desc: "Appel de 30 minutes pour comprendre votre activité, vos outils, vos points de friction.",
                },
                {
                  num: "02",
                  title: "On installe.",
                  desc: "Configuration complète de l'agent sur votre machine. Sécurisé, local, aucune donnée dans le cloud.",
                },
                {
                  num: "03",
                  title: "Votre agent travaille.",
                  desc: "Pendant que vous dormez, votre agent gère, planifie, répond. Vous vous concentrez sur l'essentiel.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="py-10 pr-10 border-b md:border-b-0 md:border-r border-ink/10 last:border-r-0"
                >
                  <p className="font-mono text-5xl font-bold text-ink/10 mb-6">
                    {step.num}
                  </p>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-ink/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — CONTACT */}
        <section id="contact" className="px-6 md:px-12 py-24 md:py-40">
          <div className="max-w-5xl grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest uppercase text-muted">
                Contact
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Discutons.
              </h2>
              <a
                href="mailto:contact@claws.fr"
                className="text-2xl md:text-3xl font-medium text-accent hover:underline underline-offset-4 transition-all block mb-4"
              >
                contact@claws.fr
              </a>
              <p className="font-mono text-sm text-muted">
                Réponse sous 24h.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 py-6 border-t border-ink/10 flex items-center justify-between">
        <p className="font-mono text-xs text-muted">© 2025 Claws — Paris</p>
        <a
          href="mailto:contact@claws.fr"
          className="font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          contact@claws.fr
        </a>
      </footer>
    </>
  );
}
