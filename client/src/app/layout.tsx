import type { Metadata } from "next";
// FONT FROM NEXT/FONT
import {Inter} from "next/font/google"

// CSS
import "@/style/globals.css";

// HEADER AND FOOTER
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// FONT USED IN SITE
const inter = Inter({
  variable : "--font-inter",
  weight : ["300", "800"],
  display : "swap",
  subsets : ["latin"],
})

// METADATA FOR SEO
export const metadata: Metadata = {
  title: "Custom Boxes with Logo - Premium Quality & Fast Delivery | CPP Boxes",
  description: "High-quality custom boxes with logos at CPP Boxes—trusted US packaging experts. Choose from a variety of styles, finishes, and fast shipping options. Start customizing today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
