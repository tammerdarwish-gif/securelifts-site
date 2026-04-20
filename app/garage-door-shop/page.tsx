"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Step =
  | "location"
  | "size"
  | "style"
  | "design"
  | "construction"
  | "color"
  | "options"
  | "opener"
  | "review";

type FinishOption = {
  id: string;
  name: string;
  manufacturer: "raynor" | "clopay" | "generic";
  type: "solid" | "woodtone";
  swatch?: string;
  image?: string;
};

type ConstructionFinishOptions = {
  nonInsulated: FinishOption[];
  insulated: FinishOption[];
};

type DesignOption = {
  id: string;
  name: string;
  description: string;
  previewLabel: string;
  basePreviewImage: string;
  availableColors: FinishOption[] | ConstructionFinishOptions;
  availableWindows: string[];
};

type StyleOption = {
  id: string;
  name: string;
  description: string;
  designs: DesignOption[];
};

const FINISH_LIBRARY = {
  generic: {
    white: {
      id: "generic-white",
      name: "White",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#F8F8F8",
    },
    almond: {
      id: "generic-almond",
      name: "Almond",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#E7D7B7",
    },
    bronze: {
      id: "generic-bronze",
      name: "Bronze",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#6E5B49",
    },
    brown: {
      id: "generic-brown",
      name: "Brown",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#6B4F3A",
    },
        taupe: {
      id: "generic-taupe",
      name: "Taupe",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#A79B8B",
    },
    sandtone: {
      id: "generic-sandtone",
      name: "Sandtone",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#C8B89D",
    },
    desertTan: {
      id: "generic-desert-tan",
      name: "Desert Tan",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#C9B28F",
    },
    gray: {
      id: "generic-gray",
      name: "Gray",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#7C8187",
    },
    charcoal: {
      id: "generic-charcoal",
      name: "Charcoal",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#3B3E43",
    },
    black: {
      id: "generic-black",
      name: "Black",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#1C1C1C",
    },
    red: {
      id: "generic-red",
      name: "Red",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#7A1E1E",
    },
    silver: {
      id: "generic-silver",
      name: "Silver",
      manufacturer: "generic",
      type: "solid" as const,
      swatch: "#BFC3C8",
    },
  },
  raynor: {
    mocha: {
      id: "raynor-mocha",
      name: "Mocha",
      manufacturer: "raynor",
      type: "woodtone" as const,
      image: "/finishes/raynor/Mocha-Gunite-Encore.png",
          },
          Taupe: {
      id: "raynor-taupe",
      name: "Taupe",
      manufacturer: "raynor",
      type: "woodtone" as const,
      image: "/finishes/raynor/short-panel-taupe.png",
    },
    shale: {
      id: "raynor-shale",
      name: "Shale",
      manufacturer: "raynor",
      type: "solid" as const,
      swatch: "#8A8478",
    },
  },
  clopay: {
    walnut: {
      id: "clopay-walnut",
      name: "Walnut",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/walnut.png",
    },
    medium: {
      id: "clopay-medium",
      name: "Medium Finish",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/Medium-Finish.png",
    },
         mochaBrown: {
      id: "clopay-mocha-brown",
      name: "Mocha Brown",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/Mocha-Brown.png",
    },
     cherry: {
      id: "clopay-cherry",
      name: "Cherry Wood",
      manufacturer: "clopay",
      type: "woodtone" as const,
      image: "/finishes/clopay/Cherry-Wood.png",
    },
  },
} as const;

const TRADITIONAL_COLORS = {
  nonInsulated: [
    FINISH_LIBRARY.generic.white,
    FINISH_LIBRARY.generic.almond,
    FINISH_LIBRARY.generic.bronze,
    FINISH_LIBRARY.generic.brown,
  ],
    insulated: [
    FINISH_LIBRARY.generic.white,
    FINISH_LIBRARY.generic.almond,
    FINISH_LIBRARY.generic.sandtone,
    FINISH_LIBRARY.generic.desertTan,
    FINISH_LIBRARY.generic.bronze,
    FINISH_LIBRARY.generic.brown,
    FINISH_LIBRARY.generic.taupe,
    FINISH_LIBRARY.raynor.mocha,
    FINISH_LIBRARY.raynor.shale,
    FINISH_LIBRARY.clopay.walnut,
    FINISH_LIBRARY.clopay.medium,
    FINISH_LIBRARY.clopay.mochaBrown,
    FINISH_LIBRARY.generic.gray,
    FINISH_LIBRARY.generic.charcoal,
    FINISH_LIBRARY.generic.black,
    FINISH_LIBRARY.generic.red,
  ],
};

const DOOR_IMAGE_MAP: Record<string, string> = {
  // Traditional short panel
  "traditional-short-panel-generic-white": "/showroom/traditional/short-panel-white.png",
  "traditional-short-panel-generic-almond": "/showroom/traditional/short-panel-almond.png",
  "traditional-short-panel-generic-bronze": "/showroom/traditional/short-panel-bronze.png",
  "traditional-short-panel-generic-brown": "/showroom/traditional/short-panel-brown.png",
  "traditional-short-panel-generic-taupe": "/showroom/traditional/short-panel-taupe.png",
  "traditional-short-panel-generic-desert-tan": "/showroom/traditional/short-panel-desert-tan.png",
  "traditional-short-panel-generic-gray": "/showroom/traditional/short-panel-gray.png",
  "traditional-short-panel-generic-charcoal": "/showroom/traditional/short-panel-charcoal.png",
  "traditional-short-panel-generic-black": "/showroom/traditional/short-panel-black.png",
  "traditional-short-panel-generic-red": "/showroom/traditional/short-panel-red.png",
  "traditional-short-panel-clopay-medium": "/showroom/traditional/short-panel-medium-finish.png",
  "traditional-short-panel-clopay-walnut": "/showroom/traditional/short-panel-walnut.png",
  "traditional-short-panel-raynor-mocha": "/showroom/traditional/short-panel-mocha-woodtone.png",
  "traditional-short-panel-raynor-shale": "/showroom/traditional/short-panel-shale.png",
    "traditional-short-panel-clopay-mocha-brown": "/showroom/traditional/short-panel-mocha-brown.png",
  "traditional-short-panel-generic-sandtone": "/showroom/traditional/short-panel-sandtone.png",

  // Traditional long panel
  "traditional-long-panel-generic-white": "/showroom/traditional/long-panel-white.png",
  "traditional-long-panel-generic-almond": "/showroom/traditional/long-panel-almond.png",
  "traditional-long-panel-generic-bronze": "/showroom/traditional/long-panel-bronze.png",
  "traditional-long-panel-generic-brown": "/showroom/traditional/long-panel-brown.png",
  "traditional-long-panel-generic-taupe": "/showroom/traditional/long-panel-taupe.png",
  "traditional-long-panel-generic-desert-tan": "/showroom/traditional/long-panel-desert-tan.png",
  "traditional-long-panel-generic-gray": "/showroom/traditional/long-panel-gray.png",
  "traditional-long-panel-generic-charcoal": "/showroom/traditional/long-panel-charcoal.png",
  "traditional-long-panel-generic-black": "/showroom/traditional/long-panel-black.png",
  "traditional-long-panel-generic-red": "/showroom/traditional/long-panel-red.png",
  "traditional-long-panel-clopay-medium": "/showroom/traditional/long-panel-medium-finish.png",
  "traditional-long-panel-clopay-walnut": "/showroom/traditional/long-panel-walnut.png",
  "traditional-long-panel-clopay-mocha-brown": "/showroom/traditional/long-panel-mocha-brown.png",
    "traditional-long-panel-raynor-mocha": "/showroom/traditional/long-panel-Mocha-Gunite-Encore.png",
      "traditional-long-panel-generic-shale": "/showroom/traditional/long-panel-shale.png",
      "traditional-long-panel-raynor-shale": "/showroom/traditional/long-panel-shale.png",


};

const STYLE_OPTIONS: StyleOption[] = [
  {
    id: "traditional",
    name: "Traditional",
    description:
      "Classic raised-panel looks for homeowners who want a clean, timeless garage door.",
    designs: [
      {
        id: "short-panel",
        name: "Short Panel",
        description:
          "A familiar traditional layout that fits many South Florida homes cleanly.",
        previewLabel: "Traditional • Short Panel",
        basePreviewImage: "/showroom/traditional/short-panel/white.png",
        availableColors: TRADITIONAL_COLORS,
        availableWindows: ["No Windows", "Top Row Windows"],
      },
      {
        id: "long-panel",
        name: "Long Panel",
        description:
          "A more refined traditional look with longer panel proportions.",
        previewLabel: "Traditional • Long Panel",
        basePreviewImage: "/showroom/traditional/long-panel/white.png",
        availableColors: TRADITIONAL_COLORS,
        availableWindows: ["No Windows", "Top Row Windows", "Arched Windows"],
      },
    ],
  },
  {
    id: "modern",
    name: "Modern",
    description:
      "Clean lines, glass options, and a stronger architectural feel for modern homes.",
    designs: [
      {
        id: "full-view",
        name: "Full View Glass",
        description:
          "Large glass sections with a sleek frame for a premium modern look.",
        previewLabel: "Modern • Full View Glass",
        basePreviewImage: "/showroom/modern/full-view-placeholder.jpg",
        availableColors: [
          FINISH_LIBRARY.generic.black,
          FINISH_LIBRARY.generic.bronze,
          FINISH_LIBRARY.generic.silver,
        ],
        availableWindows: ["Clear Glass", "Frosted Glass", "Tinted Glass"],
      },
      {
        id: "flush-modern",
        name: "Flush Panel",
        description:
          "Minimalist flush sections for a cleaner modern appearance without full glass.",
        previewLabel: "Modern • Flush Panel",
        basePreviewImage: "/showroom/modern/Shaker-Panel-Encore.jpg",
        availableColors: [
          FINISH_LIBRARY.generic.white,
          FINISH_LIBRARY.generic.black,
          FINISH_LIBRARY.generic.charcoal,
          FINISH_LIBRARY.clopay.walnut,
        ],
        availableWindows: ["No Windows", "Slim Top Windows"],
      },
    ],
  },
  {
    id: "carriage",
    name: "Carriage House",
    description:
      "Decorative curb appeal with stronger storm-ready construction for higher-end homes.",
    designs: [
      {
        id: "crossbuck",
        name: "Crossbuck",
        description:
          "Classic carriage-house detailing with warmer character and premium curb appeal.",
        previewLabel: "Carriage • Crossbuck",
        basePreviewImage: "/showroom/carriage/crossbuck-placeholder.jpg",
        availableColors: [
          FINISH_LIBRARY.generic.white,
          FINISH_LIBRARY.generic.almond,
          FINISH_LIBRARY.clopay.walnut,
        ],
        availableWindows: [
          "No Windows",
          "Top Row Windows",
          "Decorative Windows",
        ],
      },
      {
        id: "recessed-carriage",
        name: "Recessed Carriage",
        description:
          "A cleaner carriage look that still adds warmth and visual depth.",
        previewLabel: "Carriage • Recessed Panel",
        basePreviewImage: "/showroom/carriage/recessed-placeholder.jpg",
        availableColors: [
          FINISH_LIBRARY.generic.white,
          FINISH_LIBRARY.generic.sandtone,
          FINISH_LIBRARY.clopay.walnut,
        ],
        availableWindows: ["No Windows", "Top Row Windows"],
      },
    ],
  },
];

const OPENER_OPTIONS = [
  {
    id: "basic",
    title: "Basic Opener",
    text: "Straightforward option for homeowners who want a simple dependable setup.",
  },
  {
    id: "belt",
    title: "Quiet Belt Drive",
    text: "Smoother and quieter operation for homes with bedrooms near the garage.",
  },
  {
    id: "smart",
    title: "Smart Opener",
    text: "App access, alerts, and added convenience for day-to-day use.",
  },
  {
    id: "jackshaft",
    title: "Wall Mount / Jackshaft",
    text: "Cleaner ceiling space and a premium setup for certain garage layouts.",
  },
];

const STEP_LABELS: { id: Step; label: string }[] = [
  { id: "location", label: "Location" },
  { id: "size", label: "Size" },
  { id: "style", label: "Style" },
  { id: "design", label: "Design" },
  { id: "construction", label: "Construction" },
  { id: "color", label: "Color" },
  { id: "options", label: "Options" },
  { id: "opener", label: "Opener" },
  { id: "review", label: "Review" },
];

export default function GarageDoorShopPage() {
  const [step, setStep] = useState<Step>("location");
  const [location, setLocation] = useState("");
  const [garageSize, setGarageSize] = useState("");
  const [styleId, setStyleId] = useState("");
  const [designId, setDesignId] = useState("");
  const [construction, setConstruction] = useState("");
  const [colorId, setColorId] = useState("");
  const [windowOption, setWindowOption] = useState("");
  const [openerId, setOpenerId] = useState("");
  const [previewImageFailed, setPreviewImageFailed] = useState(false);

  const selectedStyle = useMemo(
    () => STYLE_OPTIONS.find((item) => item.id === styleId) ?? null,
    [styleId]
  );

  const selectedDesign = useMemo(
    () => selectedStyle?.designs.find((item) => item.id === designId) ?? null,
    [selectedStyle, designId]
  );

  const selectedOpener = useMemo(
    () => OPENER_OPTIONS.find((item) => item.id === openerId) ?? null,
    [openerId]
  );

  const filteredAvailableColors = useMemo(() => {
    if (!selectedDesign) return [] as FinishOption[];

    if (Array.isArray(selectedDesign.availableColors)) {
      return selectedDesign.availableColors;
    }

    if (construction === "Non-Insulated") {
      return selectedDesign.availableColors.nonInsulated;
    }

    if (construction === "Insulated") {
      return selectedDesign.availableColors.insulated;
    }

    return [] as FinishOption[];
  }, [selectedDesign, construction]);

  const selectedFinish = useMemo(() => {
    return filteredAvailableColors.find((item) => item.id === colorId) ?? null;
  }, [filteredAvailableColors, colorId]);

  const selectedPreviewImage = useMemo(() => {
    if (!selectedStyle || !selectedDesign) return "";

    if (selectedFinish) {
      const mappedImage =
        DOOR_IMAGE_MAP[
          `${selectedStyle.id}-${selectedDesign.id}-${selectedFinish.id}`
        ];

      if (mappedImage) {
        return mappedImage;
      }
    }

    return selectedDesign.basePreviewImage || "";
  }, [selectedStyle, selectedDesign, selectedFinish]);

  const isExactColorPreview = useMemo(() => {
    if (!selectedStyle || !selectedDesign || !selectedFinish) return false;

    return Boolean(
      DOOR_IMAGE_MAP[
        `${selectedStyle.id}-${selectedDesign.id}-${selectedFinish.id}`
      ]
    );
  }, [selectedStyle, selectedDesign, selectedFinish]);

  function goTo(nextStep: Step) {
    setStep(nextStep);
  }

  function selectStyle(id: string) {
    const nextStyle = STYLE_OPTIONS.find((item) => item.id === id);
    setStyleId(id);

    if (nextStyle?.designs.length) {
      setDesignId("");
      setConstruction("");
      setColorId("");
      setWindowOption("");
      setPreviewImageFailed(false);
    }

    goTo("design");
  }

  function selectDesign(id: string) {
    if (!selectedStyle) return;

    setDesignId(id);
    setConstruction("");
    setColorId("");
    setWindowOption("");
    setPreviewImageFailed(false);
    goTo("construction");
  }

  function selectConstruction(type: string) {
    setConstruction(type);
    setPreviewImageFailed(false);

    if (selectedDesign) {
      const nextColors = Array.isArray(selectedDesign.availableColors)
        ? selectedDesign.availableColors
        : type === "Non-Insulated"
        ? selectedDesign.availableColors.nonInsulated
        : selectedDesign.availableColors.insulated;

      setColorId(nextColors[0]?.id ?? "");
      setWindowOption(selectedDesign.availableWindows[0] ?? "");
    }

    goTo("color");
  }

  function selectColor(id: string) {
    setPreviewImageFailed(false);
    setColorId(id);
  }

  function selectGarageSize(value: string) {
    setGarageSize(value);
    goTo("style");
  }

  function selectOpener(id: string) {
    setOpenerId(id);
    goTo("review");
  }

  const currentStepIndex = STEP_LABELS.findIndex((item) => item.id === step);

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
              SecureLifts Garage Door Showroom
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Browse Garage Door Designs the Easy Way
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Choose your garage door by location, size, style, design, and
              color. Compare visually, keep it simple, and request pricing when
              you are ready.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => goTo("location")}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Start Browsing
              </button>

              <a
                href="tel:18668281818"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Call (866) 828-1818
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="grid gap-3 md:grid-cols-8">
            {STEP_LABELS.map((item, index) => {
              const isActive = step === item.id;
              const isComplete = index < currentStepIndex;

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border px-3 py-3 text-center text-sm font-semibold transition ${
                    isActive
                      ? "border-red-200 bg-red-50 text-red-700"
                      : isComplete
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-slate-200 bg-slate-50 text-slate-500"
                  }`}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Live Preview
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  {selectedDesign?.previewLabel || "Your Door Selection"}
                </h2>
              </div>

              {(designId || colorId) && (
                <div className="flex gap-2">
                  <button
                    onClick={() => goTo("design")}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Change Design
                  </button>
                  <button
                    onClick={() => goTo("color")}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Change Color
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="p-6">
                {selectedPreviewImage && !previewImageFailed ? (
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative aspect-[4/3] w-full">
                      <img
                        src={selectedPreviewImage}
                        alt={selectedDesign?.previewLabel || "Garage door preview"}
                        className="h-full w-full object-contain"
                        onError={() => setPreviewImageFailed(true)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        Design preview not available yet
                      </p>
                      <p className="mt-2 text-slate-500">
                        The image path or filename does not match a file in your public folder yet.
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                      Selected Configuration
                    </p>
                    <p className="mt-3 text-base font-semibold text-slate-900">
                      {selectedStyle?.name || "Style"} •{" "}
                      {selectedDesign?.name || "Design"} •{" "}
                      {construction || "Construction"}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      {windowOption || "Window option not selected yet"}
                    </p>
                    {selectedFinish && !isExactColorPreview && (
                      <p className="mt-3 text-sm text-amber-700">
                        Exact preview image for <strong>{selectedFinish.name}</strong> is not added yet. Showing the closest base design preview.
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
                      Selected Finish
                    </p>

                    {selectedFinish ? (
                      <div className="mt-3 flex items-center gap-4">
                        <div
                          className="h-16 w-16 rounded-xl border border-slate-200 bg-cover bg-center"
                          style={
                            selectedFinish.type === "woodtone"
                              ? { backgroundImage: `url(${selectedFinish.image})` }
                              : { backgroundColor: selectedFinish.swatch }
                          }
                        />
                        <div>
                          <p className="font-semibold text-slate-900">
                            {selectedFinish.name}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                            {selectedFinish.type === "woodtone" ? "Woodtone" : "Solid"} •{" "}
                            {selectedFinish.manufacturer}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-slate-500">
                        Select a finish to see it here.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Your Build Summary
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <SummaryItem label="Location" value={location || "Not selected"} />
                <SummaryItem label="Garage Size" value={garageSize || "Not selected"} />
                <SummaryItem label="Style" value={selectedStyle?.name || "Not selected"} />
                <SummaryItem label="Design" value={selectedDesign?.name || "Not selected"} />
                <SummaryItem
                  label="Construction"
                  value={construction || "Not selected"}
                />
                <SummaryItem label="Color" value={selectedFinish?.name || "Not selected"} />
                <SummaryItem label="Windows" value={windowOption || "Not selected"} />
                <SummaryItem
                  label="Opener"
                  value={selectedOpener?.title || "Not selected"}
                />
              </div>

              <p className="mt-4 text-sm text-slate-500">
                We only want to show clients what makes sense for their job.
                Exact measurements and final compatibility will be confirmed
                before installation.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            {step === "location" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 1
                </p>
                <h2 className="mt-2 text-3xl font-black">Where is your project?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Enter your city or ZIP code so we can guide the selection the
                  right way for your area.
                </p>

                <input
                  placeholder="Enter city or ZIP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-6 w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-red-500"
                />

                <button
                  onClick={() => goTo("size")}
                  disabled={!location.trim()}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Continue
                </button>
              </div>
            )}

            {step === "size" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 2
                </p>
                <h2 className="mt-2 text-3xl font-black">What size garage is it?</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Keep it simple. We’ll confirm exact measurements later.
                </p>

                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: "Single Car Garage",
                      text: "Best for one-car openings and smaller garage layouts.",
                    },
                    {
                      title: "Double Car Garage",
                      text: "Best for standard two-car width openings.",
                    },
                    {
                      title: "Two Doors / Custom Layout",
                      text: "For split garage layouts or situations with more than one opening.",
                    },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => selectGarageSize(item.title)}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-left transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "style" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 3
                </p>
                <h2 className="mt-2 text-3xl font-black">Choose a style</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Start with the look you want. We’ll narrow the details after.
                </p>

                <div className="mt-6 grid gap-4">
                  {STYLE_OPTIONS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectStyle(item.id)}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-left transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "design" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 4
                </p>
                <h2 className="mt-2 text-3xl font-black">Choose a design</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The design comes before color because color availability
                  depends on the design you choose.
                </p>

                <div className="mt-6 grid gap-4">
                  {selectedStyle?.designs.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectDesign(item.id)}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-left transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "construction" && selectedDesign && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 5
                </p>
                <h2 className="mt-2 text-3xl font-black">Choose construction</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Some colors and finishes depend on the construction type.
                </p>

                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: "Non-Insulated",
                      text: "Standard option with more limited finish availability.",
                    },
                    {
                      title: "Insulated",
                      text: "Stronger construction with access to expanded finish options.",
                    },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => selectConstruction(item.title)}
                      className={`rounded-2xl border bg-white px-5 py-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                        construction === item.title
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-slate-200 hover:border-red-200"
                      }`}
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "color" && selectedDesign && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 6
                </p>
                <h2 className="mt-2 text-3xl font-black">Choose a color</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  These are the color options available for your selected design and construction.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Colors and finishes shown are visual approximations based on manufacturer materials. Final appearance may vary by lighting, screen settings, material, and product availability.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {filteredAvailableColors.map((item) => {
                    const isSelected = colorId === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => selectColor(item.id)}
                        className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                          isSelected
                            ? "border-red-500 ring-2 ring-red-200"
                            : "border-slate-200"
                        }`}
                      >
                        <div
                          className="h-16 rounded-xl border border-slate-200 bg-cover bg-center"
                          style={
                            item.type === "woodtone"
                              ? { backgroundImage: `url(${item.image})` }
                              : { backgroundColor: item.swatch }
                          }
                        />
                        <p className="mt-3 font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">
                          {item.type === "woodtone" ? "Woodtone" : "Solid"}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => goTo("options")}
                  disabled={!colorId}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Continue
                </button>
              </div>
            )}

            {step === "options" && selectedDesign && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 7
                </p>
                <h2 className="mt-2 text-3xl font-black">Add window options</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Pick the window setup that fits your design and the look you
                  want.
                </p>

                <div className="mt-6 grid gap-4">
                  {selectedDesign.availableWindows.map((item) => (
                    <button
                      key={item}
                      onClick={() => setWindowOption(item)}
                      className={`rounded-2xl border px-5 py-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                        windowOption === item
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-slate-200"
                      }`}
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item}
                      </p>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => goTo("opener")}
                  disabled={!windowOption}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Continue
                </button>
              </div>
            )}

            {step === "opener" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Step 8
                </p>
                <h2 className="mt-2 text-3xl font-black">Choose an opener</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Add the opener setup that best fits how the customer wants to
                  use the door.
                </p>

                <div className="mt-6 grid gap-4">
                  {OPENER_OPTIONS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => selectOpener(item.id)}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-5 text-left transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                    >
                      <p className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === "review" && (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Final Step
                </p>
                <h2 className="mt-2 text-3xl font-black">Review your build</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  The client has a clean selection. Now push them into a quote.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <SummaryItem label="Location" value={location || "Not selected"} />
                    <SummaryItem label="Garage Size" value={garageSize || "Not selected"} />
                    <SummaryItem label="Style" value={selectedStyle?.name || "Not selected"} />
                    <SummaryItem label="Design" value={selectedDesign?.name || "Not selected"} />
                    <SummaryItem label="Construction" value={construction || "Not selected"} />
                    <SummaryItem label="Color" value={selectedFinish?.name || "Not selected"} />
                    <SummaryItem label="Windows" value={windowOption || "Not selected"} />
                    <SummaryItem
                      label="Opener"
                      value={selectedOpener?.title || "Not selected"}
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <Link
                    href="/book-service"
                    className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
                  >
                    Request Quote
                  </Link>

                  <button
                    onClick={() => goTo("design")}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Change Design
                  </button>

                  <button
                    onClick={() => goTo("color")}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Change Color
                  </button>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Have a special size or unusual condition? We’ll handle those
                  details during the quote process.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center md:px-12">
          <h2 className="text-3xl font-black md:text-5xl">
            Need Help Choosing the Right Garage Door?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            This showroom helps narrow the options fast, but your team will
            still guide the final selection based on what actually fits the job.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:18668281818"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700"
            >
              Call (866) 828-1818
            </a>

            <Link
              href="/book-service"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-gray-100"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}