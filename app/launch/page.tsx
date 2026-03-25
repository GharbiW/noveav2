import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Media Launch Services — DolphX | From Strategy to Distribution",
  description:
    "DolphX end-to-end media launch services: content strategy, editorial production, distribution across 40+ properties, and performance analytics.",
  openGraph: {
    title: "Media Launch Services — DolphX",
    description: "End-to-end media launch: strategy, editorial production and distribution across our network.",
    url: "https://dolphx.com/launch",
    siteName: "DolphX",
    type: "website",
  },
};

const phases = [
  { day: "Phase 1", title: "Audience & Market Analysis", desc: "We map your target audience across our network. Where are they? What do they read? What drives them to act? Delivered within 48 hours of brief." },
  { day: "Phase 2", title: "Content Strategy & Positioning", desc: "Strategic brief: messaging architecture, editorial angles, distribution channel selection and KPI framework agreed upfront." },
  { day: "Phase 3", title: "Production", desc: "Editorial creation — long-form content, video scripts, native ad copy, visual assets — executed in parallel by specialist teams." },
  { day: "Phase 4", title: "Distribution & Amplification", desc: "Content deployed across targeted DolphX properties and partner networks. Paid amplification layered on high-performing placements." },
  { day: "Phase 5", title: "Performance Reporting", desc: "Real-time dashboard with reach, engagement, conversion and ROI data. Full attribution from impression to action." },
];

const includes = [
  "Audience analysis across 40+ properties",
  "Full content strategy and positioning brief",
  "Editorial production (articles, video, native ads)",
  "Multi-property distribution at scale",
  "Paid amplification on high-intent inventory",
  "Real-time performance dashboard",
  "30-day optimisation period",
  "Complete asset ownership and data handoff",
];

export default function LaunchPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-canvas)" }} className="">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Launch Services</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: "var(--color-foreground)", lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 24, maxWidth: 680 }}>
              End-to-End Media Launch. Audience to Revenue.
            </h1>
            <p style={{ fontSize: 17, fontWeight: 300, color: "var(--color-muted-foreground)", maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
              From audience intelligence to full-scale distribution — DolphX manages every element of your media launch, backed by first-party data and 40+ owned properties.
            </p>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#2563EB", color: "#fff", padding: "14px 32px", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              Brief Us on Your Launch
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* What's included */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} id="launch-split">
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>What&apos;s Included</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 32 }}>
              Everything Required for a Successful Media Launch
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {includes.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ color: "#10B981", fontFamily: "var(--font-mono)", fontSize: 14, paddingTop: 1 }}>✓</span>
                  <span style={{ fontSize: 14, fontWeight: 300, color: "var(--color-foreground)", lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)", padding: "36px 32px" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2563EB", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Network Reach</p>
              {[
                ["40+", "Owned media properties"],
                ["120M+", "Monthly unique readers"],
                ["4", "Content verticals"],
                ["12", "Countries covered"],
              ].map(([val, label], i) => (
                <div key={label} style={{ display: "flex", gap: 20, padding: "16px 0", borderBottom: i < 3 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "#2563EB", minWidth: 80 }}>{val}</span>
                  <span style={{ fontSize: 14, color: "var(--color-muted-foreground)", fontWeight: 300, alignSelf: "center" }}>{label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#launch-split{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "var(--color-canvas)", paddingTop: 96, paddingBottom: 96 }} className="">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>The Launch Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 56, maxWidth: 480 }}>
              Five Phases. One Integrated Execution.
            </h2>
          </ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--color-border)" }}>
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.day} delay={i * 80}>
                <div style={{ backgroundColor: "var(--color-card)", padding: "28px 32px", display: "grid", gridTemplateColumns: "140px 1fr", gap: 32 }} id={`phase-row-${i}`}>
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2563EB", letterSpacing: "0.15em", marginBottom: 4 }}>{phase.day}</p>
                    <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-foreground)" }}>{phase.title}</p>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.75, alignSelf: "center" }}>{phase.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Ready to Launch</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 16 }}>
              Brief Us on Your Next Launch
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "var(--color-muted-foreground)", marginBottom: 36, lineHeight: 1.7 }}>
              Tell us your objectives, audience and timeline. We&apos;ll respond with a tailored distribution strategy within 24 hours.
            </p>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#2563EB", color: "#fff", padding: "14px 32px", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
