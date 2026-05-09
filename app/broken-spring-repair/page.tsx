import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FAQSchema from "../components/FAQSchema";
import ServiceSchema from "../components/ServiceSchema";
import ApprovedProjectShowcase from "../components/ApprovedProjectShowcase";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Broken Spring Repair in South Florida | SecureLifts",
  description:
    "SecureLifts provides fast broken garage door spring repair across South Florida. Safe torsion and extension spring replacement for doors that will not open, feel heavy, or slammed shut.",
  alternates: {
    canonical: "https://securelifts.com/broken-spring-repair",
  },
  openGraph: {
    title: "Broken Spring Repair in South Florida | SecureLifts",
    description:
      "Fast broken garage door spring repair across South Florida with safe replacement, clear communication, and dependable service.",
    url: "https://securelifts.com/broken-spring-repair",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/images/approved/spring-closeup-hero.jpg",
        width: 1800,
        height: 1100,
        alt: "Broken garage door spring repair by SecureLifts in South Florida",
      },
    ],
  },
};

const symptoms = [
  "Garage door will not open",
  "Door feels extremely heavy",
  "Loud snap from the garage",
  "Spring is visibly broken above the door",
  "Door opens a few inches then stops",
  "Opener strains but the door does not move",
];

const cityLinks = [
  ["Miami", "miami"],
  ["Fort Lauderdale", "fort-lauderdale"],
  ["Boca Raton", "boca-raton"],
  ["West Palm Beach", "west-palm-beach"],
  ["Palm Beach Gardens", "palm-beach-gardens"],
  ["Jupiter", "jupiter"],
  ["Wellington", "wellington"],
  ["Royal Palm Beach", "royal-palm-beach"],
  ["Delray Beach", "delray-beach"],
  ["Boynton Beach", "boynton-beach"],
];

const faqs = [
  {
    question: "How do I know if my garage door spring is broken?",
    answer:
      "Common signs include a loud snap, a very heavy door, a door that only opens a few inches, or a visible gap in the spring above the garage door.",
  },
  {
    question: "Is it safe to use a garage door with a broken spring?",
    answer:
      "No. A broken spring can make the garage door unsafe and can damage the opener or other hardware. Stop using the door and schedule service.",
  },
  {
    question: "Do you offer same-day broken spring repair?",
    answer:
      "Yes. SecureLifts offers fast scheduling and same-day broken spring repair across South Florida whenever availability allows.",
  },
  {
    question: "Can you replace torsion and extension springs?",
    answer:
      "Yes. SecureLifts handles torsion spring and extension spring replacement with the correct process and dependable hardware.",
  },
];

export default function BrokenSpringRepairPage() {
  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Broken Spring Repair in South Florida"
        description="SecureLifts provides fast broken garage door spring repair across South Florida for doors that will not open, feel heavy, or slammed shut."
        url="https://securelifts.com/broken-spring-repair"
      />

      <section className="relative min-h-[700px] overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/approved/spring-closeup-hero.jpg"
          alt="Broken garage door spring repair in South Florida"
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-6 pb-36 pt-32 md:items-end md:pb-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-red-300">
              SecureLifts Same-Day Spring Service
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Broken Spring Repair in South Florida
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              If your garage door will not open, feels heavy, or slammed shut,
              SecureLifts can replace the broken spring safely and get the door
              working again.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-bold !text-white transition hover:bg-red-700"
              >
                Call {PHONE}
              </a>
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold !text-slate-950 transition hover:bg-slate-100"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Urgent Repair
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              A Broken Spring Makes the Whole Door Unsafe
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Garage door springs carry the weight of the door. When one breaks,
              the opener may struggle, the door may stop moving, and the system
              can become dangerous to force open. SecureLifts handles broken
              spring replacement with proper sizing, safe installation, and a
              full door operation check.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-2xl font-black">Common broken spring signs</h3>
            <div className="mt-6 grid gap-3">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded-2xl border border-slate-200 bg-white p-4 font-semibold"
                >
                  {symptom}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ApprovedProjectShowcase
        variant="spring"
        eyebrow="Real Spring Repair Proof"
        heading="Broken spring calls need fast, trustworthy help"
        intro="These photos stay closer to the spring repair subject: spring hardware, door balance, and the kind of unsafe door condition customers should not force open."
      />

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Service Areas
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Broken Spring Repair by City
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose your city to see local broken spring repair details and
              nearby garage door services.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cityLinks.map(([label, slug]) => (
              <Link
                key={slug}
                href={`/broken-spring-repair/${slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 font-bold !text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
              >
                Broken Spring Repair in {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            Need Broken Spring Repair Today?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-red-50">
            Call SecureLifts now for fast help with a broken garage door spring.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold !text-slate-950"
            >
              Call {PHONE}
            </a>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 text-lg font-bold !text-white"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
