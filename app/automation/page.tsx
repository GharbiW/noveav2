import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailPanels, { type SubService } from "@/components/services/ServiceDetailPanels";
import ServiceHowItWorks, { type ProcessStep } from "@/components/services/ServiceHowItWorks";
import ServiceWhoItsFor from "@/components/services/ServiceWhoItsFor";
import ServiceFAQ, { type FAQItem } from "@/components/services/ServiceFAQ";
import WorkWithUs from "@/components/home/WorkWithUs";

export const metadata: Metadata = {
  title: "Project Development & SaaS — DolphX | Platforms, Portals & Automation",
  description:
    "Project development, SaaS platforms, client portals, dashboards and automation systems — scoped, designed, built and maintained for scalable growth operations.",
  openGraph: {
    title: "Project Development & SaaS — DolphX",
    description: "Custom project development, SaaS platforms and workflow systems for scalable operations.",
    url: "https://dolphx.com/automation",
    siteName: "DolphX",
    type: "website",
  },
};

const subServices: SubService[] = [
  {
    num: "01",
    title: "Project Scoping & Product Strategy",
    description: "We turn business requirements into a practical product roadmap: user journeys, feature priorities, data flows, integrations, delivery milestones and measurable launch criteria.",
    stat: { val: "60%", label: "time saved" },
    items: ["Product roadmap", "User journey mapping", "Feature prioritisation", "Delivery milestones"],
    accent: "#86c93f",
  },
  {
    num: "02",
    title: "SaaS Platform Development",
    description: "Custom web applications for the operational workflows that off-the-shelf tools cannot handle. Client portals, internal platforms, reporting tools and revenue systems built around your team.",
    items: ["SaaS applications", "Client portals", "Admin dashboards", "Role-based access"],
    accent: "#86c93f",
  },
  {
    num: "03",
    title: "CRM & Workflow Automation",
    description: "End-to-end workflow architecture — from lead capture to service delivery. We design, build and integrate pipelines that eliminate manual steps and keep teams focused on decisions.",
    items: ["CRM integration", "Trigger-based workflows", "Data hygiene automation", "Team notifications"],
    accent: "#86c93f",
  },
  {
    num: "04",
    title: "Growth & Marketing Systems",
    description: "Personalised marketing tools built for your specific use case. Lead capture flows, ROI calculators, booking engines and campaign dashboards that add product value and improve conversion.",
    stat: { val: "40+", label: "platforms built" },
    items: ["Lead capture flows", "ROI calculators", "Booking & scheduling tools", "Campaign dashboards"],
    accent: "#86c93f",
  },
  {
    num: "05",
    title: "Reporting & Business Intelligence",
    description: "Automated reporting that pulls data from every channel into one view. Weekly performance summaries, campaign attribution and executive dashboards — delivered without manual effort.",
    items: ["Multi-source data aggregation", "Automated report generation", "Executive dashboards", "Attribution tracking"],
    accent: "#86c93f",
  },
];

const howItWorksSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Map & scope",
    description:
      "We audit your current stack, map user journeys and identify the project scope. You get a clear delivery document with priorities, dependencies, integrations and timelines.",
  },
  {
    num: "02",
    title: "Build & integrate",
    description:
      "We design and deploy the platform, portal, dashboard or workflow system — integrated with your CRM, analytics, payment, booking or internal tools. Everything is tested end-to-end before launch.",
  },
  {
    num: "03",
    title: "Optimise & scale",
    description:
      "Post-launch monitoring, iteration and performance reviews. We refine workflows, improve conversion paths and scale the product as new use cases emerge.",
  },
];

const whoItsForItems = [
  {
    label: "Founders and project owners",
    description:
      "A senior product and technology team to turn a business idea into a scoped, designed and launched digital product without building an internal department first.",
  },
  {
    label: "Marketing and revenue operations",
    description:
      "Scalable workflows, CRM integrations and reporting that eliminate spreadsheet chaos. One system, automated end-to-end, integrated with your stack.",
  },
  {
    label: "Established brands launching tools",
    description:
      "Client-facing portals, booking flows, calculators and dashboards that add product value, improve customer experience and create retention.",
  },
];

const useCases = [
  {
    brand: "Halkbank",
    sector: "Banking",
    logo: "/clients/halkbank.png",
    context: "A public bank serving retail, SME and corporate customers across Turkey.",
    project: "SME onboarding portal with lead qualification, document collection and branch handoff dashboards.",
  },
  {
    brand: "Esteworld",
    sector: "Health tourism",
    logo: "/clients/esteworld.webp",
    context: "A Turkish aesthetic and hair-transplant brand with international patient demand.",
    project: "Multilingual patient intake, consultation booking and treatment journey automation for sales and care teams.",
  },
  {
    brand: "Mavi",
    sector: "Retail",
    logo: "/clients/mavi.webp",
    context: "A denim and lifestyle retailer operating stores, ecommerce and loyalty-led customer journeys.",
    project: "Campaign planning dashboard connecting ecommerce signals, CRM segments and store-level launch reporting.",
  },
  {
    brand: "Yemeksepeti",
    sector: "Food delivery",
    logo: "/clients/yemeksepeti.webp",
    context: "A food delivery marketplace coordinating customers, restaurants and high-volume city operations.",
    project: "Partner performance portal for restaurant onboarding, promotion requests and operational issue tracking.",
  },
  {
    brand: "Integral Yatırım",
    sector: "Finance",
    logo: "/clients/integral.webp",
    context: "An investment services brand where education, compliance and qualified lead routing matter.",
    project: "Investor education funnel with CRM scoring, webinar registration and advisor follow-up automation.",
  },
  {
    brand: "MÜSİAD",
    sector: "Business association",
    logo: "/clients/musiad.webp",
    context: "A business network connecting Turkish companies, events, committees and member services.",
    project: "Member engagement platform for event registration, committee workflows and sponsor reporting.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What platforms and tools do you integrate with?",
    answer:
      "We work with major CRMs (HubSpot, Salesforce, Pipedrive), email platforms, analytics tools, payment providers, booking tools, internal databases and custom APIs. We adapt to your existing stack rather than forcing a migration.",
  },
  {
    question: "What counts as a project development engagement?",
    answer:
      "Any scoped digital product or operational platform: SaaS applications, client portals, dashboards, booking flows, ROI calculators, CRM-connected workflows or internal tools. The goal is to ship practical software that solves a clear business problem.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Simple workflow automations take 1–2 weeks. Full portals, dashboards and SaaS builds typically take 4–8 weeks from scoping to launch. We provide clear timelines and milestones upfront.",
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
                color: "#86c93f",
                marginBottom: 40,
              }}
            >
              Project Development & SaaS
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
                Project development, SaaS platforms and growth systems<span style={{ color: "#86c93f" }}>.</span>
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
                Digital products, client portals, dashboards, CRM workflows and growth automation — built to industrialise acquisition, operations and reporting.
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
        accentColor="#86c93f"
      />

      <section
        style={{
          backgroundColor: "var(--color-canvas)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: 80,
          paddingBottom: 80,
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
                color: "#86c93f",
                marginBottom: 16,
              }}
            >
              Use Cases
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 400,
                color: "var(--color-foreground)",
                letterSpacing: "-0.02em",
                marginBottom: 20,
                maxWidth: 720,
              }}
            >
              Real Turkish brand contexts for product development<span style={{ color: "#86c93f" }}>.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: 15,
                color: "var(--color-muted-foreground)",
                lineHeight: 1.8,
                maxWidth: 640,
                marginBottom: 48,
              }}
            >
              Examples of the systems DolphX can scope and build for brands with the same operational needs as our Turkish client network.
            </p>
          </ScrollReveal>

          <div
            id="use-cases-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              backgroundColor: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
          >
            {useCases.map((item, i) => (
              <ScrollReveal key={item.brand} delay={i * 50}>
                <article
                  style={{
                    height: "100%",
                    backgroundColor: "var(--color-surface)",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <img
                      src={item.logo}
                      alt={item.brand}
                      style={{
                        maxWidth: 112,
                        maxHeight: 36,
                        objectFit: "contain",
                        filter: "grayscale(1) brightness(1.8)",
                        opacity: 0.62,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#86c93f",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.sector}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 22,
                        fontWeight: 400,
                        color: "var(--color-foreground)",
                        marginBottom: 10,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.brand}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "var(--color-muted-foreground)",
                        lineHeight: 1.7,
                        marginBottom: 14,
                      }}
                    >
                      {item.context}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: 13,
                        color: "var(--color-foreground)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.project}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){#use-cases-grid{grid-template-columns:1fr 1fr!important;}}
          @media(max-width:640px){#use-cases-grid{grid-template-columns:1fr!important;}}
          html.light #use-cases-grid img{filter:grayscale(1) brightness(0.35)!important;opacity:0.68!important;}
        `}</style>
      </section>

      <ServiceWhoItsFor
        eyebrow="Ideal for"
        title="Built for teams ready to ship"
        titleHighlight="."
        items={whoItsForItems}
        accentColor="#86c93f"
      />

      <ServiceFAQ
        eyebrow="Frequently asked questions"
        title="Project Development & SaaS"
        titleHighlight="."
        faqs={faqs}
        accentColor="#86c93f"
      />

      <WorkWithUs precoloredFaces />
    </>
  );
}
