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
  title: "Modern Steel Garage Doors With Windows | SecureLifts South Florida",
  description:
    "Compare Clopay Modern Steel and Modern Steel Plank garage door designs, windows, colors, glass, insulation, and wood-look finishes for South Florida homes.",
  alternates: {
    canonical:
      "https://securelifts.com/hurricane-garage-doors/modern/modern-steel-with-windows",
  },
  openGraph: {
    title: "Modern Steel Garage Doors With Windows | SecureLifts",
    description:
      "Modern steel garage door design, construction, glass, and color options for South Florida homes.",
    url: "https://securelifts.com/hurricane-garage-doors/modern/modern-steel-with-windows",
    siteName: "SecureLifts",
    type: "website",
    images: [
      {
        url: "/images/doors/modern-steel-windows.jpg",
        width: 960,
        height: 720,
        alt: "Modern steel garage door with window options",
      },
    ],
  },
};

const doorDesigns = [
  { title: "Flush Panel", image: "/images/modern-steel-options/door-designs/flush-panel.png" },
  { title: "Grooved Panel", image: "/images/modern-steel-options/door-designs/grooved-panel.png" },
  { title: "Flush With Long Windows", image: "/images/modern-steel-options/door-designs/flush-long-windows.png" },
  { title: "Grooved With Short Windows", image: "/images/modern-steel-options/door-designs/grooved-short-windows.png" },
  { title: "Flush With Full View Short Panel Windows", image: "/images/modern-steel-options/door-designs/flush-full-view-short-panel-windows.png" },
  { title: "Flush Panel With Short Windows", image: "/images/modern-steel-options/door-designs/flush-panel-short-windows.png" },
  { title: "Grooved With Long Panel Windows", image: "/images/modern-steel-options/door-designs/grooved-long-panel-windows.png" },
  { title: "Full View With Short Panel Windows", image: "/images/modern-steel-options/door-designs/full-view-short-panel-windows.png" },
  { title: "Flush With Contemporary Slim Windows", image: "/images/modern-steel-options/door-designs/flush-contemporary-slim-windows.png" },
];

const contemporarySlimWindows = [
  { name: "Contemporary Slim In Silver", image: "/images/modern-steel-options/window-options/contemporary-slim-silver.png" },
  { name: "Contemporary Slim In Black", image: "/images/modern-steel-options/window-options/contemporary-slim-black.png" },
];

const decorativeInsertWindows = [
  { name: "Colonial 509", image: "/images/modern-steel-options/window-options/colonial-509.png" },
  { name: "Charleston 508", image: "/images/modern-steel-options/window-options/charleston-508.png" },
  { name: "Stockton 612", image: "/images/modern-steel-options/window-options/stockton-612.png" },
  { name: "Sunset 601", image: "/images/modern-steel-options/window-options/sunset-601.png" },
  { name: "Charleston 608", image: "/images/modern-steel-options/window-options/charleston-608.png" },
  { name: "Madison 611", image: "/images/modern-steel-options/window-options/madison-611.png" },
  { name: "Prairie 510", image: "/images/modern-steel-options/window-options/prairie-510.png" },
  { name: "Madison ARCH613", image: "/images/modern-steel-options/window-options/madison-arch-613.png" },
  { name: "Prairie 610", image: "/images/modern-steel-options/window-options/prairie-610.png" },
  { name: "Sunset 501", image: "/images/modern-steel-options/window-options/sunset-501.png" },
  { name: "Sunset 503", image: "/images/modern-steel-options/window-options/sunset-503.png" },
  { name: "Sunset 603", image: "/images/modern-steel-options/window-options/sunset-603.png" },
];

const architecturalWindows = [
  { name: "Plain Short", image: "/images/modern-steel-options/window-options/plain-short.png" },
  { name: "Plain Long", image: "/images/modern-steel-options/window-options/plain-long.png" },
  { name: "Architectural Plain Short", image: "/images/modern-steel-options/window-options/architectural-plain-short.png" },
  { name: "Short With Rectangular Grilles", image: "/images/modern-steel-options/window-options/short-rectangular-grilles.png" },
  { name: "Architectural Plain Long", image: "/images/modern-steel-options/window-options/architectural-plain-long.png" },
  { name: "Short With Squares Grilles", image: "/images/modern-steel-options/window-options/short-square-grilles.png" },
  { name: "Long With Rectangular Grilles", image: "/images/modern-steel-options/window-options/long-rectangular-grilles.png" },
  { name: "Long With Square Grilles", image: "/images/modern-steel-options/window-options/long-square-grilles.png" },
  { name: "ARCH1 Plain", image: "/images/modern-steel-options/window-options/arch1-plain.png" },
  { name: "ARCH1 With Vertical Grilles", image: "/images/modern-steel-options/window-options/arch1-vertical-grilles.png" },
  { name: "ARCH1 With Grilles", image: "/images/modern-steel-options/window-options/arch1-grilles.png" },
  { name: "ARCH2 Plain", image: "/images/modern-steel-options/window-options/arch2-plain.png" },
  { name: "ARCH2 With Grilles", image: "/images/modern-steel-options/window-options/arch2-grilles.png" },
  { name: "ARCH2 With Vertical Grilles", image: "/images/modern-steel-options/window-options/arch2-vertical-grilles.png" },
];

const doubleTopSections = [
  { name: "ARCH3 Plain", image: "/images/modern-steel-options/window-options/arch3-plain.png" },
  { name: "ARCH3 With Grilles", image: "/images/modern-steel-options/window-options/arch3-grilles.png" },
  { name: "ARCH3 With Vertical Grilles", image: "/images/modern-steel-options/window-options/arch3-vertical-grilles.png" },
];

const glassOptions = [
  { name: "Clear", image: "/images/modern-steel-options/glass-options/clear.png" },
  { name: "Rain", image: "/images/modern-steel-options/glass-options/rain.png" },
  { name: "Frosted", image: "/images/modern-steel-options/glass-options/frosted.png" },
  { name: "Obscure", image: "/images/modern-steel-options/glass-options/obscure.png" },
  { name: "Narrow Reed", image: "/images/modern-steel-options/glass-options/narrow-reed.png" },
  { name: "Midnight Gray", image: "/images/modern-steel-options/glass-options/midnight-gray.png" },
];

const colors = [
  { name: "White", image: "/finishes/doors/long-panel-white.png" },
  { name: "Almond", image: "/finishes/doors/long-panel-almond.png" },
  { name: "Sandtone", image: "/finishes/clopay/paint-color-sandtone.jpg" },
  { name: "Bronze", image: "/finishes/clopay/bronze-long.png" },
  { name: "Mocha Brown", image: "/finishes/clopay/Mocha-Brown.png" },
  { name: "Charcoal", image: "/finishes/clopay/charcoal-long.png" },
  { name: "Iron Ore", image: "/finishes/clopay/Iron-long.png" },
  { name: "Black", image: "/finishes/doors/ong-panel-black.png" },
  { name: "Walnut Ultra-Grain", image: "/finishes/clopay/Walnut.png" },
  { name: "Medium Ultra-Grain", image: "/finishes/clopay/Medium-Finish.png" },
  { name: "Cherry Ultra-Grain", image: "/finishes/clopay/cherry-wood.png" },
  { name: "Mahogany Accent", image: "/finishes/clopay/cr-mahogany-bronze-texture.jpg" },
];

const plankFinishes = [
  { name: "Cedar Plank", image: "/images/doors/plank.jpg" },
  { name: "Plank Honey Cedar", image: "/finishes/raynor/202407290601new-Plank-Honey-Cedar-small.jpg" },
  { name: "Plank Cocoa Hickory", image: "/finishes/raynor/202407290618new-Plank-Cocoa-Hickory-small.jpg" },
  { name: "Dual Honey Cedar", image: "/finishes/raynor/202407290626new-Dual-Honey-Cedar-small.jpg" },
  { name: "Dual Cocoa Hickory", image: "/finishes/raynor/202407290657new-Dual-Cocoa-Hickory-small.jpg" },
  { name: "Walnut Finish", image: "/finishes/clopay/walnut-finish-classic-panel.jpg" },
];

const constructionCards = [
  {
    title: "1-Layer Steel",
    text: "A clean steel door direction for budget-conscious modern upgrades.",
  },
  {
    title: "3-Layer Premium",
    text: "Steel, insulation, and interior steel backing for stronger feel and quieter use.",
  },
  {
    title: "WindCode / Storm Planning",
    text: "Wind-load and local code requirements should be confirmed for South Florida openings.",
  },
];

const faqs = [
  {
    question: "What Modern Steel options should I compare first?",
    answer:
      "Start with flush versus grooved panels, then choose window layout, glass privacy, color, insulation level, and whether a plank wood-look direction fits the home.",
  },
  {
    question: "Can Modern Steel doors have contemporary windows?",
    answer:
      "Yes. Modern Steel doors can use long, short, slim, stacked, full-view style, and specialty glass layouts depending on configuration.",
  },
  {
    question: "What is Modern Steel Plank?",
    answer:
      "Modern Steel Plank is a wood-look steel direction that gives a warmer modern appearance with plank-style finishes and the durability advantages of steel.",
  },
];

export default function ModernSteelWithWindowsPage() {
  return (
    <main className="bg-white text-slate-900">
      <FAQSchema items={faqs} />
      <ServiceSchema
        name="Modern Steel Garage Doors With Windows"
        description="Modern steel garage door design guidance with windows, colors, plank finishes, insulation, and storm-ready planning for South Florida homes."
        url="https://securelifts.com/hurricane-garage-doors/modern/modern-steel-with-windows"
      />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Hurricane Garage Doors", href: "https://securelifts.com/hurricane-garage-doors" },
          { label: "Modern Garage Doors", href: "https://securelifts.com/hurricane-garage-doors/modern" },
          {
            label: "Modern Steel With Windows",
            href: "https://securelifts.com/hurricane-garage-doors/modern/modern-steel-with-windows",
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Modern", href: "/hurricane-garage-doors/modern" },
          { label: "Modern Steel With Windows" },
        ]}
      />

      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/doors/modern-steel-windows.jpg"
            alt="Modern steel garage door with windows"
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/35" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-300">
              Clopay Modern Steel Direction
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Modern Steel Garage Doors With Windows
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Modern Steel gives homeowners flush or grooved panel designs, contemporary window layouts, specialty glass, standard and premium colors, insulation choices, and Modern Steel Plank wood-look finishes.
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
                src="/images/doors/modern-steel-windows.jpg"
                alt="Modern steel garage door design preview"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-200">
              Final panel style, color, insulation, specialty glass, plank finish, and WindCode requirements are verified during quote and measurement.
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
              Modern Steel is about panel design, window placement, color, and construction
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Clopay Modern Steel lets homeowners choose flush or grooved steel panels, multiple window layouts, specialty glass, insulation levels, WindCode options, Ultra-Grain finishes, Lustra matte finishes, and plank-style wood-look directions.
            </p>
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
              Choose the build level before choosing colors
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {constructionCards.map((item) => (
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
              Door Designs
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Flush, grooved, full-view, and contemporary window layouts
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              These are the design directions customers usually need to see first, before picking glass, colors, and construction.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doorDesigns.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-40 bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black tracking-tight">{item.title}</h3>
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
              Window Options
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Contemporary, decorative, architectural, and double top sections
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Window layout is one of the fastest ways to make a modern steel garage door feel custom. These options give homeowners a clear visual path before choosing glass privacy.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Contemporary Slim Windows</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contemporarySlimWindows.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <div className="relative h-20 overflow-hidden rounded-xl bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Decorative Insert Series Windows</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {decorativeInsertWindows.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <div className="relative h-20 overflow-hidden rounded-xl bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Architectural Series Windows</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {architecturalWindows.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <div className="relative h-20 overflow-hidden rounded-xl bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-black tracking-tight">Double Top Sections</h3>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {doubleTopSections.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <div className="relative h-20 overflow-hidden rounded-xl bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{item.name}</p>
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
              Colors & Finishes
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Standard, premium, Ultra-Grain, and matte finish paths
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {colors.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative h-28 overflow-hidden rounded-xl bg-slate-100">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                <p className="mt-3 font-bold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Modern Steel Plank
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Wood-look plank finishes for a warmer modern exterior
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Modern Steel Plank is the direction to compare when the home needs clean modern lines but a warmer wood-style appearance.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {plankFinishes.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="relative h-28 overflow-hidden rounded-xl bg-slate-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <p className="mt-3 font-bold">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Glass Options
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight">
              Glass changes privacy, light, and exterior personality
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {glassOptions.map((item) => (
                <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="relative h-24 overflow-hidden rounded-xl bg-slate-100">
                    <Image src={item.image} alt={`${item.name} glass`} fill className="object-cover" />
                  </div>
                  <p className="mt-3 font-bold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            Want a modern steel garage door with windows?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            SecureLifts can help compare flush panels, grooved designs, window layouts, colors, plank finishes, insulation, and WindCode requirements.
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
