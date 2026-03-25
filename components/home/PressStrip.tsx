"use client";
/* ─── "As Seen In" press strip — inspired by MeanPug "FEATURED ON" ─── */

const pressLogos = [
  { name: "Forbes",       weight: 700, style: "italic", size: 22, family: "Georgia, serif" },
  { name: "Le Monde",     weight: 400, style: "italic", size: 20, family: "Georgia, serif" },
  { name: "Les Échos",    weight: 700, style: "normal", size: 17, family: "var(--font-sans)" },
  { name: "Financial Times", weight: 400, style: "italic", size: 19, family: "Georgia, serif" },
  { name: "L'Obs",        weight: 700, style: "normal", size: 20, family: "var(--font-sans)" },
  { name: "Challenges",   weight: 600, style: "normal", size: 18, family: "var(--font-sans)" },
];

export default function PressStrip() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-canvas)",
        borderBottom: "1px solid var(--color-border)",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: 0,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
        id="press-strip"
      >
        {/* Label */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-muted-foreground)",
            whiteSpace: "nowrap",
            paddingRight: 32,
            flexShrink: 0,
          }}
        >
          Featured In
        </span>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            height: 28,
            backgroundColor: "var(--color-border)",
            flexShrink: 0,
            marginRight: 32,
          }}
        />

        {/* Press logos */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          {pressLogos.map((logo, i) => (
            <span
              key={logo.name}
              style={{
                fontFamily: logo.family,
                fontSize: logo.size,
                fontWeight: logo.weight,
                fontStyle: logo.style,
                color: "var(--color-muted-foreground)",
                whiteSpace: "nowrap",
                opacity: 0.7,
                padding: "0 28px",
                borderRight: i < pressLogos.length - 1 ? "1px solid var(--color-border)" : "none",
                transition: "opacity 200ms ease, color 200ms ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "1";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-foreground)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "0.7";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--color-muted-foreground)";
              }}
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        #press-strip::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
