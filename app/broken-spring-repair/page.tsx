import Link from "next/link";

type InternalLinksProps = {
  city: string;
  cityName: string;
};

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function InternalLinks({
  city,
  cityName,
}: InternalLinksProps) {
  const services = [
    "garage-door-repair",
    "garage-door-installation",
    "garage-door-maintenance",
    "garage-door-opener-repair",
    "garage-door-off-track-repair",
    "garage-door-cable-repair",
    "garage-door-panel-replacement",
    "garage-door-roller-replacement",
    "broken-spring-repair",
    "spring-replacement",
    "emergency-garage-door-repair",
  ];

  const nearbyCities = [
    "miami",
    "hialeah",
    "doral",
    "fort-lauderdale",
    "boca-raton",
    "west-palm-beach",
  ].filter((c) => c !== city);

  return (
    <section className="bg-white px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Explore More Services
          </p>
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">
            Garage Door Services in {cityName}
          </h2>
          <p className="mb-10 text-base leading-7 text-slate-600 md:text-lg">
            Browse related garage door services in {cityName} and nearby areas.
            These links help customers quickly find the exact service they need
            while strengthening the structure of your local service pages.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service}
              href={`/${service}/${city}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-slate-50 hover:shadow-md"
            >
              <span className="block text-base leading-6">
                {formatLabel(service)} in {cityName}
              </span>
              <span className="mt-2 block text-sm font-medium text-red-600">
                View service page →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Nearby Service Areas
          </p>
          <h3 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">
            Nearby Areas
          </h3>
          <p className="mb-10 text-base leading-7 text-slate-600 md:text-lg">
            Customers also search for garage door repair in nearby cities. Use
            these internal links to strengthen local relevance across South
            Florida pages.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {nearbyCities.map((nearbyCity) => (
            <Link
              key={nearbyCity}
              href={`/garage-door-repair/${nearbyCity}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-slate-50 hover:shadow-md"
            >
              <span className="block text-base leading-6">
                Garage Door Repair in {formatLabel(nearbyCity)}
              </span>
              <span className="mt-2 block text-sm font-medium text-red-600">
                View city page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}