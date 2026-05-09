"use client";

/* ── Trusted clients — real logos, monochrome dark treatment ────────── */

const clients = [
  { name: "Halkbank",        src: "/clients/halkbank.png"    },
  { name: "Esteworld",       src: "/clients/esteworld.webp"  },
  { name: "Hisar Hospital",  src: "/clients/hisar.webp"      },
  { name: "Integral Yatırım",src: "/clients/integral.webp"   },
  { name: "Mavi",            src: "/clients/mavi.webp"       },
  { name: "MÜSİAD",          src: "/clients/musiad.webp"     },
  { name: "Yemeksepeti",     src: "/clients/yemeksepeti.webp"},
  { name: "Client",          src: "/clients/client8.webp"    },
];

export default function ClientsGrid() {
  return (
    <section className="clients-section" style={{ position: "relative", backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", padding: "20px 40px 48px" }}>
      {/* Ultra-light tech edge — slow shimmer, no harsh line */}
      <div className="clients-tech-edge" aria-hidden />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Label */}
        <p className="eyebrow" style={{ textAlign: "center", marginBottom: 32 }}>
          Trusted By Industry Leaders
        </p>

        {/* 4×2 grid */}
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
                padding: "40px 28px",
                transition: "background-color 300ms ease",
                cursor: "default",
              }}
            >
              <img
                src={c.src}
                alt={c.name}
                className="client-logo"
                style={{
                  maxHeight: 40,
                  maxWidth: 120,
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  userSelect: "none",
                  transition: "filter 300ms ease, opacity 300ms ease",
                  filter: "grayscale(1) brightness(1.8)",
                  opacity: 0.45,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clients-tech-edge {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          pointer-events: none;
          opacity: 0.35;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(167,244,50,0.04) 20%,
            rgba(255,255,255,0.06) 50%,
            rgba(167,244,50,0.04) 80%,
            transparent 100%
          );
          background-size: 180% 100%;
          animation: clientsEdgeDrift 18s ease-in-out infinite;
        }
        @keyframes clientsEdgeDrift {
          0%, 100% { background-position: 0% 0; opacity: 0.22; }
          50%      { background-position: 100% 0; opacity: 0.38; }
        }

        .client-cell { position: relative; }
        .client-cell::before {
          content: "";
          position: absolute;
          left: 0; top: 0;
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, transparent, rgba(167,244,50,0.18), rgba(255,255,255,0.1), transparent);
          transition: width 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .client-cell:hover { background-color: var(--color-surface) !important; }
        .client-cell:hover::before { width: 100%; }
        .client-cell:hover .client-logo {
          filter: grayscale(1) brightness(2.2) !important;
          opacity: 0.85 !important;
          transform: scale(1.04);
        }
        .client-logo { transition: filter 300ms ease, opacity 300ms ease, transform 300ms ease !important; }
        html.light .client-logo {
          filter: grayscale(1) brightness(0.35) !important;
          opacity: 0.55 !important;
        }
        html.light .client-cell:hover .client-logo {
          filter: grayscale(1) brightness(0.2) !important;
          opacity: 0.85 !important;
        }
        @media (max-width: 640px) {
          #clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-tech-edge { animation: none !important; opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
