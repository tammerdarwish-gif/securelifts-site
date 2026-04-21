

import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaIndustry,
  FaTools,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { serviceRoutes } from "../../lib/serviceRoutes";

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
                className="border px-6 py-4 rounded-xl font-bold"
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
              className="border px-6 py-4 rounded-xl font-bold"
            >
              Book Service
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}