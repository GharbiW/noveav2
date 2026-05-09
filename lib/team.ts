/* ── DolphX team — single source of truth ───────────────────────────────
   Used by:
   - components/team/TeamShowcase.tsx (home + about presentation)
   - components/home/WorkWithUs.tsx   (form routing → assigned member)

   `service` controls which member is surfaced for which contact path.
─────────────────────────────────────────────────────────────────────── */

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;          // /public path
  service: "consulting" | "automation" | "aidata" | "media" | "general";
  posts: { kind: string; label: string }[];
  initials: string;
  social?: { linkedin?: string; x?: string };
};

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Wael Gharbi",
    role: "Chief Innovation & Strategy Officer",
    bio: "Leads DolphX's strategic direction, product innovation and enterprise client relationships. Brings together the media network, data platform and consulting practice around a single integrated value proposition.",
    photo: "/team/wael-gharbi.webp",
    service: "consulting",
    posts: [
      { kind: "Article",   label: "DolphX 2026 — The media-data convergence thesis" },
      { kind: "Interview", label: "Les Échos — Building a technology-mediatique company from Paris" },
    ],
    initials: "WG",
    social: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Emir Kaya",
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
    id: 3,
    name: "Kerem Yılmaz",
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
    id: 4,
    name: "Mehmet Adali",
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
    id: 5,
    name: "Selin Yıldız",
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
    id: 6,
    name: "Claire Moreau",
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
    id: 7,
    name: "Elif Şahin",
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
    id: 8,
    name: "Aylin Arslan",
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

/* Maps form sub-inquiries → memberId (used in WorkWithUs) */
export const INQUIRIES: Record<
  string,
  { key: string; label: string; memberId: number }[]
> = {
  consulting: [
    { key: "audit",      label: "Performance audit & diagnostics",      memberId: 1 },
    { key: "seo",        label: "SEO architecture & strategy",          memberId: 1 },
    { key: "conversion", label: "Conversion engineering & CRO",         memberId: 5 },
  ],
  automation: [
    { key: "crm",        label: "CRM workflows & integration",          memberId: 7 },
    { key: "nurturing",  label: "Lead nurturing & scoring",             memberId: 7 },
    { key: "saas",       label: "Custom mini-SaaS platform",            memberId: 2 },
  ],
  aidata: [
    { key: "modeling",   label: "Predictive modelling & segmentation",  memberId: 8 },
    { key: "signals",    label: "Intent signals & data activation",     memberId: 8 },
    { key: "licensing",  label: "Data monetisation & licensing",        memberId: 8 },
  ],
  media: [
    { key: "editorial",    label: "Sponsored editorial programs",       memberId: 6 },
    { key: "distribution", label: "Multi-platform distribution",        memberId: 6 },
  ],
  general: [
    { key: "partnership", label: "Partnership & press",                  memberId: 5 },
    { key: "onboarding",  label: "Client onboarding",                    memberId: 5 },
  ],
};

export const SERVICES = [
  { key: "consulting", num: "01", label: "Consulting Digital",   desc: "Strategy, SEO & conversion"   },
  { key: "automation", num: "02", label: "Automation & SaaS",    desc: "Workflows, CRM & mini-SaaS"   },
  { key: "aidata",     num: "03", label: "AI & Data",            desc: "Predictive models & segments" },
  { key: "media",      num: "04", label: "Média & Distribution", desc: "Sponsored content & reach"    },
  { key: "general",    num: "05", label: "General Inquiry",      desc: "Partnerships, press & other"  },
];
