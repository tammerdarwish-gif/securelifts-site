import Link from "next/link";
import { SITE_IDENTITY } from "@/lib/siteIdentity";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            &copy; {new Date().getFullYear()} SecureLifts Garage Doors. All rights
            reserved.
          </p>
          <p>
            <a
              href={SITE_IDENTITY.primaryLocation.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              {SITE_IDENTITY.primaryLocation.displayAddress}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={SITE_IDENTITY.phoneHref}
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              {SITE_IDENTITY.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/ai-garage-door-answers"
            className="font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            Garage Door Answers
          </Link>
          <Link
            href="/privacy-policy"
            className="font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="font-semibold text-slate-900 underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
