import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailPanels, { type SubService } from "@/components/services/ServiceDetailPanels";
import ServiceHowItWorks, { type ProcessStep } from "@/components/services/ServiceHowItWorks";
import ServiceWhoItsFor from "@/components/services/ServiceWhoItsFor";
import ServiceFAQ, { type FAQItem } from "@/components/services/ServiceFAQ";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "Média & Distribution — DolphX | Sponsored Content & Media Network",
  description:
    "Sponsored editorial content distributed across our proprietary media network. Qualified audiences across sport, finance and technology verticals — with full attribution reporting.",
  openGraph: {
    title: "Média & Distribution — DolphX",
    description: "Premium editorial distribution across 40+ owned media properties.",
    url: "https://dolphx.com/media-distribution",
    siteName: "DolphX",
    type: "website",
  },
};

const subServices: SubService[] = [
  {
    num: "01",
    title: "Sponsored Editorial",
    description: "Long-form editorial content crafted to your brief and published across our network. Written by journalists who understand each vertical — sport, finance, technology — ensuring authentic tone and genuine reader engagement.",
    stat: { val: "2.1×", label: "engagement rate" },
    items: ["Brief-to-publish workflow", "Vertical-native writing", "Brand safety controls", "Performance tracking"],
    accent: "#2563EB",
  },
  {
    num: "02",
    title: "Native Syndication",
    description: "Content syndicated across multiple properties in our network simultaneously. One piece of content, distributed to audiences across distinct verticals — maximising reach without diluting editorial quality.",
    items: ["Cross-property distribution", "Audience matching", "Format adaptation", "Syndication reporting"],
    accent: "#2563EB",
  },
  {
    num: "03",
    title: "Video & Multimedia",
    description: "Video content, infographics and interactive formats produced in-house and distributed through our media properties. Designed for engagement and optimised for the platforms where your audiences consume content.",
    items: ["Video production", "Infographic design", "Interactive formats", "Platform optimisation"],
    accent: "#2563EB",
  },
  {
    num: "04",
    title: "Multi-Platform Distribution",
    description: "Strategic content placement across our owned properties, social channels and partner networks. One campaign brief, unified reporting, consistent messaging across every touchpoint.",
    stat: { val: "40+", label: "media properties" },
    items: ["Owned media placement", "Social amplification", "Partner network access", "Unified campaign management"],
    accent: "#2563EB",
  },
  {
    num: "05",
    title: "Attribution Reporting",
    description: "Full-funnel attribution from impression to conversion. Real-time dashboards, weekly reports and transparent performance data — no black boxes, only verified metrics tied to business outcomes.",
    items: ["Real-time dashboards", "Conversion tracking", "ROI attribution", "Weekly performance reports"],
    accent: "#2563EB",
  },
];

const howItWorksSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Brief & strategy",
    description:
      "We define objectives, target audiences and key messages. Our editorial team selects the right properties, formats and distribution cadence to match your campaign goals.",
  },
  {
    num: "02",
    title: "Production & placement",
    description:
      "Content is produced by vertical-native journalists, reviewed for brand alignment and published across selected properties. Distribution is managed centrally with real-time monitoring.",
  },
  {
    num: "03",
    title: "Measure & optimise",
    description:
      "Full attribution reporting from first impression to conversion. Weekly reviews, performance dashboards and iterative optimisation ensure every campaign compounds in effectiveness.",
  },
];

const whoItsForItems = [
  {
    label: "Advertisers and brand teams",
    description:
      "Premium editorial placement that reaches qualified audiences in trusted environments. No programmatic uncertainty — you know exactly where your content appears.",
  },
  {
    label: "Agencies managing media budgets",
    description:
      "A direct channel to verified audiences across sport, finance and technology. Transparent pricing, full attribution and editorial quality your clients can see.",
  },
  {
    label: "Communications and PR teams",
    description:
      "Thought leadership and sponsored content distributed through editorial channels that your target audiences already read and trust.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Which media properties are included in your network?",
    answer:
      "Our network includes owned editorial properties across sport, finance and technology verticals — including LesportifPlus, EconomySignals and FormalGeek, among others. All properties are fully owned and operated by DolphX.",
  },
  {
    question: "How do you ensure brand safety?",
    answer:
      "Because we own every property in our network, we have full editorial control. All sponsored content is reviewed for brand alignment before publication. There is no programmatic inventory — every placement is curated and approved.",
  },
  {
    question: "What formats are available?",
    answer:
      "We offer long-form sponsored editorial, native articles, video content, infographics and interactive formats. Each format is optimised for the platform and audience where it will be distributed.",
  },
  {
    question: "How is performance reported?",
    answer:
      "You receive real-time dashboards with impression, engagement and conversion data. Weekly summary reports include full-funnel attribution, audience insights and optimisation recommendations. All metrics are verified — no inflated or estimated numbers.",
  },
];

export default function MediaDistributionPage() {
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
                color: "#2563EB",
                marginBottom: 40,
              }}
            >
              Média & Distribution
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
                Editorial distribution across our proprietary network<span style={{ color: "#2563EB" }}>.</span>
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
                Sponsored content placed across owned media properties — reaching verified audiences in sport, finance and technology with full attribution reporting.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      <ServiceDetailPanels subServices={subServices} />

      <ServiceHowItWorks
        eyebrow="How it works"
        title="From brief to measurable impact"
        titleHighlight="."
        steps={howItWorksSteps}
        accentColor="#2563EB"
      />

      <ServiceWhoItsFor
        eyebrow="Ideal for"
        title="Built for brands that demand editorial quality"
        titleHighlight="."
        items={whoItsForItems}
        accentColor="#2563EB"
      />

      <ServiceFAQ
        eyebrow="Frequently asked questions"
        title="Média & Distribution"
        titleHighlight="."
        faqs={faqs}
        accentColor="#2563EB"
      />

      <WorkWithUs precoloredFaces />
    </>
  );
}
