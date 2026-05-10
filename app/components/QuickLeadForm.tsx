"use client";

import { useState } from "react";

type QuickLeadFormProps = {
  defaultService?: string;
  title?: string;
  intro?: string;
  compact?: boolean;
};

const serviceOptions = [
  "Emergency Garage Door Repair",
  "Garage Door Repair",
  "Broken Spring Repair",
  "Garage Door Spring Replacement",
  "Garage Door Opener Repair",
  "Garage Door Cable Repair",
  "Garage Door Roller Replacement",
  "Garage Door Panel Replacement",
  "Garage Door Installation",
  "Hurricane-Rated Garage Door Quote",
  "Commercial Door Service",
];

export default function QuickLeadForm({
  defaultService = "Garage Door Repair",
  title = "Get Fast Garage Door Help",
  intro = "Send a quick request and SecureLifts will contact you to confirm the next step.",
  compact = false,
}: QuickLeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const visibleServiceOptions = serviceOptions.includes(defaultService)
    ? serviceOptions
    : [defaultService, ...serviceOptions];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const city = String(formData.get("city") || "");
    const service = String(formData.get("service") || defaultService);
    const message = String(formData.get("message") || "Quick lead form request");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: "",
          address: "Not provided - quick lead form",
          city,
          zip: "",
          service,
          date: "",
          time: "",
          message,
          sourcePage:
            typeof window !== "undefined" ? window.location.href : "",
          referrer:
            typeof document !== "undefined" ? document.referrer : "",
        }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        alert(data.error || "Something went wrong. Please call SecureLifts.");
        return;
      }

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17481132065/F_m9CKXmkfQbEKHQ049B",
        });
      }

      setSubmitted(true);
      form.reset();
    } catch {
      alert("The request could not be sent. Please call SecureLifts now.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-7 text-slate-950 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-black !text-white">
            ✓
          </span>
          <div>
            <h3 className="text-2xl font-black">Request Received</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Thank you. SecureLifts received your request and will contact you
              shortly. For urgent service, call now.
            </p>
            <a
              href="tel:18668281818"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold !text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 pb-28 shadow-xl md:p-7"
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
        Quick Request
      </p>
      <h3 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 leading-7 text-slate-600">{intro}</p>

      <div className={`mt-6 grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <input
          required
          name="name"
          placeholder="Your name"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <input
          required
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="Phone number"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <input
          required
          name="city"
          placeholder="City"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <select
          required
          name="service"
          defaultValue={defaultService}
          className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        >
          {visibleServiceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        rows={compact ? 3 : 4}
        placeholder="What happened? Door stuck, spring broke, opener issue..."
        className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
      />

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-red-600 px-6 py-4 font-bold !text-white transition hover:bg-red-700 disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Request"}
        </button>
        <a
          href="tel:18668281818"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold !text-white transition hover:bg-black"
        >
          Call Now
        </a>
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        For fastest emergency service, call directly. This quick form also sends
        your request to SecureLifts.
      </p>
    </form>
  );
}
