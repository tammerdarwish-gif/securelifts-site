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

export default function GarageDoorOffTrackRepairPage() {
  const signs = [
    "Garage door looks crooked or uneven",
    "Rollers have come out of the track",
    "Door jams halfway or drags while moving",
    "Grinding, scraping, or popping noises",
    "Cable appears loose after the door shifted",
    "Door feels unsafe to open or close",
  ];

  const services = [
    {
      title: "Track Realignment",
      text: "We correct misalignment and restore the track path so the garage door can move smoothly and safely again.",
      icon: <FaTools />,
    },
    {
      title: "Roller & Hardware Correction",
      text: "We inspect rollers, brackets, hinges, and related hardware to correct the cause of the off-track condition.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Balance & Safety Testing",
      text: "Once the door is back on track, we test operation, travel, and overall balance to reduce future issues.",
      icon: <FaCheckCircle />,
    },
  ];

  const whyLeft = [
    "Fast response for urgent off-track problems",
    "Proper alignment and track correction",
    "Clean, professional workmanship",
  ];

  const whyRight = [
    "We fix the cause, not just the symptom",
    "Clear communication start to finish",
    "Built to make homeowners feel confident calling",
  ];

  const reviews = [
    {
      name: "Erica L.",
      text: "The garage door came off track and looked dangerous. SecureLifts got it corrected fast and everything felt solid again.",
    },
    {
      name: "Mark J.",
      text: "They explained what caused the issue, fixed it cleanly, and made sure the door was running right before leaving.",
    },
    {
      name: "Anthony P.",
      text: "Quick response, strong work, and no nonsense. The door is smooth again and the whole service felt professional.",
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
              Garage Door Off Track Repair
            </p>

            <h1 className="text-5xl font-black md:text-6xl">
              Garage Door Off Track Repair in South Florida
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              An off-track garage door is not something to force shut or keep
              using. SecureLifts corrects off-track garage door problems safely,
              restores proper alignment, and gets the system operating the way
              it should.
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

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <FaClock />
                Fast Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaShieldAlt />
                Safe Correction
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Reliable Workmanship
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Signs
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Off-track garage doors become a safety issue fast
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              When the door shifts off its track, the entire system becomes
              unstable. The longer it is forced or ignored, the more damage it
              can cause to rollers, cables, panels, and opener components.
            </p>

            <div className="mt-10 grid gap-4">
              {signs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <FaExclamationTriangle className="shrink-0 text-red-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/offtrack-worse.jpg"
              alt="Garage door off track problem example"
              className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-red-600/95 px-5 py-2 text-sm font-semibold text-white shadow-md backdrop-blur">
              Unsafe Condition
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Repair Services
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Off-track repair should fix alignment and the cause behind it
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Putting the door back in place is only part of the job. The real
              fix is correcting the track issue, checking the related hardware,
              and making sure the system is safe to use again.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SECURELIFTS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Why SecureLifts
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              {whyLeft.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {whyRight.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-slate-800 bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-4xl font-black md:text-5xl">
            Customer Feedback
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-3xl bg-white/5 p-8">
                <div className="mb-4 text-yellow-400">★★★★★</div>
                <p className="text-slate-300">{review.text}</p>
                <p className="mt-6 font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Need garage door off-track repair?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for fast correction, safe handling, and a garage
            door system you can trust again.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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