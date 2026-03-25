"use client";

/* ── Client logos grid — centered, 4x2, prominent ───────────────────── */

const clients = [
  { name: "AXA",          weight: 800 },
  { name: "ENGIE",        weight: 700 },
  { name: "BNP Paribas",  weight: 700 },
  { name: "TF1",          weight: 900 },
  { name: "Orange",       weight: 800 },
  { name: "Canal+",       weight: 800 },
  { name: "Le Monde",     weight: 400, style: "italic" as const },
  { name: "Publicis",     weight: 600 },
];

export default function ClientsGrid() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderBottom: "1px solid var(--color-border)",
        padding: "20px 40px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* ── Label ──────────────────────────────────────────── */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#2563EB",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Trusted By Industry Leaders
        </p>

        {/* ── 4x2 grid ──────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            backgroundColor: "var(--color-border)",
          }}
          id="clients-grid"
        >
          {clients.map((c) => (
            <div
              key={c.name}
              className="client-cell"
              style={{
                backgroundColor: "var(--color-canvas)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 24px",
                transition: "background-color 300ms ease",
                cursor: "default",
              }}
            >
              <span
                className="client-name"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 22,
                  fontWeight: c.weight,
                  fontStyle: c.style || "normal",
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "0.02em",
                  userSelect: "none",
                  transition: "color 300ms ease, transform 300ms ease",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-cell:hover {
          background-color: var(--color-surface) !important;
        }
        .client-cell:hover .client-name {
          color: #2563EB !important;
          transform: scale(1.1);
        }
        @media (max-width: 640px) {
          #clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
