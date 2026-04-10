import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBolt,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

export default function BrokenSpringRepairPage() {
  const signs = [
    "Garage door will not open",
    "Door feels extremely heavy",
    "Loud snap or bang from the garage",
    "Visible gap in the spring",
    "Door opens unevenly",
    "Opener strains but door barely moves",
    "Door stops halfway",
    "Garage door feels unsafe to use",
  ];

  const risks = [
    "Opener damage from excess strain",
    "Higher repair cost if ignored",
    "Garage door becoming unsafe to lift",
    "Additional hardware wear",
    "Door balance getting worse",
    "Risk of sudden failure during use",
  ];

  const reasons = [
    "Fast response for broken spring problems",
    "Correct spring sizing and replacement",
    "Professional repair process from start to finish",
    "Clear communication and honest service",
    "High-quality parts and workmanship",
    "Built to make homeowners feel confident calling",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      

      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
              <FaExclamationTriangle className="text-red-400" />
              Broken Spring? Stop Using The Door.
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Broken Spring Repair
              <span className="block text-red-500">
                Fast Help Before It Damages More
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
              If your garage door spring broke, the door can become heavy,
              unsafe, and unreliable fast. SecureLifts provides professional
              spring repair and replacement with the right process and the right hardware.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white"
              >
                Call Now
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-white px-8 py-4 font-bold text-white"
              >
                Book Service
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span>Fast help for broken garage door springs</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <div className="rounded-3xl bg-white p-8 text-slate-900">
              <div className="inline-flex rounded-2xl bg-red-50 p-4 text-red-600">
                <FaBolt className="text-2xl" />
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight">
                One broken spring can shut the whole door down
              </h2>

              <p className="mt-4 text-slate-600">
                Spring failures are one of the most common garage door problems
                and one of the easiest ways for homeowners to end up with a
                heavy, stuck, or unsafe door.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Correct spring replacement
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Safe balance and tension setup
                </div>
                <div className="rounded-2xl bg-slate-100 p-4 font-semibold">
                  Fast service for urgent failures
                </div>
              </div>

              <a
                href="tel:8668281818"
                className="mt-8 inline-flex rounded-xl bg-red-600 px-6 py-3 font-bold text-white"
              >
                Call (866) 828-1818
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Common Signs
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Signs your garage door spring may be broken
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Spring problems are one of the most common reasons a garage door
              suddenly stops working or becomes dangerous to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white"
              >
                Call Now
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border border-slate-300 px-6 py-3 font-bold"
              >
                Book Service
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <FaCheckCircle className="mt-1 text-red-600" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why It Gets Worse
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Spring damage can turn into opener and system damage fast
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              When a spring breaks, many homeowners keep trying the opener or
              force the door. That adds stress to the opener and the rest of the system.
            </p>

            <div className="mt-8 space-y-3">
              {risks.map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                  {item}
                </div>
              ))}
            </div>

            <a
              href="tel:8668281818"
              className="mt-8 inline-flex rounded-xl bg-red-600 px-6 py-3 font-bold text-white"
            >
              Call Before It Gets Worse
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="inline-flex rounded-2xl bg-red-50 p-4 text-red-600">
              <FaShieldAlt className="text-2xl" />
            </div>

            <h2 className="mt-5 text-4xl font-black">
              Why SecureLifts for spring repair
            </h2>

            <div className="mt-8 grid gap-4">
              {reasons.map((item) => (
                <div key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 text-red-600" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:8668281818"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white"
              >
                Call Now
              </a>

              <Link
                href="/book-service"
                className="rounded-xl border px-8 py-4 font-bold"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-20 text-center text-white">
        <h2 className="text-4xl font-black md:text-5xl">
          Broken spring right now?
        </h2>

        <p className="mt-5 text-lg text-red-100">
          Call now before extra damage hits the opener or the rest of the system.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="tel:8668281818"
            className="rounded-xl bg-white px-6 py-3 font-bold text-black"
          >
            Call Now
          </a>

          <Link
            href="/book-service"
            className="rounded-xl border px-6 py-3 font-bold"
          >
            Book Service
          </Link>
        </div>
      </section>
    </main>
  );
}