export type StormCityServiceKey = "hurricane" | "impact" | "miamiDade";

type LinkItem = {
  label: string;
  href: string;
};

type InternalLinkItem = {
  title: string;
  text: string;
  href: string;
  icon: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type BenefitItem = {
  title: string;
  text: string;
};

type StormCityConfig = {
  categoryName: string;
  basePath: string;
  heroImage: string;
  eyebrow: string;

  heroTitle: (city: string) => string;
  heroDescription: (city: string) => string;
  metaDescription: (city: string) => string;

  introEyebrow: string;
  introTitle: (city: string) => string;
  introParagraphs: (city: string, nearbyText: string) => string[];
  localIntentParagraph: (city: string) => string;

  sideCardEyebrow: string;
  sideCardTitle: string;
  sideLinks: LinkItem[];

  benefitsEyebrow: string;
  benefitsTitle: (city: string) => string;
  benefitsIntro: (city: string) => string;
  benefits: (city: string) => BenefitItem[];

  internalLinksHeading: (city: string) => string;
  internalLinksIntro: (city: string) => string;
  internalLinks: InternalLinkItem[];

  faqTitle: (city: string) => string;
  faqs: (city: string, nearbyText: string) => FaqItem[];

  finalCtaTitle: (city: string) => string;
  finalCtaText: (city: string) => string;
};

export const stormCityConfigs: Record<StormCityServiceKey, StormCityConfig> = {
  hurricane: {
    categoryName: "Hurricane Garage Doors",
    basePath: "/hurricane-garage-doors",
    heroImage: "/hurricane-garage-doors-hero.png",
    eyebrow: "SecureLifts Storm-Ready Doors",

    heroTitle: (city: string) => `Hurricane Garage Doors in ${city}`,
    heroDescription: (city: string) =>
      `SecureLifts installs hurricane garage doors in ${city} for homeowners who want stronger storm protection, better curb appeal, and a system built for South Florida conditions.`,
    metaDescription: (city: string) =>
      `SecureLifts provides professional hurricane garage door service in ${city}, including stronger storm-rated options, expert installation, and fast local response across South Florida. Call (866) 828-1818.`,

    introEyebrow: "Local Hurricane Door Installation",
    introTitle: (city: string) =>
      `Hurricane Garage Door Options for Homes in ${city}`,
    introParagraphs: (city: string, nearbyText: string) => [
      `Homeowners in ${city} dealing with storm season need garage doors built for real South Florida conditions.`,
      `SecureLifts provides hurricane garage door installation in ${city}, including surrounding areas like ${nearbyText}.`,
      `We help homeowners choose stronger systems with cleaner installation, better guidance, and long-term reliability.`,
    ],
    localIntentParagraph: (city: string) =>
      `Homeowners in ${city} often look for hurricane garage doors when they want stronger storm protection without sacrificing the overall look of the home.`,

    sideCardEyebrow: "Explore Styles",
    sideCardTitle: "Compare Hurricane Door Styles",
    sideLinks: [
      {
        label: "Traditional Hurricane Doors",
        href: "/hurricane-garage-doors/traditional",
      },
      {
        label: "Modern Hurricane Doors",
        href: "/hurricane-garage-doors/modern",
      },
      {
        label: "Carriage House Hurricane Doors",
        href: "/hurricane-garage-doors/carriage-house",
      },
      {
        label: "Custom Hurricane Doors",
        href: "/hurricane-garage-doors/custom",
      },
    ],

    benefitsEyebrow: "Why Homeowners Upgrade",
    benefitsTitle: (city: string) =>
      `Why Hurricane Garage Doors Matter in ${city}`,
    benefitsIntro: () =>
      "Hurricane garage doors are chosen by homeowners who understand that a standard garage door can become a major weak point during severe weather.",
    benefits: (city: string) => [
      {
        title: `Storm-ready protection in ${city}`,
        text: `Hurricane garage doors in ${city} help protect your home with stronger construction built for South Florida weather.`,
      },
      {
        title: "Better curb appeal",
        text: "Today’s hurricane garage doors come in traditional, modern, carriage-house, and custom styles.",
      },
      {
        title: "Built for daily reliability",
        text: "You are not only upgrading for storms. You are also improving long-term performance and security.",
      },
      {
        title: "Professional installation matters",
        text: "The right product still needs the right fit, hardware, and installation to perform properly.",
      },
    ],

    internalLinksHeading: (city: string) =>
      `Compare Storm-Rated Garage Door Options in ${city}`,
    internalLinksIntro: (city: string) =>
      `Homeowners in ${city} often compare hurricane garage doors with other storm-rated garage door categories before making the final decision.`,
    internalLinks: [
      {
        title: "Impact-Rated Garage Doors",
        text: "Built for stronger debris and impact resistance.",
        href: "/impact-rated-garage-doors",
        icon: "🛡️",
      },
      {
        title: "Wind-Rated Garage Doors",
        text: "Focused on pressure resistance during severe weather.",
        href: "/wind-rated-garage-doors",
        icon: "💨",
      },
      {
        title: "Miami-Dade Rated Doors",
        text: "A strong recognized storm-performance option for South Florida homes.",
        href: "/miami-dade-rated-garage-doors",
        icon: "🏝️",
      },
      {
        title: "Book Service",
        text: "Get direct help choosing the right option for your home.",
        href: "/book-service",
        icon: "📞",
      },
    ],

    faqTitle: (city: string) => `Hurricane Garage Door FAQs in ${city}`,
    faqs: (city: string, nearbyText: string) => [
      {
        question: `Do you install hurricane garage doors in ${city}?`,
        answer: `Yes. SecureLifts installs hurricane garage doors in ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Do you offer same-day service in ${city}?`,
        answer: `Yes. SecureLifts offers fast scheduling and same-day service in ${city} whenever availability allows.`,
      },
      {
        question: `What styles of hurricane garage doors are available in ${city}?`,
        answer:
          "We offer traditional, modern, carriage-house, and custom hurricane garage doors depending on the home and design goals.",
      },
      {
        question: `Are hurricane garage doors worth it in ${city}?`,
        answer:
          "Yes. For South Florida homeowners, hurricane garage doors can improve storm protection, reliability, and curb appeal all at the same time.",
      },
      {
        question: `Do you serve neighborhoods near ${city}?`,
        answer: `Yes. We serve ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Can SecureLifts help me choose the right hurricane garage door for my home in ${city}?`,
        answer:
          "Yes. We help homeowners in the area compare style, protection level, and long-term value so the final choice fits the property correctly.",
      },
    ],

    finalCtaTitle: (city: string) =>
      `Need Hurricane Garage Doors in ${city}?`,
    finalCtaText: (city: string) =>
      `Call SecureLifts today for expert help, fast scheduling, and professional garage door service in ${city}.`,
  },

  impact: {
    categoryName: "Impact-Rated Garage Doors",
    basePath: "/impact-rated-garage-doors",
    heroImage: "/impact-rated-garage-doors-hero.png",
    eyebrow: "SecureLifts Impact-Rated Protection",

    heroTitle: (city: string) => `Impact-Rated Garage Doors in ${city}`,
    heroDescription: (city: string) =>
      `SecureLifts installs impact-rated garage doors in ${city} for homeowners who want stronger debris resistance, premium curb appeal, and a storm-ready system built for South Florida conditions.`,
    metaDescription: (city: string) =>
      `SecureLifts provides professional impact-rated garage door service in ${city}, including stronger storm-rated options, expert installation, and fast local response across South Florida. Call (866) 828-1818.`,

    introEyebrow: "Local Impact-Rated Door Installation",
    introTitle: (city: string) =>
      `Impact-Rated Garage Door Options for Homes in ${city}`,
    introParagraphs: (city: string, nearbyText: string) => [
      `Homes in ${city} need more than a basic garage door when severe weather becomes a concern.`,
      `SecureLifts provides impact-rated garage door installation in ${city}, including surrounding areas like ${nearbyText}.`,
      `We help homeowners choose systems that balance style, protection, and long-term reliability.`,
    ],
    localIntentParagraph: (city: string) =>
      `Homeowners in ${city} often choose impact-rated garage doors when debris resistance and stronger storm protection are higher priorities.`,

    sideCardEyebrow: "Compare Storm Categories",
    sideCardTitle: "Explore Related Garage Door Options",
    sideLinks: [
      {
        label: "Hurricane Garage Doors",
        href: "/hurricane-garage-doors",
      },
      {
        label: "Wind-Rated Garage Doors",
        href: "/wind-rated-garage-doors",
      },
      {
        label: "Miami-Dade Rated Garage Doors",
        href: "/miami-dade-rated-garage-doors",
      },
    ],

    benefitsEyebrow: "Stronger by Design",
    benefitsTitle: (city: string) =>
      `Why Homeowners Choose Impact-Rated Garage Doors in ${city}`,
    benefitsIntro: () =>
      "Impact-rated garage doors are selected by homeowners who understand that storm protection means more than just wind pressure resistance.",
    benefits: (city: string) => [
      {
        title: `Impact-rated protection in ${city}`,
        text: `Impact-rated garage doors in ${city} are built for homeowners who want stronger protection against storm-driven debris and flying objects.`,
      },
      {
        title: "Debris resistance that matters",
        text: "Impact-rated systems are designed for more than wind pressure alone. They focus on resisting strikes from objects during severe weather.",
      },
      {
        title: "Premium style options",
        text: "Impact-rated garage doors are available in multiple residential styles, so homeowners can protect the home without settling for a plain look.",
      },
      {
        title: "Stronger overall upgrade",
        text: "These systems can improve storm readiness, long-term reliability, and overall homeowner confidence at the same time.",
      },
    ],

    internalLinksHeading: (city: string) =>
      `Compare Storm-Rated Garage Door Options in ${city}`,
    internalLinksIntro: (city: string) =>
      `Homeowners in ${city} often compare impact-rated garage doors with other storm-rated garage door categories before making the final decision.`,
    internalLinks: [
      {
        title: "Hurricane Garage Doors",
        text: "See the full hurricane garage door category and compare available styles.",
        href: "/hurricane-garage-doors",
        icon: "🌀",
      },
      {
        title: "Wind-Rated Garage Doors",
        text: "Focused on pressure resistance during severe weather.",
        href: "/wind-rated-garage-doors",
        icon: "💨",
      },
      {
        title: "Miami-Dade Rated Doors",
        text: "A strong recognized storm-performance option for South Florida homes.",
        href: "/miami-dade-rated-garage-doors",
        icon: "🏝️",
      },
      {
        title: "Book Service",
        text: "Get direct help choosing the right option for your home.",
        href: "/book-service",
        icon: "📞",
      },
    ],

    faqTitle: (city: string) => `Impact-Rated Garage Door FAQs in ${city}`,
    faqs: (city: string, nearbyText: string) => [
      {
        question: `Do you install impact-rated garage doors in ${city}?`,
        answer: `Yes. SecureLifts installs impact-rated garage doors in ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Do you offer same-day service in ${city}?`,
        answer: `Yes. SecureLifts offers fast scheduling and same-day service in ${city} whenever availability allows.`,
      },
      {
        question: "What is an impact-rated garage door?",
        answer:
          "An impact-rated garage door is designed to resist damage from flying debris and storm-driven objects during severe weather conditions.",
      },
      {
        question: `Are impact-rated garage doors worth it in ${city}?`,
        answer:
          "Yes. For many South Florida homeowners, impact-rated garage doors are a smart upgrade for added debris resistance, storm protection, and long-term value.",
      },
      {
        question: `Do you serve neighborhoods near ${city}?`,
        answer: `Yes. We serve ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Can SecureLifts help me choose the right impact-rated garage door for my home in ${city}?`,
        answer:
          "Yes. We help homeowners in the area compare style, protection level, budget, and overall fit so the final door matches the home correctly.",
      },
    ],

    finalCtaTitle: (city: string) =>
      `Need Impact-Rated Garage Doors in ${city}?`,
    finalCtaText: (city: string) =>
      `Call SecureLifts today for expert help, fast scheduling, and professional garage door service in ${city}.`,
  },

  miamiDade: {
    categoryName: "Miami-Dade Rated Garage Doors",
    basePath: "/miami-dade-rated-garage-doors",
    heroImage: "/miami-dade-rated-garage-doors-hero.png",
    eyebrow: "SecureLifts Miami-Dade Rated Protection",

    heroTitle: (city: string) => `Miami-Dade Rated Garage Doors in ${city}`,
    heroDescription: (city: string) =>
      `SecureLifts installs Miami-Dade rated garage doors in ${city} for homeowners who want stronger storm-focused protection, premium curb appeal, and a system built for serious South Florida conditions.`,
    metaDescription: (city: string) =>
      `SecureLifts provides professional Miami-Dade rated garage door service in ${city}, including stronger storm-rated options, expert installation, and fast local response across South Florida. Call (866) 828-1818.`,

    introEyebrow: "Local Miami-Dade Rated Door Installation",
    introTitle: (city: string) =>
      `Miami-Dade Rated Garage Door Options for Homes in ${city}`,
    introParagraphs: (city: string, nearbyText: string) => [
      `Homes in ${city} need more than a basic garage door when severe weather becomes a real concern.`,
      `SecureLifts provides Miami-Dade rated garage door installation in ${city}, including surrounding areas like ${nearbyText}.`,
      `We help homeowners choose systems that balance stronger protection, design, and long-term reliability.`,
    ],
    localIntentParagraph: (city: string) =>
      `Homeowners in ${city} often compare Miami-Dade rated garage doors when they want one of the strongest recognized storm-performance categories available in South Florida.`,

    sideCardEyebrow: "Compare Storm Categories",
    sideCardTitle: "Explore Related Garage Door Options",
    sideLinks: [
      {
        label: "Hurricane Garage Doors",
        href: "/hurricane-garage-doors",
      },
      {
        label: "Wind-Rated Garage Doors",
        href: "/wind-rated-garage-doors",
      },
      {
        label: "Impact-Rated Garage Doors",
        href: "/impact-rated-garage-doors",
      },
    ],

    benefitsEyebrow: "Stronger by Design",
    benefitsTitle: (city: string) =>
      `Why Homeowners Choose Miami-Dade Rated Garage Doors in ${city}`,
    benefitsIntro: () =>
      "Homeowners looking for serious storm protection usually want more than standard reinforcement.",
    benefits: (city: string) => [
      {
        title: `Stronger protection in ${city}`,
        text: `Miami-Dade rated garage doors in ${city} are chosen by homeowners who want one of the strongest recognized storm-focused residential door categories available in South Florida.`,
      },
      {
        title: "Built for serious storm concerns",
        text: "These systems are selected by homeowners who do not want to gamble with a weak garage door when major weather hits.",
      },
      {
        title: "Better design without sacrificing strength",
        text: "You can still choose a garage door that looks premium on the home while upgrading to a stronger storm-ready system.",
      },
      {
        title: "A stronger long-term upgrade",
        text: "Miami-Dade rated systems can improve protection, reliability, and overall confidence in one of the largest openings on the house.",
      },
    ],

    internalLinksHeading: (city: string) =>
      `Compare Storm-Rated Garage Door Options in ${city}`,
    internalLinksIntro: (city: string) =>
      `Homeowners in ${city} often compare Miami-Dade rated garage doors with other storm-rated garage door categories before making the final decision.`,
    internalLinks: [
      {
        title: "Hurricane Garage Doors",
        text: "See the full hurricane garage door category and compare available styles.",
        href: "/hurricane-garage-doors",
        icon: "🌀",
      },
      {
        title: "Wind-Rated Garage Doors",
        text: "Focused on pressure resistance during severe weather.",
        href: "/wind-rated-garage-doors",
        icon: "💨",
      },
      {
        title: "Impact-Rated Garage Doors",
        text: "Built for stronger debris and impact resistance.",
        href: "/impact-rated-garage-doors",
        icon: "🛡️",
      },
      {
        title: "Book Service",
        text: "Get direct help choosing the right option for your home.",
        href: "/book-service",
        icon: "📞",
      },
    ],

    faqTitle: (city: string) =>
      `Miami-Dade Rated Garage Door FAQs in ${city}`,
    faqs: (city: string, nearbyText: string) => [
      {
        question: `Do you install Miami-Dade rated garage doors in ${city}?`,
        answer: `Yes. SecureLifts installs Miami-Dade rated garage doors in ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Do you offer same-day service in ${city}?`,
        answer: `Yes. SecureLifts offers fast scheduling and same-day service in ${city} whenever availability allows.`,
      },
      {
        question: "What does Miami-Dade rated mean for a garage door?",
        answer:
          "It refers to a garage door system built to meet one of the strongest recognized levels of storm-performance expectations commonly associated with demanding South Florida conditions.",
      },
      {
        question: `Are Miami-Dade rated garage doors worth it in ${city}?`,
        answer:
          "Yes. For many South Florida homeowners, Miami-Dade rated garage doors are one of the smartest categories to consider for stronger storm-focused protection, reliability, and long-term value.",
      },
      {
        question: `Do you serve neighborhoods near ${city}?`,
        answer: `Yes. We serve ${city} and nearby areas including ${nearbyText}.`,
      },
      {
        question: `Can SecureLifts help me choose the right Miami-Dade rated garage door for my home in ${city}?`,
        answer:
          "Yes. We help homeowners in the area compare design, protection level, budget, and overall fit so the final system matches the home correctly.",
      },
    ],

    finalCtaTitle: (city: string) =>
      `Need Miami-Dade Rated Garage Doors in ${city}?`,
    finalCtaText: (city: string) =>
      `Call SecureLifts today for expert help, fast scheduling, and professional garage door service in ${city}.`,
  },
};