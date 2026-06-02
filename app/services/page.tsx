import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Services in South Florida | SecureLifts",
  description:
    "SecureLifts provides garage door repair, opener service, maintenance, installation, and hurricane-rated garage door service across South Florida.",
  alternates: {
    canonical: "https://securelifts.com/services",
  },
};

const services = [
  {
    title: "Garage Door Repair",
    text: "Fast help for stuck doors, noisy doors, broken cables, rollers, tracks, and safety issues.",
    href: "/garage-door-repair",
  },
  {
    title: "Broken Spring Repair",
    text: "Spring repair for heavy doors, snapped springs, and doors that will not open safely.",
    href: "/broken-spring-repair",
  },
  {
    title: "Garage Door Opener Repair",
    text: "Troubleshooting for opener motors, remotes, sensors, keypads, wall controls, and unreliable operation.",
    href: "/garage-door-opener-repair",
  },
  {
    title: "Garage Door Maintenance",
    text: "Preventive service to keep residential garage doors safer, quieter, and more dependable.",
    href: "/garage-door-maintenance",
  },
  {
    title: "Hurricane Garage Doors",
    text: "Impact-rated and wind-rated garage door options for South Florida homes.",
    href: "/hurricane-garage-doors",
  },
  {
    title: "Garage Door Installation",
    text: "New garage door installation with guidance on fit, finish, code requirements, and long-term value.",
    href: "/garage-door-installation",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
          SecureLifts services
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">
          Garage door services for South Florida homes and businesses.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
          Choose the service that matches the problem. SecureLifts helps with
          repair, maintenance, openers, installation, and hurricane-rated garage
          doors across Miami-Dade, Broward, and Palm Beach.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book-service"
            className="rounded-md bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800"
          >
            Book service
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-neutral-300 px-5 py-3 text-sm font-bold text-neutral-950 hover:border-neutral-500"
          >
            Contact SecureLifts
          </Link>
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-md border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
            >
              <h2 className="text-xl font-black">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                {service.text}
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-red-700">
                View service
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
