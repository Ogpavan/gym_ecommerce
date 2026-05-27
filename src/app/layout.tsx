import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/metadata";

import "./globals.css";

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
      <body className="bg-background text-foreground antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
