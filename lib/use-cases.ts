export type UseCaseService = {
  label: string;
  href: string;
  accent: string;
};

export type UseCase = {
  slug: string;
  client: string;
  sector: string;
  logo?: string;
  companySize?: string;
  headline: string;
  summary: string;
  publicContext: string;
  services: UseCaseService[];
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  nextStep: string;
};

export const useCases: UseCase[] = [
  {
    slug: "halkbank-sme-digital-onboarding",
    client: "Halkbank",
    sector: "Banking & SME Finance",
    logo: "/clients/halkbank.png",
    headline: "SME digital onboarding and qualified branch handoff.",
    summary:
      "A banking use case focused on turning high-intent SME demand into structured applications, cleaner customer data and faster routing to the right branch or relationship team.",
    publicContext:
      "Halkbank is one of Turkey's major public banks, with a strong role in SME banking, merchant finance and business customer services.",
    services: [
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
    ],
    challenge:
      "SME customers often arrive from campaigns, search, branches and referral channels with different levels of readiness. The commercial team needs to know who is eligible, what documents are missing and which contact should move first.",
    approach: [
      "Map the SME acquisition journey from first visit to advisor handoff, including campaign pages, document requirements and branch routing rules.",
      "Build a secure onboarding flow that captures company details, requested products, supporting documents and consented follow-up preferences.",
      "Add scoring logic and dashboards so teams can prioritise complete, high-intent applications without losing early-stage prospects.",
    ],
    deliverables: [
      "SME onboarding portal",
      "Eligibility and document checklist",
      "CRM handoff workflow",
      "Branch and advisor dashboard",
      "Campaign source attribution",
    ],
    outcomes: [
      "Cleaner application data before advisor contact.",
      "Less manual back-and-forth for missing customer information.",
      "Better visibility into which acquisition channels create qualified SME demand.",
      "A reusable onboarding model for loans, merchant products and business banking campaigns.",
    ],
    nextStep: "Extend the onboarding layer into lifecycle nurturing for approved, pending and incomplete applications.",
  },
  {
    slug: "esteworld-health-tourism-growth-system",
    client: "Esteworld",
    sector: "Health Tourism & Aesthetics",
    logo: "/clients/esteworld.webp",
    headline: "International patient intake, booking and follow-up automation.",
    summary:
      "A health tourism growth system that connects multilingual lead capture, consultation booking, patient qualification and post-consultation follow-up in one operational flow.",
    publicContext:
      "Esteworld is a Turkish aesthetics and hair-transplant brand serving domestic and international patients across high-consideration treatment journeys.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
    ],
    challenge:
      "International patient demand needs fast qualification, clear treatment information and reliable follow-up. When inquiries arrive from different countries and languages, sales and care teams need one source of truth.",
    approach: [
      "Structure the intake journey around language, treatment interest, travel readiness, medical notes and preferred consultation channel.",
      "Connect landing pages, WhatsApp/contact forms, booking slots and CRM stages into a single patient pipeline.",
      "Create content and distribution paths that explain treatment categories while routing qualified inquiries to the right team.",
    ],
    deliverables: [
      "Multilingual patient intake flow",
      "Consultation booking system",
      "Treatment-interest segmentation",
      "Sales follow-up automation",
      "Editorial and paid-media landing pages",
    ],
    outcomes: [
      "Faster response to international inquiries.",
      "Clearer segmentation between research-stage and consultation-ready patients.",
      "More consistent follow-up across languages and treatment categories.",
      "A scalable patient acquisition system for new markets and campaigns.",
    ],
    nextStep: "Add patient journey dashboards for consultation attendance, treatment interest and country-level demand.",
  },
  {
    slug: "hisar-hospital-patient-acquisition-intelligence",
    client: "Hisar Hospital",
    sector: "Healthcare",
    logo: "/clients/hisar.webp",
    headline: "Patient acquisition intelligence for hospital service lines.",
    summary:
      "A healthcare use case that helps a hospital understand which service lines attract demand, which content answers patient questions and where booking intent is strongest.",
    publicContext:
      "Hisar Hospital is a private hospital brand in Turkey, operating in a category where trust, clarity and service-line discovery are central to patient decisions.",
    services: [
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
    ],
    challenge:
      "Hospital growth teams need to connect search demand, content engagement, appointment requests and service-line performance without exposing sensitive patient data or relying on shallow traffic metrics.",
    approach: [
      "Audit service-line pages, appointment paths and content journeys to identify where patients show intent but do not complete a booking.",
      "Create privacy-conscious audience segments around declared interests such as check-up, specialist consultation and international patient services.",
      "Build reporting views that show demand by service line, language, source and conversion stage.",
    ],
    deliverables: [
      "Service-line demand audit",
      "Appointment journey diagnostics",
      "Privacy-conscious audience segmentation",
      "Content opportunity map",
      "Executive reporting dashboard",
    ],
    outcomes: [
      "Better visibility into patient intent across service lines.",
      "Clearer priorities for healthcare content, landing pages and appointment flows.",
      "A reporting layer that separates awareness traffic from real booking demand.",
      "A stronger foundation for compliant healthcare growth campaigns.",
    ],
    nextStep: "Connect the intelligence layer to multilingual landing pages for priority service lines.",
  },
  {
    slug: "integral-yatirim-investor-education-funnel",
    client: "Integral Yatırım",
    sector: "Investment Services",
    logo: "/clients/integral.webp",
    headline: "Investor education funnel with compliant lead qualification.",
    summary:
      "A finance use case for converting market education demand into structured investor journeys, webinar participation and advisor-ready CRM records.",
    publicContext:
      "Integral Yatırım operates in investment services, where education, compliance, risk awareness and lead quality are more valuable than raw traffic volume.",
    services: [
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
    ],
    challenge:
      "Finance audiences consume market content at different sophistication levels. The team needs to distinguish education readers from high-intent prospects while maintaining compliant communication.",
    approach: [
      "Design topic clusters around market education, product interest, risk profile and investor readiness.",
      "Build registration flows for webinars, guides and consultation requests with CRM scoring attached.",
      "Use finance media distribution and retargeting logic to nurture readers without over-claiming investment outcomes.",
    ],
    deliverables: [
      "Investor education funnel",
      "Webinar and guide registration system",
      "Lead scoring model",
      "Advisor routing workflow",
      "Finance content distribution plan",
    ],
    outcomes: [
      "More useful segmentation between beginners, active traders and advisor-ready prospects.",
      "Cleaner CRM records connected to declared investor interests.",
      "Content journeys that support compliance-sensitive education.",
      "A repeatable funnel for market updates, webinars and product campaigns.",
    ],
    nextStep: "Layer predictive intent signals on top of recurring education and webinar engagement.",
  },
  {
    slug: "mavi-retail-campaign-command-center",
    client: "Mavi",
    sector: "Retail & Ecommerce",
    logo: "/clients/mavi.webp",
    headline: "Retail campaign command center for ecommerce, CRM and stores.",
    summary:
      "A retail use case for coordinating campaign planning, loyalty audiences, ecommerce signals and store-level reporting around seasonal launches.",
    publicContext:
      "Mavi is a denim and lifestyle retail brand with stores, ecommerce and recurring campaign moments across Turkey and international markets.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
    ],
    challenge:
      "Retail campaigns involve product teams, ecommerce, CRM, media and stores. Without one command center, launch signals and customer behaviour can remain split across reports.",
    approach: [
      "Map the campaign operating rhythm from product launch calendar to ecommerce traffic, CRM activation and store feedback.",
      "Build a dashboard that groups campaign performance by product category, customer segment, channel and region.",
      "Add audience intelligence to identify repeat purchase, browsing interest and campaign fatigue patterns.",
    ],
    deliverables: [
      "Campaign planning dashboard",
      "CRM segment views",
      "Ecommerce signal reporting",
      "Store feedback workflow",
      "Launch performance summary",
    ],
    outcomes: [
      "One operating view for campaign teams.",
      "Clearer connection between audience segments and product launches.",
      "Faster readouts on which messages, categories and regions need optimisation.",
      "A reusable command center for seasonal drops and loyalty campaigns.",
    ],
    nextStep: "Connect product-level campaign insights to personalised CRM journeys and media planning.",
  },
  {
    slug: "musiad-member-engagement-platform",
    client: "MÜSİAD",
    sector: "Business Association",
    logo: "/clients/musiad.webp",
    headline: "Member engagement platform for events, committees and sponsors.",
    summary:
      "A business association use case for making member services easier to manage, from event registration and committee participation to sponsor visibility and reporting.",
    publicContext:
      "MÜSİAD is a Turkish business association with member companies, events, committees and partnership activity across sectors.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
    ],
    challenge:
      "Associations need to keep members active, sponsors visible and events organised. The challenge is coordinating many stakeholders without turning every update into manual admin.",
    approach: [
      "Define member journeys for onboarding, events, committees, sponsorships and post-event follow-up.",
      "Build a member portal with registrations, preferences, committee workflows and sponsor reporting modules.",
      "Create media and editorial distribution packages for event visibility and partner communication.",
    ],
    deliverables: [
      "Member portal",
      "Event registration workflow",
      "Committee participation tracking",
      "Sponsor reporting dashboard",
      "Editorial distribution calendar",
    ],
    outcomes: [
      "More organised member and event operations.",
      "Clearer sponsor visibility across content, events and reporting.",
      "Less manual coordination for committees and registrations.",
      "A stronger digital layer for association growth and retention.",
    ],
    nextStep: "Add personalised member recommendations based on sector, committee interest and event participation.",
  },
  {
    slug: "yemeksepeti-restaurant-partner-operations",
    client: "Yemeksepeti",
    sector: "Food Delivery Marketplace",
    logo: "/clients/yemeksepeti.webp",
    headline: "Restaurant partner operations portal for onboarding and promotions.",
    summary:
      "A marketplace use case for helping restaurant partners manage onboarding, promotion requests, support issues and performance visibility in one practical workflow.",
    publicContext:
      "Yemeksepeti is a food delivery marketplace in Turkey, coordinating customers, restaurants and city-level operations at high volume.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
    ],
    challenge:
      "Restaurant partners need quick onboarding, clear promotion workflows and simple issue tracking. Marketplace teams need visibility into partner readiness, campaign participation and recurring bottlenecks.",
    approach: [
      "Map the partner lifecycle from signup and menu readiness to campaign participation and support escalation.",
      "Build a partner portal for onboarding tasks, promotion requests, operational tickets and status updates.",
      "Use partner behaviour data to identify friction points, campaign readiness and categories needing support.",
    ],
    deliverables: [
      "Restaurant partner portal",
      "Onboarding checklist",
      "Promotion request workflow",
      "Operational ticket tracking",
      "Partner readiness dashboard",
    ],
    outcomes: [
      "More structured onboarding for new restaurant partners.",
      "Clearer promotion workflows between partners and marketplace teams.",
      "Better visibility into repeated support issues and readiness gaps.",
      "A scalable operations layer for city and category teams.",
    ],
    nextStep: "Add automated recommendations for partner education, campaign eligibility and operational support.",
  },
  {
    slug: "tamamliyo-embedded-insurance-growth",
    client: "Tamamliyo",
    sector: "Insurtech",
    companySize: "Startup team under 100 employees",
    headline: "Embedded insurance partner funnel for ecommerce integrations.",
    summary:
      "A small insurtech use case for turning ecommerce partnership demand into API demos, integration readiness checks and broker-carrier workflow visibility.",
    publicContext:
      "Tamamliyo is an Istanbul-based insurtech founded in 2022, focused on no-code embedded insurance integration for digital businesses and ecommerce companies.",
    services: [
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
    ],
    challenge:
      "Embedded insurance requires education before conversion. Ecommerce teams need to understand the product, technical requirements, insurance partner fit and implementation effort before they book a serious integration conversation.",
    approach: [
      "Create a partner acquisition journey around ecommerce platform type, insurance category, API readiness and monthly order volume.",
      "Build a lightweight integration-readiness assessment that routes prospects to demo, nurture or partner review workflows.",
      "Use business and ecommerce media content to explain embedded insurance without turning the offer into generic lead generation.",
    ],
    deliverables: [
      "Partner acquisition landing pages",
      "Integration-readiness calculator",
      "Demo booking workflow",
      "CRM qualification stages",
      "Ecommerce media content plan",
    ],
    outcomes: [
      "Clearer qualification before sales or technical discovery calls.",
      "Better separation between curious merchants and integration-ready ecommerce partners.",
      "A repeatable education funnel for embedded insurance categories.",
      "More useful CRM context for partnership and product teams.",
    ],
    nextStep: "Add partner lifecycle reporting from first demo to signed integration and live insurance product.",
  },
  {
    slug: "vitalify-ai-health-wellness-onboarding",
    client: "Vitalify",
    sector: "AI Health & Wellness",
    companySize: "Early-stage startup team under 100 employees",
    headline: "AI wellness onboarding for goals, health signals and daily actions.",
    summary:
      "A small health AI use case for converting complex wellness data into calm onboarding, personalised action plans and retention-focused product analytics.",
    publicContext:
      "Vitalify is an Istanbul-based AI health and wellness product founded by ITU graduates, built around early detection, personal goals and sustainable daily actions.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
    ],
    challenge:
      "Consumer health products need trust and simplicity. Users may have labs, wearable data, goals and symptoms, but onboarding fails if the experience feels clinical, confusing or too heavy.",
    approach: [
      "Design an onboarding journey that captures goals, lifestyle inputs, available health data and consent without overwhelming the user.",
      "Define AI-assisted segmentation for wellness goals such as energy, sleep, metabolic health and habit formation.",
      "Build product analytics around activation, recommendation engagement and recurring check-in behaviour.",
    ],
    deliverables: [
      "Wellness onboarding flow",
      "Consent and data-input architecture",
      "Goal-based user segmentation",
      "Recommendation engagement dashboard",
      "Lifecycle email and notification logic",
    ],
    outcomes: [
      "A clearer first-session experience for health-conscious users.",
      "Better visibility into which goals and recommendations drive continued use.",
      "A privacy-first data structure for future AI health features.",
      "A stronger foundation for B2C growth and B2B pilot reporting.",
    ],
    nextStep: "Connect onboarding segments to personalised content, habit loops and clinical-partner reporting.",
  },
  {
    slug: "teamsec-structured-finance-abm-engine",
    client: "TeamSec",
    sector: "Fintech & Regtech",
    companySize: "Specialist team under 100 employees",
    headline: "Account-based marketing engine for structured finance buyers.",
    summary:
      "A specialist fintech use case for reaching banks, investment banks and brokerage houses with a structured-finance education and enterprise sales workflow.",
    publicContext:
      "TeamSec presents itself as a Turkish cloud-based securitization-as-a-service fintech and regtech company operating from Istanbul technopark ecosystems.",
    services: [
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
    ],
    challenge:
      "Structured finance buyers are senior, specialised and difficult to reach through broad campaigns. The sales journey needs education, credibility and account-level prioritisation.",
    approach: [
      "Map target accounts by institution type, product interest, regulatory context and likely securitization maturity.",
      "Develop executive content journeys that explain ABS, MBS and cloud-based securitization workflows in practical terms.",
      "Use intent signals and media engagement to prioritise accounts for senior outreach and event follow-up.",
    ],
    deliverables: [
      "ABM account segmentation",
      "Executive education content",
      "Intent-signal scoring model",
      "Event follow-up workflow",
      "Enterprise sales dashboard",
    ],
    outcomes: [
      "More focused outreach to finance institutions with relevant use cases.",
      "Clearer education paths for complex fintech products.",
      "Better alignment between content engagement and senior sales activity.",
      "A repeatable ABM model for banks, brokerages and investment institutions.",
    ],
    nextStep: "Add account-level reporting that connects content, meetings, proposals and product modules.",
  },
  {
    slug: "bimetrik-ecommerce-seller-intelligence",
    client: "Bimetrik",
    sector: "Ecommerce Analytics SaaS",
    companySize: "Public site references a 10-person team",
    headline: "Marketplace seller intelligence funnel for ecommerce operators.",
    summary:
      "A small ecommerce SaaS use case for turning seller pain points into product-led acquisition, onboarding and retention dashboards.",
    publicContext:
      "Bimetrik is a Turkish AI-supported ecommerce analytics and management platform for marketplace sellers, with public copy referencing a 10-person team using the product in daily operations.",
    services: [
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
      { label: "Média & Distribution", href: "/media-distribution", accent: "#a7f432" },
    ],
    challenge:
      "Marketplace sellers care about stock, profitability, comments, campaigns and reconciliations. The growth challenge is showing value quickly enough for sellers to connect data and keep using the platform.",
    approach: [
      "Build a product-led funnel around seller size, marketplace mix, product count and pain points such as stock-outs or margin leakage.",
      "Create onboarding checkpoints that guide API connection, first dashboard view and first automated insight.",
      "Use ecommerce media and educational content to attract sellers searching for profitability and marketplace operations help.",
    ],
    deliverables: [
      "Seller acquisition funnel",
      "Onboarding checklist",
      "First-value dashboard flow",
      "Usage and retention reporting",
      "Ecommerce education content plan",
    ],
    outcomes: [
      "Faster explanation of product value for marketplace sellers.",
      "Cleaner segmentation between small sellers, growing teams and larger catalogue operators.",
      "Better visibility into activation and retention blockers.",
      "A growth model that connects education content to product onboarding.",
    ],
    nextStep: "Add lifecycle messaging based on marketplace connection status, product count and first insight viewed.",
  },
  {
    slug: "obifin-open-banking-growth-operations",
    client: "Obifin",
    sector: "Open Banking & Finance Operations",
    companySize: "Specialist Turkish fintech team under 100 employees",
    headline: "Open banking growth operations for ERP-connected businesses.",
    summary:
      "A fintech operations use case for explaining open banking value, qualifying ERP integration demand and helping finance teams see cash, POS and account data in one flow.",
    publicContext:
      "Obifin is an Istanbul-based AI-supported open banking and service banking platform that brings bank account and POS movements into one screen and integrates with ERP/accounting systems.",
    services: [
      { label: "Consulting Digital", href: "/consulting", accent: "#a7f432" },
      { label: "Project Development & SaaS", href: "/automation", accent: "#86c93f" },
      { label: "AI & Data", href: "/ai-data", accent: "#10B981" },
    ],
    challenge:
      "Finance teams understand the pain of fragmented bank, POS and ERP data, but buyers need a clear path from problem awareness to integration requirements and implementation confidence.",
    approach: [
      "Segment buyers by company size, ERP/accounting stack, bank coverage, POS complexity and reporting needs.",
      "Build qualification flows that capture integration requirements before demos or technical calls.",
      "Create dashboards for acquisition source, demo readiness, integration stage and product module interest.",
    ],
    deliverables: [
      "Open banking landing pages",
      "ERP integration questionnaire",
      "Demo qualification workflow",
      "Sales and implementation dashboard",
      "Finance operations content map",
    ],
    outcomes: [
      "Better pre-demo understanding of buyer systems and integration needs.",
      "Clearer routing between sales, technical support and implementation.",
      "More relevant content for CFOs, accountants and operations teams.",
      "A scalable growth operations layer for fintech buyers.",
    ],
    nextStep: "Connect demo qualification data to implementation timelines and post-launch adoption reporting.",
  },
];

export function getUseCase(slug: string) {
  return useCases.find((item) => item.slug === slug);
}
