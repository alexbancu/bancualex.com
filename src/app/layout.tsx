import type { Metadata } from "next";
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
  title: "Alex Bancu — Software Engineer, Dad, Writer",
  description:
    "Software engineer figuring things out in public. Writing about overthinking, decisions, and getting unstuck.",
  metadataBase: new URL("https://bancualex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Bancu — Software Engineer, Dad, Writer",
    description:
      "Software engineer figuring things out in public. Writing about overthinking, decisions, and getting unstuck.",
    url: "https://bancualex.com",
    siteName: "Alex Bancu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Bancu — Software Engineer, Dad, Writer",
    description:
      "Software engineer figuring things out in public. Writing about overthinking, decisions, and getting unstuck.",
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
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="LpkFzXV8AJVyU0yooxmwxA"
          async
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
