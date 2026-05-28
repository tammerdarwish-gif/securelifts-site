import type { Metadata } from "next";
import AdsLandingPage from "../components/AdsLandingPage";

export const metadata: Metadata = {
  title: "Broken Garage Door Spring Repair | SecureLifts South Florida",
  description:
    "Broken spring repair for South Florida garage doors. Get fast help for heavy doors, trapped vehicles, and doors that will not open.",
  alternates: { canonical: "https://securelifts.com/ads/broken-spring-repair" },
};

export default function BrokenSpringRepairAdsPage() {
  return (
    <AdsLandingPage
      campaign="ads_broken_spring_repair"
      eyebrow="Broken Spring Repair"
      title="Broken garage door spring? Do not force the door."
      subtitle="A broken spring can make the door extremely heavy and unsafe. SecureLifts helps South Florida homeowners get the right spring repair path without turning a simple repair into a bigger bill."
      defaultService="Broken Spring"
      urgentItems={[
        "Door feels too heavy to lift",
        "Vehicle trapped inside garage",
        "Loud pop from spring area",
        "Repair guidance before work begins",
      ]}
      proofItems={[
        "Spring, cable, roller, and balance checks",
        "Service for common residential garage doors",
        "Clear safety explanation before repair",
      ]}
      faq={[
        {
          question: "Can I open the door with a broken spring?",
          answer:
            "It is usually not safe to force it. The door can be much heavier than expected and may damage the opener or create a safety risk.",
        },
        {
          question: "Do both springs always need replacement?",
          answer:
            "Not always, but paired springs often age together. The technician should explain the condition and what makes sense before work starts.",
        },
        {
          question: "Why does spring repair pricing vary?",
          answer:
            "Price depends on door size, spring type, door weight, and whether related parts like cables or bearings are worn or unsafe.",
        },
        {
          question: "Can SecureLifts help same day?",
          answer:
            "Same-day follow-up is prioritized for broken springs and trapped vehicles. Calling is the fastest option when the door is stuck.",
        },
      ]}
    />
  );
}
