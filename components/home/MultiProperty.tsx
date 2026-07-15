"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

/* ── Multi-property console — text left, live product mockup right ─────────
   Adapted for DolphX: operating 40+ owned media properties from one cockpit.
   The mockup (dashboard + ⌘K palette) is built entirely in markup — no image. */

/* Graphic accent (chart line, active row bar/dot, check icons): lime in dark,
   olive #5a8a12 in light for pop. Text accents use --color-accent-text (#2d4a0c). */
const ACCENT = "var(--color-accent)";

const chips = ["⌘K Property Search", "Per-property rights", "Consolidated attribution"];

const properties = [
  { name: "Sport Network", reach: "32M reach" },
  { name: "Finance Daily", reach: "24M reach" },
  { name: "Retail Pulse", reach: "18M reach" },
  { name: "Tech Signal", reach: "12M reach" },
  { name: "Health Brief", reach: "9M reach" },
];

export default function MultiProperty() {
  /* Auto-cycle the highlighted row (Sport Network → … → Health Brief → loop) */
  const [activeRow, setActiveRow] = useState(properties.length - 1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setActiveRow((i) => (i + 1) % properties.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 104,
        paddingBottom: 104,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <div className="mp-grid">
          {/* ── LEFT: copy ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-muted-foreground)",
                marginBottom: 24,
              }}
            >
              The Console — 02 / 03
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4.2vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Multi-property?
              <br />
              <em style={{ fontStyle: "italic", color: "var(--color-accent-text)" }}>
                Zero friction.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "clamp(15px, 1.5vw, 17px)",
                color: "var(--color-muted-foreground)",
                lineHeight: 1.75,
                maxWidth: 440,
                marginTop: 26,
              }}
            >
              Run cross-property campaigns, shared audiences and consolidated
              attribution from a single view. Pick a property, keep the right
              permissions, launch the right cockpit.
            </p>

            {/* Chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 32,
              }}
            >
              {chips.map((c) => (
                <span
                  key={c}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11.5,
                    letterSpacing: "0.02em",
                    color: "var(--color-foreground)",
                    backgroundColor: "var(--color-canvas)",
                    border: "1px solid var(--color-border)",
                    padding: "9px 15px",
                    borderRadius: 999,
                  }}
                >
                  <span style={{ color: ACCENT, fontSize: 13, lineHeight: 1 }}>✓</span>
                  {c.replace("⌘K ", "")}
                </span>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/automation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 36,
                backgroundColor: "#F0F2EA",
                color: "#0f110c",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                padding: "13px 26px",
                letterSpacing: "0.02em",
                transition: "background-color 150ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d8dbd2")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F2EA")}
            >
              How it works →
            </Link>
          </motion.div>

          {/* ── RIGHT: product mockup ──────────────────────── */}
          <motion.div
            className="mp-mock-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Dashboard card behind */}
            <div className="mp-dash">
              <div className="mp-dash-top">
                <span className="mp-dash-logo">
                  <span style={{ color: ACCENT }}>◆</span> DolphX Console
                </span>
                <span className="mp-dash-crumb">Network / Overview</span>
              </div>
              <div className="mp-kpis">
                {[
                  { v: "40", l: "Properties" },
                  { v: "120M", l: "Monthly reach" },
                  { v: "2.4B", l: "Signals / yr" },
                ].map((k) => (
                  <div key={k.l} className="mp-kpi">
                    <span className="mp-kpi-v">{k.v}</span>
                    <span className="mp-kpi-l">{k.l}</span>
                  </div>
                ))}
              </div>
              {/* faux chart */}
              <div className="mp-chart">
                <svg viewBox="0 0 320 90" width="100%" height="90" preserveAspectRatio="none">
                  <motion.path
                    d="M0,74 C40,70 60,40 96,44 C132,48 150,20 192,28 C230,35 250,14 288,10 L320,8"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path
                    d="M0,74 C40,70 60,40 96,44 C132,48 150,20 192,28 C230,35 250,14 288,10 L320,8 L320,90 L0,90 Z"
                    fill={`color-mix(in srgb, ${ACCENT} 9%, transparent)`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  />
                </svg>
              </div>
            </div>

            {/* Command palette in front */}
            <motion.div
              className="mp-palette"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            >
              <div className="mp-pal-search">
                <span style={{ color: "var(--color-muted-foreground)" }}>⌕</span>
                <span className="mp-pal-placeholder">Search a property…</span>
                <span className="mp-pal-kbd">⌘K</span>
              </div>
              <div className="mp-pal-label">Recents</div>
              {properties.map((p, i) => {
                const isActive = i === activeRow;
                return (
                  <motion.div
                    key={p.name}
                    className={`mp-pal-row${isActive ? " active" : ""}`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.09 }}
                  >
                    <span
                      className="mp-pal-dot"
                      style={isActive ? { background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` } : undefined}
                    />
                    <span className="mp-pal-name">{p.name}</span>
                    <span className="mp-pal-reach">{p.reach}</span>
                  </motion.div>
                );
              })}
              <div className="mp-pal-foot">Select all properties</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .mp-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 72px;
          align-items: center;
        }
        .mp-mock-wrap { position: relative; min-height: 470px; }

        .mp-dash {
          position: absolute;
          top: 0;
          right: 0;
          width: 82%;
          background: var(--color-canvas);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 18px 20px 22px;
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
          z-index: 1;
        }
        .mp-dash-top {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; margin-bottom: 16px;
          border-bottom: 1px solid var(--color-border);
        }
        .mp-dash-logo {
          font-family: var(--font-mono); font-size: 12px; font-weight: 500;
          letter-spacing: 0.04em; color: var(--color-foreground);
          display: inline-flex; align-items: center; gap: 7px;
        }
        .mp-dash-crumb {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--color-muted-foreground); letter-spacing: 0.05em;
        }
        .mp-kpis { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 20px; }
        .mp-kpi {
          border: 1px solid var(--color-border); border-radius: 10px;
          padding: 14px 14px; background: var(--color-surface);
        }
        .mp-kpi-v {
          display: block; font-family: var(--font-serif); font-size: 26px;
          font-weight: 400; letter-spacing: -0.02em; line-height: 1; margin-bottom: 6px;
        }
        .mp-kpi-l {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--color-muted-foreground);
        }
        .mp-chart {
          border: 1px solid var(--color-border); border-radius: 10px;
          padding: 14px 6px 8px; background: var(--color-surface);
        }

        .mp-palette {
          position: absolute;
          left: 0; bottom: 0;
          width: 64%;
          background: var(--color-card);
          border: 1px solid var(--color-border-md);
          border-radius: 14px;
          box-shadow: 0 40px 80px -24px rgba(0,0,0,0.75);
          overflow: hidden;
          z-index: 3;
          backdrop-filter: blur(8px);
        }
        html.light .mp-palette { background: #ffffff; }
        .mp-pal-search {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 16px; border-bottom: 1px solid var(--color-border);
          font-family: var(--font-mono); font-size: 13px;
        }
        .mp-pal-placeholder { flex: 1; color: var(--color-muted-foreground); }
        .mp-pal-kbd {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--color-muted-foreground);
          border: 1px solid var(--color-border-md); border-radius: 5px;
          padding: 2px 6px;
        }
        .mp-pal-label {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--color-muted-foreground);
          padding: 12px 16px 6px;
        }
        .mp-pal-row {
          display: flex; align-items: center; gap: 11px;
          padding: 11px 16px;
          font-family: var(--font-sans); font-size: 13.5px;
          cursor: default;
          border-left: 2px solid transparent;
          transition: background-color 280ms ease, border-color 280ms ease;
        }
        .mp-pal-row.active {
          background: color-mix(in srgb, ${ACCENT} 12%, transparent);
          border-left-color: ${ACCENT};
        }
        .mp-pal-dot {
          width: 7px; height: 7px; border-radius: 999px;
          background: var(--color-muted-foreground); flex-shrink: 0;
          transition: background-color 280ms ease, box-shadow 280ms ease;
        }
        .mp-pal-name { flex: 1; color: var(--color-foreground); font-weight: 400; }
        .mp-pal-reach {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--color-muted-foreground);
          border: 1px solid var(--color-border); border-radius: 5px;
          padding: 2px 8px;
        }
        .mp-pal-foot {
          text-align: center; padding: 13px;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.04em;
          color: var(--color-accent-text);
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 900px) {
          .mp-grid { grid-template-columns: 1fr; gap: 56px; }
          .mp-mock-wrap {
            min-height: 0;
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .mp-dash {
            position: relative;
            top: auto; right: auto;
            width: 100%;
          }
          .mp-palette {
            position: relative;
            left: auto; bottom: auto;
            width: 92%;
            margin: -32px auto 0;
          }
        }
        @media (max-width: 460px) {
          .mp-palette { width: 100%; margin-top: -20px; }
        }
      `}</style>
    </section>
  );
}
