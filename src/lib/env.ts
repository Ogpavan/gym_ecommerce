import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).default("IronRoot"),
  NEXT_PUBLIC_SITE_DESCRIPTION: z
    .string()
    .min(1)
    .default("High-performance ecommerce storefront."),
  NEXT_PUBLIC_TWITTER_HANDLE: z.string().min(1).default("@ironroot"),
});

export const env = envSchema.parse(process.env);
