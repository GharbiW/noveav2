"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { UseCase } from "@/lib/use-cases";
import UseCaseMark from "@/components/use-cases/UseCaseMark";

const filters = [
  { label: "All", value: "all" },
  { label: "Consulting Digital", value: "Consulting Digital" },
  { label: "Project Development & SaaS", value: "Project Development & SaaS" },
  { label: "AI & Data", value: "AI & Data" },
  { label: "Média & Distribution", value: "Média & Distribution" },
];

type Props = {
  useCases: UseCase[];
};

export default function UseCasesGrid({ useCases }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredUseCases = useMemo(() => {
    if (activeFilter === "all") {
      return useCases;
    }

    return useCases.filter((item) =>
      item.services.some((service) => service.label === activeFilter)
    );
  }, [activeFilter, useCases]);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginBottom: 34,
        }}
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              style={{
                cursor: "pointer",
                border: `1px solid ${isActive ? "var(--color-eyebrow)" : "var(--color-border)"}`,
                backgroundColor: isActive ? "var(--color-card)" : "transparent",
                color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                padding: "9px 13px",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "background-color 160ms ease, border-color 160ms ease, color 160ms ease",
              }}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-muted-foreground)",
          marginBottom: 18,
          opacity: 0.72,
        }}
      >
        {filteredUseCases.length} use cases shown
      </div>

      <div
        id="case-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          backgroundColor: "var(--color-border)",
          border: "1px solid var(--color-border)",
        }}
      >
        {filteredUseCases.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 35}>
            <Link href={`/use-cases/${item.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <article
                className="case-card"
                style={{
                  backgroundColor: "var(--color-surface)",
                  minHeight: 420,
                  height: "100%",
                  padding: "34px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background-color 200ms ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "flex-start", marginBottom: 34 }}>
                  <UseCaseMark
                    name={item.client}
                    logo={item.logo}
                    className="case-logo"
                    style={{
                      maxWidth: 132,
                      maxHeight: 42,
                      objectFit: "contain",
                      filter: item.logo ? "grayscale(1) brightness(1.8)" : undefined,
                      opacity: item.logo ? 0.62 : 1,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-eyebrow)",
                      textAlign: "right",
                    }}
                  >
                    {item.sector}
                  </span>
                </div>

                <div style={{ minHeight: 20, marginBottom: 10 }}>
                  {item.companySize && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-muted-foreground)",
                        opacity: 0.72,
                      }}
                    >
                      {item.companySize}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px, 3vw, 34px)",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    marginBottom: 18,
                  }}
                >
                  {item.headline}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--color-muted-foreground)",
                    lineHeight: 1.75,
                    marginBottom: 26,
                  }}
                >
                  {item.summary}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto", marginBottom: 24 }}>
                  {item.services.map((service) => (
                    <span
                      key={service.label}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.06em",
                        color: "var(--color-foreground)",
                        border: `1px solid ${service.accent}`,
                        padding: "6px 10px",
                      }}
                    >
                      {service.label}
                    </span>
                  ))}
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: "var(--color-eyebrow)",
                  }}
                >
                  Read use case →
                </span>
              </article>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .case-card:hover{background-color:var(--color-card)!important;}
        html.light .case-logo[src]{filter:grayscale(1) brightness(0.35)!important;opacity:0.68!important;}
        @media(max-width:800px){#case-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
