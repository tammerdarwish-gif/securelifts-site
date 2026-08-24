"use client";

import Link from "next/link";
import Image from "next/image";
import VerifiedReviewLinks from "@/app/components/VerifiedReviewLinks";
import QuickLeadForm from "../components/QuickLeadForm";
import ApprovedProjectShowcase from "../components/ApprovedProjectShowcase";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
         {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/belt-drive-openers.png"
            alt="Garage door opener repair and replacement"
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/86 to-slate-950/40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
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

            <div className="mt-8 hidden gap-4 sm:flex sm:flex-wrap">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold !text-white hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white bg-white/10 px-8 py-4 font-bold !text-white backdrop-blur hover:bg-white hover:!text-black"
              >
                Book Service
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur"
          >
            <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-900 md:h-80">
            <Image
                src="/images/approved/technician-opener-service-card.jpg"
                alt="SecureLifts technician servicing a garage door opener"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                Opener Help
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Remote, sensor, motor, or smart opener issue?
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                We diagnose the opener and the door system together so the real
                problem gets fixed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ApprovedProjectShowcase
        variant="repair"
        eyebrow="Real Service Proof"
        heading="Opener problems are diagnosed with the full door system"
        intro="A garage door opener issue is often connected to balance, hardware, safety sensors, or door movement. These approved photos help customers see real SecureLifts service work before booking."
      />

      {/* COMMON PROBLEMS */}
      <section className="py-28 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:items-center">
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["Remote or keypad", "Signal, battery, programming, and receiver issues."],
            ["Safety sensors", "Alignment and reversal problems that stop the door."],
            ["Motor and drive", "Belt, chain, gear, travel, and motor diagnostics."],
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-red-600 bg-slate-50 px-6 py-5">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
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

          <VerifiedReviewLinks />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 px-6 py-28 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
          <h2 className="text-4xl font-black">
            Need garage door opener repair?
          </h2>

          <div className="mt-8 hidden gap-4 sm:flex sm:flex-wrap">
            <a
              href="tel:8668281818"
              className="rounded-xl bg-slate-950 px-8 py-4 font-bold !text-white"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="rounded-xl border border-white px-8 py-4 font-bold !text-white hover:bg-white hover:!text-black"
            >
              Book Service
            </Link>
          </div>
          </div>

          <QuickLeadForm
            defaultService="Garage Door Opener Repair"
            title="Send Opener Request"
            intro="Tell us if the opener is clicking, reversing, not responding, or making noise."
          />
        </div>
      </section>
    </main>
  );
}
