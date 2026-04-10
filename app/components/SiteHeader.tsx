"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/securelifts-logo.png"
            alt="SecureLifts"
            width={200}
            height={109}
            priority
            className="h-[52px] w-auto object-contain"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-4">
          <a
            href="tel:18668281818"
className="inline-flex h-12 min-w-[190px] items-center justify-center rounded-xl bg-red-600 px-6 text-base font-semibold text-white whitespace-nowrap transition hover:bg-red-700"          >
            <span className="text-white">Call (866) 828-1818</span>
          </a>

          <Link
            href="/book-service"
className="inline-flex h-12 min-w-[145px] items-center justify-center rounded-xl border border-gray-300 bg-white px-6 text-base font-semibold text-gray-900 whitespace-nowrap transition hover:bg-gray-50"          >
            Book Service
          </Link>
        </div>
      </div>
    </header>
  );
}