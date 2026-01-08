import type { Metadata } from "next";
import { SUSE, Inter } from "next/font/google";
import "./globals.css";

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UTECHIT • Portfolio",
  description: "Designed and developed by Utechit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${suse.variable} font-sans h-full antialiased`}>{children}</body>
    </html>
  );
}
