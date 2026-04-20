import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title:
    "Garage Door Installation in Coconut Creek, FL | Case Study | SecureLifts",
  description:
    "Affordable and clean garage door installation in Coconut Creek, FL featuring a long-panel white door with reliable performance and improved curb appeal.",
  alternates: {
    canonical:
      "https://securelifts.com/portfolio/garage-door-installation-coconut-creek",
  },
  openGraph: {
    title:
      "Garage Door Installation in Coconut Creek, FL | Case Study | SecureLifts",
    description:
      "Budget-friendly garage door installation in Coconut Creek delivering clean appearance and reliable operation.",
    url: "https://securelifts.com/portfolio/garage-door-installation-coconut-creek",
    siteName: "SecureLifts",
    type: "article",
  },
};

const highlights = [
  "Budget-friendly installation",
  "Clean long-panel design",
  "Reliable everyday operation",
  "Quick turnaround project",
  "Improved home appearance",
  "Strong value upgrade",
];

const goals = [
  "Replace an older worn garage door",
  "Keep the project within budget",
  "Improve the appearance of the home",
  "Ensure reliable daily operation",
  "Complete the job efficiently",
];

const solution = [
  "Installed a white long-panel garage door",
  "Selected a clean, simple design for broad curb appeal",
  "Improved door balance and system performance",
  "Delivered a fast and efficient installation",
  "Provided a strong value upgrade for the homeowner",
];

const features = [
  {
    title: "Clean Appearance",
    text: "The long-panel design delivers a simple and clean look that works well with many homes.",
  },
  {
    title: "Budget Conscious",
    text: "This project focused on delivering a strong result without pushing into high-end pricing.",
  },
  {
    title: "Reliable Use",
    text: "The new system improves everyday operation compared to worn or failing doors.",
  },
  {
    title: "Fast Completion",
    text: "The installation was completed efficiently without sacrificing quality.",
  },
];

const benefits = [
  "Affordable upgrade option",
  "Improved curb appeal",
  "Better system performance",
  "Strong everyday reliability",
];

const processSteps = [
  "Inspection of existing door",
  "Measurement confirmation",
  "Removal of old door",
  "Installation of new door panels",
  "Spring and hardware setup",
  "System balancing",
  "Final testing and safety check",
  "Customer walkthrough",
];

const faqs = [
  {
    q: "Is this type of garage door a good budget option?",
    a: "Yes. A long-panel steel door is one of the most cost-effective ways to improve both function and appearance.",
  },
  {
    q: "Does a lower-cost door still perform well?",
    a: "Yes. When installed correctly, even a budget-friendly door can provide reliable daily performance.",
  },
  {
    q: "Who is this type of installation best for?",
    a: "Homeowners who want a clean, reliable upgrade without investing in premium or custom doors.",
  },
  {
    q: "Can this still improve home value?",
    a: "Yes. Even a simple garage door upgrade can improve curb appeal and make a home look more maintained.",
  },
];

export default function CoconutCreekCaseStudy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Door Installation in Coconut Creek, FL",
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
                Garage Door Installation in Coconut Creek, FL
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                A clean, budget-friendly garage door installation designed to improve
                reliability and appearance without unnecessary cost.
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
                src="/images/case-studies/coconut-creek/hero.jpg"
                alt="Coconut Creek garage door installation"
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
                This Coconut Creek project focused on replacing an older garage door
                with a cleaner, more reliable solution while keeping the investment
                within a reasonable budget.
              </p>

              <p className="mt-4 text-lg text-slate-600">
                The result delivered a noticeable improvement in both appearance
                and functionality without overcomplicating the project.
              </p>
            </div>

            <div className="bg-slate-50 border p-8 rounded-2xl">
              <p className="text-sm text-red-600 font-bold uppercase">
                Project Value
              </p>

              <p className="text-4xl font-black mt-2">
                $4,088
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
                src="/images/case-studies/coconut-creek/door.jpg"
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
            Need a reliable garage door upgrade?
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