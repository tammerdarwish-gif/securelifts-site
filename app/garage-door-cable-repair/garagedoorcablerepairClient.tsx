"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaExclamationTriangle,
  FaClock,
  FaStar,
  FaTools,
} from "react-icons/fa";

export default function GarageDoorCableRepairPage() {
  const signs = [
    "Cable looks loose, frayed, or hanging",
    "Garage door lifts unevenly or jerks while moving",
    "One side of the door drops lower than the other",
    "Door gets stuck halfway or slams shut",
    "Cables came off the drum",
    "Door feels unsafe to operate manually or with the opener",
  ];

  const services = [
    {
      title: "Cable Repair & Replacement",
      text: "We repair or replace damaged garage door cables so the system can lift evenly and operate safely again.",
      icon: <FaTools />,
    },
    {
      title: "Drum & Hardware Correction",
      text: "We inspect the drums, brackets, rollers, and related hardware to correct the condition that caused the cable problem.",
      icon: <FaShieldAlt />,
    },
    {
      title: "System Balance & Safety Testing",
      text: "Once the cable issue is corrected, we test door travel, spring balance, and overall operation for safer long-term performance.",
      icon: <FaCheckCircle />,
    },
  ];

  const whyLeft = [
    "Fast response for urgent cable issues",
    "Clean correction of cable and hardware problems",
    "Professional workmanship that restores confidence",
  ];

  const whyRight = [
    "We address the cause, not just the visible failure",
    "Clear communication from start to finish",
    "Repairs focused on safe, reliable operation",
  ];

  const reviews = [
    {
      name: "Maria G.",
      text: "One cable snapped and the door looked dangerous. SecureLifts handled it fast and made the whole system feel solid again.",
    },
    {
      name: "Kevin R.",
      text: "They explained exactly what failed, fixed it cleanly, and checked the rest of the door before leaving.",
    },
    {
      name: "Paul S.",
      text: "Fast service, strong work, and no guessing. The garage door runs smooth again and feels safe.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
          {/* HERO */}
      <section className="bg-slate-950 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Garage Door Cable Repair
            </p>

            <h1 className="text-5xl font-black md:text-6xl">
              Garage Door Cable Repair in South Florida
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Damaged or broken garage door cables create an unstable system and
              can turn into a serious safety issue fast. SecureLifts repairs
              cable problems correctly and restores smooth operation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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

      {/* SIGNS WITH IMAGE */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          
          {/* LEFT */}
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Signs
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Cable problems affect balance and safety
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              When a cable fails, the door becomes uneven and unstable. Continuing
              to use it can cause more damage or create a dangerous situation.
            </p>

            <div className="mt-10 grid gap-4">
              {signs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <FaExclamationTriangle className="text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/broken-garage-door-cable.jpg"
              alt="Broken garage door cable example"
              className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
            />

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md">
              Broken Cable Hazard
            </div>
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-black">
            Why SecureLifts
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {whyLeft.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <FaCheckCircle className="text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {whyRight.map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <FaCheckCircle className="text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-28 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-black">
            Need garage door cable repair?
          </h2>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:8668281818"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold"
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