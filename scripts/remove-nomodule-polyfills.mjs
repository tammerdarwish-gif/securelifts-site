import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const appDir = join(process.cwd(), ".next", "server", "app");
const polyfillScriptPattern =
  /<script\s+src="\/_next\/static\/chunks\/polyfills-[^"]+\.js"\s+noModule="">\s*<\/script>/g;

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

for (const file of await walk(appDir)) {
  if (!file.endsWith(".html")) continue;

  const html = await readFile(file, "utf8");
  const nextHtml = html.replace(polyfillScriptPattern, "");

  if (nextHtml !== html) {
    await writeFile(file, nextHtml);
    updated += 1;
  }
}

console.log(`Removed legacy nomodule polyfill scripts from ${updated} HTML files.`);
