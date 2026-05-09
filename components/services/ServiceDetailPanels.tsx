"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export type SubService = {
  num: string;
  title: string;
  description: string;
  stat?: { val: string; label: string };
  items: string[];
  accent: string;
};

type Props = {
  subServices: SubService[];
};

export default function ServiceDetailPanels({ subServices }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
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
              color: "var(--color-eyebrow)",
              marginBottom: 16,
            }}
          >
            Sub-Services
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
            What we deliver<span style={{ color: "var(--color-eyebrow)" }}>.</span>
          </h2>
        </ScrollReveal>

        {subServices.map((svc, i) => {
          const isActive = active === i;

          return (
            <ScrollReveal key={svc.num} delay={i * 60}>
              <div
                onClick={() => setActive(i)}
                style={{
                  display: "grid",
                  gridTemplateColumns: isActive ? "4px 1fr" : "4px 1fr",
                  cursor: "pointer",
                  marginBottom: i < subServices.length - 1 ? 2 : 0,
                  transition: "all 350ms ease",
                }}
              >
                <div
                  style={{
                    backgroundColor: isActive ? svc.accent : "var(--color-border)",
                    transition: "background-color 350ms ease",
                  }}
                />
                <div
                  style={{
                    backgroundColor: isActive ? "var(--color-card)" : "var(--color-canvas)",
                    borderTop: isActive ? "1px solid var(--color-border)" : "1px solid transparent",
                    borderRight: isActive ? "1px solid var(--color-border)" : "1px solid transparent",
                    borderBottom: isActive ? "1px solid var(--color-border)" : "1px solid transparent",
                    borderLeft: "none",
                    padding: isActive ? "40px 44px" : "24px 44px",
                    transition: "all 350ms ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      marginBottom: isActive ? 28 : 0,
                      transition: "margin 350ms ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: isActive ? svc.accent : "var(--color-muted-foreground)",
                        letterSpacing: "0.1em",
                        flexShrink: 0,
                      }}
                    >
                      {svc.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: isActive ? "clamp(22px, 2.5vw, 32px)" : "clamp(18px, 2vw, 26px)",
                        fontWeight: 400,
                        color: "var(--color-foreground)",
                        letterSpacing: "-0.01em",
                        flex: 1,
                        lineHeight: 1.2,
                        transition: "font-size 350ms ease",
                      }}
                    >
                      {svc.title}
                    </span>
                    {isActive && svc.stat && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 6,
                          flexShrink: 0,
                        }}
                        className="svc-stat"
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: 28,
                            color: svc.accent,
                            fontWeight: 400,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {svc.stat.val}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            color: "var(--color-muted-foreground)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {svc.stat.label}
                        </span>
                      </div>
                    )}
                    {!isActive && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 14,
                          color: "var(--color-muted-foreground)",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      maxHeight: isActive ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 15,
                        color: "var(--color-muted-foreground)",
                        lineHeight: 1.8,
                        maxWidth: 560,
                        marginBottom: 28,
                      }}
                    >
                      {svc.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        marginBottom: 24,
                      }}
                    >
                      {svc.items.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            letterSpacing: "0.06em",
                            color: "var(--color-foreground)",
                            backgroundColor: "var(--color-surface)",
                            border: "1px solid var(--color-border)",
                            padding: "8px 16px",
                            transition: "border-color 200ms ease, background-color 200ms ease",
                          }}
                          className="svc-chip"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: svc.accent,
                        textDecoration: "none",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Get a proposal →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <style>{`
        .svc-chip:hover { border-color: #a7f432 !important; background-color: var(--color-card) !important; }
        @media (max-width: 768px) { .svc-stat { display: none !important; } }
      `}</style>
    </section>
  );
}
