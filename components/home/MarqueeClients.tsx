/* ─── Single-row animated marquee — properly indented to content grid ── */

const clients = [
  { name: "AXA",              weight: 800, style: "normal"  },
  { name: "ENGIE",            weight: 700, style: "normal"  },
  { name: "BNP Paribas",     weight: 700, style: "normal"  },
  { name: "L'Équipe",        weight: 900, style: "italic"  },
  { name: "TF1",              weight: 900, style: "normal"  },
  { name: "Lagardère",        weight: 400, style: "normal"  },
  { name: "Orange",           weight: 800, style: "normal"  },
  { name: "Le Monde",         weight: 400, style: "italic"  },
  { name: "Canal+",           weight: 800, style: "normal"  },
  { name: "Publicis",         weight: 600, style: "normal"  },
  { name: "Michelin",         weight: 400, style: "normal"  },
  { name: "Les Échos",        weight: 700, style: "normal"  },
];

export default function MarqueeClients() {
  const doubled = [...clients, ...clients];

  return (
    <section
      style={{
        backgroundColor: "var(--color-canvas)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* ── Label row ──────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-eyebrow)",
            whiteSpace: "nowrap",
          }}
        >
          Trusted By
        </span>
        <div style={{ flex: 1, height: 1, backgroundColor: "var(--color-border)" }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.14em",
            color: "var(--color-muted-foreground)",
            whiteSpace: "nowrap",
            opacity: 0.6,
          }}
        >
          Enterprise Partners
        </span>
      </div>

      {/* ── Marquee — uses margin-left to match content grid ───── */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          padding: "12px 0",
          marginLeft: "max(40px, calc((100vw - 1200px) / 2 + 40px))",
          marginRight: 40,
        }}
      >
        {/* Right fade */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: 80,
            background: "linear-gradient(to left, var(--color-canvas) 30%, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            animation: "marqueeLeft 36s linear infinite",
            willChange: "transform",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 32,
                paddingRight: 32,
                gap: 32,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: client.weight,
                  fontStyle: client.style as "normal" | "italic",
                  color: "var(--color-muted-foreground)",
                  letterSpacing: "0.01em",
                  userSelect: "none",
                  transition: "color 200ms ease",
                }}
              >
                {client.name}
              </span>
              <span
                aria-hidden
                style={{
                  width: 3,
                  height: 3,
                  backgroundColor: "var(--color-accent)",
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-track:hover span { color: var(--color-foreground) !important; }
      `}</style>
    </section>
  );
}
