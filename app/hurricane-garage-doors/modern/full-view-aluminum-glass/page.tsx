import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Breadcrumbs from "../../../components/Breadcrumbs";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import FAQSchema from "../../../components/FAQSchema";
import ServiceSchema from "../../../components/ServiceSchema";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Full-View Aluminum & Glass Garage Doors | SecureLifts South Florida",
  description:
    "Explore full-view aluminum and glass garage door designs, Raynor AlumaView AV300-style construction, colors, glass options, and storm-ready planning for South Florida homes.",
  alternates: {
    canonical:
      "https://securelifts.com/hurricane-garage-doors/modern/full-view-aluminum-glass",
  },
  openGraph: {
    title: "Full-View Aluminum & Glass Garage Doors | SecureLifts",
    description:
      "Premium full-view aluminum and glass garage door design options for South Florida homes.",
    url: "https://securelifts.com/hurricane-garage-doors/modern/full-view-aluminum-glass",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/images/doors/full-view-modern.jpg",
        width: 960,
        height: 720,
        alt: "Full-view aluminum and glass garage door design",
      },
    ],
  },
};

const quickSpecs = [
  ["Model direction", "Raynor AlumaView AV300-style full-view aluminum"],
  ["Max size", "Up to 24 ft x 24 ft depending on final configuration"],
  ["Section thickness", "3 in full-view aluminum section"],
  ["Construction", "Rail and stile aluminum with tongue-and-groove section joint"],
  ["Operation", "Manual, motor, or hand chain depending on project"],
  ["Track paths", "Normal headroom, low headroom, lift clearance, vertical lift, incline, contour, and custom track planning"],
];

const constructionItems = [
  {
    title: "3 in Aluminum Sections",
    text: "A deeper section profile helps create a stronger full-view door structure for larger modern openings.",
  },
  {
    title: "Rail & Stile Build",
    text: "Aluminum rails and stiles frame the glass panels for the clean commercial-inspired modern look.",
  },
  {
    title: "Tongue-and-Groove Joints",
    text: "Section joints are designed for cleaner alignment, better fit, and smoother operation.",
  },
  {
    title: "Wind-Load Planning",
    text: "Additional trussing and certified wind-load options can be reviewed when the opening or location requires it.",
  },
  {
    title: "IECC / Title 24 Air Package",
    text: "Header and jamb seal packages may be used when air infiltration requirements matter for the project.",
  },
  {
    title: "Custom Track Options",
    text: "Track and hardware can be configured around special clearances, lift needs, and architectural constraints.",
  },
];

const anodizedFinishes = [
  { name: "Clear", swatch: "linear-gradient(135deg,#f8fafc,#cbd5e1,#f1f5f9)" },
  { name: "Champagne", swatch: "linear-gradient(135deg,#f8ecd0,#d7bd87,#fff7e0)" },
  { name: "Light Bronze", swatch: "#9b7b55" },
  { name: "Medium Bronze", swatch: "#73563b" },
  { name: "Dark Bronze", swatch: "#3f2f24" },
  { name: "Extra Dark Bronze", swatch: "#211814" },
  { name: "Black", swatch: "#0f172a" },
];

const woodtones = [
  { name: "Aged Dark Oak", image: "/images/woodtones/elegant/aged-dark-oak.png" },
  { name: "American Maple", image: "/images/woodtones/elegant/american-maple.png" },
  { name: "Cherry", image: "/images/woodtones/elegant/cherry.png" },
  { name: "Cherry Flame", image: "/images/woodtones/elegant/cherry-flame.png" },
  { name: "Colony Maple", image: "/images/woodtones/elegant/colony-maple.png" },
  { name: "Dark Walnut", image: "/images/woodtones/elegant/dark-walnut.png" },
  { name: "European Cherry", image: "/images/woodtones/elegant/european-cherry.png" },
  { name: "Golden Oak", image: "/images/woodtones/elegant/golden-oak.png" },
  { name: "Knotty Pine", image: "/images/woodtones/elegant/knotty-pine.png" },
  { name: "National Walnut", image: "/images/woodtones/elegant/national-walnut.png" },
  { name: "Oak", image: "/images/woodtones/elegant/oak.png" },
  { name: "Table Cherry", image: "/images/woodtones/elegant/table-cherry.png" },
  { name: "Teak", image: "/images/woodtones/elegant/teak.png" },
];

const glassOptions = [
  "1/8 in single-pane glass",
  "3/16 in single-pane glass",
  "1/4 in single-pane glass",
  "1/2 in insulated glass",
  "1 in insulated glass",
  "11/32 in clear impact glass",
  "11/32 in bronze tinted impact glass",
  "11/32 in gray tinted impact glass",
  "Acrylic or polycarbonate glazing options",
];

const visualDirections = [
  {
    title: "Clear Full-View",
    image: "/images/doors/full-view-modern.jpg",
    text: "Maximum glass and natural light for the cleanest modern expression.",
  },
  {
    title: "Dark Frame Full-View",
    image: "/images/approved/modern-black-glass-card.jpg",
    text: "Black or dark bronze framing creates a sharper architectural look.",
  },
  {
    title: "Luxury Residential Full-View",
    image: "/images/case-studies/miami-beach/Full-view-garage-door-installation-in-miami-beach.jpg",
    text: "A strong direction for premium homes that need a modern statement door.",
  },
];

const faqs = [
  {
    question: "What is a full-view aluminum and glass garage door?",
    answer:
      "It is a modern garage door built around aluminum framing and large glass sections, creating a clean architectural look with more natural light than a traditional panel door.",
  },
  {
    question: "Can full-view aluminum doors use impact glass?",
    answer:
      "Yes. Raynor AlumaView AV300-style options include clear, bronze tinted, and gray tinted impact glazing paths, but the final glass must match the project requirements.",
  },
  {
    question: "Can SecureLifts help with colors and glass choices?",
    answer:
      "Yes. SecureLifts can help compare anodized finishes, powder-coat color paths, woodtone looks, glass privacy, insulation, and wind-load requirements.",
  },
];

export default function FullViewAluminumGlassPage() {
  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Full-View Aluminum and Glass Garage Doors"
        description="Premium full-view aluminum and glass garage door design guidance and installation planning for South Florida homes."
        url="https://securelifts.com/hurricane-garage-doors/modern/full-view-aluminum-glass"
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Hurricane Garage Doors", href: "https://securelifts.com/hurricane-garage-doors" },
          { label: "Modern Garage Doors", href: "https://securelifts.com/hurricane-garage-doors/modern" },
          {
            label: "Full-View Aluminum & Glass",
            href: "https://securelifts.com/hurricane-garage-doors/modern/full-view-aluminum-glass",
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Modern", href: "/hurricane-garage-doors/modern" },
          { label: "Full-View Aluminum & Glass" },
        ]}
      />

      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/doors/full-view-modern.jpg"
            alt="Full-view aluminum and glass garage door"
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-300">
              Raynor AlumaView AV300 Style Direction
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Full-View Aluminum & Glass Garage Doors
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A full-view aluminum and glass garage door is the premium modern path for homeowners who want maximum light, clean aluminum framing, glass privacy choices, and a high-end architectural statement.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={PHONE_HREF} className="rounded-2xl bg-red-600 px-7 py-4 text-center font-bold text-white hover:bg-red-700">
                Call {PHONE}
              </a>
              <Link href="/book-service" className="rounded-2xl bg-white px-7 py-4 text-center font-bold !text-slate-950 hover:bg-slate-100">
                Book Service
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/case-studies/miami-beach/Full-view-garage-door-installation-in-miami-beach.jpg"
                alt="Full-view aluminum and glass garage door design preview"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-200">
              Final frame finish, glass type, wind-load path, track setup, and approval details must be confirmed before ordering.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Overview
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Product-style details customers actually need to compare
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The AlumaView AV300 direction is a full-view aluminum system with smooth aluminum sections, multiple operation and track paths, anodized and custom finish options, and several glass thickness choices.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickSpecs.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">{label}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Construction
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Built around aluminum framing, glass, and project-specific hardware
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {constructionItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Design Options
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Full-view design directions
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {visualDirections.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Colors
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Anodized finishes, powder coat, and woodtone paths
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Raynor lists clear, bronze, and black anodized directions, an ArmorBrite powder coat system with many custom colors, and Elegant Finish Woodtones for a warmer premium look.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Anodized Finishes
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Clean aluminum frame color directions
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                These are the core frame directions homeowners usually compare before selecting glass privacy and hardware.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {anodizedFinishes.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <div className="h-20 rounded-xl border border-slate-200" style={{ background: item.swatch }} />
                  <p className="mt-3 text-sm font-bold">{item.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Anodized finish</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                  Elegant Woodtones
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Wood-look directions for aluminum full-view doors
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                These swatches use the approved Elegant Woodtones reference so customers can compare warm, dark, and natural wood-look finishes visually.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {woodtones.map((item) => (
                <div key={item.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="relative h-32 bg-white sm:h-36">
                    <Image
                      src={item.image}
                      alt={`${item.name} Elegant Finish woodtone`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm font-bold text-slate-800">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Glass Options
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Choose visibility, privacy, insulation, and impact performance
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {glassOptions.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            Want a premium full-view garage door?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            SecureLifts can help compare frame finish, glass, privacy, track setup, wind-load planning, and South Florida approval requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={PHONE_HREF} className="rounded-2xl bg-red-600 px-7 py-4 font-bold text-white hover:bg-red-700">
              Call {PHONE}
            </a>
            <Link href="/hurricane-garage-doors/modern" className="rounded-2xl bg-white px-7 py-4 font-bold !text-slate-950 hover:bg-slate-100">
              Back to Modern Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
