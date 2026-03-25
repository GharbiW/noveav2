"use client";

import Link from "next/link";

export default function NetworkCTA() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2563EB",
            marginBottom: 32,
          }}
        >
          Access the Network
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 5vw, 68px)",
            fontWeight: 400,
            color: "var(--color-foreground)",
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            maxWidth: 800,
            marginBottom: 40,
          }}
        >
          Tell us your market.
          <br />
          We&apos;ll show you{" "}
          <span style={{ color: "#2563EB" }}>the audience.</span>
        </h2>
        <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 40 }} />
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
              fontSize: 15,
              color: "var(--color-muted-foreground)",
              lineHeight: 1.75,
              maxWidth: 420,
            }}
          >
            Whether you need a sports fan segment in Algeria, decision-maker data from Singapore, or a civic audience across France — we respond within 24 hours with a tailored network brief.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#2563EB",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: 14,
                padding: "14px 32px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
            >
              Request a Network Brief
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-block",
                color: "var(--color-foreground)",
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 14,
                padding: "14px 24px",
                textDecoration: "none",
                border: "1px solid var(--color-border-md)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border-md)")}
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
