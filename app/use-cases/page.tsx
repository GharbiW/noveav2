import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorkWithUs from "@/components/home/WorkWithUs";
import { useCases } from "@/lib/use-cases";
import UseCasesGrid from "@/components/use-cases/UseCasesGrid";

export const metadata: Metadata = {
  title: "Use Cases — DolphX | Client Growth Systems",
  description:
    "DolphX use cases across Turkish enterprise clients, small companies and startups in banking, healthcare, retail, fintech, ecommerce and SaaS.",
  openGraph: {
    title: "Use Cases — DolphX",
    description:
      "How DolphX applies consulting, project development, AI data intelligence and media distribution across real client contexts.",
    url: "https://dolphx.com/use-cases",
    siteName: "DolphX",
    type: "website",
  },
};

const serviceSummary = [
  { label: "Consulting Digital", desc: "Audits, journeys, funnel strategy and conversion architecture.", accent: "#a7f432" },
  { label: "Project Development & SaaS", desc: "Portals, dashboards, onboarding flows and workflow systems.", accent: "#86c93f" },
  { label: "AI & Data", desc: "Segmentation, intent signals, scoring models and reporting layers.", accent: "#10B981" },
  { label: "Média & Distribution", desc: "Editorial programs, partner distribution and campaign attribution.", accent: "#a7f432" },
];

export default function UseCasesPage() {
  return (
    <>
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
              Use Cases
            </p>

            <div
              id="use-cases-hero"
              style={{
                display: "grid",
                gridTemplateColumns: "1.25fr 0.75fr",
                gap: 80,
                alignItems: "end",
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(44px, 6vw, 82px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Real client contexts.
                <br />
                Service systems that ship
                <span style={{ color: "var(--color-eyebrow)" }}>.</span>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Practical use cases for Turkish enterprises, small companies and startups across banking, healthcare, retail, investment, associations, marketplaces, fintech and SaaS - mapped to the DolphX services that make each system work.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#use-cases-hero{grid-template-columns:1fr!important;gap:36px!important;}}`}</style>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: 56,
          paddingBottom: 56,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div
            id="service-summary-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
          >
            {serviceSummary.map((service) => (
              <div
                key={service.label}
                style={{
                  backgroundColor: "var(--color-canvas)",
                  padding: "24px",
                  minHeight: 150,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 26,
                    height: 2,
                    backgroundColor: service.accent,
                    marginBottom: 18,
                  }}
                />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                    lineHeight: 1.2,
                  }}
                >
                  {service.label}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){#service-summary-grid{grid-template-columns:1fr 1fr!important;}}
          @media(max-width:560px){#service-summary-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-canvas)",
          paddingTop: 96,
          paddingBottom: 110,
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
              Client Library
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 4vw, 54px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                letterSpacing: "-0.02em",
                maxWidth: 720,
                marginBottom: 54,
              }}
            >
              Different clients. Different services. One delivery model.
            </h2>
          </ScrollReveal>

          <UseCasesGrid useCases={useCases} />
        </div>
      </section>

      <WorkWithUs precoloredFaces />
    </>
  );
}
