"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/book-service" || pathname.startsWith("/book-service/")) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:18668281818"
            className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Call Now
          </a>

          <Link
            href="/book-service"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}