import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceSchema from "../../components/ServiceSchema";
import FAQSchema from "../../components/FAQSchema";
import InternalLinkCards from "../../components/InternalLinkCards";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ReviewTrustSection from "../../components/ReviewTrustSection";

export const metadata: Metadata = {
  title: "Carriage House Hurricane Garage Doors in South Florida | SecureLifts",
  description:
    "SecureLifts installs carriage house hurricane garage doors in South Florida with decorative wood-style design, storm-ready strength, and premium curb appeal. Call (866) 828-1818.",
  openGraph: {
    title: "Carriage House Hurricane Garage Doors in South Florida | SecureLifts",
    description:
      "Carriage house hurricane garage doors in South Florida with decorative wood-style design and storm-ready strength installed by SecureLifts.",
    images: [
      {
        url: "/hurricane-carriage-house-hero-clean.png",
        width: 1536,
        height: 1024,
        alt: "Carriage house hurricane garage door installed on a luxury South Florida home with decorative wood-style panels and storm-ready construction",
      },
    ],
  },
};

export default function CarriageHouseHurricaneGarageDoorsPage() {
  const coachmanOverview = {
    title: "Coachman Carriage Collection",
    text: "A decorative overlay carriage-house direction with panel designs, window choices, and color combinations that help create a warmer curb appeal look.",
    image: "/showroom/coachman/coachman-3layers.webp",
  };

  const louverOverview = {
    title: "Louver-Style Carriage Panels",
    text: "A specialty carriage-style design built on insulated garage door construction. This is a design look, not a ventilation feature.",
    image: "/showroom/canyon-ridge/orlandotnahlouvershowcase.webp",
  };
  const louverDesigns = [
    { title: "Design 41", image: "/showroom/canyon-ridge/louver/crlv-design41-slate-mh (1).webp" },
    { title: "Design 42", image: "/showroom/canyon-ridge/louver/crlv-design42-slate-mh.webp" },
    { title: "Design 43", image: "/showroom/canyon-ridge/louver/crlv-design43-slate-mh.webp" },
    { title: "Design 44", image: "/showroom/canyon-ridge/louver/crlv-design44-slate-mh.webp" },
    { title: "Design 45", image: "/showroom/canyon-ridge/louver/crlv-design45-slate-mh.webp" },
    { title: "Design 46", image: "/showroom/canyon-ridge/louver/crlv-design46-slate-mh.webp" },
    { title: "Design 47", image: "/showroom/canyon-ridge/louver/crlv-design47-slate-mh.webp" },
    { title: "Design 51", image: "/showroom/canyon-ridge/louver/crlv-design51-slate-mh.webp" },
    { title: "Design 52", image: "/showroom/canyon-ridge/louver/crlv-design52-slate-mh.webp" },
    { title: "Design 53", image: "/showroom/canyon-ridge/louver/crlv-design53-slate-mh.webp" },
    { title: "Design 54", image: "/showroom/canyon-ridge/louver/crlv-design54-slate-mh.webp" },
    { title: "Design 55", image: "/showroom/canyon-ridge/louver/crlv-design55-slate-mh.webp" },
  ];

  const louverTopSections = [
    { title: "Rectangle 11", image: "/showroom/canyon-ridge/louver/louver-rec-11.webp" },
    { title: "Rectangle 13", image: "/showroom/canyon-ridge/louver/louver-rec13-slate.webp" },
    { title: "Rectangle 14", image: "/showroom/canyon-ridge/louver/louver-rec14-slate.webp" },
    { title: "Square 23", image: "/showroom/canyon-ridge/louver/louver-sq23-slate.webp" },
    { title: "Square 24", image: "/showroom/canyon-ridge/louver/louver-sq24-slate.webp" },
  ];

  const louverFinishes = [
    { title: "Clear Cypress Black", image: "/showroom/canyon-ridge/louver/cr-clear-cypress-black-texture363f7396202f433eb84354bed8fba63c.webp" },
    { title: "Clear Cypress Primed", image: "/showroom/canyon-ridge/louver/cr-clear-cypress-primed-texture.webp" },
    { title: "Mahogany Bronze", image: "/showroom/canyon-ridge/louver/cr-mahogany-bronze-texture.webp" },
    { title: "Mahogany Charcoal", image: "/showroom/canyon-ridge/louver/cr-mahogany-charcoal-texture.webp" },
    { title: "Mahogany White", image: "/showroom/canyon-ridge/louver/cr-mahogany-white-texture00cfbb9c5fe34cabaa3bc144047fd85f.webp" },
    { title: "Mahogany Dark", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-dark-finish.webp" },
    { title: "Mahogany Espresso", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-espresso-finish.webp" },
    { title: "Mahogany Medium", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-medium-finish.webp" },
    { title: "Mahogany Natural", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-natural-finish.webp" },
    { title: "Mahogany Slate", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-slate-finish.webp" },
    { title: "Mahogany Walnut", image: "/showroom/canyon-ridge/louver/louver-closeup-mahogany-walnut-finish.webp" },
  ];
  const benefits = [
    {
      icon: "🏡",
      title: "More Character From the Street",
      text: "Carriage house hurricane garage doors add warmth, detail, and curb appeal while still supporting storm-ready performance.",
    },
    {
      icon: "🛡️",
      title: "Storm-Ready Construction",
      text: "These doors are built for South Florida weather with stronger materials, better reinforcement, and real hurricane-focused performance.",
    },
    {
      icon: "✨",
      title: "Decorative Without Feeling Overdone",
      text: "The right carriage style should feel intentional, balanced, and matched to the home’s architecture.",
    },
    {
      icon: "🔧",
      title: "Built for Daily Use Too",
      text: "A new carriage house door can improve the look of the home while providing a stronger garage door system for everyday use.",
    },
  ];

  const designOptions = [
    {
      title: "Crossbuck Carriage Styles",
      text: "Classic X-pattern carriage designs for homeowners who want a timeless, estate-style appearance.",
    },
    {
      title: "Wood-Look Carriage Doors",
      text: "Add the warmth of a wood-style appearance without choosing a plain, flat garage door design.",
    },
    {
      title: "Decorative Hardware Packages",
      text: "Handles, hinges, straps, and accents can help the door feel more complete and better matched to the home.",
    },
    {
      title: "Window Layout Options",
      text: "Choose top-row windows and panel layouts that improve curb appeal while matching the house correctly.",
    },
  ];

  const coachmanDesigns = [
    {
      title: "Design 11",
      image: "/showroom/coachman/coachman-design11.webp",
    },
    {
      title: "Design 12",
      image: "/showroom/coachman/coachman-design12.webp",
    },
    {
      title: "Design 13",
      image: "/showroom/coachman/coachman-design13.webp",
    },
    {
      title: "Design 21",
      image: "/showroom/coachman/coachman-design21.webp",
    },
    {
      title: "Design 22",
      image: "/showroom/coachman/coachman-design22.webp",
    },
    {
      title: "Design 23",
      image: "/showroom/coachman/coachman-design23.webp",
    },
    {
      title: "Design 31",
      image: "/showroom/coachman/coachman-design31.webp",
    },
    {
      title: "Design 32",
      image: "/showroom/coachman/coachman-design32.webp",
    },
    {
      title: "Design 33",
      image: "/showroom/coachman/coachman-design33.webp",
    },
    {
      title: "Design 34",
      image: "/showroom/coachman/coachman-design34.webp",
    },
    {
      title: "Design 35",
      image: "/showroom/coachman/coachman-design35.webp",
    },
    {
      title: "Design 36",
      image: "/showroom/coachman/coachman-design36.webp",
    },
  ];

  const coachmanWindowOptions = [
    {
      title: "Top 11",
      image: "/showroom/coachman/coachman-top11.webp",
    },
    {
      title: "Top 12",
      image: "/showroom/coachman/coachman-top12.webp",
    },
    {
      title: "Top 13",
      image: "/showroom/coachman/coachman-top13.webp",
    },
    {
      title: "Rectangle 11",
      image: "/showroom/coachman/coachman-rec11.webp",
    },
    {
      title: "Rectangle 13",
      image: "/showroom/coachman/coachman-rec13.webp",
    },
    {
      title: "Rectangle 14",
      image: "/showroom/coachman/coachman-rec14.webp",
    },
    {
      title: "Arch 3",
      image: "/showroom/coachman/coachman-arch3.webp",
    },
    {
      title: "Arch 4",
      image: "/showroom/coachman/coachman-arch4.webp",
    },
    {
      title: "Arch 13",
      image: "/showroom/coachman/coachman-arch13.webp",
    },
    {
      title: "Arch 14",
      image: "/showroom/coachman/coachman-arch14.webp",
    },
  ];

  const coachmanColorCombinations = [
    {
      title: "White with White Overlay",
      image: "/showroom/coachman/coachmanwhiteolwhite.webp",
    },
    {
      title: "White with Almond Overlay",
      image: "/showroom/coachman/coachmanwhiteolalmond.webp",
    },
    {
      title: "White with Sandtone Overlay",
      image: "/showroom/coachman/coachmanwhiteolsandtoneb.webp",
    },
    {
      title: "White with Desert Tan Overlay",
      image: "/showroom/coachman/coachmanwhiteoldeserttanb.webp",
    },
    {
      title: "Almond with White Overlay",
      image: "/showroom/coachman/coachmanalmondolwhiteb.webp",
    },
    {
      title: "Almond with Almond Overlay",
      image: "/showroom/coachman/coachmanalmondolalmondb.webp",
    },
    {
      title: "Almond with Sandtone Overlay",
      image: "/showroom/coachman/coachmanalmondolsandtoneb.webp",
    },
    {
      title: "Almond with Desert Tan Overlay",
      image: "/showroom/coachman/coachmanalmondoldeserttanb.webp",
    },
    {
      title: "Sandtone with White Overlay",
      image: "/showroom/coachman/coachmansantoneolwhiteb.webp",
    },
    {
      title: "Sandtone with Almond Overlay",
      image: "/showroom/coachman/coachmansantoneolalmondb.webp",
    },
    {
      title: "Sandtone with Sandtone Overlay",
      image: "/showroom/coachman/coachmansandtoneolsandtoneb.webp",
    },
    {
      title: "Sandtone with Desert Tan Overlay",
      image: "/showroom/coachman/coachmansandtoneoldeserttanb.webp",
    },
    {
      title: "Desert Tan with White Overlay",
      image: "/showroom/coachman/coachmandeserttanolwhiteb.webp",
    },
    {
      title: "Desert Tan with Almond Overlay",
      image: "/showroom/coachman/coachmandeserttanolalmondb.webp",
    },
    {
      title: "Desert Tan with Sandtone Overlay",
      image: "/showroom/coachman/coachmandeserttanolsandtoneb.webp",
    },
  ];

  const canyonRidgeOptions = [
    {
      title: "Canyon Ridge Carriage House 5-Layer",
      text: "A premium carriage-house direction for a richer faux-wood look, heavier construction, and a more upgraded finish.",
      image: "/showroom/canyon-ridge/canyonridge5l-garage-door.webp",
      href: "/hurricane-garage-doors/carriage-house/canyon-ridge-5-layer",
    },
    {
      title: "Canyon Ridge Carriage House 4-Layer",
      text: "A premium carriage look with more budget control while still giving the home a strong wood-style appearance.",
      image: "/showroom/canyon-ridge/canyon-ridge-4layers.webp",
      href: "/hurricane-garage-doors/carriage-house/canyon-ridge-4-layer",
    },
    {
      title: "Canyon Ridge Modern",
      text: "A cleaner premium direction for homes that need wood-look character with more modern lines and less traditional detail.",
      image: "/showroom/canyon-ridge/conyon-ridge-modern.webp",
      href: "/hurricane-garage-doors/carriage-house/canyon-ridge-modern",
    },
    {
      title: "Canyon Ridge Elements",
      text: "A unique premium design path for more texture, depth, and custom-style curb appeal.",
      image: "/showroom/canyon-ridge/canyon-ridge-elements.webp",
      href: "/hurricane-garage-doors/carriage-house/canyon-ridge-elements",
    },
  ];

  const canyonRidge5LayerDesigns = [
    { title: "Design 11", image: "/showroom/canyon-ridge/canyon-5layers/design-11-dark.webp" },
    { title: "Design 12", image: "/showroom/canyon-ridge/canyon-5layers/design-12-dark.webp" },
    { title: "Design 13", image: "/showroom/canyon-ridge/canyon-5layers/design-13-dark.webp" },
    { title: "Design 21", image: "/showroom/canyon-ridge/canyon-5layers/design-21-dark.webp" },
    { title: "Design 22", image: "/showroom/canyon-ridge/canyon-5layers/design-22-dark.webp" },
    { title: "Design 23", image: "/showroom/canyon-ridge/canyon-5layers/design-23-dark.webp" },
    { title: "Design 31", image: "/showroom/canyon-ridge/canyon-5layers/design-31-dark.webp" },
    { title: "Design 32", image: "/showroom/canyon-ridge/canyon-5layers/design-32-dark.webp" },
    { title: "Design 33", image: "/showroom/canyon-ridge/canyon-5layers/design-33-dark.webp" },
    { title: "Design 34", image: "/showroom/canyon-ridge/canyon-5layers/design-34-dark.webp" },
    { title: "Design 35", image: "/showroom/canyon-ridge/canyon-5layers/design-35-dark.webp" },
    { title: "Design 36", image: "/showroom/canyon-ridge/canyon-5layers/design-36-dark.webp" },
    { title: "Design 37", image: "/showroom/canyon-ridge/canyon-5layers/design-37-dark.webp" },
    { title: "Design 38", image: "/showroom/canyon-ridge/canyon-5layers/design-38-dark.webp" },
  ];

  const canyonRidge5LayerTopSections = [
    { title: "Top 12", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-top12-dark.webp" },
    { title: "Top 13", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-top13-dark.webp" },
    { title: "Rectangle 11", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-rec11-dark.webp" },
    { title: "Rectangle 13", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-rec13-dark.webp" },
    { title: "Rectangle 14", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-rec14-dark.webp" },
    { title: "Square 23", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-sq23-dark.webp" },
    { title: "Square 24", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-sq24-dark.webp" },
    { title: "Arch 1 Solid", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch1solid-dark.webp" },
    { title: "Arch 1 Window", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch1window-dark.webp" },
    { title: "Arch 3", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch3-dark.webp" },
    { title: "Arch 4", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch4-dark.webp" },
    { title: "Arch 13", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch13-dark.webp" },
    { title: "Arch 14", image: "/showroom/canyon-ridge/canyon-5layers/cr5l-arch14-dark.webp" },
  ];

  const canyonRidge5LayerFinishes = [
    { title: "Clear Cypress Black", image: "/showroom/canyon-ridge/canyon-5layers/cr-clear-cypress-black-texture.webp" },
    { title: "Clear Cypress Primed", image: "/showroom/canyon-ridge/canyon-5layers/cr-clear-cypress-primed-texture.webp" },
    { title: "Mahogany Bronze", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-bronze-texture.webp" },
    { title: "Mahogany Charcoal", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-charcoal-texture.webp" },
    { title: "Mahogany Dark", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-dark-texture.webp" },
    { title: "Mahogany Espresso", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-espresso-texture.webp" },
    { title: "Mahogany Medium", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-medium-texture.webp" },
    { title: "Mahogany Natural", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-natural-texture.webp" },
    { title: "Mahogany Slate", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-slate-texture.webp" },
    { title: "Mahogany Walnut", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-walnut-texture.webp" },
    { title: "Mahogany White", image: "/showroom/canyon-ridge/canyon-5layers/cr-mahogany-white-texture.webp" },
  ];

  const canyonRidge4LayerDesigns = [
    { title: "Design 11", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design11-medium.webp" },
    { title: "Design 12", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design12-medium.webp" },
    { title: "Design 13", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design13-medium.webp" },
    { title: "Design 21", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design21-medium.webp" },
    { title: "Design 22", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design22-medium.webp" },
    { title: "Design 23", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design23-medium.webp" },
    { title: "Design 31", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design31-medium.webp" },
    { title: "Design 32", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design32-medium.webp" },
    { title: "Design 33", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design33-medium.webp" },
    { title: "Design 34", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design34-medium.webp" },
    { title: "Design 35", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design35-medium.webp" },
    { title: "Design 36", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design36-medium.webp" },
    { title: "Design 37", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design37-medium.webp" },
    { title: "Design 38", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-design38-medium.webp" },
  ];

  const canyonRidge4LayerTopSections = [
    { title: "Top 11", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-top-11-medium_cc.webp" },
    { title: "Top 12", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-top-12-medium_cc.webp" },
    { title: "Top 13", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-top-13-medium_cc.webp" },
    { title: "Rectangle 11", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-rec11-medium.webp" },
    { title: "Rectangle 13", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-rec13-medium.webp" },
    { title: "Rectangle 14", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-rec14-medium.webp" },
    { title: "Square 23", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-sq23-medium.webp" },
    { title: "Square 24", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-sq24-medium.webp" },
    { title: "Arch 1 Solid", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch1-solid.webp" },
    { title: "Arch 1 Window", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch1window-medium.webp" },
    { title: "Arch 3", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch3-medium.webp" },
    { title: "Arch 4", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch4-medium.webp" },
    { title: "Arch 13", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch13-medium.webp" },
    { title: "Arch 14", image: "/showroom/canyon-ridge/canyon-4layers/cr4l-arch14-medium.webp" },
  ];

  const canyonRidge4LayerFinishes = [
    { title: "Clear Cypress Black", image: "/showroom/canyon-ridge/canyon-4layers/cr-clear-cypress-black-texture.webp" },
    { title: "Clear Cypress Primed", image: "/showroom/canyon-ridge/canyon-4layers/cr-clear-cypress-primed-texture.webp" },
    { title: "Mahogany Bronze", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-bronze-texture.webp" },
    { title: "Mahogany Charcoal", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-charcoal-texture.webp" },
    { title: "Mahogany Dark", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-dark-texture.webp" },
    { title: "Mahogany Espresso", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-espresso-texture.webp" },
    { title: "Mahogany Natural", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-natural-texture.webp" },
    { title: "Mahogany White", image: "/showroom/canyon-ridge/canyon-4layers/cr-mahogany-white-texture.webp" },
    { title: "Ultra-Grain Cypress Medium", image: "/showroom/canyon-ridge/canyon-4layers/color-ug-cypress-medium.webp" },
    { title: "Ultra-Grain Cypress Walnut", image: "/showroom/canyon-ridge/canyon-4layers/color-ug-cypress-walnut.webp" },
    { title: "Ultra-Grain Clear Cypress Slate", image: "/showroom/canyon-ridge/canyon-4layers/ultra-grain-clear-cypress-slate-finish.webp" },
  ];

  const canyonRidgeElementsDesigns = [
    { title: "Design 11", image: "/showroom/canyon-ridge/elements/cre-d11-charcoal-4r-4c.webp" },
    { title: "Design 12", image: "/showroom/canyon-ridge/elements/cre-d12-charcoal-4r-4c.webp" },
    { title: "Design 13", image: "/showroom/canyon-ridge/elements/cre-d13-charcoal-4r-4c.webp" },
    { title: "Design 21", image: "/showroom/canyon-ridge/elements/cre-d21-charcoal-4r-4c.webp" },
    { title: "Design 22", image: "/showroom/canyon-ridge/elements/cre-d22-charcoal-4r-4c.webp" },
    { title: "Design 23", image: "/showroom/canyon-ridge/elements/cre-d23-charcoal-4r-4c.webp" },
    { title: "Design 31", image: "/showroom/canyon-ridge/elements/cre-d31-charcoal-4r-4c.webp" },
    { title: "Design 32", image: "/showroom/canyon-ridge/elements/cre-d32-charcoal-4r-4c.webp" },
    { title: "Design 33", image: "/showroom/canyon-ridge/elements/cre-d33-charcoal-4r-4c.webp" },
    { title: "Design 34", image: "/showroom/canyon-ridge/elements/cre-d34-charcoal-4r-4c.webp" },
    { title: "Design 35", image: "/showroom/canyon-ridge/elements/cre-d35-charcoal-4r-4c.webp" },
    { title: "Design 36", image: "/showroom/canyon-ridge/elements/cre-d36-charcoal-4r-4c.webp" },
    { title: "Design 38", image: "/showroom/canyon-ridge/elements/cre-d38-charcoal-4r-4c.webp" },
  ];

  const canyonRidgeElementsTopSections = [
    { title: "Top 11", image: "/showroom/canyon-ridge/elements/cre-top11-charcoal-4c.webp" },
    { title: "Top 12", image: "/showroom/canyon-ridge/elements/cre-top12-charcoal-4c.webp" },
    { title: "Top 13", image: "/showroom/canyon-ridge/elements/cre-top13-charcoal-4c.webp" },
    { title: "Rectangle 11", image: "/showroom/canyon-ridge/elements/cre-rec11-charcoal-4c.webp" },
    { title: "Rectangle 13", image: "/showroom/canyon-ridge/elements/cre-rec13-charcoal-4c.webp" },
    { title: "Rectangle 14", image: "/showroom/canyon-ridge/elements/cre-rec14-charcoal-4c.webp" },
    { title: "Square 23", image: "/showroom/canyon-ridge/elements/cre-sq23-charcoal-4c.webp" },
    { title: "Square 24", image: "/showroom/canyon-ridge/elements/cre-sq24-charcoal-4c.webp" },
    { title: "Arch 1 Solid", image: "/showroom/canyon-ridge/elements/cre-arc1a-solid-charcoal-8c.webp" },
    { title: "Arch 1 Window", image: "/showroom/canyon-ridge/elements/cre-arc1a-window-charcoal-8c.webp" },
    { title: "Arch 3", image: "/showroom/canyon-ridge/elements/cre-arc3a-charcoal-8c.webp" },
    { title: "Arch 4", image: "/showroom/canyon-ridge/elements/cre-arc4a-charcoal-8c.webp" },
    { title: "Arch 13", image: "/showroom/canyon-ridge/elements/cre-arc13a-charcoal-8c.webp" },
    { title: "Arch 14", image: "/showroom/canyon-ridge/elements/cre-arc14a-charcoal-8c.webp" },
  ];

  const canyonRidgeModernDesigns = [
    { title: "Full View", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-fullview.webp" },
    { title: "Metal Inlay", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-metalinlay-cc-dark.webp" },
    { title: "Plank 6 Full", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-plank6-cc-dark-single-full-long.webp" },
    { title: "Plank 6 Right Long", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-plank6-cc-dark-single-rightside-long.webp" },
    { title: "Plank 6 Right Short", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-plank6-cc-dark-single-rightside-short.webp" },
    { title: "Plank 6 Sides Short", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-plank6-cc-dark-single-sides-short.webp" },
    { title: "Plank Only", image: "/showroom/canyon-ridge/canyon-modern/cr-modern-plank6-only.webp" },
    { title: "All Windows", image: "/showroom/canyon-ridge/canyon-modern/crm_6plank-allwindows.webp" },
  ];

  const canyonRidgeModernGlassOptions = [
    { title: "Clear Glass", image: "/showroom/canyon-ridge/canyon-modern/glass-clear-efx.webp" },
    { title: "Frosted Gray", image: "/showroom/canyon-ridge/canyon-modern/frosted-gray-glass.webp" },
    { title: "Obscured Gray", image: "/showroom/canyon-ridge/canyon-modern/obscured-gray-glass.webp" },
    { title: "Rain Glass", image: "/showroom/canyon-ridge/canyon-modern/rain-gray-glass.webp" },
  ];

  const canyonRidgeModernFinishes = [
    { title: "Clear Cypress Black", image: "/showroom/canyon-ridge/canyon-modern/cr-clear-cypress-black-texture.webp" },
    { title: "Clear Cypress Primed", image: "/showroom/canyon-ridge/canyon-modern/cr-clear-cypress-primed-texture.webp" },
    { title: "Mahogany Bronze", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-bronze-texture.webp" },
    { title: "Mahogany Charcoal", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-charcoal-texture.webp" },
    { title: "Mahogany Dark", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-dark-texture.webp" },
    { title: "Mahogany Espresso", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-espresso-texture.webp" },
    { title: "Mahogany Medium", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-medium-texture.webp" },
    { title: "Mahogany Natural", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-natural-texture.webp" },
    { title: "Mahogany Slate", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-slate-texture.webp" },
    { title: "Mahogany Walnut", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-walnut-texture.webp" },
    { title: "Mahogany White", image: "/showroom/canyon-ridge/canyon-modern/cr-mahogany-white-texture.webp" },
  ];

  const reasons = [
    "Custom guidance on style, finish, hardware, and overall look",
    "Storm-ready carriage house systems built for South Florida",
    "Professional installation with clean fit and finish",
    "Repair, replacement, and full new-door installation available",
    "Fast estimates and direct communication",
    "Clear design guidance for a better finished look",
  ];

  const compareStyles = [
    {
      title: "Traditional Hurricane Garage Doors",
      text: "Classic raised-panel hurricane garage doors with timeless curb appeal and a clean, familiar look.",
      href: "/hurricane-garage-doors/traditional",
    },
    {
      title: "Modern Hurricane Garage Doors",
      text: "Clean, contemporary hurricane garage doors with sleek lines and a more architectural appearance.",
      href: "/hurricane-garage-doors/modern",
    },
    {
      title: "Custom Hurricane Garage Doors",
      text: "Tailored hurricane garage doors designed around your home’s exact style, finish, and design goals.",
      href: "/hurricane-garage-doors/custom",
    },
  ];

  const faqs = [
    {
      question: "Can carriage house garage doors still be hurricane-ready?",
      answer:
        "Yes. Carriage house refers to the look, not a weaker build. SecureLifts installs carriage house hurricane garage doors built for stronger South Florida storm protection.",
    },
    {
      question:
        "Do carriage house hurricane garage doors only work on certain homes?",
      answer:
        "They work especially well on luxury homes, Mediterranean homes, estate properties, and homes where the owner wants a warmer, more decorative appearance.",
    },
    {
      question:
        "Can I get a wood-style look without choosing a weak or high-maintenance door?",
      answer:
        "Yes. Many homeowners want the beauty of wood or carriage styling without compromising durability. We help you choose the right material and finish for that.",
    },
    {
      question: "Can SecureLifts help me choose the right carriage style?",
      answer:
        "Yes. We help homeowners choose the right panel design, hardware, windows, finish, and overall look so the door fits the property correctly.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      <FAQSchema items={faqs} />

      <ServiceSchema
        name="Carriage House Hurricane Garage Doors in South Florida"
        description="Carriage house hurricane garage doors in South Florida with premium design, storm-ready strength, and upscale curb appeal."
        url="https://securelifts.com/hurricane-garage-doors/carriage-house"
      />

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          {
            label: "Hurricane Garage Doors",
            href: "https://securelifts.com/hurricane-garage-doors",
          },
          {
            label: "Carriage House",
            href: "https://securelifts.com/hurricane-garage-doors/carriage-house",
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Hurricane Garage Doors", href: "/hurricane-garage-doors" },
          { label: "Carriage House" },
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/hurricane-carriage-house-hero-clean.png"
          alt="Carriage house hurricane garage door installed on a luxury South Florida home with decorative wood-style panels and storm-ready construction"
          fill
          priority
          className="object-cover object-[70%_40%]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-end px-6 pb-16 pt-32 md:pt-36">
          <div className="max-w-[580px]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              SecureLifts Decorative Storm-Ready Doors
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-[1.04] text-white md:text-6xl">
              Carriage House Hurricane Garage Doors in South Florida
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-8 text-white/90">
              Decorative charm with real storm-ready strength. SecureLifts
              installs carriage house hurricane garage doors that upgrade curb
              appeal while protecting your home in South Florida weather.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
              >
                Call Now – (866) 828-1818
              </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
            >
              Book Service
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Trusted Service
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Licensed &amp; Insured in Florida
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Storm Ready
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Built for Hurricane Conditions
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Premium Work
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Fast Quotes &amp; Clean Installations
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
              Decorative Style, Real Protection
            </p>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Decorative Hurricane Garage Doors That Add Character and Curb Appeal
            </h2>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              A carriage house hurricane garage door should do more than close
              the opening. It should elevate the look of the house, feel
              intentional with the architecture, and still deliver the stronger
              protection South Florida homeowners need.
            </p>
            <p className="mb-5 text-lg leading-8 text-gray-700">
              The best carriage house doors are selected around the home’s style,
              proportions, color direction, and daily-use needs. SecureLifts helps
              narrow the choices so the finished door looks intentional and still
              performs under serious weather conditions.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              The result is a garage door that improves curb appeal, complements
              the home, and provides a stronger storm-ready system at the same time.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Compare Hurricane Styles
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              Looking at Other Style Options Too?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Carriage house is ideal for decorative curb appeal. Traditional,
              modern, or custom hurricane garage doors may also be worth comparing
              depending on the home’s architecture and budget.
            </p>

            <div className="flex flex-col gap-4">
              {compareStyles.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/30"
                >
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mb-4 leading-7 text-gray-700">{item.text}</p>

                  <span className="inline-flex items-center font-semibold text-red-600 transition group-hover:text-red-700">
                    Explore this style →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why Homeowners Choose This Style
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Carriage House Style with Strong Hurricane Protection
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This style works well when the home needs more warmth, character,
              and visual detail than a standard garage door usually provides.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PROJECT IMAGE SECTION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Real Project Inspiration
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Carriage House Designs That Upgrade the Entire Property
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              This style works especially well when multiple garage doors are part
              of the front elevation. The right design can make the entire exterior
              feel more finished and balanced.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/carriage-house-real-install.jpg"
                alt="White carriage-style garage doors on a large luxury residential garage building"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 px-8 py-8 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Clean Multi-Door Layout
                </h3>
                <p className="leading-7 text-gray-700">
                  Carriage styling can work well on homes with multiple garage
                  bays because it adds detail and character across the front elevation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Better Architectural Match
                </h3>
                <p className="leading-7 text-gray-700">
                  The right panel proportions, windows, and hardware can make
                  the garage feel integrated into the home instead of looking
                  like an afterthought.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Built for South Florida
                </h3>
                <p className="leading-7 text-gray-700">
                  SecureLifts helps homeowners choose decorative carriage
                  designs that still meet the real performance demands of South
                  Florida weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM SELECTOR */}
      <section id="showroom-selector" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Build Your Door Style
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Compare Designs, Colors, and Construction Options
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Explore each product line below. Select a section to view design options, colors, and overall style direction.
            </p>
          </div>

          <div className="space-y-6">

            {/* COACHMAN */}
            <details className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-2xl font-bold text-gray-900">
                {coachmanOverview.title}
              </summary>

              <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={coachmanOverview.image}
                      alt="Coachman carriage collection garage door style"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-700">
                    {coachmanOverview.text}
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Panel Designs
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {coachmanDesigns.map((item) => {
                        const modalId = `coachman-design-${item.title.toLowerCase().replace(/\s+/g, "-")}`;

                        return (
                          <div key={item.title}>
                            <a
                              href={`#${modalId}`}
                              className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                            >
                              <div className="relative h-28 w-full bg-white">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                />
                              </div>
                              <p className="mt-2 text-sm font-semibold text-gray-900">{item.title}</p>
                              <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                            </a>

                            <div
                              id={modalId}
                              className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                            >
                              <a
                                href="#showroom-selector"
                                className="absolute inset-0"
                                aria-label="Close enlarged Coachman design preview"
                              />
                              <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                <a
                                  href="#showroom-selector"
                                  className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                  aria-label="Close enlarged Coachman design preview"
                                >
                                  ×
                                </a>
                                <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-10"
                                    sizes="100vw"
                                  />
                                </div>
                                <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                  <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
                                  <p className="mt-2 text-sm font-semibold text-gray-600">
                                    Final selections must be verified with samples, measurements, wind-load requirements, and product availability before ordering.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Window & Top Sections
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {coachmanWindowOptions.map((item) => {
                        const modalId = `coachman-window-${item.title.toLowerCase().replace(/\s+/g, "-")}`;

                        return (
                          <div key={item.title}>
                            <a
                              href={`#${modalId}`}
                              className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                            >
                              <div className="relative h-24 w-full bg-white">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                />
                              </div>
                              <p className="mt-2 text-xs font-semibold text-gray-900">{item.title}</p>
                              <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                            </a>

                            <div
                              id={modalId}
                              className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                            >
                              <a
                                href="#showroom-selector"
                                className="absolute inset-0"
                                aria-label="Close enlarged Coachman window preview"
                              />
                              <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                <a
                                  href="#showroom-selector"
                                  className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                  aria-label="Close enlarged Coachman window preview"
                                >
                                  ×
                                </a>
                                <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-10"
                                    sizes="100vw"
                                  />
                                </div>
                                <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                  <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
                                  <p className="mt-2 text-sm font-semibold text-gray-600">
                                    Final window and top-section availability must be verified before ordering.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Color Combinations
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {coachmanColorCombinations.map((item) => {
                        const modalId = `coachman-color-${item.title.toLowerCase().replace(/\s+/g, "-")}`;

                        return (
                          <div key={item.title}>
                            <a
                              href={`#${modalId}`}
                              className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                            >
                              <div className="relative h-24 w-full bg-white">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                />
                              </div>
                              <p className="mt-2 text-xs font-semibold text-gray-900">{item.title}</p>
                              <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                            </a>

                            <div
                              id={modalId}
                              className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                            >
                              <a
                                href="#showroom-selector"
                                className="absolute inset-0"
                                aria-label="Close enlarged Coachman color preview"
                              />
                              <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                <a
                                  href="#showroom-selector"
                                  className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                  aria-label="Close enlarged Coachman color preview"
                                >
                                  ×
                                </a>
                                <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-10"
                                    sizes="100vw"
                                  />
                                </div>
                                <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                  <h4 className="text-2xl font-bold text-gray-900">{item.title}</h4>
                                  <p className="mt-2 text-sm font-semibold text-gray-600">
                                    Colors may vary by screen, lighting, product availability, and final approved sample.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* CANYON RIDGE */}
            {canyonRidgeOptions.map((item) => {
              const isFiveLayer = item.title.includes("5-Layer");
              const isFourLayer = item.title.includes("4-Layer");
              const isElements = item.title.includes("Elements");
              const isModern = item.title.includes("Modern");

              return (
                <details key={item.title} className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                 <summary className="cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
  <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white">
      <Image
        src={item.image}
        alt={`${item.title} garage door option`}
        fill
        className="object-cover transition duration-300 group-hover:scale-[1.03]"
      />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

      <p className="mt-4 text-lg leading-7 text-gray-700">{item.text}</p>

      <p className="mt-5 text-sm font-bold text-red-600">
        Click to view designs, windows, colors, and finish options →
      </p>
    </div>
  </div>
</summary>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>

                    <div>
                      <p className="text-lg leading-7 text-gray-700">{item.text}</p>

                      
                    </div>
                  </div>

                  {isModern ? (
                    <div className="mt-10 space-y-10 border-t border-gray-200 pt-8">
                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          Modern Panel Designs
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidgeModernDesigns.map((design) => {
                            const modalId = `modern-design-${design.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={design.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-28 w-full bg-white">
                                    <Image src={design.image} alt={design.title} fill className="object-contain" />
                                  </div>
                                  <p className="mt-2 text-sm font-semibold text-gray-900">{design.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex">
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge Modern design preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a href="#showroom-selector" className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white">×</a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={design.image} alt={design.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          Modern Glass Options
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidgeModernGlassOptions.map((glass) => {
                            const modalId = `modern-glass-${glass.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={glass.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full bg-white">
                                    <Image src={glass.image} alt={glass.title} fill className="object-contain" />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{glass.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex">
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge Modern glass preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a href="#showroom-selector" className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white">×</a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={glass.image} alt={glass.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          Modern Colors & Finishes
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidgeModernFinishes.map((finish) => {
                            const modalId = `modern-finish-${finish.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={finish.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white">
                                    <Image src={finish.image} alt={finish.title} fill className="object-cover" />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{finish.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex">
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge Modern finish preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a href="#showroom-selector" className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white">×</a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={finish.image} alt={finish.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {isFiveLayer ? (
                    <div className="mt-10 space-y-10 border-t border-gray-200 pt-8">
                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          5-Layer Panel Designs
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge5LayerDesigns.map((design) => {
                            const modalId = `canyon-5-design-${design.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={design.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-28 w-full bg-white">
                                    <Image
                                      src={design.image}
                                      alt={design.title}
                                      fill
                                      className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-sm font-semibold text-gray-900">{design.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 5-Layer design preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 5-Layer design preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={design.image} alt={design.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{design.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Final design availability must be verified with samples, measurements, wind-load requirements, and product availability before ordering.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          5-Layer Window & Top Sections
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge5LayerTopSections.map((top) => {
                            const modalId = `canyon-5-top-${top.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={top.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full bg-white">
                                    <Image
                                      src={top.image}
                                      alt={top.title}
                                      fill
                                      className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{top.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 5-Layer top section preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 5-Layer top section preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={top.image} alt={top.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{top.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Final top-section availability must be verified before ordering.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          5-Layer Colors & Wood-Look Finishes
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge5LayerFinishes.map((finish) => {
                            const modalId = `canyon-5-finish-${finish.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={finish.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white">
                                    <Image
                                      src={finish.image}
                                      alt={finish.title}
                                      fill
                                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{finish.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 5-Layer finish preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 5-Layer finish preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={finish.image} alt={finish.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{finish.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Colors and wood-look finishes may vary by screen, lighting, product availability, and final approved sample.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {isElements ? (
                    <div className="mt-10 space-y-10 border-t border-gray-200 pt-8">
                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          Elements Panel Designs
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidgeElementsDesigns.map((design) => {
                            const modalId = `elements-design-${design.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={design.title}>
                                <a href={`#${modalId}`} className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md">
                                  <div className="relative h-28 w-full bg-white">
                                    <Image src={design.image} alt={design.title} fill className="object-contain" />
                                  </div>
                                  <p className="mt-2 text-sm font-semibold text-gray-900">{design.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex">
                                  <a href="#showroom-selector" className="absolute inset-0" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a href="#showroom-selector" className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white">×</a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white">
                                      <Image src={design.image} alt={design.title} fill className="object-contain p-10" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          Elements Window & Top Sections
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidgeElementsTopSections.map((top) => {
                            const modalId = `elements-top-${top.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={top.title}>
                                <a href={`#${modalId}`} className="group block rounded-xl border border-gray-200 bg-gray-50 p-3">
                                  <div className="relative h-24 w-full bg-white">
                                    <Image src={top.image} alt={top.title} fill className="object-contain" />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold">{top.title}</p>
                                </a>

                                <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 target:flex">
                                  <a href="#showroom-selector" className="absolute inset-0" />
                                  <div className="relative w-full max-w-2xl bg-white rounded-3xl">
                                    <a href="#showroom-selector" className="absolute right-4 top-4 text-white bg-black/70 w-10 h-10 flex items-center justify-center rounded-full">×</a>
                                    <div className="relative h-[40vh] w-full">
                                      <Image src={top.image} alt={top.title} fill className="object-contain p-10" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {isFourLayer ? (
                    <div className="mt-10 space-y-10 border-t border-gray-200 pt-8">
                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          4-Layer Panel Designs
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge4LayerDesigns.map((design) => {
                            const modalId = `canyon-4-design-${design.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={design.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-28 w-full bg-white">
                                    <Image
                                      src={design.image}
                                      alt={design.title}
                                      fill
                                      className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-sm font-semibold text-gray-900">{design.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 4-Layer design preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 4-Layer design preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={design.image} alt={design.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{design.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Final design availability must be verified with samples, measurements, wind-load requirements, and product availability before ordering.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          4-Layer Window & Top Sections
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge4LayerTopSections.map((top) => {
                            const modalId = `canyon-4-top-${top.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={top.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full bg-white">
                                    <Image
                                      src={top.image}
                                      alt={top.title}
                                      fill
                                      className="object-contain transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{top.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 4-Layer top section preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 4-Layer top section preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={top.image} alt={top.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{top.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Final top-section availability must be verified before ordering.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-4 text-xl font-semibold text-gray-900">
                          4-Layer Colors & Wood-Look Finishes
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {canyonRidge4LayerFinishes.map((finish) => {
                            const modalId = `canyon-4-finish-${finish.title.toLowerCase().replace(/\s+/g, "-")}`;

                            return (
                              <div key={finish.title}>
                                <a
                                  href={`#${modalId}`}
                                  className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md"
                                >
                                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-white">
                                    <Image
                                      src={finish.image}
                                      alt={finish.title}
                                      fill
                                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                                    />
                                  </div>
                                  <p className="mt-2 text-xs font-semibold text-gray-900">{finish.title}</p>
                                  <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                                </a>

                                <div
                                  id={modalId}
                                  className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex"
                                >
                                  <a href="#showroom-selector" className="absolute inset-0" aria-label="Close enlarged Canyon Ridge 4-Layer finish preview" />
                                  <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">
                                    <a
                                      href="#showroom-selector"
                                      className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
                                      aria-label="Close enlarged Canyon Ridge 4-Layer finish preview"
                                    >
                                      ×
                                    </a>
                                    <div className="relative h-[40vh] min-h-[240px] w-full bg-white md:h-[46vh]">
                                      <Image src={finish.image} alt={finish.title} fill className="object-contain p-10" sizes="100vw" />
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-5 md:px-8">
                                      <h4 className="text-2xl font-bold text-gray-900">{finish.title}</h4>
                                      <p className="mt-2 text-sm font-semibold text-gray-600">
                                        Colors and wood-look finishes may vary by screen, lighting, product availability, and final approved sample.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </details>
              );
            })}

         {/* LOUVER */}
<details className="group rounded-3xl border border-gray-200 bg-white p-0 shadow-sm">
  <summary className="cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
    <div className="flex items-start gap-3">
      <span className="mt-1 text-lg font-black text-gray-900 transition group-open:rotate-90">
        ▸
      </span>

      <div className="grid flex-1 gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white">
          <Image
            src={louverOverview.image}
            alt="Louver-style carriage garage door design"
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            {louverOverview.title}
          </h3>

          <p className="mt-4 text-lg leading-7 text-gray-700">
            {louverOverview.text}
          </p>

          <p className="mt-5 text-sm font-bold text-red-600">
            Click to view louver designs, tops, colors, and finish options →
          </p>
        </div>
      </div>
    </div>
  </summary>

  <div className="px-6 pb-6">

                {/* DESIGNS */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Louver Panel Designs
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {louverDesigns.map((design) => {
                      const modalId = `louver-design-${design.title.toLowerCase().replace(/\s+/g, "-")}`;

                      return (
                        <div key={design.title}>
                          <a href={`#${modalId}`} className="group block rounded-xl border border-gray-200 bg-gray-50 p-3 transition hover:-translate-y-1 hover:shadow-md">
                            <div className="relative h-28 w-full bg-white">
                              <Image src={design.image} alt={design.title} fill className="object-contain" />
                            </div>
                            <p className="mt-2 text-sm font-semibold text-gray-900">{design.title}</p>
                            <p className="mt-1 text-xs font-bold text-red-600">Click to enlarge →</p>
                          </a>

                          <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 px-4 py-8 target:flex">
                            <a href="#showroom-selector" className="absolute inset-0" />
                            <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white">
                              <a href="#showroom-selector" className="absolute right-4 top-4 text-xl text-white bg-black/70 w-10 h-10 flex items-center justify-center rounded-full">×</a>
                              <div className="relative h-[40vh] w-full">
                                <Image src={design.image} alt={design.title} fill className="object-contain p-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* TOP SECTIONS */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Louver Top Sections
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {louverTopSections.map((top) => {
                      const modalId = `louver-top-${top.title.toLowerCase().replace(/\s+/g, "-")}`;

                      return (
                        <div key={top.title}>
                          <a href={`#${modalId}`} className="group block rounded-xl border border-gray-200 bg-gray-50 p-3">
                            <div className="relative h-24 w-full bg-white">
                              <Image src={top.image} alt={top.title} fill className="object-contain" />
                            </div>
                            <p className="mt-2 text-xs font-semibold">{top.title}</p>
                          </a>

                          <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 target:flex">
                            <a href="#showroom-selector" className="absolute inset-0" />
                            <div className="relative w-full max-w-2xl bg-white rounded-3xl">
                              <a href="#showroom-selector" className="absolute right-4 top-4 text-white bg-black/70 w-10 h-10 flex items-center justify-center rounded-full">×</a>
                              <div className="relative h-[40vh] w-full">
                                <Image src={top.image} alt={top.title} fill className="object-contain p-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* FINISHES */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Louver Colors & Finishes
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {louverFinishes.map((finish) => {
                      const modalId = `louver-finish-${finish.title.toLowerCase().replace(/\s+/g, "-")}`;

                      return (
                        <div key={finish.title}>
                          <a href={`#${modalId}`} className="group block rounded-xl border border-gray-200 bg-gray-50 p-3">
                            <div className="relative h-24 w-full bg-white">
                              <Image src={finish.image} alt={finish.title} fill className="object-cover" />
                            </div>
                            <p className="mt-2 text-xs font-semibold">{finish.title}</p>
                          </a>

                          <div id={modalId} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 target:flex">
                            <a href="#showroom-selector" className="absolute inset-0" />
                            <div className="relative w-full max-w-2xl bg-white rounded-3xl">
                              <a href="#showroom-selector" className="absolute right-4 top-4 text-white bg-black/70 w-10 h-10 flex items-center justify-center rounded-full">×</a>
                              <div className="relative h-[40vh] w-full">
                                <Image src={finish.image} alt={finish.title} fill className="object-contain p-10" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </details>

          </div>
        </div>
      </section>

      {/* WHY SECURELIFTS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Why SecureLifts
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why Homeowners Choose SecureLifts for Carriage House Hurricane Doors
            </h2>
            <p className="mb-8 text-lg leading-8 text-gray-700">
              Decorative garage doors require the right balance of style, proportions,
              finish, and performance. SecureLifts helps match the door to the home
              while keeping storm readiness and long-term reliability in mind.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    ✓
                  </div>
                  <p className="leading-7 text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">
              Need Help Choosing the Right Carriage Style?
            </h3>
            <p className="mb-6 leading-7 text-gray-700">
              Some homes look better with a more decorative carriage style. Others
              need cleaner, less rustic lines. The right choice depends on the home’s
              architecture, finish direction, and budget.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                What We Help You Decide
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>Door style and panel layout</li>
                <li>Color and wood-look finish</li>
                <li>Decorative hardware selection</li>
                <li>Window layout and overall balance</li>
                <li>Best fit for your home’s architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InternalLinkCards
        eyebrow="Compare Hurricane Door Styles"
        heading="Explore Other Hurricane Garage Door Styles"
        intro="Every home needs a different balance of style, protection, and curb appeal. Compare the main hurricane door options below."
        items={[
          {
            title: "Traditional Style",
            text: "Classic raised-panel hurricane garage doors with timeless curb appeal.",
            href: "/hurricane-garage-doors/traditional",
            icon: "🏡",
          },
          {
            title: "Modern Style",
            text: "Clean, contemporary hurricane garage doors with a sleek architectural look.",
            href: "/hurricane-garage-doors/modern",
            icon: "⬛",
          },
          {
            title: "All Hurricane Styles",
            text: "Go back to the main hurricane garage door page and compare every style option in one place.",
            href: "/hurricane-garage-doors",
            icon: "🌀",
          },
          {
            title: "Custom Doors",
            text: "Tailored hurricane garage doors built around your home’s design.",
            href: "/hurricane-garage-doors/custom",
            icon: "✨",
          },
        ]}
      />

      <ReviewTrustSection
        heading="Why South Florida Homeowners Choose SecureLifts"
        intro="When South Florida homeowners invest in stronger garage doors, they want a company that communicates clearly, installs cleanly, and delivers results that actually hold up."
        reviews={[
          {
            name: "Michael R.",
            text: "Fast response, professional service, and the garage door works better than ever.",
          },
          {
            name: "Jessica T.",
            text: "They showed up on time, explained everything clearly, and got it done right.",
          },
          {
            name: "Daniel P.",
            text: "Best garage door company I’ve dealt with. Clean work and excellent communication.",
          },
          {
            name: "Alicia T.",
            text: "The whole process felt organized and professional from the estimate to the final install.",
          },
        ]}
      />

      {/* FAQ */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              FAQs
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Carriage House Hurricane Garage Door FAQs
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Straight answers for homeowners comparing decorative storm-ready
              garage doors in South Florida.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                <p className="leading-7 text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/5 px-8 py-14 text-center shadow-xl md:px-12">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Ready to Compare Carriage House Hurricane Garage Door Options?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/85">
            SecureLifts installs carriage house hurricane garage doors built for
            South Florida protection, decorative curb appeal, and strong
            day-to-day reliability.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 !bg-white px-5 py-3 text-sm font-bold !text-slate-900 shadow-sm transition hover:!bg-slate-100 hover:!text-slate-900"
            >
              Book Service
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}