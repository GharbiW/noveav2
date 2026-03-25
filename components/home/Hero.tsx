"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const segments = [
  "sports fans",
  "finance readers",
  "decision-makers",
  "civic audiences",
  "enterprise brands",
  "tech buyers",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const videoLayerRef = useRef<HTMLDivElement>(null);

  /* ── Animated cycling word ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % segments.length);
        setLeaving(false);
      }, 380);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  /* ── Scroll-based reveal — direct DOM to avoid re-render lag ── */
  useEffect(() => {
    let raf: number;

    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!sectionRef.current || !textLayerRef.current || !videoLayerRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, -rect.top);
        const p = Math.min(1, scrolled / scrollable); // 0 → 1

        // Text: fades out + drifts up in first 55% of scroll
        const textProgress = Math.min(1, p / 0.55);
        textLayerRef.current.style.opacity = String(1 - textProgress);
        textLayerRef.current.style.transform = `translateY(${-textProgress * 80}px)`;
        textLayerRef.current.style.pointerEvents = textProgress > 0.6 ? "none" : "auto";

        // Video: fades in + scales up starting at 20% scroll
        const videoProgress = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
        videoLayerRef.current.style.opacity = String(videoProgress);
        videoLayerRef.current.style.transform = `scale(${0.88 + videoProgress * 0.12})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    /* ── Outer: 150vh for scroll room; sticky is 88vh so clients peek below ── */
    <section ref={sectionRef} style={{ height: "150vh", position: "relative" }}>

      {/* ── Sticky viewport container — 88vh leaves clients peeking below ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "88vh",
          overflow: "hidden",
        }}
        className="hero-sticky"
      >
        {/* Background atmosphere */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
          className="hero-bg"
        />
        <div aria-hidden className="hero-dot-grid" />
        <div aria-hidden className="hero-glow" />

        {/* ── VIDEO LAYER — behind, revealed on scroll ── */}
        <div
          ref={videoLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0,
            transform: "scale(0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 40px",
          }}
        >
          <div style={{ width: "100%", maxWidth: 900, position: "relative" }}>
            {/* Terminal chrome bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
                borderRight: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)" }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.25)",
                  marginLeft: 8,
                }}
              >
                dolphx.com — platform overview
              </span>
            </div>

            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                backgroundColor: "#000",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
              <source src="/videos/hero.webm" type="video/webm" />
            </video>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,0.07)",
                borderTop: "none",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
                Intelligence Platform
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#2563EB", boxShadow: "0 0 6px rgba(37,99,235,0.9)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.14em", color: "rgba(255,255,255,0.2)" }}>LIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── TEXT LAYER — foreground, slides away on scroll ── */}
        <div
          ref={textLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 40px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
            <div className="hero-dot-pulse" />
            <p
              className="hero-eyebrow"
              style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", margin: 0 }}
            >
              Technology-Mediatique Company
            </p>
          </div>

          {/* Headline */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(36px, 6vw, 80px)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: 32,
              maxWidth: 860,
            }}
          >
            We reach{" "}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
              <span
                style={{
                  display: "inline-block",
                  color: "#2563EB",
                  transform: leaving ? "translateY(-28px)" : "translateY(0)",
                  opacity: leaving ? 0 : 1,
                  transition: "transform 380ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease",
                  minWidth: "7ch",
                  textAlign: "left",
                }}
              >
                {segments[idx]}
              </span>
            </span>
            <br />
            <span className="hero-sub-headline">across 150+ countries.</span>
          </h1>

          <p
            className="hero-desc"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 500,
              margin: "0 auto 40px",
            }}
          >
            DolphX owns 40+ media properties, engineers 2.4 billion first-party data points
            annually, and activates them for enterprise clients who demand precision.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                backgroundColor: "#2563EB",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 13,
                padding: "14px 32px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
            >
              Explore Services
            </Link>
            <Link
              href="/network"
              className="hero-link-ghost"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textDecoration: "none",
                letterSpacing: "0.1em",
                padding: "13px 24px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "")}
            >
              Our Network →
            </Link>
          </div>

          {/* Scroll hint */}
          <div
            style={{
              position: "absolute",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
              scroll
            </span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>

      {/* ── Global styles ── */}
      <style>{`
        .hero-bg {
          background: linear-gradient(160deg, #05090f 0%, #080e1a 55%, #060b14 100%);
        }
        :is(html:not(.dark)) .hero-bg {
          background: var(--color-canvas);
        }

        .hero-dot-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          top: 40%; left: 50%;
          width: 900px; height: 900px;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-dot-pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background-color: #2563EB;
          box-shadow: 0 0 8px rgba(37,99,235,0.8);
          flex-shrink: 0;
        }

        .hero-eyebrow  { color: var(--color-muted-foreground); opacity: 0.65; }
        .hero-h1       { color: var(--color-foreground); }
        .hero-sub-headline { color: var(--color-muted-foreground); opacity: 0.55; }
        .hero-desc     { color: var(--color-muted-foreground); }

        .hero-link-ghost {
          color: var(--color-muted-foreground);
          border: 1px solid var(--color-border);
          opacity: 0.75;
          transition: opacity 200ms ease;
        }

        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.8; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
