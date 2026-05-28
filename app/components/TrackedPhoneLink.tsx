"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TrackedPhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  campaign?: string;
};

export default function TrackedPhoneLink({
  children,
  campaign = "phone_click",
  onClick,
  ...props
}: TrackedPhoneLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.loadSecureLiftsGoogleTags?.();
    window.gtag?.("event", "conversion", {
      send_to: "AW-17481132065/F22OCPvmkfQbEKHQ049B",
      value: 50,
      currency: "USD",
    });
    window.gtag?.("event", "phone_click", {
      event_category: "lead",
      event_label: campaign,
      value: 50,
      currency: "USD",
    });
    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
