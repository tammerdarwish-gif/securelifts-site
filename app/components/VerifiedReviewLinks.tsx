import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SITE_IDENTITY } from "@/lib/siteIdentity";

const externalProfiles = [
  {
    label: "BBB Business Profile",
    text: "Review SecureLifts accreditation, history, and public company information directly on BBB.",
    href: SITE_IDENTITY.verifiedProfiles[0],
  },
  {
    label: "Best Pick Reports",
    text: "Read independently published customer feedback and verified company details.",
    href: SITE_IDENTITY.verifiedProfiles[1],
  },
] as const;

export default function VerifiedReviewLinks() {
  return (
    <>
      {externalProfiles.map((profile) => (
        <a
          key={profile.href}
          href={profile.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border border-slate-200 bg-white p-6 text-left text-slate-900 shadow-sm transition hover:border-red-200"
        >
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-700">
            Independent Source
          </p>
          <h3 className="mt-2 text-xl font-black">{profile.label}</h3>
          <p className="mt-3 leading-7 text-slate-600">{profile.text}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-bold text-red-700">
            View profile <FaExternalLinkAlt className="text-xs" />
          </span>
        </a>
      ))}

      <Link
        href="/reviews"
        className="rounded-3xl border border-slate-200 bg-white p-6 text-left text-slate-900 shadow-sm transition hover:border-red-200"
      >
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-700">
          Project Evidence
        </p>
        <h3 className="mt-2 text-xl font-black">Reviews &amp; Case Studies</h3>
        <p className="mt-3 leading-7 text-slate-600">
          See completed South Florida installations with real project locations, products, photographs, and job values.
        </p>
        <span className="mt-5 inline-flex font-bold text-red-700">
          Explore project proof
        </span>
      </Link>
    </>
  );
}
