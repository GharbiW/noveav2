/* ── DolphX team — single source of truth ───────────────────────────────
   Used by:
   - components/team/TeamShowcase.tsx (home + about presentation)
   - components/home/WorkWithUs.tsx   (form routing → assigned member)

   `contactRequests` controls form options and the contact for each request.
─────────────────────────────────────────────────────────────────────── */

export type ServiceKey = "consulting" | "automation" | "aidata" | "media" | "general";

export type ContactRequest = { service: ServiceKey; key: string; label: string };

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;          // /public path
  service: ServiceKey;
  contactRequests: ContactRequest[];
  posts: { kind: string; label: string }[];
  initials: string;
  social?: { linkedin?: string; x?: string };
};

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Emir Kaya",
    contactRequests: [
      { service: "consulting", key: "seo", label: "Technical SEO & site architecture" },
      { service: "automation", key: "architecture", label: "Technical architecture & integrations" },
    ],
    role: "Chief Technology Officer",
    bio: "Architects and operates the technology backbone of DolphX — from the proprietary data platform to the SaaS automation layer. Leads all engineering decisions across client-facing products.",
    photo: "/team/emir-kaya.webp",
    service: "automation",
    posts: [
      { kind: "Engineering", label: "Engineering our audience data pipeline at scale" },
      { kind: "Article",     label: "The SaaS-inside-a-media-company model" },
    ],
    initials: "EK",
    social: { linkedin: "#" },
  },
  {
    id: 8,
    name: "Wael Gharbi",
    contactRequests: [
      { service: "automation", key: "development", label: "Project development & delivery" },
      { service: "automation", key: "saas", label: "SaaS platform & client portal" },
    ],
    role: "Head of Innovation and Technology",
    bio: "Leads innovation strategy across DolphX technology initiatives, connecting product development, automation and data-led delivery into practical systems for clients.",
    photo: "/team/wael.png",
    service: "automation",
    posts: [
      { kind: "Innovation", label: "Turning market opportunities into deployable products" },
      { kind: "Playbook",   label: "How project development connects SaaS, data and growth" },
    ],
    initials: "WG",
    social: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Kerem Yılmaz",
    contactRequests: [
      { service: "general", key: "investment", label: "Investment & financial enquiries" },
    ],
    role: "Chief Financial Officer",
    bio: "Oversees financial strategy, investor relations and operational performance across the DolphX group. Brings institutional finance experience to media-technology business models.",
    photo: "/team/kerem-yilmaz.webp",
    service: "general",
    posts: [
      { kind: "Analysis", label: "Unit economics of owned media — why it compounds" },
      { kind: "Article",  label: "Revenue diversification for media groups in 2026" },
    ],
    initials: "KY",
    social: { linkedin: "#" },
  },
  {
    id: 3,
    name: "Mehmet Adali",
    contactRequests: [
      { service: "general", key: "operations", label: "Project coordination & other enquiries" },
    ],
    role: "Chief Operation Officer",
    bio: "Runs day-to-day operations, client delivery coordination and cross-vertical project management. Ensures every engagement is executed on time and to the agreed specification.",
    photo: "/team/mehmet-adali.webp",
    service: "general",
    posts: [
      { kind: "Article",     label: "Scaling delivery without scaling headcount" },
      { kind: "Case study",  label: "The DolphX operating model — how we staff projects" },
    ],
    initials: "MA",
    social: { linkedin: "#" },
  },
  {
    id: 4,
    name: "Selin Yıldız",
    contactRequests: [
      { service: "consulting", key: "strategy", label: "Digital strategy & client growth" },
      { service: "general", key: "onboarding", label: "Client onboarding & account support" },
    ],
    role: "Chief Client Success Director",
    bio: "Manages all client relationships from onboarding through quarterly reviews. Ensures every engagement produces measurable results and long-term partnership outcomes.",
    photo: "/team/selin-yildiz.webp",
    service: "consulting",
    posts: [
      { kind: "Article",     label: "What great onboarding looks like for enterprise clients" },
      { kind: "Playbook",    label: "Client retention — the metrics that actually matter" },
    ],
    initials: "SY",
    social: { linkedin: "#" },
  },
  {
    id: 5,
    name: "Claire Moreau",
    contactRequests: [
      { service: "media", key: "editorial", label: "Sponsored editorial programmes" },
      { service: "media", key: "distribution", label: "Multi-platform distribution" },
      { service: "general", key: "partnership", label: "Partnerships & press" },
    ],
    role: "Brand & Communication Director",
    bio: "Leads DolphX brand strategy, external communications and the sponsored editorial programme. Manages the voice and visibility of the group across all properties and international markets.",
    photo: "/team/claire-moreau.webp",
    service: "media",
    posts: [
      { kind: "Article",    label: "Building an institutional brand in a noisy market" },
      { kind: "Case study", label: "The editorial trust model — how we distribute without disrupting" },
    ],
    initials: "CM",
    social: { linkedin: "#" },
  },
  {
    id: 6,
    name: "Elif Şahin",
    contactRequests: [
      { service: "consulting", key: "audit", label: "Performance audit & diagnostics" },
      { service: "consulting", key: "conversion", label: "Conversion optimisation & CRO" },
      { service: "automation", key: "crm", label: "CRM workflows & marketing automation" },
    ],
    role: "Performance Marketing Lead",
    bio: "Designs and operates high-performance marketing automation systems for clients. Expert in CRM architecture, lead scoring and multi-channel acquisition programmes at enterprise scale.",
    photo: "/team/elif-sahin.webp",
    service: "automation",
    posts: [
      { kind: "Case study", label: "CRM automation: from setup to measurable ROI in 90 days" },
      { kind: "Article",    label: "Performance benchmarks for marketing automation — 2026" },
    ],
    initials: "ES",
    social: { linkedin: "#" },
  },
  {
    id: 7,
    name: "Aylin Arslan",
    contactRequests: [
      { service: "aidata", key: "modeling", label: "Predictive modelling & segmentation" },
      { service: "aidata", key: "signals", label: "Intent signals & data activation" },
      { service: "aidata", key: "licensing", label: "Data monetisation & licensing" },
    ],
    role: "Data & Analytics Manager",
    bio: "Translates raw audience behaviour into actionable intelligence. Builds the predictive models, segment schemas and reporting layers that power every DolphX client engagement.",
    photo: "/team/aylin-arslan.webp",
    service: "aidata",
    posts: [
      { kind: "Research", label: "From raw event data to predictive audience segments" },
      { kind: "Article",  label: "AI-driven analytics — what we actually deploy for clients" },
    ],
    initials: "AA",
    social: { linkedin: "#" },
  },
];

export const SERVICES: { key: ServiceKey; num: string; label: string; desc: string }[] = [
  { key: "consulting", num: "01", label: "Digital Consulting",   desc: "Strategy, SEO & conversion"   },
  { key: "automation", num: "02", label: "Project Development & SaaS", desc: "Products, portals & workflows" },
  { key: "aidata",     num: "03", label: "AI & Data",            desc: "Predictive models & segments" },
  { key: "media",      num: "04", label: "Media & Distribution", desc: "Sponsored content & reach"    },
  { key: "general",    num: "05", label: "General Inquiry",      desc: "Partnerships, press & other"  },
];

// Derive both the form options and their owners from the same team records.
// Moving a request to another member updates every contact form automatically.
export function getContactRequests(service: ServiceKey) {
  return TEAM.flatMap((member) => member.contactRequests.filter((request) => request.service === service));
}

export function getInquiryContact(service: ServiceKey | "", requestKey: string) {
  return TEAM.find((member) => member.contactRequests.some(
    (request) => request.service === service && request.key === requestKey
  ));
}
