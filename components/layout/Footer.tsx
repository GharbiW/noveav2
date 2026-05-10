"use client";

import Link from "next/link";

const cols = [
  {
    title: "Services",
    links: [
      { label: "All Services",           href: "/services" },
      { label: "Consulting Digital",     href: "/consulting" },
      { label: "Automation & SaaS",      href: "/automation" },
      { label: "AI & Data",             href: "/ai-data" },
      { label: "Média & Distribution",  href: "/media-distribution" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "EconomySignals", href: "#" },
      { label: "FormalGeek",     href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",   href: "/about"   },
      { label: "News",    href: "/news"    },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        padding: "64px 0 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Top grid */}
        <div
          id="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Brand col */}
          <div>
            <Link href="/" aria-label="DolphX home" style={{ textDecoration: "none", display: "inline-block" }}>
              <img src="/brand/logo-white.webp" alt="DolphX" className="footer-logo footer-logo-dark"  style={{ height: 26 }} />
              <img src="/brand/logo-black.webp" alt="DolphX" className="footer-logo footer-logo-light" style={{ height: 26 }} />
            </Link>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--color-muted-foreground)",
                textTransform: "uppercase",
                marginTop: 10,
                marginBottom: 14,
              }}
            >
              Technology-Mediatique Company
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 14,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Operating at the intersection of media intelligence and data technology.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: 20, marginTop: 20, marginBottom: 24 }}>
              {[
                { label: "LinkedIn", href: "#" },
                { label: "X",        href: "#" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: "var(--color-muted-foreground)",
                    textDecoration: "none",
                    transition: "color 200ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted-foreground)")}
                >
                  {s.label}
                </Link>
              ))}
            </div>

            {/* Office */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                {
                  city: "Istanbul",
                  lines: ["Levent Mahallesi, Cömert Sok. 8", "34330 Beşiktaş, Istanbul", "Mon–Fri  10:00–19:00 TRT"],
                },
              ].map((o) => (
                <div key={o.city}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-eyebrow)", marginBottom: 4 }}>
                    {o.city}
                  </p>
                  {o.lines.map((l) => (
                    <p key={l} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 12, color: "var(--color-muted-foreground)", lineHeight: 1.6 }}>{l}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--color-muted-foreground)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 14,
                        color: "var(--color-muted-foreground)",
                        textDecoration: "none",
                        transition: "color 200ms ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted-foreground)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-muted-foreground)",
              letterSpacing: "0.06em",
            }}
          >
            © 2026 DolphX. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-muted-foreground)",
              letterSpacing: "0.06em",
            }}
          >
            Istanbul
          </span>
        </div>
      </div>

      <style>{`
        .footer-logo           { display: block; }
        .footer-logo-light     { display: none !important; }
        html.light .footer-logo-dark   { display: none !important; }
        html.light .footer-logo-light  { display: block !important; }

        @media (max-width: 900px) {
          #footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          #footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
