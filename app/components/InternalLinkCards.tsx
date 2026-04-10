import Link from "next/link";

type LinkItem = {
  title: string;
  text: string;
  href: string;
  icon?: string;
};

type InternalLinkCardsProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: LinkItem[];
};
export default function InternalLinkCards({
  eyebrow,
  heading,
  intro,
  items,
}: InternalLinkCardsProps) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {heading}
          </h2>

          {intro ? (
            <p className="text-lg leading-8 text-gray-600">{intro}</p>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-red-600 opacity-0 transition group-hover:opacity-100" />

              {item.icon ? (
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                  {item.icon}
                </div>
              ) : null}

              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mb-5 leading-7 text-gray-700">{item.text}</p>

              <span className="inline-flex items-center font-semibold text-red-600 transition group-hover:translate-x-1">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}