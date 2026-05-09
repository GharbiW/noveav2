"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Consulting Digital",
    accent: "#a7f432",
    tag: "Strategy",
    description:
      "Strategic advisory for companies navigating digital transformation. We audit performance, architect SEO strategies, engineer conversion funnels and design customer journeys — every recommendation grounded in proprietary data from our own media operations, not generic playbooks.",
    items: [
      "Performance audit & diagnostics",
      "SEO architecture & content strategy",
      "Conversion engineering & CRO",
      "Customer journey design",
      "Digital growth piloting",
    ],
  },
  {
    num: "02",
    title: "Automation & SaaS Marketing",
    accent: "#86c93f",
    tag: "Automation",
    description:
      "Custom-built marketing automation and personalised mini-SaaS platforms. We design CRM workflows, lead nurturing sequences and scoring engines — then build the tools that let clients industrialise their acquisition, retention and reporting at scale.",
    items: [
      "CRM workflow design & integration",
      "Lead nurturing sequences",
      "Lead scoring & qualification",
      "Custom mini-SaaS platforms",
      "Reporting & analytics automation",
    ],
  },
  {
    num: "03",
    title: "AI & Data",
    accent: "#10B981",
    tag: "Intelligence",
    description:
      "AI-powered audience intelligence built on first-party data from our proprietary media network. Predictive modelling, behavioural segmentation and intent signal extraction — structured for activation and GDPR-compliant data monetisation.",
    items: [
      "Predictive modelling & forecasting",
      "Behavioural audience segmentation",
      "Intent signal extraction",
      "Data monetisation & licensing",
      "GDPR compliance frameworks",
    ],
  },
  {
    num: "04",
    title: "Média & Distribution",
    accent: "#a7f432",
    tag: "Media",
    description:
      "Sponsored editorial content produced and distributed across our proprietary network of media properties. Native advertising that reaches qualified, verified audiences across sport, finance and technology verticals — with full attribution reporting.",
    items: [
      "Sponsored editorial programs",
      "Native content syndication",
      "Video & multimedia production",
      "Multi-platform distribution",
      "Full-funnel attribution reporting",
    ],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "1px solid var(--color-border)" }}>
      {services.map((svc, i) => {
        const isOpen = open === i;
        return (
          <div
            key={svc.num}
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`svc-panel-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                padding: "28px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                gap: 24,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: isOpen ? svc.accent : "var(--color-muted-foreground)",
                  letterSpacing: "0.1em",
                  minWidth: 28,
                  transition: "color 300ms ease",
                }}
              >
                {svc.num}
              </span>

              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(20px, 2.8vw, 36px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  letterSpacing: "-0.01em",
                  flex: 1,
                  lineHeight: 1.1,
                }}
              >
                {svc.title}
              </span>

              <span
                className="svc-tag"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isOpen ? svc.accent : "var(--color-muted-foreground)",
                  border: `1px solid ${isOpen ? svc.accent : "var(--color-border-md)"}`,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                  transition: "all 200ms ease",
                }}
              >
                {svc.tag}
              </span>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 18,
                  color: isOpen ? svc.accent : "var(--color-muted-foreground)",
                  lineHeight: 1,
                  display: "inline-block",
                  transition: "transform 300ms ease, color 300ms ease",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  flexShrink: 0,
                }}
              >
                +
              </span>
            </button>

            <div
              id={`svc-panel-${i}`}
              role="region"
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                overflow: "hidden",
                transition: "max-height 420ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  paddingBottom: 48,
                  paddingLeft: 52,
                }}
                id={`svc-body-${i}`}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 15,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.8,
                  }}
                >
                  {svc.description}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 14,
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "var(--color-muted-foreground)",
                        letterSpacing: "0.04em",
                        padding: "10px 0",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span style={{ color: svc.accent, flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                  <li style={{ paddingTop: 16 }}>
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        @media (max-width: 768px) {
          [id^="svc-body-"] { grid-template-columns: 1fr !important; padding-left: 0 !important; }
          .svc-tag { display: none !important; }
        }
      `}</style>
    </div>
  );
}
