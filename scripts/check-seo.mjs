import assert from "node:assert/strict";
import http from "node:http";
import https from "node:https";

// Run against a running production build, e.g. npm run start -- --port 3000.
const base = new URL(process.argv[2] || "http://localhost:3000");
const production = "https://dolphx.com";

function attrs(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)]
      .map((match) => [match[1].toLowerCase(), match[2]])
  );
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => attrs(match[0]));
}

async function read(path, options) {
  const response = await fetch(new URL(path, base), { redirect: "manual", ...options });
  return { response, html: await response.text() };
}

const { response: sitemapResponse, html: sitemap } = await read("/sitemap.xml");
assert.equal(sitemapResponse.status, 200, "Sitemap must load");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 24, "Expected 12 public pages and 12 use cases while news is hidden");
assert.equal(new Set(urls).size, urls.length, "Sitemap contains duplicate URLs");
assert(!sitemap.includes("<lastmod>"), "Do not publish fabricated modification dates");
assert(!urls.some((url) => /\/(news|thank-you)$/.test(url)), "Utility and unfinished pages must stay out of the sitemap");

const titles = new Set();
const pages = new Map();
for (const url of urls) {
  assert.equal(new URL(url).origin, production, "Sitemap must use the preferred host");
  const path = new URL(url).pathname;
  const { response, html } = await read(path);
  assert.equal(response.status, 200, `${path}: expected 200`);
  const canonical = tags(html, "link").filter((tag) => tag.rel === "canonical");
  assert.deepEqual(canonical.map((tag) => new URL(tag.href).href), [new URL(url).href], `${path}: incorrect canonical`);
  assert.equal((html.match(/<h1\b/gi) || []).length, 1, `${path}: expected one H1`);
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  assert(title && !titles.has(title), `${path}: missing or duplicate title`);
  titles.add(title);
  const meta = tags(html, "meta");
  assert(meta.some((tag) => tag.name === "description" && tag.content), `${path}: missing description`);
  assert(!meta.some((tag) => /^(robots|googlebot)$/.test(tag.name) && /noindex/.test(tag.content)), `${path}: unexpected noindex`);
  assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), `${path}: unexpected X-Robots-Tag`);
  const data = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => attrs(match[1]).type === "application/ld+json")
    .flatMap((match) => JSON.parse(match[2]));
  assert(data.some((node) => node["@type"] === "Organization" && node.url === production && node.sameAs?.includes("https://www.linkedin.com/company/dolphx/")), `${path}: missing company identity`);
  assert(data.some((node) => node["@type"] === "WebSite" && node.name === "DolphX"), `${path}: missing website identity`);
  assert(!tags(html, "a").some((tag) => tag.href === "#"), `${path}: placeholder link remains`);
  assert(!tags(html, "a").some((tag) => tag.href === "/news"), `${path}: unfinished news is still promoted`);
  assert(!/class="ts-showcase"/.test(html), `${path}: team showcase must stay hidden`);
  pages.set(path, html);
}

for (const path of ["/launch", "/development"]) {
  assert([...pages.entries()].some(([source, html]) => source !== path && tags(html, "a").some((tag) => tag.href === path)), `${path}: no internal links`);
}

for (const path of ["/news", "/thank-you"]) {
  const { response, html } = await read(path);
  assert.equal(response.status, 200, `${path}: should remain accessible`);
  assert(tags(html, "meta").some((tag) => tag.name === "robots" && /noindex/.test(tag.content)), `${path}: expected noindex`);
  if (path === "/news") assert(!html.includes("Read article"), "Unfinished article previews are still visible");
}

for (const path of ["/seo-check-missing-page", "/use-cases/seo-check-missing-case"]) {
  const { response } = await read(path);
  assert.equal(response.status, 404, `${path}: missing pages must return 404`);
}

const { html: taggedHome } = await read("/?utm_source=seo-check");
assert.equal(new URL(tags(taggedHome, "link").find((tag) => tag.rel === "canonical")?.href).href, `${production}/`, "Tracking parameters must not alter the canonical");

// Node's fetch may replace Host with the URL host; use an explicit HTTP request.
const transport = base.protocol === "https:" ? https : http;
const hostRedirect = await new Promise((resolve, reject) => {
  const request = transport.get(new URL("/about?utm_source=seo-check", base), {
    headers: { host: "www.dolphx.com" },
  }, (response) => {
    response.resume();
    resolve(response);
  });
  request.on("error", reject);
  request.setTimeout(10000, () => request.destroy(new Error("Host redirect request timed out")));
});
assert.equal(hostRedirect.statusCode, 308, "www must redirect permanently");
assert.equal(hostRedirect.headers.location, `${production}/about?utm_source=seo-check`, "Host redirect must preserve path and query");

const { html: robots } = await read("/robots.txt");
assert(robots.includes("Allow: /"), "Public pages must remain crawlable");
assert(robots.includes(`${production}/sitemap.xml`), "robots.txt must advertise the sitemap");

console.log(`SEO checks passed: ${urls.length} public pages, canonical URLs, structured data, hidden content, utility pages, 404s, internal links and permanent host redirect.`);
