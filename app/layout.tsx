import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import StickyCTA from "./components/StickyCTA";
import BusinessAuthoritySchema from "./components/BusinessAuthoritySchema";

const GA_MEASUREMENT_ID = "G-NRWSY3V29J";
const ADDITIONAL_GA_MEASUREMENT_ID = "G-MM5H23RMXS";
const GOOGLE_ADS_ID = "AW-17481132065";
const GOOGLE_ADS_PHONE_CONVERSION_ID = "AW-17481132065/F22OCPvmkfQbEKHQ049B";
const PHONE_NUMBER = "(866) 828-1818";

export const metadata: Metadata = {
  metadataBase: new URL("https://securelifts.com"),
  title: {
    default:
      "SecureLifts Garage Doors | South Florida Garage Door Repair & Hurricane Doors",
    template: "%s",
  },
  description:
    "SecureLifts provides garage door repair, opener repair, broken spring repair, garage door installation, hurricane-rated doors, and commercial garage door service across South Florida.",
  applicationName: "SecureLifts",
  authors: [{ name: "SecureLifts Garage Doors", url: "https://securelifts.com" }],
  creator: "SecureLifts Garage Doors",
  publisher: "SecureLifts Garage Doors",
  category: "Garage Door Service",
  keywords: [
    "garage door repair South Florida",
    "garage door repair Miami",
    "garage door repair Fort Lauderdale",
    "garage door repair Boca Raton",
    "garage door opener repair",
    "broken spring repair",
    "hurricane garage doors",
    "impact rated garage doors",
    "Miami-Dade rated garage doors",
    "commercial garage door service",
  ],
  alternates: {
    canonical: "https://securelifts.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const deferredGoogleTags = `
    (function () {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
      if (window.__secureLiftsGoogleTagsReady) return;

      var loaded = false;
      var loadTags = function () {
        if (loaded) return;
        loaded = true;
        window.__secureLiftsGoogleTagsReady = true;

        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}';
        document.head.appendChild(script);

        window.gtag('js', new Date());
        window.gtag('config', '${GOOGLE_ADS_ID}');
        window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        window.gtag('config', '${ADDITIONAL_GA_MEASUREMENT_ID}', { send_page_view: true });
        window.gtag('config', '${GOOGLE_ADS_PHONE_CONVERSION_ID}', {
          phone_conversion_number: '${PHONE_NUMBER}'
        });
      };

      window.loadSecureLiftsGoogleTags = loadTags;
      ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (eventName) {
        window.addEventListener(eventName, loadTags, { once: true, passive: true });
      });
    })();
  `;

  return (
    <html lang="en">
      <body className="antialiased pb-24">
        <BusinessAuthoritySchema />
        <script
          id="securelifts-deferred-google-tags"
          dangerouslySetInnerHTML={{ __html: deferredGoogleTags }}
        />

        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCTA />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a0d03bb0732dcf288113a4b"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
