import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type MetadataInput = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
};

export function createMetadata({
  title,
  description = seoConfig.description,
  pathname = "/",
  image = siteConfig.ogImage,
  noIndex = false,
  canonical,
}: MetadataInput = {}): Metadata {
  const canonicalUrl = canonical ?? absoluteUrl(pathname);
  const resolvedTitle = title ?? seoConfig.defaultTitle;

  return {
    metadataBase: new URL(siteConfig.url),
    title: title ?? {
          default: seoConfig.defaultTitle,
          template: seoConfig.titleTemplate,
        },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: seoConfig.openGraph.type,
      locale: seoConfig.openGraph.locale,
      url: canonicalUrl,
      siteName: seoConfig.openGraph.siteName,
      title: resolvedTitle,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: seoConfig.twitter.card,
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site,
      title: resolvedTitle,
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
        },
  };
}
