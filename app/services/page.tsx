import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Services from "@/components/home/Services";
import GlobalReach from "@/components/home/GlobalReach";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "Services — DolphX | Consulting, Automation, AI & Data, Media",
  description:
    "DolphX delivers four integrated service pillars: digital consulting, marketing automation & SaaS, AI-powered data intelligence and media distribution — all powered by our proprietary media network.",
  openGraph: {
    title: "Services — DolphX",
    description:
      "Four pillars. One integrated platform. Consulting, automation, AI & data, and media distribution for enterprise clients.",
    url: "https://dolphx.com/services",
    siteName: "DolphX",
    type: "website",
  },
};

const process = [
  {
    step: "01",
    title: "Discovery",
    duration: "1–2 days",
    desc: "We audit your current media assets, audience data and revenue streams to identify the highest-leverage opportunities specific to your context.",
  },
  {
    step: "02",
    title: "Strategy Blueprint",
    duration: "3–5 days",
    desc: "A data-backed strategic plan with clear priorities, projected outcomes and execution timelines — delivered by a senior team member, not a template.",
  },
  {
    step: "03",
    title: "Execution",
    duration: "Ongoing",
    desc: "Our in-house team executes across content, technology and distribution with weekly progress reporting and direct communication.",
  },
  {
    step: "04",
    title: "Measure & Scale",
    duration: "Continuous",
    desc: "Real-time performance monitoring. We double down on what compounds and eliminate what doesn't — no vanity metrics, only business outcomes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 100,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2563EB",
              marginBottom: 40,
            }}
          >
            What We Offer
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "end",
            }}
            id="svc-hero-grid"
          >
            {/* h1 — one per page, keyword-rich */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(44px, 6vw, 80px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              Four pillars.
              <br />
              One integrated
              <br />
              platform
              <span style={{ color: "#2563EB" }}>.</span>
            </h1>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 17,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.8,
                  marginBottom: 36,
                }}
              >
                Every service is structured around one objective — measurable,
                compounding growth through the intersection of owned media and
                engineered audience data. No generic playbooks.
              </p>

              {/* Supporting stats — reinforce authority signals */}
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: 24,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { val: "40+",   label: "Owned Properties" },
                  { val: "120M+", label: "Monthly Readers"  },
                  { val: "98%",   label: "Client Retention" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 26,
                        fontWeight: 400,
                        color: "var(--color-foreground)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.val}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-muted-foreground)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #svc-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── Services (same as homepage — expandable panels with sub-services) ── */}
      <Services showAllServicesLink={false} />

      {/* ── Results & Impact ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-canvas)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Results &amp; Impact
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                maxWidth: 700,
                marginBottom: 24,
              }}
            >
              What our clients <span style={{ color: "#2563EB" }}>achieve</span>.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.8,
                maxWidth: 560,
                marginBottom: 64,
              }}
            >
              Measurable outcomes across every engagement — driven by owned media distribution and proprietary audience data.
            </p>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
            id="impact-grid"
          >
            {[
              { metric: "3.2×", label: "Average ROAS", desc: "Across branded content campaigns leveraging first-party audience segments." },
              { metric: "68%", label: "Lower CPA", desc: "Compared to traditional programmatic channels using third-party data targeting." },
              { metric: "4.8M", label: "Leads Generated", desc: "Qualified enterprise leads delivered through owned media funnels in 2025." },
              { metric: "92%", label: "Viewability Rate", desc: "Across all DolphX media placements — well above the 70% industry benchmark." },
              { metric: "14 days", label: "Time to Launch", desc: "Average campaign activation time from strategy approval to first impression." },
              { metric: "2.1×", label: "Content Engagement", desc: "Higher engagement rate on DolphX properties vs. equivalent paid placements." },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div
                  className="impact-cell"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    padding: "36px 28px",
                    height: "100%",
                    transition: "background-color 200ms ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 36,
                      fontWeight: 400,
                      color: "#2563EB",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {item.metric}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-foreground)",
                      display: "block",
                      marginBottom: 14,
                    }}
                  >
                    {item.label}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 13,
                      color: "var(--color-muted-foreground)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .impact-cell:hover{background-color:var(--color-card)!important;}
          @media(max-width:768px){#impact-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ── Global Reach (interactive map) ──────────────────────── */}
      <GlobalReach />

      {/* ── Engagement process ───────────────────────────────────── */}
      <section
        aria-label="How DolphX engages with clients"
        style={{
          backgroundColor: "var(--color-canvas)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: 100,
          paddingBottom: 100,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Engagement Model
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 56px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                marginBottom: 64,
                maxWidth: 560,
              }}
            >
              A structured process.
              <br />
              Measurable at every stage.
            </h2>
          </ScrollReveal>

          {/* Process rows */}
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 220px 1fr 110px",
                    gap: 32,
                    padding: "32px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "start",
                  }}
                  className="proc-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#2563EB",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {p.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "var(--color-muted-foreground)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--color-muted-foreground)",
                      letterSpacing: "0.08em",
                      textAlign: "right",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {p.duration}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .proc-row { grid-template-columns: 40px 1fr !important; }
            .proc-row > h3 { grid-column: 2; }
            .proc-row > p:nth-child(3) { grid-column: 1 / -1; padding-left: 0; }
            .proc-row > p:nth-child(4) { display: none; }
          }
        `}</style>
      </section>

      <WorkWithUs />
    </>
  );
}
