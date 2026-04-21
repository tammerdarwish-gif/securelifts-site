import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Industrial Door Repair | SecureLifts South Florida",
  description:
    "Industrial door repair in South Florida for warehouses, manufacturing facilities, distribution centers, and high-cycle environments. Fast, reliable repair for heavy-duty doors and systems.",
  alternates: {
    canonical: "https://securelifts.com/industrial-door-repair",
  },
};

const problems = [
  "Industrial door not opening or closing",
  "Heavy-duty spring failure",
  "Track misalignment or structural damage",
  "Operator failure on high-cycle systems",
  "Door slamming, dropping, or unsafe movement",
  "Wear from high-frequency usage",
];

const benefits = [
  "Reduce downtime and operational delays",
  "Restore safe door operation",
  "Extend lifespan of industrial systems",
  "Prevent costly repeat failures",
  "Support high-cycle performance demands",
  "Get clear repair vs replacement guidance",
];

const cityLinks = [
  { label: "Industrial Door Repair in Miami", href: "/industrial-door-repair/miami" },
  { label: "Industrial Door Repair in Fort Lauderdale", href: "/industrial-door-repair/fort-lauderdale" },
  { label: "Industrial Door Repair in West Palm Beach", href: "/industrial-door-repair/west-palm-beach" },
  { label: "Industrial Door Repair in Boca Raton", href: "/industrial-door-repair/boca-raton" },
  { label: "Industrial Door Repair in Delray Beach", href: "/industrial-door-repair/delray-beach" },
  { label: "Industrial Door Repair in Miami Beach", href: "/industrial-door-repair/miami-beach" },
];

export default function IndustrialDoorRepairPage() {
  return (
    <>
      <main className="bg-white text-slate-900">
        {/* HERO */}
        <section className="bg-slate-950 text-white px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black">
              Industrial Door Repair in South Florida
            </h1>

            <p className="mt-6 text-lg text-slate-200 max-w-3xl">
              Industrial doors take more abuse, more cycles, and more stress than
              standard systems. When something fails, it affects safety,
              productivity, and your entire operation. SecureLifts provides
              reliable industrial door repair built for real-world demand.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href={PHONE_HREF}
                className="bg-red-600 px-6 py-4 rounded-xl font-bold"
              >
                Call {PHONE}
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
              >
                Book Service
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="px-6 py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black">
              Industrial door problems we handle
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {problems.map((item) => (
                <div
                  key={item}
                  className="bg-white p-5 rounded-xl border flex gap-3"
                >
                  <FaTools className="text-red-600 mt-1" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black">
              Why industrial repair matters
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="bg-slate-50 p-5 rounded-xl border flex gap-3"
                >
                  <FaCheckCircle className="text-red-600 mt-1" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CITY LINKS */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black">
              Industrial door repair by city
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Browse live industrial door repair pages for major South Florida service areas.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cityLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white px-6 py-20 text-center">
          <h2 className="text-4xl font-black">
            Need Industrial Door Repair Now?
          </h2>

          <p className="mt-4 text-red-100">
            Call now for fast service and reliable repair solutions.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-black px-6 py-4 rounded-xl font-bold"
            >
              Call {PHONE}
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
            >
              Book Service
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}