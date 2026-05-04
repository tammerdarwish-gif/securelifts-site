import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Garage Door Installation | SecureLifts South Florida",
  description:
    "Professional garage door installation in South Florida. Premium, modern, traditional, and hurricane-rated garage doors installed by SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/garage-door-installation",
  },
  openGraph: {
    title: "Garage Door Installation | SecureLifts South Florida",
    description:
      "Upgrade your home with premium garage door installation from SecureLifts in South Florida.",
    url: "https://securelifts.com/garage-door-installation",
    siteName: "SecureLifts",
    type: "website",
  },
};

const doorTypes = [
  {
    title: "Modern Garage Doors",
    text: "Clean lines, glass options, and upscale finishes for high-end homes and contemporary architecture.",
    href: "/hurricane-garage-doors/modern",
    image: "/images/reviews/miami-beach-case-study.jpg",
  },
  {
    title: "Traditional Garage Doors",
    text: "Classic raised-panel and long-panel styles that work well for most homes and neighborhoods.",
    href: "/hurricane-garage-doors/traditional",
    image: "/images/reviews/coconut-creek-case-study.jpg",
  },
  {
    title: "Hurricane-Rated Garage Doors",
    text: "Built for South Florida storm conditions with stronger performance, better protection, and peace of mind.",
    href: "/hurricane-garage-doors",
    image: "/images/reviews/coconut-grove-case-study.jpg",
  },
];

const benefits = [
  {
    title: "Better Curb Appeal",
    text: "A garage door takes up a major portion of your home’s exterior, so the right upgrade changes the entire look fast.",
  },
  {
    title: "Stronger Security",
    text: "Modern door systems and opener options help improve security, reliability, and daily confidence.",
  },
  {
    title: "Improved Performance",
    text: "A properly installed garage door runs smoother, quieter, and more consistently than worn or outdated systems.",
  },
  {
    title: "Higher Home Value",
    text: "Garage door replacement is one of the strongest exterior upgrades for visual impact and perceived value.",
  },
];

const whyChoose = [
  "Licensed and insured installation service",
  "Residential expertise across South Florida",
  "Premium and value-focused options available",
  "Modern, traditional, and hurricane-rated choices",
  "Strong fit-and-finish standards",
  "Honest recommendations without fluff",
  "Clean jobsite execution",
  "Built to improve both appearance and function",
];

const processSteps = [
  {
    step: "1",
    title: "Inspect & Measure",
    text: "We inspect the opening, confirm dimensions, review the existing system, and identify the best installation path.",
  },
  {
    step: "2",
    title: "Choose the Right Door",
    text: "We help you select the right style, rating, material, and design based on appearance, budget, and property needs.",
  },
  {
    step: "3",
    title: "Install the System",
    text: "We install the door, hardware, spring system, and opener setup with proper fit, balance, and alignment.",
  },
  {
    step: "4",
    title: "Test & Finalize",
    text: "We test operation, safety settings, travel, balance, and final appearance before closing out the job.",
  },
];

const caseStudies = [
  {
    title: "Coconut Grove Case Study",
    slug: "/portfolio/garage-door-installation-coconut-grove",
    image: "/images/reviews/coconut-grove-case-study.jpg",
    value: "$15,685",
    location: "Coconut Grove, FL",
    summary:
      "Premium garage door installation with three Clopay Gallery Steel doors for a high-end residential property.",
  },
  {
    title: "Miami Beach Case Study",
    slug: "/portfolio/garage-door-installation-miami-beach",
    image: "/images/reviews/miami-beach-case-study.jpg",
    value: "$23,450",
    location: "Miami Beach, FL",
    summary:
      "Modern full-view installation project featuring a premium door and wall-mount opener setup.",
  },
  {
    title: "Pinecrest Case Study",
    slug: "/portfolio/garage-door-installation-pinecrest",
    image: "/images/reviews/pinecrest-case-study.jpg",
    value: "$20,454",
    location: "Pinecrest, FL",
    summary:
      "Premium installation project with Raynor Encore 200 doors for a strong curb-appeal upgrade.",
  },
  {
    title: "Coconut Creek Case Study",
    slug: "/portfolio/garage-door-installation-coconut-creek",
    image: "/images/reviews/coconut-creek-case-study.jpg",
    value: "$4,088",
    location: "Coconut Creek, FL",
    summary:
      "Clean value-focused installation showing a budget-conscious but strong finished result.",
  },
];

const faqs = [
  {
    q: "How do I know which garage door is right for my home?",
    a: "The right door depends on your home style, budget, storm-rating needs, insulation goals, and the look you want from the street. That is why the selection should be based on both function and appearance, not just price.",
  },
  {
    q: "Do you install hurricane-rated garage doors in South Florida?",
    a: "Yes. SecureLifts installs hurricane-rated garage doors designed for South Florida conditions and stronger storm protection.",
  },
  {
    q: "Can you install both modern and traditional garage doors?",
    a: "Yes. We install modern, traditional, and other residential garage door styles depending on the property and homeowner goals.",
  },
  {
    q: "Do new garage doors improve home value?",
    a: "Yes. A new garage door is one of the strongest exterior upgrades for curb appeal and can significantly improve the way a home looks and feels.",
  },
  {
    q: "Can you replace the opener during installation too?",
    a: "Yes. If the opener should be replaced or upgraded along with the new door, SecureLifts can handle both as part of the project.",
  },
  {
    q: "How long does garage door installation usually take?",
    a: "Most standard residential installations can be completed in a day, depending on the door type, opening condition, and whether additional system upgrades are needed.",
  },
];

export default function GarageDoorInstallationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Door Installation",
    serviceType: "Garage Door Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "SecureLifts",
      telephone: PHONE,
      url: "https://securelifts.com",
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
    description:
      "Professional garage door installation in South Florida including modern, traditional, and hurricane-rated garage doors.",
  };

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

  return (
    <>
      <Script
        id="garage-door-installation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="garage-door-installation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/mew-garage-door-installation.jpg"
              alt="New garage door installation by SecureLifts"
              fill
              priority
              className="object-cover opacity-45"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/15" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Garage Door Installation
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Garage Door Installation in South Florida
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Upgrade your home with a garage door built for curb appeal,
                performance, and South Florida weather. SecureLifts installs
                modern, traditional, and hurricane-rated garage doors with a
                focus on fit, finish, and long-term reliability.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold !text-white transition hover:bg-red-700"
                >
                  Call {PHONE}
                </a>

                <Link
                  href="/book-service"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold !text-white backdrop-blur transition hover:bg-white/15"
                >
                  Book Service
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Modern & Traditional Styles
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Hurricane-Rated Options
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Premium & Value Choices
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  South Florida Installation
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/reviews/coconut-grove-case-study.jpg"
                  alt="Garage door installation by SecureLifts in South Florida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why Install A New Garage Door
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                A stronger upgrade for appearance, performance, and value
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A new garage door does more than replace an old one. It changes
                curb appeal, improves daily use, and helps create a more secure,
                more valuable finished home exterior.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-black tracking-tight">
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

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Choose The Right Garage Door
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Explore the main garage door directions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Compare the main style directions homeowners ask about most,
                then choose the path that fits your home, budget, and storm
                protection needs.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {doorTypes.map((door) => (
                <Link
                  key={door.title}
                  href={door.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={door.image}
                      alt={door.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black tracking-tight text-slate-900">
                      {door.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {door.text}
                    </p>
                    <span className="mt-5 inline-block text-sm font-bold text-red-600">
                      Explore options →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why SecureLifts
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Built to install the right door, not just sell one
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The right installation is about more than getting a door on the
                house. It is about matching the style, the function, the budget,
                and the long-term expectations of the homeowner.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                  Real Installation Proof
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  See real garage door projects across South Florida
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  This is where the page gets stronger than generic competitors.
                  Real case studies prove the quality, range, and price levels
                  of the work.
                </p>
              </div>

              <Link
                href="/reviews"
                className="text-sm font-bold text-red-400 transition hover:text-red-300"
              >
                View all reviews & case studies →
              </Link>
            </div>

            <div className="mt-10 overflow-x-auto pb-4">
              <div className="flex w-max gap-6 pr-8">
                {caseStudies.map((study) => (
                  <Link
                    key={study.title}
                    href={study.slug}
                    className="group flex w-[320px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex min-h-[320px] flex-1 flex-col p-6">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-400">
                        {study.location}
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
                        {study.title}
                      </h3>

                      <p className="mt-4 flex-1 text-base leading-7 text-slate-200">
                        {study.summary}
                      </p>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                            Project Value
                          </p>
                          <p className="mt-1 text-lg font-black text-white">
                            {study.value}
                          </p>
                        </div>

                        <span className="whitespace-nowrap text-sm font-bold text-red-400">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Installation Process
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                How garage door installation is handled
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A clean installation process reduces problems, improves final
                fit, and creates a better customer experience from start to
                finish.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
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
                Garage door installation questions
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
              Ready To Install A New Garage Door?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts for garage door installation in South Florida
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you want a modern statement door, a strong traditional
              upgrade, or hurricane-rated protection, SecureLifts can help you
              choose the right fit and get the installation done right.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
              >
                Call {PHONE}
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
