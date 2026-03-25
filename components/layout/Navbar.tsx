"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const serviceLinks = [
  {
    href: "/consulting",
    title: "Consulting Digital",
    sub: "Strategy, SEO & conversion advisory",
    accent: "#2563EB",
  },
  {
    href: "/automation",
    title: "Automation & SaaS Marketing",
    sub: "CRM workflows & mini-SaaS platforms",
    accent: "#06B6D4",
  },
  {
    href: "/ai-data",
    title: "AI & Data",
    sub: "Predictive models & audience intelligence",
    accent: "#10B981",
  },
  {
    href: "/media-distribution",
    title: "Média & Distribution",
    sub: "Sponsored content across our network",
    accent: "#2563EB",
  },
];

const navLinks = [
  { href: "/network", label: "Network" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      {/* Fixed wrapper — full width only for positioning */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          padding: scrolled ? "0" : "12px 24px 0",
          transition: "padding 300ms ease",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            maxWidth: scrolled ? "100%" : 860,
            width: "100%",
            height: 48,
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            backgroundColor: scrolled
              ? "var(--color-nav-scrolled)"
              : "var(--color-card)",
            borderTop: scrolled ? "none" : "1px solid var(--color-border)",
            borderRight: scrolled ? "none" : "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            borderLeft: scrolled ? "none" : "1px solid var(--color-border)",
            backdropFilter: "blur(16px)",
            transition:
              "max-width 400ms ease, background-color 300ms ease, border-color 300ms ease, border-radius 300ms ease",
            borderRadius: scrolled ? 0 : 0,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              textDecoration: "none",
              marginRight: 32,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                backgroundColor: "#2563EB",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 16,
                color: "var(--color-foreground)",
                letterSpacing: "-0.01em",
              }}
            >
              DolphX
            </span>
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flex: 1,
            }}
            className="hidden-mobile"
          >
            {/* Services with dropdown */}
            <div
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              style={{ position: "relative" }}
            >
              <Link
                href="/services"
                className="nav-link"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: servicesOpen
                    ? "var(--color-foreground)"
                    : "var(--color-muted-foreground)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: 4,
                  transition: "color 150ms ease, background-color 150ms ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Services
                <span
                  style={{
                    fontSize: 8,
                    opacity: 0.4,
                    transition: "transform 200ms ease",
                    display: "inline-block",
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▾
                </span>
              </Link>

              {servicesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: -8,
                    zIndex: 200,
                  }}
                >
                  <div
                    style={{
                      width: 320,
                      backgroundColor: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      padding: "6px 0",
                      boxShadow:
                        "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    {serviceLinks.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={() => setServicesOpen(false)}
                        className="svc-dropdown-item"
                        style={{
                          display: "block",
                          padding: "10px 16px",
                          textDecoration: "none",
                          transition: "background-color 120ms ease",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 2,
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              backgroundColor: svc.accent,
                              borderRadius: 1,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 13,
                              fontWeight: 400,
                              color: "var(--color-foreground)",
                            }}
                          >
                            {svc.title}
                          </span>
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: 12,
                            fontWeight: 300,
                            color: "var(--color-muted-foreground)",
                            paddingLeft: 13,
                          }}
                        >
                          {svc.sub}
                        </span>
                      </Link>
                    ))}
                    <div
                      style={{
                        borderTop: "1px solid var(--color-border)",
                        margin: "4px 0",
                      }}
                    />
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="svc-dropdown-item"
                      style={{
                        display: "block",
                        padding: "8px 16px",
                        textDecoration: "none",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#2563EB",
                        transition: "background-color 120ms ease",
                      }}
                    >
                      All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: 13,
                  color: "var(--color-muted-foreground)",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: 4,
                  transition: "color 150ms ease, background-color 150ms ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div
            className="hidden-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: "auto",
            }}
          >
            <ThemeToggle />
            <Link
              href="/contact"
              className="nav-cta"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                color: "#fff",
                backgroundColor: "#2563EB",
                padding: "6px 16px",
                textDecoration: "none",
                transition: "background-color 150ms ease",
                whiteSpace: "nowrap",
              }}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "none",
              flexDirection: "column",
              gap: 4,
            }}
            className="show-mobile"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 18,
                  height: 1,
                  backgroundColor: "var(--color-foreground)",
                }}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "var(--color-canvas)",
            display: "flex",
            flexDirection: "column",
            padding: "72px 32px 32px",
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 14,
              right: 20,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-muted-foreground)",
              fontSize: 22,
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Services accordion */}
          <div style={{ marginBottom: 20 }}>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontFamily: "var(--font-serif)",
                fontSize: 24,
                color: "var(--color-foreground)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              Services
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#2563EB",
                }}
              >
                {mobileServicesOpen ? "−" : "+"}
              </span>
            </button>
            {mobileServicesOpen && (
              <div
                style={{
                  paddingLeft: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                {serviceLinks.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: svc.accent,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        fontWeight: 300,
                        color: "var(--color-foreground)",
                      }}
                    >
                      {svc.title}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 24,
                color: "var(--color-foreground)",
                textDecoration: "none",
                marginBottom: 20,
              }}
            >
              {link.label}
            </Link>
          ))}

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <ThemeToggle />
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                color: "#fff",
                backgroundColor: "#2563EB",
                padding: "10px 20px",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link:hover {
          color: var(--color-foreground) !important;
          background-color: var(--color-surface) !important;
        }
        .nav-cta:hover {
          background-color: #1D4ED8 !important;
        }
        .svc-dropdown-item:hover {
          background-color: var(--color-surface) !important;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
