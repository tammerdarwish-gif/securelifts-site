"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/book-service" || pathname.startsWith("/book-service/")) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
      <div className="mx-auto max-w-md rounded-2xl border border-white/20 bg-slate-950/95 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:18668281818"
            className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold !text-white transition duration-200 hover:-translate-y-0.5 hover:bg-red-700 active:translate-y-0"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-current"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27c1.04.28 2.15.43 3.29.43a1 1 0 011 1V20a1 1 0 01-1 1C10.3 21 3 13.7 3 4a1 1 0 011-1h3.46a1 1 0 011 1c0 1.14.15 2.25.43 3.29a1 1 0 01-.27.95l-2.4 2.55z" />
            </svg>
            <span className="!text-white">Call Now</span>
          </a>

          <Link
            href="/book-service"
            className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold !text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-gray-100 active:translate-y-0"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-current"
            >
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v13a3 3 0 003 3h12a3 3 0 003-3V6a2 2 0 00-2-2zm0 15a1 1 0 01-1 1H6a1 1 0 01-1-1V10h14v9zm0-11H5V6h14v2z" />
            </svg>
            <span className="!text-slate-950">Book Service</span>
          </Link>
        </div>
      </div>
    </div>
  );
}