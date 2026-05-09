import type { Metadata } from "next";
import Network from "@/components/home/Network";
import GlobalReach from "@/components/home/GlobalReach";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorkWithUs from "@/components/home/WorkWithUs";
import SpecialistNetworks from "@/components/network/SpecialistNetworks";

export const metadata: Metadata = {
  title: "The DolphX Network — 40+ Media Properties, 150+ Countries",
  description:
    "DolphX operates a global intelligence network: 40+ owned media properties, specialist marketing networks in sports, politics and B2B, and first-party audience data across 150+ countries.",
  openGraph: {
    title: "The DolphX Network",
    description:
      "Sports, political and B2B marketing networks — powered by owned media and 2.4 billion first-party data points.",
    url: "https://dolphx.com/network",
    siteName: "DolphX",
    type: "website",
  },
};


const dataScale = [
  { val: "2.4B+", label: "First-party data points collected annually", desc: "Across all owned properties, every reader action — scroll depth, dwell, click, conversion — is captured and structured." },
  { val: "120M+", label: "Unique monthly readers", desc: "Real, verified audience — no panel extrapolation, no modelled lookalikes. Every figure comes from our own server logs." },
  { val: "150+", label: "Countries represented", desc: "Our properties attract audiences in every major market. Data is consent-based and jurisdiction-compliant across all regions." },
  { val: "98%", label: "Data freshness rate", desc: "Segments are rebuilt on 72-hour refresh cycles. You activate on current behaviour, not six-month-old cookies." },
];

const partnerRegions = [
  { region: "Western Europe", countries: "France, UK, Germany, Spain, Italy, Netherlands, Belgium", strength: "Flagship market — full vertical coverage across all 4 content networks." },
  { region: "North Africa & MENA", countries: "Morocco, Algeria, Tunisia, Egypt, UAE, Saudi Arabia, Qatar", strength: "Sports and civic audiences dominant. LesportifPlus anchors Maghreb reach." },
  { region: "Sub-Saharan Africa", countries: "Nigeria, Kenya, Ghana, South Africa, Senegal", strength: "Growing digital-first audiences. High mobile engagement. Sports and finance focus." },
  { region: "North America", countries: "USA, Canada", strength: "B2B and tech vertical. Decision-maker data from FormalGeek syndication partners." },
  { region: "Asia-Pacific", countries: "Singapore, Australia, India, Japan, South Korea", strength: "Partner syndication layer. Finance and enterprise technology verticals." },
  { region: "Eastern Europe & CIS", countries: "Poland, Romania, Ukraine, Turkey, Russia", strength: "Political and civic coverage. Emerging market B2B pipeline signals." },
];

export default function NetworkPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 100,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-canvas)",
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
                color: "var(--color-eyebrow)",
                marginBottom: 40,
              }}
            >
              The DolphX Network
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 80,
                alignItems: "end",
              }}
              id="net-hero-grid"
            >
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Owned media.
                <br />
                Specialist networks.
                <br />
                <span style={{ color: "var(--color-eyebrow)" }}>150+ countries.</span>
              </h1>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.8,
                    marginBottom: 32,
                  }}
                >
                  DolphX doesn&apos;t rent audiences — we build them. 40+ owned media properties generate 2.4 billion first-party data points every year, structured into specialist networks for sports, political and B2B marketing at global scale.
                </p>

                {/* Key stats inline */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 1,
                    backgroundColor: "var(--color-border)",
                    borderTop: "1px solid var(--color-border)",
                    borderLeft: "1px solid var(--color-border)",
                    borderRight: "1px solid var(--color-border)",
                  }}
                  id="hero-stats-grid"
                >
                  {[
                    { val: "40+", label: "Properties" },
                    { val: "120M+", label: "Readers" },
                    { val: "150+", label: "Countries" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        backgroundColor: "var(--color-canvas)",
                        padding: "20px 20px",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: 28,
                          fontWeight: 400,
                          color: "var(--color-foreground)",
                          letterSpacing: "-0.02em",
                          display: "block",
                        }}
                      >
                        {s.val}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
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
          </ScrollReveal>
        </div>
        <style>{`
          @media(max-width:768px){
            #net-hero-grid{grid-template-columns:1fr!important;gap:40px!important;}
            #hero-stats-grid{grid-template-columns:1fr 1fr!important;}
          }
        `}</style>
      </section>

      {/* ── OWNED PROPERTIES (existing component) ─────────────────── */}
      <Network backgroundColor="var(--color-surface)" />

      {/* ── SPECIALIST NETWORKS ────────────────────────────────────── */}
      <SpecialistNetworks />

      {/* ── DATA AT SCALE — bold ticker-style numbers section ─────── */}
      <section
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: 80,
          paddingBottom: 80,
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
                color: "var(--color-eyebrow)",
                marginBottom: 16,
              }}
            >
              Data at Scale
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                letterSpacing: "-0.02em",
                marginBottom: 56,
              }}
            >
              The intelligence behind every activation.
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {dataScale.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 50}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 1fr 1fr",
                    gap: 32,
                    padding: "32px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "center",
                  }}
                  className="data-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(32px, 3.5vw, 48px)",
                      fontWeight: 400,
                      color: "var(--color-eyebrow)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {item.val}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "var(--color-muted-foreground)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:768px){
            .data-row{grid-template-columns:1fr!important;gap:8px!important;padding:24px 0!important;}
          }
        `}</style>
      </section>

      {/* ── GLOBAL MAP (existing component) ───────────────────────── */}
      <GlobalReach backgroundColor="var(--color-canvas)" />

      {/* ── PARTNER REGIONS — editorial table ─────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-surface)",
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
                gridTemplateColumns: "1fr 1fr",
                gap: 80,
                alignItems: "end",
                marginBottom: 56,
              }}
              id="region-header-grid"
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-eyebrow)",
                    marginBottom: 16,
                  }}
                >
                  Partner Footprint
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(28px, 4vw, 48px)",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  Audience reach
                  <br />
                  across 6 regions.
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Our publishing partners, syndication agreements and co-branded media deals extend DolphX audience reach into 150+ countries — with regional teams ensuring local market relevance and compliance.
              </p>
            </div>
          </ScrollReveal>

          {/* Column labels */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 2fr 2fr",
              gap: 24,
              padding: "10px 0",
              borderTop: "1px solid var(--color-border)",
              borderBottom: "1px solid var(--color-border)",
            }}
            id="region-header-labels"
          >
            {["Region", "Key Markets", "Network Strength"].map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
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

          {partnerRegions.map((r, i) => (
            <ScrollReveal key={r.region} delay={i * 40}>
              <div
                className="region-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 2fr 2fr",
                  gap: 24,
                  padding: "22px 0",
                  borderBottom: "1px solid var(--color-border)",
                  alignItems: "start",
                  transition: "background-color 200ms ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {r.region}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  {r.countries}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "var(--color-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  {r.strength}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <style>{`
          .region-row:hover{background-color:var(--color-surface);margin:0 -40px;padding-left:40px!important;padding-right:40px!important;}
          @media(max-width:768px){
            #region-header-grid{grid-template-columns:1fr!important;gap:24px!important;}
            #region-header-labels,
            .region-row{grid-template-columns:1fr!important;}
            #region-header-labels>span:not(:first-child),
            .region-row>span:nth-child(2){display:none;}
          }
        `}</style>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <WorkWithUs />
    </>
  );
}
