import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Hurricane Garage Doors | Impact-Rated Options in South Florida | SecureLifts",
  description:
    "Explore hurricane garage door options in South Florida including modern, traditional, carriage house, custom, and full-view aluminum impact-rated doors. Compare styles, protection levels, and realistic pricing guidance with SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/hurricane-garage-doors",
  },
  openGraph: {
    title: "Hurricane Garage Doors | Impact-Rated Options in South Florida | SecureLifts",
    description:
      "Compare modern, traditional, carriage house, custom, and aluminum full-view hurricane-rated garage doors for South Florida homes.",
    url: "https://securelifts.com/hurricane-garage-doors",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/impact-rated-garage-doors-hero.png",
        width: 1536,
        height: 1024,
        alt: "Hurricane-rated garage door options for South Florida homes",
      },
    ],
  },
};

const styleCards = [
  {
    title: "Modern Garage Doors",
    text: "Clean lines, glass options, and upscale finishes for homeowners who want a sharper modern look.",
    href: "/hurricane-garage-doors/modern",
    image: "/images/reviews/miami-beach-case-study.jpg",
  },
  {
    title: "Traditional Garage Doors",
    text: "Classic panel styles, practical and premium build paths, and strong hurricane-ready options for many homes.",
    href: "/hurricane-garage-doors/traditional",
    image: "/images/reviews/coconut-creek-case-study.jpg",
  },
  {
    title: "Carriage House Garage Doors",
    text: "Decorative carriage-style designs with more character, stronger curb appeal, and upgraded visual impact.",
    href: "/hurricane-garage-doors/carriage-house",
    image: "/images/reviews/coconut-grove-case-study.jpg",
  },
  {
    title: "Custom Garage Doors",
    text: "Higher-end custom directions for homeowners who want a more unique door design and finish outcome.",
    href: "/hurricane-garage-doors/custom",
    image: "/images/reviews/pinecrest-case-study.jpg",
  },
];

const performancePoints = [
  {
    title: "Impact-Rated Protection",
    text: "Hurricane garage doors are built to handle stronger storm conditions and help protect one of the largest openings in the home.",
  },
  {
    title: "South Florida Fit",
    text: "The right door needs to match both style and local storm-driven performance expectations, not just appearance.",
  },
  {
    title: "Stronger Long-Term Value",
    text: "A better hurricane door can improve curb appeal, daily confidence, and overall property perception at the same time.",
  },
  {
    title: "System-Level Upgrade",
    text: "The best result often includes opener, reinforcement, hardware, and overall fit working together as one system.",
  },
];

const pricingBands = [
  {
    title: "Basic Impact-Rated Doors",
    range: "$2,000 – $4,000+",
    text: "Best for homeowners focused on practical storm protection with a cleaner value-focused style path.",
  },
  {
    title: "Insulated & Upgraded Hurricane Doors",
    range: "$4,000 – $8,000+",
    text: "Best for stronger comfort, better fit and finish, quieter operation, and a more upgraded overall setup.",
  },
  {
    title: "Modern, Full-View & Luxury Hurricane Doors",
    range: "$8,000 – $20,000+",
    text: "Best for higher-end homes, luxury modern designs, larger openings, and premium finished results.",
  },
];

const productPaths = [
  {
    title: "Traditional Steel Paths",
    text: "Strong for homeowners who want classic looks with practical storm-focused protection.",
    bullets: [
      "Raynor TradeMark-style value path",
      "Encore / Aspen-style insulated upgrades",
      "Short panel, long panel, and flush directions",
    ],
  },
  {
    title: "Modern Steel & Plank Paths",
    text: "Strong for homeowners chasing a cleaner, more architectural exterior look.",
    bullets: [
      "Modern steel collections",
      "Plank and flush directions",
      "Premium finishes and upscale curb appeal",
    ],
  },
  {
    title: "Carriage House Paths",
    text: "Strong for homes that need more warmth, character, and decorative style without giving up storm-rated performance.",
    bullets: [
      "Overlay and carriage-inspired looks",
      "Decorative hardware options",
      "Traditional character with stronger build paths",
    ],
  },
  {
    title: "Aluminum Full-View & Custom Paths",
    text: "Strong for luxury homes, premium facades, and statement projects where appearance matters heavily.",
    bullets: [
      "Full-view glass and aluminum paths",
      "Custom visual layouts",
      "Premium modern and architectural appeal",
    ],
  },
];

const openerUpsells = [
  "Wall-mount opener options for cleaner premium setups",
  "Smart opener upgrades with app control",
  "Battery backup for stronger convenience and preparedness",
  "Quieter systems that better match upgraded doors",
];

const faqs = [
  {
    q: "What is the best hurricane garage door style for my home?",
    a: "That depends on whether your priority is classic appearance, modern curb appeal, carriage-style character, premium full-view design, or the best balance of storm protection and price. The strongest choice is the one that matches both your home and your performance expectations.",
  },
  {
    q: "How much do hurricane garage doors cost in South Florida?",
    a: "That depends on size, style, insulation, impact rating, finish level, and whether the project includes premium design upgrades. Most projects fall into basic impact-rated, upgraded insulated, or premium luxury pricing tiers.",
  },
  {
    q: "Are modern hurricane garage doors more expensive than traditional options?",
    a: "Often yes. Modern designs, full-view glass, custom finishes, and larger premium openings usually cost more than practical traditional panel doors.",
  },
  {
    q: "Should I upgrade the opener when replacing a hurricane garage door?",
    a: "In many cases, yes. Heavier or more premium doors often perform better when paired with the right opener, especially when the existing opener is older, underpowered, or outdated.",
  },
  {
    q: "Can hurricane garage doors still look high-end?",
    a: "Yes. Hurricane-rated does not have to mean plain. Many modern, carriage, custom, and full-view designs can still create a premium finished look while supporting stronger storm-focused performance.",
  },
];

export default function HurricaneGarageDoorsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Hurricane Garage Doors",
    url: "https://securelifts.com/hurricane-garage-doors",
    description:
      "Hurricane garage door styles, materials, pricing guidance, and impact-rated design options for South Florida homeowners.",
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
        id="hurricane-garage-doors-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="hurricane-garage-doors-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0">
            <Image
              src="/impact-rated-garage-doors-hero.png"
              alt="Hurricane-rated garage door installed on a South Florida home"
              fill
              priority
              className="object-cover opacity-45"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/84 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/15" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Hurricane Garage Doors
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Hurricane Garage Doors for South Florida Homes
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Explore impact-rated garage door options built for South Florida
                storm conditions without giving up style. Compare modern,
                traditional, carriage house, custom, and premium full-view paths
                so you can choose the right door direction before moving into a quote.
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
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
                >
                  Book Service
                </Link>
              </div>

              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Modern & Traditional Options
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Carriage & Custom Paths
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Pricing Guidance
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Opener Upgrade Paths
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/reviews/miami-beach-case-study.jpg"
                  alt="Hurricane-rated garage door options by SecureLifts"
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
                Choose Your Style Direction
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Start with the hurricane-rated look that fits your home
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Compare the design directions that fit South Florida homes,
                from clean modern doors to traditional, carriage, custom, and
                premium storm-rated options.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {styleCards.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {item.text}
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

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why Hurricane Garage Doors Matter
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Protection is part of the decision. Style is too.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The right hurricane garage door should protect the opening, fit the
                house visually, and still feel like a smart long-term upgrade instead
                of just a forced storm product.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {performancePoints.map((item) => (
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

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Pricing Guidance
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Hurricane garage door pricing in South Florida
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Pricing depends on style, opening size, build level, insulation,
              impact requirements, and how premium the finished design becomes.
              These ranges help guide the conversation without boxing the project
              into one number too early.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pricingBands.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-2xl font-black text-red-600">
                    {item.range}
                  </p>
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
                Product Paths
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Compare the main hurricane door directions before narrowing down
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Different homes and budgets need different solutions. This section
                helps visitors understand the major door categories without getting
                lost too early.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {productPaths.map((item) => (
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

                  <div className="mt-5 space-y-3">
                    {item.bullets.map((line) => (
                      <div
                        key={line}
                        className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Complete The System
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                A stronger hurricane door often needs the right opener strategy too
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                When the door gets heavier, more premium, or more specialized, the
                opener matters more. That is where smart upgrades, quieter systems,
                and better-matched hardware start making real sense.
              </p>

              <div className="mt-8 space-y-4">
                {openerUpsells.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                  >
                    <span className="mt-0.5 text-red-600">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/garage-door-opener"
                  className="inline-flex items-center text-base font-bold text-red-600 transition hover:text-red-700"
                >
                  Explore garage door opener options →
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Smart Next Step
              </p>
              <h3 className="mt-3 text-3xl font-black tracking-tight">
                Want help choosing the right hurricane garage door?
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                If you already know the style you want, go straight into that page.
                If you want guidance, call SecureLifts and we will help narrow the
                options based on your home style, storm needs, and realistic price path.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
                >
                  Call {PHONE}
                </a>

                <Link
                  href="/garage-door-installation"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-6 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Go To Installation Page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                FAQ
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Hurricane garage door questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black tracking-tight">
                    {faq.q}
                  </h3>
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
              Ready To Compare Hurricane Garage Door Options?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts to choose the right impact-rated garage door for your home
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              We will help you compare design directions, realistic price ranges,
              and upgrade paths without pushing you into the wrong setup.
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
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
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
