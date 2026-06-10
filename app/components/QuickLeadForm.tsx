"use client";

import { useState } from "react";

type QuickLeadFormProps = {
  defaultService?: string;
  title?: string;
  intro?: string;
  compact?: boolean;
  campaignSource?: string;
};

const serviceOptions = [
  "Garage Door Repair",
  "Broken Spring",
  "Opener Problem",
  "Door Off Track",
  "New Garage Door / Replacement",
  "Hurricane-Rated Door Quote",
  "Commercial Door Service",
  "Other / Not Sure",
];

const preferredTimeOptions = [
  "As soon as possible",
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "Flexible",
];

export default function QuickLeadForm({
  defaultService = "Garage Door Repair",
  title = "Get Fast Garage Door Help",
  intro = "Tell us the basics and SecureLifts will contact you to confirm the right next step.",
  compact = false,
  campaignSource = "",
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
    const email = String(formData.get("email") || "");
    const address = String(formData.get("address") || "");
    const city = String(formData.get("city") || "");
    const zip = String(formData.get("zip") || "");
    const service = String(formData.get("service") || defaultService);
    const date = String(formData.get("date") || "");
    const time = String(formData.get("time") || "");
    const message = String(formData.get("message") || "Quick lead form request");
    const smsOptIn = formData.get("smsOptIn") === "yes";

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          address,
          city,
          zip,
          service,
          date,
          time,
          message,
          smsOptIn,
          sourcePage:
            typeof window !== "undefined" ? window.location.href : "",
          referrer:
            typeof document !== "undefined" ? document.referrer : "",
          campaignSource:
            campaignSource ||
            (typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_campaign") ||
                new URLSearchParams(window.location.search).get("campaign") ||
                ""
              : ""),
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

      if (typeof window !== "undefined") {
        await window.trackSecureLiftsLeadConversion?.(service);
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
      <div className="rounded-3xl border border-slate-200 bg-white p-7 !text-slate-950 shadow-xl">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-black !text-white">
            ✓
          </span>
          <div>
            <h3 className="text-2xl font-black !text-slate-950">
              Thank You - Request Received
            </h3>
            <p className="mt-2 leading-7 !text-slate-700">
              Thank you. SecureLifts received your request and will contact you
              shortly. For urgent service, call now.
            </p>
            <a
              href="tel:18668281818"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-5 py-3 font-bold !text-white transition hover:bg-red-800"
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
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
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
          name="email"
          type="email"
          placeholder="Email address"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <input
          required
          name="address"
          placeholder="Service address"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <input
          required
          name="city"
          placeholder="City"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <input
          name="zip"
          inputMode="numeric"
          placeholder="ZIP code"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <select
          aria-label="Service needed"
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

        <input
          name="date"
          type="date"
          aria-label="Preferred date"
          className="rounded-xl border border-slate-300 px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <select
          aria-label="Preferred time"
          name="time"
          defaultValue=""
          className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-950 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
        >
          <option value="" disabled>
            Preferred time
          </option>
          {preferredTimeOptions.map((time) => (
            <option key={time} value={time}>
              {time}
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

      <label className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 !text-slate-700">
        <input
          type="checkbox"
          name="smsOptIn"
          value="yes"
          className="mt-1 h-4 w-4 shrink-0"
        />
        <span>
          I agree to receive AAA Garage Door Inc. DBA SecureLifts support SMS
          notifications. Message frequency varies. Msg &amp; data rates may
          apply. Reply STOP to opt out. Reply HELP for help. Consent is not a
          condition of purchase. See our{" "}
          <a href="/privacy-policy" className="font-bold underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-red-700 px-6 py-4 font-bold !text-white transition hover:bg-red-800 disabled:opacity-70"
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
