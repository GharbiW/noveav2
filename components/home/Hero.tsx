"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ACCENT = "#a7f432";

/** Video wrapper max width */
const VIDEO_MAX_W = 1008;

const segments = [
  "acquisition",
  "retention",
  "brand authority",
  "media distribution",
  "audience intelligence",
  "measurable growth",
];

export default function Hero() {
  const [idx, setIdx]           = useState(0);
  const [leaving, setLeaving]   = useState(false);
  const [soundOn, setSoundOn]   = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const sectionRef    = useRef<HTMLElement>(null);
  const textLayerRef  = useRef<HTMLDivElement>(null);
  const videoLayerRef = useRef<HTMLDivElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (!sectionRef.current || !textLayerRef.current || !videoLayerRef.current) return;
        const rect       = sectionRef.current.getBoundingClientRect();
        const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
        const scrolled   = Math.max(0, -rect.top);
        const p          = Math.min(1, scrolled / scrollable);

        const textProgress = Math.min(1, p / 0.55);
        textLayerRef.current.style.opacity   = String(1 - textProgress);
        textLayerRef.current.style.transform = `translateY(${-textProgress * 80}px)`;
        textLayerRef.current.style.pointerEvents = textProgress > 0.6 ? "none" : "auto";

        const videoProgress = Math.max(0, Math.min(1, (p - 0.2) / 0.6));
        videoLayerRef.current.style.opacity   = String(videoProgress);
        videoLayerRef.current.style.transform = `scale(${0.9 + videoProgress * 0.1})`;

        if (videoProgress > 0.05 && videoRef.current && !videoStarted) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
          setVideoStarted(true);
        }
        if (videoProgress < 0.02 && videoRef.current && videoStarted) {
          videoRef.current.pause();
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [videoStarted]);

  // Stop video completely when navigating away
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.muted = true;
        videoRef.current.src = "";
      }
    };
  }, []);

  function toggleSound() {
    if (!videoRef.current) return;
    const next = !soundOn;
    videoRef.current.muted = !next;
    setSoundOn(next);
    if (next) videoRef.current.play().catch(() => {});
  }

  return (
    <section ref={sectionRef} style={{ height: "150vh", position: "relative" }}>
      <div
        style={{ position: "sticky", top: 0, height: "92vh", overflow: "hidden" }}
        className="hero-sticky"
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }} className="hero-bg" />
        <div aria-hidden className="hero-dot-grid" />
        <div aria-hidden className="hero-glow" />
        {/* Soft tech ambience — no hard scan line */}
        <div aria-hidden className="hero-tech-ambient">
          <div className="hero-tech-sweep" />
          <div className="hero-tech-sweep hero-tech-sweep-delayed" />
        </div>

        <Crosshair pos="tl" />
        <Crosshair pos="tr" />
        <Crosshair pos="bl" />
        <Crosshair pos="br" />

        {/* VIDEO — native mp4, no player chrome */}
        <div
          ref={videoLayerRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0,
            transform: "scale(0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 24px 72px",
          }}
        >
          <div style={{ width: "100%", maxWidth: VIDEO_MAX_W, position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: `0 30px 80px -20px rgba(167,244,50,0.08), 0 0 0 1px rgba(167,244,50,0.04)`,
                backgroundColor: "#0f110c",
              }}
            >
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                ref={videoRef}
                src="/videos/intro.mp4"
                muted
                playsInline
                loop
                preload="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundColor: "#0f110c",
                }}
              />

              {/* Sound toggle — dark plate, lime border, never white-on-lime */}
              <button
                onClick={toggleSound}
                aria-label={soundOn ? "Mute video" : "Enable sound"}
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  zIndex: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "6px 12px",
                  backgroundColor: "rgba(12,14,10,0.82)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${soundOn ? "rgba(167,244,50,0.6)" : "rgba(255,255,255,0.12)"}`,
                  cursor: "pointer",
                  transition: "border-color 200ms ease",
                }}
              >
                {soundOn ? (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5H4.5L7 2v9l-2.5-2.5H2V4.5Z" stroke="#a7f432" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M9.5 4.5a2.5 2.5 0 0 1 0 4" stroke="#a7f432" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5H4.5L7 2v9l-2.5-2.5H2V4.5Z" stroke="rgba(240,242,234,0.5)" strokeWidth="1.2" strokeLinejoin="round"/>
                    <line x1="9" y1="4.5" x2="12" y2="8.5" stroke="rgba(240,242,234,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
                    <line x1="12" y1="4.5" x2="9" y2="8.5" stroke="rgba(240,242,234,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                )}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: soundOn ? "#a7f432" : "rgba(240,242,234,0.55)" }}>
                  {soundOn ? "Sound on" : "Sound off"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* TEXT */}
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
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div className="hero-dot-pulse" />
            <p className="hero-eyebrow" style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", margin: 0 }}>
              Technology-Mediatique Company
            </p>
            <div className="hero-dot-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* H1 — exactly 3 lines */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(28px, 4.6vw, 62px)",
              lineHeight: 1.08,
              letterSpacing: "-0.032em",
              margin: 0,
              marginBottom: 22,
              maxWidth: 820,
            }}
          >
            <span className="hero-h1-line">40+ owned media properties.</span>
            <br />
            <span className="hero-h1-line">One platform, built for</span>
            <br />
            <span className="hero-h1-line hero-h1-line-accent">
              <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
                <span
                  style={{
                    display: "inline-block",
                    color: "var(--color-eyebrow)",
                    transform: leaving ? "translateY(-24px)" : "translateY(0)",
                    opacity: leaving ? 0 : 1,
                    transition: "transform 380ms cubic-bezier(0.4,0,0.2,1), opacity 280ms ease",
                    minWidth: "9ch",
                    textAlign: "center",
                    textShadow: `0 0 20px rgba(167,244,50,0.21)`,
                  }}
                >
                  {segments[idx]}
                </span>
              </span>
              <span className="hero-sub-headline">.</span>
            </span>
          </h1>

          <p
            className="hero-desc"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 32px",
            }}
          >
            First-party data from our owned network — consulting, automation, AI and distribution for clients who need clear attribution.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <Link href="/services" className="hero-cta-primary">
              Explore Services
              <span className="hero-cta-arrow">→</span>
            </Link>
            <Link href="/network" className="hero-link-ghost">
              <span className="hero-link-bracket">[</span>
              Our Network
              <span className="hero-link-bracket">]</span>
            </Link>
          </div>

          <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,242,234,0.32)" }}>
              scroll · reveal
            </span>
            <div className="hero-scroll-line" />
          </div>
        </div>

      </div>

      <style>{`
        .hero-bg {
          background:
            radial-gradient(ellipse at 70% 28%, rgba(167,244,50,0.028) 0%, transparent 52%),
            linear-gradient(160deg, #0a0d08 0%, #11140d 55%, #0a0d08 100%);
        }
        :is(html.light) .hero-bg {
          background:
            radial-gradient(ellipse at 70% 28%, rgba(167,244,50,0.05) 0%, transparent 52%),
            var(--color-canvas);
        }

        .hero-dot-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,244,50,0.014) 1px, transparent 1px);
          background-size: 64px 64px;
          background-position: 0 0, 0 0;
          mask-image: radial-gradient(ellipse at center, #000 28%, transparent 78%);
          pointer-events: none;
          z-index: 0;
          animation: heroGridDrift 32s linear infinite;
        }
        @keyframes heroGridDrift {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 64px 40px, -48px 24px; }
        }

        .hero-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 800px; height: 800px;
          transform: translate(-50%, -50%);
          background: radial-gradient(ellipse at center, rgba(167,244,50,0.035) 0%, transparent 62%);
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient light wash — reads as “signal” without a visible line */
        .hero-tech-ambient {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .hero-tech-sweep {
          position: absolute;
          left: -35%;
          width: 170%;
          height: 42%;
          top: -30%;
          filter: blur(64px);
          opacity: 0.22;
          background: radial-gradient(ellipse 52% 48% at 50% 100%,
            rgba(167, 244, 50, 0.09) 0%,
            rgba(255, 255, 255, 0.025) 45%,
            transparent 72%);
          animation: heroTechDrift 22s ease-in-out infinite;
        }
        .hero-tech-sweep-delayed {
          animation-delay: -11s;
          animation-duration: 26s;
          opacity: 0.14;
          height: 36%;
          left: -25%;
          width: 150%;
          background: radial-gradient(ellipse 48% 42% at 40% 100%,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(167, 244, 50, 0.05) 38%,
            transparent 68%);
        }
        @keyframes heroTechDrift {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          40%      { transform: translateY(42vh) translateX(1.5%) scale(1.03); }
          70%      { transform: translateY(78vh) translateX(-1%) scale(0.98); }
        }

        .hero-dot-pulse {
          width: 5px; height: 5px;
          border-radius: 50%;
          background-color: ${ACCENT};
          box-shadow: 0 0 5px rgba(167,244,50,0.35);
          flex-shrink: 0;
          animation: heroDotPulse 3s ease-in-out infinite;
        }
        @keyframes heroDotPulse {
          0%, 100% { transform: scale(1);    opacity: 1;   }
          50%      { transform: scale(0.65); opacity: 0.4; }
        }

        .hero-eyebrow      { color: var(--color-muted-foreground); opacity: 0.7; }
        .hero-h1          { color: var(--color-foreground); }
        .hero-h1-line     { white-space: nowrap; }
        .hero-h1-line-accent { white-space: nowrap; }
        .hero-sub-headline { color: var(--color-muted-foreground); opacity: 0.5; }
        .hero-desc         { color: var(--color-muted-foreground); }

        @media (max-width: 640px) {
          .hero-h1-line, .hero-h1-line-accent { white-space: normal; }
        }

        .hero-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: ${ACCENT};
          color: #0a0d08;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 13px;
          padding: 14px 28px;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid ${ACCENT};
          transition: all 180ms ease;
          position: relative;
        }
        .hero-cta-primary:hover {
          background-color: transparent;
          color: ${ACCENT};
          box-shadow: 0 0 32px -4px ${ACCENT}66;
        }
        .hero-cta-primary:hover .hero-cta-arrow { transform: translateX(4px); }
        .hero-cta-arrow { transition: transform 180ms ease; }

        .hero-link-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-muted-foreground);
          text-decoration: none;
          letter-spacing: 0.12em;
          padding: 13px 18px;
          border: 1px solid var(--color-border);
          transition: color 180ms ease, border-color 180ms ease;
        }
        .hero-link-ghost:hover {
          color: ${ACCENT};
          border-color: ${ACCENT}55;
        }
        .hero-link-bracket { color: ${ACCENT}; opacity: 0.6; }

        .hero-scroll-line {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.12), rgba(167,244,50,0.08), transparent);
          opacity: 0.45;
          animation: scrollPulse 3.2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50%      { opacity: 0.5;  transform: scaleY(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-dot-grid,
          .hero-tech-sweep,
          .hero-scroll-line,
          .hero-dot-pulse { animation: none !important; }
          .hero-tech-sweep { opacity: 0.1; transform: none; }
        }
      `}</style>
    </section>
  );
}

function Crosshair({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const SIZE = 14;
  const COLOR = "rgba(167,244,50,0.14)";
  const THICK = 1;
  const OFFSET = 24;

  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 88,    left: OFFSET,  borderTop: `${THICK}px solid ${COLOR}`, borderLeft:  `${THICK}px solid ${COLOR}` },
    tr: { top: 88,    right: OFFSET, borderTop: `${THICK}px solid ${COLOR}`, borderRight: `${THICK}px solid ${COLOR}` },
    bl: { bottom: 24, left: OFFSET,  borderBottom: `${THICK}px solid ${COLOR}`, borderLeft:  `${THICK}px solid ${COLOR}` },
    br: { bottom: 24, right: OFFSET, borderBottom: `${THICK}px solid ${COLOR}`, borderRight: `${THICK}px solid ${COLOR}` },
  };

  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        width: SIZE,
        height: SIZE,
        zIndex: 3,
        pointerEvents: "none",
        ...styles[pos],
      }}
    />
  );
}
