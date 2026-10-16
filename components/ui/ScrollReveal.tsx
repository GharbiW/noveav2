"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "fade-up" | "fade-in";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  type = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.IntersectionObserver || !el.animate ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animation: Animation | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Content stays visible before hydration and outside the viewport.
          animation = el.animate(
            type === "fade-up"
              ? [{ opacity: 0.85, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }]
              : [{ opacity: 0.85 }, { opacity: 1 }],
            { duration: 750, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, [delay, type]);

  return (
    <div ref={ref} className={`${type} ${className}`}>
      {children}
    </div>
  );
}
