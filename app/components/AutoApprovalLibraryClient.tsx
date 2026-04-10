"use client";

import { useMemo, useState } from "react";
import type { ApprovalFileRecord } from "@/lib/getAllApprovalFiles";

type Props = {
  records: ApprovalFileRecord[];
};

export default function AutoApprovalLibraryClient({ records }: Props) {
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useState("All");

  const manufacturers = useMemo(
    () => ["All", ...Array.from(new Set(records.map((r) => r.manufacturer))).sort()],
    [records]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();

    return records.filter((r) => {
      const matchQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.fileName.toLowerCase().includes(q);

      const matchManufacturer =
        manufacturer === "All" || r.manufacturer === manufacturer;

      return matchQuery && matchManufacturer;
    });
  }, [records, query, manufacturer]);

  return (
    <div className="space-y-10">
      {/* SEARCH BAR */}
      <div className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[1.6fr_0.8fr]">
        <input
          type="text"
          placeholder="Search documents (series, specs, etc.)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-red-500"
        />

        <select
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-red-500"
        >
          {manufacturers.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* RESULTS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((file) => (
          <div
            key={file.url}
            className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
          >
            <a href={file.url} target="_blank" className="block">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gray-500">
                {file.manufacturer}
              </p>

              <h3 className="`min-h-20` text-lg font-semibold text-gray-900 group-hover:text-red-600">
                {file.title}
              </h3>

              <div className="mt-4 rounded-2xl bg-gray-50 p-4">
                <p className="truncate text-sm text-gray-500">
                  {file.fileName}
                </p>
              </div>
            </a>

            <div className="mt-5 grid gap-3">
              <a
                href={file.url}
                target="_blank"
                className="flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700"
              >
                Open PDF
              </a>

              <a
                href={file.url}
                target="_blank"
                download
                className="flex items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Download
              </a>

              <a
                href={`/resources/${file.manufacturerSlug}`}
                className="flex items-center justify-center rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                View Manufacturer
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}