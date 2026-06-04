"use client";
import { useState } from "react";

// Tasks that are typically automatable
const TASKS = [
  { id: "crm", label: "Mise à jour CRM après chaque appel", default: 4, hPerWeek: 0.25 },
  { id: "relances", label: "Relances clients et prospects", default: 3, hPerWeek: 0.5 },
  { id: "reporting", label: "Reporting hebdomadaire / forecast", default: 2, hPerWeek: 1.5 },
  { id: "emails", label: "Emails récurrents (onboarding, suivi)", default: 5, hPerWeek: 0.2 },
  { id: "qualification", label: "Qualification manuelle de leads entrants", default: 3, hPerWeek: 0.4 },
  { id: "devis", label: "Génération de devis et propositions", default: 2, hPerWeek: 1.0 },
];

const fmt = (n: number, decimals = 0) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: decimals }).format(n);

export default function ROISimulator() {
  const [step, setStep] = useState(0);
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(TASKS.map((t) => [t.id, t.default]))
  );
  const [reps, setReps] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; x: number; c: string; s: number; d: number; dl: number; r: boolean }[]>([]);

  const totalHoursPerWeekPerRep = TASKS.reduce(
    (acc, t) => acc + (counts[t.id] ?? 0) * t.hPerWeek,
    0
  );
  const totalHoursPerWeek = totalHoursPerWeekPerRep * reps;
  const totalHoursPerYear = totalHoursPerWeek * 46; // ~46 working weeks
  const costPerYear = totalHoursPerYear * hourlyRate;
  const automatable = 0.72; // 72% of these tasks are automatable by an agent
  const savedHours = totalHoursPerYear * automatable;
  const savedCost = costPerYear * automatable;
  const agentCost = 4800; // typical annual agent deployment cost
  const roi = ((savedCost - agentCost) / agentCost) * 100;
  const paybackWeeks = Math.round((agentCost / (savedCost / 52)) * 10) / 10;

  function triggerConfetti() {
    const colors = ["#E85D04", "#fb923c", "#fff", "#fbbf24", "#f97316"];
    const pieces = Array.from({ length: 55 }, (_, i) => ({
      id: i, x: Math.random() * 100,
      c: colors[Math.floor(Math.random() * colors.length)],
      s: 5 + Math.random() * 8,
      d: 1.5 + Math.random() * 2,
      dl: Math.random() * 0.7,
      r: Math.random() > 0.5,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4000);
  }

  function handleSubmit() {
    if (!email || !email.includes("@")) { setEmailError(true); return; }
    setEmailError(false);
    setSubmitted(true);
    triggerConfetti();
  }

  const accent = "#E85D04";
  const accentLight = "rgba(232,93,4,0.18)";
  const accentBorder = "rgba(232,93,4,0.45)";

  const S: Record<string, React.CSSProperties> = {
    wrap: {
      background: "#1a1512", border: `1px solid ${accentBorder}`,
      borderRadius: 16, padding: "28px 28px 24px", margin: "40px 0", position: "relative", overflow: "hidden",
    },
    glow: { position: "absolute", top: -50, right: -50, width: 220, height: 220, background: `radial-gradient(circle,rgba(232,93,4,0.22) 0%,transparent 70%)`, pointerEvents: "none" },
    inner: { position: "relative", zIndex: 1 },
    hdr: { marginBottom: 24 },
    badge: { display: "inline-block", background: accentLight, border: `1px solid ${accentBorder}`, color: "#ff8c47", fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, marginBottom: 10, fontFamily: "var(--font-mono,monospace)" },
    h3: { fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 800, color: "#fff", marginBottom: 4, letterSpacing: "-0.02em" },
    sub: { fontSize: 13, color: "rgba(255,255,255,0.65)" },
    dotsRow: { display: "flex", gap: 6, marginBottom: 22 },
    stepLbl: { fontSize: 9, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#ff8c47", marginBottom: 5, fontFamily: "var(--font-mono,monospace)" },
    slideTitle: { fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 3 },
    slideSub: { fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 20 },
    taskGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 22 },
    taskCard: { background: "#252018", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 10, padding: "12px", cursor: "pointer", transition: "all .15s" },
    taskCardActive: { background: accentLight, border: `1px solid ${accentBorder}` },
    taskLabel: { fontSize: 11, color: "rgba(255,255,255,0.85)", marginBottom: 8, lineHeight: 1.4 },
    counterRow: { display: "flex", alignItems: "center", gap: 8 },
    counterBtn: { width: 26, height: 26, borderRadius: 6, background: "#333", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "inherit" },
    counterVal: { fontSize: 17, fontWeight: 900, color: "#ff8c47", minWidth: 22, textAlign: "center", fontVariantNumeric: "tabular-nums" },
    labelRow: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 12 },
    valBig: { fontSize: 20, fontWeight: 900, color: "#ff8c47", fontVariantNumeric: "tabular-nums" },
    rangeLabels: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 5 },
    btnPrimary: { width: "100%", padding: "13px", borderRadius: 10, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", background: `linear-gradient(135deg,${accent},#f97316)`, color: "#fff", fontFamily: "inherit", transition: "all .2s" },
    btnGhost: { width: "100%", padding: "10px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.25)", fontSize: 12, fontWeight: 600, cursor: "pointer", background: "transparent", color: "rgba(255,255,255,0.65)", marginTop: 8, fontFamily: "inherit" },
    resGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 },
    resCard: { borderRadius: 10, padding: "14px" },
    resLabel: { fontSize: 9, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 5, fontFamily: "var(--font-mono,monospace)" },
    resVal: { fontSize: 20, fontWeight: 900, fontVariantNumeric: "tabular-nums", lineHeight: 1.1 },
    resSub: { fontSize: 10, color: "rgba(255,255,255,0.5)", marginTop: 3 },
    ctaBox: { background: "linear-gradient(135deg,rgba(232,93,4,0.2),rgba(249,115,22,0.1))", border: `1px solid ${accentBorder}`, borderRadius: 12, padding: "20px", textAlign: "center" },
    ctaForm: { display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" as const },
    ctaInput: { flex: 1, minWidth: 0, background: "#252018", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "10px 12px", color: "#fff", fontSize: 13, outline: "none", fontFamily: "inherit" },
    ctaBtn: { padding: "10px 16px", background: `linear-gradient(135deg,${accent},#f97316)`, color: "#fff", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" as const },
  };

  const dotStyle = (i: number): React.CSSProperties => ({
    height: 3, flex: 1, maxWidth: 70, borderRadius: 2,
    background: i < step ? "#f97316" : i === step ? accent : "rgba(255,255,255,0.2)",
    transition: "background .3s",
  });

  return (
    <div style={S.wrap}>
      <div style={S.glow} />

      {confetti.length > 0 && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 999 }}>
          {confetti.map((c) => (
            <div key={c.id} style={{
              position: "absolute", top: -10, left: `${c.x}vw`,
              width: c.s, height: c.s, background: c.c,
              borderRadius: c.r ? "50%" : 2,
              animation: `roi-fall ${c.d}s linear ${c.dl}s forwards`,
            }} />
          ))}
        </div>
      )}

      <style>{`
        @keyframes roi-fall { to { transform: translateY(105vh) rotate(720deg); opacity: 0; } }
        @keyframes roi-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .roi-slide { animation: roi-in .28s ease; }
        input[type=range].roi-range { -webkit-appearance:none; width:100%; height:6px; border-radius:3px; background:#333; outline:none; cursor:pointer; margin-bottom:5px; }
        input[type=range].roi-range::-webkit-slider-thumb { -webkit-appearance:none; width:22px; height:22px; border-radius:50%; background:${accent}; border:2px solid #1a1512; box-shadow:0 0 12px rgba(232,93,4,.7); cursor:pointer; }
        .roi-task-card:hover { background: ${accentLight} !important; border-color: ${accentBorder} !important; }
        .roi-counter-btn:hover { background: ${accentLight} !important; border-color: ${accentBorder} !important; color: #ff8c47 !important; }
      `}</style>

      <div style={S.inner}>
        <div style={S.hdr}>
          <div style={S.badge}>Simulateur ROI</div>
          <div style={S.h3}>Combien d&apos;heures votre équipe perd sur des tâches automatisables ?</div>
          <div style={S.sub}>3 étapes · estimé en 1 minute</div>
        </div>

        <div style={S.dotsRow}>
          {[0,1,2,3].map(i => <div key={i} style={dotStyle(i)} />)}
        </div>

        {/* Step 1 — tasks */}
        {step === 0 && (
          <div className="roi-slide">
            <div style={S.stepLbl}>Étape 1 / 3</div>
            <div style={S.slideTitle}>Combien de fois par semaine chaque tâche se répète-t-elle ?</div>
            <div style={S.slideSub}>Par commercial · ajustez les compteurs</div>
            <div style={S.taskGrid}>
              {TASKS.map((t) => (
                <div key={t.id} className="roi-task-card" style={{ ...S.taskCard, ...(counts[t.id] > 0 ? S.taskCardActive : {}) }}>
                  <div style={S.taskLabel}>{t.label}</div>
                  <div style={S.counterRow}>
                    <button className="roi-counter-btn" style={S.counterBtn}
                      onClick={() => setCounts(c => ({ ...c, [t.id]: Math.max(0, (c[t.id] ?? 0) - 1) }))}>−</button>
                    <span style={S.counterVal}>{counts[t.id] ?? 0}</span>
                    <button className="roi-counter-btn" style={S.counterBtn}
                      onClick={() => setCounts(c => ({ ...c, [t.id]: (c[t.id] ?? 0) + 1 }))}>+</button>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>×/sem</span>
                  </div>
                </div>
              ))}
            </div>
            <button style={S.btnPrimary} onClick={() => setStep(1)}>Continuer →</button>
          </div>
        )}

        {/* Step 2 — team + rate */}
        {step === 1 && (
          <div className="roi-slide">
            <div style={S.stepLbl}>Étape 2 / 3</div>
            <div style={S.slideTitle}>Votre équipe commerciale</div>
            <div style={S.slideSub}>Pour calculer l&apos;impact total</div>

            <div style={{ marginBottom: 22 }}>
              <div style={S.labelRow}>
                <span>Commerciaux</span>
                <span style={S.valBig}>{reps}</span>
              </div>
              <input className="roi-range" type="range" min={1} max={50} step={1} value={reps}
                onChange={e => setReps(+e.target.value)} />
              <div style={S.rangeLabels}><span>1</span><span>50</span></div>
            </div>

            <div style={{ marginBottom: 22 }}>
              <div style={S.labelRow}>
                <span>Coût horaire moyen</span>
                <span style={S.valBig}>{hourlyRate}€/h</span>
              </div>
              <input className="roi-range" type="range" min={20} max={200} step={5} value={hourlyRate}
                onChange={e => setHourlyRate(+e.target.value)} />
              <div style={S.rangeLabels}><span>20€</span><span>200€</span></div>
            </div>

            <button style={S.btnPrimary} onClick={() => { setStep(3); triggerConfetti(); }}>⚡ Calculer mon ROI</button>
            <button style={S.btnGhost} onClick={() => setStep(0)}>← Retour</button>
          </div>
        )}

        {/* Results */}
        {step === 3 && (
          <div className="roi-slide">
            <div style={S.stepLbl}>Votre potentiel</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              {fmt(totalHoursPerYear)} h/an perdues sur des tâches automatisables
            </div>

            <div style={S.resGrid}>
              <div style={{ ...S.resCard, background: "rgba(232,93,4,0.18)", border: `1px solid rgba(232,93,4,0.45)` }}>
                <div style={S.resLabel}>Heures perdues / an</div>
                <div style={{ ...S.resVal, color: "#ff8c47" }}>{fmt(totalHoursPerYear)}h</div>
                <div style={S.resSub}>pour toute l&apos;équipe</div>
              </div>
              <div style={{ ...S.resCard, background: "#252018", border: "1px solid rgba(255,255,255,0.2)" }}>
                <div style={S.resLabel}>Coût annuel</div>
                <div style={{ ...S.resVal, color: "#fbbf24" }}>{fmt(costPerYear)} €</div>
                <div style={S.resSub}>à charge salariale</div>
              </div>
              <div style={{ ...S.resCard, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)" }}>
                <div style={S.resLabel}>Heures récupérables</div>
                <div style={{ ...S.resVal, color: "#4ade80" }}>{fmt(savedHours)}h</div>
                <div style={S.resSub}>72% automatisables par IA</div>
              </div>
              <div style={{ ...S.resCard, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)" }}>
                <div style={S.resLabel}>Économie potentielle</div>
                <div style={{ ...S.resVal, color: "#4ade80" }}>{fmt(savedCost)} €</div>
                <div style={S.resSub}>sur 12 mois</div>
              </div>
            </div>

            {/* ROI meter */}
            <div style={{ background: "#252018", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-mono,monospace)", textTransform: "uppercase", letterSpacing: "1px" }}>ROI estimé</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: roi > 0 ? "#4ade80" : "#f87171" }}>
                  {roi > 0 ? "+" : ""}{fmt(roi)}%
                </span>
              </div>
              <div style={{ display: "flex", gap: 20, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                <span>Retour sur investissement en <strong style={{ color: "#fff" }}>{paybackWeeks < 1 ? "moins de 1 sem." : `${paybackWeeks} sem.`}</strong></span>
              </div>
            </div>

            {!submitted ? (
              <div style={S.ctaBox}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                  Voyez comment déployer ces automatisations
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                  Recevez un plan d&apos;automatisation personnalisé pour votre équipe.
                </div>
                <div style={S.ctaForm}>
                  <input style={{ ...S.ctaInput, borderColor: emailError ? "#f87171" : "rgba(255,255,255,0.1)" }}
                    type="email" placeholder="votre@email.com" value={email}
                    onChange={e => { setEmail(e.target.value); setEmailError(false); }} />
                  <button style={S.ctaBtn} onClick={handleSubmit}>Plan gratuit →</button>
                </div>
              </div>
            ) : (
              <div style={{ ...S.ctaBox, padding: "22px" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>✅</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>Reçu !</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                  Notre équipe vous prépare un plan d&apos;automatisation sous 24h.
                </div>
              </div>
            )}

            <button style={S.btnGhost} onClick={() => { setStep(0); }}>Recalculer</button>
          </div>
        )}
      </div>
    </div>
  );
}
