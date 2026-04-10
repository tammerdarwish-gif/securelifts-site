import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ResourceSearchClient from "../../components/ResourceSearchClient";
import { approvalRecords } from "../../../data/approvals";

export const metadata: Metadata = {
  title: "Hurricane Garage Door Approvals & NOA | SecureLifts",
  description:
    "Search hosted Miami-Dade NOA and Florida Product Approval PDFs for hurricane garage doors by manufacturer, including Raynor.",
};

export default function HurricaneGarageDoorApprovalsPage() {
  return (
    <main className="bg-white text-gray-900">
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Resources", href: "https://securelifts.com/resources" },
          {
            label: "Hurricane Garage Door Approvals",
            href: "https://securelifts.com/resources/hurricane-garage-door-approvals",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Hurricane Garage Door Approvals" },
        ]}
      />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Technical Resources
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Hurricane Garage Door Approvals & NOA Library
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/85">
            Search hosted approval packets by manufacturer, product series, and
            source database. Use this library to compare official Florida Product
            Approval and Miami-Dade NOA documents for hurricane garage doors.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <ResourceSearchClient records={approvalRecords} />
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              How This Library Works
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Hosted PDFs with Official Source Verification
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-700">
              SecureLifts can host local copies of product approvals and NOAs for
              easier customer access, while the official Florida and Miami-Dade
              systems remain the source of truth.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              This setup gives you a fast searchable library on your own site,
              while still preserving direct links to the official approval
              records.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Next Expansion
            </p>

            <h3 className="mb-4 text-2xl font-bold">
              Add More Manufacturers Over Time
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Raynor",
                "Clopay",
                "Amarr",
                "Wayne Dalton",
                "Haas",
                "CHI",
                "DAB Hurricane Master",
              ].map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800"
                >
                  {brand}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}