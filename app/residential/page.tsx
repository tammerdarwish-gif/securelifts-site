import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Garage Door Services | SecureLifts",
  description:
    "SecureLifts provides residential garage door repair, opener repair, spring repair, maintenance, installation, and hurricane-rated garage door service in South Florida.",
  alternates: {
    canonical: "https://securelifts.com/residential",
  },
};

const residentialServices = [
  ["Garage Door Repair", "/garage-door-repair"],
  ["Broken Spring Repair", "/broken-spring-repair"],
  ["Garage Door Opener Repair", "/garage-door-opener-repair"],
  ["Garage Door Maintenance", "/garage-door-maintenance"],
  ["Garage Door Installation", "/garage-door-installation"],
  ["Hurricane Garage Doors", "/hurricane-garage-doors"],
];

export default function ResidentialServicesPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
          Residential service
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
          Residential garage door help without the runaround.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
          SecureLifts helps South Florida homeowners repair, maintain, upgrade,
          and replace residential garage doors and openers with clear guidance
          and professional service.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book-service"
            className="rounded-md bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"
          >
            Book service
          </Link>
          <Link
            href="/garage-door-repair"
            className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-bold text-neutral-950 hover:border-neutral-500"
          >
            Garage door repair
          </Link>
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-black">Residential services</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {residentialServices.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-md border border-neutral-200 bg-white px-5 py-4 text-sm font-bold shadow-sm hover:border-red-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
