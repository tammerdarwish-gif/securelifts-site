import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import MobileHeaderMenu from "./MobileHeaderMenu";

const serviceLinks = [
  { label: "Emergency Repair", href: "/emergency-garage-door-repair" },
  { label: "Garage Door Repair", href: "/garage-door-repair" },
  { label: "Broken Spring Repair", href: "/broken-spring-repair" },
  { label: "Opener Repair", href: "/garage-door-opener-repair" },
  { label: "Garage Door Installation", href: "/garage-door-installation" },
  { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
  { label: "Garage Door Cable Repair", href: "/garage-door-cable-repair" },
  { label: "Roller Replacement", href: "/garage-door-roller-replacement" },
  { label: "Panel Replacement", href: "/garage-door-panel-replacement" },
  { label: "Commercial Garage Doors", href: "/commercial-garage-door-services" },
];

const mainLinks = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="sl-container">
        <div className="flex min-h-[82px] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="SecureLifts Home"
          >
            <Image
              src="/logo.png"
              alt="SecureLifts Garage Doors"
              width={180}
              height={60}
              sizes="(min-width: 768px) 180px, 150px"
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
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold !text-slate-900 transition hover:bg-slate-50"
            >
              Request Service
            </Link>
          </div>

          <MobileHeaderMenu serviceLinks={serviceLinks} mainLinks={mainLinks} />
        </div>
      </div>
    </header>
  );
}
