import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "About DolphX — Technology-Mediatique Company",
  description:
    "DolphX operates at the intersection of media intelligence and data technology. Learn about our mission, network and founding story.",
  openGraph: {
    title: "About DolphX — Technology-Mediatique Company",
    description: "We own the media, engineer the data, and deliver precision growth for enterprise clients.",
    url: "https://dolphx.com/about",
    siteName: "DolphX",
    type: "website",
  },
};

const values = [
  { num: "01", title: "Data-First Decisions", desc: "Every strategic recommendation is grounded in first-party audience data. We never operate on assumptions or industry averages." },
  { num: "02", title: "Editorial Independence", desc: "Our media properties maintain strict editorial standards. Trust is our most valuable asset — commercially and journalistically." },
  { num: "03", title: "Enterprise Accountability", desc: "We work on measurable outcomes. Every engagement is structured around KPIs agreed at kickoff, tracked publicly throughout." },
  { num: "04", title: "Technology as Infrastructure", desc: "We build proprietary tools because off-the-shelf solutions cannot deliver the precision our clients require at scale." },
];

const milestones = [
  { year: "2020", event: "DolphX founded. First media properties acquired and integrated." },
  { year: "2021", event: "Network expanded to 12 properties. Proprietary data platform v1.0 deployed." },
  { year: "2022", event: "Sports and Finance verticals launched. First enterprise client retainers signed." },
  { year: "2023", event: "120M monthly audience reached. AI & Data intelligence platform launched." },
  { year: "2024", event: "Technology vertical launched. Data licensing revenue stream opened." },
  { year: "2025", event: "40+ properties. International expansion into North America and MENA." },
];

const team = [
  { initial: "A", name: "Alexandre D.", role: "Founder & CEO", bio: "Serial entrepreneur with exits in media tech. Built and scaled two digital publishing groups before founding DolphX." },
  { initial: "S", name: "Sophie R.", role: "Chief Data Officer", bio: "Former Head of Audience Intelligence at a FTSE 100 publisher. Leads all data strategy and platform architecture." },
  { initial: "M", name: "Marc K.", role: "Head of Network", bio: "15 years in digital publishing. Responsible for editorial standards across all 40+ media properties." },
  { initial: "J", name: "Julia L.", role: "VP Technology", bio: "Full-stack infrastructure specialist. Oversees the proprietary data platform and all client technology deployments." },
];

const stats = [
  { val: "40+", label: "Media Properties" },
  { val: "120M+", label: "Monthly Audience" },
  { val: "4", label: "Content Verticals" },
  { val: "98%", label: "Client Retention" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────── */}
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
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Who We Are
            </p>

            <div id="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "end" }}>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 5.5vw, 68px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Operating at the intersection of media &amp; data technology<span style={{ color: "#2563EB" }}>.</span>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.8,
                }}
              >
                DolphX is a technology-mediatique company. We own and operate a network of trusted media properties and leverage proprietary audience data to deliver high-impact results for enterprise clients.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#about-hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      {/* ── Stats Strip ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}
            id="about-stats"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "40px 0",
                  borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                  paddingRight: i < 3 ? 32 : 0,
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
        <style>{`@media(max-width:768px){#about-stats{grid-template-columns:repeat(2,1fr)!important;}#about-stats>div{border-right:none!important;padding:24px 0!important;border-bottom:1px solid var(--color-border);}}`}</style>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
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
              Our Mission
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4.5vw, 60px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                maxWidth: 800,
                marginBottom: 40,
              }}
            >
              Turn audience trust into <span style={{ color: "#2563EB" }}>measurable enterprise value</span>.
            </h2>

            <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 40 }} />

            <div id="mission-text" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, maxWidth: 900 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15, color: "var(--color-muted-foreground)", lineHeight: 1.8 }}>
                The media industry is undergoing a structural shift. Audiences have never been more fragmented — yet never more valuable to the brands that can reach them with precision and credibility.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 15, color: "var(--color-muted-foreground)", lineHeight: 1.8 }}>
                Our mission is to build the infrastructure that bridges editorial trust and data-driven performance — for publishers, brands and investors who demand measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#mission-text{grid-template-columns:1fr!important;gap:24px!important;}}`}</style>
      </section>

      {/* ── Principles ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
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
              Our Principles
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 56,
              }}
            >
              How we operate<span style={{ color: "#2563EB" }}>.</span>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {values.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 60}>
                <div
                  className="val-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 200px 1fr",
                    gap: 32,
                    padding: "28px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "baseline",
                    transition: "background-color 200ms ease",
                  }}
                  id="val-row"
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2563EB", letterSpacing: "0.1em" }}>{v.num}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 400, color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>{v.title}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.75 }}>{v.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .val-row:hover{background-color:var(--color-card);padding-left:16px;padding-right:16px;}
          @media(max-width:768px){#val-row{grid-template-columns:40px 1fr!important;}.val-row>span:last-child{grid-column:1/-1;}}
        `}</style>
      </section>

      {/* ── Team ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
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
              Leadership
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 56,
              }}
            >
              The people behind DolphX<span style={{ color: "#2563EB" }}>.</span>
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 1,
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
            id="team-grid"
          >
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <div
                  style={{
                    backgroundColor: "var(--color-canvas)",
                    padding: "32px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "background-color 200ms ease",
                  }}
                  className="team-cell"
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      backgroundColor: "#2563EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-serif)",
                      fontSize: 18,
                      marginBottom: 24,
                    }}
                  >
                    {m.initial}
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, color: "var(--color-foreground)", marginBottom: 4 }}>{m.name}</p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2563EB", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.role}</p>
                  <p style={{ fontSize: 13, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.75, marginTop: "auto" }}>{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .team-cell:hover{background-color:var(--color-surface)!important;}
          @media(max-width:900px){#team-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:480px){#team-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ── Milestones ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
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
              Company History
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: 56,
              }}
            >
              Milestones<span style={{ color: "#2563EB" }}>.</span>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 50}>
                <div
                  className="ms-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 40,
                    padding: "24px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "baseline",
                    transition: "background-color 200ms ease",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "#2563EB", letterSpacing: "0.05em" }}>{m.year}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-foreground)", fontWeight: 300, lineHeight: 1.7 }}>{m.event}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`.ms-row:hover{background-color:var(--color-card);padding-left:16px;padding-right:16px;}`}</style>
      </section>

      <WorkWithUs />
    </>
  );
}
