import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { BebasNeue } from "./fonts";
import { Toaster } from "react-hot-toast";
import SchrollUp from "@/components/ScrollUp";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pascal is coding - Portfolio",
  description: "Explore my world of coding by checking out my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`bg-base-100 ${BebasNeue.variable}`}>
        <Navbar />
        <SchrollUp />
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
