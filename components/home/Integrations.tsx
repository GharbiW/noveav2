"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

/* ── Integrations — API-first ecosystem grid + animated count-up ──────────
   Adapted for DolphX: the data & automation layer plugs into your stack. */

const ACCENT = "#a7f432";

const tools = [
  { name: "Meta Ads",   src: "/brand/meta.webp" },
  { name: "Google Ads", src: "/brand/google-ads.png" },
  { name: "HubSpot",    src: "/brand/hubspot.jpg" },
  { name: "Salesforce", src: "/brand/salesforce.webp" },
  { name: "Segment",    src: "/brand/segment.png" },
  { name: "Snowflake",  src: "/brand/snowflake.webp" },
  { name: "BigQuery",   src: "/brand/bigquery.png" },
  { name: "Shopify",    src: "/brand/shopify.webp" },
  { name: "Slack",      src: "/brand/slack.png" },
  { name: "Zapier",     src: "/brand/zapier-logo.png" },
  { name: "Looker",     src: "/brand/looker.webp" },
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
                key={t.name}
                className="int-tile"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              >
                <img
                  className="int-logo"
                  src={t.src}
                  alt={`${t.name} logo`}
                  loading="lazy"
                  decoding="async"
                />
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
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
        .int-tile {
          width: 158px;
          height: 74px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .int-tile:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px -10px rgba(0,0,0,0.35);
        }
        .int-logo {
          max-width: 100%;
          max-height: 30px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        @media (max-width: 780px) {
          .int-card { padding: 22px; border-radius: 14px; }
          .int-tile { width: calc(50% - 7px); }
        }
        @media (max-width: 430px) {
          .int-tile { width: 100%; }
        }
      `}</style>
    </section>
  );
}
