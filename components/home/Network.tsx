"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Editorial network list — like a magazine contents page ──────────────
   No cards. Each property is a full-width horizontal row.
   Thin bottom border is the only separator.
─────────────────────────────────────────────────────────────────────────── */

const properties = [
  {
    name: "LesportifPlus",
    vertical: "Sports",
    description: "Premier sports news & analysis platform across North Africa and the Maghreb.",
    audience: "4.2M monthly",
    href: "https://lesportifplus.com",
    accentColor: "#2563EB",
  },
  {
    name: "EconomySignals",
    vertical: "Finance",
    description: "Real-time economic intelligence for investors and business decision-makers.",
    audience: "1.8M monthly",
    href: "#",
    accentColor: "#06B6D4",
  },
  {
    name: "FormalGeek",
    vertical: "Tech",
    description: "In-depth AI tools and innovation reviews for senior tech professionals.",
    audience: "980K monthly",
    href: "#",
    accentColor: "#2563EB",
  },
];

export default function Network({ backgroundColor = "var(--color-canvas)" }: { backgroundColor?: string }) {
  return (
    <section
      id="network"
      style={{
        backgroundColor,
        borderTop: "1px solid var(--color-border)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 48,
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#2563EB",
                  marginBottom: 20,
                }}
              >
                Our Network
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4.5vw, 60px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Owned media properties.<br />First-party data built-in.
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-muted-foreground)",
                maxWidth: 280,
                lineHeight: 1.7,
                textAlign: "right",
              }}
            >
              Each property serves a distinct audience segment — generating proprietary intent signals.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Column headers ──────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 3fr 1fr 40px",
            gap: 24,
            padding: "12px 0",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            marginBottom: 0,
          }}
          id="net-header"
        >
          {["Property", "Vertical", "About", "Reach", ""].map((h) => (
            <span
              key={h}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-muted-foreground)",
                opacity: 0.6,
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* ── Property rows ──────────────────────────────────── */}
        {properties.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 80}>
            <Link
              href={p.href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="net-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 3fr 1fr 40px",
                  gap: 24,
                  padding: "28px 0",
                  borderBottom: "1px solid var(--color-border)",
                  alignItems: "center",
                  transition: "background-color 200ms ease",
                  cursor: "pointer",
                }}
              >
                {/* Property name */}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(18px, 2.2vw, 28px)",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </span>

                {/* Vertical badge */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: p.accentColor,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: `1px solid ${p.accentColor}`,
                    padding: "3px 10px",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {p.vertical}
                </span>

                {/* Description */}
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  {p.description}
                </span>

                {/* Audience */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "var(--color-foreground)",
                    fontWeight: 500,
                  }}
                >
                  {p.audience}
                </span>

                {/* Arrow */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 16,
                    color: "var(--color-muted-foreground)",
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}

        {/* ── Footer note ─────────────────────────────────────── */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--color-muted-foreground)",
            marginTop: 24,
            letterSpacing: "0.08em",
            opacity: 0.6,
          }}
        >
          + More properties launching in 2026
        </p>
      </div>

      <style>{`
        .net-row:hover { background-color: var(--color-surface); margin: 0 -40px; padding-left: 40px !important; padding-right: 40px !important; }
        @media (max-width: 900px) {
          #net-header { display: none !important; }
          .net-row { grid-template-columns: 1fr 1fr !important; }
          .net-row > span:nth-child(3),
          .net-row > span:nth-child(5) { display: none !important; }
        }
        @media (max-width: 480px) {
          .net-row { grid-template-columns: 1fr 40px !important; }
          .net-row > span:nth-child(2),
          .net-row > span:nth-child(4) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
