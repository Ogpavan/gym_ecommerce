import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { suppleroSans } from "@/lib/fonts";

const proteinCategoryLinks = [
  "Protein Powders",
  "Plant Based Protein",
  "Protein Bars",
  "Protein Shake And Takes",
  "Protein Shots",
] as const;

const recoveryCategoryLinks = [
  "Repair Shots",
  "Recovery Shake And Takes",
  "Recovery Powder",
  "Plant Based Protein",
  "Protein Bars",
] as const;

const vitaminCategoryLinks = [
  "Vitamin D3",
  "Daily Multivitamin",
  "Daily Omega-3",
  "Selenium",
  "Chromium",
] as const;

const energyCategoryLinks = [
  "Xplode Shots",
  "Energy Gels",
  "Hydration",
  "Beta-Alanine",
  "Creatine Monohydrate",
] as const;

const products = [
  {
    name: "Optimum Nutrition Gold Standard Pre Advanced",
    price: "₹5,799",
    image: "/images/protein-product-1.webp",
    imageClass: "h-[210px] w-[210px] top-[36px]",
    rating: "active",
  },
  {
    name: "Redcon1 Total War Pre-Workout 30 Servings",
    price: "₹2,179",
    image: "/images/protein-product-2.webp",
    imageClass: "h-[194px] w-[194px] top-[54px]",
    rating: "muted",
  },
  {
    name: "Hi-Tech Pharmaceuticals Arimistane Cycle",
    price: "₹2,099",
    image: "/images/protein-product-3.webp",
    imageClass: "h-[196px] w-[196px] top-[52px]",
    rating: "active",
  },
  {
    name: "CarbRite Chocolate Mug Cake Mix 468g",
    price: "₹5,699",
    image: "/images/protein-product-4.webp",
    imageClass: "h-[190px] w-[190px] top-[56px]",
    rating: "muted",
  },
] as const;

const promoBanners = [
  {
    eyebrow: "What's hot",
    title: (
      <>
        Best-selling
        <br />
        Protein Products
      </>
    ),
    offer: "Up to 50% off",
    image: "/images/promo-best-selling.webp",
    imageAlt: "Best-selling protein products promotion",
  },
  {
    eyebrow: "Clearance",
    title: (
      <>
        The fully loaded
        <br />
        Power Whey
      </>
    ),
    offer: "From ₹3,799",
    image: "/images/promo-power-whey.webp",
    imageAlt: "Power Whey clearance promotion",
  },
] as const;

function Rating({ tone }: { tone: "active" | "muted" }) {
  return (
    <div className="flex items-center gap-[1px]" aria-label="Product rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-[14px] w-[14px] fill-current stroke-0",
            tone === "active" ? "text-[#55c866]" : "text-[#d5d5d5]"
          )}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="relative h-[280px] overflow-hidden bg-white">
      <Link href="#" className="group block h-full" aria-label={product.name}>
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full bg-[#f2cb1f] transition-transform duration-500 ease-out group-hover:translate-y-0"
          aria-hidden="true"
        />
        <h3 className="absolute left-[30px] right-[22px] top-[18px] z-10 mb-[10px] line-clamp-2 min-h-[40px] text-left text-[14px] font-bold capitalize leading-[20px] tracking-normal text-black">
          {product.name}
        </h3>
        <div className={cn("absolute left-1/2 z-10 -translate-x-1/2", product.imageClass)}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="180px"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[14px] left-[30px] z-10">
          <Rating tone={product.rating} />
          <p className="mt-[6px] text-[17px] font-[900] leading-none tracking-[-0.04em] text-black">
            {product.price}
          </p>
        </div>
        <span className="group/add absolute bottom-0 right-0 z-20 flex h-[60px] w-[60px] items-center overflow-hidden bg-[#f0f0f0] text-black transition-[width,background-color,color] duration-300 ease-out hover:w-[172px] hover:bg-[#171d23] hover:text-white">
          <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center">
            <Plus className="h-[19px] w-[19px] stroke-[2.2]" />
          </span>
          <span className="whitespace-nowrap text-[12px] font-[900] uppercase tracking-normal opacity-0 transition-opacity duration-200 group-hover/add:opacity-100">
            Add To Cart
          </span>
        </span>
      </Link>
    </article>
  );
}

function CategoryPanel({
  image,
  imageAlt,
  title,
  links,
  imagePosition = "left",
}: {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  links: readonly string[];
  imagePosition?: "left" | "right";
}) {
  const showImageRight = imagePosition === "right";

  return (
    <div className="grid overflow-hidden bg-white md:grid-cols-2">
      <Link
        href="#"
        className={cn(
          "relative block h-[590px] overflow-hidden bg-[#111111]",
          showImageRight && "md:order-2"
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="315px"
          className="object-cover"
        />
      </Link>

      <div
        className={cn(
          "relative h-[590px] bg-white px-[40px] pt-[38px]",
          showImageRight && "md:order-1"
        )}
      >
        <h2 className="max-w-[230px] text-[40px] font-[900] leading-[1.02] tracking-[-0.055em] text-black">
          {title}
        </h2>

        <ul className="mt-[27px]">
          {links.map((item) => (
            <li key={item} className="border-b border-[#e1e1e1]">
              <Link
                href="#"
                className="flex min-h-[51px] items-center text-[14px] font-[500] leading-tight tracking-[-0.012em] text-[#4f5560] transition-colors hover:text-[#f2cb1f]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="absolute bottom-[59px] left-[40px] inline-flex h-[52px] w-[150px] items-center justify-center border border-black bg-white text-[12px] font-[900] uppercase tracking-[-0.025em] text-black transition-colors hover:bg-black hover:text-white"
        >
          View All
          <span className="ml-[18px] text-[16px] leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="grid gap-[30px] md:grid-cols-2">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

function PromoBanner({ banner }: { banner: (typeof promoBanners)[number] }) {
  return (
    <article className="group relative h-[250px] overflow-hidden bg-white">
      <Image
        src={banner.image}
        alt={banner.imageAlt}
        fill
        sizes="(min-width: 1320px) 630px, (min-width: 768px) calc((100vw - 78px) / 2), calc(100vw - 48px)"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="relative z-10 flex h-full max-w-[62%] flex-col justify-center pl-[40px] pr-4">
        <p className="text-[12px] font-[700] leading-none tracking-normal text-white sm:text-[14px]">
          {banner.eyebrow}
        </p>
        <h3 className="mt-[10px] text-[22px] font-[900] leading-[1.08] tracking-[-0.035em] text-white sm:mt-[14px] sm:text-[30px] sm:tracking-[-0.045em]">
          {banner.title}
        </h3>
        <p className="mt-[10px] text-[14px] font-[700] leading-none tracking-normal text-[#f2cb1f] sm:mt-[12px] sm:text-[18px]">
          {banner.offer}
        </p>
        <Link
          href="#"
          className="mt-[24px] inline-flex h-[44px] w-[135px] items-center justify-center border border-white/35 bg-white/20 text-[12px] font-[900] uppercase tracking-normal text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:bg-white/30"
        >
          Shop Now
          <ArrowRight className="ml-[12px] h-[14px] w-[14px] stroke-[3]" />
        </Link>
      </div>
    </article>
  );
}

function PromoBannerRow() {
  return (
    <div className="grid gap-[30px] xl:grid-cols-2">
      {promoBanners.map((banner) => (
        <PromoBanner key={banner.eyebrow} banner={banner} />
      ))}
    </div>
  );
}

export function ProteinCategorySection() {
  return (
    <section
      className={cn(
        suppleroSans.className,
        "bg-[#f5f5f5] px-6 py-[64px] lg:px-8"
      )}
      aria-label="Protein and recovery products"
    >
      <div className="mx-auto grid max-w-[1290px] gap-[70px]">
        <div className="grid gap-[30px] xl:grid-cols-[630px_630px]">
          <CategoryPanel
            image="/images/category-whey.webp"
            imageAlt="Whey Protein category"
            title={
              <>
                Whey
                <br />
                Protein
              </>
            }
            links={proteinCategoryLinks}
          />

          <ProductGrid />
        </div>

        <div className="grid gap-[30px] xl:grid-cols-[630px_630px]">
          <ProductGrid />

          <CategoryPanel
            image="/images/category-recovery.webp"
            imageAlt="Recovery and Repair category"
            title={
              <>
                Recovery &amp;
                <br />
                Repair
              </>
            }
            links={recoveryCategoryLinks}
            imagePosition="right"
          />
        </div>

        <PromoBannerRow />

        <div className="grid gap-[30px] xl:grid-cols-[630px_630px]">
          <CategoryPanel
            image="/images/category-vitamins.webp"
            imageAlt="Vitamins and Minerals category"
            title={
              <>
                Vitamins &amp;
                <br />
                Minerals
              </>
            }
            links={vitaminCategoryLinks}
          />

          <ProductGrid />
        </div>

        <div className="grid gap-[30px] xl:grid-cols-[630px_630px]">
          <ProductGrid />

          <CategoryPanel
            image="/images/category-energy.webp"
            imageAlt="Energy and Endurance category"
            title={
              <>
                Energy &amp;
                <br />
                Endurance
              </>
            }
            links={energyCategoryLinks}
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
}
