"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem { raw: number; display: string; label: string; }

const statData: StatItem[] = [
  { raw: 40,  display: "40+",  label: "Media Properties"   },
  { raw: 120, display: "120M+",label: "Monthly Readers"    },
  { raw: 98,  display: "98%",  label: "Client Retention"   },
  { raw: 4,   display: "4",    label: "Content Verticals"  },
];

function AnimatedNumber({ stat }: { stat: StatItem }) {
  const ref  = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const suffix = stat.display.replace(String(stat.raw), "");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration  = 1400;
        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          const current  = Math.round(eased * stat.raw);
          setShown(`${current}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  return <div ref={ref}>{shown}</div>;
}

export default function Stats() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        id="stats-grid"
      >
        {statData.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "64px 32px",
              textAlign: "center",
              borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 52,
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1,
                display: "block",
                minWidth: "3ch",
              }}
            >
              <AnimatedNumber stat={stat} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "var(--color-muted-foreground)",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #stats-grid > div:nth-child(2) { border-left: 1px solid var(--color-border) !important; }
        }
      `}</style>
    </section>
  );
}
