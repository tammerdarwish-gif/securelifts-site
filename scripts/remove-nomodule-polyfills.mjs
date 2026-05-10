import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const serverDir = join(process.cwd(), ".next", "server");
const staticChunksDir = join(process.cwd(), ".next", "static", "chunks");
const polyfillScriptPattern =
  /<script\b(?=[^>]*\bsrc=["']\/_next\/static\/chunks\/polyfills-[^"']+\.js["'])(?=[^>]*\b(?:noModule|nomodule)\b)[^>]*>\s*<\/script>/g;
const polyfillPreloadPattern =
  /<link\b(?=[^>]*\bhref=["']\/_next\/static\/chunks\/polyfills-[^"']+\.js["'])[^>]*>/g;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    })
  );

  return files.flat();
}

let updated = 0;

for (const file of await walk(serverDir)) {
  if (!file.endsWith(".html") && !file.endsWith(".js")) continue;

  const html = await readFile(file, "utf8");
  const nextHtml = html
    .replace(polyfillScriptPattern, "")
    .replace(polyfillPreloadPattern, "")
    .replace(/polyfillFiles:\[[^\]]*\]/g, "polyfillFiles:[]");

  if (nextHtml !== html) {
    await writeFile(file, nextHtml);
    updated += 1;
  }
}

let removedFiles = 0;

try {
  const chunks = await readdir(staticChunksDir, { withFileTypes: true });
  await Promise.all(
    chunks.map(async (entry) => {
      if (!entry.isFile() || !/^polyfills-.*\.js$/.test(entry.name)) return;
      await rm(join(staticChunksDir, entry.name));
      removedFiles += 1;
    })
  );
} catch {
  // Some build outputs do not include a static chunks directory.
}

console.log(
  `Removed legacy nomodule polyfills from ${updated} HTML files and deleted ${removedFiles} polyfill chunks.`
);
