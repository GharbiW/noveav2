"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Services — full-width panels with colored accent, chip items ────── */

const ACCENT  = "#a7f432";
const ACCENT2 = "#86c93f";
const GREEN   = "#10B981";

const services = [
  {
    num: "01",
    title: "Consulting Digital",
    href: "/consulting",
    description:
      "Performance audits, SEO architecture and conversion engineering grounded in real reader behaviour from our owned network — not third-party benchmarks. Every recommendation comes with a measurable KPI attached.",
    items: ["Performance Audit", "SEO Architecture", "Conversion Engineering", "Growth Playbooks"],
    accent: ACCENT,
    stat: { val: "98%", label: "client retention" },
  },
  {
    num: "02",
    title: "Automation & SaaS Marketing",
    href: "/automation",
    description:
      "Custom CRM workflows, lead scoring engines and mini-SaaS platforms built to industrialise acquisition and retention. We deploy, integrate and maintain — you see the pipeline fill.",
    items: ["CRM Workflows", "Lead Scoring", "Email Sequences", "Mini-SaaS Platforms"],
    accent: ACCENT2,
    stat: { val: "40+", label: "automations deployed" },
  },
  {
    num: "03",
    title: "AI & Data Intelligence",
    href: "/ai-data",
    description:
      "Behavioural segmentation, intent signals and predictive models built on 2.4 billion annual first-party touchpoints. GDPR-native, consent-first, and licensed directly from our own editorial network.",
    items: ["Predictive Modelling", "Behavioural Segmentation", "Intent Signals", "Data Licensing"],
    accent: GREEN,
    stat: { val: "2.4B+", label: "data points / year" },
  },
  {
    num: "04",
    title: "Média & Distribution",
    href: "/media-distribution",
    description:
      "Sponsored editorial produced in-house and syndicated across 40+ owned properties. Sport, finance and technology verticals with verified, qualified audiences — full-funnel attribution on every placement.",
    items: ["Sponsored Editorial", "Native Syndication", "Multi-Vertical Reach", "Attribution Reports"],
    accent: ACCENT,
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
            <p className="eyebrow">What We Do</p>
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
          border-color: rgba(167,244,50,0.5) !important;
          background-color: var(--color-card) !important;
        }
        @media (max-width: 768px) {
          .svc-stat { display: none !important; }
        }
      `}</style>
    </section>
  );
}
