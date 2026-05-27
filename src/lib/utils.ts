import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stripTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function absoluteUrl(pathname = "/") {
  const baseUrl = stripTrailingSlash(siteConfig.url);
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `${baseUrl}${path === "/" ? "" : path}`;
}
