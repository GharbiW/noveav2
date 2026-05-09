import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — DolphX",
  description: "Thank you for reaching out. A DolphX senior team member will respond within 24 business hours.",
};

const nextSteps = [
  { num: "01", label: "Check your inbox", desc: "You'll receive a confirmation email shortly with a copy of your submission." },
  { num: "02", label: "We review your enquiry", desc: "A DolphX senior team member reads every submission personally — typically within a few hours." },
  { num: "03", label: "Receive a tailored response", desc: "We'll respond within 24 business hours with a brief assessment and proposed next steps." },
  { num: "04", label: "Begin the engagement", desc: "If there's a fit, we schedule a discovery call and move forward from there." },
];

export default function ThankYouPage() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-canvas)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
      className=""
    >
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        {/* Status indicator */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(16,185,129,0.3)",
            backgroundColor: "rgba(16,185,129,0.06)",
            padding: "6px 16px",
            marginBottom: 40,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#10B981", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Enquiry Received
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            color: "var(--color-foreground)",
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Thank You.
        </h1>
        <p style={{ fontSize: 16, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.75, marginBottom: 56 }}>
          Your enquiry has been received by the DolphX team. We take every submission seriously and will respond with a personalised reply within 24 business hours.
        </p>

        {/* Next steps */}
        <div style={{ border: "1px solid var(--color-border)", backgroundColor: "var(--color-card)", marginBottom: 40, textAlign: "left" }}>
          <div style={{ padding: "18px 28px", borderBottom: "1px solid var(--color-border)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-eyebrow)", letterSpacing: "0.18em", textTransform: "uppercase" }}>What Happens Next</p>
          </div>
          {nextSteps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: 24,
                padding: "20px 28px",
                borderBottom: i < nextSteps.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-eyebrow)", minWidth: 28, paddingTop: 2 }}>{step.num}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-foreground)", marginBottom: 4 }}>{step.label}</p>
                <p style={{ fontSize: 13, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
              padding: "12px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 400,
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            style={{
              border: "1px solid var(--color-border-md)",
              color: "var(--color-foreground)",
              padding: "12px 28px",
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 300,
              textDecoration: "none",
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
