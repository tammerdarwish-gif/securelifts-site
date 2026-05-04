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

export default function SpringReplacementPage() {
  const warningSigns = [
    "Garage door feels heavy or won’t lift",
    "Visible gap in the spring",
    "Door opens unevenly or gets stuck",
    "Loud snap or bang from the garage",
    "Opener strains but door barely moves",
    "Cables look loose after spring failure",
  ];

  const servicePoints = [
    {
      title: "Broken Spring Replacement",
      text: "We replace damaged torsion and extension springs so the door can operate safely and correctly again.",
      icon: <FaBolt className="text-xl" />,
    },
    {
      title: "High-Cycle Spring Options",
      text: "Upgrade to stronger spring options designed for longer life and better long-term performance.",
      icon: <FaShieldAlt className="text-xl" />,
    },
    {
      title: "System Balance & Safety Check",
      text: "Spring replacement should include proper balancing, hardware inspection, and safe door operation testing.",
      icon: <FaTools className="text-xl" />,
    },
  ];

  const whyUs = [
    "Fast response for broken spring issues",
    "Correct spring sizing for safer performance",
    "Clean, professional workmanship",
    "Attention to full system balance and safety",
    "Straight communication with no nonsense",
    "Focused on reliable long-term results",
  ];

  const reviews = [
    {
      name: "Robert M.",
      text: "Spring broke suddenly and SecureLifts handled it fast. The door runs smooth again and the whole job felt professional.",
    },
    {
      name: "Angela T.",
      text: "They explained the issue clearly, replaced the springs, and made sure everything was balanced right before leaving.",
    },
    {
      name: "Steven P.",
      text: "Strong service, fast turnaround, and no runaround. Exactly what I needed when the garage door stopped working.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <Link href="/" className="block">
              <p className="text-2xl font-extrabold tracking-tight text-slate-950">
                SecureLifts
              </p>
            </Link>
            <p className="text-xs text-slate-500">
              Garage Doors • Repairs • Installation
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <FaPhoneAlt />
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="rounded-xl border border-slate-300 px-5 py-3 font-semibold transition hover:bg-slate-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Spring Replacement
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Garage Door Spring Replacement in South Florida
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A broken garage door spring can stop the entire system, create a
              safety risk, and leave your door too heavy to operate. SecureLifts
              replaces garage door springs with the right fit, proper balance,
              and workmanship built for dependable performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
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
                Safe Replacement
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Built for Reliability
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Signs Your Springs Failed
            </p>

            <h2 className="text-5xl font-black leading-tight">
              When a spring breaks, the whole garage door system feels it
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Springs carry the lifting force of the garage door. When one
              breaks, the door can become heavy, uneven, unsafe, or completely
              unusable. This is not something to force open or ignore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid gap-4"
          >
            {warningSigns.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaCheckCircle className="shrink-0 text-red-600" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Spring Replacement Service
            </p>

            <h2 className="text-5xl font-black leading-tight text-slate-950">
              The replacement should be done right, not rushed
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Spring replacement is not just swapping parts. The spring must be
              sized correctly, installed safely, and paired with a full balance
              check so the door runs smoothly and the opener is not overstressed.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {servicePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
            Why SecureLifts
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Broken spring service should restore confidence, not create more problems
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A rushed spring job can leave the door poorly balanced, unsafe, or
            hard on the opener. SecureLifts focuses on getting the repair done
            cleanly, safely, and with the kind of attention that supports long-term
            performance.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {whyUs.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                <FaShieldAlt className="text-lg" />
              </div>

              <p className="text-lg font-semibold leading-7 text-slate-900">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
              Customer Feedback
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Spring replacement needs speed, trust, and solid execution
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-4 text-yellow-400">★★★★★</div>
                <p className="leading-7 text-slate-300">{review.text}</p>
                <p className="mt-6 font-bold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-red-600 text-white">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h2 className="text-5xl font-black leading-tight">
            Need garage door spring replacement?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for fast service, safe replacement, and a door that
            operates the way it should.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
  href="tel:8668281818"
  className="rounded-xl bg-slate-950 px-8 py-4 font-bold text-white transition hover:bg-black"
>
  Call (866) 828-1818
</a>

            <Link
              href="/book-service"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}