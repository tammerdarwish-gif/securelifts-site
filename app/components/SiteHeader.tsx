"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  { label: "Garage Door Repair", href: "/garage-door-repair" },
  { label: "Garage Door Installation", href: "/garage-door-installation" },
  { label: "Garage Door Opener", href: "/garage-door-opener" },
  { label: "Broken Spring Repair", href: "/broken-spring-repair" },
  { label: "Garage Door Maintenance", href: "/garage-door-maintenance" },
  { label: "Garage Door Off-Track Repair", href: "/garage-door-off-track-repair" },
  { label: "Garage Door Cable Repair", href: "/garage-door-cable-repair" },
  { label: "Commercial Garage Doors", href: "/commercial-garage-door-services" },
];

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="sl-container">
        <div className="flex min-h-[82px] items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label="SecureLifts Home">
            <Image
              src="/logo.png"
              alt="SecureLifts Garage Doors"
              width={180}
              height={60}
              priority
              className="h-auto w-[150px] md:w-[180px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-bold text-slate-900 transition hover:text-red-600"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-[320px] rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="grid gap-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-red-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-900 transition hover:text-red-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
            >
              Book Service
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="sl-container py-4">
            <div className="grid gap-2">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between rounded-2xl px-4 py-4 text-left text-base font-bold text-slate-900 transition hover:bg-slate-50"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition ${servicesOpen ? "rotate-180" : ""}`}
                />
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
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Book Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}