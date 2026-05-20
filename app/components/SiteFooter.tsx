import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 text-sm text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} SecureLifts Garage Doors. All rights
          reserved.
        </p>
        <Link
          href="/privacy-policy"
          className="font-semibold text-slate-900 underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
