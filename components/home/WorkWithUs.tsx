"use client";

import { useState } from "react";

/* ── 12 members, 4 per row ─────────────────────────────────────────── */
const team = [
  { id:  1, name: "Alexandre Moreau", role: "Account Director",      photo: "https://randomuser.me/api/portraits/men/32.jpg",   service: "general"     },
  { id:  2, name: "Léa Martin",       role: "Client Success",         photo: "https://randomuser.me/api/portraits/women/90.jpg", service: "general"     },
  { id:  3, name: "Sophie Laurent",   role: "Data Strategy Lead",     photo: "https://randomuser.me/api/portraits/women/44.jpg", service: "aidata"      },
  { id:  4, name: "Marc Petit",       role: "Data Analyst",           photo: "https://randomuser.me/api/portraits/men/52.jpg",   service: "aidata"      },
  { id:  5, name: "Inès Moreau",      role: "Data Scientist",         photo: "https://randomuser.me/api/portraits/women/26.jpg", service: "aidata"      },
  { id:  6, name: "Karim Benali",     role: "Automation Lead",        photo: "https://randomuser.me/api/portraits/men/85.jpg",   service: "automation"  },
  { id:  7, name: "Élise Fontaine",   role: "CRM Specialist",         photo: "https://randomuser.me/api/portraits/women/55.jpg", service: "automation"  },
  { id:  8, name: "Riad Hassan",      role: "SaaS Developer",         photo: "https://randomuser.me/api/portraits/men/41.jpg",   service: "automation"  },
  { id:  9, name: "Nadia Rousseau",   role: "Digital Consultant",     photo: "https://randomuser.me/api/portraits/women/68.jpg", service: "consulting"  },
  { id: 10, name: "Hugo Bernard",     role: "SEO & Growth Strategist", photo: "https://randomuser.me/api/portraits/men/63.jpg",  service: "consulting"  },
  { id: 11, name: "Thomas Dubois",    role: "Media Director",         photo: "https://randomuser.me/api/portraits/men/76.jpg",   service: "media"       },
  { id: 12, name: "Clara Simon",      role: "Distribution Lead",      photo: "https://randomuser.me/api/portraits/women/72.jpg", service: "media"       },
];

const services = [
  { key: "consulting",  num: "01", label: "Consulting Digital",       desc: "Strategy, SEO & conversion"     },
  { key: "automation",  num: "02", label: "Automation & SaaS",        desc: "Workflows, CRM & mini-SaaS"     },
  { key: "aidata",      num: "03", label: "AI & Data",                desc: "Predictive models & segments"   },
  { key: "media",       num: "04", label: "Média & Distribution",     desc: "Sponsored content & reach"      },
  { key: "general",     num: "05", label: "General Inquiry",          desc: "Partnerships, press & other"    },
];

const inquiries: Record<string, { key: string; label: string; memberId: number }[]> = {
  consulting: [
    { key: "audit",       label: "Performance audit & diagnostics",     memberId: 9  },
    { key: "seo",         label: "SEO architecture & strategy",         memberId: 10 },
    { key: "conversion",  label: "Conversion engineering & CRO",        memberId: 9  },
  ],
  automation: [
    { key: "crm",         label: "CRM workflows & integration",        memberId: 6  },
    { key: "nurturing",   label: "Lead nurturing & scoring",            memberId: 7  },
    { key: "saas",        label: "Custom mini-SaaS platform",           memberId: 8  },
  ],
  aidata: [
    { key: "modeling",    label: "Predictive modelling & segmentation", memberId: 3  },
    { key: "signals",     label: "Intent signals & data activation",    memberId: 4  },
    { key: "licensing",   label: "Data monetisation & licensing",       memberId: 5  },
  ],
  media: [
    { key: "editorial",   label: "Sponsored editorial programs",       memberId: 11 },
    { key: "distribution", label: "Multi-platform distribution",       memberId: 12 },
  ],
  general: [
    { key: "partnership",  label: "Partnership & press",                memberId: 1  },
    { key: "onboarding",   label: "Client onboarding",                  memberId: 2  },
  ],
};

type WorkWithUsProps = { precoloredFaces?: boolean };

export default function WorkWithUs({ precoloredFaces = false }: WorkWithUsProps) {
  const [step, setStep]                       = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [hoveredId, setHoveredId]             = useState<number | null>(null);
  const [form, setForm]                       = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted]             = useState(false);

  const serviceMembers = selectedService
    ? team.filter((m) => m.service === selectedService).map((m) => m.id)
    : [];

  const assignedMember = selectedInquiry && selectedService
    ? team.find((m) => m.id === inquiries[selectedService]?.find((i) => i.key === selectedInquiry)?.memberId)
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
    if (step === 2) { setSelectedService(null);  setStep(1); }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* Photo state per member — sub-service pages: faces start precolored (muted) until hover/selection */
  function photoState(id: number) {
    if (step === 1) {
      if (hoveredId === id) return "hover";
      return precoloredFaces ? "precolored" : "default";
    }
    if (step === 2) return serviceMembers.includes(id) ? "active" : "dim";
    // step 3
    if (assignedMember?.id === id) return "hero";
    return "dim";
  }

  const filterMap: Record<string, string> = {
    default:    "grayscale(80%) brightness(0.42)",
    precolored: "grayscale(75%) brightness(0.5) saturate(0.5)",
    hover:      "grayscale(0%)  brightness(0.82)",
    active:     "grayscale(0%)  brightness(0.82)",
    dim:        "grayscale(100%) brightness(0.15)",
    hero:       "grayscale(0%)  brightness(0.88)",
  };

  return (
    <section style={{
      backgroundColor: "var(--color-surface)",
      borderTop: "1px solid var(--color-border)",
      paddingTop: 80,
      paddingBottom: 80,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Heading */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: 10 }}>
            Work With Us
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 400, color: "var(--color-foreground)", letterSpacing: "-0.025em", lineHeight: 1.08, margin: 0 }}>
            Tell us what you need.{" "}
            <span style={{ color: "#2563EB" }}>We&apos;ll show you who answers.</span>
          </h2>
        </div>

        {/* 50/50 panel */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          backgroundColor: "var(--color-border)",
          border: "1px solid var(--color-border)",
        }} id="wwu-main">

          {/* ── LEFT: grid (steps 1-2) or full hero (step 3) ── */}
          {step < 3 || !assignedMember ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              backgroundColor: "var(--color-border)",
            }}>
              {team.map((member) => {
                const state  = photoState(member.id);
                const isHero = state === "hero";
                return (
                  <div
                    key={member.id}
                    style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", cursor: "default" }}
                    onMouseEnter={() => setHoveredId(member.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.photo} alt={member.name} style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center top",
                      display: "block",
                      filter: filterMap[state],
                      transition: "filter 350ms ease, transform 350ms ease",
                      transform: state === "active" || state === "hero" || state === "hover" ? "scale(1.05)" : "scale(1)",
                    }} />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(4,8,20,0.92) 0%, transparent 50%)",
                      opacity: (state !== "default" && state !== "dim" && state !== "precolored") ? 1 : 0,
                      transition: "opacity 280ms ease", pointerEvents: "none",
                    }} />
                    {isHero && <div style={{ position: "absolute", inset: 0, border: "2px solid #2563EB", boxShadow: "inset 0 0 12px rgba(37,99,235,0.25)", pointerEvents: "none", zIndex: 2 }} />}
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 10px",
                      transform: (state !== "default" && state !== "dim" && state !== "precolored") ? "translateY(0)" : "translateY(6px)",
                      opacity: (state !== "default" && state !== "dim" && state !== "precolored") ? 1 : 0,
                      transition: "all 260ms ease", pointerEvents: "none", zIndex: 2,
                    }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: 11, color: "#fff", margin: 0, lineHeight: 1.2 }}>{member.name.split(" ")[0]}</p>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", margin: "2px 0 0" }}>{member.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── STEP 3: cinematic full-height hero photo ── */
            <div style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 500,
              animation: "fadeUp 350ms ease",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assignedMember.photo}
                alt={assignedMember.name}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "center top",
                  display: "block", position: "absolute", inset: 0,
                  filter: "grayscale(15%) brightness(0.75)",
                  transform: "scale(1.04)",
                  transition: "transform 600ms ease",
                }}
              />

              {/* Deep gradient at bottom */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(3,7,18,0.97) 0%, rgba(3,7,18,0.5) 45%, transparent 75%)",
                pointerEvents: "none",
              }} />

              {/* Corner brackets — top-left */}
              <div style={{ position: "absolute", top: 16, left: 16, width: 28, height: 28, borderTop: "2px solid #2563EB", borderLeft: "2px solid #2563EB" }} />
              {/* Corner brackets — top-right */}
              <div style={{ position: "absolute", top: 16, right: 16, width: 28, height: 28, borderTop: "2px solid #2563EB", borderRight: "2px solid #2563EB" }} />
              {/* Corner brackets — bottom-left */}
              <div style={{ position: "absolute", bottom: 16, left: 16, width: 28, height: 28, borderBottom: "2px solid #2563EB", borderLeft: "2px solid #2563EB" }} />
              {/* Corner brackets — bottom-right */}
              <div style={{ position: "absolute", bottom: 16, right: 16, width: 28, height: 28, borderBottom: "2px solid #2563EB", borderRight: "2px solid #2563EB" }} />

              {/* Response badge — top right */}
              <div style={{
                position: "absolute", top: 48, right: 48,
                backgroundColor: "#2563EB",
                padding: "10px 14px",
                textAlign: "center",
              }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>24h</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", margin: "3px 0 0" }}>Response</p>
              </div>

              {/* Name block — bottom */}
              <div style={{
                position: "absolute", bottom: 40, left: 32, right: 32, zIndex: 2,
              }}>
                {/* First name */}
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(22px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                }}>
                  {assignedMember.name.split(" ")[0]}
                </p>

                {/* Last name + line */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(22px, 3vw, 34px)",
                    fontWeight: 800,
                    color: "#2563EB",
                    margin: 0,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    lineHeight: 1.05,
                    whiteSpace: "nowrap",
                  }}>
                    {assignedMember.name.split(" ").slice(1).join(" ")}
                  </p>
                  <div style={{ flex: 1, height: 2, backgroundColor: "#2563EB", opacity: 0.6 }} />
                </div>

                {/* Role */}
                <p style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                }}>
                  {assignedMember.role}
                </p>
              </div>
            </div>
          )}

          {/* ── RIGHT: stepped form ── */}
          <div style={{ backgroundColor: "var(--color-canvas)", padding: "28px 36px", display: "flex", flexDirection: "column" }}>

            {/* Step indicator */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, alignItems: "center" }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%",
                    backgroundColor: step >= s ? "#2563EB" : "transparent",
                    border: step >= s ? "none" : "1px solid var(--color-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 200ms ease",
                  }}>
                    {step > s ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: step >= s ? "#fff" : "var(--color-muted-foreground)", opacity: step >= s ? 1 : 0.4 }}>{s}</span>
                    )}
                  </div>
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 8,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: step === s ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                    opacity: step === s ? 0.8 : 0.35,
                  }}>
                    {s === 1 ? "Service" : s === 2 ? "Request" : "Details"}
                  </span>
                  {s < 3 && <div style={{ width: 20, height: 1, backgroundColor: "var(--color-border)" }} />}
                </div>
              ))}

              {step > 1 && (
                <button onClick={goBack} style={{
                  all: "unset", cursor: "pointer", marginLeft: "auto",
                  fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.12em",
                  color: "var(--color-muted-foreground)", opacity: 0.45,
                  textTransform: "uppercase",
                  transition: "opacity 150ms",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
                >
                  ← Back
                </button>
              )}
            </div>

            {/* ── STEP 1: Service ── */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                {/* Instruction */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  marginBottom: 14, padding: "13px 18px",
                  backgroundColor: "#2563EB",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#fff", boxShadow: "0 0 6px rgba(255,255,255,0.7)", flexShrink: 0, animation: "pulse 2s ease-in-out infinite" }} />
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", margin: 0 }}>
                    Choose a service to get started — click any row below
                  </p>
                </div>

                {/* Service rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "var(--color-border)", flex: 1 }}>
                  {services.map((s, i) => (
                    <button key={s.key} type="button"
                      onClick={() => pickService(s.key)}
                      className="service-row"
                      style={{
                        all: "unset", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: 14,
                        padding: "16px 18px",
                        backgroundColor: "var(--color-canvas)",
                        borderLeft: "3px solid transparent",
                        transition: "all 180ms ease",
                        animation: `fadeUp ${100 + i * 50}ms ease`,
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#2563EB", flexShrink: 0, width: 22 }}>{s.num}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, color: "var(--color-foreground)", margin: 0, letterSpacing: "-0.01em" }}>{s.label}</p>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 12, color: "var(--color-muted-foreground)", margin: "3px 0 0" }}>{s.desc}</p>
                      </div>
                      {/* Right: tap cue */}
                      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }} className="service-cue">
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB", opacity: 0, transition: "opacity 180ms ease" }} className="service-cue-text">
                          Select
                        </span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.25, transition: "opacity 180ms ease, transform 180ms ease" }} className="service-cue-arrow">
                          <path d="M4 2l5 5-5 5" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "var(--color-foreground)", marginBottom: 12 }}>
                  What type of request?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, backgroundColor: "var(--color-border)" }}>
                  {inquiries[selectedService].map((inq, i) => {
                    const member = team.find((m) => m.id === inq.memberId);
                    return (
                      <button key={inq.key} type="button"
                        onClick={() => pickInquiry(inq.key)}
                        className="inquiry-row"
                        style={{
                          all: "unset", cursor: "pointer",
                          display: "flex", alignItems: "center", gap: 14,
                          padding: "14px 16px",
                          backgroundColor: "var(--color-canvas)",
                          borderLeft: "3px solid transparent",
                          transition: "all 150ms ease",
                          animation: `fadeUp ${80 + i * 60}ms ease`,
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "var(--color-foreground)", margin: 0 }}>{inq.label}</p>
                          {member && (
                            <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2563EB", margin: "3px 0 0" }}>
                              → {member.name}
                            </p>
                          )}
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {member && <img src={member.photo} alt={member.name} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-border)", flexShrink: 0 }} />}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inquiry-arrow" style={{ opacity: 0.25, flexShrink: 0, transition: "opacity 150ms ease, transform 150ms ease" }}>
                          <path d="M4 2l4 4-4 4" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── STEP 3: Details + assigned member ── */}
            {step === 3 && (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1, animation: "fadeUp 200ms ease" }}>
                {submitted ? (
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 12 }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle cx="11" cy="11" r="10" stroke="#2563EB" strokeOpacity="0.4"/>
                      <path d="M6 11l3.5 3.5L16 8" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--color-foreground)", margin: 0, letterSpacing: "-0.02em" }}>Message received.</p>
                    {assignedMember && <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13, color: "var(--color-muted-foreground)", margin: 0 }}>{assignedMember.name} will be in touch within 24h.</p>}
                  </div>
                ) : (
                  <>
                    {/* Assigned member banner */}
                    {assignedMember && (
                      <div style={{
                        display: "flex", alignItems: "center", gap: 14,
                        padding: "12px 14px", marginBottom: 18,
                        border: "1px solid var(--color-border)",
                        backgroundColor: "var(--color-surface)",
                      }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={assignedMember.photo} alt={assignedMember.name} style={{
                          width: 42, height: 42, objectFit: "cover", objectPosition: "center top",
                          outline: "2px solid #2563EB", outlineOffset: 2, flexShrink: 0,
                        }} />
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2563EB", margin: 0, opacity: 0.8 }}>Your contact</p>
                          <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: "var(--color-foreground)", margin: 0, letterSpacing: "-0.01em" }}>{assignedMember.name}</p>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.08em", color: "var(--color-muted-foreground)", margin: 0, opacity: 0.5 }}>{assignedMember.role}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 5, justifyContent: "flex-end", marginBottom: 3 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#10B981" }} />
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em", color: "var(--color-muted-foreground)", opacity: 0.5 }}>AVAILABLE</span>
                          </div>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: 7, color: "var(--color-muted-foreground)", opacity: 0.35, margin: 0 }}>Responds within 24h</p>
                        </div>
                      </div>
                    )}

                    {/* Fields */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }} id="detail-fields">
                      {(["name", "email"] as const).map((field) => (
                        <div key={field}>
                          <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted-foreground)", marginBottom: 5, opacity: 0.5 }}>
                            {field === "name" ? "Full name" : "Email"}
                          </label>
                          <input
                            type={field === "email" ? "email" : "text"}
                            required
                            placeholder={field === "name" ? "Your name" : "you@company.com"}
                            value={form[field]}
                            onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                            style={{
                              width: "100%", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13,
                              color: "var(--color-foreground)", backgroundColor: "transparent",
                              border: "none", borderBottom: "1px solid var(--color-border)",
                              padding: "7px 0", outline: "none", boxSizing: "border-box",
                              transition: "border-color 150ms ease",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2563EB")}
                            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-border)")}
                          />
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <label style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-muted-foreground)", opacity: 0.5 }}>Message</label>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em", color: "var(--color-muted-foreground)", opacity: 0.3 }}>OPTIONAL</span>
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe your project..."
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        style={{
                          width: "100%", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 13,
                          color: "var(--color-foreground)", backgroundColor: "transparent",
                          border: "none", borderBottom: "1px solid var(--color-border)",
                          padding: "7px 0", outline: "none", resize: "none",
                          boxSizing: "border-box", lineHeight: 1.7,
                          transition: "border-color 150ms ease",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#2563EB")}
                        onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-border)")}
                      />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: "1px solid var(--color-border)", flexWrap: "wrap", gap: 10 }}>
                      <button type="submit"
                        style={{
                          backgroundColor: "#2563EB", color: "#fff",
                          fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: 12,
                          padding: "10px 22px", border: "none", cursor: "pointer",
                          letterSpacing: "0.06em", textTransform: "uppercase",
                          transition: "background-color 150ms ease",
                          display: "flex", alignItems: "center", gap: 7,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
                      >
                        {assignedMember ? `Send to ${assignedMember.name.split(" ")[0]}` : "Send Message"}
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path d="M2 5.5h7M6 2.5l3 3-3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.1em", color: "var(--color-muted-foreground)", opacity: 0.3, textTransform: "uppercase" }}>
                        No spam · 24h response
                      </span>
                    </div>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }

        /* Service row hover */
        .service-row:hover {
          background-color: var(--color-surface) !important;
          border-left-color: #2563EB !important;
        }
        .service-row:hover .service-cue-text {
          opacity: 1 !important;
        }
        .service-row:hover .service-cue-arrow {
          opacity: 1 !important;
          transform: translateX(3px);
        }
        /* Inquiry row hover */
        .inquiry-row:hover {
          background-color: var(--color-surface) !important;
          border-left-color: #2563EB !important;
        }
        .inquiry-row:hover .inquiry-arrow {
          opacity: 1 !important;
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          #wwu-main { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          #detail-fields { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
