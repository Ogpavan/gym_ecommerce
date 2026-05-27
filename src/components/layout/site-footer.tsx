import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

import { Input } from "@/components/ui/input";

const footerGroups = [
  {
    title: "Customer Service",
    links: ["Informed Sport", "Loyalty points", "Testimonials", "Expert Panel"],
  },
  {
    title: "Information",
    links: ["About us", "Blog", "Check out", "Contact"],
  },
  {
    title: "My Account",
    links: ["My Account", "Contact", "Shopping cart", "Shop"],
  },
  {
    title: "Categories",
    links: ["Protein", "Sports Nutrition", "Weight Loss", "Well-being", "Food & Drink"],
  },
] as const;

const paymentMethods = [
  {
    name: "MasterCard",
    image: "/images/payment-mastercard.svg",
  },
  {
    name: "PayPal",
    image: "/images/payment-paypal.svg",
  },
  {
    name: "AmEx",
    image: "/images/payment-amex.svg",
  },
  {
    name: "Bitcoin",
    image: "/images/payment-bitcoin.svg",
  },
  {
    name: "Visa",
    image: "/images/payment-visa.svg",
  },
] as const;

function SocialIcon({ name }: { name: "facebook" | "youtube" | "twitter" | "instagram" }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 320 512" className="h-[16px] w-[10px]">
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 100 70" className="h-[15px] w-[18px]">
        <path
          fill="currentColor"
          d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z"
        />
      </svg>
    );
  }

  if (name === "twitter") {
    return (
      <svg aria-hidden="true" viewBox="0 0 18 15" className="h-[15px] w-[18px]">
        <path
          fill="currentColor"
          d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="h-[17px] w-[17px]">
      <path
        fill="currentColor"
        d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"
      />
      <path
        fill="currentColor"
        d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#171d23] text-white">
      <div className="bg-[#f2cb1f] px-5 py-[42px] text-black sm:px-6 md:py-[50px] lg:px-8">
        <div className="mx-auto grid max-w-[1290px] items-center justify-items-center gap-[18px] text-center md:grid-cols-[1fr_auto_1fr] md:justify-items-stretch md:gap-6 md:text-left">
          <div className="flex max-w-full items-start justify-center gap-[9px] text-[14px] font-[500] leading-[1.25] sm:text-[15px] md:justify-start md:leading-none">
            <MapPin className="mt-[1px] h-[18px] w-[18px] shrink-0 stroke-[2]" />
            <span className="min-w-0">9066 Green Lake Drive Chevy, MD 20815</span>
          </div>

          <p className="whitespace-nowrap text-center text-[clamp(24px,7vw,30px)] font-[900] leading-none tracking-normal">
            (+84)-1800-33358
          </p>

          <div className="flex max-w-full flex-col items-center gap-[16px] md:flex-row md:flex-wrap md:justify-end md:gap-[22px]">
            <div className="flex max-w-full items-center justify-center gap-[9px] text-[14px] font-[500] leading-[1.25] sm:text-[15px] md:leading-none">
              <Mail className="h-[17px] w-[17px] shrink-0 stroke-[2.2]" />
              <span className="min-w-0 break-all sm:break-normal">contact@example.com</span>
            </div>
            <div className="flex items-center gap-[16px]">
              {(["facebook", "youtube", "twitter", "instagram"] as const).map((social) => (
                <Link
                  key={social}
                  href="#"
                  aria-label={social}
                  className="inline-flex h-[18px] w-[18px] items-center justify-center text-black transition-opacity hover:opacity-70"
                >
                  <SocialIcon name={social} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-[72px] lg:px-8">
        <div className="mx-auto max-w-[1290px]">
          <div className="grid gap-[46px] lg:grid-cols-[1fr_1fr_1fr_1fr_1.35fr]">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[12px] font-[900] uppercase leading-none tracking-[0.32em] text-[#8a8d92]">
                  {group.title}
                </h2>
                <ul className="mt-[30px] grid gap-[17px]">
                  {group.links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-[14px] font-[500] leading-none tracking-normal text-[#8a8d92] transition-colors hover:text-[#f2cb1f]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-[12px] font-[900] uppercase leading-none tracking-[0.32em] text-[#8a8d92]">
                Subscribe Us
              </h2>
              <p className="mt-[30px] text-[14px] font-[500] leading-[1.55] tracking-normal text-[#8a8d92]">
                Sign up for offers and exclusive discounts.
              </p>
              <form className="mt-[25px]" action="#" method="post">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <div className="relative h-[43px] bg-white">
                  <Input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="Email address..."
                    className="h-full rounded-none border-0 bg-white px-[20px] pr-[52px] text-[14px] text-black placeholder:text-[#9a9ca3] focus-visible:ring-0"
                  />
                  <Mail className="pointer-events-none absolute right-[14px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-[2] text-black" />
                </div>
                <button
                  type="submit"
                  className="mt-[10px] inline-flex h-[43px] min-w-[132px] items-center justify-center bg-[#f2cb1f] px-[22px] text-[12px] font-[900] uppercase tracking-normal text-black transition-colors hover:bg-white"
                >
                  Subscribe
                  <ArrowRight className="ml-[18px] h-[14px] w-[14px] stroke-[3]" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-[66px] border-t border-white/10 pt-[44px]">
            <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <Link href="/" className="inline-flex items-center">
                  <Image
                    src="/images/site-logo.webp"
                    alt="Supplero"
                    width={122}
                    height={28}
                    className="h-auto w-[122px] brightness-0 invert"
                  />
                </Link>
                <p className="mt-[24px] text-[13px] font-[500] leading-none tracking-normal text-[#8a8d92]">
                  Copyright (c) 2026. <span className="text-[#f2cb1f]">Ap supplero</span> Powered by Shopify.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[12px]">
                {paymentMethods.map((method) => (
                  <Image
                    key={method.name}
                    src={method.image}
                    alt={method.name}
                    width={74}
                    height={46}
                    unoptimized
                    className="h-[34px] w-auto rounded-[3px] bg-white object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
