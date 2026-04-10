import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
  title: string;
  text?: string;
};

type ProjectGallerySectionProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  images: ProjectImage[];
};

export default function ProjectGallerySection({
  eyebrow = "Recent Installations",
  heading,
  intro,
  images,
}: ProjectGallerySectionProps) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            {eyebrow}
          </p>

          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            {heading}
          </h2>

          {intro ? (
            <p className="text-lg leading-8 text-gray-600">{intro}</p>
          ) : null}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                  {image.title}
                </h3>

                {image.text ? (
                  <p className="leading-7 text-gray-700">{image.text}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}