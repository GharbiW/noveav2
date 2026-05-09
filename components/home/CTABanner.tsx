"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ── Full-width editorial CTA — no box, no card ──────────────────────────
   Giant headline spanning the section + two actions. That's it.
─────────────────────────────────────────────────────────────────────────── */

export default function CTABanner() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
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
            Work With Us
          </p>

          {/* ── Massive headline ──────────────────────────────── */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 6.5vw, 88px)",
              fontWeight: 400,
              color: "var(--color-foreground)",
              lineHeight: 1.04,
              letterSpacing: "-0.025em",
              maxWidth: 900,
              marginBottom: 56,
            }}
          >
            Ready to deploy owned media intelligence for{" "}
            <span style={{ color: "var(--color-eyebrow)" }}>measurable enterprise growth?</span>
          </h2>

          {/* ── Divider ─────────────────────────────────────── */}
          <div
            style={{
              height: 1,
              backgroundColor: "var(--color-border)",
              marginBottom: 48,
            }}
          />

          {/* ── Action row ──────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 16,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Tell us your objectives. We&apos;ll respond with a tailored media strategy within 24 hours — from a senior team member, not an automated system.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  backgroundColor: "#F0F2EA",
                  color: "#0f110c",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "16px 36px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "background-color 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d8dbd2")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F0F2EA")}
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-block",
                  color: "var(--color-foreground)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  padding: "16px 28px",
                  textDecoration: "none",
                  border: "1px solid var(--color-border-md)",
                  transition: "border-color 200ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(167,244,50,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border-md)")}
              >
                View Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
