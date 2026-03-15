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

const siteUrl = "https://edward-abrams-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edward D. Abrams | Full Stack Software Engineer",
    template: "%s | Edward D. Abrams",
  },
  description:
    "Portfolio of Edward D. Abrams — Full Stack Software Developer specializing in C#, .NET, TypeScript, React, Next.js, Azure, and cloud-native data architecture. Based in Detroit.",
  keywords: [
    "Edward Abrams",
    "Edward D. Abrams",
    "software engineer",
    "full stack developer",
    "React developer",
    "Next.js developer",
    ".NET developer",
    "C# developer",
    "TypeScript developer",
    "Azure",
    "cloud-native",
    "Detroit software engineer",
    "portfolio",
  ],
  authors: [{ name: "Edward D. Abrams" }],
  creator: "Edward D. Abrams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Edward D. Abrams Portfolio",
    title: "Edward D. Abrams | Full Stack Software Engineer",
    description:
      "Full Stack Software Developer specializing in C#, .NET, TypeScript, React, Next.js, Azure, and cloud-native data architecture.",
  },
  twitter: {
    card: "summary",
    title: "Edward D. Abrams | Full Stack Software Engineer",
    description:
      "Full Stack Software Developer specializing in C#, .NET, TypeScript, React, Next.js, Azure, and cloud-native data architecture.",
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
