import Link from "next/link";
import { isValidCitySlug } from "@/lib/cityPages";
import { BUSINESS_SCHEMA_REFERENCE, SITE_IDENTITY } from "@/lib/siteIdentity";

type Props = {
  cityName: string;
  citySlug: string;
  servicePath: string;
  serviceName: string;
  nearbyAreas?: string[];
};

const cityProfiles: Record<string, string> = {
  miami:
    "Miami homes often deal with tight driveways, older garage systems, salt air near the coast, and busy household schedules where a stuck garage door becomes a serious access problem fast.",
  "fort-lauderdale":
    "Fort Lauderdale properties range from waterfront homes to older neighborhoods and newer remodels, so garage door service often has to account for humidity, corrosion, and daily use.",
  "boca-raton":
    "Boca Raton homeowners usually care about clean curb appeal, quiet operation, and repairs that protect higher-end door systems instead of creating repeat problems.",
  "west-palm-beach":
    "West Palm Beach service calls often include a mix of older doors, newer storm-ready systems, and homes where heat, humidity, and frequent use wear down moving parts.",
  "palm-beach-gardens":
    "Palm Beach Gardens homes often need garage door work that protects appearance, reliability, and smoother daily operation for larger residential door systems.",
  jupiter:
    "Jupiter properties can be exposed to coastal weather, heavier wind planning needs, and daily-use garage systems that need clean, dependable service.",
  wellington:
    "Wellington homes often have larger garages, family-heavy schedules, and door systems that need reliable access without noisy or unsafe operation.",
  "royal-palm-beach":
    "Royal Palm Beach homeowners often call when a garage door starts getting loud, heavy, stuck, or unreliable after years of South Florida heat and daily use.",
  "delray-beach":
    "Delray Beach homes include coastal properties, active neighborhoods, and upgraded doors where service should protect both operation and curb appeal.",
  "boynton-beach":
    "Boynton Beach homeowners often need fast garage door help for worn springs, opener problems, noisy hardware, and older systems affected by humidity.",
};

const portfolioLinks: Record<string, { href: string; label: string }[]> = {
  "miami-beach": [
    {
      href: "/portfolio/garage-door-installation-miami-beach",
      label: "See our garage door installation project in Miami Beach",
    },
  ],
  miami: [
    {
      href: "/portfolio/garage-door-installation-coconut-grove",
      label: "See our garage door installation project in Coconut Grove",
    },
    {
      href: "/portfolio/garage-door-installation-miami-beach",
      label: "See our full-view installation project in Miami Beach",
    },
    {
      href: "/portfolio/garage-door-installation-pinecrest",
      label: "See our premium installation project in Pinecrest",
    },
  ],
};

function slugFromArea(area: string) {
  return area
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function nearbyForService(citySlug: string, servicePath: string, nearbyAreas?: string[]) {
  if (servicePath === "broken-spring-repair" && citySlug === "boca-raton") {
    return [
      ["Delray Beach", "delray-beach"],
      ["Deerfield Beach", "deerfield-beach"],
      ["Highland Beach", "highland-beach"],
      ["Parkland", "parkland"],
    ] as const;
  }

  const validNearby = (nearbyAreas ?? [])
    .slice(0, 4)
    .map((area) => [area, slugFromArea(area)] as const)
    .filter(([, slug]) => isValidCitySlug(slug));

  if (validNearby.length > 0) {
    return validNearby;
  }

  return [
    ["Miami", "miami"],
    ["Fort Lauderdale", "fort-lauderdale"],
    ["Boca Raton", "boca-raton"],
    ["West Palm Beach", "west-palm-beach"],
  ].filter(([, slug]) => slug !== citySlug) as [string, string][];
}

function serviceProblem(serviceName: string, cityName: string) {
  const lower = serviceName.toLowerCase();

  if (lower.includes("spring")) {
    return `In ${cityName}, spring problems usually show up as a door that will not open, feels extremely heavy, slams shut, or makes the opener strain. That needs a proper balance check, not a forced opener cycle.`;
  }

  if (lower.includes("opener")) {
    return `In ${cityName}, opener problems often come from sensor alignment, worn drive parts, power issues, remotes, or a door that is too heavy for the opener to move safely.`;
  }

  if (lower.includes("emergency")) {
    return `Emergency calls in ${cityName} usually involve a stuck door, broken spring, snapped cable, off-track door, or a vehicle trapped inside the garage. The priority is making the system safe first.`;
  }

  if (lower.includes("installation")) {
    return `For installation in ${cityName}, the right door needs to match the opening, home style, storm expectations, hardware setup, and long-term daily use.`;
  }

  if (lower.includes("maintenance")) {
    return `Maintenance in ${cityName} is mainly about catching worn rollers, loose hardware, cable wear, balance problems, and opener stress before they turn into emergency repairs.`;
  }

  if (lower.includes("cable")) {
    return `Cable issues in ${cityName} can make the door lift unevenly, jam, or become unsafe. A cable repair should include checking the drum, spring balance, rollers, and track alignment.`;
  }

  if (lower.includes("roller")) {
    return `Roller problems in ${cityName} often start as noise, shaking, or rough travel before the door begins dragging or wearing the track and hinges.`;
  }

  if (lower.includes("panel")) {
    return `Panel replacement in ${cityName} depends on whether the panel can be matched, whether the door is still square, and whether repair makes more sense than a full replacement.`;
  }

  return `In ${cityName}, garage door problems are often made worse by heat, humidity, daily use, and worn parts that continue to strain the system until the root cause is fixed.`;
}

export default function LocalServiceSeoBlock({
  cityName,
  citySlug,
  servicePath,
  serviceName,
  nearbyAreas,
}: Props) {
  const nearbyLinks = nearbyForService(citySlug, servicePath, nearbyAreas);
  const localIntro =
    cityProfiles[citySlug] ??
    `${cityName} homeowners need garage door service that fits South Florida weather, daily use, local neighborhoods, and the need for fast scheduling when the door stops working.`;
  const localProblem = serviceProblem(serviceName, cityName);
  const proofLinks = portfolioLinks[citySlug] ?? [];
  const canonical = `${SITE_IDENTITY.baseUrl}/${servicePath}/${citySlug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: `${serviceName} in ${cityName}, FL`,
        url: canonical,
        provider: BUSINESS_SCHEMA_REFERENCE,
        areaServed: {
          "@type": "City",
          name: `${cityName}, FL`,
        },
        serviceType: serviceName,
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `Do you serve neighborhoods around ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. SecureLifts serves ${cityName} and nearby South Florida communities with scheduling focused on the closest available route.`,
            },
          },
          {
            "@type": "Question",
            name: `How can I schedule ${serviceName.toLowerCase()} in ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Call SecureLifts or use the Book Service button to request service. We will confirm availability and the appropriate next step for your garage door.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_IDENTITY.baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: serviceName,
            item: `${SITE_IDENTITY.baseUrl}/${servicePath}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${serviceName} in ${cityName}`,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <section className="bg-slate-50 px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Local {serviceName}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            What homeowners should know in {cityName}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{localIntro}</p>
          <p className="mt-4 text-lg leading-8 text-slate-600">{localProblem}</p>

          {proofLinks.length > 0 && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">Project proof near {cityName}</h3>
              <div className="mt-4 grid gap-3">
                {proofLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-bold text-red-700 underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-2xl font-black text-slate-900">Nearby {serviceName}</h3>
          <p className="mt-3 leading-7 text-slate-600">
            SecureLifts also serves nearby South Florida communities for the same garage door service.
          </p>
          <div className="mt-6 grid gap-3">
            {nearbyLinks.map(([label, slug]) => (
              <Link
                key={`${servicePath}-${slug}`}
                href={`/${servicePath}/${slug}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-900 transition hover:border-red-200 hover:text-red-700"
              >
                {serviceName} near {label}
              </Link>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h3 className="text-xl font-black text-slate-900">{cityName} FAQ</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-bold text-slate-900">
                  Do you serve neighborhoods around {cityName}?
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Yes. SecureLifts serves {cityName} and nearby South Florida communities with scheduling focused on the closest available route.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  How can I schedule {serviceName.toLowerCase()} in {cityName}?
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Call SecureLifts or use the Book Service button to request service. We will confirm availability and the appropriate next step for your garage door.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
