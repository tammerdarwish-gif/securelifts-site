"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaClock,
  FaStar,
  FaTools,
} from "react-icons/fa";

export default function GarageDoorOpenerRepairPage() {
  const issues = [
    "Opener not responding to remote or wall button",
    "Garage door reverses or stops midway",
    "Grinding or loud motor noise",
    "Remote or keypad not syncing",
    "Door opens unevenly or inconsistently",
    "Motor runs but door does not move",
  ];

  const services = [
    {
      title: "Opener Diagnostics",
      text: "We identify electrical, mechanical, and signal issues so the repair starts with the right answer.",
      icon: <FaBolt />,
    },
    {
      title: "Motor & Gear Repair",
      text: "Repair or replace worn internal components affecting performance and reliability.",
      icon: <FaTools />,
    },
    {
      title: "Sensor & Safety Adjustment",
      text: "Ensure sensors and limits are aligned for safe, consistent operation.",
      icon: <FaShieldAlt />,
    },
  ];

  const whyLeft = [
    "Fast response for opener issues",
    "Accurate diagnostics without guesswork",
    "Clean, professional workmanship",
  ];

  const whyRight = [
    "We fix the cause, not just the symptom",
    "Clear communication start to finish",
    "Built for long-term reliability",
  ];

  const reviews = [
    {
      name: "Daniel K.",
      text: "Our opener stopped working and SecureLifts fixed it quickly without pushing unnecessary replacements.",
    },
    {
      name: "Lisa M.",
      text: "They diagnosed the issue fast and got everything working smoothly again.",
    },
    {
      name: "Chris B.",
      text: "Professional, efficient, and honest. The opener works perfectly now.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
         {/* HERO */}
      <section className="bg-slate-950 text-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Garage Door Opener Repair
            </p>

            <h1 className="text-5xl font-black md:text-6xl">
              Garage Door Opener Repair in South Florida
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-8">
              When your opener fails, it disrupts your entire day. SecureLifts
              restores smooth, reliable operation quickly and correctly.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-black"
              >
                Book Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-28 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Problems
            </p>

            <h2 className="text-4xl font-black">
              Opener issues can stop the entire system
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              When one component fails, the entire system becomes unreliable or
              stops working completely.
            </p>
          </div>

          <div className="grid gap-4">
            {issues.map((item) => (
              <div
                key={item}
                className="flex gap-3 items-center bg-slate-50 border rounded-2xl px-5 py-4"
              >
                <FaCheckCircle className="text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Repair Services
            </p>

            <h2 className="text-4xl font-black">
              Proper diagnostics lead to the right fix
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {services.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-3xl border shadow-sm"
              >
                <div className="text-red-600 mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECURELIFTS */}
      <section className="py-28 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">
            Why SecureLifts
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {whyLeft.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {whyRight.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 border-t border-slate-800 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">
            Customer Feedback
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white/5 p-8 rounded-3xl">
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-300">{r.text}</p>
                <p className="mt-6 font-bold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black">
            Need garage door opener repair?
          </h2>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:8668281818"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold text-white"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-black"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}