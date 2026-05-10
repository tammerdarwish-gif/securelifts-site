export type OpenerProduct = {
  slug: string;
  name: string;
  shortName: string;
  pairedName: string;
  category: string;
  raynorMatch: string;
  currentStatus?: string;
  summary: string;
  bestFor: string[];
  highlights: string[];
  details: string[];
  image: string;
  imageAlt: string;
  liftMasterUrl: string;
  manualUrl: string;
  raynorUrl: string;
  legacyPaths: string[];
};

export type OpenerManualDocument = {
  title: string;
  href: string;
  kind: "Owner Manual" | "User Guide" | "Product Guide" | "Installation Manual";
};

export const openerManualDocuments: Record<string, OpenerManualDocument[]> = {
  "liftmaster-98022": [
    {
      title: "LiftMaster 98022 Owner's Manual",
      href: "/resources/manuals/openers/liftmaster-98022-owner-manual.pdf",
      kind: "Owner Manual",
    },
    {
      title: "LiftMaster 98022 User's Guide",
      href: "/resources/manuals/openers/liftmaster-98022-user-guide.pdf",
      kind: "User Guide",
    },
  ],
  "liftmaster-6690l": [
    {
      title: "LiftMaster 6690L / 6580L Installation Manual",
      href: "/resources/manuals/openers/liftmaster-6690l-6580l-installation-manual.pdf",
      kind: "Installation Manual",
    },
    {
      title: "LiftMaster 6690L Product Guide",
      href: "/resources/manuals/openers/liftmaster-6690l-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-6580l": [
    {
      title: "LiftMaster 6690L / 6580L Installation Manual",
      href: "/resources/manuals/openers/liftmaster-6690l-6580l-installation-manual.pdf",
      kind: "Installation Manual",
    },
    {
      title: "LiftMaster 6580L Product Guide",
      href: "/resources/manuals/openers/liftmaster-6580l-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-2420l": [
    {
      title: "LiftMaster 2420L Product Guide",
      href: "/resources/manuals/openers/liftmaster-2420l-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-2220l": [
    {
      title: "LiftMaster 2220L Product Guide",
      href: "/resources/manuals/openers/liftmaster-2220l-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-87504-267": [
    {
      title: "LiftMaster 87504-267 / 84505R Owner's Manual",
      href: "/resources/manuals/openers/liftmaster-87504-267-84505r-owner-manual.pdf",
      kind: "Owner Manual",
    },
    {
      title: "LiftMaster 87504-267 / 84505R User's Guide",
      href: "/resources/manuals/openers/liftmaster-87504-267-84505r-user-guide.pdf",
      kind: "User Guide",
    },
    {
      title: "LiftMaster 87504-267 Product Guide",
      href: "/resources/manuals/openers/liftmaster-87504-267-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-84505r": [
    {
      title: "LiftMaster 87504-267 / 84505R Owner's Manual",
      href: "/resources/manuals/openers/liftmaster-87504-267-84505r-owner-manual.pdf",
      kind: "Owner Manual",
    },
    {
      title: "LiftMaster 87504-267 / 84505R User's Guide",
      href: "/resources/manuals/openers/liftmaster-87504-267-84505r-user-guide.pdf",
      kind: "User Guide",
    },
    {
      title: "LiftMaster 84505R Product Guide",
      href: "/resources/manuals/openers/liftmaster-84505r-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-81600": [
    {
      title: "LiftMaster 81600 Owner's Manual",
      href: "/resources/manuals/openers/liftmaster-81600-owner-manual.pdf",
      kind: "Owner Manual",
    },
    {
      title: "LiftMaster 81600 Product Guide",
      href: "/resources/manuals/openers/liftmaster-81600-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
  "liftmaster-85870": [
    {
      title: "LiftMaster 85870 Owner's Manual",
      href: "/resources/manuals/openers/liftmaster-85870-owner-manual.pdf",
      kind: "Owner Manual",
    },
    {
      title: "LiftMaster 85870 Product Guide",
      href: "/resources/manuals/openers/liftmaster-85870-product-guide.pdf",
      kind: "Product Guide",
    },
  ],
};

export const openerProducts: OpenerProduct[] = [
  {
    slug: "liftmaster-98022",
    name: "LiftMaster 98022 Wall-Mount Garage Door Opener",
    shortName: "LiftMaster 98022",
    pairedName: "Raynor Prodigy III",
    category: "Wall-mount smart opener",
    raynorMatch: "Raynor Prodigy III wall-mount opener family",
    summary:
      "A premium wall-mount opener for South Florida homeowners who want a cleaner ceiling, quieter operation, battery backup, and smart control.",
    bestFor: [
      "Modern garages where overhead space matters",
      "Premium garage door installations",
      "Homes using storage racks, car lifts, or cleaner ceiling layouts",
      "Customers who want a side-mounted opener instead of a ceiling rail",
    ],
    highlights: [
      "Wall-mount design",
      "Battery backup",
      "myQ smart control",
      "Automatic deadbolt lock compatibility",
    ],
    details: [
      "We commonly recommend this style when a homeowner wants the garage to look cleaner after a premium door installation.",
      "A wall-mount opener is also useful when the ceiling layout makes a standard rail opener awkward or unattractive.",
      "Before installation, SecureLifts checks door balance, spring condition, shaft setup, clearance, and opener compatibility.",
    ],
    image: "/images/opener/models/liftmaster-98022.png",
    imageAlt: "LiftMaster 98022 wall mount garage door opener",
    liftMasterUrl:
      "https://www.liftmaster.com/elite-series-dc-battery-backup-wall-mount-wi-fi-garage-door-opener/p/98022MC",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: ["/liftmaster-98022-garage-door-opener"],
  },
  {
    slug: "liftmaster-6690l",
    name: "LiftMaster 6690L Premium Belt Drive Garage Door Opener",
    shortName: "LiftMaster 6690L",
    pairedName: "Raynor Sentinel 360 premium family",
    category: "Current premium belt drive",
    raynorMatch: "Raynor premium belt-drive opener family",
    currentStatus:
      "Current LiftMaster premium residential belt-drive model family. This is a better current-page match when customers want a premium belt opener with modern lighting, camera, smart control, and battery backup.",
    summary:
      "A current premium LiftMaster belt-drive opener for homeowners who want quiet performance, smart access, stronger lighting, battery backup, and a more refined garage experience.",
    bestFor: [
      "Premium attached garages",
      "Homes where quiet operation matters",
      "Customers who want camera and smart features",
      "New opener installs paired with higher-end garage doors",
    ],
    highlights: [
      "Premium belt-drive family",
      "Battery backup",
      "myQ smart control",
      "Camera and LED lighting family",
    ],
    details: [
      "This is one of the current model numbers homeowners may see when comparing newer LiftMaster opener options.",
      "SecureLifts uses this page for customers who want the newest premium opener direction instead of older model-number searches.",
      "We verify the door balance, spring condition, and customer feature needs before recommending this level of opener.",
    ],
    image: "/images/opener/models/liftmaster-6690l.png",
    imageAlt: "LiftMaster 6690L premium belt drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/for-homes/garage-door-openers",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [],
  },
  {
    slug: "liftmaster-6580l",
    name: "LiftMaster 6580L Quiet Belt Drive Garage Door Opener",
    shortName: "LiftMaster 6580L",
    pairedName: "Raynor Sentinel III BBU",
    category: "Current quiet belt drive",
    raynorMatch: "Raynor quiet belt-drive smart opener family",
    currentStatus:
      "Current LiftMaster belt-drive model family for customers who want quiet operation and modern smart features without necessarily choosing the very top premium unit.",
    summary:
      "A current quiet belt-drive opener option for attached garages, bedrooms above the garage, and homeowners who want smoother daily operation.",
    bestFor: [
      "Quiet opener upgrades",
      "Attached garages",
      "Bedrooms above or near the garage",
      "Smart-control replacement projects",
    ],
    highlights: [
      "Quiet belt-drive family",
      "Battery backup family",
      "myQ smart control",
      "Good attached-garage fit",
    ],
    details: [
      "This model family is easier for customers to understand when they simply want a quieter modern opener.",
      "It is a cleaner current recommendation than many old belt-drive model-number searches.",
      "SecureLifts checks the door system first so the quiet opener is not masking a balance or hardware problem.",
    ],
    image: "/images/opener/models/liftmaster-6580l.png",
    imageAlt: "LiftMaster 6580L quiet belt drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/for-homes/garage-door-openers",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [],
  },
  {
    slug: "liftmaster-2420l",
    name: "LiftMaster 2420L Smart Chain Drive Garage Door Opener",
    shortName: "LiftMaster 2420L",
    pairedName: "Raynor Trailblazer BBU",
    category: "Current smart chain drive",
    raynorMatch: "Raynor smart chain-drive opener family",
    currentStatus:
      "Current LiftMaster chain-drive model family for customers who want dependable operation and smart access at a practical price point.",
    summary:
      "A current smart chain-drive opener direction for homeowners who want reliable lifting strength, modern control, and a value-focused replacement.",
    bestFor: [
      "Value-focused smart opener replacement",
      "Detached garages",
      "Customers who prefer chain-drive strength",
      "Older chain-drive opener upgrades",
    ],
    highlights: [
      "Smart chain-drive family",
      "Value-focused upgrade",
      "Reliable daily operation",
      "Good replacement path for older units",
    ],
    details: [
      "This is a newer chain-drive model number to show customers alongside older chain-drive searches.",
      "It helps prevent the page from looking outdated when a current product is a better fit than an older discontinued unit.",
      "SecureLifts compares chain drive versus belt drive based on noise, budget, and the garage layout.",
    ],
    image: "/images/opener/types/chain-drive-openers.png",
    imageAlt: "LiftMaster 2420L smart chain drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/for-homes/garage-door-openers",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [],
  },
  {
    slug: "liftmaster-2220l",
    name: "LiftMaster 2220L Chain Drive Garage Door Opener",
    shortName: "LiftMaster 2220L",
    pairedName: "Raynor Trailblazer",
    category: "Current chain drive value option",
    raynorMatch: "Raynor value-focused chain-drive opener family",
    currentStatus:
      "Current LiftMaster chain-drive value model family. This is useful for customers comparing practical replacement options instead of older model numbers.",
    summary:
      "A current chain-drive value option for homeowners who want reliable operation and smart convenience without choosing a premium quiet belt-drive system.",
    bestFor: [
      "Budget-conscious opener replacement",
      "Standard residential garage doors",
      "Detached garages",
      "Older opener replacement conversations",
    ],
    highlights: [
      "Chain-drive value family",
      "Smart-control direction",
      "Reliable replacement option",
      "Good for standard doors",
    ],
    details: [
      "This current model family gives customers a clearer replacement path than many older chain-drive model pages.",
      "It is usually a practical option when noise is less important than budget and dependable operation.",
      "SecureLifts still checks springs, rollers, and balance before any opener replacement.",
    ],
    image: "/images/opener/models/liftmaster-2220l.png",
    imageAlt: "LiftMaster 2220L chain drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/for-homes/garage-door-openers",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [],
  },
  {
    slug: "liftmaster-87504-267",
    name: "LiftMaster 87504-267 Secure View Belt Drive Opener",
    shortName: "LiftMaster 87504-267",
    pairedName: "Raynor Sentinel 360 HD BBU",
    category: "Premium belt drive with camera",
    raynorMatch: "Raynor Sentinel 360 HD BBU opener family",
    currentStatus:
      "This model page is useful for customers searching the exact model number. For newer premium belt-drive comparisons, SecureLifts may also discuss the current 6690L model family.",
    summary:
      "A premium quiet belt-drive opener with smart access, camera visibility, battery backup, and strong lighting for attached garages.",
    bestFor: [
      "Attached garages where quiet operation matters",
      "Homeowners who want camera monitoring",
      "Premium opener replacements",
      "Families who want smart access and stronger lighting",
    ],
    highlights: [
      "Belt-drive operation",
      "Integrated camera family",
      "Battery backup",
      "myQ smart control",
    ],
    details: [
      "This is a strong fit when the homeowner wants more than a basic opener and values quiet operation, visibility, and convenience.",
      "SecureLifts verifies whether the door itself is balanced before recommending any smart opener upgrade.",
      "For older opener replacements, we also help set up remotes, keypad access, wall controls, and app connection after installation.",
    ],
    image: "/images/opener/types/belt-drive-openers.png",
    imageAlt: "Premium belt drive garage door opener",
    liftMasterUrl:
      "https://www.liftmaster.com/secure-view-ultra-quiet-belt-drive-smart-opener-with-camera-and-dual-led-lighting/p/87504-267MC",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [],
  },
  {
    slug: "liftmaster-84505r",
    name: "LiftMaster 84505R Secure View Belt Drive Opener",
    shortName: "LiftMaster 84505R",
    pairedName: "Raynor Sentinel 360 BBU",
    category: "Quiet belt drive with camera",
    raynorMatch: "Raynor Sentinel 360 BBU opener family",
    currentStatus:
      "This model remains a useful Secure View search page. When customers want current model-number comparisons, SecureLifts may also show the 6690L or 6580L family.",
    summary:
      "A quiet smart belt-drive opener option for homeowners who want camera visibility, LED lighting, and app-based control.",
    bestFor: [
      "Quiet opener replacement",
      "Bedrooms or living space near the garage",
      "Smart opener upgrades",
      "Camera and lighting convenience",
    ],
    highlights: [
      "Quiet belt-drive system",
      "Camera family",
      "LED lighting",
      "myQ smart control",
    ],
    details: [
      "This opener style is a practical upgrade when the existing opener is loud, unreliable, or missing modern smart features.",
      "It is especially attractive for attached garages because belt drive systems reduce vibration compared with many chain drive setups.",
      "SecureLifts inspects the door system first so the opener is not forced to compensate for bad springs, rollers, or balance problems.",
    ],
    image: "/images/opener/types/belt-drive-openers.png",
    imageAlt: "LiftMaster belt drive smart garage door opener",
    liftMasterUrl:
      "https://www.liftmaster.com/secure-view-ultra-quiet-belt-drive-smart-opener-with-camera-and-dual-led-lighting/p/84505RMC",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: ["/liftmaster-84505r-belt-drive-opener"],
  },
  {
    slug: "liftmaster-81600",
    name: "LiftMaster 81600 Chain Drive Wi-Fi Garage Door Opener",
    shortName: "LiftMaster 81600",
    pairedName: "Raynor Trailblazer",
    category: "Chain drive smart opener",
    raynorMatch: "Raynor Trailblazer opener family",
    currentStatus:
      "This older 8160W-style search now points customers toward the 81600 page. For newer current chain-drive comparisons, SecureLifts may also discuss 2420L or 2220L model families.",
    summary:
      "A dependable chain-drive opener option for homeowners who want reliable lifting power and smart access without paying for a premium quiet system.",
    bestFor: [
      "Value-focused opener replacement",
      "Detached garages",
      "Reliable daily operation",
      "Customers who want smart control at a lower price point",
    ],
    highlights: [
      "Chain-drive strength",
      "Wi-Fi smart access",
      "Dependable value option",
      "Good fit for many standard doors",
    ],
    details: [
      "Chain drive openers are usually not the quietest choice, but they remain a strong value for many standard homes.",
      "SecureLifts helps customers decide when the savings are worth it and when a quieter belt drive is the smarter move.",
      "We check the door balance and hardware first because no opener should be used to drag a heavy or poorly balanced door.",
    ],
    image: "/images/opener/types/chain-drive-openers.png",
    imageAlt: "Chain drive garage door opener",
    liftMasterUrl:
      "https://www.liftmaster.com/contractor-series-chain-drive-wi-fi-garage-door-opener/p/81600",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: ["/liftmaster-8160w-garage-door-opener"],
  },
  {
    slug: "liftmaster-85870",
    name: "LiftMaster 85870 AC Chain Drive Wi-Fi Garage Door Opener",
    shortName: "LiftMaster 85870",
    pairedName: "Raynor heavy-duty chain-drive family",
    category: "Heavy-duty chain drive",
    raynorMatch: "Raynor heavy-duty chain-drive opener family",
    currentStatus:
      "This is handled as an older model-number search page. If the exact unit is not the best current recommendation, SecureLifts will compare newer chain-drive options such as 2420L or 2220L.",
    summary:
      "A stronger chain-drive opener option for heavier use cases where lifting strength, smart access, and dependable operation are more important than ultra-quiet performance.",
    bestFor: [
      "Heavier garage doors",
      "Customers who prefer chain-drive strength",
      "Busy garages with frequent use",
      "Older opener replacement searches",
    ],
    highlights: [
      "AC chain-drive platform",
      "Wi-Fi smart access",
      "Strong lifting performance",
      "Good replacement conversation for older units",
    ],
    details: [
      "This page helps homeowners who search for a specific model understand whether repair, replacement, or a newer smart opener makes sense.",
      "For heavy doors, SecureLifts checks spring balance, cables, rollers, and door weight before final opener selection.",
      "If the exact legacy unit is no longer the best match, we recommend the closest current replacement path instead of forcing a poor fit.",
    ],
    image: "/images/opener/types/chain-drive-openers.png",
    imageAlt: "Heavy duty chain drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: [
      "/liftmaster-85870-ac-chain-drive-w-fi-garage-door-opener",
    ],
  },
  {
    slug: "liftmaster-8365-267",
    name: "LiftMaster 8365-267 Chain Drive Garage Door Opener",
    shortName: "LiftMaster 8365-267",
    pairedName: "Older Raynor chain-drive opener family",
    category: "Older chain-drive model support",
    raynorMatch: "Older Raynor/LiftMaster chain-drive service family",
    currentStatus:
      "This is an older model-number support page. It should capture legacy searches, then guide customers to repair, compatible parts, or a newer opener family when replacement is smarter.",
    summary:
      "Support for homeowners searching an older LiftMaster 8365-267 opener, including diagnosis, compatible repair when practical, or a modern replacement recommendation.",
    bestFor: [
      "Older opener repair searches",
      "Remote, sensor, keypad, and travel issues",
      "Customers deciding whether repair is still worth it",
      "Replacement planning for discontinued or aging openers",
    ],
    highlights: [
      "Older model diagnosis",
      "Repair-or-replace guidance",
      "Remote and sensor support",
      "Modern replacement options",
    ],
    details: [
      "Older model-number searches usually happen when something has already failed. SecureLifts starts by diagnosing the issue, not by guessing.",
      "If parts are available and the opener is still worth repairing, we explain that path. If reliability is poor, we recommend a modern replacement.",
      "This approach helps customers avoid spending money on an opener that is near the end of its useful life.",
    ],
    image: "/images/opener/types/chain-drive-openers.png",
    imageAlt: "Older LiftMaster chain drive garage door opener",
    liftMasterUrl: "https://www.liftmaster.com/",
    manualUrl:
      "https://support.chamberlaingroup.com/s/liftmaster-garage-door-opener-manuals",
    raynorUrl: "https://raynor.com/residential/openers/",
    legacyPaths: ["/liftmaster-8365-267-garage-door-opener"],
  },
];

export function getOpenerProduct(slug: string) {
  return openerProducts.find((product) => product.slug === slug);
}

export function getOpenerProductSlugs() {
  return openerProducts.map((product) => product.slug);
}
