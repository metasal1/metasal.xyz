import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Metasal - community builder, entrepreneur, full stack developer ",
  description: "Developer relations, community building, and product development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-EGCTLS6GF5" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EGCTLS6GF5');
      `}</Script>
      <Script defer src="https://analytics.tokenshit.com/script.js" data-website-id="59186106-2985-4073-9b4f-cc448bc7058f"></Script>
    </html>
  );
}
