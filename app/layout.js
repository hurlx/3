import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import ClientBackButtonWrapper from "@/components/ClientBackButtonWrapper";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RiZe",
  description:
    "Discover stylish and high-quality bags crafted with care. Perfect for daily use, travel, or gifts — designed to suit every personality.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      > 
      
      <NavBar />
        <main className="relative z-10">
          <ClientBackButtonWrapper />
          {children}
          <Footer />
        </main>

        <LenisWrapper />
      </body>
    </html>
  );
}
