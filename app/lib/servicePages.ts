export type SectionItem = {
  icon?: string;
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CityServiceConfig = {
  serviceKey:
    | "warehouse-door-repair"
    | "industrial-door-repair"
    | "industrial-door-installation"
    | "emergency-commercial-door-repair";
  image: string;
  imageClassName: string;
  eyebrow: string;
  heroTitle: (city: string) => string;
  heroDescription: (city: string, nearbyText: string) => string;
  primaryButtonText: string;
  secondaryButtonText: string;

  problemsEyebrow: string;
  problemsTitle: (city: string) => string;
  problemsDescription: (city: string) => string;
  problems: (city: string) => SectionItem[];

  servicesEyebrow: string;
  servicesTitle: (city: string) => string;
  servicesDescription: (city: string) => string;
  services: (city: string) => SectionItem[];

  whyEyebrow: string;
  whyTitle: (city: string) => string;
  whyDescription: (city: string, nearbyText: string) => string;
  whyItems: (city: string, nearbyText: string) => string[];

  ctaTitle: (city: string) => string;
  ctaDescription: (city: string) => string;

  faqEyebrow: string;
  faqTitle: (city: string) => string;
  faqDescription: (city: string) => string;
  faqs: (city: string) => FaqItem[];
};

export const servicePages: Record<CityServiceConfig["serviceKey"], CityServiceConfig> = {
  "warehouse-door-repair": {
    serviceKey: "warehouse-door-repair",
    image: "/warehouse-door-repair.png",
    imageClassName: "object-cover object-[right_center]",
    eyebrow: "SecureLifts Warehouse Service",
    heroTitle: (city) => `Warehouse Door Repair in ${city}`,
    heroDescription: (city, nearbyText) =>
      `Fast, reliable warehouse door repair in ${city} and nearby areas like ${nearbyText} for loading docks, distribution centers, shipping facilities, and warehouse operations that cannot afford downtime.`,
    primaryButtonText: "Call Now – (866) 828-1818",
    secondaryButtonText: "Book Service",

    problemsEyebrow: "Common Warehouse Door Problems",
    problemsTitle: (city) => `Warehouse Door Issues We Repair in ${city}`,
    problemsDescription: () =>
      "When a warehouse door fails, receiving, shipping, traffic flow, and security can all be affected immediately. These are the repair issues SecureLifts handles every day.",
    problems: (city) => [
      {
        title: "Door stuck open or closed",
        text: `A failed warehouse door in ${city} can block access, delay crews, and interrupt loading or receiving activity fast.`,
      },
      {
        title: "Loading dock disruption",
        text: "Broken warehouse doors can delay deliveries, slow outbound shipments, and create workflow problems for the entire facility.",
      },
      {
        title: "Unsafe movement around the opening",
        text: "Damaged tracks, rollers, or unstable doors can create real hazards for staff, forklifts, and warehouse traffic.",
      },
      {
        title: "Security risk after hours",
        text: `A damaged warehouse door can leave your facility in ${city} exposed overnight or during off-hours.`,
      },
      {
        title: "Broken springs, cables, or hardware",
        text: "Heavy-use warehouse systems wear down fast and need experienced repair to restore dependable operation.",
      },
      {
        title: "Motor or operator failure",
        text: "When the operator fails, warehouse access becomes unreliable and daily operations slow down immediately.",
      },
    ],

    servicesEyebrow: "Warehouse Repair Solutions",
    servicesTitle: (city) => `Warehouse Door Repair Services in ${city}`,
    servicesDescription: () =>
      "SecureLifts repairs the warehouse door systems facilities rely on for shipping, receiving, security, and day-to-day movement.",
    services: (city) => [
      {
        icon: "🏭",
        title: "Rolling Steel Door Repair",
        text: `Fast repair for damaged, stuck, or malfunctioning rolling steel warehouse doors in ${city}.`,
      },
      {
        icon: "🚚",
        title: "Loading Dock Door Repair",
        text: `Keep deliveries moving with dependable loading dock door repair service in ${city}.`,
      },
      {
        icon: "🧰",
        title: "Off-Track Door Repair",
        text: "We correct warehouse doors that have come off track, become unstable, or are no longer safe to operate.",
      },
      {
        icon: "⚙️",
        title: "Motor & Operator Repair",
        text: "Repair or replace operators, motors, and controls quickly and correctly to restore reliable access.",
      },
      {
        icon: "🔧",
        title: "Track, Cable & Hardware Repair",
        text: "Fix broken cables, damaged tracks, worn rollers, hinges, and related warehouse door hardware.",
      },
      {
        icon: "⚠️",
        title: "Emergency Warehouse Door Repair",
        text: `Fast response for urgent warehouse door failures in ${city} that disrupt operations or create safety issues.`,
      },
    ],

    whyEyebrow: "Why SecureLifts",
    whyTitle: (city) => `Why Facilities Choose SecureLifts in ${city}`,
    whyDescription: () =>
      "Warehouses need more than a quick patch. They need organized service, dependable repairs, and a team that understands how downtime affects daily operations.",
    whyItems: (city, nearbyText) => [
      `Fast response for warehouse and industrial properties in ${city}`,
      "Experienced with high-cycle and heavy-duty commercial door systems",
      "Repairs designed to reduce downtime and protect operations",
      "Licensed and insured in Florida",
      "Dependable scheduling and professional communication",
      `Service in ${city} and nearby areas like ${nearbyText}`,
    ],

    ctaTitle: () => "Don’t Let a Broken Door Slow Down Your Warehouse",
    ctaDescription: () =>
      "SecureLifts responds fast to repair warehouse doors, restore safe access, and keep your facility moving without unnecessary delays or repeated breakdowns.",

    faqEyebrow: "FAQs",
    faqTitle: () => "Warehouse Door Repair FAQs",
    faqDescription: (city) =>
      `Straight answers to common questions from warehouse and industrial property owners in ${city}.`,
    faqs: (city) => [
      {
        question: `What types of warehouse doors do you repair in ${city}?`,
        answer:
          "We repair rolling steel doors, loading dock doors, sectional warehouse doors, operators, tracks, cables, rollers, and other heavy-duty commercial door components.",
      },
      {
        question: "Do you offer emergency warehouse door repair?",
        answer:
          "Yes. SecureLifts provides fast response for warehouse door failures that stop operations, create safety risks, or leave the building unsecured.",
      },
      {
        question: "Can you repair motors and operators too?",
        answer:
          "Yes. We repair and replace warehouse door motors, operators, controls, and related hardware as part of a complete repair solution.",
      },
      {
        question: "Can you repair loading dock door systems too?",
        answer:
          "Yes. We handle loading dock door issues that affect shipping, receiving, and daily warehouse traffic flow.",
      },
    ],
  },

  "industrial-door-repair": {
    serviceKey: "industrial-door-repair",
    image: "/industrial-door-repair-team.png",
    imageClassName: "object-cover object-[center_25%]",
    eyebrow: "SecureLifts Industrial Service",
    heroTitle: (city) => `Industrial Door Repair in ${city}`,
    heroDescription: (city, nearbyText) =>
      `Fast, professional industrial door repair in ${city} and nearby areas like ${nearbyText} for warehouses, factories, distribution centers, service facilities, and commercial properties that cannot afford downtime.`,
    primaryButtonText: "Call Now – (866) 828-1818",
    secondaryButtonText: "Book Service",

    problemsEyebrow: "Common Industrial Door Problems",
    problemsTitle: (city) => `Industrial Door Issues We Repair in ${city}`,
    problemsDescription: () =>
      "Industrial door failures create downtime, safety concerns, delayed shipments, and access problems. These are the heavy-duty repair issues SecureLifts handles every day.",
    problems: (city) => [
      {
        title: "Door stuck open or closed",
        text: `A failed industrial door in ${city} can stop operations, block access, and expose the facility to security and workflow problems.`,
      },
      {
        title: "Loading dock and shipping disruption",
        text: "When industrial doors fail in active warehouse and distribution environments, receiving, shipping, and internal traffic are disrupted fast.",
      },
      {
        title: "Unsafe operating conditions",
        text: "Damaged tracks, broken hardware, and unstable industrial doors can create serious risks for employees, forklifts, and equipment.",
      },
      {
        title: "High-cycle wear and hardware failure",
        text: "Industrial systems used constantly throughout the day wear down fast and require experienced repair to restore reliable performance.",
      },
      {
        title: "Impact damage from equipment",
        text: "Forklifts, carts, and facility traffic can damage industrial doors, tracks, and alignment points, leading to immediate repair needs.",
      },
      {
        title: "Operator or control failure",
        text: "When operators, controls, or electrical components fail, the entire industrial door system can become unreliable or unusable.",
      },
    ],

    servicesEyebrow: "Industrial Repair Solutions",
    servicesTitle: (city) => `Industrial Door Repair Services in ${city}`,
    servicesDescription: () =>
      "SecureLifts repairs the industrial door systems facilities depend on for security, access, daily workflow, and reduced downtime.",
    services: (city) => [
      {
        icon: "🏭",
        title: "Rolling Steel Door Repair",
        text: `We repair jammed, damaged, and malfunctioning rolling steel doors for industrial properties in ${city}.`,
      },
      {
        icon: "🚚",
        title: "Loading Dock Door Repair",
        text: `Keep dock traffic moving in ${city} with fast repair for industrial and loading dock door systems.`,
      },
      {
        icon: "⚡",
        title: "High-Cycle Door Repair",
        text: `We repair high-use industrial doors in ${city} that suffer from heavy daily cycles, worn hardware, and performance issues.`,
      },
      {
        icon: "⚙️",
        title: "Motor & Operator Repair",
        text: "Fix or replace industrial motors, operators, controls, and related hardware quickly and correctly.",
      },
      {
        icon: "🔧",
        title: "Track, Cable & Hardware Repair",
        text: "We repair damaged tracks, broken cables, worn rollers, hinges, and heavy-duty industrial door hardware.",
      },
      {
        icon: "🚨",
        title: "Emergency Industrial Door Repair",
        text: `Fast response for urgent industrial door failures in ${city} that stop operations or create safety issues.`,
      },
    ],

    whyEyebrow: "Why SecureLifts",
    whyTitle: (city) => `Why Facilities Choose SecureLifts in ${city}`,
    whyDescription: () =>
      "Industrial properties need more than a quick patch. They need organized service, experienced repair, and dependable results that reduce downtime and keep facilities moving.",
    whyItems: (city, nearbyText) => [
      `Fast response for warehouses and industrial properties in ${city}`,
      "Experienced with heavy-duty commercial and industrial door systems",
      "Repairs designed to reduce downtime and protect workflow",
      "Clear communication and dependable scheduling",
      "Licensed and insured in Florida",
      `Service for facilities in ${city} and nearby areas like ${nearbyText}`,
    ],

    ctaTitle: () => "Don’t Let an Industrial Door Failure Slow Down Your Facility",
    ctaDescription: () =>
      "SecureLifts responds fast to repair industrial doors, restore safe access, and keep operations moving without unnecessary delays or repeated breakdowns.",

    faqEyebrow: "FAQs",
    faqTitle: () => "Industrial Door Repair FAQs",
    faqDescription: (city) =>
      `Straight answers to common questions from warehouse, industrial, and commercial property owners in ${city}.`,
    faqs: (city) => [
      {
        question: `What types of industrial doors do you repair in ${city}?`,
        answer:
          "We repair rolling steel doors, sectional industrial doors, loading dock doors, high-cycle industrial doors, motors, operators, tracks, cables, and related heavy-duty door hardware.",
      },
      {
        question: "Do you offer emergency industrial door repair?",
        answer:
          "Yes. SecureLifts provides fast response for industrial door failures that disrupt operations, create safety risks, or leave a facility unsecured.",
      },
      {
        question: "Can you repair loading dock doors and warehouse systems too?",
        answer:
          "Yes. We repair industrial and warehouse door systems used in loading docks, shipping areas, distribution centers, and daily heavy-use environments.",
      },
      {
        question: "Can you repair operators and control systems too?",
        answer:
          "Yes. We repair and replace operators, motors, controls, and related system components as part of complete industrial door service.",
      },
    ],
  },

  "industrial-door-installation": {
    serviceKey: "industrial-door-installation",
    image: "/industrial-door-installation.png",
    imageClassName: "object-cover object-[right_center]",
    eyebrow: "SecureLifts Industrial Installation",
    heroTitle: (city) => `Industrial Door Installation in ${city}`,
    heroDescription: (city, nearbyText) =>
      `Professional industrial door installation in ${city} and nearby areas like ${nearbyText} for warehouses, distribution centers, manufacturing facilities, loading dock operations, and commercial properties that need durable, high-performance door systems.`,
    primaryButtonText: "Call Now – (866) 828-1818",
    secondaryButtonText: "Book Installation",

    problemsEyebrow: "Why Proper Installation Matters",
    problemsTitle: (city) => `Industrial Door Installation Services in ${city}`,
    problemsDescription: () =>
      "Industrial installations need the right system, the right fit, and the right installation process. A poor install creates downtime, premature wear, and expensive problems later.",
    problems: (city) => [
      {
        title: "Wrong system for the workload",
        text: `Facilities in ${city} need industrial door systems matched to traffic level, cycle count, opening size, and operational demand.`,
      },
      {
        title: "Poor installation creates future breakdowns",
        text: "Bad installation leads to alignment issues, hardware strain, early failures, and expensive service calls later.",
      },
      {
        title: "Operator and control compatibility issues",
        text: "Motors, operators, and controls must match the door system correctly for safe and dependable performance.",
      },
      {
        title: "Security and access concerns",
        text: "Industrial openings need durable systems that protect the facility while supporting daily traffic and operational flow.",
      },
      {
        title: "Downtime during replacement or installation",
        text: "A poor install process can disrupt facility activity longer than necessary and create avoidable delays.",
      },
      {
        title: "Long-term reliability matters",
        text: "A properly installed system performs better, lasts longer, and reduces future maintenance and breakdowns.",
      },
    ],

    servicesEyebrow: "Industrial Installation Options",
    servicesTitle: (city) => `Industrial Door Installation Options in ${city}`,
    servicesDescription: () =>
      "SecureLifts installs heavy-duty industrial door systems built for performance, security, and long-term reliability in demanding environments.",
    services: (city) => [
      {
        icon: "🏭",
        title: "Rolling Steel Doors",
        text: `Heavy-duty rolling steel door installation for warehouses and industrial buildings in ${city}.`,
      },
      {
        icon: "⚡",
        title: "High-Speed Doors",
        text: `Fast-cycle industrial door solutions in ${city} designed for efficiency, workflow, and controlled environments.`,
      },
      {
        icon: "🚚",
        title: "Loading Dock Doors",
        text: `Reliable installation for shipping areas, distribution hubs, and loading dock operations in ${city}.`,
      },
      {
        icon: "🏢",
        title: "Sectional Industrial Doors",
        text: `Commercial-grade sectional industrial door installation in ${city} for facilities that need durability and dependable daily performance.`,
      },
      {
        icon: "🛡️",
        title: "Security Grilles & Closures",
        text: `Professionally installed security systems for facilities, storefronts, and commercial openings in ${city}.`,
      },
      {
        icon: "🔧",
        title: "Operator & Motor Systems",
        text: `Complete installation of operators, motors, controls, and supporting hardware for smooth daily operation in ${city}.`,
      },
    ],

    whyEyebrow: "Why SecureLifts",
    whyTitle: (city) => `Why Businesses Choose SecureLifts in ${city}`,
    whyDescription: () =>
      "Industrial installations need more than parts and labor. They need the right system, installed correctly, with dependable communication and professional follow-through.",
    whyItems: (city, nearbyText) => [
      `Commercial and industrial specialists serving ${city}`,
      "Professional installation done right the first time",
      "Heavy-duty products built for demanding environments",
      "Licensed and insured in Florida",
      "Fast scheduling and dependable communication",
      `Service in ${city} and nearby areas like ${nearbyText}`,
    ],

    ctaTitle: (city) => `Need a New Industrial Door Installed in ${city}?`,
    ctaDescription: () =>
      "SecureLifts installs commercial and industrial door systems designed for daily use, heavy traffic, and long-term reliability without shortcuts.",

    faqEyebrow: "FAQs",
    faqTitle: () => "Industrial Door Installation FAQs",
    faqDescription: (city) =>
      `Straight answers to common installation questions from industrial and commercial property owners in ${city}.`,
    faqs: (city) => [
      {
        question: `What types of industrial doors do you install in ${city}?`,
        answer:
          "We install rolling steel doors, sectional industrial doors, loading dock doors, high-speed doors, operators, and related commercial door systems.",
      },
      {
        question: "Do you help choose the right system for the facility?",
        answer:
          "Yes. We evaluate the building, traffic level, security needs, cycle demands, and operational requirements to recommend the best fit.",
      },
      {
        question: "Can you install operators and controls too?",
        answer:
          "Yes. SecureLifts can install the full system, including operators, motors, controls, and supporting hardware.",
      },
      {
        question: "Do you install industrial doors for loading docks and warehouses?",
        answer:
          "Yes. We install industrial door systems for warehouses, loading dock operations, distribution centers, and other heavy-use commercial properties.",
      },
    ],
  },

  "emergency-commercial-door-repair": {
    serviceKey: "emergency-commercial-door-repair",
    image: "/emergency-commercial-door-repair.png",
    imageClassName: "object-cover object-[center_30%]",
    eyebrow: "24/7 SecureLifts Emergency Response",
    heroTitle: (city) => `Emergency Commercial Door Repair in ${city}`,
    heroDescription: (city, nearbyText) =>
      `Door stuck? Business shut down? SecureLifts responds fast in ${city} and nearby areas like ${nearbyText} to restore access, secure your property, and get operations back on track without unnecessary delays.`,
    primaryButtonText: "Call Now – (866) 828-1818",
    secondaryButtonText: "Book Service",

    problemsEyebrow: "Emergency Situations We Handle",
    problemsTitle: () => "When Your Commercial Door Fails, Every Minute Costs You",
    problemsDescription: () =>
      "Emergency commercial door problems do more than inconvenience your business. They affect security, access, safety, staff movement, deliveries, and daily operations fast.",
    problems: (city) => [
      {
        icon: "⏱️",
        title: "Business operations stopped",
        text: `A failed commercial door in ${city} can stop traffic, delay work, and disrupt the entire day immediately.`,
      },
      {
        icon: "🔒",
        title: "Employees locked out or blocked in",
        text: "When access is blocked, crews, deliveries, workflow, and customer movement are affected right away.",
      },
      {
        icon: "🛡️",
        title: "Security risk overnight",
        text: `A damaged or stuck commercial door can leave your property in ${city} exposed after hours or during vulnerable periods.`,
      },
      {
        icon: "🚚",
        title: "Missed deliveries or shipping delays",
        text: "A broken commercial door can create expensive delays for receiving, dispatch, and scheduled deliveries.",
      },
      {
        icon: "⚠️",
        title: "Unsafe operating conditions",
        text: "Broken springs, tracks, motors, panels, or hardware create real risks for staff, customers, and daily business use.",
      },
      {
        icon: "🚨",
        title: "Urgent after-hours failure",
        text: "Some problems cannot wait until morning. We respond fast when immediate commercial door service matters.",
      },
    ],

    servicesEyebrow: "Emergency Repair Services",
    servicesTitle: (city) => `Emergency Commercial Repair Services in ${city}`,
    servicesDescription: () =>
      "SecureLifts repairs the commercial door systems businesses depend on every day. When those systems fail, we move fast to restore safe access and reliable operation.",
    services: (city) => [
      {
        icon: "🚪",
        title: "Overhead Door Repair",
        text: `Fast emergency repair for stuck, damaged, or unsafe overhead commercial doors in ${city}.`,
      },
      {
        icon: "🏭",
        title: "Rolling Steel Door Repair",
        text: "Repair for rolling steel doors that jam, fail to open, or stop operating safely.",
      },
      {
        icon: "🔧",
        title: "Track & Cable Repair",
        text: "We fix damaged tracks, broken cables, worn rollers, and related commercial door hardware.",
      },
      {
        icon: "⚡",
        title: "Broken Spring Replacement",
        text: "Failed springs can shut down the whole commercial door system. We replace them safely and correctly.",
      },
      {
        icon: "⚙️",
        title: "Motor & Operator Repair",
        text: "Repair or replacement for commercial door operators, motors, controls, and related parts.",
      },
      {
        icon: "🧰",
        title: "Off-Track Door Repair",
        text: "We correct off-track commercial doors that are unsafe, jammed, or no longer usable.",
      },
    ],

    whyEyebrow: "Why SecureLifts",
    whyTitle: (city) => `Why Businesses Call SecureLifts in ${city}`,
    whyDescription: () =>
      "In an emergency, businesses need speed, clear communication, and a repair team that understands commercial door systems under real pressure.",
    whyItems: (city, nearbyText) => [
      `Fast emergency response in ${city}`,
      "Commercial and industrial door specialists",
      "Clear communication when downtime is costing money",
      "Licensed and insured in Florida",
      `Service in ${city} and nearby areas like ${nearbyText}`,
      "Repairs focused on restoring safe access quickly",
    ],

    ctaTitle: () => "Don’t Let a Broken Door Shut Down Your Business",
    ctaDescription: () =>
      "SecureLifts responds fast to restore safe access, secure your property, and get your commercial door working again without unnecessary delay.",

    faqEyebrow: "FAQs",
    faqTitle: () => "Emergency Commercial Door Repair FAQs",
    faqDescription: (city) =>
      `Straight answers to common emergency repair questions from commercial property owners in ${city}.`,
    faqs: (city) => [
      {
        question: `Do you offer emergency commercial door repair in ${city}?`,
        answer:
          "Yes. SecureLifts provides fast emergency response for urgent commercial door failures that stop business operations, create safety risks, or leave a property unsecured.",
      },
      {
        question: "What types of commercial doors do you repair?",
        answer:
          "We repair overhead doors, rolling steel doors, off-track doors, broken springs, tracks, cables, operators, motors, and related commercial door hardware.",
      },
      {
        question: "Can you repair motors and operators too?",
        answer:
          "Yes. We repair and replace motors, operators, controls, and other key components as part of complete emergency commercial door service.",
      },
      {
        question: "Do you offer after-hours emergency service?",
        answer:
          "Yes. When commercial door failures create urgent access, safety, or security issues, SecureLifts responds as quickly as possible to restore function and secure the property.",
      },
    ],
  },
};

export function getServicePageConfig(key: CityServiceConfig["serviceKey"]) {
  return servicePages[key];
}