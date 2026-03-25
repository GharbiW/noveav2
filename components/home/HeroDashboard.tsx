"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const dur = 2000;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * ease));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function MiniChart() {
  const bars = [35, 52, 44, 68, 58, 72, 65, 80, 74, 88, 82, 92];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="dash-bar"
          style={{
            width: 6,
            height: `${h}%`,
            backgroundColor: i >= 10 ? "#2563EB" : "rgba(37,99,235,0.25)",
            transition: "height 600ms ease",
            animationDelay: `${i * 80}ms`,
          }}
        />
      ))}
    </div>
  );
}

function SparkLine() {
  const points = "0,28 8,24 16,26 24,18 32,20 40,14 48,16 56,10 64,12 72,6 80,8 88,4 96,6 104,2";
  return (
    <svg viewBox="0 0 104 30" style={{ width: "100%", height: 30 }}>
      <polyline
        points={points}
        fill="none"
        stroke="#2563EB"
        strokeWidth={1.5}
        className="spark-line"
      />
      <polyline
        points={`0,30 ${points} 104,30`}
        fill="url(#sparkGrad)"
        stroke="none"
        className="spark-fill"
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DataStream() {
  const lines = [
    "▸ audience_sync    FR  ██████  94.2%",
    "▸ lead_pipeline    US  █████   87.6%",
    "▸ content_index    UK  ████    72.1%",
    "▸ media_crawl      DE  ███     65.8%",
    "▸ conversion_api   AE  ██████  91.4%",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {lines.map((line, i) => (
        <div
          key={i}
          className="stream-line"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 9,
            letterSpacing: "0.04em",
            color: "rgba(37,99,235,0.7)",
            padding: "4px 0",
            borderBottom: "1px solid rgba(37,99,235,0.06)",
            animationDelay: `${i * 0.3}s`,
            whiteSpace: "nowrap",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

export default function HeroDashboard() {
  const metrics = [
    { label: "Active Users", val: 24893, suffix: "", trend: "+12.4%" },
    { label: "Conversions", val: 1847, suffix: "", trend: "+8.7%" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        border: "1px solid var(--color-border)",
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid rgba(37,99,235,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#10B981",
              animation: "hpulse 2.5s ease-in-out infinite",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            DolphX Platform — Live
          </span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {[1, 2, 3].map((d) => (
            <span
              key={d}
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Metric cards row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          backgroundColor: "rgba(37,99,235,0.06)",
        }}
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              padding: "16px 16px 12px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 6,
              }}
            >
              {m.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                <AnimatedNumber target={m.val} suffix={m.suffix} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 9,
                  color: "#10B981",
                  letterSpacing: "0.05em",
                }}
              >
                {m.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div style={{ padding: "16px 16px 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 8,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Audience Growth — 30d
          </span>
          <MiniChart />
        </div>
        <SparkLine />
      </div>

      {/* Data stream */}
      <div
        style={{
          padding: "12px 16px 16px",
          borderTop: "1px solid rgba(37,99,235,0.08)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 8,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 8,
          }}
        >
          Live Data Pipeline
        </div>
        <DataStream />
      </div>

      {/* Scan line effect */}
      <div
        aria-hidden
        className="scan-line"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          backgroundColor: "rgba(37,99,235,0.15)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        .dash-bar {
          transform-origin: bottom;
          animation: barGrow 800ms ease-out forwards;
        }

        @keyframes sparkDraw {
          from { stroke-dashoffset: 300; }
          to   { stroke-dashoffset: 0; }
        }
        .spark-line {
          stroke-dasharray: 300;
          animation: sparkDraw 2s ease-out forwards;
        }
        .spark-fill {
          opacity: 0;
          animation: fadeIn 1s ease-out 1.5s forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes streamSlide {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .stream-line {
          opacity: 0;
          animation: streamSlide 400ms ease-out forwards;
        }

        @keyframes scanMove {
          0%   { top: 0; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .scan-line {
          animation: scanMove 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
