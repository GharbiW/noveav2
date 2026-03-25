import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailPanels, { type SubService } from "@/components/services/ServiceDetailPanels";
import ServiceHowItWorks, { type ProcessStep } from "@/components/services/ServiceHowItWorks";
import ServiceWhoItsFor from "@/components/services/ServiceWhoItsFor";
import ServiceFAQ, { type FAQItem } from "@/components/services/ServiceFAQ";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "Automation & SaaS Marketing — DolphX | CRM, Workflows & Mini-SaaS",
  description:
    "Custom marketing automation and personalised mini-SaaS platforms. CRM workflows, lead nurturing, scoring engines and reporting tools — built to industrialise your acquisition and retention.",
  openGraph: {
    title: "Automation & SaaS Marketing — DolphX",
    description: "Custom automation and mini-SaaS platforms for scalable marketing operations.",
    url: "https://dolphx.com/automation",
    siteName: "DolphX",
    type: "website",
  },
};

const subServices: SubService[] = [
  {
    num: "01",
    title: "CRM Workflow Design",
    description: "End-to-end CRM workflow architecture — from lead capture to closed deal. We design, build and integrate pipelines that eliminate manual steps and keep your sales team focused on revenue.",
    stat: { val: "60%", label: "time saved" },
    items: ["Pipeline architecture", "CRM integration", "Trigger-based workflows", "Data hygiene automation"],
    accent: "#06B6D4",
  },
  {
    num: "02",
    title: "Lead Nurturing Sequences",
    description: "Automated email and multi-channel sequences that move prospects through your funnel. Personalised content, behaviour-triggered sends and dynamic segmentation — configured for compliance and deliverability.",
    items: ["Email sequence design", "Multi-channel nurturing", "Behavioural triggers", "Deliverability optimisation"],
    accent: "#06B6D4",
  },
  {
    num: "03",
    title: "Lead Scoring & Qualification",
    description: "Scoring models that rank prospects by intent and fit. We build qualification frameworks that route hot leads to sales and cold leads to nurture — automatically, in real time.",
    items: ["Scoring model design", "Intent-based ranking", "Automated routing", "Score calibration"],
    accent: "#06B6D4",
  },
  {
    num: "04",
    title: "Custom Mini-SaaS Platforms",
    description: "Personalised marketing tools built for your specific use case. Client portals, reporting dashboards, ROI calculators, booking engines — lightweight SaaS products that add value and lock in retention.",
    stat: { val: "40+", label: "platforms built" },
    items: ["Client portals", "Reporting dashboards", "ROI calculators", "Booking & scheduling tools"],
    accent: "#06B6D4",
  },
  {
    num: "05",
    title: "Reporting Automation",
    description: "Automated reporting that pulls data from every channel into one view. Weekly performance summaries, campaign attribution and executive dashboards — delivered without manual effort.",
    items: ["Multi-source data aggregation", "Automated report generation", "Executive dashboards", "Attribution tracking"],
    accent: "#06B6D4",
  },
];

const howItWorksSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Map & scope",
    description:
      "We audit your current marketing stack, map existing workflows and identify automation opportunities. You get a clear scope document with priorities, dependencies and timelines.",
  },
  {
    num: "02",
    title: "Build & integrate",
    description:
      "We design and deploy the workflows, sequences and platforms — integrated with your CRM, email and analytics tools. Everything is tested end-to-end before launch.",
  },
  {
    num: "03",
    title: "Optimise & scale",
    description:
      "Post-launch monitoring, A/B testing and iterative improvements. We refine scoring models, tune sequences and scale what works — with regular performance reviews.",
  },
];

const whoItsForItems = [
  {
    label: "Sales and revenue teams",
    description:
      "Automated pipelines and scoring that deliver qualified leads directly to your CRM. Less manual work, more closed deals.",
  },
  {
    label: "Marketing operations",
    description:
      "Scalable workflows and reporting that eliminate spreadsheet chaos. One system, automated end-to-end, integrated with your stack.",
  },
  {
    label: "SaaS founders and product teams",
    description:
      "Custom mini-SaaS tools and client-facing platforms that add product value and create stickiness — without building from scratch.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What platforms and tools do you integrate with?",
    answer:
      "We work with all major CRMs (HubSpot, Salesforce, Pipedrive), email platforms (Mailchimp, SendGrid, Brevo), analytics tools and custom APIs. We adapt to your existing stack rather than forcing a migration.",
  },
  {
    question: "What is a mini-SaaS platform?",
    answer:
      "A lightweight, purpose-built web application tailored to your specific business need — client portals, ROI calculators, booking tools, reporting dashboards. They're faster and cheaper to build than full SaaS products, but deliver immediate operational value.",
  },
  {
    question: "How long does a typical automation project take?",
    answer:
      "Simple workflow automations take 1–2 weeks. Full CRM integrations and mini-SaaS builds typically take 4–8 weeks from scoping to launch. We provide clear timelines and milestones upfront.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer maintenance retainers that include monitoring, optimisation, A/B testing and feature iterations. Most clients start with a build phase and transition to an ongoing support agreement.",
  },
];

export default function AutomationPage() {
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
                color: "#06B6D4",
                marginBottom: 40,
              }}
            >
              Automation & SaaS
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
                Custom automation and mini-SaaS platforms<span style={{ color: "#06B6D4" }}>.</span>
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
                CRM workflows, lead nurturing, scoring engines and personalised marketing tools — built to industrialise your acquisition and retention.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <style>{`@media(max-width:768px){#hero-grid{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
      </section>

      <ServiceDetailPanels subServices={subServices} />

      <ServiceHowItWorks
        eyebrow="How it works"
        title="From mapping to scale in three phases"
        titleHighlight="."
        steps={howItWorksSteps}
        accentColor="#06B6D4"
      />

      <ServiceWhoItsFor
        eyebrow="Ideal for"
        title="Built for teams ready to automate"
        titleHighlight="."
        items={whoItsForItems}
        accentColor="#06B6D4"
      />

      <ServiceFAQ
        eyebrow="Frequently asked questions"
        title="Automation & SaaS Marketing"
        titleHighlight="."
        faqs={faqs}
        accentColor="#06B6D4"
      />

      <WorkWithUs precoloredFaces />
    </>
  );
}
