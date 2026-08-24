import fs from "node:fs";
import path from "node:path";

const buildRoot = path.join(process.cwd(), ".next/server/app");
const outputPath = path.join(process.cwd(), "reports/seo-location-page-inventory.csv");
const citySource = fs.readFileSync(path.join(process.cwd(), "lib/cityPages.ts"), "utf8");
const cities = new Set(
  [...citySource.matchAll(/^\s{4}"?([a-z0-9-]+)"?,?$/gm)].map((match) => match[1])
);

const files = [];
function collect(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else if (entry.name.endsWith(".html")) files.push(fullPath);
  }
}

function decode(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function textContent(html = "") {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function value(html, expression) {
  return decode(html.match(expression)?.[1]?.trim() || "");
}

function csv(value) {
  const stringValue = String(value ?? "");
  return /[",\n]/.test(stringValue)
    ? `"${stringValue.replace(/"/g, '""')}"`
    : stringValue;
}

collect(buildRoot);

const rows = files.flatMap((file) => {
  const relative = path.relative(buildRoot, file).replace(/\\/g, "/");
  const route = `/${relative.replace(/\/index\.html$/, "").replace(/\.html$/, "")}`.replace("/index", "/");
  const segments = route.split("/").filter(Boolean);
  const city = segments.at(-1) || "";
  if (segments.length < 2 || !cities.has(city)) return [];

  const html = fs.readFileSync(file, "utf8");
  const visibleText = textContent(html);
  const title = value(html, /<title>([\s\S]*?)<\/title>/i);
  const description = value(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  const canonical = value(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  const robots = [...html.matchAll(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/gi)]
    .map((match) => match[1])
    .join(" | ");
  const h1 = value(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const schemaTypes = new Set();
  for (const match of jsonLd) {
    try {
      const parsed = JSON.parse(decode(match[1]));
      if (parsed["@type"]) schemaTypes.add(String(parsed["@type"]));
      if (Array.isArray(parsed["@graph"])) {
        for (const item of parsed["@graph"]) if (item?.["@type"]) schemaTypes.add(String(item["@type"]));
      }
    } catch {
      schemaTypes.add("INVALID_JSON_LD");
    }
  }

  const localProjectEvidence = /portfolio\/garage-door-installation-|Project proof near/i.test(html);
  const reviewSourcePresent = /bbb\.org|bestpickreports\.com/i.test(html);
  const imageCount = (html.match(/<img\b/gi) || []).length;
  const recommendation = localProjectEvidence ? "IMPROVE" : "MANUAL_REVIEW";

  return [{
    url: `https://securelifts.com${route === "/" ? "" : route}`,
    route_template: `/${segments.slice(0, -1).join("/")}/[city]`,
    service: segments.at(-2) || "",
    city,
    http_status: 200,
    canonical,
    indexable: !/noindex/i.test(robots),
    title,
    meta_description: description,
    h1,
    approximate_word_count: visibleText.split(/\s+/).filter(Boolean).length,
    internal_link_count: (html.match(/<a\b[^>]+href="\//gi) || []).length,
    structured_data_types: [...schemaTypes].join("|"),
    review_section_present: /Independent reviews and project evidence/i.test(visibleText),
    review_source_present: reviewSourcePresent,
    local_project_evidence_present: localProjectEvidence,
    local_photograph_evidence_present: imageCount > 1 && localProjectEvidence,
    potential_duplicate_group: segments.at(-2) || "",
    recommended_action: recommendation,
  }];
});

rows.sort((a, b) => a.url.localeCompare(b.url));
const headers = Object.keys(rows[0] || {});
const output = [headers.join(","), ...rows.map((row) => headers.map((header) => csv(row[header])).join(","))].join("\n");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${output}\n`);
console.log(`Wrote ${rows.length} location pages to ${path.relative(process.cwd(), outputPath)}.`);
