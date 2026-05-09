import Link from "next/link";

const TOP_CITIES = [
  ["Miami", "miami"],
  ["Fort Lauderdale", "fort-lauderdale"],
  ["Boca Raton", "boca-raton"],
  ["West Palm Beach", "west-palm-beach"],
  ["Palm Beach Gardens", "palm-beach-gardens"],
  ["Jupiter", "jupiter"],
  ["Wellington", "wellington"],
  ["Royal Palm Beach", "royal-palm-beach"],
  ["Delray Beach", "delray-beach"],
  ["Boynton Beach", "boynton-beach"],
] as const;

type Props = {
  servicePath: string;
  serviceName: string;
};

export default function TopCityServiceLinks({ servicePath, serviceName }: Props) {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Top South Florida Cities
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            {serviceName} in our most requested service areas
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Choose your city to see local service details, nearby areas, and the right SecureLifts page for scheduling.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {TOP_CITIES.map(([label, slug]) => (
            <Link
              key={slug}
              href={`/${servicePath}/${slug}`}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:text-red-700 hover:shadow-md"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
