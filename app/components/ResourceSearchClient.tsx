"use client";

import { useMemo, useState } from "react";
import type { ApprovalRecord } from "@/data/approvals";
import PDFPreviewModal from "./PDFPreviewModal";

type Props = {
  records: ApprovalRecord[];
};

export default function ResourceSearchClient({ records }: Props) {
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useState("All");
  const [source, setSource] = useState("All");
  const [category, setCategory] = useState("All");
  const [impactOnly, setImpactOnly] = useState(false);
  const [activePdf, setActivePdf] = useState<{
    title: string;
    pdfPath: string;
  } | null>(null);

  const manufacturers = useMemo(
    () => ["All", ...Array.from(new Set(records.map((r) => r.manufacturer))).sort()],
    [records]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return records.filter((r) => {
      const matchesQuery =
        !q ||
        r.manufacturer.toLowerCase().includes(q) ||
        r.series.toLowerCase().includes(q) ||
        r.approvalNumber.toLowerCase().includes(q);

      const matchesManufacturer =
        manufacturer === "All" || r.manufacturer === manufacturer;

      const matchesSource = source === "All" || r.source === source;
      const matchesCategory = category === "All" || r.category === category;
      const matchesImpact = !impactOnly || r.impactRated;

      return (
        matchesQuery &&
        matchesManufacturer &&
        matchesSource &&
        matchesCategory &&
        matchesImpact
      );
    });
  }, [records, query, manufacturer, source, category, impactOnly]);

  return (
    <>
      <div className="space-y-8">
        <div className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 xl:grid-cols-5">
          <input
            type="text"
            placeholder="Search manufacturer, series, approval number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-red-500 xl:col-span-2"
          />

          <select
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-red-500"
          >
            {manufacturers.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-red-500"
          >
            <option value="All">All Sources</option>
            <option value="Florida Product Approval">Florida Product Approval</option>
            <option value="Miami-Dade NOA">Miami-Dade NOA</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-red-500"
          >
            <option value="All">All Categories</option>
            <option value="Hurricane Garage Door">Hurricane Garage Door</option>
            <option value="Wind-Rated Garage Door">Wind-Rated Garage Door</option>
            <option value="Impact-Rated Garage Door">Impact-Rated Garage Door</option>
          </select>

          <label className="flex items-center gap-3 xl:col-span-5">
            <input
              type="checkbox"
              checked={impactOnly}
              onChange={(e) => setImpactOnly(e.target.checked)}
              className="h-4 w-4"
            />
            <span className="text-sm font-medium text-gray-700">
              Show impact-rated only
            </span>
          </label>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-0 border-b border-gray-200 px-6 py-4 text-sm font-semibold text-gray-500 md:grid-cols-[1.1fr_1.3fr_0.9fr_0.9fr_0.9fr_1fr]">
            <div>Manufacturer</div>
            <div>Series / Model</div>
            <div>Source</div>
            <div>Approval</div>
            <div>HVHZ</div>
            <div>Files</div>
          </div>

          {filtered.length === 0 ? (
            <div className="px-6 py-10 text-gray-600">
              No matching approvals found.
            </div>
          ) : (
            filtered.map((r) => (
              <div
                key={r.id}
                className="grid grid-cols-1 gap-4 border-b border-gray-100 px-6 py-5 md:grid-cols-[1.1fr_1.3fr_0.9fr_0.9fr_0.9fr_1fr]"
              >
                <div className="font-semibold text-gray-900">{r.manufacturer}</div>

                <div>
                  <div className="font-medium text-gray-900">{r.series}</div>
                  {r.notes ? (
                    <div className="mt-1 text-sm text-gray-600">{r.notes}</div>
                  ) : null}
                </div>

                <div className="text-gray-700">{r.source}</div>
                <div className="text-gray-700">{r.approvalNumber}</div>
                <div className="text-gray-700">{r.hvhz ? "Yes" : "No"}</div>

                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActivePdf({
                        title: `${r.manufacturer} — ${r.series}`,
                        pdfPath: r.pdfPath,
                      })
                    }
                    className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Preview PDF
                  </button>

                  <a
                    href={r.pdfPath}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    Open PDF
                  </a>

                  <a
                    href={r.officialUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                  >
                    Official Source
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <PDFPreviewModal
        isOpen={!!activePdf}
        onClose={() => setActivePdf(null)}
        pdfPath={activePdf?.pdfPath ?? ""}
        title={activePdf?.title ?? ""}
      />
    </>
  );
}