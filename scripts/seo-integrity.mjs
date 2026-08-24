import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const textFiles = [];

function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else if (/\.(ts|tsx)$/.test(entry.name)) textFiles.push(fullPath);
  }
}

collect(path.join(root, "app"));
collect(path.join(root, "lib"));

const source = textFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const sitemap = fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8");
const layout = fs.readFileSync(path.join(root, "app/layout.tsx"), "utf8");
const notFound = fs.readFileSync(path.join(root, "app/not-found.tsx"), "utf8");

for (const fabricatedReviewName of ["Michael R.", "Jessica T.", "Daniel P.", "Alicia T."]) {
  assert.equal(source.includes(fabricatedReviewName), false, `Remove fabricated review: ${fabricatedReviewName}`);
}

assert.equal(source.includes('"@type": "GarageDoorRepair"'), false, "Use supported schema types");
assert.equal(source.includes("const reviews = ["), false, "Do not ship unattributed review arrays");
assert.equal(source.includes("★★★★★"), false, "Do not imply an unverified five-star rating");
assert.equal(source.includes("preferred canonical URL"), false, "Do not expose crawler instructions as page copy");
assert.equal(layout.includes("alternates:"), false, "Root layout must not force one canonical on every route");
assert.match(notFound, /robots:\s*{[\s\S]*?index:\s*false/);
assert.match(sitemap, /excludedStaticPaths/);
assert.match(sitemap, /\/ads\/garage-door-repair/);
assert.equal(sitemap.includes("lastModified: new Date"), false, "Do not fabricate modification dates");

console.log(`SEO integrity checks passed across ${textFiles.length} source files.`);
