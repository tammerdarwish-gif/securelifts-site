import Image from "next/image";
import Link from "next/link";

type ShowcaseVariant = "installation" | "repair" | "spring" | "storm" | "commercial" | "mixed";

type Project = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

const projectsByVariant: Record<ShowcaseVariant, Project[]> = {
  installation: [
    {
      title: "Modern Wood-Look Installation",
      text: "A clean premium door upgrade with a warm modern finish and strong curb appeal.",
      image: "/images/approved/wood-modern-install-hero.jpg",
      alt: "Modern wood-look garage door installation by SecureLifts",
    },
    {
      title: "Black Full-View Door",
      text: "A contemporary glass-panel door used for a sharper South Florida exterior.",
      image: "/images/approved/modern-black-glass-card.jpg",
      alt: "Black modern glass garage door installed in South Florida",
    },
    {
      title: "Traditional White Upgrade",
      text: "A clean residential door replacement that improves daily use and street appeal.",
      image: "/images/approved/white-traditional-clean-card.jpg",
      alt: "White traditional garage door installation by SecureLifts",
    },
  ],
  repair: [
    {
      title: "Damaged Door Restored",
      text: "Real repair work for a bent, stuck, or unsafe door that needed professional correction.",
      image: "/images/approved/damaged-door-before-card.jpg",
      alt: "Damaged garage door before SecureLifts repair",
    },
    {
      title: "Clean Finished Repair",
      text: "After the repair, the door is back to a cleaner, safer, usable condition.",
      image: "/images/approved/repaired-door-after-card.jpg",
      alt: "Repaired garage door after SecureLifts service",
    },
    {
      title: "Technician On Site",
      text: "Real service work from the inside of the garage, not generic stock photography.",
      image: "/images/approved/technician-door-service-card.jpg",
      alt: "SecureLifts technician servicing a garage door",
    },
  ],
  spring: [
    {
      title: "Broken Spring Diagnosis",
      text: "A close look at the spring system helps customers understand why a heavy or stuck door should not be forced.",
      image: "/images/approved/spring-closeup-card.jpg",
      alt: "Broken garage door spring close-up inspected by SecureLifts",
    },
    {
      title: "Door Hardware Check",
      text: "Spring repair should include a full check of cables, tracks, rollers, and balance so the door operates safely.",
      image: "/images/approved/interior-door-hardware-card.jpg",
      alt: "Garage door hardware and spring system inspection",
    },
    {
      title: "Real Repair Situation",
      text: "When a door becomes unsafe or will not move correctly, SecureLifts focuses on restoring safe operation first.",
      image: "/images/approved/damaged-panel-proof-card.jpg",
      alt: "Damaged garage door panel and hardware repair proof",
    },
  ],
  storm: [
    {
      title: "Modern Storm-Ready Style",
      text: "A premium modern look that fits South Florida homes preparing for stronger weather.",
      image: "/images/approved/modern-slate-hurricane-card.jpg",
      alt: "Modern storm-ready garage door style in South Florida",
    },
    {
      title: "Premium Carriage Look",
      text: "A high-end carriage-house style for homeowners who want protection without losing design.",
      image: "/images/approved/carriage-house-premium-card.jpg",
      alt: "Premium carriage-house garage doors in South Florida",
    },
    {
      title: "Clean Traditional Option",
      text: "A stronger classic direction for homeowners who want a familiar look with better performance.",
      image: "/images/approved/traditional-white-install-hero.jpg",
      alt: "Traditional white garage door on South Florida home",
    },
  ],
  commercial: [
    {
      title: "Commercial Roll-Up Door",
      text: "Warehouse and commercial door service for businesses that need access restored quickly.",
      image: "/images/approved/commercial-rollup-card.jpg",
      alt: "Commercial roll-up garage door serviced by SecureLifts",
    },
    {
      title: "Roll-Up Door Service",
      text: "Technician work on a commercial rolling steel door for a South Florida business.",
      image: "/images/approved/commercial-rollup-service-card.jpg",
      alt: "Technician servicing a commercial roll-up door",
    },
    {
      title: "Interior Door Hardware",
      text: "Professional attention to hardware, balance, and operation behind the finished door.",
      image: "/images/approved/interior-door-hardware-card.jpg",
      alt: "Interior garage door hardware and track system",
    },
  ],
  mixed: [
    {
      title: "Modern Door Projects",
      text: "Contemporary glass and black-door work for premium South Florida homes.",
      image: "/images/approved/two-black-doors-interior-card.jpg",
      alt: "Modern black glass garage door project by SecureLifts",
    },
    {
      title: "Real Service Presence",
      text: "A branded SecureLifts truck on site, ready for repair or replacement work.",
      image: "/images/approved/service-van-at-door-card.jpg",
      alt: "SecureLifts service vehicle at a garage door project",
    },
    {
      title: "Clean Residential Installs",
      text: "Finished door upgrades that look right on South Florida homes.",
      image: "/images/approved/white-double-door-service-card.jpg",
      alt: "Clean white double garage door installed in South Florida",
    },
  ],
};

type Props = {
  variant?: ShowcaseVariant;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  dark?: boolean;
};

export default function ApprovedProjectShowcase({
  variant = "mixed",
  eyebrow = "Real Project Proof",
  heading = "Real SecureLifts Work Across South Florida",
  intro = "Customers want to see real work before they call. These approved project photos show the kind of repair, installation, and storm-door work SecureLifts handles locally.",
  dark = false,
}: Props) {
  const projects = projectsByVariant[variant];

  return (
    <section className={dark ? "bg-slate-950 px-6 py-16 text-white md:py-20" : "bg-white px-6 py-16 text-slate-900 md:py-20"}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className={dark ? "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400" : "mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600"}>
            {eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className={dark ? "mt-4 text-lg leading-8 text-slate-200" : "mt-4 text-lg leading-8 text-slate-600"}>
            {intro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={dark ? "overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm" : "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"}
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black tracking-tight">
                  {project.title}
                </h3>
                <p className={dark ? "mt-3 text-base leading-7 text-slate-200" : "mt-3 text-base leading-7 text-slate-600"}>
                  {project.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/book-service"
            className={dark ? "inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold !text-white transition hover:bg-red-700" : "inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-base font-bold !text-white transition hover:bg-red-700"}
          >
            Request Service or Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
