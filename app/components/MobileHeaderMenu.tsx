"use client";

import Link from "next/link";
import { useState } from "react";

type HeaderLink = {
  label: string;
  href: string;
};

type MobileHeaderMenuProps = {
  serviceLinks: HeaderLink[];
  mainLinks: HeaderLink[];
};

export default function MobileHeaderMenu({
  serviceLinks,
  mainLinks,
}: MobileHeaderMenuProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen((prev) => !prev)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
      >
        <span className="text-xs font-black uppercase tracking-wide">
          {mobileOpen ? "Close" : "Menu"}
        </span>
      </button>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-t border-slate-200 bg-white lg:hidden">
          <div className="sl-container py-4">
            <div className="grid gap-2">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-bold text-slate-900 transition hover:bg-slate-50"
              >
                <span>Services</span>
                <span
                  className={`text-lg transition ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  v
                </span>
              </button>

              {servicesOpen && (
                <div className="grid gap-1 rounded-3xl bg-slate-50 p-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenus}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white hover:text-red-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="rounded-2xl px-4 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-3 grid gap-3">
                <a
                  href="tel:+18668281818"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Call (866) 828-1818
                </a>

                <Link
                  href="/book-service"
                  onClick={closeMenus}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold !text-slate-900 transition hover:bg-slate-50"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
