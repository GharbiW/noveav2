"use client";

import { useState } from "react";

const networks = [
  {
    id: "01",
    key: "financial",
    title: "Financial Intelligence Network",
    tag: "Finance & Investment",
    geography: "Global — 60+ financial markets",
    reach: "15M+ finance readers monthly",
    description:
      "Built on EconomySignals and partner finance publications, our financial intelligence layer captures declared reading behaviour across markets, investment verticals and economic cycles. Precision targeting for asset managers, fintech brands, banks and financial institutions.",
    signals: ["Investment intent", "Sector affinity", "Asset class behaviour", "Economic decision cycle"],
    metrics: [
      { val: "15M+", label: "Finance readers" },
      { val: "60+", label: "Markets covered" },
      { val: "4.2×", label: "Conversion vs display" },
    ],
  },
  {
    id: "02",
    key: "political",
    title: "Political Marketing Network",
    tag: "Civic & Institutional",
    geography: "France, Europe, North Africa",
    reach: "22M+ civic profiles",
    description:
      "Our political intelligence layer aggregates declared reading behaviours across editorial properties covering policy, economics and civic affairs. We build compliant, consent-first audience models for institutional campaigns, NGOs and think tanks.",
    signals: ["Policy issue affinity", "Geographic precision", "Civic engagement score", "Donation propensity"],
    metrics: [
      { val: "22M+", label: "Civic profiles" },
      { val: "47", label: "Markets covered" },
      { val: "92%", label: "Targeting accuracy" },
    ],
  },
  {
    id: "03",
    key: "b2b",
    title: "B2B Sales Data Network",
    tag: "Enterprise & Decision-Makers",
    geography: "Global — 80+ countries",
    reach: "8.2M decision-makers",
    description:
      "Harvested from EconomySignals, FormalGeek and partner publications, our B2B layer segments C-suite, director and senior manager audiences by industry, company size and purchase decision cycle. Structured for ABM, outbound sales and pipeline acceleration.",
    signals: ["Title & seniority", "Industry vertical", "Technology stack signals", "Company growth stage"],
    metrics: [
      { val: "8.2M", label: "Decision-makers" },
      { val: "240+", label: "Industry segments" },
      { val: "3.1×", label: "Average pipeline lift" },
    ],
  },
];

export default function SpecialistNetworks() {
  const [active, setActive] = useState(0);
  const net = networks[active];

  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 14,
              }}
            >
              Specialist Networks
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Three verticals.
              <br />
              Each a market in its own right.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              color: "var(--color-muted-foreground)",
              lineHeight: 1.8,
              maxWidth: 360,
              margin: 0,
            }}
          >
            Purpose-built audience intelligence layers — not interest categories. Refined over years of editorial data collection across owned media.
          </p>
        </div>

        {/* Interactive panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-border)",
            gap: 1,
          }}
          id="sn-panel"
        >
          {/* ── LEFT: Tab list ── */}
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {networks.map((n, i) => {
              const isActive = i === active;
              return (
                <button
                  key={n.key}
                  onClick={() => setActive(i)}
                  style={{
                    all: "unset",
                    cursor: "pointer",
                    display: "block",
                    padding: "28px 28px",
                    borderBottom: "1px solid var(--color-border)",
                    borderLeft: isActive ? "3px solid #2563EB" : "3px solid transparent",
                    backgroundColor: isActive ? "var(--color-canvas)" : "transparent",
                    transition: "background-color 180ms ease, border-color 180ms ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-canvas)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      color: isActive ? "#2563EB" : "var(--color-muted-foreground)",
                      display: "block",
                      marginBottom: 8,
                      opacity: isActive ? 1 : 0.5,
                    }}
                  >
                    {n.id}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 16,
                      fontWeight: 400,
                      color: isActive ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {n.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? "#2563EB" : "var(--color-muted-foreground)",
                      opacity: isActive ? 0.75 : 0.35,
                    }}
                  >
                    {n.tag}
                  </span>
                </button>
              );
            })}

            {/* Fill remaining space */}
            <div style={{ flex: 1, backgroundColor: "var(--color-surface)" }} />
          </div>

          {/* ── RIGHT: Content panel ── */}
          <div
            style={{
              backgroundColor: "var(--color-canvas)",
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {/* Top: title + geography */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    letterSpacing: "-0.015em",
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  {net.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2563EB",
                    border: "1px solid rgba(37,99,235,0.35)",
                    padding: "4px 12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {net.reach}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-foreground)",
                  opacity: 0.5,
                  margin: 0,
                }}
              >
                {net.geography}
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: "var(--color-border)" }} />

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 15,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.85,
                margin: 0,
                maxWidth: 620,
              }}
            >
              {net.description}
            </p>

            {/* Metrics row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                backgroundColor: "var(--color-border)",
                border: "1px solid var(--color-border)",
              }}
              id="sn-metrics"
            >
              {net.metrics.map((m) => (
                <div
                  key={m.label}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    padding: "20px 24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(24px, 2.5vw, 34px)",
                      fontWeight: 400,
                      color: "#2563EB",
                      letterSpacing: "-0.025em",
                      display: "block",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {m.val}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-foreground)",
                      opacity: 0.6,
                    }}
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Signal tags */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-foreground)",
                  marginBottom: 12,
                  opacity: 0.5,
                }}
              >
                Audience signals
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {net.signals.map((sig) => (
                  <span
                    key={sig}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.06em",
                      color: "var(--color-foreground)",
                      border: "1px solid var(--color-border)",
                      padding: "6px 14px",
                      backgroundColor: "var(--color-surface)",
                    }}
                  >
                    {sig}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sn-panel { grid-template-columns: 1fr !important; }
          #sn-metrics { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          #sn-metrics { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
