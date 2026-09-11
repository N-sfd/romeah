import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Romeah — Quiet Luxury",
    template: "%s",
  },
  description:
    "Modern femininity interpreted through timeless form, refined detail and effortless elegance.",
  metadataBase: new URL("https://romeah.com"),
  openGraph: {
    title: "Romeah — Quiet Luxury",
    description:
      "Italian leather handbags, clothing, travel and jewelry for a considered wardrobe.",
    siteName: "Romeah",
    type: "website",
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
