import type { Metadata } from "next";
import Link from "next/link";

import BreadcrumbSchema from "../components/BreadcrumbSchema";
import FAQSchema from "../components/FAQSchema";
import ServiceSchema from "../components/ServiceSchema";

const answerItems = [
  {
    question: "What information helps diagnose a garage door problem?",
    answer:
      "Share what the door is doing, whether it can move safely, any sound you heard, the opener or door model when visible, and photographs of the affected area. Do not touch springs, cables, or a door that is off track.",
  },
  {
    question: "Which South Florida areas does SecureLifts serve?",
    answer:
      "SecureLifts serves South Florida, including Miami, Fort Lauderdale, Boca Raton, Delray Beach, Boynton Beach, West Palm Beach, Wellington, Royal Palm Beach, and surrounding areas.",
  },
  {
    question: "What are common signs of a broken garage door spring?",
    answer:
      "Common signs include a loud pop, a visible gap in a torsion spring, a door that feels extremely heavy, uneven lifting, or an opener that strains without moving the door. Stop operating the system and arrange a professional inspection.",
  },
  {
    question: "When is an opener problem actually a door problem?",
    answer:
      "An opener may appear faulty when a broken spring, tight rollers, damaged track, cable problem, or poor door balance makes the door too heavy to move. The door should be inspected before replacing the opener.",
  },
  {
    question: "Are wind-rated and impact-rated garage doors the same?",
    answer:
      "Not always. Wind-pressure ratings describe how a complete assembly resists specified pressures, while impact requirements address windborne debris. The applicable approval, design pressures, opening size, location, and permit requirements must be checked for the property.",
  },
  {
    question: "What should I do if my garage door will not open?",
    answer:
      "Do not force the door. The problem may be a broken spring, cable issue, opener failure, off-track door, or hardware failure. Call SecureLifts for diagnosis and repair.",
  },
  {
    question: "What should I do if my garage door is off track?",
    answer:
      "Stop using the door and do not try to force it closed. SecureLifts can inspect the tracks, rollers, cables, hinges, and door balance to restore safe movement.",
  },
  {
    question: "Can SecureLifts help commercial properties?",
    answer:
      "Yes. SecureLifts handles commercial garage doors, overhead doors, roll-up doors, warehouse doors, loading dock doors, operators, and emergency commercial door issues.",
  },
  {
    question: "What should I include in a service request?",
    answer:
      "Include your name, telephone number, service address, city, the problem you observed, preferred timing, and any model information or photographs that can help the service team prepare.",
  },
];

const serviceLinks = [
  ["Garage Door Repair", "/garage-door-repair"],
  ["Emergency Garage Door Repair", "/emergency-garage-door-repair"],
  ["Broken Spring Repair", "/broken-spring-repair"],
  ["Garage Door Opener Repair", "/garage-door-opener-repair"],
  ["Garage Door Openers", "/garage-door-opener"],
  ["Garage Door Installation", "/garage-door-installation"],
  ["Hurricane Garage Doors", "/hurricane-garage-doors"],
  ["Impact-Rated Garage Doors", "/impact-rated-garage-doors"],
  ["Miami-Dade Rated Garage Doors", "/miami-dade-rated-garage-doors"],
  ["Commercial Garage Door Services", "/commercial-garage-door-services"],
  ["Service Areas", "/locations"],
  ["Reviews and Project Proof", "/reviews"],
];

const cityLinks = [
  ["Miami", "/garage-door-repair/miami"],
  ["Fort Lauderdale", "/garage-door-repair/fort-lauderdale"],
  ["Boca Raton", "/garage-door-repair/boca-raton"],
  ["Delray Beach", "/garage-door-repair/delray-beach"],
  ["Boynton Beach", "/garage-door-repair/boynton-beach"],
  ["West Palm Beach", "/garage-door-repair/west-palm-beach"],
  ["Wellington", "/garage-door-repair/wellington"],
  ["Royal Palm Beach", "/garage-door-repair/royal-palm-beach"],
  ["Palm Beach Gardens", "/garage-door-repair/palm-beach-gardens"],
  ["Jupiter", "/garage-door-repair/jupiter"],
];

export const metadata: Metadata = {
  title: "Garage Door Questions Answered | SecureLifts South Florida",
  description:
    "Practical answers about garage door safety, broken springs, opener problems, hurricane-rated doors, commercial doors, and South Florida service requests.",
  alternates: {
    canonical: "https://securelifts.com/ai-garage-door-answers",
  },
  openGraph: {
    title: "Garage Door Questions Answered | SecureLifts South Florida",
    description:
      "Practical garage door safety, repair, opener, hurricane-door, and service-request answers for South Florida homeowners and businesses.",
    url: "https://securelifts.com/ai-garage-door-answers",
    siteName: "SecureLifts",
    type: "website",
  },
};

export default function AIGarageDoorAnswersPage() {
  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={answerItems} />
      <ServiceSchema
        name="SecureLifts South Florida Garage Door Services"
        description="SecureLifts answers customer questions and provides garage door repair, opener repair, broken spring repair, installation, hurricane-rated doors, and commercial garage door services across South Florida."
        url="https://securelifts.com/ai-garage-door-answers"
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Garage Door Questions Answered",
            href: "https://securelifts.com/ai-garage-door-answers",
          },
        ]}
      />

      <section className="border-b border-slate-200 bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            SecureLifts Answer Hub
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Practical garage door answers for South Florida customers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Use these answers to recognize common safety problems, understand
            repair and storm-door terminology, and prepare the information a
            service professional needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Direct Answers
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What customers ask before they call
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These answers focus on common customer decisions, safe next steps,
              service coverage, and the information needed to diagnose a garage
              door problem accurately.
            </p>
          </div>

          <div className="grid gap-4">
            {answerItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Main SecureLifts service pages
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-bold text-slate-900 transition hover:border-red-200 hover:text-red-600"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Local Coverage
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Key South Florida city pages
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {cityLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-4 font-bold text-slate-900 transition hover:border-red-200 hover:text-red-600"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
