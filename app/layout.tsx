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
const GOOGLE_ADS_LEAD_FORM_CONVERSION_ID = "AW-17481132065/F_m9CKXmkfQbEKHQ049B";
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

      var loaded = false;
      var tagPromise = null;
      var loadTags = function () {
        if (tagPromise) return tagPromise;

        tagPromise = new Promise(function (resolve) {
          if (loaded) {
            resolve();
            return;
          }

          loaded = true;
          window.__secureLiftsGoogleTagsReady = true;

          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}';
          script.onload = function () { resolve(); };
          script.onerror = function () { resolve(); };
          document.head.appendChild(script);

          window.gtag('js', new Date());
          window.gtag('config', '${GOOGLE_ADS_ID}');
          window.gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
          window.gtag('config', '${ADDITIONAL_GA_MEASUREMENT_ID}', { send_page_view: true });
          window.gtag('config', '${GOOGLE_ADS_PHONE_CONVERSION_ID}', {
            phone_conversion_number: '${PHONE_NUMBER}'
          });
        });

        return tagPromise;
      };

      var trackConversion = function (sendTo, options) {
        return loadTags().then(function () {
          return new Promise(function (resolve) {
            var finished = false;
            var finish = function () {
              if (finished) return;
              finished = true;
              resolve(true);
            };

            window.setTimeout(finish, 900);
            window.gtag('event', 'conversion', Object.assign({
              send_to: sendTo,
              value: 50,
              currency: 'USD',
              transport_type: 'beacon',
              event_callback: finish
            }, options || {}));
          });
        });
      };

      window.loadSecureLiftsGoogleTags = loadTags;
      window.trackSecureLiftsPhoneConversion = function (label) {
        return loadTags().then(function () {
          window.gtag('event', 'phone_click', {
            event_category: 'lead',
            event_label: label || 'phone_click',
            value: 50,
            currency: 'USD'
          });

          return trackConversion('${GOOGLE_ADS_PHONE_CONVERSION_ID}');
        });
      };
      window.trackSecureLiftsLeadConversion = function (service) {
        return loadTags().then(function () {
          window.gtag('event', 'generate_lead', {
            event_category: 'lead',
            event_label: service || 'Quick lead form request',
            value: 50,
            currency: 'USD'
          });

          return trackConversion('${GOOGLE_ADS_LEAD_FORM_CONVERSION_ID}');
        });
      };

      document.addEventListener('click', function (event) {
        var target = event.target;
        var element = target && target.nodeType === 1 ? target : target && target.parentElement;
        var anchor = element && element.closest ? element.closest('a[href^="tel:"]') : null;
        if (!anchor || anchor.dataset.secureLiftsPhoneTracking === 'active') return;

        event.preventDefault();
        anchor.dataset.secureLiftsPhoneTracking = 'active';

        var href = anchor.href;
        var label = anchor.getAttribute('data-campaign') || anchor.textContent || 'phone_click';
        window.trackSecureLiftsPhoneConversion(label.trim()).finally(function () {
          window.location.href = href;
          window.setTimeout(function () {
            delete anchor.dataset.secureLiftsPhoneTracking;
          }, 1000);
        });
      }, true);

      ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(function (eventName) {
        window.addEventListener(eventName, loadTags, { once: true, passive: true });
      });
    })();
  `;

  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLKNM4LB');`,
          }}
        />
      </head>
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
