import Link from "next/link";
import { FaCheckCircle, FaShieldAlt, FaBolt, FaExternalLinkAlt } from "react-icons/fa";
import { SITE_IDENTITY } from "@/lib/siteIdentity";

type ReviewTrustSectionProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
};

export default function ReviewTrustSection({
  eyebrow = "Trusted by Homeowners",
  heading,
  intro,
}: ReviewTrustSectionProps) {
  const trustPoints = [
    {
      icon: <FaShieldAlt className="text-red-600" />,
      title: "Licensed & Insured",
      text: "Professional garage door service backed by proper coverage and accountability.",
    },
    {
      icon: <FaBolt className="text-red-600" />,
      title: "Fast Response",
      text: "Quick scheduling, direct communication, and service that moves without wasting time.",
    },
    {
      icon: <FaCheckCircle className="text-red-600" />,
      title: "Work Done Right",
      text: "We focus on clean installation, strong workmanship, and results that hold up.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            {eyebrow}
          </p>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {heading}
          </h2>

          {intro ? (
            <p className="text-lg leading-8 text-gray-600">{intro}</p>
          ) : null}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            <a
              href={SITE_IDENTITY.verifiedProfiles[0]}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-gray-200 bg-white p-7 text-gray-900 shadow-sm transition hover:border-red-200"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
                Independent Profile
              </p>
              <h3 className="mt-2 text-2xl font-bold">BBB Business Profile</h3>
              <p className="mt-3 leading-7 text-gray-700">
                Review SecureLifts accreditation, company history, and public business details directly on BBB.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-red-700">
                View BBB profile <FaExternalLinkAlt className="text-sm" />
              </span>
            </a>

            <a
              href={SITE_IDENTITY.verifiedProfiles[1]}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-gray-200 bg-white p-7 text-gray-900 shadow-sm transition hover:border-red-200"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
                Verified Reviews
              </p>
              <h3 className="mt-2 text-2xl font-bold">Best Pick Reports</h3>
              <p className="mt-3 leading-7 text-gray-700">
                Read independently published customer reviews and company details on the SecureLifts Best Pick profile.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-bold text-red-700">
                Read verified reviews <FaExternalLinkAlt className="text-sm" />
              </span>
            </a>

            <Link
              href="/reviews"
              className="rounded-3xl border border-gray-200 bg-white p-7 text-gray-900 shadow-sm transition hover:border-red-200"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">
                Project Evidence
              </p>
              <h3 className="mt-2 text-2xl font-bold">Real SecureLifts Projects</h3>
              <p className="mt-3 leading-7 text-gray-700">
                Explore completed South Florida installations with project locations, products, photographs, and job values.
              </p>
              <span className="mt-5 inline-flex font-bold text-red-700">
                View reviews and case studies
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
