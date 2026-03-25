"use client";

import { useEffect, useRef, useState } from "react";

/* ── Technical metric readout — number far-left, label far-right ─────────
   Inspired by Palantir data dashboards. No cards, no equal boxes.
   Each row: giant serif counter ── thin rule ── mono descriptor
─────────────────────────────────────────────────────────────────────────── */

const metrics = [
  { raw: 40,  suffix: "+",  label: "Media Properties",   sub: "Owned & actively operated",       color: "#2563EB" },
  { raw: 120, suffix: "M+", label: "Monthly Readers",    sub: "Across all network verticals",    color: "#06B6D4" },
  { raw: 98,  suffix: "%",  label: "Client Retention",   sub: "Enterprise partnership rate",     color: "#10B981" },
  { raw: 4,   suffix: "",   label: "Service Pillars",    sub: "Consulting · Automation · AI & Data · Media", color: "#2563EB" },
];

function Counter({ raw, suffix }: { raw: number; suffix: string }) {
  const ref   = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      ob.disconnect();
      const dur = 1600;
      const t0  = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * raw));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    ob.observe(el);
    return () => ob.disconnect();
  }, [raw]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function ImpactNumbers() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* ── Section label ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 40px 0",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2563EB",
          }}
        >
          By the Numbers
        </span>
        <div style={{ flex: 1, height: 1, backgroundColor: "var(--color-border)" }} />
      </div>

      {/* ── Metric rows ──────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 0" }}>
        {metrics.map((m, i) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              padding: "36px 0",
              borderBottom: i < metrics.length - 1 ? "1px solid var(--color-border)" : "none",
              position: "relative",
            }}
          >
            {/* Number — giant, takes left ~200px */}
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(56px, 7vw, 96px)",
                fontWeight: 400,
                lineHeight: 1,
                color: "var(--color-foreground)",
                minWidth: 220,
                letterSpacing: "-0.03em",
              }}
            >
              <Counter raw={m.raw} suffix={m.suffix} />
            </div>

            {/* Accent line stretching to fill space */}
            <div
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "var(--color-border)",
                margin: "0 40px",
                position: "relative",
                overflow: "visible",
              }}
            >
              {/* Color dot on line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "30%",
                  height: 1,
                  backgroundColor: m.color,
                }}
              />
            </div>

            {/* Label — right-aligned */}
            <div style={{ textAlign: "right", minWidth: 280 }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 18,
                  color: "var(--color-foreground)",
                  letterSpacing: "-0.01em",
                  marginBottom: 4,
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "0.08em",
                }}
              >
                {m.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: 1, backgroundColor: "var(--color-border)", maxWidth: 1200, margin: "0 auto" }} />

      <style>{`
        @media (max-width: 640px) {
          .impact-row { flex-direction: column !important; gap: 8px !important; }
          .impact-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
