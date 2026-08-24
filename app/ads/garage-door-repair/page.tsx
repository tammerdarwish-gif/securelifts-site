import type { Metadata } from "next";
import AdsLandingPage from "../components/AdsLandingPage";

export const metadata: Metadata = {
  title: "Same-Day Garage Door Repair | SecureLifts South Florida",
  description:
    "Garage door repair in South Florida with practical repair-first recommendations, fast follow-up, and clear next steps before work begins.",
  alternates: { canonical: "https://securelifts.com/ads/garage-door-repair" },
  robots: { index: false, follow: true },
};

export default function GarageDoorRepairAdsPage() {
  return (
    <AdsLandingPage
      campaign="ads_garage_door_repair"
      eyebrow="South Florida Garage Door Repair"
      title="Garage door stuck, noisy, or not closing right?"
      subtitle="SecureLifts helps homeowners in South Florida fix garage door problems with a repair-first approach, clear communication, and no pressure toward work that does not make sense."
      defaultService="Garage Door Repair"
      urgentItems={[
        "Door stuck open or closed",
        "Noisy, shaking, or unsafe movement",
        "Same-day request follow-up",
        "Repair-first recommendations",
      ]}
      proofItems={[
        "Local South Florida garage door technicians",
        "Licensed and insured service team",
        "Clear recommendation before repair work starts",
      ]}
      faq={[
        {
          question: "Can SecureLifts help keep repair costs reasonable?",
          answer:
            "Yes. We look for the practical repair path first and explain when a part, adjustment, or replacement is actually needed.",
        },
        {
          question: "Should I repair or replace my garage door?",
          answer:
            "Many issues can be repaired. Replacement usually only makes sense when the door is structurally unsafe, severely damaged, or no longer worth repeated repairs.",
        },
        {
          question: "What problems do you repair?",
          answer:
            "Common repairs include broken springs, cables, rollers, tracks, sensors, openers, panels, noisy doors, and doors that will not open or close.",
        },
        {
          question: "What is the fastest way to get help?",
          answer:
            "Calling is fastest for urgent situations. The request form is best when you want to share details and get contacted for the next opening.",
        },
      ]}
    />
  );
}
