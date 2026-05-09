import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Why DolphX — high-contrast comparison table ─────────────────────── */

const ACCENT = "#a7f432";

const rows = [
  { feature: "Audience Data",       dolphx: "First-party, owned",              others: "Third-party, rented"      },
  { feature: "Media Properties",    dolphx: "40+ owned & operated",             others: "Zero — agency model"      },
  { feature: "Targeting Precision", dolphx: "Intent signals from real readers", others: "Modelled lookalikes"      },
  { feature: "Reporting",           dolphx: "Real-time, full-funnel",           others: "Monthly PDF summaries"    },
  { feature: "Account Lead",        dolphx: "Senior partner, direct",           others: "Junior account manager"   },
  { feature: "Data Compliance",     dolphx: "GDPR-native, consent-first",       others: "Varies by vendor"         },
  { feature: "Content Production",  dolphx: "In-house editorial team",          others: "Outsourced freelancers"   },
  { feature: "Pricing Model",       dolphx: "Performance-linked KPIs",          others: "Retainer + % of spend"    },
];

export default function ComparisonTable() {
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
          <p className="eyebrow" style={{ marginBottom: 40 }}>Why DolphX</p>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              maxWidth: 700,
              marginBottom: 48,
            }}
          >
            Not another agency.
            <br />
            A fundamentally <span style={{ color: "var(--color-eyebrow)" }}>different</span> model.
          </h2>
        </ScrollReveal>

        {/* Table */}
        <div style={{ border: "1px solid var(--color-border)", overflow: "hidden" }}>
          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 2fr 2fr" }} id="cmp-head">
            <div style={{ padding: "18px 28px", borderBottom: "1px solid var(--color-border)", borderRight: "1px solid var(--color-border)" }} />
            {/* DolphX column */}
            <div
              style={{
                padding: "18px 28px",
                backgroundColor: "rgba(167, 244, 50, 0.07)",
                borderBottom: `2px solid ${ACCENT}`,
                borderRight: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img src="/brand/logo-white.webp" alt="DolphX" className="cmp-logo cmp-logo-dark"  style={{ height: 18 }} />
              <img src="/brand/logo-black.webp" alt="DolphX" className="cmp-logo cmp-logo-light" style={{ height: 18 }} />
            </div>
            {/* Others column */}
            <div style={{ padding: "18px 28px", borderBottom: "1px solid var(--color-border)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-muted-foreground)", opacity: 0.6 }}>
                Traditional Agencies
              </span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <ScrollReveal key={row.feature} delay={i * 30}>
              <div
                className="cmp-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.8fr 2fr 2fr",
                  borderBottom: i < rows.length - 1 ? "1px solid var(--color-border)" : "none",
                  transition: "background-color 200ms ease",
                }}
              >
                {/* Feature name */}
                <div style={{ padding: "20px 28px", borderRight: "1px solid var(--color-border)", display: "flex", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: "var(--color-foreground)" }}>{row.feature}</span>
                </div>

                {/* DolphX value */}
                <div
                  style={{
                    padding: "20px 28px",
                    backgroundColor: "rgba(167,244,50,0.04)",
                    borderRight: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      width: 20, height: 20,
                      backgroundColor: ACCENT,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 11, color: "#0f110c", fontWeight: 700, lineHeight: 1,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 14, color: "var(--color-foreground)" }}>{row.dolphx}</span>
                </div>

                {/* Others value */}
                <div style={{ padding: "20px 28px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 20, height: 20,
                      border: "1px solid var(--color-border-md)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 11, color: "var(--color-muted-foreground)",
                      fontWeight: 400, lineHeight: 1, opacity: 0.5,
                    }}
                  >
                    ✕
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14, color: "var(--color-muted-foreground)", opacity: 0.6 }}>{row.others}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .cmp-logo           { display: block; }
        .cmp-logo-light     { display: none !important; }
        html.light .cmp-logo-dark   { display: none !important; }
        html.light .cmp-logo-light  { display: block !important; }

        .cmp-row:hover > div { background-color: var(--color-surface) !important; }
        .cmp-row:hover > div:nth-child(2) { background-color: rgba(167,244,50,0.07) !important; }

        @media (max-width: 768px) {
          #cmp-head { grid-template-columns: 1fr 1fr !important; }
          #cmp-head > div:nth-child(3) { display: none; }
          .cmp-row { grid-template-columns: 1fr 1fr !important; }
          .cmp-row > div:nth-child(3) { display: none; }
        }
        @media (max-width: 480px) {
          #cmp-head { grid-template-columns: 1fr !important; }
          #cmp-head > div:nth-child(1), #cmp-head > div:nth-child(3) { display: none; }
          .cmp-row { grid-template-columns: 1fr !important; }
          .cmp-row > div:nth-child(1), .cmp-row > div:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  );
}
