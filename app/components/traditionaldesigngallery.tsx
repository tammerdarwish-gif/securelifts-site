"use client";

import { useState } from "react";
import Image from "next/image";

type DesignItem = {
  title: string;
  text: string;
  image: string;
  availability?: string;
};

export default function TraditionalDesignGallery({
  items,
}: {
  items: DesignItem[];
}) {
  const [activeDesign, setActiveDesign] = useState<DesignItem | null>(null);

  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const isInsulatedOnly = (item.availability || "").toLowerCase().includes("insulated") && (item.availability || "").toLowerCase().includes("only");
          return (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveDesign(item)}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-52 w-full bg-slate-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-sm font-bold text-white">
                Click to enlarge
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">
  {item.title}
</h3>

{item.availability ? (
  <p
    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
      isInsulatedOnly
        ? "bg-red-100 text-red-700"
        : "bg-green-100 text-green-700"
    }`}
  >
    {item.availability}
  </p>
) : null}

<p className="mt-4 text-base leading-7 text-slate-600">
  {item.text}
</p>
            </div>
          </button>
        )})}
      </div>

      {activeDesign ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setActiveDesign(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveDesign(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-xl font-bold text-white transition hover:bg-black"
              aria-label="Close enlarged design image"
            >
              ×
            </button>

            <div className="relative h-[70vh] min-h-[420px] w-full bg-slate-100">
              <Image
                src={activeDesign.image}
                alt={activeDesign.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <div className="border-t border-slate-200 px-6 py-5 md:px-8">
              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                {activeDesign.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-600">
                {activeDesign.text}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}