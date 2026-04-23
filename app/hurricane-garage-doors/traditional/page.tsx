import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import TraditionalDesignGallery from "../../components/traditionaldesigngallery";
type FinishOption = {
  id: string;
  name: string;
  manufacturer: "raynor" | "clopay" | "generic";
  type: "solid" | "woodtone";
  swatch?: string;
  image?: string;
};

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

const FINISH_LIBRARY = {
  generic: {
    white: {
      id: "generic-white",
      name: "White",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#F8F8F8",
    },
    almond: {
      id: "generic-almond",
      name: "Almond",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#E7D7B7",
    },
    bronze: {
      id: "generic-bronze",
      name: "Bronze",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#6E5B49",
    },
    brown: {
      id: "generic-brown",
      name: "Brown",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#6B4F3A",
    },
    taupe: {
      id: "generic-taupe",
      name: "Taupe",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#A79B8B",
    },
    sandtone: {
      id: "generic-sandtone",
      name: "Sandstone",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#C8B89D",
    },
    desertTan: {
      id: "generic-desert-tan",
      name: "Desert Tan",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#C9B28F",
    },
    black: {
      id: "generic-black",
      name: "Black",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#1C1C1C",
    },
    gray: {
      id: "generic-gray",
      name: "Gray",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#7C8187",
    },
    
    red: {
      id: "generic-red",
      name: "Red",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#7A1E1E",
    },
  },
  raynor: {
    mocha: {
      id: "raynor-mocha",
      name: "Mocha",
      manufacturer: "raynor",
      type: "woodtone" as const,
      image: "/finishes/raynor/Mocha-Gunite-Encore.png",
    },
    shale: {
      id: "raynor-shale",
      name: "Shale",
      manufacturer: "raynor",
      type: "solid" as const,
      swatch: "#8A8478",
    },
  },
  clopay: {
    walnut: {
      id: "clopay-walnut",
      name: "Walnut",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/walnut.png",
    },
    charcoal: {
      id: "clopay-charcoal",
      name: "Charcoal",
      manufacturer: "clopay",
      type: "solid" as const,
      swatch: "#3B3E43",
    },
    medium: {
      id: "clopay-medium",
      name: "Medium Finish",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/Medium-Finish.png",
    },
    mochaBrown: {
      id: "clopay-mocha-brown",
      name: "Mocha Brown",
      manufacturer: "clopay",
      type: "solid" as const,
      swatch: "#5B4638",
    },
  },
} as const;

const TRADITIONAL_COLORS = {
  nonInsulated: [
    FINISH_LIBRARY.generic.white,
    FINISH_LIBRARY.generic.almond,
    FINISH_LIBRARY.generic.sandtone,
    FINISH_LIBRARY.generic.brown,
  ],
  insulated: [
    FINISH_LIBRARY.generic.white,
    FINISH_LIBRARY.generic.almond,
    FINISH_LIBRARY.generic.sandtone,
    FINISH_LIBRARY.generic.desertTan,
    FINISH_LIBRARY.generic.bronze,
    FINISH_LIBRARY.generic.brown,
    FINISH_LIBRARY.generic.taupe,
    FINISH_LIBRARY.raynor.mocha,
    FINISH_LIBRARY.raynor.shale,
    FINISH_LIBRARY.clopay.walnut,
    FINISH_LIBRARY.clopay.medium,
    FINISH_LIBRARY.clopay.mochaBrown,
    FINISH_LIBRARY.generic.gray,
    FINISH_LIBRARY.clopay.charcoal,
    FINISH_LIBRARY.generic.black,
    FINISH_LIBRARY.generic.red,
  ],
};

export const metadata: Metadata = {
  title: "Traditional Garage Doors | SecureLifts South Florida",
  description:
    "Explore traditional garage door styles in South Florida including non-insulated, insulated, and premium options with classic panel designs, color choices, and hurricane-rated upgrades from SecureLifts.",
  alternates: {
    canonical: "https://securelifts.com/hurricane-garage-doors/traditional",
  },
  openGraph: {
    title: "Traditional Garage Doors | SecureLifts South Florida",
    description:
      "Compare traditional garage door styles, panel designs, colors, insulation levels, and pricing ranges for South Florida homes.",
    url: "https://securelifts.com/hurricane-garage-doors/traditional",
    siteName: "SecureLifts",
    type: "website",
  },
};

const buildLevels = [
  {
    title: "Value-Focused Traditional",
    subtitle: "Practical Replacement",
    highlight: "Best for simple replacement",
    range: "$1,500 – $3,500+",
    text: "Best for homeowners who want a clean, dependable traditional garage door without overbuilding the project.",
    bullets: [
      "Non-insulated or basic insulation path",
      "Standard colors and core traditional styles",
      "Strong fit for practical replacement projects",
    ],
  },
  {
    title: "Insulated Traditional",
    subtitle: "Most Popular",
    highlight: "Best balance of price and performance",
    range: "$2,500 – $5,500+",
    text: "Best for homeowners who want better comfort, quieter operation, stronger overall feel, and more design and color flexibility.",
    bullets: [
      "Better comfort and quieter operation",
      "Expanded color and design access",
      "Better fit for attached garages and daily use",
    ],
  },
  {
    title: "Premium Traditional",
    subtitle: "High-End Finish",
    highlight: "Best for upgraded look and feel",
    range: "$4,500 – $8,000+",
    text: "Best for homeowners who want stronger construction, upgraded insulation, cleaner fit and finish, and a more polished final result.",
    bullets: [
      "Stronger build and better finish",
      "Premium finish directions and appearance",
      "Best overall visual impact and system feel",
    ],
  },
];

const panelOptions = [
  {
    title: "Short Panel",
    text: "Classic traditional look used on most homes.",
    availability: "Available Non-Insulated & Insulated",
    image: "/images/doors/short-panel.jpg",
  },
  {
    title: "Long Panel",
    text: "Cleaner, more stretched look with a slightly upgraded feel.",
    availability: "Available Non-Insulated & Insulated",
    image: "/images/doors/long-panel.jpg",
  },
  {
    title: "Flush",
    text: "Minimal, flat look for a cleaner and simpler appearance.",
    availability: "Available Non-Insulated & Insulated",
    image: "/images/doors/flush-panel.jpg",
  },
  {
    title: "Recessed Colonial",
    text: "A more detailed recessed-panel look with classic traditional character.",
    availability: "Available Non-Insulated & Insulated",
    image: "/images/doors/recessed-colonial.jpg",
  },
  {
    title: "Shaker",
    text: "Clean square-panel design with a more refined architectural look.",
    availability: "Insulated Models Only",
    image: "/images/doors/shaker.jpg",
  },
  {
    title: "Plank",
    text: "Horizontal plank styling for homeowners who want a cleaner and more current traditional direction.",
    availability: "Insulated Models Only",
    image: "/images/doors/plank.jpg",
  },
  {
    title: "Ranch Carriage",
    text: "A recessed long-panel style that adds a stronger carriage-inspired traditional feel.",
    availability: "Insulated Models Only",
    image: "/images/doors/ranch-carriage.jpg",
  },
];
const reasons = [
  "Classic style that works on a wide range of homes",
  "Better curb appeal without needing an ultra-modern design",
  "Available in non-insulated, insulated, and premium builds",
  "Stronger hurricane-focused upgrade paths for South Florida",
  "Cleaner, quieter, and more reliable than aging door systems",
  "A practical way to improve appearance and daily function together",
];

const upgradeOptions = [
  "Decorative window options",
  "Hardware accents for a stronger carriage-style feel",
  "Insulated build upgrades",
  "Hurricane-rated reinforcement paths",
  "LiftMaster opener upgrades",
  "Battery backup and smart opener add-ons",
];

const faqs = [
  {
    q: "What is the best traditional garage door option for most homes?",
    a: "For many homes, a traditional insulated steel door is the strongest overall balance of appearance, comfort, durability, and price. The right fit still depends on budget, storm needs, and how upgraded you want the finished look to feel.",
  },
  {
    q: "What is the difference between non-insulated and insulated traditional garage doors?",
    a: "Non-insulated doors usually make sense when budget is the main priority. Insulated doors are a stronger choice when you want quieter operation, better comfort, and a more solid overall feel.",
  },
  {
    q: "Are traditional garage doors still a good choice for higher-end homes?",
    a: "Yes. Traditional doors can still look excellent on higher-end homes when the panel style, finish, insulation level, windows, and overall fit are chosen well.",
  },
  {
    q: "Can I still get a traditional garage door with hurricane-rated protection?",
    a: "Yes. In South Florida, traditional-style garage doors can still be built around stronger hurricane-rated requirements depending on the system and project needs.",
  },
];

export default function TraditionalGarageDoorsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Traditional Garage Doors",
    url: "https://securelifts.com/hurricane-garage-doors/traditional",
    description:
      "Traditional garage door styles, design options, color choices, insulation levels, and pricing guidance for South Florida homeowners.",
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
        id="traditional-garage-doors-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="traditional-garage-doors-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
                SecureLifts Traditional Garage Doors
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                Traditional Garage Doors for South Florida Homes
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Traditional garage doors remain one of the smartest choices for homeowners who want
                a clean, proven look with strong daily performance. This page helps you compare panel
                designs, color paths, build levels, and realistic price ranges before you make a decision.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <div className="relative h-[340px] w-full md:h-[460px]">
                <Image
                  src="/images/reviews/coconut-creek-case-study.jpg"
                  alt="Traditional garage door installation by SecureLifts"
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
                Choose Your Build Level
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Traditional garage door pricing should guide the decision, not trap it
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Start with the build level that fits your home, budget, and goals. From there, compare
                the designs, colors, and upgrade paths that make the most sense for your project.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {buildLevels.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-3xl border bg-white p-7 shadow-sm ${
                    index === 1 ? "border-red-300 shadow-md ring-2 ring-red-100" : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                      {item.subtitle}
                    </p>
                    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-2xl font-black text-red-600">
                    {item.range}
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <div className="mt-6 space-y-3">
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

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Design Options
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Choose the panel style that fits your home best
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Design has the biggest impact on how the finished garage door looks from the street.
                Compare the panel styles first, then check availability to see whether each design is
                offered in both build paths or only in insulated models.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-green-700">
                  Green = Available Non-Insulated & Insulated
                </span>
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-red-700">
                  Red = Insulated Models Only
                </span>
              </div>
              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700">
                Insulated traditional garage doors open up additional design and finish options beyond the
                standard non-insulated lineup. If you want more style flexibility, quieter operation, and
                a stronger overall feel, an insulated build is usually the better fit.
              </div>
            </div>

            <TraditionalDesignGallery items={panelOptions} />
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Standard Colors
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Included color directions that work well on many homes
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                These standard finish options are a strong fit for many non-insulated traditional garage
                door projects and straightforward replacement jobs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TRADITIONAL_COLORS.nonInsulated.map((color) => (
                  <FinishSwatchCard key={color.id} item={color} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Insulated & Premium Colors
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Expanded finish options available on insulated traditional doors
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Insulated traditional garage doors give you access to a wider finish range, including more
                upgraded colors and premium-looking options that can make the entire exterior feel stronger.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TRADITIONAL_COLORS.insulated.map((color) => (
                  <FinishSwatchCard key={color.id} item={color} />
                ))}
              </div>

              
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why Traditional Still Wins
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                A strong fit for homeowners who want proven style without overcomplicating the choice
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Traditional garage doors work because they are practical, flexible, and visually proven.
                They can stay budget-conscious, step into insulated mid-range, or be upgraded into a more
                polished premium finished result.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-4 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Upgrade Paths
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                A better door usually means a better full system
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The strongest traditional door setups usually do not stop at the panel itself. Windows,
                hardware, insulation, storm performance, and opener upgrades all influence the final result.
              </p>
            </div>

            <div className="grid gap-4">
              {upgradeOptions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-800"
                >
                  {item}
                </div>
              ))}
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
                Traditional garage door questions
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
              Ready To Compare Traditional Garage Door Options?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts to choose the right traditional garage door for your home
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Get help comparing build levels, panel styles, colors, and realistic price ranges so you can
              choose the right traditional garage door for your home with confidence.
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

function FinishSwatchCard({ item }: { item: FinishOption }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div
        className="h-14 w-full rounded-xl border border-slate-200 bg-cover bg-center"
        style={
          item.type === "woodtone"
            ? { backgroundImage: `url(${item.image})` }
            : { background: item.swatch }
        }
      />
      <p className="mt-3 text-sm font-bold text-slate-800">{item.name}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
        {item.type === "woodtone" ? "Woodtone" : "Solid"}
        {item.manufacturer !== "generic" && ` • ${item.manufacturer}`}
      </p>
    </div>
  );
}