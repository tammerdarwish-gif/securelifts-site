import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import AutoApprovalLibraryClient from "../components/AutoApprovalLibraryClient";
import { getAllApprovalFiles } from "@/lib/getAllApprovalFiles";

export const metadata: Metadata = {
  title: "Garage Door Resources, Manuals & Approvals | SecureLifts",
  description:
    "Browse SecureLifts garage door resources, opener manual guides, hurricane approvals, NOAs, and Florida Product Approvals.",
};

export default function HurricaneGarageDoorApprovalsPage() {
  const records = getAllApprovalFiles();

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
            SecureLifts Resource Center
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Garage Door Resources, Manuals & Approvals
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/85">
            Helpful garage door information for South Florida homeowners,
            including opener model guides, safe troubleshooting resources,
            hurricane approvals, NOAs, and Florida Product Approvals.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Link
            href="/resources/garage-door-opener-manuals"
            className="rounded-3xl border border-red-100 bg-red-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Opener Manual Guide
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              LiftMaster / Raynor opener manuals and model names
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Keep customers on SecureLifts with model-name matching, safe
              homeowner checks, opener troubleshooting, and repair-or-replace
              guidance.
            </p>
            <span className="mt-6 inline-flex rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white">
              Open Opener Resources
            </span>
          </Link>

          <Link
            href="/resources/hurricane-garage-door-approvals"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
              Approval Library
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              Hurricane garage door approvals
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Search approval documents by manufacturer, product line, and file
              name in one organized SecureLifts library.
            </p>
            <span className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white">
              Browse Approval Documents
            </span>
          </Link>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <AutoApprovalLibraryClient records={records} />
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Trusted Resource Center
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Easier Access to Approval Documents
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-700">
              This library is built to give homeowners, contractors, property
              managers, and builders a faster way to find hurricane garage door
              approval documents without jumping between multiple manufacturer
              and government websites.
            </p>

            <p className="mb-5 text-lg leading-8 text-gray-700">
              It gives you a cleaner, more organized place to review documents,
              compare options, and find the product information tied to
              storm-rated garage door systems.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              For final confirmation, approvals should still be checked against
              the official Florida and Miami-Dade sources. This library is also
              continuing to grow so more manufacturers, models, and approval
              files are added over time.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
              Expanding Library
            </p>

            <h3 className="mb-4 text-2xl font-bold">
              More Manufacturers and Approval Files Added Regularly
            </h3>

            <p className="mb-6 leading-7 text-gray-700">
              This resource center is being expanded to make it easier to find
              approval documents by manufacturer, product type, and document
              name, all in one place.
            </p>

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

              <a
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Book Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
