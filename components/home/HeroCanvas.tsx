"use client";

import { useRef, useEffect } from "react";

/* ── Animated topographic terrain — pure Canvas, no libraries ────────────
   Dense olive-to-sage dot field displaced by layered sine waves.
   Fills the right ~65% of the Hero viewport.
─────────────────────────────────────────────────────────────────────────── */

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const SPACING = 18;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width  = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = (timestamp: number) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const t    = timestamp * 0.00038;
      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;

      for (let xi = 0; xi < cols; xi++) {
        for (let yi = 0; yi < rows; yi++) {
          const x = xi * SPACING;
          const y = yi * SPACING;

          const w1 = Math.sin(x * 0.016 + t)                * 22;
          const w2 = Math.cos(y * 0.013 + t * 0.7)          * 17;
          const w3 = Math.sin((x + y) * 0.008 + t * 0.52)   * 13;
          const w4 = Math.cos(x * 0.006 - t * 0.38)         * 9;
          const w5 = Math.sin(y * 0.019 + t * 0.9)          * 6;
          const dy = w1 + w2 + w3 + w4 + w5;

          const drawY = y + dy;
          if (drawY < -20 || drawY > H + 20) continue;

          const range = 67;
          const norm  = (dy + range) / (range * 2); // 0..1

          // Deep olive → brand lime (#a7f432) at peaks → warm white
          const r = Math.round(41  + norm * (240 - 41));
          const g = Math.round(44  + norm * (242 - 44));
          const b = Math.round(38  + norm * (234 - 38));
          const limeBoost = Math.max(0, 1 - Math.abs(norm - 0.6) * 3);
          const r2 = Math.round(r * (1 - limeBoost) + 167 * limeBoost);
          const g2 = Math.round(g * (1 - limeBoost) + 244 * limeBoost);
          const b2 = Math.round(b * (1 - limeBoost) + 50  * limeBoost);

          const leftFade  = Math.min(1, x / (W * 0.20));
          const vertFade  = Math.min(1, Math.min(drawY / (H * 0.08), (H - drawY) / (H * 0.08)));
          const alphaMult = leftFade * vertFade;

          const alpha  = alphaMult * (0.10 + norm * 0.42);
          const radius = 0.75 + norm * 1.6;

          ctx.beginPath();
          ctx.arc(x, drawY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r2},${g2},${b2},${alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "65%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
