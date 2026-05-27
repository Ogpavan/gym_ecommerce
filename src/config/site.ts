import { env } from "@/lib/env";

export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  shortName: "IronRoot",
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
  url: env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, ""),
  locale: "en-US",
  twitterHandle: env.NEXT_PUBLIC_TWITTER_HANDLE,
  ogImage: "/og-default.png",
} as const;
