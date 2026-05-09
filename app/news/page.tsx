import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "News & Insights — DolphX | Media Technology Intelligence",
  description:
    "Strategic insights on media technology, audience data, digital publishing and performance marketing from the DolphX editorial team.",
  openGraph: {
    title: "News & Insights — DolphX",
    description: "Strategic analysis on media technology, audience data and the evolving economics of digital publishing.",
    url: "https://dolphx.com/news",
    siteName: "DolphX",
    type: "website",
  },
};

const featured = {
  title: "How Proprietary First-Party Data Is Reshaping Media Monetisation in 2026",
  excerpt:
    "Third-party cookies are dead. The media companies that built first-party data infrastructure are now pulling ahead — dramatically. Here is how the landscape is shifting and what it means for publishers, brands and investors.",
  date: "March 10, 2026",
  readTime: "14 min read",
  category: "Data Strategy",
  author: "DolphX Editorial",
  image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&q=85&auto=format&fit=crop",
};

const articles = [
  {
    title: "The Economics of Owned Media: Why Publishers Outperform Agencies Over Time",
    excerpt: "Building a media asset versus renting attention — the compounding advantage of audience ownership explained through 5 years of DolphX network data.",
    date: "March 6, 2026",
    readTime: "10 min read",
    category: "Media Economics",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Sports Media in 2026: Fragmentation, Streaming Rights and the Data Opportunity",
    excerpt: "The sports media landscape is more fragmented than ever. For data-forward companies operating at scale, that fragmentation is the structural opportunity.",
    date: "March 3, 2026",
    readTime: "8 min read",
    category: "Sports Media",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "AI-Powered Audience Intelligence: The Most Undervalued Asset in European Media",
    excerpt: "First-party audience data is the most strategically valuable — and most underutilised — asset in European digital publishing. Here is how to monetise it correctly.",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    category: "AI & Data",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Programmatic vs. Direct: Why Premium Publishers Are Walking Away from Open Exchanges",
    excerpt: "Open programmatic exchanges drove revenue for years. Now the best publishers are reverting to direct deals — with better margins and stronger audience relationships.",
    date: "Feb 20, 2026",
    readTime: "9 min read",
    category: "Monetisation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Building the Right Media Tech Stack in 2026: Own vs. Licence",
    excerpt: "A practical guide to technology decisions for media companies: from CMS architecture and analytics infrastructure to data clean rooms and consent management.",
    date: "Feb 14, 2026",
    readTime: "11 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Turkey's Digital Media Market: Scale, Speed and the Istanbul Advantage",
    excerpt: "With 90 million connected users and one of Europe's fastest-growing digital advertising markets, Turkey offers structural advantages for media-first brands willing to commit.",
    date: "Feb 7, 2026",
    readTime: "9 min read",
    category: "Market Intelligence",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "CRM Automation ROI: What High-Performing Enterprise Teams Actually Measure",
    excerpt: "Vanity metrics are out. Here is what the best automation teams track — and how they structure attribution to prove real pipeline impact to the board.",
    date: "Jan 30, 2026",
    readTime: "7 min read",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Conversion Engineering vs. Growth Hacking: The Enterprise Distinction",
    excerpt: "Growth hacking optimises for noise. Conversion engineering optimises for revenue with reproducible systems. Why the difference matters for institutional brands.",
    date: "Jan 23, 2026",
    readTime: "6 min read",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Sponsored Editorial at Scale: Attribution Models That Actually Work",
    excerpt: "Native content is the most resilient format in the post-cookie world — but only if you can prove it. A walkthrough of the attribution stack DolphX uses across 40+ properties.",
    date: "Jan 17, 2026",
    readTime: "8 min read",
    category: "Media Distribution",
    image: "https://images.unsplash.com/photo-1542435503-ec7b0f2aea6a?w=800&q=80&auto=format&fit=crop",
  },
];

const categories = ["All", "Data Strategy", "AI & Data", "Media Economics", "Sports Media", "Monetisation", "Technology", "Market Intelligence", "Automation", "Consulting", "Media Distribution"];

export default function NewsPage() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 160,
          paddingBottom: 100,
          borderBottom: "1px solid var(--color-border)",
          backgroundColor: "var(--color-canvas)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 40 }}>Intelligence &amp; Analysis</p>

            <div id="news-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "end" }}>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 5.5vw, 68px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                }}
              >
                Media technology insights<span style={{ color: "var(--color-eyebrow)" }}>.</span>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: 16,
                  color: "var(--color-muted-foreground)",
                  lineHeight: 1.8,
                }}
              >
                Strategic analysis on media technology, audience data and the evolving economics of digital publishing — from the DolphX network.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#news-hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      {/* ── Topic Filters ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 40px", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span className="eyebrow" style={{ marginRight: 12 }}>Filter</span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="topic-tag"
              style={{
                border: "1px solid var(--color-border)",
                padding: "5px 14px",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-muted-foreground)",
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "border-color 200ms ease, color 200ms ease",
                backgroundColor: cat === "All" ? "var(--color-card)" : "transparent",
              }}
            >
              {cat}
            </span>
          ))}
        </div>
        <style>{`.topic-tag:hover{border-color:var(--color-eyebrow)!important;color:var(--color-eyebrow)!important;}`}</style>
      </section>

      {/* ── Featured Article ────────────────────────────────────── */}
      <section id="news-feat-section" style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", padding: "48px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal>
          <div className="feat-card" style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}>
            {/* Full-bleed image with gradient overlay */}
            <div style={{ position: "relative", height: "clamp(320px, 44vw, 560px)", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.45)" }}
              />
              {/* Grid scan overlay */}
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(167,244,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(167,244,50,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
              {/* Bottom gradient */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,14,10,0.98) 0%, rgba(12,14,10,0.55) 40%, transparent 72%)" }} />

              {/* Content overlay */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(32px, 5vw, 64px)" }}>
                <div style={{ maxWidth: 900 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
                    <span
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        border: "1px solid rgba(167,244,50,0.5)",
                        padding: "4px 12px",
                        fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.18em",
                        textTransform: "uppercase", color: "#a7f432",
                        backgroundColor: "rgba(167,244,50,0.08)",
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#a7f432", display: "inline-block" }} />
                      {featured.category}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(240,242,234,0.45)", letterSpacing: "0.08em" }}>
                      {featured.date} · {featured.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(22px, 3.2vw, 42px)",
                      fontWeight: 400,
                      color: "#F0F2EA",
                      lineHeight: 1.16,
                      letterSpacing: "-0.02em",
                      marginBottom: 18,
                      maxWidth: 780,
                    }}
                  >
                    {featured.title}
                  </h2>

                  <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(240,242,234,0.62)", lineHeight: 1.75, maxWidth: 640, marginBottom: 24 }}>
                    {featured.excerpt}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(240,242,234,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{featured.author}</span>
                    <span style={{ width: 1, height: 12, backgroundColor: "rgba(255,255,255,0.15)" }} />
                    <span className="feat-read" style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a7f432", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 6, transition: "gap 200ms ease" }}>
                      Read article <span className="feat-arrow">→</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div style={{ position: "absolute", top: 28, right: 32, fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(240,242,234,0.3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Featured
              </div>
            </div>
          </div>
        </ScrollReveal>
        </div>
        <style>{`.feat-card img{transition:filter 400ms ease;}.feat-card:hover img{filter:brightness(0.38)!important;}.feat-card:hover .feat-arrow{margin-left:4px;}@media(max-width:640px){#news-feat-section{padding-left:16px!important;padding-right:16px!important;}}`}</style>
      </section>

      {/* ── Articles Card Grid ───────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", paddingTop: 80, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
              <p className="eyebrow">Latest Articles</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.1em" }}>
                {articles.length} articles
              </span>
            </div>
          </ScrollReveal>

          <div id="articles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, backgroundColor: "var(--color-border)" }}>
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 40}>
                <article
                  className="art-card"
                  style={{
                    backgroundColor: "var(--color-card)",
                    cursor: "pointer",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transition: "background-color 250ms ease",
                  }}
                >
                  {/* Image */}
                  <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "brightness(0.72) saturate(0.8)", transition: "transform 500ms ease, filter 400ms ease" }}
                      className="art-img"
                    />
                    {/* Subtle grid */}
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        backgroundImage: "linear-gradient(rgba(167,244,50,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(167,244,50,0.025) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                        pointerEvents: "none",
                      }}
                    />
                    {/* Gradient overlay */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(10,12,8,0.7) 0%, transparent 100%)" }} />

                    {/* Category chip */}
                    <div style={{ position: "absolute", top: 14, left: 14 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)", fontSize: 8,
                          letterSpacing: "0.2em", textTransform: "uppercase",
                          color: "rgba(240,242,234,0.85)",
                          backgroundColor: "rgba(10,12,8,0.72)",
                          backdropFilter: "blur(6px)",
                          padding: "4px 10px",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Read time */}
                    <div style={{ position: "absolute", bottom: 12, right: 14, fontFamily: "var(--font-mono)", fontSize: 8, color: "rgba(240,242,234,0.5)", letterSpacing: "0.12em" }}>
                      {article.readTime}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "22px 24px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Index + date */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "rgba(167,244,50,0.55)", letterSpacing: "0.2em" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-muted-foreground)", letterSpacing: "0.06em", opacity: 0.7 }}>
                        {article.date}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(16px, 1.5vw, 19px)",
                        fontWeight: 400,
                        color: "var(--color-foreground)",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        marginBottom: 12,
                        flex: 1,
                      }}
                    >
                      {article.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 13,
                        fontWeight: 300,
                        color: "var(--color-muted-foreground)",
                        lineHeight: 1.72,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: 20,
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 16 }} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                      <span className="art-read" style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--color-eyebrow)", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 5, opacity: 0.7, transition: "opacity 200ms ease, gap 200ms ease" }}>
                        Read <span className="art-arrow">→</span>
                      </span>
                    </div>
                  </div>

                  {/* Accent top bar on hover */}
                  <div className="art-accent" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, backgroundColor: "var(--color-accent)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 300ms ease" }} />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .art-card:hover { background-color: var(--color-surface) !important; }
          .art-card:hover .art-img { transform: scale(1.04) !important; filter: brightness(0.65) saturate(0.75) !important; }
          .art-card:hover .art-accent { transform: scaleX(1) !important; }
          .art-card:hover .art-read { opacity: 1 !important; }
          .art-card:hover .art-arrow { margin-left: 3px; }
          @media(max-width:1024px){#articles-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:640px){#articles-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ── Newsletter CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p className="eyebrow" style={{ marginBottom: 40 }}>Stay Informed</p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                maxWidth: 700,
                marginBottom: 24,
              }}
            >
              Intelligence to your <span style={{ color: "var(--color-eyebrow)" }}>inbox</span>.
            </h2>

            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, color: "var(--color-muted-foreground)", marginBottom: 48, lineHeight: 1.7, maxWidth: 520 }}>
              Weekly briefings on media technology, audience data and digital publishing — no noise, just signal. Unsubscribe any time.
            </p>

            <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 48 }} />

            <form style={{ display: "flex", gap: 0, maxWidth: 520 }} id="nl-form">
              <input
                type="email"
                placeholder="your@company.com"
                required
                style={{
                  flex: 1,
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRight: "none",
                  color: "var(--color-foreground)",
                  padding: "14px 18px",
                  fontSize: 14,
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                  transition: "border-color 200ms ease",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-primary-foreground)",
                  border: "none",
                  padding: "14px 28px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  transition: "opacity 200ms ease",
                }}
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
        <style>{`
          input::placeholder{color:var(--color-muted-foreground);opacity:0.5;}
          input:focus{border-color:var(--color-eyebrow)!important;}
          button[type="submit"]:hover{opacity:0.88;}
          @media(max-width:480px){#nl-form{flex-direction:column!important;}#nl-form input{border-right:1px solid var(--color-border)!important;}}
        `}</style>
      </section>
    </>
  );
}
