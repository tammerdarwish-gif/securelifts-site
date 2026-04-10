"use client";

import ServiceSchema from "./components/ServiceSchema";
import InternalLinkCards from "./components/InternalLinkCards";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShieldAlt,
  FaTools,
  FaMapMarkerAlt,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import {
  ctaHeroPrimary,
  ctaHeroSecondary,
  ctaSectionPrimary,
  ctaSectionSecondary,
} from "./components/ctaStyles";

export default function Home() {
  const services = [
    {
      title: "Garage Door Repair",
      text: "Fast diagnosis and repair for broken doors, damaged panels, off-track systems, noisy operation, and sudden breakdowns.",
      icon: <FaTools className="text-3xl" />,
    },
    {
      title: "Spring Replacement",
      text: "Safe replacement of torsion and extension springs with high-cycle hardware built for longer life and smoother operation.",
      icon: <FaBolt className="text-3xl" />,
    },
    {
      title: "Garage Door Installation",
      text: "Professional installation of premium garage doors that improve curb appeal, security, and long-term performance.",
      icon: <FaShieldAlt className="text-3xl" />,
    },
  ];

  const reasons = [
    "Licensed and insured",
    "Same-day service available",
    "Premium products and workmanship",
    "Honest pricing with no surprises",
    "Technicians who show up prepared",
    "We stand behind our work",
  ];

  const reviews = [
    {
      name: "Michael R.",
      text: "Fast response, professional service, and the garage door works better than ever.",
    },
    {
      name: "Jessica T.",
      text: "They showed up on time, explained everything clearly, and got it done right.",
    },
    {
      name: "Daniel P.",
      text: "Best garage door company I’ve dealt with. Clean work and excellent communication.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ServiceSchema
        name="Garage Door Services in South Florida"
        description="Garage door repair, installation, spring replacement, opener service, and hurricane-rated garage doors in South Florida."
        url="https://securelifts.com"
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/securelifts-van.jpg"
            alt="SecureLifts garage door service van in South Florida"
            fill
            priority
            className="object-cover object-center opacity-45"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 md:text-sm">
              SecureLifts • South Florida Garage Door Experts
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Garage Door Repair, Installation, and Hurricane-Rated Upgrades in South Florida
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Fast service. Strong workmanship. Premium garage doors built for
              curb appeal, reliability, and South Florida weather.
            </p>

            <p className="mt-4 text-sm text-slate-300">
              Powered by AAA Garage Doors Inc.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:18668281818" className={ctaHeroPrimary}>
                Call (866) 828-1818
              </a>

              <a href="#services" className={ctaHeroSecondary}>
                View Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-red-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <FaStar className="text-red-400" />
                Top Rated Service
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400" />
                South Florida Coverage
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              Trusted by South Florida homeowners
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              Built for long-term reliability
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              Fast quotes and clean service
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Core Services
          </p>
          <h2 className="text-4xl font-black md:text-5xl">
            Garage Door Services That Drive Results
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            From urgent repairs to full door replacement, SecureLifts helps
            homeowners get dependable service without the usual runaround.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{service.text}</p>

              <div className="mt-6">
                <Link
                  href="/book-service"
                  className="inline-flex items-center gap-2 font-semibold text-red-600 transition hover:text-red-700"
                >
                  Book this service <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Why SecureLifts
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Built to Earn Trust and Confidence
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Homeowners do not just need someone who can fix a garage door.
              They need a company that shows up ready, communicates clearly, and
              does the job right the first time.
            </p>

            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <FaCheckCircle className="shrink-0 text-red-600" />
                  <span className="font-medium text-slate-800">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative height: 420px;overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <Image
              src="/securelifts-van.jpg"
              alt="SecureLifts service van parked for a garage door service call"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              Customer Feedback
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              What Customers Say
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Good service should not leave customers guessing. These are the
              kinds of results people remember.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-sm"
              >
                <div className="mb-4 flex text-yellow-400">★★★★★</div>
                <p className="leading-8 text-slate-100">{review.text}</p>
                <p className="mt-5 font-bold text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Storm Protection Options"
        heading="Explore Hurricane Garage Door Solutions"
        intro="Compare the main hurricane garage door categories and find the best fit for your South Florida home."
        items={[
          {
            title: "Hurricane Garage Doors",
            text: "Start with the main hurricane garage door page and compare available styles.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
          },
          {
            title: "Wind-Rated Garage Doors",
            text: "Explore stronger garage doors built around pressure resistance in severe weather.",
            href: "/wind-rated-garage-doors",
            icon: "💨",
          },
          {
            title: "Impact-Rated Garage Doors",
            text: "See doors designed for debris resistance and storm-driven impact protection.",
            href: "/impact-rated-garage-doors",
            icon: "🛡️",
          },
          {
            title: "Miami-Dade Rated Doors",
            text: "Compare one of the strongest storm-performance categories in South Florida.",
            href: "/miami-dade-rated-garage-doors",
            icon: "🏠",
          },
        ]}
      />

      <section className="bg-red-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Need Garage Door Service Today?
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/90">
            Call now and get fast, professional service from SecureLifts.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="tel:18668281818" className={ctaSectionPrimary}>
              Call (866) 828-1818
            </a>

            <a href="#services" className={ctaSectionSecondary}>
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}