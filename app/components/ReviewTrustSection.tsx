import { FaCheckCircle, FaShieldAlt, FaStar, FaBolt } from "react-icons/fa";

type ReviewItem = {
  name: string;
  text: string;
};

type ReviewTrustSectionProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  reviews: ReviewItem[];
};

export default function ReviewTrustSection({
  eyebrow = "Trusted by Homeowners",
  heading,
  intro,
  reviews,
}: ReviewTrustSectionProps) {
  const trustPoints = [
    {
      icon: <FaShieldAlt className="text-red-600" />,
      title: "Licensed & Insured",
      text: "Professional garage door service backed by proper coverage and accountability.",
    },
    {
      icon: <FaBolt className="text-red-600" />,
      title: "Fast Response",
      text: "Quick scheduling, direct communication, and service that moves without wasting time.",
    },
    {
      icon: <FaCheckCircle className="text-red-600" />,
      title: "Work Done Right",
      text: "We focus on clean installation, strong workmanship, and results that hold up.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
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

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="leading-8 text-gray-700">“{review.text}”</p>

                <p className="mt-5 font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}