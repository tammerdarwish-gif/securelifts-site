import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const PHONE = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";
const EMAIL = "info@securelifts.com";
const EMAIL_HREF = "mailto:info@securelifts.com";

export const metadata: Metadata = {
  title: "Contact SecureLifts | Garage Door Service in South Florida",
  description:
    "Contact SecureLifts for garage door repair, installation, maintenance, opener service, and emergency garage door help across South Florida. Call (866) 828-1818.",
  alternates: {
    canonical: "https://securelifts.com/contact",
  },
  openGraph: {
    title: "Contact SecureLifts | Garage Door Service in South Florida",
    description:
      "Reach SecureLifts for fast garage door service, emergency repairs, installations, and expert help across South Florida.",
    url: "https://securelifts.com/contact",
    siteName: "SecureLifts",
    type: "website",
  },
};

const contactMethods = [
  {
    icon: <FaPhoneAlt className="h-5 w-5" />,
    title: "Call Us",
    text: "Speak with our team for repair scheduling, installation questions, emergency service, or fast help with your garage door.",
    action: PHONE,
    href: PHONE_HREF,
  },
  {
    icon: <FaEnvelope className="h-5 w-5" />,
    title: "Email Us",
    text: "Send us photos, project details, or service questions and our team will get back to you as quickly as possible.",
    action: EMAIL,
    href: EMAIL_HREF,
  },
  {
    icon: <FaMapMarkerAlt className="h-5 w-5" />,
    title: "Service Area",
    text: "We serve South Florida with residential and commercial garage door service, including Palm Beach, Broward, Miami-Dade, and nearby areas.",
    action: "View Service Areas",
    href: "/locations",
  },
];

const reasonsToContact = [
  "Garage door repair and same-day service",
  "Garage door installation and replacement",
  "Garage door opener troubleshooting and replacement",
  "Broken spring repair and spring replacement",
  "Off-track garage door repair",
  "Cable, roller, and panel replacement",
  "Hurricane-rated and impact-rated garage doors",
  "Commercial garage door service",
];

const areas = [
  "West Palm Beach",
  "Wellington",
  "Royal Palm Beach",
  "Boca Raton",
  "Delray Beach",
  "Fort Lauderdale",
  "Hollywood",
  "Pembroke Pines",
  "Miami",
  "Miami Beach",
  "Doral",
  "Hialeah",
];

const faqs = [
  {
    q: "How quickly can SecureLifts respond to a garage door issue?",
    a: "Response times depend on your location, time of day, and current schedule, but we work to provide fast service across South Florida and emergency help for urgent garage door problems.",
  },
  {
    q: "Can I contact SecureLifts for both residential and commercial garage doors?",
    a: "Yes. We help homeowners and businesses with repair, replacement, maintenance, opener issues, and commercial garage door service.",
  },
  {
    q: "What should I do if my garage door spring breaks?",
    a: "Do not try to operate or force the door. Broken springs are dangerous. Call SecureLifts so the issue can be handled safely.",
  },
  {
    q: "Do you offer quotes for new garage door installation?",
    a: "Yes. You can call, book service, or email us with project details and photos to get started with a garage door installation estimate.",
  },
];

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GarageDoorRepair",
    name: "SecureLifts",
    url: "https://securelifts.com/contact",
    telephone: PHONE,
    email: EMAIL,
    areaServed: [
      "Palm Beach County",
      "Broward County",
      "Miami-Dade County",
      "South Florida",
    ],
    serviceType: [
      "Garage Door Repair",
      "Garage Door Installation",
      "Garage Door Maintenance",
      "Garage Door Opener Repair",
      "Broken Spring Repair",
      "Emergency Garage Door Repair",
      "Commercial Garage Door Service",
    ],
  };

  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="contact-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%)]" />
          <div className="sl-container relative py-16 md:py-24">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                Contact SecureLifts
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Get Fast Garage Door Help in South Florida
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
                Need garage door repair, installation, opener service, emergency
                help, or answers from a real team that picks up? Contact
                SecureLifts today and let’s get your door handled the right way.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
                >
                  Call {PHONE}
                </a>

       <Link
  href="/book-service"
  className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
>
  Book Service
</Link>
                   </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <FaCheckCircle className="text-red-400" />
                  Residential & commercial service
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaCheckCircle className="text-red-400" />
                  South Florida coverage
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaCheckCircle className="text-red-400" />
                  Fast scheduling support
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {contactMethods.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  {item.icon}
                </div>

                <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {item.text}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-red-600 transition hover:text-red-700"
                >
                  {item.action}
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="sl-container py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                  Contact Us for Any Garage Door Need
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  Whether your garage door is stuck, noisy, off track, damaged,
                  overdue for maintenance, or you need a full replacement, our
                  team is ready to help. Call for urgent service or use the book
                  service page to request an appointment.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {reasonsToContact.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-red-600" />
                      <span className="text-sm font-semibold leading-6 text-slate-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Business Info
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-red-600">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                        Phone
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="mt-1 inline-block text-lg font-bold text-slate-900 hover:text-red-600"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-red-600">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                        Email
                      </p>
                      <a
                        href={EMAIL_HREF}
                        className="mt-1 inline-block break-all text-lg font-bold text-slate-900 hover:text-red-600"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-red-600">
                      <FaClock />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                        Hours
                      </p>
                      <p className="mt-1 text-base leading-7 text-slate-700">
                        Call for current availability and scheduling.
                        Emergency-related garage door issues should be reported
                        as soon as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-red-600">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-slate-500">
                        Coverage
                      </p>
                      <p className="mt-1 text-base leading-7 text-slate-700">
                        SecureLifts serves homeowners and businesses throughout
                        South Florida.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                  >
                    Call Now
                  </a>

                  <Link
                    href="/book-service"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Areas We Commonly Serve
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We cover a wide range of South Florida communities. If you need
                service near one of these areas, call or book online.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((city) => (
                <Link
                  key={city}
                  href={`/garage-door-repair/${city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-800 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="sl-container py-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Contact Page FAQ
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Straight answers to common questions before you call or book
                service.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-black tracking-tight text-slate-900">
                    {faq.q}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sl-container py-14 md:py-20">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-12 md:py-14">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Need Garage Door Help Right Now?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                Call SecureLifts now for fast scheduling, real support, and a
                team that takes your garage door issue seriously.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white transition hover:bg-red-700"
              >
                Call {PHONE}
              </a>

      <Link
  href="/book-service"
  className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
>
  Book Service
</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}