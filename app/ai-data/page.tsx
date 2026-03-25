import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailPanels, { type SubService } from "@/components/services/ServiceDetailPanels";
import ServiceHowItWorks, { type ProcessStep } from "@/components/services/ServiceHowItWorks";
import ServiceWhoItsFor from "@/components/services/ServiceWhoItsFor";
import ServiceFAQ, { type FAQItem } from "@/components/services/ServiceFAQ";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "AI & Data — DolphX | Predictive Modelling, Segmentation & Data Intelligence",
  description:
    "AI-powered audience intelligence built on first-party data from our proprietary media network. Predictive modelling, behavioural segmentation, intent signals and GDPR-compliant data monetisation.",
  openGraph: {
    title: "AI & Data — DolphX",
    description: "First-party data intelligence powered by AI, built on 40+ owned media properties.",
    url: "https://dolphx.com/ai-data",
    siteName: "DolphX",
    type: "website",
  },
};

const subServices: SubService[] = [
  {
    num: "01",
    title: "Predictive Modelling",
    description: "Machine learning models trained on real editorial behaviour from our media network. We forecast audience intent, campaign performance and conversion probability — giving you a planning advantage over competitors relying on third-party proxies.",
    stat: { val: "3.2×", label: "prediction accuracy" },
    items: ["Intent forecasting", "Campaign performance models", "Conversion probability", "Churn prediction"],
    accent: "#10B981",
  },
  {
    num: "02",
    title: "Behavioural Segmentation",
    description: "Audience segments built from actual reading behaviour, content affinity and engagement depth — not declared demographics. Segments are continuously refreshed and sized for activation across any channel.",
    items: ["Content affinity mapping", "Engagement scoring", "Dynamic segment updates", "Cross-vertical profiling"],
    accent: "#10B981",
  },
  {
    num: "03",
    title: "Intent Signal Extraction",
    description: "We identify purchase, research and decision-making signals from editorial consumption patterns. These signals feed directly into your targeting, personalisation and sales prioritisation workflows.",
    stat: { val: "92%", label: "signal accuracy" },
    items: ["Purchase intent signals", "Research behaviour tracking", "Decision-stage mapping", "Real-time signal feeds"],
    accent: "#10B981",
  },
  {
    num: "04",
    title: "Data Monetisation",
    description: "Structured revenue from your audience data through privacy-compliant licensing, audience extension partnerships and monetisation architecture. We help media companies and publishers unlock the commercial value of their first-party data.",
    items: ["Data licensing structures", "Audience extension partnerships", "Revenue modelling", "Monetisation architecture"],
    accent: "#10B981",
  },
  {
    num: "05",
    title: "GDPR Compliance & Licensing",
    description: "End-to-end compliance frameworks for data collection, storage, processing and licensing. Consent management, data processing agreements and audit-ready documentation — built for European regulatory standards.",
    items: ["Consent management", "Data processing agreements", "Audit-ready documentation", "Cross-border compliance"],
    accent: "#10B981",
  },
];

const howItWorksSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Data collection & audit",
    description:
      "We assess your existing data assets and connect them to our proprietary first-party data layer. Gaps are identified, collection mechanisms are deployed and compliance is verified.",
  },
  {
    num: "02",
    title: "AI modelling & segmentation",
    description:
      "Machine learning models are trained on combined data sets. We build predictive models, define audience segments and extract intent signals tailored to your commercial objectives.",
  },
  {
    num: "03",
    title: "Activation & licensing",
    description:
      "Segments and signals are packaged for activation — CRM integration, programmatic targeting, or structured data licensing. Ongoing model refinement ensures accuracy improves over time.",
  },
];

const whoItsForItems = [
  {
    label: "Media companies and publishers",
    description:
      "Unlock commercial value from your editorial audience. We build the data infrastructure, models and licensing frameworks that turn readers into a revenue stream.",
  },
  {
    label: "Data and analytics teams",
    description:
      "Enrich your existing data with first-party behavioural signals from our media network. Predictive models and segments ready for integration with your stack.",
  },
  {
    label: "Investors and institutional clients",
    description:
      "Alternative data signals derived from real editorial consumption. Structured for investment research, market intelligence and competitive analysis.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Where does your first-party data come from?",
    answer:
      "All data is collected from our proprietary network of media properties — editorial sites we own and operate across sport, finance and technology verticals. Data is consent-based and GDPR-compliant.",
  },
  {
    question: "Can we integrate your data with our existing platforms?",
    answer:
      "Yes. We support programmatic activation, CRM integration and clean-room environments. Segments are delivered in standard formats with full documentation. We work with your team to ensure correct taxonomy and compliance.",
  },
  {
    question: "How is your data different from third-party providers?",
    answer:
      "Our data is first-party — collected directly from reader behaviour on properties we own. It is not modelled, inferred or aggregated from cookies. This means higher accuracy, full consent chains and no dependency on third-party identifiers.",
  },
  {
    question: "What compliance standards do you meet?",
    answer:
      "We are fully GDPR-compliant with consent management, data processing agreements and audit-ready documentation. We also support CCPA requirements for clients operating in the US market.",
  },
];

export default function AiDataPage() {
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
                color: "#10B981",
                marginBottom: 40,
              }}
            >
              AI & Data
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
                AI-powered data intelligence from our media network<span style={{ color: "#10B981" }}>.</span>
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
                Predictive modelling, behavioural segmentation and intent signals — built on first-party data we collect ourselves. Structured for activation and GDPR-compliant monetisation.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      <ServiceDetailPanels subServices={subServices} />

      <ServiceHowItWorks
        eyebrow="How it works"
        title="From raw data to commercial intelligence"
        titleHighlight="."
        steps={howItWorksSteps}
        accentColor="#10B981"
      />

      <ServiceWhoItsFor
        eyebrow="Ideal for"
        title="Built for teams who need real audience data"
        titleHighlight="."
        items={whoItsForItems}
        accentColor="#10B981"
      />

      <ServiceFAQ
        eyebrow="Frequently asked questions"
        title="AI & Data"
        titleHighlight="."
        faqs={faqs}
        accentColor="#10B981"
      />

      <WorkWithUs precoloredFaces />
    </>
  );
}
