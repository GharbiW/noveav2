export const env = {
  wpGraphqlUrl:
    process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || "https://placeholder.wordpress.com/graphql",
  makeWebhookUrl: process.env.MAKE_COM_WEBHOOK_URL || "",
  formspreeEndpoint: process.env.FORMSPREE_ENDPOINT || "",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/dolphx",
  wpAuthToken: process.env.WP_AUTH_TOKEN || "",
};
