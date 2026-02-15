import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) - Google Ads Conversion Tracking */}
        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-11161550773"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11161550773');
            `,
          }}
        />
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4986542893990493"
          crossOrigin="anonymous"
        ></script>
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
