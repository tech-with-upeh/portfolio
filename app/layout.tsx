import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "./globals.css";

// const smooch = Smooch_Sans({
//   variable: "--font-smooch-sans",
//   subsets: ["latin"],
// });

const suse = SUSE({
  variable: "--font-SUSE-mono",
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
      <body className={`${suse.variable} h-full antialiased`}>{children}</body>
    </html>
  );
}
