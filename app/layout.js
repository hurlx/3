import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import Image from "next/image";

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
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  description:
    "Discover stylish and high-quality bags crafted with care. Perfect for daily use, travel, or gifts — designed to suit every personality.",
    
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
        <div className="relative top-0 left-0 z-[9999] pointer-events-auto w-fit mx-auto right-0">
  <Link href="/">
    <Image
      src="/images/Hight Qulity.png"
      alt="Background Logo"
      className="max-w-[100px] mt-1 object-contain object-top cursor-pointer"
    />
  </Link>
</div>

        <main className="relative z-10">
          <BackButton />
          {children}
          <Footer />
        </main>

        <LenisWrapper />
      </body>
    </html>
  );
}
