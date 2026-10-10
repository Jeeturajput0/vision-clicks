import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vision Clicks | Powerful Software Solutions That Scale",
  description:
    "Vision Clicks provides custom software development, enterprise applications, mobile solutions, web development and digital transformation services.",
  keywords: [
    "software development",
    "enterprise applications",
    "mobile apps",
    "web development",
    "digital transformation",
    "Vision Clicks",
  ],
  authors: [{ name: "Vision Clicks" }],
  openGraph: {
    title: "Vision Clicks | Powerful Software Solutions That Scale",
    description:
      "Custom software development, enterprise applications, mobile solutions and digital transformation services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${inter.variable} ${display.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-[#f7f8fc] font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
