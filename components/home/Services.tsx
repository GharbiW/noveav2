"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Services — full-width panels with colored accent, chip items ────── */

const services = [
  {
    num: "01",
    title: "Consulting Digital",
    href: "/consulting",
    description:
      "Strategic advisory for companies navigating digital transformation. Performance audits, SEO architecture, conversion engineering and customer journey design — grounded in proprietary data from our own media operations.",
    items: ["Performance Audit", "SEO Architecture", "Conversion Engineering", "Growth Strategy"],
    accent: "#2563EB",
    stat: { val: "98%", label: "client retention" },
  },
  {
    num: "02",
    title: "Automation & SaaS Marketing",
    href: "/automation",
    description:
      "Custom-built marketing automation and mini-SaaS platforms. CRM workflows, lead nurturing sequences, scoring engines and personalised tools that let clients industrialise acquisition, retention and reporting.",
    items: ["CRM Workflows", "Lead Nurturing", "Lead Scoring", "Mini-SaaS Platforms"],
    accent: "#06B6D4",
    stat: { val: "40+", label: "automations deployed" },
  },
  {
    num: "03",
    title: "AI & Data",
    href: "/ai-data",
    description:
      "AI-powered audience intelligence built on first-party data from our media network. Predictive modelling, behavioural segmentation, intent signals and GDPR-compliant data monetisation.",
    items: ["Predictive Modeling", "Segmentation", "Intent Signals", "Data Licensing"],
    accent: "#10B981",
    stat: { val: "120M+", label: "data points monthly" },
  },
  {
    num: "04",
    title: "Média & Distribution",
    href: "/media-distribution",
    description:
      "Sponsored editorial content produced and distributed across our proprietary media network. Qualified, verified audiences across sport, finance and technology verticals.",
    items: ["Sponsored Editorial", "Native Syndication", "Multi-Platform", "Attribution Reporting"],
    accent: "#2563EB",
    stat: { val: "40+", label: "media properties" },
  },
];

type Props = { showAllServicesLink?: boolean };

export default function Services({ showAllServicesLink = true }: Props) {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* ── Header — left-aligned eyebrow + right link ────── */}
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 40,
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
              }}
            >
              What We Do
            </p>
            {showAllServicesLink && (
              <Link
                href="/services"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-muted-foreground)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-foreground)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted-foreground)")}
              >
                All Services →
              </Link>
            )}
          </div>
        </ScrollReveal>

        {/* ── Service panels ──────────────────────────────────── */}
        {services.map((svc, i) => {
          const isActive = active === i;

          return (
            <ScrollReveal key={svc.num} delay={i * 60}>
              <div
                onClick={() => setActive(i)}
                style={{
                  display: "grid",
                  gridTemplateColumns: isActive ? "4px 1fr" : "4px 1fr",
                  cursor: "pointer",
                  marginBottom: i < services.length - 1 ? 2 : 0,
                  transition: "all 350ms ease",
                }}
              >
                {/* Left accent bar */}
                <div
                  style={{
                    backgroundColor: isActive ? svc.accent : "var(--color-border)",
                    transition: "background-color 350ms ease",
                  }}
                />

                {/* Panel content */}
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
                  {/* Top row: number, title, stat */}
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
                        transition: "color 300ms ease",
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

                    {/* Stat (visible when active) */}
                    {isActive && (
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

                    {/* Arrow indicator when collapsed */}
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

                  {/* Expanded body */}
                  <div
                    style={{
                      maxHeight: isActive ? "400px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms ease",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {/* Description */}
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

                    {/* Capability chips */}
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

                    {/* CTA link */}
                    <Link
                      href={svc.href}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: svc.accent,
                        textDecoration: "none",
                        letterSpacing: "0.08em",
                        transition: "opacity 200ms",
                      }}
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <style>{`
        .svc-chip:hover {
          border-color: #2563EB !important;
          background-color: var(--color-card) !important;
        }
        @media (max-width: 768px) {
          .svc-stat { display: none !important; }
        }
      `}</style>
    </section>
  );
}
