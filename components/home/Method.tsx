"use client";

import { motion } from "motion/react";

/* ── The Method — horizontal 4-step engagement timeline ──────────────────
   Adapted for DolphX: how we operate an enterprise mandate end-to-end.
   Numbered nodes on an animated rail + a live "still-running" pulse dot. */

/* Graphic accent (rail, dots, glint): lime in dark, olive #5a8a12 in light — keeps "pop".
   Text accents (durations, "we stay", node number) use --color-accent-text (#2d4a0c). */
const ACCENT = "var(--color-accent)";

const steps = [
  {
    num: "01",
    title: "Signal Immersion",
    duration: "2–4 weeks",
    body: "We embed beside your teams and map audience behaviour against the decisions that actually move revenue. No dashboards promised in advance.",
  },
  {
    num: "02",
    title: "Targeted Pilot",
    duration: "4–6 weeks",
    body: "One measurable rupture: an intelligence layer built on your real first-party data. A single vertical, a single owned channel. First KPI at 14 days.",
  },
  {
    num: "03",
    title: "Network Deployment",
    duration: "6–12 weeks",
    body: "We scale across owned channels and vetted partners. Connectors, attribution, sovereign consolidation. No big bang — sequenced by value.",
  },
  {
    num: "04",
    title: "We Stay",
    duration: "Ongoing",
    body: "We train your teams and evolve the data layer with your market. Your decisions compound, measurably, month after month.",
  },
];

export default function Method() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 96,
        paddingBottom: 104,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* ── Header ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            The Method — Operated, Not Advised
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 60px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 720,
              margin: 0,
            }}
          >
            We embed, we build,{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent-text)" }}>
              we stay
            </em>
            .
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "var(--color-muted-foreground)",
              lineHeight: 1.7,
              maxWidth: 560,
              marginTop: 24,
            }}
          >
            Four stages, never shortcut. Each one ships a measurable deliverable
            — attribution, not estimates.
          </p>
        </motion.div>

        {/* ── Timeline ──────────────────────────────────────────── */}
        <div id="method-timeline" style={{ marginTop: 72, position: "relative" }}>
          {/* Rail (desktop only) — sits behind the nodes */}
          <div
            className="method-rail-wrap"
            aria-hidden
            style={{
              position: "absolute",
              top: 19,
              left: 20,
              right: 20,
              height: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "var(--color-border-md)",
              }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{
                position: "absolute",
                inset: 0,
                transformOrigin: "left",
                background: `linear-gradient(90deg, ${ACCENT}, color-mix(in srgb, ${ACCENT} 45%, transparent))`,
              }}
            />
            {/* Continuous "signal" glint travelling along the rail */}
            <span className="method-rail-flow" />
          </div>

          <div className="method-grid">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.18,
                }}
                className="method-step"
              >
                {/* Node */}
                <div className="method-node-row">
                  <div className="method-node">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.04em",
                        color: "var(--color-accent-text)",
                      }}
                    >
                      {s.num}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(19px, 2vw, 23px)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginTop: 26,
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-accent-text)",
                    marginBottom: 16,
                  }}
                >
                  {s.duration}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--color-muted-foreground)",
                    margin: 0,
                    maxWidth: 240,
                  }}
                >
                  {s.body}
                </p>
              </motion.div>
            ))}

            {/* Live "still running" pulse dot at the end of the rail */}
            <motion.div
              className="method-live-dot"
              aria-hidden
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: 1.4, ease: "backOut" }}
            >
              <span className="method-live-core" />
              <span className="method-live-ring" />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }
        .method-node-row { display: flex; }
        .method-node {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: var(--color-surface);
          border: 1px solid var(--color-border-md);
          box-shadow: 0 0 0 6px var(--color-canvas);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .method-live-dot {
          position: absolute;
          top: 3px;
          right: 3px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .method-live-core {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: ${ACCENT};
          box-shadow: 0 0 12px ${ACCENT};
          z-index: 2;
        }
        .method-live-ring {
          position: absolute;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: color-mix(in srgb, ${ACCENT} 28%, transparent);
          animation: method-pulse 2.4s ease-out infinite;
        }
        @keyframes method-pulse {
          0%   { transform: scale(0.4); opacity: 0.7; }
          80%  { transform: scale(1);   opacity: 0;   }
          100% { transform: scale(1);   opacity: 0;   }
        }
        .method-rail-flow {
          position: absolute;
          top: 0;
          left: -70px;
          width: 70px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            color-mix(in srgb, ${ACCENT} 30%, #ffffff),
            transparent
          );
          animation: method-flow 2.8s linear 1.5s infinite;
        }
        @keyframes method-flow {
          0%   { left: -70px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .method-live-ring { animation: none; }
          .method-rail-flow { display: none; }
        }
        @media (max-width: 860px) {
          .method-rail-wrap { display: none; }
          .method-live-dot  { display: none; }
          .method-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .method-step {
            position: relative;
            padding-left: 62px;
            padding-bottom: 40px;
          }
          .method-node-row {
            position: absolute;
            left: 0;
            top: 0;
          }
          .method-step:not(:last-child)::before {
            content: "";
            position: absolute;
            left: 19px;
            top: 44px;
            bottom: -4px;
            width: 2px;
            background: var(--color-border-md);
          }
          .method-step h3 { margin-top: 4px; }
          .method-step p[style*="max-width: 240px"],
          .method-step p { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
