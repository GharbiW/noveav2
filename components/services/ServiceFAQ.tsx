"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  faqs: FAQItem[];
  accentColor?: string;
};

const defaultAccent = "#a7f432";

export default function ServiceFAQ({
  eyebrow,
  title,
  titleHighlight,
  faqs,
  accentColor = defaultAccent,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              marginBottom: 48,
            }}
          >
            {title}
            {titleHighlight != null && <span style={{ color: accentColor }}>{titleHighlight}</span>}
          </h2>
        </ScrollReveal>

        <div style={{ maxWidth: 720 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 50}>
                <div
                  style={{
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: 24,
                    paddingBottom: 24,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontFamily: "var(--font-serif)",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 14,
                        color: accentColor,
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 400 : 0,
                      overflow: "hidden",
                      transition: "max-height 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 15,
                        color: "var(--color-muted-foreground)",
                        lineHeight: 1.8,
                        marginTop: 16,
                        paddingRight: 24,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

