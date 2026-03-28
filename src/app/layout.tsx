import type { Metadata } from "next";
import { Righteous, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundLines from "./components/BackgroundLines";

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const siteUrl = "https://tedbramsy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edward D. Abrams | Full Stack Developer",
    template: "%s | Edward D. Abrams",
  },
  description:
    "Portfolio of Edward D. Abrams — Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, .NET, cloud-native data architecture, and public API design.",
  keywords: [
    "Edward Abrams",
    "full stack developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Node.js",
    ".NET developer",
    "MongoDB",
    "cloud-native",
    "API design",
    "portfolio",
    "Metro Detroit",
  ],
  authors: [{ name: "Edward D. Abrams" }],
  creator: "Edward D. Abrams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Edward D. Abrams — Full Stack Developer",
    title: "Edward D. Abrams | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, .NET, cloud-native data architecture, and public API design.",
  },
  twitter: {
    card: "summary",
    title: "Edward D. Abrams | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, .NET, cloud-native data architecture, and public API design.",
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
className={`${righteous.variable} ${spaceGrotesk.variable} antialiased text-gray-900 min-h-screen flex flex-col`}
        style={{ backgroundColor: '#fcfbf8' }}
      >
        <BackgroundLines />
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
