import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Max Haslehner",
  description:
    "Max Haslehner, Web Developer & Business Informatics Student from Upper Austria",
  keywords: [
    "Web Developer",
    "Business Informatics Student",
    "Max Haslehner",
  ],
  openGraph: {
    title: "Max Haslehner",
    description:
      "Web Developer & Business Informatics Student from Upper Austria",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
