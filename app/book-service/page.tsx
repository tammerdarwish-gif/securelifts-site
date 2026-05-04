import type { Metadata } from "next";

import BookServiceClient from "./BookServiceClient";

export const metadata: Metadata = {
  title: "Book Garage Door Service in South Florida | SecureLifts",
  description:
    "Book garage door repair, installation, opener service, broken spring repair, emergency service, or hurricane-rated garage door help with SecureLifts in South Florida.",
  alternates: {
    canonical: "https://securelifts.com/book-service",
  },
  openGraph: {
    title: "Book Garage Door Service in South Florida | SecureLifts",
    description:
      "Request fast garage door service from SecureLifts for repairs, installations, storm-rated doors, and emergency help across South Florida.",
    url: "https://securelifts.com/book-service",
    siteName: "SecureLifts",
    type: "website",
  },
};

export default function BookServicePage() {
  return <BookServiceClient />;
}
