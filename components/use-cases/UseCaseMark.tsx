import type { CSSProperties } from "react";

type Props = {
  name: string;
  logo?: string;
  className?: string;
  style?: CSSProperties;
};

export default function UseCaseMark({ name, logo, className, style }: Props) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className={className}
        style={style}
      />
    );
  }

  return (
    <span
      className={className}
      style={{
        ...style,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 112,
        minHeight: 42,
        border: "1px solid var(--color-border)",
        padding: "8px 14px",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--color-foreground)",
        backgroundColor: "var(--color-canvas)",
      }}
    >
      {name}
    </span>
  );
}
