import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorkWithUs from "@/components/home/WorkWithUs";
import { getUseCase, useCases } from "@/lib/use-cases";
import UseCaseMark from "@/components/use-cases/UseCaseMark";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return useCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);

  if (!useCase) {
    return {};
  }

  return {
    title: `${useCase.client} Use Case — DolphX`,
    description: useCase.summary,
    openGraph: {
      title: `${useCase.client} Use Case — DolphX`,
      description: useCase.summary,
      url: `https://dolphx.com/use-cases/${useCase.slug}`,
      siteName: "DolphX",
      type: "article",
    },
  };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const useCase = getUseCase(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <>
      <section
        style={{
          paddingTop: 150,
          paddingBottom: 88,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <Link
              href="/use-cases"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "var(--color-muted-foreground)",
                textDecoration: "none",
                marginBottom: 36,
              }}
            >
              ← All use cases
            </Link>

            <div
              id="case-detail-hero"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 80,
                alignItems: "end",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-eyebrow)",
                    marginBottom: 28,
                  }}
                >
                  {useCase.sector}
                </p>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(42px, 5.5vw, 76px)",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.025em",
                    margin: 0,
                  }}
                >
                  {useCase.headline}
                </h1>
              </div>

              <div>
                <UseCaseMark
                  name={useCase.client}
                  logo={useCase.logo}
                  className="detail-logo"
                  style={{
                    maxWidth: 160,
                    maxHeight: 54,
                    objectFit: "contain",
                    filter: useCase.logo ? "grayscale(1) brightness(1.8)" : undefined,
                    opacity: useCase.logo ? 0.7 : 1,
                    marginBottom: 30,
                  }}
                />
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
                  {useCase.summary}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <style>{`
          html.light .detail-logo[src]{filter:grayscale(1) brightness(0.35)!important;opacity:0.72!important;}
          @media(max-width:768px){#case-detail-hero{grid-template-columns:1fr!important;gap:36px!important;}}
        `}</style>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: 58,
          paddingBottom: 58,
        }}
      >
        <div
          id="case-meta-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            backgroundColor: "var(--color-border)",
          }}
        >
          <div style={{ backgroundColor: "var(--color-canvas)", padding: 30 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-eyebrow)",
                marginBottom: 14,
              }}
            >
              Public Context
            </p>
            {useCase.companySize && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-foreground)",
                  marginBottom: 12,
                  opacity: 0.72,
                }}
              >
                {useCase.companySize}
              </p>
            )}
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
              {useCase.publicContext}
            </p>
          </div>

          <div style={{ backgroundColor: "var(--color-canvas)", padding: 30 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-eyebrow)",
                marginBottom: 14,
              }}
            >
              Services Used
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {useCase.services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    color: "var(--color-foreground)",
                    border: `1px solid ${service.accent}`,
                    padding: "8px 12px",
                    textDecoration: "none",
                  }}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){#case-meta-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-canvas)",
          paddingTop: 90,
          paddingBottom: 100,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div
            id="case-story-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <ScrollReveal>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-eyebrow)",
                  marginBottom: 18,
                }}
              >
                The Challenge
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3.8vw, 48px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  marginBottom: 22,
                }}
              >
                What needed to work.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {useCase.challenge}
              </p>
            </ScrollReveal>

            <div style={{ borderTop: "1px solid var(--color-border)" }}>
              {useCase.approach.map((item, i) => (
                <ScrollReveal key={item} delay={i * 60}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "48px 1fr",
                      gap: 22,
                      padding: "24px 0",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--color-eyebrow)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:800px){#case-story-grid{grid-template-columns:1fr!important;gap:44px!important;}}`}</style>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          paddingTop: 84,
          paddingBottom: 92,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div
            id="case-delivery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div style={{ backgroundColor: "var(--color-canvas)", padding: 34 }}>
              <p className="case-eyebrow">Deliverables</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {useCase.deliverables.map((item) => (
                  <li key={item} className="case-list-item">
                    <span>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ backgroundColor: "var(--color-canvas)", padding: 34 }}>
              <p className="case-eyebrow">Operational Outcomes</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {useCase.outcomes.map((item) => (
                  <li key={item} className="case-list-item">
                    <span>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              borderTop: "1px solid var(--color-border)",
              paddingTop: 28,
              display: "flex",
              justifyContent: "space-between",
              gap: 28,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 15,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.75,
                maxWidth: 650,
                margin: 0,
              }}
            >
              <strong style={{ color: "var(--color-foreground)", fontWeight: 400 }}>Next step:</strong>{" "}
              {useCase.nextStep}
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "var(--color-eyebrow)",
                textDecoration: "none",
              }}
            >
              Discuss similar project →
            </Link>
          </div>
        </div>
        <style>{`
          .case-eyebrow{
            font-family:var(--font-mono);
            font-size:10px;
            letter-spacing:.18em;
            text-transform:uppercase;
            color:var(--color-eyebrow);
            margin-bottom:22px;
          }
          .case-list-item{
            display:flex;
            gap:14px;
            border-bottom:1px solid var(--color-border);
            padding:14px 0;
            font-family:var(--font-sans);
            font-weight:300;
            font-size:14px;
            color:var(--color-muted-foreground);
            line-height:1.65;
          }
          .case-list-item span{color:var(--color-eyebrow);font-family:var(--font-mono);}
          @media(max-width:768px){#case-delivery-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      <WorkWithUs precoloredFaces />
    </>
  );
}
