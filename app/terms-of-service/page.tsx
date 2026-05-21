import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SecureLifts",
  description:
    "SecureLifts SMS Terms and Conditions for notifications, customer care responses, and appointment reminders.",
  alternates: {
    canonical: "https://securelifts.com/terms-of-service",
  },
};

const smsTerms = [
  {
    title: "1. Description of SMS Program",
    text: "SecureLifts provides automated and manual SMS notifications, customer care responses, and appointment reminders to users who have opted in through our website chat widget or contact forms.",
  },
  {
    title: "2. Instructions to Opt Out",
    text: 'You can cancel the SMS service at any time. Just text STOP to our number. After you send the SMS message STOP to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.',
  },
  {
    title: "3. Support Contact Information",
    text: "If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly by contacting us via email or phone as listed on our website.",
  },
  {
    title: "4. Disclosures for Message/Data Rates",
    text: "As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your interactions with us. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.",
  },
  {
    title: "5. Carrier Liability Disclaimer",
    text: "Mobile carriers are not liable for delayed or undelivered messages.",
  },
  {
    title: "6. Age Restriction",
    text: "You must be at least 18 years of age or older to opt in and receive SMS messages from SecureLifts.",
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            SecureLifts
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            SMS Terms &amp; Conditions
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {smsTerms.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-black tracking-tight text-slate-950">
              7. Privacy Policy Link
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-700">
              All text messaging data and consent is governed by our Privacy
              Policy. You can review our full policy here:{" "}
              <Link href="/privacy-policy" className="font-bold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
