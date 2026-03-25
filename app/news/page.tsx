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
};

const articles = [
  {
    title: "The Economics of Owned Media: Why Media Companies Outperform Agencies Over Time",
    excerpt: "Building a media asset versus renting attention. The compounding advantage of audience ownership explained through 5 years of DolphX network data.",
    date: "March 6, 2026",
    readTime: "10 min read",
    category: "Media Economics",
  },
  {
    title: "Sports Media in 2026: Fragmentation, Streaming Rights and the Data Opportunity",
    excerpt: "The sports media landscape is more fragmented than ever. For data-forward companies, that fragmentation is the opportunity.",
    date: "March 3, 2026",
    readTime: "8 min read",
    category: "Sports Media",
  },
  {
    title: "AI-Powered Audience Data: The Most Undervalued Asset in European Media",
    excerpt: "First-party audience data is the most strategically valuable — and most underutilised — asset in European digital publishing.",
    date: "Feb 27, 2026",
    readTime: "7 min read",
    category: "Audience Strategy",
  },
  {
    title: "Programmatic vs. Direct: Why Premium Publishers Are Pulling Back from Open Exchanges",
    excerpt: "Open programmatic exchanges drove revenue for years. Now the best publishers are reverting to direct deals — with better margins.",
    date: "Feb 20, 2026",
    readTime: "9 min read",
    category: "Monetisation",
  },
  {
    title: "Building a Media Technology Stack in 2026: What to Own and What to Licence",
    excerpt: "A practical guide to technology decisions for media companies: from CMS selection to analytics infrastructure to data clean rooms.",
    date: "Feb 14, 2026",
    readTime: "11 min read",
    category: "Technology",
  },
  {
    title: "Content Velocity and Editorial Standards: Can You Have Both?",
    excerpt: "High-frequency publishing at editorial quality is the hardest operating challenge in modern media. Here is how DolphX manages it.",
    date: "Feb 7, 2026",
    readTime: "8 min read",
    category: "Editorial",
  },
];

const categories = ["Data Strategy", "Media Economics", "Sports Media", "Audience Strategy", "Monetisation", "Technology", "Editorial"];

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
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Intelligence &amp; Analysis
            </p>

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
                Media technology insights<span style={{ color: "#2563EB" }}>.</span>
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
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--color-muted-foreground)",
              marginRight: 12,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Topics
          </span>
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
              }}
            >
              {cat}
            </span>
          ))}
        </div>
        <style>{`.topic-tag:hover{border-color:#2563EB!important;color:#2563EB!important;}`}</style>
      </section>

      {/* ── Featured Article ────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", borderBottom: "1px solid var(--color-border)", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
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
              Featured
            </p>

            <div
              style={{
                borderTop: "2px solid #2563EB",
                border: "1px solid var(--color-border)",
                borderTopColor: "#2563EB",
                padding: "44px 44px",
                backgroundColor: "var(--color-card)",
                transition: "background-color 200ms ease",
                cursor: "pointer",
              }}
              className="feat-card"
            >
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase" }}>{featured.category}</span>
                <span style={{ width: 1, height: 12, backgroundColor: "var(--color-border-md)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.05em" }}>{featured.date}</span>
                <span style={{ width: 1, height: 12, backgroundColor: "var(--color-border-md)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.05em" }}>{featured.readTime}</span>
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  marginBottom: 20,
                  maxWidth: 720,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {featured.title}
              </h2>

              <p style={{ fontSize: 15, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.8, maxWidth: 680, marginBottom: 32 }}>
                {featured.excerpt}
              </p>

              <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 20 }} />

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{featured.author}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2563EB", letterSpacing: "0.05em" }}>Read Article →</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <style>{`.feat-card:hover{background-color:var(--color-surface)!important;}`}</style>
      </section>

      {/* ── Articles List ───────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-surface)", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Latest Articles
            </p>
          </ScrollReveal>

          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 50}>
                <div
                  className="art-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr 100px",
                    gap: 32,
                    padding: "28px 0",
                    borderBottom: "1px solid var(--color-border)",
                    alignItems: "baseline",
                    cursor: "pointer",
                    transition: "background-color 200ms ease",
                  }}
                  id="art-row"
                >
                  <div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2563EB", letterSpacing: "0.12em", textTransform: "uppercase" }}>{article.category}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, color: "var(--color-foreground)", lineHeight: 1.4, marginBottom: 8 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 14, fontWeight: 300, color: "var(--color-muted-foreground)", lineHeight: 1.7 }}>
                      {article.excerpt}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.05em", display: "block", marginBottom: 4 }}>{article.date}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-muted-foreground)", letterSpacing: "0.05em" }}>{article.readTime}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          .art-row:hover{background-color:var(--color-card);padding-left:16px;padding-right:16px;}
          @media(max-width:768px){#art-row{grid-template-columns:1fr!important;gap:12px!important;}#art-row>div:first-child{order:-1;}#art-row>div:last-child{text-align:left!important;}}
        `}</style>
      </section>

      {/* ── Newsletter CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--color-canvas)", borderTop: "1px solid var(--color-border)", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Stay Informed
            </p>

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
              Intelligence to your <span style={{ color: "#2563EB" }}>inbox</span>.
            </h2>

            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: 16, color: "var(--color-muted-foreground)", marginBottom: 48, lineHeight: 1.7, maxWidth: 520 }}>
              Weekly briefings on media technology, audience data and digital publishing trends — no noise, just signal.
            </p>

            <div style={{ height: 1, backgroundColor: "var(--color-border)", marginBottom: 48 }} />

            <form style={{ display: "flex", gap: 0, maxWidth: 520 }} id="nl-form">
              <input
                type="email"
                placeholder="your@email.com"
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
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#2563EB",
                  color: "#fff",
                  border: "none",
                  padding: "14px 28px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
        <style>{`
          input::placeholder{color:var(--color-muted-foreground);opacity:0.5;}
          input:focus{border-color:#2563EB!important;}
          @media(max-width:480px){#nl-form{flex-direction:column!important;}#nl-form input{border-right:1px solid var(--color-border)!important;}}
        `}</style>
      </section>
    </>
  );
}
