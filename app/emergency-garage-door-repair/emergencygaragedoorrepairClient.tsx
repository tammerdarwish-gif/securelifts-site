"use client";

import Link from "next/link";
import Image from "next/image";
import QuickLeadForm from "../components/QuickLeadForm";
import ApprovedProjectShowcase from "../components/ApprovedProjectShowcase";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBolt,
  FaClock,
  FaExclamationTriangle,
  FaTools,
  FaStar,
} from "react-icons/fa";

export default function EmergencyGarageDoorRepairPage() {
  const emergencies = [
    "Garage door won’t open or close",
    "Broken spring snapped suddenly",
    "Door stuck halfway or off track",
    "Garage door making loud grinding noise",
    "Opener stopped working unexpectedly",
    "Vehicle trapped inside garage",
  ];

  const services = [
    {
      title: "Same-Day Emergency Response",
      text: "Fast dispatch to your location so you’re not stuck waiting or dealing with a dangerous situation.",
      icon: <FaBolt />,
    },
    {
      title: "On-the-Spot Repairs",
      text: "Most emergency issues are fixed immediately on-site without delays or multiple visits.",
      icon: <FaTools />,
    },
    {
      title: "Full System Safety Check",
      text: "We don’t just fix the issue — we make sure the entire system is safe and working properly.",
      icon: <FaCheckCircle />,
    },
  ];

  const reasons = [
    "Fast response when you actually need it",
    "Experienced technicians (not guessing on-site)",
    "Fully equipped trucks for same-day repairs",
    "Honest recommendations — repair vs replace",
    "Clean work and professional communication",
    "Trusted across South Florida",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/emergency-garage-door-repair.JPG"
            alt="Emergency garage door repair service"
            fill
            priority
            className="object-cover object-[center_right] opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

          {/* LEFT */}
          <div className="max-w-xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-400">
              Emergency Garage Door Repair
            </p>

            <h1
              className="text-5xl font-black leading-tight text-white md:text-6xl"
              style={{ textShadow: "0 3px 14px rgba(0,0,0,0.72)" }}
            >
              Garage door emergency? Get it fixed fast today
            </h1>

            <p
              className="mt-6 text-lg leading-8 text-slate-100"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.62)" }}
            >
              When your garage door stops working, you don’t have time to wait.
              SecureLifts responds fast, diagnoses the issue immediately, and
              gets your door working again the same day in most cases.
            </p>

            <div className="mt-8 hidden flex-wrap gap-4 sm:flex">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold !text-white hover:bg-red-700"
              >
                Call Now (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white bg-white/10 px-8 py-4 font-bold !text-white backdrop-blur hover:bg-white hover:!text-slate-950"
              >
                Book Emergency Service
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <FaClock />
                Same-Day Service
              </span>
              <span className="inline-flex items-center gap-2">
                <FaBolt />
                Fast Response
              </span>
              <span className="inline-flex items-center gap-2">
                <FaStar />
                Top Rated Service
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] shadow-xl md:h-[560px]">
                <Image
                src="/images/approved/service-van-at-door-card.jpg"
                alt="SecureLifts emergency garage door service vehicle"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-md">
              Emergency Service Available
            </div>
          </div>
        </div>
      </section>

      <ApprovedProjectShowcase
        variant="repair"
        eyebrow="Emergency Repair Proof"
        heading="Real repair situations, not generic promises"
        intro="Emergency visitors need confidence fast. These approved photos show damaged-door scenarios, service presence, and real technician work so customers know SecureLifts can help."
      />

      {/* EMERGENCY SIGNS */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Common Emergencies
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              These problems need immediate attention
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Garage door issues can quickly become safety hazards or leave your
              home exposed. If you’re dealing with any of these problems, it’s
              best to get it handled immediately.
            </p>
          </div>

          <div className="grid gap-4">
            {emergencies.map((item) => (
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
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["Stuck door", "When the door will not open, close, or move safely."],
            ["Broken spring", "When the spring snaps and the door becomes too heavy."],
            ["Unsafe opening", "When the home or garage is exposed and needs fast help."],
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-red-600 bg-slate-50 px-6 py-5">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Emergency Repair Service
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Fast diagnosis. Immediate repair. No wasted time.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our goal is simple — fix the problem as fast as possible while
              making sure your garage door is safe and reliable again.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {services.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border bg-white p-8 shadow-sm"
              >
                <div className="mb-4 text-red-600">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-4xl font-black md:text-5xl">
            Why SecureLifts
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((item) => (
              <div key={item} className="flex gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
          <h2 className="text-4xl font-black md:text-5xl">
            Need emergency garage door repair now?
          </h2>

          <p className="mt-5 text-lg text-red-50">
            Call SecureLifts now and get your garage door fixed today.
          </p>

          <div className="mt-8 hidden flex-wrap gap-4 sm:flex">
            <a
              href="tel:8668281818"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold !text-white"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="rounded-xl border border-white px-8 py-4 font-bold !text-white hover:bg-white hover:!text-slate-950"
            >
              Book Service
            </Link>
          </div>
          </div>

          <QuickLeadForm
            defaultService="Emergency Garage Door Repair"
            title="Send Emergency Request"
            intro="If your door is stuck, unsafe, or will not close, send details here or call now."
          />
        </div>
      </section>
    </main>
  );
}
