"use client";

import { useState } from "react";
import { TEAM, type TeamMember } from "@/lib/team";

/**
 * Interactive team presentation — used on home + about pages only.
 *
 * Layout:
 *  - One row: hero + 4×2 thumb grid share the same height (aligned, capped height).
 *  - Name / title sit on a light bottom gradient on the hero only (no bio strip).
 *
 * No white text on lime backgrounds. Lime is only used as accent strokes,
 * eyebrows, dots and small labels.
 */

const ACCENT = "#a7f432";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  /** Compact = home page (no titles, only the showcase); Full = about page */
  variant?: "full" | "compact";
};

export default function TeamShowcase({
  eyebrow = "Team",
  title = "The people behind the work.",
  subtitle = "Senior operators in consulting, automation, AI/data and media distribution. Hover a face to see who runs the vertical.",
  variant = "full",
}: Props) {
  const [activeId, setActiveId] = useState<number>(TEAM[0].id);
  const active = TEAM.find((m) => m.id === activeId) ?? TEAM[0];

  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        paddingTop: variant === "compact" ? 72 : 100,
        paddingBottom: variant === "compact" ? 72 : 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* faint grid backdrop */}
      <div aria-hidden className="ts-grid-bg" />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 28, maxWidth: 680 }}>
          <p
            className="eyebrow"
            style={{
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span className="ts-pulse-dot" />
            {eyebrow}
            <span style={{ flex: 1, height: 1, backgroundColor: "var(--color-border)", opacity: 0.5, marginLeft: 8 }} />
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 3.6vw, 48px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 10,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              color: "var(--color-muted-foreground)",
              lineHeight: 1.7,
              maxWidth: 580,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Showcase: hero + grid (single aligned row) */}
        <div className="ts-showcase" key={active.id}>
          <div className="ts-main">
            {/* LEFT — hero fills row height (matches grid) */}
            <div className="ts-stage-wrap">
              <div className="ts-stage-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active.photo} alt={active.name} className="ts-stage-img" />

                <span className="ts-corner ts-corner-tl" />
                <span className="ts-corner ts-corner-tr" />
                <span className="ts-corner ts-corner-bl" />
                <span className="ts-corner ts-corner-br" />

                <div className="ts-id">
                  <span className="ts-id-num">#{String(active.id).padStart(2, "0")}</span>
                  <span className="ts-id-divider" />
                  <span className="ts-id-init">{active.initials}</span>
                </div>

                <div className="ts-name-block">
                  <span className="ts-name-bar" aria-hidden="true" />
                  <div className="ts-name-text">
                    <p className="ts-name">{active.name}</p>
                    <p className="ts-role">{active.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — 4×2 grid, same height as hero */}
            <div className="ts-grid">
              {TEAM.map((m) => (
                <Thumb
                  key={m.id}
                  member={m}
                  active={m.id === activeId}
                  onPick={() => setActiveId(m.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ts-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,244,50,0.014) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 80%);
          pointer-events: none;
        }

        .ts-pulse-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 6px rgba(167,244,50,0.45);
          animation: tsPulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes tsPulse {
          0%, 100% { transform: scale(1);    opacity: 1;   }
          50%      { transform: scale(0.6);  opacity: 0.4; }
        }

        /* Aligned row: shared capped height so left ≠ taller than right */
        .ts-showcase { animation: tsFadeIn 380ms ease; }
        @keyframes tsFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ts-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          /* Cap vertical size — hero + grid stay one band */
          grid-template-rows: minmax(290px, min(44vw, 450px));
          align-items: stretch;
        }

        .ts-stage-wrap {
          min-width: 0;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }

        .ts-stage-frame {
          position: relative;
          flex: 1;
          min-height: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0c0e09;
          border: 1px solid var(--color-border);
        }
        .ts-stage-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 22%;
          filter: brightness(0.86) contrast(1.04) saturate(0.95);
          transition: transform 6000ms ease;
          transform: scale(1.04);
        }
        .ts-stage-frame:hover .ts-stage-img { transform: scale(1.08); }

        .ts-corner {
          position: absolute;
          width: 22px; height: 22px;
          pointer-events: none;
          z-index: 2;
        }
        .ts-corner-tl { top: 14px;    left: 14px;    border-top:    1px solid ${ACCENT}; border-left:   1px solid ${ACCENT}; }
        .ts-corner-tr { top: 14px;    right: 14px;   border-top:    1px solid ${ACCENT}; border-right:  1px solid ${ACCENT}; }
        .ts-corner-bl { bottom: 14px; left: 14px;    border-bottom: 1px solid ${ACCENT}; border-left:   1px solid ${ACCENT}; }
        .ts-corner-br { bottom: 14px; right: 14px;   border-bottom: 1px solid ${ACCENT}; border-right:  1px solid ${ACCENT}; }

        .ts-id {
          position: absolute;
          top: 14px; left: 14px;
          z-index: 3;
          display: flex; align-items: center; gap: 8px;
          padding: 6px 10px;
          background: rgba(15,17,12,0.78);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .ts-id-num   { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em; color: ${ACCENT}; }
        .ts-id-divider { width: 1px; height: 12px; background: rgba(255,255,255,0.18); }
        .ts-id-init  { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em; color: rgba(240,242,234,0.55); }

        .ts-name-block {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          gap: 12px;
          padding: 56px 18px 18px 16px;
          background: linear-gradient(
            180deg,
            rgba(8, 10, 8, 0) 0%,
            rgba(8, 10, 8, 0.55) 38%,
            rgba(8, 10, 8, 0.92) 100%
          );
          pointer-events: none;
        }
        .ts-name-bar {
          flex-shrink: 0;
          width: 3px;
          align-self: stretch;
          min-height: 40px;
          border-radius: 2px;
          background: linear-gradient(180deg, ${ACCENT} 0%, rgba(167, 244, 50, 0.28) 100%);
          opacity: 0.9;
        }
        .ts-name-text {
          flex: 1;
          min-width: 0;
          padding-bottom: 2px;
        }
        .ts-name {
          font-family: var(--font-sans);
          font-size: clamp(15px, 1.55vw, 18px);
          font-weight: 600;
          color: #f0f2ea;
          letter-spacing: -0.03em;
          margin: 0;
          line-height: 1.18;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.45);
        }
        .ts-role {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(240, 242, 234, 0.5);
          margin: 7px 0 0;
          line-height: 1.35;
          max-width: 42ch;
        }

        /* 4×2 thumb grid — fills same row height as hero */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          min-height: 0;
          min-width: 0;
          height: 100%;
        }

        @media (max-width: 980px) {
          .ts-main {
            grid-template-columns: 1fr;
            grid-template-rows: minmax(290px, min(56vw, 430px)) minmax(250px, min(48vw, 370px));
            gap: 16px;
          }
          .ts-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-template-rows: repeat(2, minmax(0, 1fr));
            height: 100%;
          }
        }
        @media (max-width: 640px) {
          .ts-main {
            grid-template-rows: minmax(250px, 52vw) auto;
          }
          .ts-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: repeat(4, minmax(0, 80px));
          }
          .ts-name-block {
            padding: 44px 14px 14px 12px;
            gap: 10px;
          }
          .ts-name-bar { min-height: 34px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ts-pulse-dot, .ts-stage-img { animation: none !important; transform: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Thumb ─────────────────────────────────────────────────────────── */

function Thumb({
  member,
  active,
  onPick,
}: {
  member: TeamMember;
  active: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      onMouseEnter={onPick}
      className={"ts-thumb" + (active ? " is-active" : "")}
      aria-label={`Show ${member.name}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={member.photo} alt={member.name} className="ts-thumb-img" />
      <div className="ts-thumb-overlay" />
      <div className="ts-thumb-meta">
        <span className="ts-thumb-num">#{String(member.id).padStart(2, "0")}</span>
        <div>
          <p className="ts-thumb-name">{member.name.split(" ")[0]}</p>
          <p className="ts-thumb-role">{member.role}</p>
        </div>
      </div>

      <style>{`
        .ts-thumb {
          all: unset;
          cursor: pointer;
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 0;
          min-width: 0;
          overflow: hidden;
          background: #0c0e09;
          isolation: isolate;
        }
        .ts-thumb-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 22%;
          filter: grayscale(0.65) brightness(0.55) contrast(1.05);
          transition: filter 350ms ease, transform 600ms ease;
          transform: scale(1.02);
        }
        .ts-thumb:hover .ts-thumb-img,
        .ts-thumb.is-active .ts-thumb-img {
          filter: grayscale(0) brightness(0.92) contrast(1.05);
          transform: scale(1.06);
        }

        .ts-thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(15,17,12,0.85) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .ts-thumb-meta {
          position: absolute; left: 12px; right: 12px; bottom: 12px;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          gap: 8px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 220ms ease, transform 220ms ease;
        }
        .ts-thumb:hover .ts-thumb-meta,
        .ts-thumb.is-active .ts-thumb-meta {
          opacity: 1;
          transform: translateY(0);
        }
        .ts-thumb-num {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.14em;
          color: ${ACCENT};
          flex-shrink: 0;
        }
        .ts-thumb-name {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          color: rgba(240,242,234,0.92);
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .ts-thumb-role {
          font-family: var(--font-mono);
          font-size: 7px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,242,234,0.45);
          margin: 3px 0 0;
        }

        /* Active ring */
        .ts-thumb.is-active::after {
          content: "";
          position: absolute; inset: 0;
          z-index: 3;
          pointer-events: none;
          box-shadow: inset 0 0 0 2px ${ACCENT};
        }
        /* Active corner mark */
        .ts-thumb.is-active::before {
          content: "";
          position: absolute;
          top: 8px; right: 8px;
          width: 6px; height: 6px;
          background: ${ACCENT};
          z-index: 3;
          box-shadow: 0 0 8px ${ACCENT};
          animation: tsPulse 2.4s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
}
