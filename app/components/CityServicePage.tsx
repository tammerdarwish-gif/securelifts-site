import Image from "next/image";
import Link from "next/link";
import { CityServiceConfig } from "../lib/servicePages";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

 type Props = {
  city: string;
  nearbyText: string;
  config: CityServiceConfig;
};

export default function CityServicePage({ city, nearbyText, config }: Props) {
  const problemItems = config.problems(city);
  const serviceItems = config.services(city);
  const whyItems = config.whyItems(city, nearbyText);
  const faqItems = config.faqs(city);
  const nearbyAreas = nearbyText
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={config.image}
            alt={config.heroTitle(city)}
            fill
            priority
            className={`object-cover ${config.imageClassName}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-3xl bg-black/40 backdrop-blur-sm p-6 rounded-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-400">
              {config.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
              {config.heroTitle(city)}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200 md:text-xl">
              {config.heroDescription(city, nearbyText)}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="tel:8668281818"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold text-white hover:bg-red-700"
              >
                {config.primaryButtonText}
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 px-8 py-4 font-bold text-white shadow-lg hover:bg-white hover:text-slate-950"
              >
                {config.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why Customers Choose SecureLifts
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Fast response, clear communication, and dependable service in {city}
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              SecureLifts is built for property owners, facility teams, and businesses that need organized scheduling, professional workmanship, and a smoother service experience from start to finish.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                Fast Response
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Built for customers who need service without unnecessary delays.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                Licensed & Insured
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Professional garage and commercial door service across South Florida.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                Service Coverage
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Serving {city} and nearby areas with dependable communication and organized scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              {config.problemsEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black">
              {config.problemsTitle(city)}
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              {config.problemsDescription(city)}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {problemItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-red-600 text-2xl">
                  {item.icon ?? "⚠️"}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              {config.servicesEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black">
              {config.servicesTitle(city)}
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              {config.servicesDescription(city)}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-2xl">{item.icon ?? "🔧"}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              {config.whyEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black">
              {config.whyTitle(city)}
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              {config.whyDescription(city, nearbyText)}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="text-green-600 text-xl">✔</div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL COVERAGE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div className="min-w-0 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Local Service Coverage
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Serving {city} and nearby areas with fast, professional service
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                SecureLifts provides service in {city} and surrounding areas with a focus on fast response, cleaner workmanship, and organized communication from start to finish.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This helps strengthen local relevance while making it clear that customers near {city} can still get fast scheduling and dependable support.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 md:max-w-[360px] md:justify-self-end">
              {nearbyAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm"
                >
                  <p className="font-semibold text-slate-900">{area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Service available near {city} with fast scheduling and dependable follow-through.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-black">
            {config.ctaTitle(city)}
          </h2>
          <p className="mt-6 text-lg text-red-100">
            {config.ctaDescription(city)}
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:8668281818"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-slate-950 shadow-lg"
            >
              <FaPhoneAlt className="text-slate-950" />
              <span className="text-slate-950">Call (866) 828-1818</span>
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-white/20 px-8 py-4 font-bold text-white hover:bg-white hover:text-black"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              {config.faqEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black">
              {config.faqTitle(city)}
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              {config.faqDescription(city)}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">
                  {item.question}
                </h3>
                <p className="mt-3 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}