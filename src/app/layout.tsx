import type { Metadata } from "next";
import { Righteous, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Edward D. Abrams | Software Engineer Portfolio",
  description:
    "Portfolio of Edward D. Abrams — Software Developer III specializing in cloud-native data architecture, public API design, and React/Next.js product development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${lora.variable} antialiased bg-blue-950 text-white min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
