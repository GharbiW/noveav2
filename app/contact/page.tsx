import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact DolphX — Start a Conversation",
  description:
    "Contact DolphX to discuss digital consulting, marketing automation, AI & data solutions or media distribution. A senior team member responds within 24 hours.",
  openGraph: {
    title: "Contact DolphX — Start a Conversation",
    description: "Tell us about your objectives. We respond with a tailored assessment within 24 hours.",
    url: "https://dolphx.com/contact",
    siteName: "DolphX",
    type: "website",
  },
};

const contactDetails = [
  { label: "General Enquiries",  value: "contact@dolphx.com",             mono: true  },
  { label: "Business Development",value: "partnerships@dolphx.com",        mono: true  },
  { label: "Response Guarantee", value: "Within 24 business hours",        mono: false },
  { label: "Istanbul Office",    value: "Levent Mah., Cömert Sok. 8, Beşiktaş", mono: false },
  { label: "Office Hours",       value: "Mon–Fri · 10:00–19:00 TRT", mono: false },
];

const faqs = [
  {
    q: "Who will I actually speak with?",
    a: "Every enquiry is reviewed by a senior DolphX operator — the same person who will run your project. We don't use account managers or automated routing beyond the initial form.",
  },
  {
    q: "What size of clients do you work with?",
    a: "We work primarily with enterprise brands, institutional media companies and publishers generating more than €5M in annual digital revenue. Smaller organisations are considered on a case-by-case basis.",
  },
  {
    q: "Do you operate outside Turkey?",
    a: "Yes — roughly 60% of our engagements are cross-border. We have active clients in the UK, the UAE, Germany, France, North America and beyond, and operate fully remotely with all of them.",
  },
  {
    q: "What happens after I send the form?",
    a: "A senior team member reads your submission the same business day. You receive a short written assessment of the situation and a proposed next step — no slide decks, no sales calls unless you request one.",
  },
  {
    q: "How do you charge for your services?",
    a: "Depending on the service: consulting and data mandates run on monthly retainers with defined deliverables; media campaigns are quoted per placement; automation and SaaS builds are scoped and fixed-price.",
  },
];

const enquiryTypes = [
  "Digital Consulting & Strategy",
  "Marketing Automation & SaaS",
  "AI & Data Intelligence",
  "Média & Editorial Distribution",
  "Partnership & Press",
  "Data Licensing",
  "Investment Enquiry",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  color: "var(--color-foreground)",
  padding: "12px 16px",
  fontSize: 14,
  fontFamily: "var(--font-sans)",
  outline: "none",
  transition: "border-color 200ms ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  color: "var(--color-muted-foreground)",
  display: "block",
  marginBottom: 8,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontWeight: 500,
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 100,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 40 }}>Get In Touch</p>

            <div id="contact-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "end" }}>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 5.5vw, 68px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Start a conversation with DolphX<span style={{ color: "var(--color-eyebrow)" }}>.</span>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.8,
                }}
              >
                Headquartered in Istanbul with senior operators across four service verticals. Every enquiry reviewed within one business day — by a person, not a system.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#contact-hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      {/* ── Form + Sidebar ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }} id="contact-grid">

          {/* ── Left: Form ─────────────────────────────────────── */}
          <ScrollReveal>
            <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}>
              <div style={{ padding: "20px 32px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-eyebrow)" }} />
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-eyebrow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Enquiry Form</p>
              </div>

              <form
                action="https://formsubmit.co/hello@dolphx.com"
                method="POST"
                style={{ padding: "32px" }}
              >
                <input type="hidden" name="_subject" value="New DolphX Enquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/thank-you" />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} id="form-name-grid">
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input name="first_name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input name="last_name" required style={inputStyle} />
                  </div>
                </div>

                {[
                  { name: "email", label: "Business Email", type: "email" },
                  { name: "company", label: "Company", type: "text" },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>{field.label}</label>
                    <input name={field.name} type={field.type} required style={inputStyle} />
                  </div>
                ))}

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Enquiry Type</label>
                  <select name="enquiry_type" style={{ ...inputStyle, appearance: "none" }}>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your project or objectives..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#F0F2EA",
                    color: "#0f110c",
                    border: "none",
                    padding: "16px",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.02em",
                    transition: "background-color 200ms ease",
                  }}
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* ── Right: Details + FAQ ────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <ScrollReveal delay={100}>
              <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-eyebrow)" }} />
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-eyebrow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Contact Details</p>
                </div>
                {contactDetails.map((c, i) => (
                  <div
                    key={c.label}
                    style={{
                      padding: "18px 28px",
                      borderBottom: i < contactDetails.length - 1 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-muted-foreground)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 4 }}>{c.label}</p>
                    <p style={{ fontSize: 14, color: "var(--color-foreground)", fontFamily: c.mono ? "var(--font-mono)" : "var(--font-sans)", fontWeight: c.mono ? 400 : 300 }}>{c.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}>
                <div style={{ padding: "20px 28px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "var(--color-eyebrow)" }} />
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-eyebrow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Common Questions</p>
                </div>
                {faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    style={{
                      padding: "20px 28px",
                      borderBottom: i < faqs.length - 1 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--color-foreground)", marginBottom: 8 }}>{faq.q}</p>
                    <p style={{ fontSize: 13, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <style>{`
          @media(max-width:900px){#contact-grid{grid-template-columns:1fr!important;}}
          @media(max-width:480px){#form-name-grid{grid-template-columns:1fr!important;}}
          input::placeholder,textarea::placeholder{color:var(--color-muted-foreground);opacity:0.5;}
          input:focus,textarea:focus,select:focus{border-color:var(--color-eyebrow)!important;}
          button[type="submit"]:hover{background-color:#d8dbd2!important;}
        `}</style>
      </section>

      {/* ── 24h Guarantee ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-eyebrow)",
                marginBottom: 40,
              }}
            >
              Our Commitment
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                maxWidth: 700,
                marginBottom: 24,
              }}
            >
              24-hour response <span style={{ color: "var(--color-eyebrow)" }}>guarantee</span>.
            </h2>

            <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 40 }} />

            <div id="commit-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, borderTop: "1px solid var(--color-border)" }}>
              {[
                { num: "01", title: "Personal Response", desc: "Every enquiry is reviewed and answered by a senior DolphX team member — no chatbots, no auto-replies." },
                { num: "02", title: "Tailored Assessment", desc: "We respond with a brief assessment of your situation and proposed next steps relevant to your specific objectives." },
                { num: "03", title: "No Obligation", desc: "Our initial consultation is always complimentary. We believe the best relationships start with honest, no-pressure conversations." },
              ].map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    padding: "40px 32px 40px 0",
                    borderRight: i < 2 ? "1px solid var(--color-border)" : "none",
                    paddingLeft: i > 0 ? 32 : 0,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-eyebrow)", letterSpacing: "0.2em", display: "block", marginBottom: 20 }}>{item.num}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 400, color: "var(--color-foreground)", marginBottom: 12, letterSpacing: "-0.01em" }}>{item.title}</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 14, color: "var(--color-muted-foreground)", lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#commit-grid{grid-template-columns:1fr!important;}#commit-grid>div{border-right:none!important;padding-left:0!important;border-bottom:1px solid var(--color-border);}}`}</style>
      </section>
    </>
  );
}
