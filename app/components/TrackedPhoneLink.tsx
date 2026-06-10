"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackedPhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  campaign?: string;
};

export default function TrackedPhoneLink({
  children,
  campaign = "phone_click",
  ...props
}: TrackedPhoneLinkProps) {
  return (
    <a {...props} data-campaign={campaign}>
      {children}
    </a>
  );
}
