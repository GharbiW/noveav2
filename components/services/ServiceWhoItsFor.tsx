"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export type WhoItsForItem = {
  label: string;
  description: string;
  image?: { src: string; alt: string };
};

type Props = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  items: WhoItsForItem[];
  accentColor?: string;
};

const defaultAccent = "#2563EB";

export default function ServiceWhoItsFor({
  eyebrow,
  title,
  titleHighlight,
  items,
  accentColor = defaultAccent,
}: Props) {
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 56,
        paddingBottom: 56,
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
              marginBottom: 12,
            }}
          >
            {eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(22px, 2.8vw, 32px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            {title}
            {titleHighlight != null && (
              <span style={{ color: accentColor }}>{titleHighlight}</span>
            )}
          </h2>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid var(--color-border)" }}>
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 40}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "32px 1fr",
                  gap: 20,
                  padding: "20px 0",
                  borderBottom:
                    i < items.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: accentColor,
                    letterSpacing: "0.1em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 17,
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: 14,
                      color: "var(--color-muted-foreground)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

