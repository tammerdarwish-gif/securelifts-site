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

export default function GarageDoorRollerReplacementPage() {
  const signs = [
    "Garage door sounds loud or rough while moving",
    "Door shakes, jerks, or vibrates",
    "Rollers look worn, cracked, or damaged",
    "Door moves unevenly along the track",
    "Old metal rollers create excess noise",
    "Operation feels rougher than normal",
  ];

  const services = [
    {
      title: "Roller Replacement",
      text: "We replace worn or damaged rollers to help the garage door move more smoothly, quietly, and safely.",
      icon: <FaTools />,
    },
    {
      title: "Track & Hardware Inspection",
      text: "We inspect the surrounding hardware and track path to make sure new rollers perform correctly and are not stressed by another issue.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Smooth Operation Testing",
      text: "After replacement, we test travel and movement so the door runs cleaner and more reliably.",
      icon: <FaCheckCircle />,
    },
  ];

  const whyLeft = [
    "Fast response for rough or noisy door movement",
    "Cleaner, smoother door operation",
    "Professional workmanship with proper installation",
  ];

  const whyRight = [
    "We check surrounding hardware, not just the roller",
    "Clear communication throughout the service",
    "Built to improve performance and reduce wear",
  ];

  const reviews = [
    {
      name: "Samantha R.",
      text: "The garage door was noisy and rough for months. After the roller replacement it runs much smoother and quieter.",
    },
    {
      name: "Victor M.",
      text: "They explained the issue clearly and the door feels much better now. Strong service and clean work.",
    },
    {
      name: "Paul D.",
      text: "SecureLifts handled the roller replacement fast and the improvement was immediate. Big difference in noise and movement.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <Link href="/" className="block">
              <p className="text-2xl font-extrabold text-slate-950">
                SecureLifts
              </p>
            </Link>
            <p className="text-xs text-slate-500">
              Garage Doors • Repairs • Installation
            </p>
          </div>

          <div className="flex gap-3">
           
          </div>
        </div>
      </header>

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
              Garage Door Roller Replacement
            </p>

            <h1 className="text-5xl font-black md:text-6xl">
              Garage Door Roller Replacement in South Florida
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Worn rollers make garage doors louder, rougher, and harder on the
              rest of the system. SecureLifts replaces damaged or aging rollers
              to help restore smoother, quieter, and more dependable operation.
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
                Fast Service
              </span>
              <span className="inline-flex items-center gap-2">
                <FaShieldAlt />
                Smoother Operation
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Reliable Workmanship
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNS WITH IMAGE */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Signs
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Worn rollers affect noise, movement, and long-term wear
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Rollers help guide the garage door through the track. When they
              wear out, the door can become noisy, rough, shaky, and harder on
              the opener and surrounding hardware.
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
              src="/garage-door-roller-replacement.jpg"
              alt="Garage door roller replacement close-up"
              className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md">
              Worn Roller Issue
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Roller Replacement Service
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              The replacement should improve performance, not just swap parts
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Good roller service is not just about replacing a worn wheel. The
              surrounding track path, brackets, and movement pattern need to be
              checked so the system actually benefits from the repair.
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
            Need garage door roller replacement?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for smoother operation, less noise, and a garage
            door system that runs the way it should.
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
