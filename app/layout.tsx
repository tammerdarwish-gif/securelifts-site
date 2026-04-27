import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import StickyCTA from "./components/StickyCTA";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24`}>
        {/* Global Base Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRWSY3V29J"
          strategy="afterInteractive"
        />
        
        {/* Configuration for Analytics and Ads */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-NRWSY3V29J');
            gtag('config', 'AW-17481132065');
          `}
        </Script>

        {/* Phone Snippet for Call Tracking */}
        <Script id="google-ads-phone-tracking" strategy="afterInteractive">
          {`
            gtag('config', 'AW-17481132065/F22OCPvmkfQbEKHQ049B', {
              'phone_conversion_number': '(866) 828-1818'
            });
          `}
        </Script>

        <SiteHeader />
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}