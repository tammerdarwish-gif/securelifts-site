import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Design & Selection Tool | SecureLifts",
  description:
    "Compare garage door size, style, construction, finish, window, and opener options with the SecureLifts garage door selection tool.",
  alternates: { canonical: "https://securelifts.com/garage-door-shop" },
};

export default function GarageDoorShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
