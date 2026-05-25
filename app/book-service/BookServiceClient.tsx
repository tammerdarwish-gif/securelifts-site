"use client";

import Image from "next/image";
import {
  FaPhoneAlt,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const FIELD_PULSE_PORTAL_URL = "https://portal.fieldpulse.com/securelifts";

const trustItems: Array<{
  Icon: IconType;
  title: string;
  text: string;
}> = [
  {
    Icon: FaClock,
    title: "Fast follow-up",
    text: "Urgent repair requests are prioritized.",
  },
  {
    Icon: FaShieldAlt,
    title: "Licensed & insured",
    text: "Professional garage door service across South Florida.",
  },
  {
    Icon: FaCheckCircle,
    title: "Clear details",
    text: "Your request includes clear details about the service type and preferred time.",
  },
];

export default function BookServicePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/approved/service-van-at-door-card.jpg"
            alt="SecureLifts service vehicle at a South Florida garage door appointment"
            fill
            priority
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/45" />
        <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              SecureLifts Service Request
            </p>
            <h1 className="text-4xl font-black md:text-6xl">
              Book Garage Door Service
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Send your request and SecureLifts will contact you to confirm the
              details. For urgent issues, calling is the fastest path.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold !text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt />
                Call (866) 828-1818
              </a>
              <a
                href="#booking-portal"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-bold !text-white backdrop-blur transition hover:bg-white hover:!text-slate-950"
              >
                Book Online
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4">
              {trustItems.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-white p-4 text-slate-950">
                  <div className="flex items-start gap-3">
                    <Icon className="mt-1 shrink-0 text-red-600" />
                    <div>
                      <p className="font-black">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1366px] gap-10 px-0 py-20 sm:px-6">
        <div
          id="booking-portal"
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="border-b border-slate-200 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              SecureLifts Booking Portal
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Schedule your garage door service
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Choose the service details and appointment information directly
              through the SecureLifts FieldPulse portal.
            </p>
          </div>

          <iframe
            src={FIELD_PULSE_PORTAL_URL}
            title="SecureLifts FieldPulse booking portal"
            width="100%"
            height="768"
            loading="lazy"
            className="h-[768px] w-full border-0"
          />
        </div>

        <div className="rounded-3xl bg-slate-50 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Need Immediate Help?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Call now for faster service
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                For urgent issues like broken springs, stuck doors, or garage
                doors that won’t open, calling is the fastest path.
              </p>

              <a
                href="tel:18668281818"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-base font-semibold !text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
              >
                <FaPhoneAlt />
                Call (866) 828-1818
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Broken spring or door will not open",
              "Vehicle trapped inside garage",
              "Door stuck open or unsafe",
              "Hurricane-rated door quote",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                <span className="font-medium leading-6 text-slate-800">{item}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
