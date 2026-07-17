import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Scene from "@/components/canvas/Scene";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Abdelrahman Shehata | Dental Student & Entrepreneur",
  description: "DDS Candidate, Innovator, and Business Systems Architect.",
};

export const viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "antialiased selection:bg-accent selection:text-black")}>
        <SmoothScroll>
          <Scene />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
