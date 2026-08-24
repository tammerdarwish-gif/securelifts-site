import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getOpenerProduct,
  getOpenerProductSlugs,
  openerManualDocuments,
  openerProducts,
} from "@/lib/openerProducts";

const PHONE_DISPLAY = "(866) 828-1818";
const PHONE_HREF = "tel:+18668281818";

type PageProps = {
  params: Promise<{ model: string }>;
};

export function generateStaticParams() {
  return getOpenerProductSlugs().map((model) => ({ model }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { model } = await params;
  const product = getOpenerProduct(model);

  if (!product) {
    return {};
  }

  const canonical = `https://securelifts.com/garage-door-opener/${product.slug}`;
  const pairedProductName = `${product.shortName} / ${product.pairedName}`;
  const title = `${pairedProductName} Garage Door Opener | SecureLifts`;
  const description = `${product.summary} SecureLifts installs, repairs, and replaces garage door openers across South Florida.`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SecureLifts",
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

export default async function OpenerProductPage({ params }: PageProps) {
  const { model } = await params;
  const product = getOpenerProduct(model);

  if (!product) {
    notFound();
  }

  const canonical = `https://securelifts.com/garage-door-opener/${product.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: product.name,
        brand: {
          "@type": "Brand",
          name: "LiftMaster",
        },
        image: `https://securelifts.com${product.image}`,
        description: product.summary,
        category: "Garage Door Opener",
        url: canonical,
        ...(product.discontinued
          ? {
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Status",
                value: "Discontinued",
              },
            }
          : {}),
        ...(product.productRating
          ? {
              review: {
                "@type": "Review",
                author: {
                  "@type": "Team",
                  name: "SecureLifts Product Team",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: product.productRating,
                  bestRating: 5,
                  worstRating: 1,
                },
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://securelifts.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Garage Door Openers",
            item: "https://securelifts.com/garage-door-opener",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.shortName,
            item: canonical,
          },
        ],
      },
    ],
  };

  const relatedProducts = openerProducts.filter(
    (item) => item.slug !== product.slug
  );
  const manualDocuments = openerManualDocuments[product.slug] || [];

  return (
    <>
      <Script
        id={`${product.slug}-product-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Link
                href="/garage-door-opener"
                className="text-sm font-bold uppercase tracking-[0.2em] text-red-300 transition hover:text-white"
              >
                Garage Door Openers
              </Link>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl xl:text-6xl">
                {product.shortName} / {product.pairedName}
              </h1>
              <div className="mt-4 flex flex-wrap gap-3">
                <p className="inline-flex rounded-full border border-red-300/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-red-100">
                  Same matched opener family, private-label naming
                </p>
                {product.discontinued ? (
                  <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/15 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-amber-100">
                    Discontinued
                  </p>
                ) : null}
                {product.productRating ? (
                  <p className="inline-flex rounded-full border border-yellow-300/40 bg-yellow-300/15 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-yellow-100">
                    ★ {product.productRating} out of 5
                  </p>
                ) : null}
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {product.summary}
              </p>
              {product.currentStatus ? (
                <div className="mt-6 max-w-2xl rounded-2xl border border-red-300/25 bg-white/10 p-5 text-sm font-semibold leading-6 text-slate-100">
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-red-200">
                    Model Number Note
                  </span>
                  <span className="mt-2 block">{product.currentStatus}</span>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/book-service"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Book Opener Service
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl">
              <div className="relative h-80 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Product Fit
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Where this opener makes sense
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We match the opener to the door, the garage layout, and the way
                the customer uses the home. That keeps the recommendation clean
                and avoids putting a new opener on a bad door system.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {product.bestFor.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-bold leading-6 text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                  SecureLifts Guide
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  Product details without leaving the site
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Review model names, opener family notes, and safe homeowner
                  checks inside the SecureLifts resource center.
                </p>
                <Link
                  href={`/resources/garage-door-opener-manuals#${product.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  View Resource Guide
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                  LiftMaster / Raynor Match
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  {product.shortName} / {product.pairedName}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  SecureLifts can sell and service this matched opener family
                  under the LiftMaster name or the Raynor private-label name.
                  The name on the cover may be different, but the customer is
                  comparing the same professional opener family.
                </p>
                <Link
                  href={`/resources/garage-door-opener-manuals#${product.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  See Matched Names
                </Link>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">
                  Manual
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight">
                  Owner manual and setup help
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Access SecureLifts model notes, safe troubleshooting steps,
                  programming guidance, and repair-or-replace advice from our
                  internal resource library.
                </p>
                {manualDocuments.length > 0 ? (
                  <div className="mt-5 grid gap-2">
                    {manualDocuments.slice(0, 3).map((document) => (
                      <a
                        key={document.href}
                        href={document.href}
                        className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-slate-900 transition hover:text-red-600"
                      >
                        {document.title}
                      </a>
                    ))}
                  </div>
                ) : null}
                <Link
                  href={`/resources/garage-door-opener-manuals#${product.slug}`}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                >
                  Open SecureLifts Manual Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                SecureLifts Recommendation
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                We do not replace the opener blindly
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {product.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-red-100 bg-red-50 p-7">
              <h3 className="text-2xl font-black tracking-tight">
                Before choosing {product.shortName}
              </h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Check door balance and spring condition",
                  "Confirm opener type, ceiling layout, and available clearance",
                  "Review noise expectations and smart-control needs",
                  "Install, program, test, and show the customer how it works",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                Compare Options
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Other opener pages customers search for
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.slice(0, 5).map((item) => (
                <Link
                  key={item.slug}
                  href={`/garage-door-opener/${item.slug}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-xl font-black tracking-tight">
                    {item.shortName}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Need Help Choosing?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Call SecureLifts before buying the wrong opener
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Tell us what opener you have now, what the door is doing, and what
              you want the garage to feel like after the upgrade. We will guide
              you to the right repair or replacement path.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-700"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-7 py-4 text-base font-bold text-slate-900 transition hover:bg-slate-50"
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
