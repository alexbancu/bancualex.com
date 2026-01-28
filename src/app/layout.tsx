import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Bancu — Software Engineer, Coach & Writer",
  description:
    "The art and science of living well. Coaching, writing, and building for high-performers who want clarity, energy, and direction.",
  metadataBase: new URL("https://bancualex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Bancu — Software Engineer, Coach & Writer",
    description:
      "The art and science of living well. Coaching, writing, and building for high-performers who want clarity, energy, and direction.",
    url: "https://bancualex.com",
    siteName: "Alex Bancu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bancu — Software Engineer, Coach & Writer",
    description:
      "The art and science of living well. Coaching, writing, and building for high-performers who want clarity, energy, and direction.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="LpkFzXV8AJVyU0yooxmwxA"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
