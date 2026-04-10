"use client";

import { useState } from "react";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

export default function BookServicePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "Type of Service Needed",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          service: formData.service,
          date: formData.preferredDate,
          time: formData.preferredTime,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please call us at (866) 828-1818.");
      }
    } catch {
      alert("Something went wrong. Please call us at (866) 828-1818.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <div className="mx-auto inline-flex rounded-full bg-red-50 p-5 text-red-600">
            <FaCalendarCheck className="text-3xl" />
          </div>
          <h1 className="mt-6 text-4xl font-black">Request Received</h1>
          <p className="mt-4 text-lg text-slate-600">
            Thank you. SecureLifts received your service request and will contact
            you shortly to confirm details.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black md:text-6xl">
            Book Garage Door Service
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Fill out the form below and our team will reach out to schedule your
            service request.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="rounded-xl border border-slate-300 px-4 py-4"
            />
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="rounded-xl border border-slate-300 px-4 py-4"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="rounded-xl border border-slate-300 px-4 py-4"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="rounded-xl border border-slate-300 px-4 py-4"
            />
          </div>

          <div className="mt-6 grid gap-6">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 px-4 py-4"
            >
              <option>Type of Service Needed</option>
              <option>Broken Spring Repair</option>
              <option>Garage Door Repair</option>
              <option>Garage Door Opener Repair</option>
              <option>Garage Door Off-Track Repair</option>
              <option>Garage Door Installation</option>
              <option>Emergency Garage Door Repair</option>
              <option>Commercial Door Service</option>
            </select>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 px-4 py-4 text-center"
              />

              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="rounded-xl border border-slate-300 bg-white px-4 py-4 text-center"
              >
                <option value="">Preferred Time Slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the issue"
              className="rounded-xl border border-slate-300 px-4 py-4"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Submit Service Request"}
          </button>
        </form>

        <div className="rounded-3xl bg-slate-50 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Need Immediate Help?
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Call now for faster service
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            For urgent issues like broken springs, stuck doors, or garage doors
            that won’t open, calling is the fastest path.
          </p>

          <a
            href="tel:18668281818"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
          >
            Call (866) 828-1818
          </a>
        </div>
      </section>
    </main>
  );
}