import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { getApprovalFiles } from "@/lib/getApprovalFiles";

type PageProps = {
  params: Promise<{ manufacturer: string }>;
};

function formatName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const name = formatName(resolvedParams.manufacturer);

  return {
    title: `${name} Garage Door Approvals | SecureLifts`,
    description: `Browse ${name} hurricane garage door approval PDFs and technical documents.`,
  };
}

export default async function ManufacturerPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.manufacturer;
  const name = formatName(slug);
  const files = getApprovalFiles(slug);

  return (
    <main className="bg-white text-gray-900">
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://securelifts.com" },
          { label: "Resources", href: "https://securelifts.com/resources" },
          {
            label: name,
            href: `https://securelifts.com/resources/${slug}`,
          },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: name },
        ]}
      />

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Manufacturer Library
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            {name} Approval Documents
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Browse all available hurricane-rated garage door approvals,
            including Miami-Dade NOAs and Florida Product Approvals for {name}.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {files.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-16 text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                No approval PDFs found
              </h2>
              <p className="mt-3 text-gray-600">
                Drop PDF files into this folder to make them appear automatically:
              </p>
              <p className="mt-2 inline-block rounded-xl bg-white px-4 py-3 font-mono text-sm text-gray-800">
                public/resources/approvals/{slug}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                    Available Documents
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {files.length} PDF{files.length === 1 ? "" : "s"} Found
                  </h2>
                </div>

                <p className="text-sm text-gray-500">
                  Click any document card to open the PDF.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {files.map((file) => (
                  <div
                    key={file.url}
                    className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                  >
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <div className="mb-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                          {name}
                        </p>

                        <h3 className="`min-h-21` text-xl font-semibold leading-8 text-gray-900 transition group-hover:text-red-600">
                          {file.title}
                        </h3>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-4 transition group-hover:bg-red-50">
                        <p className="truncate text-sm text-gray-500">
                          {file.name}
                        </p>
                      </div>
                    </a>

                    <div className="mt-5 grid gap-3">
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                      >
                        <span className="text-white">Open PDF</span>
                      </a>

                      <a
                        href={file.url}
                        target="_blank"
                        rel="noreferrer"
                        download
                        className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="bg-red-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Need Help Choosing the Right Door?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          SecureLifts can help you compare approved options and choose the right
          hurricane-rated garage door for your property.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:18668281818"
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Call (866) 828-1818
          </a>

          <Link
            href="/book-service"
            className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-red-600"
          >
            Book Service
          </Link>
        </div>
      </section>
    </main>
  );
}