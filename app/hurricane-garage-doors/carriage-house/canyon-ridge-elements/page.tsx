

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

export const metadata: Metadata = {
  title: "Canyon Ridge Elements Garage Doors | SecureLifts South Florida",
  description:
    "Explore Canyon Ridge Elements garage door options for South Florida homes. Premium textured curb appeal installed by SecureLifts.",
  alternates: { canonical: "https://securelifts.com/hurricane-garage-doors/carriage-house/canyon-ridge-elements" },
};

export default function CanyonRidgeElementsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Canyon Ridge Premium Direction
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Canyon Ridge Elements Garage Doors
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              A premium design path for homes that need more texture, depth, and custom-style curb appeal.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="rounded-2xl bg-red-600 px-7 py-4 text-center font-bold text-white hover:bg-red-700"
              >
                Call {PHONE}
              </a>

              <Link
                href="/book-service"
                className="rounded-xl bg-white px-7 py-4 text-center font-bold text-slate-900 hover:bg-slate-100"
              >
                Book Service
              </Link>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-3xl">
            <Image
              src="/showroom/canyon-ridge/canyon-ridge-elements.webp"
              alt="Canyon Ridge Elements garage door option"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
