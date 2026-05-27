import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  pathname: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} bg-background text-foreground antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
