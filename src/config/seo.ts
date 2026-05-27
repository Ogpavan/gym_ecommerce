import { siteConfig } from "@/config/site";

export const seoConfig = {
  defaultTitle: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  keywords: [
    "ecommerce",
    "online store",
    "shopping",
    "next.js",
    "typescript",
  ],
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image" as const,
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
} as const;
