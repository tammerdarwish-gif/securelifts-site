import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | SecureLifts",
  description:
    "The requested SecureLifts page could not be found. Browse garage door services or contact our South Florida team.",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  ["Garage Door Repair", "/garage-door-repair"],
  ["Broken Spring Repair", "/broken-spring-repair"],
  ["Garage Door Openers", "/garage-door-opener"],
  ["Hurricane Garage Doors", "/hurricane-garage-doors"],
  ["Commercial Services", "/commercial-garage-door-services"],
  ["Service Areas", "/locations"],
] as const;

export default function NotFound() {
  return (
    <main className="bg-slate-50 px-6 py-20 text-slate-950">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          The link may be outdated or the page may have moved. Use one of the
          service links below, return home, or call SecureLifts for help.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-800"
          >
            Return Home
          </Link>
          <a
            href="tel:+18668281818"
            data-campaign="404_phone_click"
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-black"
          >
            Call (866) 828-1818
          </a>
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Book Service
          </Link>
        </div>

        <nav aria-label="Helpful service links" className="mt-10 grid gap-3 sm:grid-cols-2">
          {helpfulLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold text-slate-900 transition hover:border-red-200 hover:bg-white hover:text-red-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
