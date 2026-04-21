import Link from "next/link";

export default function BookButton() {
  return (
    <Link
      href="/book-service"
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
    >
      Book Service
    </Link>
  );
}