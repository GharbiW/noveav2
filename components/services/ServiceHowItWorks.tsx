"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

type Props = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  steps: ProcessStep[];
  accentColor?: string;
};

const defaultAccent = "#2563EB";

export default function ServiceHowItWorks({
  eyebrow,
  title,
  titleHighlight,
  steps,
  accentColor = defaultAccent,
}: Props) {
  return (
    <section
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
              color: accentColor,
              marginBottom: 16,
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              letterSpacing: "-0.02em",
              marginBottom: 56,
            }}
          >
            {title}
            {titleHighlight != null && <span style={{ color: accentColor }}>{titleHighlight}</span>}
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 40,
          }}
          id="how-it-works-grid"
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <article>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: accentColor,
                    marginBottom: 16,
                  }}
                >
                  {step.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.01em",
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 15,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.75,
                  }}
                >
                  {step.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #how-it-works-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
