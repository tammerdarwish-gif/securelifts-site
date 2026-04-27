import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import StickyCTA from "./components/StickyCTA";
import Script from "next/script";

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-NRWSY3V29J"
  strategy="afterInteractive"
/>

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
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
      {/* GTM noscript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NRWSY3V29J"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <SiteHeader />
      {children}
      <StickyCTA />
    </body>
  </html>
);
}