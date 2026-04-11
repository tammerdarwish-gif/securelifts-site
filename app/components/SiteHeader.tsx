"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/securelifts-logo.png"
            alt="SecureLifts"
            width={200}
            height={109}
            priority
            className="h-[52px] w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex shrink-0 items-center gap-4">
          <a
            href="tel:18668281818"
            className="inline-flex h-12 min-w-[190px] items-center justify-center rounded-xl bg-red-600 px-6 text-base font-semibold text-white whitespace-nowrap transition hover:bg-red-700"
          >
            <span className="text-white">Call (866) 828-1818</span>
          </a>

          <Link
            href="/book-service"
            className="inline-flex h-12 min-w-[145px] items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-base font-semibold text-gray-900 whitespace-nowrap transition hover:bg-gray-50"
          >
            Book Service
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-slate-900 transition hover:bg-gray-50 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
            <span className="block h-0.5 w-5 rounded-full bg-slate-900" />
          </div>
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            <a
              href="tel:18668281818"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-base font-semibold text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Book Service
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}