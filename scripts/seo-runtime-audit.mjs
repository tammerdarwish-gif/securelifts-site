import assert from "node:assert/strict";
import { spawn } from "node:child_process";

const port = Number(process.env.SEO_AUDIT_PORT || 3210);
const localOrigin = `http://127.0.0.1:${port}`;
const productionOrigin = "https://securelifts.com";
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  cwd: process.cwd(),
  env: { ...process.env, NODE_ENV: "production" },
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(localOrigin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Local production server did not become ready");
}

function metadata(html) {
  return {
    title: html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "",
    description: html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] || "",
    canonical: html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)?.[1] || "",
    h1Count: (html.match(/<h1\b/gi) || []).length,
    noindex: /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html),
  };
}

async function manual(pathname) {
  return fetch(`${localOrigin}${pathname}`, { redirect: "manual" });
}

try {
  await waitForServer();

  for (const [source, destination] of [
    ["/doral", "/garage-door-repair/doral"],
    ["/wellington", "/garage-door-repair/wellington"],
    ["/boca-raton", "/garage-door-repair/boca-raton"],
  ]) {
    const redirect = await manual(source);
    assert.ok([301, 308].includes(redirect.status), `${source} must permanently redirect`);
    assert.equal(new URL(redirect.headers.get("location"), localOrigin).pathname, destination);
    const final = await fetch(`${localOrigin}${destination}`);
    assert.equal(final.status, 200);
    assert.equal(metadata(await final.text()).canonical, `${productionOrigin}${destination}`);
  }

  const slashRedirect = await manual("/contact/");
  assert.ok([301, 308].includes(slashRedirect.status), "/contact/ must normalize permanently");
  assert.equal(new URL(slashRedirect.headers.get("location"), localOrigin).pathname, "/contact");

  const missing = await fetch(`${localOrigin}/this-page-should-not-exist-987654`);
  const missingHtml = await missing.text();
  assert.equal(missing.status, 404);
  assert.equal(metadata(missingHtml).noindex, true);
  assert.equal(/rel="canonical"/i.test(missingHtml), false);
  assert.equal(/"@type":"(FAQPage|Service|LocalBusiness|HomeAndConstructionBusiness)"/i.test(missingHtml), false);

  const sitemapResponse = await fetch(`${localOrigin}/sitemap.xml`);
  assert.equal(sitemapResponse.status, 200);
  const sitemapXml = await sitemapResponse.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");

  const failures = [];
  const queue = [...urls];
  await Promise.all(Array.from({ length: 12 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      const pathname = new URL(url).pathname;
      if (pathname.startsWith("/ads/") || pathname.startsWith("/api/")) {
        failures.push(`${pathname}: excluded path in sitemap`);
        continue;
      }
      const response = await manual(pathname);
      const html = await response.text();
      const page = metadata(html);
      if (response.status !== 200) failures.push(`${pathname}: status ${response.status}`);
      if (!page.title) failures.push(`${pathname}: missing title`);
      if (!page.description) failures.push(`${pathname}: missing description`);
      if (!page.canonical) failures.push(`${pathname}: missing canonical`);
      if (page.canonical && new URL(page.canonical).pathname !== pathname) failures.push(`${pathname}: canonical ${page.canonical}`);
      if (page.h1Count !== 1) failures.push(`${pathname}: ${page.h1Count} H1 elements`);
      if (page.noindex) failures.push(`${pathname}: noindex in sitemap`);
      for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
        try { JSON.parse(match[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&")); }
        catch { failures.push(`${pathname}: invalid JSON-LD`); }
      }
    }
  }));

  assert.deepEqual(failures, []);
  console.log(`Runtime SEO audit passed for ${urls.length} sitemap URLs, redirects, and the 404 route.`);
} finally {
  server.kill("SIGTERM");
}
