import Image from "next/image";
import Link from "next/link";
import { Globe, Package, RotateCcw, Truck } from "lucide-react";

import { cn } from "@/lib/utils";

const images = {
  leftBg: "/images/hero-bg-1.webp",
  leftProduct: "/images/hero-product-1.webp",
  topPromo: "/images/hero-promo-1.webp",
  bottomPromo: "/images/hero-promo-2.webp",
  rightBg: "/images/hero-bg-2.webp",
  rightProduct: "/images/hero-product-2.webp",
} as const;

function Cta({
  variant = "muted",
  className,
}: {
  variant?: "yellow" | "muted";
  className?: string;
}) {
  return (
    <Link
      href="#"
      className={cn(
        "inline-flex h-[55px] min-w-[160px] items-center justify-center rounded-none text-[12px] font-black uppercase tracking-normal",
        variant === "yellow"
          ? "bg-[#f2cb1f] text-black"
          : "bg-white/20 text-white",
        className
      )}
    >
      Shop Now
      <span className="ml-4 text-[16px] leading-none">→</span>
    </Link>
  );
}

function BackgroundImage({
  src,
  alt,
  sizes,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={cn("object-cover", className)}
      priority={eager}
      fetchPriority={eager ? "high" : "auto"}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function HeroShowcase() {
  return (
    <section className="bg-white px-6 pb-6 pt-[30px] lg:px-8" aria-label="Hero promotions">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-[30px] xl:grid-cols-[minmax(0,2.05fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <article className="relative h-[406px] overflow-hidden bg-[#551b18]">
            <BackgroundImage
              src={images.leftBg}
              alt="Refreshing flavors collection banner"
              sizes="638px"
              className="object-cover"
              eager
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute right-[42px] top-[58px] h-[295px] w-[275px]">
              <Image
                src={images.leftProduct}
                alt=""
                fill
                sizes="275px"
                priority
                fetchPriority="high"
                className="object-contain"
              />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-center pl-[90px] pr-[250px]">
              <h1 className="text-[58px] font-black leading-[1.02] tracking-normal text-white">
                Refreshing
                <br />
                flavors
              </h1>
              <p className="mt-[12px] text-[14px] font-black uppercase leading-[1.2] tracking-normal text-white">
                With a powerful synergistic impact
              </p>
              <p className="mt-[22px] text-[29px] font-medium leading-none tracking-normal text-[#f2cb1f]">
                Starting At $199.00
              </p>
              <Cta variant="yellow" className="mt-[24px]" />
            </div>
          </article>

          <div className="grid h-[406px] gap-[30px]">
            <article className="relative h-[187px] overflow-hidden bg-[#171717]">
              <BackgroundImage
                src={images.topPromo}
                alt="Boost your immunity banner"
                sizes="303px"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 flex h-full flex-col justify-center pl-[63px] pr-[110px]">
                <p className="text-[14px] leading-none tracking-normal text-white">
                  Don&apos;t Miss Out
                </p>
                <h2 className="mt-[12px] text-[24px] font-black leading-[1.08] tracking-normal text-white">
                  <span className="block whitespace-nowrap">Boost your</span>
                  <span className="block">immunity</span>
                </h2>
                <p className="mt-[12px] text-[20px] font-medium leading-none tracking-normal text-[#f2cb1f]">
                  50% Off
                </p>
                <Cta className="mt-[18px] h-[37px] min-w-[119px] text-[11px]" />
              </div>
            </article>

            <article className="relative h-[189px] overflow-hidden bg-[#0d541e]">
              <BackgroundImage
                src={images.bottomPromo}
                alt="Save up to half price banner"
                sizes="303px"
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 flex h-full flex-col justify-center pl-[108px] pr-[28px]">
                <p className="text-[14px] leading-none tracking-normal text-white">
                  Limited Offer
                </p>
                <h2 className="mt-[14px] text-[27px] font-black leading-[1.05] tracking-normal text-white">
                  Save up to
                  <br />
                  half price
                </h2>
                <Cta className="mt-[24px] h-[37px] min-w-[119px] text-[11px]" />
              </div>
            </article>
          </div>

          <article className="relative h-[406px] overflow-hidden bg-[#0d4692]">
            <BackgroundImage
              src={images.rightBg}
              alt="Choice of champions banner"
              sizes="303px"
            />
            <div className="absolute left-1/2 top-[32px] h-[165px] w-[150px] -translate-x-1/2">
              <Image
                src={images.rightProduct}
                alt=""
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-[45px] pt-[86px] text-center">
              <h2 className="text-[29px] font-black leading-[1.02] tracking-normal text-white">
                The Choice of
                <br />
                Champions
              </h2>
              <p className="mt-[12px] text-[20px] font-medium leading-none tracking-normal text-[#f2cb1f]">
                10% Off first order
              </p>
              <Cta className="mt-[24px] h-[37px] min-w-[119px] text-[11px]" />
            </div>
          </article>
        </div>

        <div className="relative mt-[48px] grid gap-8 py-[34px] lg:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              body: "On all orders over $50 delivered within Australia.",
            },
            {
              icon: Globe,
              title: "International Delivery",
              body: "International delivery available.",
            },
            {
              icon: RotateCcw,
              title: "Easy Returns",
              body: "We make exchanging and returning simple.",
            },
            {
              icon: Package,
              title: "Delivery Insurance",
              body: "Insurance on shipping included.",
            },
          ].map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-[16px] px-2 text-center lg:flex-row lg:items-start lg:gap-[28px] lg:text-left">
              <feature.icon className="h-[40px] w-[40px] shrink-0 stroke-[1.8] text-[#f2cb1f] lg:mt-[8px]" />
              <div>
                <p className="text-[14px] font-black leading-none tracking-normal text-black">
                  {feature.title}
                </p>
                <p className="mt-[9px] max-w-[185px] text-[14px] leading-[1.45] tracking-normal text-[#5f6673]">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
