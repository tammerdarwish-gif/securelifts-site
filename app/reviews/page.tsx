import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Reviews | SecureLifts Garage Door Reviews & Case Studies",
  description:
    "Read SecureLifts customer reviews, project highlights, and real garage door case studies from South Florida homeowners and businesses.",
  alternates: {
    canonical: "https://securelifts.com/reviews",
  },
  openGraph: {
    title: "Reviews | SecureLifts Garage Door Reviews & Case Studies",
    description:
      "See what customers say about SecureLifts and browse real garage door projects from across South Florida.",
    url: "https://securelifts.com/reviews",
    siteName: "SecureLifts",
    type: "website",
  },
};

const reviewCards = [
  {
    name: "Becky H.",
    handle: "@becky",
    text: "I called for an emergency repair on my garage door. I received exceptional service the same day for a reasonable price. I couldn’t be happier with the skill and professionalism of Tammer, the technician who performed the work. I will definitely use this company again when the need arises. I recommend them highly.",
  },
  {
    name: "Eric Z.",
    handle: "@eric",
    text: "My garage install was not easy. I had three garage doors with height extenders. The owner of the company came on site to make sure all was being done correctly and the result was amazing.",
  },
  {
    name: "Elisa Becher",
    handle: "Becher Properties LLC",
    text: "Extremely helpful in accommodating our needs for our warehouse. We needed 3 doors replaced and one other door needed service. Very professional. Did everything they said they would do and did a great job. We’re very efficient and organized. We would highly recommend them.",
  },
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

const trustPoints = [
  "Emergency repair and same-day service experience",
  "High-end custom residential installations",
  "Commercial and warehouse project capability",
  "Owner-level involvement on more complex jobs",
  "Premium products and quieter opener upgrades",
  "Professional communication and organized scheduling",
];

const faqs = [
  {
    q: "What kind of reviews does SecureLifts show here?",
    a: "This page highlights customer feedback and project-based proof from residential and commercial work so visitors can see both service quality and real completed jobs.",
  },
  {
    q: "Why include case studies on a reviews page?",
    a: "Because plain star ratings are not enough. Case studies show the type of work completed, the project quality, and the level of job complexity.",
  },
  {
    q: "Can I use this page to send visitors to project examples?",
    a: "Yes. That is one of the main reasons this page is useful. It builds trust and then pushes visitors deeper into real installations and proof content.",
  },
  {
    q: "Should this page only focus on residential work?",
    a: "No. A stronger reviews page should show both residential and commercial proof so homeowners and business buyers each see relevant trust signals.",
  },
];

function Stars() {
  return (
    <div
      className="flex items-center gap-1 text-red-600"
      aria-label="5 star review"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://securelifts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Reviews",
        item: "https://securelifts.com/reviews",
      },
    ],
  };

  return (
    <>
      <Script
        id="reviews-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="reviews-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                Reviews & Project Proof
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Real customer feedback and real garage door results
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                This page is built to do what most review pages fail to do:
                show trust, show proof, and push visitors into real project
                examples that make the company feel credible.
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
                  Residential Reviews
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Commercial Feedback
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Real Project Proof
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  South Florida Focus
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/about/about-securelifts-team.jpg"
                  alt="SecureLifts service van parked in front of a home"
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
                What Customers Are Saying
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Reviews that actually help people trust the company
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Most visitors do not just want stars. They want proof that your
                company handles emergency repairs, custom installs, and business
                jobs the right way.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {reviewCards.map((review) => (
                <div
                  key={review.name}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <Stars />
                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {review.text}
                  </p>
                  <div className="mt-6 border-t border-slate-200 pt-5">
                    <p className="text-lg font-black tracking-tight">
                      {review.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {review.handle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Why This Page Matters
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  A review page should not be dead weight
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  This page should build trust fast, then move the visitor into
                  stronger proof like case studies, product pages, and service
                  pages.
                </p>
              </div>

              <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Case Study Scroller
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Scroll through real project examples
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  This is the right place to surface your project proof in a
                  more visual way instead of burying it in blog or search
                  results.
                </p>
              </div>

              <div className="text-sm font-semibold text-slate-500">
                Swipe on mobile • scroll horizontally on desktop
              </div>
            </div>

            <div className="mt-10 overflow-x-auto pb-4">
              <div className="flex w-max gap-4 pl-2 pr-12">
                {caseStudies.map((study) => (
                  <Link
                    key={study.title}
                    href={study.slug}
                    className="group flex w-[320px] shrink-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex min-h-[340px] flex-1 flex-col p-6">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                        {study.location}
                      </p>

                      <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                        {study.title}
                      </h3>

                      <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                        {study.summary}
                      </p>

                      <div className="mt-6 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                            Project Value
                          </p>
                          <p className="mt-1 text-lg font-black text-slate-900">
                            {study.value}
                          </p>
                        </div>

                        <span className="whitespace-nowrap text-sm font-bold text-red-600">
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

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Need Garage Door Service?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts and see why customers recommend us
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Whether you need emergency repair, a premium installation, opener
              service, or commercial help, SecureLifts is ready to get the job
              handled.
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