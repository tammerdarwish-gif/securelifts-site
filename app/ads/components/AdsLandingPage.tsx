import QuickLeadForm from "@/app/components/QuickLeadForm";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import { FaCheckCircle, FaPhoneAlt, FaShieldAlt, FaTools } from "react-icons/fa";

type AdsLandingPageProps = {
  campaign: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  defaultService: string;
  urgentItems: string[];
  proofItems: string[];
  faq: Array<{ question: string; answer: string }>;
};

export default function AdsLandingPage({
  campaign,
  eyebrow,
  title,
  subtitle,
  defaultService,
  urgentItems,
  proofItems,
  faq,
}: AdsLandingPageProps) {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 px-6 py-14 text-white md:py-18">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_440px] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-red-400">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedPhoneLink
                href="tel:18668281818"
                campaign={campaign}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 font-black !text-white transition hover:bg-red-700"
              >
                <FaPhoneAlt />
                Call (866) 828-1818
              </TrackedPhoneLink>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-black !text-white transition hover:bg-white hover:!text-slate-950"
              >
                Request Help
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {urgentItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <FaCheckCircle className="mt-1 shrink-0 text-red-400" />
                  <span className="font-semibold leading-6 text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div id="quote">
            <QuickLeadForm
              defaultService={defaultService}
              title="Request a fair repair quote"
              intro="Tell us what happened. We focus on practical repairs first and confirm the right next step before work begins."
              compact
              campaignSource={campaign}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {proofItems.map((item, index) => {
            const Icon = index === 0 ? FaTools : index === 1 ? FaShieldAlt : FaCheckCircle;
            return (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <Icon className="text-2xl text-red-700" />
                <p className="mt-4 font-black leading-6">{item}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
            Cost-Conscious Service
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Built for homeowners who need the door fixed without being pushed
            into unnecessary work.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {faq.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
