import Link from "next/link";

export default function InternalLinks({
  city,
  cityName,
}: {
  city: string;
  cityName: string;
}) {
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
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-3xl font-black mb-6">
          Garage Door Services in {cityName}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service}
              href={`/${service}/${city}`}
              className="border p-4 rounded-xl font-semibold hover:bg-slate-50"
            >
              {service.replace(/-/g, " ")} in {cityName}
            </Link>
          ))}
        </div>

        <h3 className="text-3xl font-black mt-16 mb-6">
          Nearby Areas
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {nearbyCities.map((c) => (
            <Link
              key={c}
              href={`/garage-door-repair/${c}`}
              className="border p-4 rounded-xl font-semibold hover:bg-slate-50"
            >
              Garage Door Repair in {c.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}