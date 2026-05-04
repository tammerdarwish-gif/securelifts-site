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
  FaWarehouse,
} from "react-icons/fa";

export default function GarageDoorPanelReplacementPage() {
  const signs = [
    "One or more panels are dented or cracked",
    "Door looks uneven after impact damage",
    "Panel damage affects appearance and operation",
    "Weather exposure has weakened sections of the door",
    "A vehicle or object hit the garage door",
    "You want to avoid full replacement if possible",
  ];

  const services = [
    {
      title: "Panel Damage Evaluation",
      text: "We inspect the damaged sections, surrounding hardware, and overall condition of the door to determine whether panel replacement is the right move.",
      icon: <FaTools />,
    },
    {
      title: "Panel Replacement Options",
      text: "If a matching or compatible panel is available, we help source the best replacement option and install it properly.",
      icon: <FaCheckCircle />,
    },
    {
      title: "System Alignment & Finish Review",
      text: "After panel replacement, we check alignment, movement, and overall appearance so the door looks and performs as it should.",
      icon: <FaShieldAlt />,
    },
  ];

  const whyLeft = [
    "Clear guidance on repair vs full replacement",
    "Clean installation with attention to door alignment",
    "Professional workmanship that protects appearance",
  ];

  const whyRight = [
    "We work to find the best match available",
    "Straight communication without guessing",
    "Focused on restoring both look and function",
  ];

  const manufacturersLeft = [
    "Clopay",
    "Amarr",
    "Wayne Dalton",
    "CHI",
  ];

  const manufacturersRight = [
    "Martin",
    "Hormann",
    "LiftMaster compatible systems",
    "Other major door lines when available",
  ];

  const reviews = [
    {
      name: "Brandon T.",
      text: "We had a damaged panel and thought the whole door needed to be replaced. SecureLifts helped us understand the options and handled it professionally.",
    },
    {
      name: "Nicole S.",
      text: "They were honest about what could be matched and what couldn’t. The final result looked much better than expected.",
    },
    {
      name: "Ray M.",
      text: "Strong communication, clean work, and they helped us avoid unnecessary replacement. Good experience overall.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
          {/* HERO */}
<section className="bg-slate-950 py-28 text-white">
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl"
    >
      <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-400">
        Garage Door Panel Replacement
      </p>

      <h1 className="text-5xl font-black leading-tight md:text-6xl">
        Damaged garage door panel? Get it handled fast and done right
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        A damaged panel can affect both the look and performance of your garage
        door. SecureLifts responds quickly, evaluates whether replacement is
        possible, and in many cases can complete panel replacement without
        requiring a full new door.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-300">
        If a matching panel is available, we move fast to restore your door and
        keep everything aligned, clean, and functioning properly.
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
          Fast Response Available
        </span>
        <span className="inline-flex items-center gap-2">
          <FaShieldAlt />
          Clean Panel Replacement
        </span>
        <span className="inline-flex items-center gap-2">
          <FaStar />
          Trusted Local Service
        </span>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img
        src="/Garage-door-panel-replacement.jpg"
        alt="Garage door panel damage requiring replacement"
        className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
      />

      {/* OVERLAY LABEL */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-md">
        Panel Damage Fixed Fast
      </div>
    </div>
  </div>
</section>

      {/* SIGNS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Common Reasons
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Panel damage can hurt both appearance and performance
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A damaged panel affects more than curb appeal. Depending on the
              severity, it can impact the door’s balance, structural integrity,
              and long-term movement. The right next step depends on the age,
              model, and condition of the existing system.
            </p>
          </div>

          <div className="grid gap-4">
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
      </section>

      {/* SERVICES */}
      <section className="border-t border-slate-100 bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Panel Replacement Service
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              The right solution starts with knowing whether replacement is worth it
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Some doors can be matched well. Some cannot. Some are better
              candidates for a full new door. The goal is to give the customer a
              straight answer and the best path forward for appearance, cost, and
              long-term value.
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

      {/* MANUFACTURERS */}
      <section className="border-t border-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 text-base font-bold uppercase tracking-[0.3em] text-red-600">
              Brand Access & Compatibility
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              We work with leading garage door manufacturers and product lines
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Panel replacement depends heavily on door brand, model age, style,
              color, and availability. SecureLifts works with leading
              manufacturers and compatible product lines to help identify the
              best panel replacement path when a match is available.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              If an exact panel match is no longer available, we help guide the
              customer toward the smartest next option instead of forcing a bad
              fit.
            </p>
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="mb-8 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
              <FaWarehouse className="text-xl" />
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                {manufacturersLeft.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-red-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {manufacturersRight.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FaCheckCircle className="shrink-0 text-red-600" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
            Need garage door panel replacement?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts for a straight evaluation, professional panel
            replacement options, and guidance on the best path forward for your
            door.
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