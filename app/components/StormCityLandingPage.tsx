import Image from "next/image";
import Link from "next/link";

import ServiceSchema from "./ServiceSchema";
import FAQSchema from "./FAQSchema";
import InternalLinkCards from "./InternalLinkCards";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbSchema from "./BreadcrumbSchema";
import ReviewTrustSection from "./ReviewTrustSection";

import {
  stormCityConfigs,
  type StormCityServiceKey,
} from "../lib/stormCityConfigs";

type Props = {
  serviceKey: StormCityServiceKey;
  city: string;
  citySlug: string;
  nearbyText: string;
};

type CompareLinkItem = {
  key: StormCityServiceKey;
  href: string;
  label: string;
};

function BookServiceButton({ className }: { className: string }) {
  return (
    <Link href="/book-service" className={className}>
      <span style={{ color: "#0f172a" }}>Book Service</span>
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  intro,
  eyebrowColor = "text-blue-700",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  eyebrowColor?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
      {intro ? (
        <p className="text-lg leading-8 text-slate-600">{intro}</p>
      ) : null}
    </div>
  );
}

function TrustStrip({ city }: { city: string }) {
  return (
    <section className="bg-white px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
            Trusted Service
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Licensed &amp; Insured in Florida
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
            Local Response
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Fast Response in {city}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
            Premium Work
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Premium Installation &amp; Repair
          </p>
        </div>
      </div>
    </section>
  );
}

export default function StormCityLandingPage({
  serviceKey,
  city,
  citySlug,
  nearbyText,
}: Props) {
  const config = stormCityConfigs[serviceKey];
  const pageTitle = config.heroTitle(city);
  const pageDescription = config.metaDescription(city);
  const pageUrl = `https://securelifts.com${config.basePath}/${citySlug}`;
  const faqItems = config.faqs(city, nearbyText);
  const introParagraphs = config.introParagraphs(city, nearbyText);
  const benefitItems = config.benefits(city);
  const nearbyAreas = nearbyText
    .split(",")
    .map((area) => area.trim())
    .filter(Boolean);

  const compareLinks: CompareLinkItem[] = [
    {
      key: "hurricane" as StormCityServiceKey,
      href: `/hurricane-garage-doors/${citySlug}`,
      label: `Hurricane Garage Doors in ${city}`,
    },
    {
      key: "impact" as StormCityServiceKey,
      href: `/impact-rated-garage-doors/${citySlug}`,
      label: `Impact-Rated Garage Doors in ${city}`,
    },
    {
      key: "miamiDade" as StormCityServiceKey,
      href: `/miami-dade-rated-garage-doors/${citySlug}`,
      label: `Miami-Dade Rated Garage Doors in ${city}`,
    },
  ].filter((item): item is CompareLinkItem => item.key !== serviceKey);

  return (
    <main className="bg-white text-slate-900">
      <ServiceSchema
        name={pageTitle}
        description={pageDescription}
        url={pageUrl}
      />

      <FAQSchema items={faqItems} />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: config.categoryName,
            href: `https://securelifts.com${config.basePath}`,
          },
          {
            label: city,
            href: `https://securelifts.com${config.basePath}/${citySlug}`,
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: config.categoryName, href: config.basePath },
          { label: city },
        ]}
      />

      <section className="relative min-h-[780px] overflow-hidden">
        <Image
          src={config.heroImage}
          alt={pageTitle}
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-end px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-[680px] rounded-3xl bg-black/35 p-6 backdrop-blur-sm md:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              {config.eyebrow}
            </p>

            <h1 className="mb-2 text-4xl font-black leading-[1.04] text-white md:text-6xl">
              {pageTitle}
            </h1>

            <p className="mb-5 text-sm text-white/80">
              Serving homeowners across {city} and surrounding areas
            </p>

            <p className="mb-8 max-w-[560px] text-lg leading-8 text-white/90">
              {config.heroDescription(city)}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
              >
                Call (866) 828-1818
              </a>
              <BookServiceButton className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100" />
            </div>

            <p className="mt-4 text-sm text-white/80">
              Same-day service available in {city}
            </p>
          </div>
        </div>
      </section>

      <TrustStrip city={city} />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {config.introEyebrow}
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              {config.introTitle(city)}
            </h2>

            {introParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-lg leading-8 text-slate-700"
              >
                {paragraph}
              </p>
            ))}

            <p className="text-lg leading-8 text-slate-700">
              This page helps homeowners in {city} compare storm-rated garage
              door options, understand the differences between protection
              levels, and choose the right long-term solution for their
              property.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {config.sideCardEyebrow}
            </p>

            <h3 className="mb-4 text-2xl font-bold">{config.sideCardTitle}</h3>

            <div className="flex flex-col gap-3">
              {config.sideLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={config.benefitsEyebrow}
            title={config.benefitsTitle(city)}
            intro={config.benefitsIntro(city)}
            eyebrowColor="text-green-600"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefitItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Related Services"
        heading={config.internalLinksHeading(city)}
        intro={config.internalLinksIntro(city)}
        items={config.internalLinks}
      />

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            eyebrow={`Local Service in ${city}`}
            title={`Garage Door Service Built for Homes in ${city}`}
            intro={`Homes in ${city} face different weather, design, and service expectations than homes in other parts of South Florida. SecureLifts helps homeowners choose stronger garage door solutions with cleaner installation, better guidance, and long-term reliability.`}
          />

          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-8 text-slate-600">
            {config.localIntentParagraph(city)}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Faster Local Response
              </h3>
              <p className="leading-7 text-slate-700">
                We serve {city} and surrounding areas with fast scheduling and
                professional communication so homeowners are not left waiting
                around.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Better Long-Term Value
              </h3>
              <p className="leading-7 text-slate-700">
                Whether you need stronger storm protection, a replacement door,
                or help choosing the right system, SecureLifts focuses on
                solutions that make sense for your home in {city}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Compare Storm Protection
          </p>
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Compare Storm-Rated Garage Door Options in {city}
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {compareLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-red-200 hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewTrustSection
        heading={`Why Homeowners in ${city} Choose SecureLifts`}
        intro={`Homeowners in ${city} expect clean work, fast response, and real results.`}
        reviews={[
          { name: "Michael R.", text: "Fast and professional." },
          { name: "Jessica T.", text: "Clear and reliable." },
          { name: "Daniel P.", text: "Best company I’ve used." },
          { name: "Alicia T.", text: "Smooth process from start to finish." },
        ]}
      />

      <section className="bg-white px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Serving {city} &amp; Nearby Areas
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          We proudly serve {city} and surrounding areas including {nearbyText}.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {nearbyAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
            {config.faqTitle(city)}
          </h2>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-slate-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-5xl">
          {config.finalCtaTitle(city)}
        </h2>

        <p className="mt-6 text-lg text-white/90">
          {config.finalCtaText(city)}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:18668281818"
            className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-black"
          >
            Call (866) 828-1818
          </a>

          <BookServiceButton className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100" />
        </div>
      </section>
    </main>
  );
}