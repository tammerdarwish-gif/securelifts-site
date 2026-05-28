import type { Metadata } from "next";
import AdsLandingPage from "../components/AdsLandingPage";

export const metadata: Metadata = {
  title: "Garage Door Opener Repair | SecureLifts South Florida",
  description:
    "Garage door opener repair in South Florida for remotes, sensors, motors, keypads, noisy openers, and doors that will not close.",
  alternates: {
    canonical: "https://securelifts.com/ads/garage-door-opener-repair",
  },
};

export default function GarageDoorOpenerRepairAdsPage() {
  return (
    <AdsLandingPage
      campaign="ads_garage_door_opener_repair"
      eyebrow="Garage Door Opener Help"
      title="Opener not working? Get the problem narrowed down fast."
      subtitle="SecureLifts repairs opener issues across South Florida, including sensors, remotes, keypads, motors, limits, and doors that reverse or refuse to close."
      defaultService="Opener Problem"
      urgentItems={[
        "Remote or keypad not working",
        "Door reverses or will not close",
        "Noisy opener or stripped gear",
        "Repair before replacement when practical",
      ]}
      proofItems={[
        "Opener troubleshooting before replacement",
        "Sensor, remote, keypad, and motor checks",
        "Clear recommendation for repair or new opener",
      ]}
      faq={[
        {
          question: "Does opener trouble always mean I need a new opener?",
          answer:
            "No. Many opener issues are sensor alignment, remote programming, gear wear, limit settings, or door balance problems.",
        },
        {
          question: "Why does my door start closing and then reverse?",
          answer:
            "The most common causes are sensor alignment, obstruction, track friction, limit settings, or a door balance issue.",
        },
        {
          question: "Can you install a new opener if repair is not worth it?",
          answer:
            "Yes. If repair does not make sense, SecureLifts can recommend opener options that fit the door and the homeowner's needs.",
        },
        {
          question: "What is the fastest way to get opener help?",
          answer:
            "Call for urgent access issues. Use the request form when you want to describe the opener model, symptoms, and preferred time.",
        },
      ]}
    />
  );
}
