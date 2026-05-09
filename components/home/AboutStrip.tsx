"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ACCENT = "#a7f432";

const pillars = [
  {
    title: "Media-Native Infrastructure",
    body: "We don't rent audiences — we operate 40+ owned properties. First-party data is structural, not sourced.",
  },
  {
    title: "Data That Compounds",
    body: "2.4 billion annual touchpoints feed a proprietary intelligence layer — behavioural signals, intent, and attribution built in-house.",
  },
  {
    title: "Enterprise Accountability",
    body: "Contractual KPIs, senior-led accounts, full-funnel reporting. Every mandate closes with verified outcomes.",
  },
];

const keyStats = [
  { val: "40+",   label: "Owned media properties" },
  { val: "120M+", label: "Monthly readers"         },
  { val: "150+",  label: "Countries reached"       },
  { val: "2.4B+", label: "Data points / year"      },
];

export default function AboutStrip() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <ScrollReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 0,
              border: "1px solid var(--color-border)",
            }}
            id="about-grid"
          >
            {/* ── LEFT: Dark panel ── */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(145deg, #141710 0%, #1c1f18 55%, #10120e 100%)",
                padding: "52px 48px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 520,
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Ghost watermark */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: -40,
                  right: -30,
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(120px, 18vw, 220px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.022)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  userSelect: "none",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                DX
              </span>

              {/* Left accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: `linear-gradient(180deg, ${ACCENT} 0%, ${ACCENT}80 60%, transparent 100%)`,
                }}
              />

              {/* Top area */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--color-eyebrow)",
                    marginBottom: 28,
                    marginLeft: 3,
                  }}
                >
                  About DolphX
                </p>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(26px, 3vw, 40px)",
                    fontWeight: 400,
                    color: "#F0F2EA",
                    lineHeight: 1.18,
                    letterSpacing: "-0.025em",
                    margin: 0,
                    marginBottom: 20,
                    maxWidth: 440,
                  }}
                >
                  We own the media, engineer the data, and{" "}
                  <em style={{ fontStyle: "normal", color: "var(--color-eyebrow)" }}>
                    deliver the results.
                  </em>
                </h2>

                <div style={{ width: 32, height: 1, backgroundColor: `${ACCENT}55`, marginBottom: 20 }} />

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "rgba(240,242,234,0.42)",
                    lineHeight: 1.85,
                    margin: 0,
                    maxWidth: 380,
                  }}
                >
                  DolphX is not an agency. We operate a technology-mediatique platform — a proprietary network generating first-party audience intelligence that powers every consulting mandate, automation deployment and distribution campaign we run.
                </p>
              </div>

              {/* Stats */}
              <div style={{ marginTop: 44, position: "relative", zIndex: 1 }}>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  id="about-stats"
                >
                  {keyStats.map((s, i) => (
                    <div
                      key={s.label}
                      style={{
                        padding: "20px 0",
                        paddingRight: i % 2 === 0 ? 24 : 0,
                        paddingLeft:  i % 2 === 1 ? 24 : 0,
                        borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                        borderLeft:   i % 2 === 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 2.8vw, 36px)", fontWeight: 400, color: "#F0F2EA", letterSpacing: "-0.03em", display: "block", lineHeight: 1, marginBottom: 5 }}>
                        {s.val}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,242,234,0.28)" }}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Pillars + CTA ── */}
            <div
              style={{
                backgroundColor: "var(--color-surface)",
                padding: "52px 48px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
                  <div style={{ width: 20, height: 1, backgroundColor: "var(--color-border)" }} />
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-muted-foreground)", margin: 0, opacity: 0.55 }}>
                    Why DolphX
                  </p>
                </div>

                {/* Pillars */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {pillars.map((p, i) => (
                    <div
                      key={p.title}
                      style={{
                        paddingTop: 24,
                        paddingBottom: 24,
                        borderTop: "1px solid var(--color-border)",
                        display: "grid",
                        gridTemplateColumns: "22px 1fr",
                        gap: 18,
                        alignItems: "start",
                        borderBottom: i === pillars.length - 1 ? "1px solid var(--color-border)" : "none",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="8.5" stroke={ACCENT} strokeOpacity="0.3" />
                        <path d="M5.5 9l2.5 2.5 4.5-5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 400, color: "var(--color-foreground)", letterSpacing: "-0.01em", marginBottom: 6 }}>
                          {p.title}
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13, color: "var(--color-muted-foreground)", lineHeight: 1.75, margin: 0 }}>
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 20 }}>
                <Link
                  href="/about"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#F0F2EA",
                    color: "#0f110c",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 13,
                    padding: "12px 26px",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                    transition: "background-color 150ms ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d8dbd2")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F2EA")}
                >
                  Learn about DolphX →
                </Link>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-muted-foreground)", opacity: 0.45 }}>
                  Est. 2019 · Paris, France
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about-grid  { grid-template-columns: 1fr !important; }
          #about-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
