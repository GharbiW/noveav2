"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

/* ── Integrations — API-first ecosystem grid + animated count-up ──────────
   Adapted for DolphX: the data & automation layer plugs into your stack. */

const ACCENT = "#a7f432";

const tools = [
  { mark: "GA", name: "Analytics",   color: "#E8A13B" },
  { mark: "Ma", name: "Meta Ads",    color: "#4A7BF7" },
  { mark: "GA", name: "Google Ads",  color: "#3FA45B" },
  { mark: "HS", name: "HubSpot",     color: "#F07A5B" },
  { mark: "SF", name: "Salesforce",  color: "#4AA3E0" },
  { mark: "Se", name: "Segment",     color: "#5CC98F" },
  { mark: "Sn", name: "Snowflake",   color: "#5AC8F5" },
  { mark: "BQ", name: "BigQuery",    color: "#6B8FF0" },
  { mark: "Sh", name: "Shopify",     color: "#7DB84B" },
  { mark: "Sl", name: "Slack",       color: "#C05BA8" },
  { mark: "Za", name: "Zapier",      color: "#E8734A" },
  { mark: "Lk", name: "Looker",      color: "#6E8BE8" },
];

/* Count-up gated by viewport entry */
function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let start = 0;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        if (reduce) {
          setVal(to);
          return;
        }
        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * to));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString("en-US")}</span>;
}

export default function Integrations() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 104,
        paddingBottom: 104,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 40px" }}>
        {/* ── Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center" }}
        >
          <p className="eyebrow" style={{ marginBottom: 22 }}>
            Integrations
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(30px, 4vw, 50px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Plug DolphX into your{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-accent-text)" }}>
              existing stack
            </em>
            .
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(15px, 1.5vw, 17px)",
              color: "var(--color-muted-foreground)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "24px auto 0",
            }}
          >
            Our data and automation layer connects to the CRM, analytics, ad
            platforms and warehouses you already run — no extra IT project.
          </p>
        </motion.div>

        {/* ── Tool grid card ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="int-card"
        >
          <div className="int-grid">
            {tools.map((t, i) => (
              <motion.div
                key={t.name + i}
                className="int-tile"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              >
                <span
                  className="int-mark"
                  style={{ color: t.color, borderColor: `${t.color}44` }}
                >
                  {t.mark}
                </span>
                <span className="int-name">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Big number + CTA ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ textAlign: "center", marginTop: 56 }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 7vw, 76px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--color-foreground)",
            }}
          >
            <CountUp to={2000} />
            <span style={{ color: "var(--color-accent)" }}>+</span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-muted-foreground)",
              marginTop: 14,
            }}
          >
            Integrations available
          </p>

          <Link
            href="/automation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 32,
              backgroundColor: "#F0F2EA",
              color: "#0f110c",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 14,
              padding: "13px 28px",
              letterSpacing: "0.02em",
              transition: "background-color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d8dbd2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F2EA")}
          >
            Explore all integrations →
          </Link>
        </motion.div>
      </div>

      <style>{`
        .int-card {
          margin-top: 56px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 18px;
          padding: 32px;
        }
        .int-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .int-tile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--color-canvas);
          border: 1px solid var(--color-border);
          border-radius: 999px;
          transition: border-color 200ms ease, transform 200ms ease;
        }
        .int-tile:hover {
          border-color: var(--color-border-md);
          transform: translateY(-2px);
        }
        .int-mark {
          width: 30px; height: 30px; flex-shrink: 0;
          border: 1px solid; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono); font-size: 11px; font-weight: 600;
          background: var(--color-surface);
        }
        .int-name {
          font-family: var(--font-sans); font-weight: 400; font-size: 14px;
          color: var(--color-foreground); white-space: nowrap;
        }
        @media (max-width: 780px) {
          .int-grid { grid-template-columns: repeat(2, 1fr); }
          .int-card { padding: 20px; border-radius: 14px; }
        }
        @media (max-width: 420px) {
          .int-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
