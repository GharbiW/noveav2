import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailPanels, { type SubService } from "@/components/services/ServiceDetailPanels";
import ServiceHowItWorks, { type ProcessStep } from "@/components/services/ServiceHowItWorks";
import ServiceWhoItsFor from "@/components/services/ServiceWhoItsFor";
import ServiceFAQ, { type FAQItem } from "@/components/services/ServiceFAQ";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "Consulting Digital — DolphX | Strategy, SEO & Conversion",
  description:
    "Strategic digital consulting grounded in proprietary data. Performance audits, SEO architecture, conversion engineering and growth strategy — tested on our own media properties first.",
  openGraph: {
    title: "Consulting Digital — DolphX",
    description: "Data-backed digital strategy, tested on 40+ owned properties.",
    url: "https://dolphx.com/consulting",
    siteName: "DolphX",
    type: "website",
  },
};

const subServices: SubService[] = [
  {
    num: "01",
    title: "Performance Audit",
    description: "Comprehensive diagnostic of your digital assets — traffic quality, conversion paths, technical infrastructure and competitive positioning. You get a prioritised roadmap, not a generic checklist.",
    stat: { val: "72h", label: "turnaround" },
    items: ["Traffic quality analysis", "Technical diagnostics", "Competitive benchmarking", "Prioritised roadmap"],
    accent: "#a7f432",
  },
  {
    num: "02",
    title: "SEO Architecture",
    description: "Organic search strategy built on real traffic data from our media network. Technical SEO, content architecture and link-building frameworks — validated on high-volume properties before client deployment.",
    items: ["Technical audits", "Keyword strategy", "Content architecture", "Link-building frameworks"],
    accent: "#a7f432",
  },
  {
    num: "03",
    title: "Conversion Engineering",
    description: "Landing pages, forms, funnels and UX optimised for conversion. We apply the same conversion frameworks we use across our own properties — backed by A/B testing and real user data.",
    stat: { val: "2.4×", label: "avg. conversion lift" },
    items: ["Landing page design", "Funnel optimisation", "A/B testing", "CRO audits"],
    accent: "#a7f432",
  },
  {
    num: "04",
    title: "Customer Journey Design",
    description: "End-to-end mapping of customer touchpoints — from first impression to retention. We structure acquisition funnels, onboarding flows and lifecycle sequences that scale predictably.",
    items: ["Journey mapping", "Touchpoint optimisation", "Onboarding flows", "Lifecycle strategy"],
    accent: "#a7f432",
  },
  {
    num: "05",
    title: "Growth Strategy",
    description: "Data-backed growth planning with clear KPIs, execution timelines and accountability. We define the metrics that matter and build the systems to hit them — no vanity reporting.",
    items: ["KPI frameworks", "Growth modelling", "Execution planning", "Performance reviews"],
    accent: "#a7f432",
  },
];

const howItWorksSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Audit & discovery",
    description:
      "We review your current digital setup — SEO, conversion paths, analytics, competitive landscape — and align on goals. You get a clear roadmap with priorities and success metrics.",
  },
  {
    num: "02",
    title: "Strategy & build",
    description:
      "We design and implement the strategy: technical SEO, landing pages, funnels and tracking — using the same frameworks we run on our own media properties.",
  },
  {
    num: "03",
    title: "Report & iterate",
    description:
      "Custom dashboards and regular reviews keep you in control. We focus on traffic quality, conversion rates and revenue impact — with a senior point of contact throughout.",
  },
];

const whoItsForItems = [
  {
    label: "Growth and marketing leaders",
    description:
      "Data-backed strategy and execution without the guesswork. We apply what we've learned from our own properties to your SEO, CRO and digital infrastructure.",
  },
  {
    label: "Scale-ups and mid-market brands",
    description:
      "Enterprise-grade digital consulting without enterprise overhead. Clear deliverables, fixed-scope projects and transparent reporting.",
  },
  {
    label: "Agencies and partners",
    description:
      "White-label or joint delivery for client work. We slot into your process and provide the technical depth and accountability your clients expect.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What does your digital consulting include?",
    answer:
      "We cover performance audits, SEO architecture (technical audits, keyword strategy, content and links), conversion engineering (landing pages, funnels, A/B testing), customer journey design and growth strategy. Engagements can be full-stack or focused on one area.",
  },
  {
    question: "How is your approach different from other consulting firms?",
    answer:
      "We operate our own media properties and use the same playbooks we recommend. Our advice is grounded in real traffic and conversion data, not theory. You also get a senior team and clear accountability — we don't hand you off to junior staff after the sale.",
  },
  {
    question: "Do you work with our existing tools and stack?",
    answer:
      "Yes. We integrate with your CMS, analytics, CRM and marketing tools. We prefer to optimise what you have rather than force a new stack. If you need recommendations, we provide unbiased guidance based on your goals and constraints.",
  },
  {
    question: "What is the typical engagement length?",
    answer:
      "Projects range from focused audits (1–2 weeks) to ongoing retainers (6–12 months). We respond to qualified enquiries within 24 hours and assign a dedicated strategist so you have one clear point of contact.",
  },
];

export default function ConsultingPage() {
  return (
    <>
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
                color: "var(--color-eyebrow)",
                marginBottom: 40,
              }}
            >
              Consulting Digital
            </p>

            <div
              id="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: 80,
                alignItems: "end",
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(40px, 5.5vw, 72px)",
                  fontWeight: 400,
                  color: "var(--color-foreground)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.025em",
                  margin: 0,
                }}
              >
                Strategic advisory grounded in proprietary data<span style={{ color: "var(--color-eyebrow)" }}>.</span>
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
                Performance audits, SEO architecture, conversion engineering and growth strategy — tested on our own media properties before client deployment.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      <ServiceDetailPanels subServices={subServices} />

      <ServiceHowItWorks
        eyebrow="How it works"
        title="From audit to growth in three steps"
        titleHighlight="."
        steps={howItWorksSteps}
        accentColor="#a7f432"
      />

      <ServiceWhoItsFor
        eyebrow="Ideal for"
        title="Built for teams who want data-backed growth"
        titleHighlight="."
        items={whoItsForItems}
        accentColor="#a7f432"
      />

      <ServiceFAQ
        eyebrow="Frequently asked questions"
        title="Consulting Digital"
        titleHighlight="."
        faqs={faqs}
        accentColor="#a7f432"
      />

      <WorkWithUs precoloredFaces />
    </>
  );
}
