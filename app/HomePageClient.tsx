import ServiceSchema from "./components/ServiceSchema";
import InternalLinkCards from "./components/InternalLinkCards";
import QuickLeadForm from "./components/QuickLeadForm";
import ApprovedProjectShowcase from "./components/ApprovedProjectShowcase";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaTools,
  FaMapMarkerAlt,
  FaBolt,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import {
  ctaHeroPrimary,
  ctaHeroSecondary,
} from "./components/ctaStyles";

export default function HomePageClient() {
  const services = [
    {
      title: "Garage Door Repair",
      text: "Fast diagnosis and repair for broken doors, damaged panels, off-track systems, noisy operation, and sudden breakdowns.",
      icon: <FaTools className="text-3xl" />,
      href: "/garage-door-repair",
      image: "/images/approved/red-hanging-door-far-card.jpg",
      alt: "Garage door repair service in South Florida",
    },
    {
      title: "Broken Spring Repair",
      text: "Same-day help when the door will not open, the spring broke, or the system is too heavy to lift safely.",
      icon: <FaBolt className="text-3xl" />,
      href: "/broken-spring-repair",
      image: "/images/approved/spring-closeup-card.jpg",
      alt: "Broken garage door spring repair",
    },
    {
      title: "Garage Door Installation",
      text: "Professional installation of premium garage doors that improve curb appeal, security, and long-term performance.",
      icon: <FaShieldAlt className="text-3xl" />,
      href: "/garage-door-installation",
      image: "/images/approved/wood-modern-install-card.jpg",
      alt: "New garage door installation in South Florida",
    },
    {
      title: "Hurricane-Rated Doors",
      text: "Impact, wind-rated, and Miami-Dade approved garage door options for South Florida storm protection.",
      icon: <FaShieldAlt className="text-3xl" />,
      href: "/hurricane-garage-doors",
      image: "/images/approved/modern-slate-hurricane-card.jpg",
      alt: "Hurricane rated garage door installation",
    },
    {
      title: "Opener Repair",
      text: "Troubleshooting and replacement for noisy openers, bad remotes, wall controls, sensors, and smart opener issues.",
      icon: <FaTools className="text-3xl" />,
      href: "/garage-door-opener-repair",
      image: "/images/approved/technician-opener-service-card.jpg",
      alt: "Garage door opener repair and replacement",
    },
    {
      title: "Commercial Doors",
      text: "Roll-up doors, warehouse doors, dock doors, and commercial garage door service for South Florida businesses.",
      icon: <FaTools className="text-3xl" />,
      href: "/commercial-garage-door-services",
      image: "/images/approved/commercial-rollup-card.jpg",
      alt: "Commercial garage door service team",
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
      location: "Fort Lauderdale",
      text: "Fast response, professional service, and the garage door works better than ever.",
    },
    {
      name: "Jessica T.",
      location: "Boca Raton",
      text: "They showed up on time, explained everything clearly, and got it done right.",
    },
    {
      name: "Daniel P.",
      location: "Miami",
      text: "Best garage door company I’ve dealt with. Clean work and excellent communication.",
    },
  ];

  const proofStats = [
    { value: "Same-day", label: "repair appointments available" },
    { value: "South FL", label: "Miami-Dade, Broward, and Palm Beach" },
    { value: "Storm-ready", label: "hurricane-rated door options" },
    { value: "Real photos", label: "project proof, not stock promises" },
  ];

  const topCities = [
    "Miami",
    "Fort Lauderdale",
    "Boca Raton",
    "Delray Beach",
    "Boynton Beach",
    "Coral Springs",
    "Davie",
    "West Palm Beach",
    "Wellington",
    "Royal Palm Beach",
    "Aventura",
    "Coral Gables",
  ];

  const caseStudies = [
    {
      title: "Coconut Grove Case Study",
      slug: "/portfolio/garage-door-installation-coconut-grove",
      location: "Coconut Grove, FL",
      value: "$15,685",
      summary:
        "Premium garage door installation with three Clopay Gallery Steel doors for a high-end residential property.",
      image: "/images/reviews/coconut-grove-case-study.jpg",
    },
    {
      title: "Miami Beach Case Study",
      slug: "/portfolio/garage-door-installation-miami-beach",
      location: "Miami Beach, FL",
      value: "$23,450",
      summary:
        "Full-view garage door installation project featuring a premium door and wall-mount opener setup.",
      image: "/images/reviews/miami-beach-case-study.jpg",
    },
    {
      title: "Pinecrest Case Study",
      slug: "/portfolio/garage-door-installation-pinecrest",
      location: "Pinecrest, FL",
      value: "$20,454",
      summary:
        "Premium installation project with Raynor Encore 200 doors for a strong curb-appeal upgrade.",
      image: "/images/reviews/pinecrest-case-study.jpg",
    },
    {
      title: "Coconut Creek Case Study",
      slug: "/portfolio/garage-door-installation-coconut-creek",
      location: "Coconut Creek, FL",
      value: "$4,088",
      summary:
        "Trade Mark white long-panel installation showing a more budget-conscious but still clean finished result.",
      image: "/images/reviews/coconut-creek-case-study.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ServiceSchema
        name="Garage Door Services in South Florida"
        description="Garage door repair, installation, spring replacement, opener service, and hurricane-rated garage doors in South Florida."
        url="https://securelifts.com"
      />

      <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/approved/service-van-at-door-hero-optimized.jpg"
            alt="SecureLifts garage door service van in South Florida"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={24}
            className="object-cover object-center opacity-55"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-36 pt-20 md:grid-cols-[1.08fr_0.72fr] md:items-center md:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-red-200 md:text-sm">
              SecureLifts Garage Doors | South Florida
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Fast Garage Door Repair, Premium Installation, and Storm-Rated
              Upgrades
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              SecureLifts helps South Florida homeowners fix urgent garage door
              problems, replace worn systems, and choose hurricane-ready doors
              with clean workmanship and clear communication.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:18668281818" className={ctaHeroPrimary}>
                <FaPhoneAlt className="mr-2" />
                Call Now
              </a>

              <Link href="/book-service" className={ctaHeroSecondary}>
                Book Service
              </Link>
            </div>

            <div className="mt-10 hidden flex-wrap gap-4 text-sm text-white/90 sm:flex md:gap-6">
              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-red-300" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-red-300" />
                Same-Day Service Available
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-300" />
                Miami-Dade, Broward & Palm Beach
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-md">
            <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-900 md:h-72">
              <Image
                src="/securelifts-van.jpg"
                alt="SecureLifts service vehicle ready for garage door repair"
                fill
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl bg-white p-4 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
                  Today&apos;s Priority
                </p>
                <p className="mt-2 text-xl font-black">
                  Broken spring, stuck door, or opener failure?
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Call now for fast scheduling and a technician prepared for the
                  most common South Florida garage door failures.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <Link
                  href="/broken-spring-repair"
                  className="rounded-2xl bg-red-700 px-4 py-3 text-sm font-bold !text-white transition hover:bg-red-800"
                >
                  Spring Repair
                </Link>
                <Link
                  href="/hurricane-garage-doors"
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-bold !text-slate-950 transition hover:bg-slate-100"
                >
                  Storm Doors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.value} className="border-l-4 border-red-700 bg-slate-50 px-5 py-4">
              <p className="text-2xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-700">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{service.text}</p>

                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-semibold text-red-700 transition hover:text-red-800"
                  >
                    Explore {service.title} <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
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
                  <FaCheckCircle className="shrink-0 text-red-700" />
                  <span className="font-medium text-slate-800">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <Image
              src="/images/approved/technician-door-service-card.jpg"
              alt="SecureLifts technician servicing a residential garage door"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="bg-slate-100 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Customer Feedback
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              What Customers Say
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-100">
              Good service should not leave customers guessing. These are the
              kinds of results people remember.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-7"
              >
                <div className="mb-4 flex text-yellow-400">★★★★★</div>
                <p className="leading-8 text-slate-100">{review.text}</p>
                <div className="mt-5">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-slate-100">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApprovedProjectShowcase
        variant="mixed"
        eyebrow="Real SecureLifts Projects"
        heading="Real Photos Make It Easier To Trust The Company"
        intro="These are approved SecureLifts project photos from South Florida, selected to show clean installs, real service presence, and premium garage door options before a customer ever picks up the phone."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Service Areas
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              Local Garage Door Help Across South Florida
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SecureLifts serves homeowners across Miami-Dade, Broward, and Palm
              Beach with repair, replacement, and hurricane-rated garage door
              solutions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topCities.map((city) => (
              <Link
                key={city}
                href={`/garage-door-repair/${city.toLowerCase().replaceAll(" ", "-")}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-bold !text-slate-900 transition hover:border-red-300 hover:bg-white hover:!text-red-700"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                Real Project Proof
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                Real Projects Across South Florida
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                These case studies show the level of work SecureLifts handles,
                from premium custom installs to strong value-focused garage door
                upgrades.
              </p>
            </div>

            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 font-semibold text-red-700 transition hover:text-red-800"
            >
              See all reviews & case studies <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex w-max gap-6 pl-1 pr-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.title}
                  href={study.slug}
                  className="group flex w-[320px] shrink-0 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="320px"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex min-h-[320px] flex-1 flex-col p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">
                      {study.location}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {study.title}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-slate-600">
                      {study.summary}
                    </p>

                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Project Value
                        </p>
                        <p className="mt-1 text-lg font-bold text-slate-900">
                          {study.value}
                        </p>
                      </div>

                      <span className="whitespace-nowrap text-sm font-semibold text-red-700">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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

      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <div className="absolute inset-0">
            <Image
              src="/images/approved/service-van-at-door-card.jpg"
              alt="Emergency garage door repair service"
              fill
              sizes="100vw"
              quality={52}
              className="object-cover opacity-25"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-red-950/70" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Ready For Service
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Need Garage Door Service Today?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Call now for the fastest help, or send a quick request and
              SecureLifts will follow up to confirm the next step.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-white/90">
              {[
                "Broken springs, stuck doors, opener failures, and storm-door quotes",
                "Service across Miami-Dade, Broward, and Palm Beach",
                "Clear communication before the visit is booked",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-red-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <QuickLeadForm
            defaultService="Garage Door Repair"
            title="Request Fast Service"
            intro="Tell us what you need and the city. For urgent problems, call directly."
          />
        </div>
      </section>
    </main>
  );
}
