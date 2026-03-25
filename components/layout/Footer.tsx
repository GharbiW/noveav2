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
      { label: "LesportifPlus",  href: "#" },
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
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  backgroundColor: "#2563EB",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 19,
                  color: "var(--color-foreground)",
                  letterSpacing: "-0.01em",
                }}
              >
                DolphX
              </span>
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
            <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
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
            © 2025 DolphX. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-muted-foreground)",
              letterSpacing: "0.06em",
            }}
          >
            Paris, France
          </span>
        </div>
      </div>

      <style>{`
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
