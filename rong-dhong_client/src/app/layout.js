import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "রংঢং",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">



      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENCE_ID}`}
          crossOrigin="anonymous"></Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
