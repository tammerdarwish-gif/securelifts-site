"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaTools,
  FaOilCan,
  FaSearch,
} from "react-icons/fa";

export default function GarageDoorMaintenancePage() {
  const signs = [
    "Garage door is getting noisier over time",
    "Movement feels rough, jerky, or uneven",
    "Door opens slower than it used to",
    "Hardware looks loose or worn",
    "Rollers, hinges, or tracks need attention",
    "You want to prevent expensive future repairs",
  ];

  const services = [
    {
      title: "Full System Inspection",
      text: "We inspect springs, rollers, cables, hinges, track alignment, opener function, and overall door condition to catch problems early.",
      icon: <FaSearch />,
    },
    {
      title: "Lubrication & Adjustment",
      text: "We lubricate key moving parts and make operating adjustments that help the door run smoother and reduce unnecessary wear.",
      icon: <FaOilCan />,
    },
    {
      title: "Safety & Performance Tune-Up",
      text: "We test balance, opener response, travel limits, and reversal systems so the door works more safely and reliably.",
      icon: <FaTools />,
    },
  ];

  const whyLeft = [
    "Helps prevent breakdowns before they happen",
    "Improves smoothness, noise, and daily operation",
    "Extends the life of major door components",
  ];

  const whyRight = [
    "Clear maintenance recommendations without pressure",
    "Professional inspection with attention to detail",
    "Built to protect your system long-term",
  ];

  const reviews = [
    {
      name: "Angela R.",
      text: "The tune-up made a huge difference. The door is quieter, smoother, and feels much better than before.",
    },
    {
      name: "Jason T.",
      text: "They found a couple issues before they turned into major repairs. Smart service and very professional.",
    },
    {
      name: "Melissa P.",
      text: "SecureLifts cleaned everything up, adjusted the system, and explained what to watch moving forward. Great experience.",
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
              Garage Door Maintenance / Tune-Up
            </p>

            <h1 className="text-5xl font-black md:text-6xl">
              Garage Door Maintenance & Tune-Up in South Florida
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Garage door maintenance is one of the smartest ways to reduce
              breakdowns, improve daily performance, and protect the life of
              your system. SecureLifts provides professional tune-up service
              that keeps your garage door running smoother, quieter, and safer.
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
                Preventive Service
              </span>
              <span className="inline-flex items-center gap-2">
                <FaShieldAlt />
                Safer Operation
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Long-Term Protection
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              When Maintenance Makes Sense
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Small warning signs usually show up before major failures
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Most garage door problems do not appear out of nowhere. Noise,
              rough movement, worn hardware, and poor balance usually build up
              first. A proper tune-up helps catch those issues early and reduce
              the chance of costly repairs later.
            </p>
          </div>

          <div className="grid gap-4">
            {signs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <FaCheckCircle className="shrink-0 text-red-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Maintenance Service
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              A proper tune-up should improve performance and spot problems early
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Real maintenance is more than spraying lubricant and leaving. The
              system should be inspected, adjusted, tested, and reviewed so the
              door works better now and stays in stronger shape over time.
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
            Need a garage door tune-up?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for professional maintenance that helps prevent
            breakdowns, improve performance, and protect your garage door system.
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