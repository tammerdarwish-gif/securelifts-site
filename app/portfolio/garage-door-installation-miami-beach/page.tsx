import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title:
    "Garage Door Installation in Miami Beach, FL | Case Study | SecureLifts",
  description:
    "Premium garage door installation in Miami Beach featuring modern full-view doors and wall-mount openers for a high-end residential property.",
  alternates: {
    canonical:
      "https://securelifts.com/portfolio/garage-door-installation-miami-beach",
  },
  openGraph: {
    title:
      "Garage Door Installation in Miami Beach, FL | Case Study | SecureLifts",
    description:
      "Modern garage door installation in Miami Beach using full-view glass doors and LiftMaster wall-mount openers.",
    url: "https://securelifts.com/portfolio/garage-door-installation-miami-beach",
    siteName: "SecureLifts",
    type: "article",
  },
};

const highlights = [
  "Modern full-view glass garage doors",
  "Wall-mount LiftMaster opener system",
  "Clean architectural integration",
  "High-end Miami Beach property",
  "Quiet and smooth operation",
  "Strong visual curb appeal upgrade",
];

const goals = [
  "Create a modern, luxury look",
  "Maximize natural light into the garage",
  "Match contemporary architecture",
  "Improve daily usability and reliability",
  "Upgrade overall property appearance",
];

const solution = [
  "Installed modern full-view aluminum and glass garage doors",
  "Selected tinted glass panels for privacy and style",
  "Integrated system cleanly into modern exterior",
  "Installed LiftMaster wall-mount openers for space efficiency",
  "Delivered a clean, high-end finished look",
];

const features = [
  {
    title: "Modern Design Fit",
    text: "Full-view glass doors matched the clean architectural lines of the Miami Beach property.",
  },
  {
    title: "Natural Light Benefit",
    text: "Glass panels allow natural light inside without sacrificing privacy.",
  },
  {
    title: "Premium Appearance",
    text: "The finished result creates a high-end, luxury curb appeal.",
  },
  {
    title: "Low Maintenance",
    text: "Aluminum and glass construction holds up well in coastal environments.",
  },
];

const openerBenefits = [
  "Wall-mount design frees ceiling space",
  "Quiet daily operation",
  "Smart control via myQ app",
  "Cleaner garage layout",
];

const processSteps = [
  "Initial site inspection",
  "Precise measurement",
  "Material preparation",
  "Door installation",
  "Spring system setup",
  "Opener installation",
  "System testing",
  "Final walkthrough",
];

export default function MiamiBeachCaseStudy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Door Installation in Miami Beach, FL",
    author: {
      "@type": "Organization",
      name: "SecureLifts",
    },
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="bg-slate-950 text-white px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black">
                Garage Door Installation in Miami Beach, FL
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                A modern garage door installation designed for a high-end Miami Beach property,
                focused on clean aesthetics, natural light, and premium operation.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href={PHONE_HREF}
                  className="bg-red-600 px-6 py-4 rounded-xl font-bold"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <Link
                  href="/book-service"
                  className="border px-6 py-4 rounded-xl font-bold"
                >
                  Book Service
                </Link>
              </div>
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/images/case-studies/miami-beach/Full-view-garage-door-installation-in-miami-beach.jpg"
                alt="Miami Beach garage door installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-6">
            <div className="bg-white border p-8 rounded-2xl">
              <h2 className="text-3xl font-black">
                Project Overview
              </h2>

              <p className="mt-4 text-lg text-slate-600">
                This Miami Beach project required a modern garage door system that matched
                the home’s clean architectural design while improving both appearance and function.
              </p>

              <p className="mt-4 text-lg text-slate-600">
                The final result delivered a high-end finish using full-view glass doors
                paired with a wall-mount opener system for a cleaner layout.
              </p>
            </div>

            <div className="bg-slate-50 border p-8 rounded-2xl">
              <p className="text-sm text-red-600 font-bold uppercase">
                Project Value
              </p>

              <p className="text-4xl font-black mt-2">
                $23,450
              </p>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black">
              Homeowner Goals
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {goals.map((g) => (
                <div key={g} className="bg-white p-5 rounded-xl border">
                  {g}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black">
              Our Solution
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {solution.map((s) => (
                <div key={s} className="bg-slate-50 p-5 rounded-xl">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/case-studies/miami-beach/Garage-Door-Miami-Beach.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-black">
                Why This Worked
              </h2>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {features.map((f) => (
                  <div key={f.title} className="border p-4 rounded-xl">
                    <h3 className="font-bold">{f.title}</h3>
                    <p className="text-sm mt-2 text-slate-600">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black">
              Installation Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {processSteps.map((step, i) => (
                <div key={step} className="bg-white p-6 rounded-xl border">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                    {i + 1}
                  </div>
                  <p className="mt-4 font-semibold">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 text-white px-6 py-20 text-center">
          <h2 className="text-4xl font-black">
            Planning a modern garage upgrade?
          </h2>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-red-600 px-6 py-4 rounded-xl font-bold"
            >
              Call {PHONE_DISPLAY}
            </a>

            <Link
              href="/book-service"
              className="border px-6 py-4 rounded-xl font-bold"
            >
              Book Service
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}