"use client";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/blog", label: "Blog" },
    { href: "/securite", label: "Sécurité" },
    { href: "/faq", label: "FAQ" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <nav className="nav-bar">
      <a href="/" className="nav-logo">
        <img src="/logo-claws.png" alt="Claws" style={{ height: "28px", width: "auto", verticalAlign: "middle", marginRight: "8px" }} />
        Claws
      </a>

      {/* Desktop */}
      <div className="nav-links nav-desktop">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
        <a href="#contact" className="nav-cta">Contact →</a>
      </div>

      {/* Mobile — hamburger */}
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", marginBottom: 5, transition: "all 0.2s", transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", marginBottom: 5, transition: "all 0.2s", opacity: open ? 0 : 1 }} />
        <span style={{ display: "block", width: 22, height: 2, background: "#0E0E0E", transition: "all 0.2s", transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-drawer-link">{l.label}</a>
          ))}
          <a href="#contact" className="nav-drawer-cta">Contact →</a>
        </div>
      )}
    </nav>
  );
}
