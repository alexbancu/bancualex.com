import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
