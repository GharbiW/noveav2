"use client";

import { useState } from "react";
import { TEAM, INQUIRIES, SERVICES } from "@/lib/team";

/**
 * Contact form — three steps:
 *   1. Service       (5 service rows)
 *   2. Request type  (sub-inquiries → routed to a specific team member)
 *   3. Details       (name / email / message + assigned member banner)
 *
 * The team grid / big left photo column has been removed from this section.
 * Team presentation now lives in `<TeamShowcase />` (home + about pages only).
 *
 * Color rule: never put white text on a green (lime) background.
 * → CTA buttons use off-white background with dark text.
 * → Lime is used as accent strokes / dots / eyebrows / 1px borders only.
 */

const ACCENT = "#a7f432";
const ACCENT_DARK_TEXT = "#0f110c";

type WorkWithUsProps = { precoloredFaces?: boolean };

export default function WorkWithUs(_: WorkWithUsProps = {}) {
  const [step, setStep]                       = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [form, setForm]                       = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted]             = useState(false);

  const assignedMember = selectedInquiry && selectedService
    ? TEAM.find((m) => m.id === INQUIRIES[selectedService]?.find((i) => i.key === selectedInquiry)?.memberId)
    : null;

  function pickService(key: string) {
    setSelectedService(key);
    setSelectedInquiry(null);
    setStep(2);
  }
  function pickInquiry(key: string) {
    setSelectedInquiry(key);
    setStep(3);
  }
  function goBack() {
    if (step === 3) { setSelectedInquiry(null); setStep(2); }
    else if (step === 2) { setSelectedService(null); setStep(1); }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="work-with-us"
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* faint accent glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(167,244,50,0.05) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Work With Us</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 3.2vw, 42px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Tell us what you need.{" "}
            <span style={{ color: "var(--color-eyebrow)" }}>We&apos;ll route you in 24h.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              color: "var(--color-muted-foreground)",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "14px auto 0",
            }}
          >
            Pick a service, then the request type. We pair every project with the
            senior operator who actually owns the problem.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "var(--color-canvas)",
            border: "1px solid var(--color-border)",
            padding: "28px 36px",
          }}
        >

          {/* Step indicator */}
          <div style={{ display: "flex", gap: 6, marginBottom: 24, alignItems: "center", flexWrap: "wrap" }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 22, height: 22, borderRadius: "50%",
                    backgroundColor: step >= s ? ACCENT : "transparent",
                    border: step >= s ? "none" : "1px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 200ms ease",
                  }}
                >
                  {step > s ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke={ACCENT_DARK_TEXT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        color: step >= s ? ACCENT_DARK_TEXT : "var(--color-muted-foreground)",
                        opacity: step >= s ? 1 : 0.4,
                        fontWeight: 600,
                      }}
                    >
                      {s}
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: step === s ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                    opacity: step === s ? 0.85 : 0.4,
                  }}
                >
                  {s === 1 ? "Service" : s === 2 ? "Request" : "Details"}
                </span>
                {s < 3 && <div style={{ width: 24, height: 1, backgroundColor: "var(--color-border)" }} />}
              </div>
            ))}

            {step > 1 && (
              <button
                onClick={goBack}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  marginLeft: "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  color: "var(--color-muted-foreground)",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  transition: "opacity 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
              >
                ← Back
              </button>
            )}
          </div>

          {/* ── STEP 1: Service ── */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Instruction — dark plate w/ lime accents (no white-on-green) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                  padding: "12px 16px",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderLeft: `2px solid ${ACCENT}`,
                }}
              >
                <div
                  style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    backgroundColor: ACCENT,
                    boxShadow: `0 0 6px rgba(167,244,50,0.6)`,
                    flexShrink: 0,
                    animation: "wwuPulse 2s ease-in-out infinite",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-muted-foreground)",
                    margin: 0,
                  }}
                >
                  Choose a service to get started
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "var(--color-border)" }}>
                {SERVICES.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => pickService(s.key)}
                    className="wwu-row"
                    style={{
                      all: "unset",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 18px",
                      backgroundColor: "var(--color-canvas)",
                      borderLeft: "3px solid transparent",
                      transition: "all 180ms ease",
                      animation: `wwuFadeUp ${100 + i * 50}ms ease`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "var(--color-eyebrow)",
                        flexShrink: 0,
                        width: 22,
                      }}
                    >
                      {s.num}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--color-foreground)", margin: 0, letterSpacing: "-0.01em" }}>
                        {s.label}
                      </p>
                      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 12, color: "var(--color-muted-foreground)", margin: "3px 0 0" }}>
                        {s.desc}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                      <span className="wwu-cue-text" style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-eyebrow)", opacity: 0, transition: "opacity 180ms ease" }}>
                        Select
                      </span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="wwu-cue-arrow" style={{ opacity: 0.3, transition: "opacity 180ms ease, transform 180ms ease" }}>
                        <path d="M4 2l5 5-5 5" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 2: Inquiry type ── */}
          {step === 2 && selectedService && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--color-foreground)", margin: "0 0 12px" }}>
                What type of request?
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "var(--color-border)" }}>
                {INQUIRIES[selectedService].map((inq, i) => {
                  const member = TEAM.find((m) => m.id === inq.memberId);
                  return (
                    <button
                      key={inq.key}
                      type="button"
                      onClick={() => pickInquiry(inq.key)}
                      className="wwu-row"
                      style={{
                        all: "unset",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "14px 16px",
                        backgroundColor: "var(--color-canvas)",
                        borderLeft: "3px solid transparent",
                        transition: "all 150ms ease",
                        animation: `wwuFadeUp ${80 + i * 60}ms ease`,
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--color-foreground)", margin: 0 }}>
                          {inq.label}
                        </p>
                        {member && (
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-eyebrow)", margin: "3px 0 0" }}>
                            → {member.name}
                          </p>
                        )}
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {member && (
                        <img
                          src={member.photo}
                          alt={member.name}
                          style={{
                            width: 36, height: 36,
                            borderRadius: "50%",
                            objectFit: "cover",
                            objectPosition: "center 22%",
                            border: "1px solid var(--color-border)",
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="wwu-cue-arrow" style={{ opacity: 0.3, flexShrink: 0, transition: "opacity 150ms ease, transform 150ms ease" }}>
                        <path d="M4 2l4 4-4 4" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── STEP 3: Details + assigned member ── */}
          {step === 3 && (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0, animation: "wwuFadeUp 220ms ease" }}>
              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12, padding: "40px 0" }}>
                  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke={ACCENT} strokeOpacity="0.5" />
                    <path d="M6 11l3.5 3.5L16 8" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, color: "var(--color-foreground)", margin: 0, letterSpacing: "-0.02em" }}>
                    Message received.
                  </p>
                  {assignedMember && (
                    <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13, color: "var(--color-muted-foreground)", margin: 0 }}>
                      {assignedMember.name} will be in touch within 24h.
                    </p>
                  )}
                </div>
              ) : (
                <>
                  {/* Assigned member banner — final-step reveal of who answers */}
                  {assignedMember && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "14px 16px",
                        marginBottom: 22,
                        border: "1px solid var(--color-border)",
                        borderLeft: `2px solid ${ACCENT}`,
                        backgroundColor: "var(--color-surface)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={assignedMember.photo}
                        alt={assignedMember.name}
                        style={{
                          width: 52, height: 52,
                          objectFit: "cover", objectPosition: "center 22%",
                          outline: `1px solid ${ACCENT}`,
                          outlineOffset: 2,
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-eyebrow)", margin: 0 }}>
                          Your contact
                        </p>
                        <p style={{ fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--color-foreground)", margin: "2px 0 2px", letterSpacing: "-0.01em" }}>
                          {assignedMember.name}
                        </p>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", color: "var(--color-muted-foreground)", margin: 0, opacity: 0.6, textTransform: "uppercase" }}>
                          {assignedMember.role}
                        </p>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "flex-end", marginBottom: 3 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.14em", color: "var(--color-muted-foreground)", opacity: 0.7, textTransform: "uppercase" }}>
                            Available
                          </span>
                        </div>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--color-muted-foreground)", opacity: 0.45, margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                          Responds in 24h
                        </p>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }} id="wwu-detail-fields">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "var(--font-mono)",
                            fontSize: 8,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--color-muted-foreground)",
                            marginBottom: 5,
                            opacity: 0.55,
                          }}
                        >
                          {field === "name" ? "Full name" : "Email"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          required
                          placeholder={field === "name" ? "Your name" : "you@company.com"}
                          value={form[field]}
                          onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                          style={{
                            width: "100%",
                            fontFamily: "var(--font-sans)",
                            fontWeight: 300,
                            fontSize: 13,
                            color: "var(--color-foreground)",
                            backgroundColor: "transparent",
                            border: "none",
                            borderBottom: "1px solid var(--color-border)",
                            padding: "8px 0",
                            outline: "none",
                            boxSizing: "border-box",
                            transition: "border-color 150ms ease",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderBottomColor = ACCENT)}
                          onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-border)")}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: 22 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <label style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted-foreground)", opacity: 0.55 }}>
                        Message
                      </label>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em", color: "var(--color-muted-foreground)", opacity: 0.35 }}>
                        OPTIONAL
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your project..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      style={{
                        width: "100%",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "var(--color-foreground)",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid var(--color-border)",
                        padding: "8px 0",
                        outline: "none",
                        resize: "none",
                        boxSizing: "border-box",
                        lineHeight: 1.7,
                        transition: "border-color 150ms ease",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderBottomColor = ACCENT)}
                      onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-border)")}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 18,
                      borderTop: "1px solid var(--color-border)",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#F0F2EA",
                        color: ACCENT_DARK_TEXT,
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        fontSize: 12,
                        padding: "11px 24px",
                        border: "none",
                        cursor: "pointer",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        transition: "background-color 150ms ease",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d8dbd2")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F2EA")}
                    >
                      {assignedMember ? `Send to ${assignedMember.name.split(" ")[0]}` : "Send message"}
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5h7M6 2.5l3 3-3 3" stroke={ACCENT_DARK_TEXT} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.12em", color: "var(--color-muted-foreground)", opacity: 0.4, textTransform: "uppercase" }}>
                      No spam · 24h response
                    </span>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes wwuFadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wwuPulse {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%      { opacity: 0.4; transform: scale(0.6); }
        }
        .wwu-row:hover {
          background-color: var(--color-surface) !important;
          border-left-color: ${ACCENT} !important;
        }
        .wwu-row:hover .wwu-cue-text  { opacity: 1 !important; }
        .wwu-row:hover .wwu-cue-arrow { opacity: 1 !important; transform: translateX(3px); }

        @media (max-width: 480px) {
          #wwu-detail-fields { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wwu-row, .wwu-cue-arrow { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
