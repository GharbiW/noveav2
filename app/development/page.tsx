import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Technology Solutions — DolphX | Media Infrastructure & Data Platforms",
  description:
    "DolphX builds proprietary media technology: CMS infrastructure, audience analytics platforms, API integrations and custom data tooling for high-traffic media operations.",
  openGraph: {
    title: "Technology Solutions — DolphX",
    description: "Proprietary media technology: CMS infrastructure, analytics platforms and data tooling at scale.",
    url: "https://dolphx.com/development",
    siteName: "DolphX",
    type: "website",
  },
};

const capabilities = [
  { num: "01", title: "Headless CMS & Publishing Infrastructure", accent: "#a7f432", desc: "Scalable, performance-optimised publishing infrastructure built for media at volume. Supports thousands of articles, real-time editorial workflows and multi-property management.", items: ["Headless CMS (Sanity, Contentful)", "Next.js / React frontends", "Multi-site architecture", "Editorial workflow tooling"] },
  { num: "02", title: "Audience Analytics Platforms", accent: "#86c93f", desc: "Custom analytics dashboards that surface the metrics that actually matter: engagement depth, content resonance, audience segments and revenue attribution.", items: ["Real-time dashboards", "Custom event tracking", "Segment analysis", "Revenue attribution"] },
  { num: "03", title: "Data Engineering & Pipelines", accent: "#10B981", desc: "End-to-end data pipelines connecting editorial, audience and advertising data — structured for clean-room compatibility and licensing-ready output.", items: ["ETL / ELT pipelines", "Data warehouse design", "Clean-room integration", "Licensing data structures"] },
  { num: "04", title: "API Development & Integrations", accent: "#a7f432", desc: "Custom API layers connecting your CMS, CRM, advertising platforms and analytics tooling. Built for reliability and documented for internal teams.", items: ["REST & GraphQL APIs", "Third-party integrations", "Webhook infrastructure", "Developer documentation"] },
];

const techStack = [
  "Next.js 15", "React 19", "TypeScript", "Node.js",
  "PostgreSQL", "Supabase", "Sanity", "Contentful",
  "GraphQL", "tRPC", "Redis", "Cloudflare",
  "Vercel", "AWS", "Google Cloud", "Docker",
];

export default function DevelopmentPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, borderBottom: "1px solid var(--color-border)", backgroundColor: "var(--color-canvas)" }} className="">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Technology Solutions</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: "var(--color-foreground)", lineHeight: 1.08, letterSpacing: "-0.01em", marginBottom: 24, maxWidth: 680 }}>
              Media Infrastructure Built for Scale
            </h1>
            <p style={{ fontSize: 17, fontWeight: 300, color: "var(--color-muted-foreground)", maxWidth: 520, lineHeight: 1.7 }}>
              Off-the-shelf solutions cannot deliver the performance or precision that high-traffic media operations require. We build the infrastructure that powers ours — and deploy it for clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", paddingTop: 96, paddingBottom: 96 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Core Capabilities</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 56, maxWidth: 480 }}>
              What We Build
            </h2>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", backgroundColor: "var(--color-border)" }} id="dev-grid">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.num} delay={i * 80}>
                <div style={{ backgroundColor: "var(--color-card)", padding: "36px 32px", borderTop: `2px solid ${cap.accent}`, height: "100%" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: cap.accent, letterSpacing: "0.15em", marginBottom: 16 }}>{cap.num}</p>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, color: "var(--color-foreground)", marginBottom: 12 }}>{cap.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.75, marginBottom: 24 }}>{cap.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {cap.items.map((item) => (
                      <li key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted-foreground)" }}>→ {item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){#dev-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Tech stack */}
      <section style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", paddingTop: 80, paddingBottom: 80 }} className="">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Technology Stack</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 40 }}>
              Production-Grade Tools Only
            </h2>
          </ScrollReveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  border: "1px solid var(--color-border)",
                  padding: "8px 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--color-muted-foreground)",
                  backgroundColor: "var(--color-card)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Build With Us</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 400, color: "var(--color-foreground)", marginBottom: 16 }}>
              Discuss Your Technology Requirements
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "var(--color-muted-foreground)", marginBottom: 36, lineHeight: 1.7 }}>
              Share your infrastructure challenges. We&apos;ll propose a technical approach and timeline within 48 hours.
            </p>
            <Link href="/contact" style={{ display: "inline-block", backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)", padding: "14px 32px", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 400, textDecoration: "none" }}>
              Start the Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
