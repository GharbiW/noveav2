# SEO release notes

Prepared on 16 October 2026 for the English-language DolphX site.

## Included

- Each page has its own canonical URL, including the 12 use-case pages.
- Organization and WebSite structured data use the existing company contact details and verified LinkedIn profile.
- The homepage identifies DolphX and its services directly. Service labels use consistent English throughout navigation, pages, forms and use-case filters.
- News previews are preserved behind `NEWS_ENABLED` in `lib/site.ts`. Until complete articles exist, the navigation and sitemap omit News and its holding page is noindex.
- The thank-you page is noindex and remains accessible after form submissions.
- The sitemap includes only implemented, indexable frontend routes and does not invent modification dates or import unsupported WordPress URLs.
- The footer links to Media Launch and Media Technology, as well as the actual LinkedIn profile.
- Scroll-reveal text is visible before JavaScript runs. Reduced-motion preferences are respected. Content-bearing Motion elements also start visible.
- Below-the-fold client logos load lazily.
- The services heading fits desktop and mobile layouts; homepage logo and company-card grids shrink correctly on narrow screens.
- The existing team section remains hidden; its content is preserved.
- A permanent, host-specific www redirect preserves paths and query strings.

## Verification

Build with `npm run build`, start the production server with `npm run start`, and run `npm run test:seo`. An alternative local origin can be passed after `--`, for example `npm run test:seo -- http://localhost:3100`.

The integration checks inspect actual HTTP responses and generated HTML for every sitemap page, plus noindex utility pages, missing routes, query parameters and the host redirect.

Verified locally on 16 October 2026: production build and TypeScript passed; all 24 public pages passed the SEO integration checks; desktop and mobile homepage/services layouts were inspected. The mobile homepage has no horizontal overflow after the grid corrections. These changes have not been deployed or submitted to Search Console.

## Account-side work after deployment

1. In Vercel, change any domain-level `www.dolphx.com` redirect from 307 to 308 (or 301). Hosting redirects can run before the application rule. Verify the public result after deployment.
2. In Google Search Console, inspect the homepage and representative service/use-case pages. Check Google-selected canonicals, indexing reasons, last crawl, manual actions and security issues. Submit `https://dolphx.com/sitemap.xml` and request recrawling of the homepage after verification.
3. Investigate the suspicious backlink sample before making any disavow decision. Do not assume a penalty or remove links blindly.
4. Add dated project evidence and approved measurements to the existing use cases when available. No client results, testimonials, company history or new office locations were invented in this release.

To restore News, first publish complete article routes and replace the preview-only cards with actual links; only then enable `NEWS_ENABLED`. The SEO check's expected route inventory must be updated when published pages change.
