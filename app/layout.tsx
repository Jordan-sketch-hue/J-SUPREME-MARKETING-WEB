import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "J Supreme Marketing | High-Performance Marketing Systems",
  description: "We help brands scale with paid ads, funnels, and conversion-focused strategies. Turn attention into predictable revenue with supreme marketing systems.",
  keywords: "digital marketing, paid ads, marketing funnel, conversion optimization, brand strategy, SEO, paid advertising",
  authors: [{ name: "J Supreme Marketing" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "J Supreme Marketing | High-Performance Marketing Systems",
    description: "Supreme marketing systems that drive real growth.",
    type: "website",
  },
  verification: {
    google: 'YOUR_GOOGLE_ADSENSE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_CLIENT_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
