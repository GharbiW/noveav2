export const SITE_URL = "https://dolphx.com";
export const SITE_TITLE = "DolphX | Digital Consulting, AI & Media Technology";
export const SITE_DESCRIPTION =
  "DolphX helps businesses across Europe with digital consulting, custom software, AI and media distribution, powered by first-party audience data.";
export const LINKEDIN_URL = "https://www.linkedin.com/company/dolphx/";

// Keep the existing news content until complete articles are ready to publish.
export const NEWS_ENABLED = false;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "DolphX",
  alternateName: "Dolphx",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/icon.webp`,
  description: SITE_DESCRIPTION,
  email: "contact@dolphx.com",
  sameAs: [LINKEDIN_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Levent Mahallesi, Cömert Sok. 8",
    addressLocality: "Beşiktaş, Istanbul",
    postalCode: "34330",
    addressCountry: "TR",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "DolphX",
  alternateName: "Dolphx",
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
