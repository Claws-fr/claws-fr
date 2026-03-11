export default function AuthorBio() {
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      padding: "24px",
      background: "rgba(0,0,0,0.03)",
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius: "8px",
      margin: "40px 0 32px",
    }}>
      {/* Avatar */}
      <div style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #E85D04 0%, #9a3c02 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: "20px",
        fontWeight: 700,
        color: "#fff",
        fontFamily: "var(--font-mono, monospace)",
      }}>
        JD
      </div>

      {/* Info */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
          <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1a1a" }}>Julie Decroix</span>
          <span style={{
            fontSize: "0.7rem",
            fontFamily: "var(--font-mono, monospace)",
            color: "#E85D04",
            background: "rgba(232,93,4,0.1)",
            padding: "2px 8px",
            borderRadius: "4px",
            letterSpacing: "0.06em",
          }}>
            CO-FONDATRICE CLAWS
          </span>
        </div>
        <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.55)", margin: "0 0 10px", lineHeight: 1.6 }}>
          Spécialiste OpenClaw et agents IA autonomes. Co-fondatrice de Claws, première agence française dédiée à l&apos;installation et la configuration professionnelle d&apos;OpenClaw.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="https://www.linkedin.com/in/julie-d-712868181"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.78rem", color: "#E85D04", textDecoration: "none", fontFamily: "var(--font-mono, monospace)" }}
          >
            LinkedIn →
          </a>
          <a
            href="https://claws.fr"
            style={{ fontSize: "0.78rem", color: "rgba(0,0,0,0.35)", textDecoration: "none", fontFamily: "var(--font-mono, monospace)" }}
          >
            claws.fr
          </a>
        </div>
      </div>
    </div>
  );
}
