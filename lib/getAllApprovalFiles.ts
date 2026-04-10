import fs from "fs";
import path from "path";

export type ApprovalFileRecord = {
  manufacturer: string;
  manufacturerSlug: string;
  fileName: string;
  title: string;
  url: string;
};

function formatManufacturerName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatTitle(file: string) {
  let name = file
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\.pdf$/i, "")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const lower = name.toLowerCase();

  let series = "";
  let model = "";
  let spec = "";

  // Detect main series
  if (lower.includes("canyon ridge")) {
    series = "Canyon Ridge";
  } else if (lower.includes("coachman")) {
    series = "Coachman";
  } else if (lower.includes("gallery")) {
    series = "Gallery";
  } else if (lower.includes("commercial")) {
    series = "Commercial Series";
  } else if (lower.includes("full vision")) {
    series = "Full Vision";
  } else if (lower.includes("ribbed")) {
    series = "Commercial Ribbed";
  } else {
    series = name.split(" ")[0];
  }

  // Detect sub-series (Coachman etc.)
  if (lower.includes("coachman")) {
    model = "Coachman Series";
  }

  // Extract W / DP values
  const match = name.match(/W\d+\s*DP\d+[A-Z]?/i);
  if (match) {
    spec = match[0].toUpperCase();
  }

  // Build final title
  let finalTitle = series;

  if (model && !finalTitle.includes(model)) {
    finalTitle += ` – ${model}`;
  }

  if (spec) {
    finalTitle += ` (${spec})`;
  }

  return finalTitle;
}

export function getAllApprovalFiles(): ApprovalFileRecord[] {
  const approvalsRoot = path.join(process.cwd(), "public", "resources", "approvals");

  if (!fs.existsSync(approvalsRoot)) return [];

  const manufacturerFolders = fs
    .readdirSync(approvalsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const allFiles: ApprovalFileRecord[] = [];

  for (const manufacturerSlug of manufacturerFolders) {
    const manufacturerDir = path.join(approvalsRoot, manufacturerSlug);

    const pdfs = fs
      .readdirSync(manufacturerDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".pdf"))
      .map((entry) => entry.name);

    const manufacturer = formatManufacturerName(manufacturerSlug);

    for (const fileName of pdfs) {
      allFiles.push({
        manufacturer,
        manufacturerSlug,
        fileName,
        title: formatTitle(fileName),
        url: `/resources/approvals/${manufacturerSlug}/${fileName}`,
      });
    }
  }

  return allFiles.sort((a, b) => {
    if (a.manufacturer !== b.manufacturer) {
      return a.manufacturer.localeCompare(b.manufacturer);
    }

    return a.title.localeCompare(b.title);
  });
}