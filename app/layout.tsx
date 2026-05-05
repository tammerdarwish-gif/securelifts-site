import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import StickyCTA from "./components/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = "G-NRWSY3V29J";
const GOOGLE_ADS_ID = "AW-17481132065";
const GOOGLE_ADS_PHONE_CONVERSION_ID = "AW-17481132065/F22OCPvmkfQbEKHQ049B";
const PHONE_NUMBER = "(866) 828-1818";

export const metadata: Metadata = {
  metadataBase: new URL("https://securelifts.com"),
  title: "SecureLifts",
  description: "SecureLifts garage door services in South Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics-and-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true
            });
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        <Script id="google-ads-phone-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            if (typeof window.gtag === 'function') {
              window.gtag('config', '${GOOGLE_ADS_PHONE_CONVERSION_ID}', {
                phone_conversion_number: '${PHONE_NUMBER}'
              });
            }
          `}
        </Script>

        <SiteHeader />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}