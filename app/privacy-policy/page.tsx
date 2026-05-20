import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SecureLifts",
  description:
    "SecureLifts SMS Privacy Policy for service updates, appointment reminders, and customer care text messages.",
  alternates: {
    canonical: "https://securelifts.com/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Information Collection and Opt-In",
    text: "We collect your phone number when you voluntarily provide it through our website contact forms, estimate requests, or customer care channels. By checking the opt-in box on our forms and providing your phone number, you explicitly consent to receive automated text messages, such as service updates, appointment reminders, and customer care responses, from SecureLifts. Consent is not a condition of purchase.",
  },
  {
    title: "2. How We Use Your Information",
    text: "We use your mobile number exclusively to communicate with you regarding your requested garage door services, repairs, installation updates, or support inquiries.",
  },
  {
    title: "3. Strict No-Sharing Policy (Carrier Compliance)",
    text: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.",
  },
  {
    title: "4. Opting Out",
    text: 'You can cancel the SMS service at any time. Just text "STOP" to our number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time or reply "HELP" for more assistance.',
  },
  {
    title: "5. Data Security",
    text: "We implement a variety of security measures to maintain the safety of your personal information. Your mobile data is securely stored within our customer relationship management (CRM) system and is only accessible by authorized personnel delivering your services.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
            SecureLifts
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            SMS Privacy Policy
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Effective Date: May 19, 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg leading-8 text-slate-700">
            At SecureLifts, we respect your privacy and are committed to
            protecting your personal information. This SMS Privacy Policy
            explains how we collect, use, and protect the information you
            provide when you opt in to receive text messages from us.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
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

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-black tracking-tight text-slate-950">
              SMS Notification Disclosure
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-700">
              Enrollment confirmed for SecureLifts support SMS notifications.
              Message frequency varies. Msg &amp; data rates may apply. Reply
              STOP to opt out. Reply HELP for help.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
