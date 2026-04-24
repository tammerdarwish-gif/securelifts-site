import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceSchema from "../../components/ServiceSchema";
import FAQSchema from "../../components/FAQSchema";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ReviewTrustSection from "../../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Modern Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs modern hurricane garage doors in South Florida featuring clean design, glass panels, and storm-ready performance. Call (866) 828-1818.",
  openGraph: {
    title: "Modern Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Modern hurricane garage doors with glass panels and clean architectural design built for South Florida storms.",
    images: [
      {
        url: "/hurricane-modern-hero.png",
        width: 1536,
        height: 1024,
        alt: "Modern hurricane garage door with full glass panels installed by SecureLifts in South Florida on a contemporary home",
      },
    ],
  },
};

const buildLevels = [
  {
    title: "Value-Focused Modern",
    subtitle: "Clean Entry Point",
    highlight: "Best for practical modern upgrades",
    range: "$4,000 – $8,000+",
    text: "A strong starting point for a cleaner modern look without moving into the highest-end full-glass or custom configurations.",
    bullets: [
      "Modern steel and clean-line design paths",
      "Stronger visual upgrade than standard panel doors",
      "Good fit when you want a modern upgrade with controlled cost",
    ],
  },
  {
    title: "Insulated Modern",
    subtitle: "Most Popular",
    highlight: "Best balance of look and performance",
    range: "$8,000 – $14,000+",
    text: "A balanced option for a sharper architectural look, stronger comfort, quieter operation, and a more upgraded overall system.",
    bullets: [
      "Better comfort and quieter operation",
      "Stronger frame, finish, and overall feel",
      "More attractive fit for daily-use garages and higher-end homes",
    ],
  },
  {
    title: "Premium Full-View & Custom Modern",
    subtitle: "High-End Finish",
    highlight: "Best for statement curb appeal",
    range: "$14,000 – $20,000+",
    text: "A higher-end path for premium full-view glass, custom layouts, upscale materials, and stronger architectural impact.",
    bullets: [
      "Full-view glass and premium frame directions",
      "Higher-end custom appearance and finish",
      "Best for luxury homes and strong visual impact",
    ],
  },
];

const designOptions = [
  {
    title: "Full-View Glass",
    text: "Large glass sections for a stronger modern statement and a more open, upscale look.",
    availability: "Premium Modern Option",
  },
  {
    title: "Aluminum Frame Modern",
    text: "Clean contemporary framing with stronger structure and a refined architectural finish.",
    availability: "Available in Multiple Build Paths",
  },
  {
    title: "Frosted Glass",
    text: "A modern look with more privacy while still allowing natural light into the garage.",
    availability: "Premium Modern Option",
  },
  {
    title: "Tinted Glass",
    text: "A sleeker exterior appearance with better privacy and a stronger luxury feel.",
    availability: "Premium Modern Option",
  },
  {
    title: "Flush Modern Panels",
    text: "Minimal flat-face styling for homes that need a cleaner and simpler contemporary look.",
    availability: "Available in Multiple Build Paths",
  },
  {
    title: "Custom Layouts",
    text: "Panel configuration, glass placement, and proportions designed around the architecture of the home.",
    availability: "Premium Modern Option",
  },
];

const reasons = [
  "Modern design guidance for South Florida homes",
  "Cleaner alignment and fit for contemporary architecture",
  "Storm-ready installation with real curb appeal in mind",
  "Help choosing glass, frame, privacy, and layout direction",
  "High-end presentation without losing performance focus",
  "Professional communication and clean execution",
];

const compareStyles = [
  {
    title: "Traditional Hurricane Garage Doors",
    text: "Classic panel-style hurricane garage doors with stronger familiarity, broader pricing flexibility, and timeless curb appeal.",
    href: "/hurricane-garage-doors/traditional",
  },
  {
    title: "Carriage House Garage Doors",
    text: "Decorative carriage-style hurricane garage doors with more warmth, character, and premium traditional styling.",
    href: "/hurricane-garage-doors/carriage-house",
  },
  {
    title: "Custom Hurricane Garage Doors",
    text: "Higher-end custom hurricane garage door directions built around the exact look and finish your home needs.",
    href: "/hurricane-garage-doors/custom",
  },
];

const standardFinishDirections = [
  "Black aluminum frame",
  "Bronze frame options",
  "Dark modern finishes",
  "Clean neutral frame directions",
];

const premiumFinishDirections = [
  "Frosted glass combinations",
  "Tinted glass combinations",
  "Premium frame finish upgrades",
  "Custom modern layout directions",
];

const fullViewFinishSwatches = [
  {
    name: "Clear Anodized Aluminum",
    type: "Aluminum Finish",
    swatch: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 50%, #f1f5f9 100%)",
  },
  {
    name: "Dark Bronze Anodized",
    type: "Aluminum Finish",
    swatch: "#3b2f26",
  },
  {
    name: "Black Anodized",
    type: "Aluminum Finish",
    swatch: "#111827",
  },
  {
    name: "Custom Powder-Coated Colors",
    type: "Custom Finish",
    swatch: "linear-gradient(135deg, #111827 0%, #64748b 45%, #e5e7eb 100%)",
  },
  {
    name: "Elegant Finish Woodtones",
    type: "Woodtone Finish",
    swatch: "linear-gradient(135deg, #7c4a24 0%, #b7793b 45%, #3f2414 100%)",
  },
];

const modernSteelFinishSwatches = [
  { name: "White", type: "Standard Color", swatch: "#f8fafc" },
  { name: "Almond", type: "Standard Color", swatch: "#e8dcc4" },
  { name: "Sandtone", type: "Standard Color", swatch: "#c8b89d" },
  { name: "Bronze", type: "Standard Color", swatch: "#6e5b49" },
  { name: "Mocha Brown", type: "Standard Color", swatch: "#5b4638" },
  { name: "Black", type: "Premium Color", swatch: "#111827" },
  { name: "Charcoal", type: "Premium Color", swatch: "#374151" },
  { name: "Iron Ore", type: "Premium Color", swatch: "#3f3f3b" },
  {
    name: "Ultra-Grain Wood Finishes",
    type: "Wood-Look Finish",
    swatch: "linear-gradient(135deg, #9a5f2f 0%, #d19a5b 45%, #5c3218 100%)",
  },
  {
    name: "Plank Wood Finishes",
    type: "Wood-Look Finish",
    swatch: "linear-gradient(90deg, #6b3f22 0 18%, #8b5a2b 18% 36%, #4b2b17 36% 54%, #a06a34 54% 72%, #5b351d 72% 100%)",
  },
  {
    name: "Lustra Black",
    type: "Matte Finish",
    swatch: "#0f172a",
  },
  {
    name: "Lustra Charcoal",
    type: "Matte Finish",
    swatch: "#334155",
  },
  {
    name: "Lustra Silver",
    type: "Matte Finish",
    swatch: "linear-gradient(135deg, #f8fafc 0%, #94a3b8 55%, #e2e8f0 100%)",
  },
];

const glassPreviewTiles = [
  {
    name: "Clear Glass",
    text: "Maximum visibility and natural light for a clean full-view look.",
    swatch:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(186,230,253,0.65)), repeating-linear-gradient(45deg, rgba(148,163,184,0.18) 0 2px, transparent 2px 12px)",
  },
  {
    name: "Impact Glass",
    text: "Built for storm-ready applications where stronger performance matters.",
    swatch:
      "linear-gradient(135deg, rgba(219,234,254,0.98), rgba(148,163,184,0.70)), repeating-linear-gradient(90deg, rgba(30,41,59,0.18) 0 3px, transparent 3px 18px)",
  },
  {
    name: "Tinted Glass",
    text: "Darker appearance with more privacy and a sharper modern exterior.",
    swatch:
      "linear-gradient(135deg, #020617 0%, #334155 55%, #64748b 100%)",
  },
  {
    name: "Frosted / Obscure Glass",
    text: "Soft privacy while keeping the modern glass-door appearance.",
    swatch:
      "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.95), transparent 28%), linear-gradient(135deg, #f8fafc, #cbd5e1)",
  },
  {
    name: "Insulated Glass",
    text: "Better comfort and stronger overall system feel for daily-use garages.",
    swatch:
      "linear-gradient(135deg, #bae6fd 0%, #f8fafc 45%, #93c5fd 100%), repeating-linear-gradient(0deg, rgba(15,23,42,0.14) 0 2px, transparent 2px 18px)",
  },
  {
    name: "Rain / Reed Glass",
    text: "Decorative privacy glass options that add texture without losing style.",
    swatch:
      "repeating-linear-gradient(90deg, #cbd5e1 0 5px, #f8fafc 5px 10px, #94a3b8 10px 12px)",
  },
];

const faqs = [
  {
    question: "Are glass garage doors strong enough for hurricanes?",
    answer:
      "Yes, when built correctly. Modern hurricane garage doors use reinforced frames and impact-resistant glass options designed for storm performance.",
  },
  {
    question: "Do modern garage doors reduce privacy?",
    answer:
      "They can, but tinted, frosted, or obscure glass options allow you to control visibility while maintaining the modern look.",
  },
  {
    question: "Are modern garage doors high maintenance?",
    answer:
      "Not when installed correctly. Most modern systems use durable aluminum and treated glass designed for long-term use.",
  },
  {
    question: "Do modern garage doors increase home value?",
    answer:
      "Yes. A well-designed modern garage door can significantly increase curb appeal and perceived property value.",
  },
];

export default function ModernHurricaneGarageDoorsPage() {
  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Modern Hurricane Garage Doors in South Florida"
        description="Modern hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal."
        url="https://securelifts.com/hurricane-garage-doors/modern"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
          {
            label: "Modern",
            href: "https://securelifts.com/hurricane-garage-doors/modern",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Modern" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[780px] overflow-hidden">
        <Image
          src="/hurricane-modern.png"
          alt="Modern hurricane garage door with full glass panels installed by SecureLifts in South Florida on a contemporary home"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-end px-6 pb-14 pt-36 md:pt-40">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">
              SecureLifts Modern Storm Protection
            </p>

            <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">
              Modern Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 text-lg leading-8 text-white/95 md:text-xl">
              Clean lines. Glass panels. Real storm-ready strength. SecureLifts
              installs modern hurricane garage doors that combine design and
              performance for South Florida homes.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

    {/* VISUAL DIRECTION CARDS */}
<section className="bg-slate-50 px-6 py-16 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
        Modern Door Direction
      </p>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        Choose your modern garage door direction first
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        Start by choosing between a full glass look and a modern steel door with window options. That choice affects the final appearance, budget range, and overall feel of the project.
      </p>
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700">
        Images are for illustration only. Final door style, glass, color, finish, wind-load requirements,
        and product availability must be confirmed with a SecureLifts representative during measurement,
        sample review, and project verification.
      </div>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {[
        {
          title: "Full-View Aluminum & Glass",
          image: "/images/doors/full-view-modern.jpg",
          badge: "Premium Modern Option",
          text: "Best for luxury homes, contemporary architecture, and a stronger modern statement.",
          points: [
            "1-pane and 2-pane layouts",
            "Impact, tempered, tinted, and insulated glass",
            "Anodized, custom color, and woodtone finishes",
          ],
        },
        {
          title: "Modern Steel With Windows",
          image: "/images/doors/modern-steel-windows.jpg",
          badge: "Available in Multiple Build Paths",
          text: "Best for a clean modern look with more flexibility than full glass.",
          points: [
            "Flush and grooved panel designs",
            "Short, long, and slim window layouts",
            "Standard, premium, Lustra, and Ultra-Grain finishes",
          ],
        },
      ].map((item) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative h-72 w-full bg-slate-100">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-7">
            <p
              className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                item.badge.includes("Premium")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.badge}
            </p>

            <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {item.text}
            </p>

            <div className="mt-6 space-y-3">
              {item.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* MODERN FINISH & GLASS SHOWROOM */}
<section className="bg-white px-6 py-16 md:py-20">
  <div className="mx-auto max-w-7xl">
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
        Modern Finish & Glass Showroom
      </p>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">
        Compare modern colors, finishes, and glass options visually
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        Finish and glass choices have a major impact on the final look. Compare full-view aluminum finishes, modern steel colors, and privacy-focused glass options before narrowing down the right direction.
      </p>
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-slate-700">
        Swatches and glass samples shown here are guides only. Actual samples may vary by manufacturer,
        product line, lighting, screen display, size, local code requirements, and final approved order.
        A SecureLifts representative must verify samples and specifications before ordering.
      </div>
    </div>

    <div className="mt-10 grid gap-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Full-View Aluminum Finishes
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          Aluminum, custom color, and woodtone finish paths
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Full-view glass doors create a more architectural look. The frame finish helps determine whether the final result feels bright, dark, custom, or warmer with a woodtone direction.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {fullViewFinishSwatches.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="h-16 w-full rounded-xl border border-slate-200 transition group-hover:scale-[1.02]"
                style={{ background: item.swatch }}
              />
              <p className="mt-3 text-sm font-bold text-slate-900">{item.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {item.type}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Modern Steel Colors
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          Standard, premium, matte, and wood-look finish paths
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Modern steel doors provide a cleaner modern look with more design and budget flexibility than a full-view glass system.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modernSteelFinishSwatches.map((item) => (
            <div
              key={item.name}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="h-16 w-full rounded-xl border border-slate-200 transition group-hover:scale-[1.02]"
                style={{ background: item.swatch }}
              />
              <p className="mt-3 text-sm font-bold text-slate-900">{item.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {item.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
          Glass Preview Options
        </p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
          Choose how much light, privacy, and storm performance you want
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Glass selection affects privacy, light, appearance, and performance. Review the main glass directions before scheduling a measurement and sample review.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {glassPreviewTiles.map((item) => (
          <div
            key={item.name}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className="relative h-36 w-full overflow-hidden border-b border-slate-200 transition group-hover:scale-[1.02]"
              style={{ background: item.swatch }}
            >
              <div className="absolute inset-5 grid grid-cols-3 gap-2 rounded-2xl border border-white/80 bg-white/20 p-2 shadow-inner backdrop-blur-[1px]">
                <div className="rounded-lg border border-white/70 bg-white/20" />
                <div className="rounded-lg border border-white/70 bg-white/20" />
                <div className="rounded-lg border border-white/70 bg-white/20" />
                <div className="rounded-lg border border-white/70 bg-white/20" />
                <div className="rounded-lg border border-white/70 bg-white/20" />
                <div className="rounded-lg border border-white/70 bg-white/20" />
              </div>
            </div>
            <div className="p-5">
              <h4 className="text-lg font-black tracking-tight text-slate-900">
                {item.name}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* DESIGN OPTIONS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Modern Design Options
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Choose the modern design direction that fits your home best
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Design has the biggest impact on how the finished garage door looks
              from the street. Compare the main modern directions first, then check
              availability to see whether the option fits multiple build paths or
              premium modern configurations.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-green-700">
                Green = Available in Multiple Build Paths
              </span>
              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-red-700">
                Red = Premium Modern Option
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-semibold leading-7 text-gray-700">
              Premium modern garage doors open up stronger glass, frame, and
              layout options beyond simpler modern paths. For the sharpest
              architectural result, premium modern is usually the better fit.
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {designOptions.map((item) => {
              const isPremium = item.availability
                .toLowerCase()
                .includes("premium");
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                      isPremium
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.availability}
                  </p>

                  <p className="mt-4 leading-7 text-gray-700">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* WHY MODERN */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why Homeowners Choose This Style
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why modern hurricane garage doors stand out from the street
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Modern hurricane garage doors are a strong choice when you want clean lines,
              storm-ready construction, and a higher-end front elevation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                  ✓
                </div>
                <p className="leading-7 text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE OTHER STYLES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Modern Look, Real Protection
            </p>
            <h2 className="mb-6 text-4xl font-bold">
              Modern style should still feel like a smart storm-ready decision
            </h2>
            <p className="mb-6 text-lg leading-8 text-gray-700">
              Modern hurricane garage doors are designed for homeowners who want
              a clean, high-end look without compromising performance.
            </p>
            <p className="mb-6 text-lg leading-8 text-gray-700">
              The best result comes from choosing the right balance of glass,
              privacy, frame finish, and build level so the door fits both the
              home and the way the garage is used every day.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              For many South Florida homes, a modern storm-ready garage door is
              one of the fastest ways to upgrade curb appeal while still making
              a smart long-term protection decision.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Hurricane Styles
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Looking at other style options too?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Modern is ideal for a clean architectural look, but traditional,
              carriage-house, and custom styles may be a better fit depending on
              the home’s design and budget.
            </p>

            <div className="flex flex-col gap-4">
              {compareStyles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/30"
                >
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mb-4 leading-7 text-gray-700">{item.text}</p>

                  <span className="inline-flex items-center font-semibold text-red-600 transition group-hover:text-red-700">
                    Explore this style →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewTrustSection
        heading="Why South Florida Homeowners Choose SecureLifts"
        intro="When South Florida homeowners invest in stronger garage doors, they want a company that communicates clearly, installs cleanly, and delivers results that actually hold up."
        reviews={[
          {
            name: "Michael R.",
            text: "Fast response, professional service, and the garage door works better than ever.",
          },
          {
            name: "Jessica T.",
            text: "They showed up on time, explained everything clearly, and got it done right.",
          },
          {
            name: "Daniel P.",
            text: "Best garage door company I’ve dealt with. Clean work and excellent communication.",
          },
          {
            name: "Alicia T.",
            text: "The whole process felt organized and professional from the estimate to the final install.",
          },
        ]}
      />

      {/* FAQ */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Modern Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing modern storm-ready garage
              doors in South Florida.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 shadow-xl md:px-12">
          <h2 className="mb-6 text-4xl font-bold">
            Upgrade to a modern storm-ready garage door
          </h2>

          <p className="mb-8 text-lg text-white/80">
            Compare modern build levels, glass options, layout directions, and
            realistic price ranges so you can choose the right modern hurricane
            garage door for your home.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              Call (866) 828-1818
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
  );
}