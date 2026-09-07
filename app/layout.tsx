import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://technova-solutions.vercel.app";
const title = "TechNova Solutions | Empowering Businesses Through Technology";
const description =
  "TechNova Solutions builds scalable digital products and technology solutions spanning web, mobile, cloud, AI, and design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | TechNova Solutions",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "TechNova Solutions",
    images: [
      {
        url: "https://picsum.photos/seed/technova-og/1200/630",
        width: 1200,
        height: 630,
        alt: "TechNova Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://picsum.photos/seed/technova-og/1200/630"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
