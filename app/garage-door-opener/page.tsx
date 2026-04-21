import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title:
    "Garage Door Opener Repair, Replacement & Installation | SecureLifts",
  description:
    "SecureLifts provides garage door opener repair, replacement, installation, smart opener upgrades, and service for older or discontinued opener models across South Florida.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-opener",
  },
  openGraph: {
    title:
      "Garage Door Opener Repair, Replacement & Installation | SecureLifts",
    description:
      "Repair broken openers, replace outdated systems, upgrade to smart LiftMaster openers, and get help with older or discontinued models.",
    url: "https://securelifts.com/garage-door-opener",
    siteName: "SecureLifts",
    type: "website",
  },
};

const openerTypes = [
  {
    title: "Belt Drive Openers",
    bestFor: "Attached garages, bedrooms above garage, quieter homes",
    summary:
      "The best fit when noise matters. Belt drive systems are smoother and quieter, making them ideal for homes where garage vibration and sound travel into living space.",
    bullets: [
      "Quieter daily use",
      "Smooth start and stop",
      "Great for attached homes",
      "Strong option for smart upgrades",
    ],
    image: "/images/opener/types/belt-drive-openers.png",
    alt: "Belt drive garage door opener",
  },
  {
    title: "Chain Drive Openers",
    bestFor: "Budget-conscious homeowners and heavy everyday use",
    summary:
      "Chain drive openers remain a strong value option when you want proven strength and reliability without paying premium pricing for ultra-quiet operation.",
    bullets: [
      "Excellent value",
      "Reliable lifting power",
      "Good for frequent use",
      "Usually louder than belt drive",
    ],
    image: "/images/opener/types/chain-drive-openers.png",
    alt: "Chain drive garage door opener",
  },
  {
    title: "Wall-Mount / Jackshaft Openers",
    bestFor: "Tall ceilings, storage lifts, clean ceiling space, premium setups",
    summary:
      "Mounted beside the door instead of overhead, wall-mount units free up ceiling space and create a cleaner garage layout. They are a premium choice when headroom and layout matter.",
    bullets: [
      "Frees overhead space",
      "Clean premium look",
      "Great for high-lift setups",
      "Ideal for specialty garage layouts",
    ],
    image: "/images/opener/types/wall-mount-jackshaft-openers.png",
    alt: "Wall mount jackshaft garage door opener",
  },
];

const featuredModels = [
  {
    name: "LiftMaster 6690L",
    category: "Premium Belt Drive",
    reason:
      "Best for homeowners wanting premium quiet performance, battery backup, myQ connectivity, camera visibility, and strong everyday lifting power.",
    highlights: [
      "1¼ HP equivalent DC performance",
      "Battery backup",
      "myQ smart control",
      "360° camera and LED lighting",
    ],
    image: "/images/opener/models/liftmaster-6690l.png",
    alt: "LiftMaster 6690L garage door opener",
  },
  {
    name: "LiftMaster 6580L",
    category: "Quiet Belt Drive",
    reason:
      "Excellent choice for attached garages where quiet performance and battery backup matter, without stepping all the way into the heaviest premium tier.",
    highlights: [
      "1 HP equivalent DC performance",
      "Battery backup",
      "myQ connectivity",
      "Quiet belt drive",
    ],
    image: "/images/opener/models/liftmaster-6580l.png",
    alt: "LiftMaster 6580L garage door opener",
  },
  {
    name: "LiftMaster 2220L",
    category: "Chain Drive Value Pick",
    reason:
      "Strong fit for homeowners who want chain-drive durability, smart features, and dependable daily use at a more value-oriented price point.",
    highlights: [
      "3/4 HP equivalent DC performance",
      "Built-in camera",
      "myQ connectivity",
      "Reliable chain-drive strength",
    ],
    image: "/images/opener/models/liftmaster-2220l.png",
    alt: "LiftMaster 2220L garage door opener",
  },
  {
    name: "LiftMaster 98022",
    category: "Wall-Mount Upgrade",
    reason:
      "Great for premium garages where ceiling space, appearance, and quieter side-mounted operation matter more than basic entry-level pricing.",
    highlights: [
      "Wall-mount design",
      "Battery backup",
      "Frees overhead space",
      "Ideal for modern garage layouts",
    ],
    image: "/images/opener/models/liftmaster-98022.png",
    alt: "LiftMaster 98022 wall mount garage door opener",
  },
];

const olderModelTerms = [
  "LiftMaster 8165W repair",
  "older LiftMaster opener repair",
  "discontinued garage door opener service",
  "garage door opener remote compatibility",
  "garage door opener logic board replacement",
  "old opener not working",
];

const faqs = [
  {
    q: "Should I repair my opener or replace it?",
    a: "If the issue is limited to a sensor, remote, gear, capacitor, travel setting, or logic problem, repair often makes sense. If the opener is old, unreliable, loud, lacks safety or smart features, or parts are difficult to source, replacement is usually the better long-term move.",
  },
  {
    q: "Do you service older or discontinued opener models?",
    a: "Yes. We diagnose older and discontinued opener systems, check whether repair parts are still realistic, and recommend either repair, compatible part replacement, or full opener replacement if the unit is no longer a smart investment.",
  },
  {
    q: "What opener type is best for a house with bedrooms above the garage?",
    a: "A belt-drive opener is usually the best fit because it reduces vibration and operating noise compared with standard chain-drive setups.",
  },
  {
    q: "Can you install smart garage door openers with phone control?",
    a: "Yes. We install smart opener systems with app-based control, remote monitoring, and modern convenience features depending on the opener model you choose.",
  },
  {
    q: "How long does garage door opener replacement take?",
    a: "Most standard opener replacements can be completed the same day once the correct opener is selected and the door system is verified to be safe and compatible.",
  },
  {
    q: "Can a broken opener really be caused by the door itself?",
    a: "Absolutely. An opener can struggle because of worn rollers, bad springs, track problems, door imbalance, or excessive door weight. That is why the full system should be checked before replacing parts blindly.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Inspect",
    text: "We inspect the opener, door balance, safety sensors, controls, and hardware before recommending the fix.",
    image: "/images/opener/process/step-1.jpg",
    alt: "Technician inspecting garage door opener system",
  },
  {
    step: "2",
    title: "Recommend",
    text: "You get the straight answer: repair it, replace it, or upgrade it based on cost, age, and reliability.",
    image: "/images/opener/process/step-2.jpg",
    alt: "Garage door opener recommendation and diagnosis",
  },
  {
    step: "3",
    title: "Repair or Install",
    text: "We complete the opener repair or replacement with proper setup, adjustment, and safe operation checks.",
    image: "/images/opener/process/step-3.jpg",
    alt: "Garage door opener installation in progress",
  },
  {
    step: "4",
    title: "Test & Show You",
    text: "We test travel, force, safety reverse, remotes, keypads, and show the customer how everything works.",
    image: "/images/opener/process/step-4.jpg",
    alt: "Testing garage door opener remotes and safety settings",
  },
];

export default function GarageDoorOpenerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Door Opener Repair and Installation",
    serviceType:
      "Garage Door Opener Repair, Replacement, Installation, and Smart Opener Upgrades",
    provider: {
      "@type": "LocalBusiness",
      name: "SecureLifts",
      telephone: PHONE_DISPLAY,
      url: "https://securelifts.com",
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    description:
      "Garage door opener repair, replacement, installation, smart opener upgrades, and support for older or discontinued opener systems.",
  };

  return (
    <>
      <Script
        id="garage-door-opener-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="garage-door-opener-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Garage Door Opener Service
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Garage Door Opener Repair, Replacement & Smart Upgrades
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Repair a failing opener, replace an outdated system, or upgrade
                to a quieter smart opener with modern safety and remote access.
                We service broken, noisy, outdated, and discontinued opener
                systems across South Florida.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/book-service"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Book Service
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Same-Day Service Available
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Repair & Replacement Options
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Smart myQ Upgrades
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Older Model Support
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/10 bg-white p-6 text-slate-900 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Fast Help
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Need opener repair today?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If your opener hums, clicks, reverses, stops midway, loses
                remote function, or struggles to lift the door, we can inspect
                the system and give you the right fix.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Opener won’t open or close",
                  "Remote, keypad, or wall button issues",
                  "Noisy opener or jerky travel",
                  "Smart opener and Wi-Fi setup",
                  "Replacement for old or discontinued units",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-red-700"
                >
                  Speak With SecureLifts
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-6 py-4 text-center text-base font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Start With The Right Decision
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Repair it, replace it, or upgrade it
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Most homeowners do not need more information first. They need
                the right path first. This section helps visitors move quickly
                toward the best repair, replacement, or upgrade option.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Repair Existing Opener",
                  text: "Best when the issue is isolated and the opener is still worth saving. We inspect the full system before replacing parts blindly.",
                },
                {
                  title: "Replace a Failing Opener",
                  text: "Best when the unit is old, unreliable, too loud, unsafe, or no longer worth the repair cost. This is common with aging contractor-grade models.",
                },
                {
                  title: "Upgrade to Smart & Quiet",
                  text: "Best when the customer wants app control, battery backup, better lighting, cleaner operation, and a more premium experience.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-black tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Opener Types
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Choose the right opener for your home
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The best opener is not just about horsepower. It is about noise,
                layout, usage, budget, and whether the garage is attached to the
                living space.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {openerTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="relative mb-6 h-64 overflow-hidden rounded-2xl bg-slate-100">
                    <div className="relative mx-auto h-full w-[88%]">
                      <Image
                        src={type.image}
                        alt={type.alt}
                        fill
                        className="object-contain py-2"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                    Best for: {type.bestFor}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {type.summary}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-800">
                    {type.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-xl bg-slate-50 px-4 py-3"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Featured LiftMaster Options
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Recommended opener models for today’s homes
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                These recommendations are built around current LiftMaster
                product positioning: premium belt drive, quieter belt drive,
                value-focused chain drive, and wall-mount upgrades.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredModels.map((model) => (
                <div
                  key={model.name}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="relative mb-6 h-56 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={model.image}
                      alt={model.alt}
                      fill
                      className="object-contain p-5"
                    />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                    {model.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {model.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {model.reason}
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {model.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Important
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                The best opener model depends on door size, spring condition,
                usage frequency, noise expectations, ceiling layout, and whether
                the customer wants app connectivity, camera features, or battery
                backup. We verify fit before installation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Older & Discontinued Openers
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                We also help with older opener models
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                A lot of opener traffic comes from homeowners searching their
                exact old model number after something breaks. That does not
                always mean they need a full replacement first.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-black tracking-tight">
                  What we can do for older units
                </h3>
                <div className="mt-5 grid gap-3">
                  {[
                    "Diagnose old LiftMaster, Chamberlain, Craftsman, Genie, and similar opener problems",
                    "Check whether the repair is still realistic and worth the money",
                    "Replace sensors, remotes, keypads, gears, capacitors, boards, rails, and compatible parts when practical",
                    "Help customers with remote compatibility and setup",
                    "Recommend smart replacement when parts or reliability no longer make sense",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-black tracking-tight">
                  Common older-opener search topics
                </h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {olderModelTerms.map((term) => (
                    <span
                      key={term}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100"
                    >
                      {term}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-slate-300">
                  We help homeowners figure out whether an older opener is still
                  worth repairing, whether a compatible part can solve the issue,
                  or whether upgrading to a newer system makes more sense.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Why SecureLifts
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  A cleaner buying path and a better service experience
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  This page is built to do what opener customers actually need:
                  solve the problem, educate them just enough, and get them into
                  the right repair or replacement fast.
                </p>
              </div>

              <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
                {[
                  "Repair and replacement options, not one-size-fits-all sales pressure",
                  "Quiet opener recommendations for attached garages",
                  "Smart opener upgrades with app-based control",
                  "Support for older and discontinued opener systems",
                  "Clear recommendation between belt, chain, and wall-mount",
                  "System-level inspection to catch spring or door issues affecting the opener",
                  "Professional setup of remotes, keypads, and safety sensors",
                  "Cleaner, more premium opener choices for higher-end homes",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Our Process
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                How we handle garage door opener service
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="relative mb-5 h-36 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                FAQ
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Garage door opener questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black tracking-tight">{faq.q}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Ready To Fix The Opener?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts for garage door opener service
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether your opener is failing, outdated, too loud, or no longer
              worth repairing, we can help you choose the right next move and
              get the work done fast.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                Book Service
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}