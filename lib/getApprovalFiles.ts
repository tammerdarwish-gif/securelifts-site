import fs from "fs";
import path from "path";

export type ApprovalFile = {
  name: string;
  title: string;
  url: string;
};

function cleanRawFileName(file: string) {
  return file
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\uFFFD/g, "") // explicit removal of replacement character �
    .replace(/\.pdf$/i, "")
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSpec(text: string) {
  const match = text.match(/\bW\d+\s*DP\d+[A-Z]?\b/i);
  return match ? match[0].toUpperCase().replace(/\s+/g, " ") : "";
}

function buildPrettyTitle(file: string) {
  let text = cleanRawFileName(file);

  const lower = text.toLowerCase();
  const spec = extractSpec(text);

  let primary = "";
  let secondary = "";

  if (lower.includes("canyon ridge")) primary = "Canyon Ridge";
  else if (lower.includes("coachman")) primary = "Coachman";
  else if (lower.includes("gallery")) primary = "Gallery";
  else if (lower.includes("full vision")) primary = "Full Vision";
  else if (lower.includes("commercial ribbed")) primary = "Commercial Ribbed";
  else if (lower.includes("commercial")) primary = "Commercial Series";
  else if (lower.includes("reserve")) primary = "Reserve";
  else if (lower.includes("insulated steel rolling door")) primary = "Insulated Steel Rolling Door";
  else if (lower.includes("insulated steel sectional")) primary = "Insulated Steel Sectional";
  else primary = text.split(" ").slice(0, 3).join(" ");

  if (primary !== "Coachman" && lower.includes("coachman")) {
    secondary = "Coachman Series";
  } else if (primary !== "Gallery" && lower.includes("gallery")) {
    secondary = "Gallery Series";
  } else if (primary !== "Canyon Ridge" && lower.includes("canyon ridge")) {
    secondary = "Canyon Ridge Series";
  } else if (primary !== "Full Vision" && lower.includes("full vision")) {
    secondary = "Full Vision Series";
  }

  let finalTitle = primary;

  if (secondary) {
    finalTitle += ` – ${secondary}`;
  }

  if (spec) {
    finalTitle += ` (${spec})`;
  }

  return finalTitle.replace(/\s+/g, " ").trim();
}

export function getApprovalFiles(manufacturer: string): ApprovalFile[] {
  const dirPath = path.join(
    process.cwd(),
    "public",
    "resources",
    "approvals",
    manufacturer
  );

  if (!fs.existsSync(dirPath)) return [];

  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.toLowerCase().endsWith(".pdf"));

  return files
    .map((file) => ({
      name: file,
      title: buildPrettyTitle(file),
      url: `/resources/approvals/${manufacturer}/${file}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}