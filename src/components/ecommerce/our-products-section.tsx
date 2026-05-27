"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Star } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { suppleroSans } from "@/lib/fonts";

const productTabs = [
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "featured", label: "Featured" },
  { id: "best-seller", label: "Best Seller" },
] as const;

type ProductTab = (typeof productTabs)[number]["id"];
type RatingTone = "active" | "muted";

type Product = {
  name: string;
  image: string;
  rating: RatingTone;
  price: string;
  compareAtPrice: string;
};

const productsByTab: Record<ProductTab, Product[]> = {
  "new-arrivals": [
    {
      name: "Intelligent Wool Bottle",
      image: "/images/product-1.webp",
      rating: "active",
      price: "₹5,699",
      compareAtPrice: "₹9,099",
    },
    {
      name: "Aerodynamic Silk Shirt",
      image: "/images/product-4.webp",
      rating: "muted",
      price: "₹4,299",
      compareAtPrice: "₹6,899",
    },
    {
      name: "Sleek Wool Bench",
      image: "/images/product-3.webp",
      rating: "active",
      price: "₹6,099",
      compareAtPrice: "₹9,799",
    },
    {
      name: "Intelligent Wool Bottle",
      image: "/images/product-2.webp",
      rating: "active",
      price: "₹5,699",
      compareAtPrice: "₹9,099",
    },
  ],
  featured: [
    {
      name: "Premium Recovery Stack",
      image: "/images/product-5.webp",
      rating: "active",
      price: "₹7,499",
      compareAtPrice: "₹10,499",
    },
    {
      name: "Daily Strength Blend",
      image: "/images/product-6.webp",
      rating: "active",
      price: "₹3,899",
      compareAtPrice: "₹5,999",
    },
    {
      name: "Performance Energy Pack",
      image: "/images/product-7.webp",
      rating: "muted",
      price: "₹4,999",
      compareAtPrice: "₹7,299",
    },
    {
      name: "Elite Hydration Formula",
      image: "/images/product-8.webp",
      rating: "active",
      price: "₹2,799",
      compareAtPrice: "₹4,299",
    },
  ],
  "best-seller": [
    {
      name: "Daily Strength Blend",
      image: "/images/product-6.webp",
      rating: "active",
      price: "₹3,899",
      compareAtPrice: "₹5,999",
    },
    {
      name: "Intelligent Wool Bottle",
      image: "/images/product-1.webp",
      rating: "active",
      price: "₹5,699",
      compareAtPrice: "₹9,099",
    },
    {
      name: "Elite Hydration Formula",
      image: "/images/product-8.webp",
      rating: "active",
      price: "₹2,799",
      compareAtPrice: "₹4,299",
    },
    {
      name: "Sleek Wool Bench",
      image: "/images/product-3.webp",
      rating: "active",
      price: "₹6,099",
      compareAtPrice: "₹9,799",
    },
  ],
};

function Rating({ tone }: { tone: RatingTone }) {
  return (
    <div className="flex items-center gap-[1px]" aria-label="Product rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-[14px] w-[14px] fill-current stroke-0",
            tone === "active" ? "text-[#55c866]" : "text-[#d3d3d3]"
          )}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white">
      <Link href="#" className="block" aria-label={product.name}>
        <div className="relative h-[280px] overflow-hidden">
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full bg-[#f2cb1f] transition-transform duration-500 ease-out group-hover:translate-y-0"
            aria-hidden="true"
          />
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="300px"
            className="relative z-10 object-contain px-[24px] py-[12px] transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="px-[30px] py-[23px]">
          <h3 className="min-h-[40px] text-[14px] font-[900] leading-[20px] tracking-[-0.025em] text-black">
            {product.name}
          </h3>
          <div className="mt-[22px]">
            <Rating tone={product.rating} />
          </div>
        </div>

        <div className="relative h-[62px] border-t border-[#e6e6e6]">
          <div className="flex h-full items-center gap-[10px] px-[30px] pr-[72px]">
            <span className="text-[18px] font-[900] leading-none tracking-normal text-[#ff4f4f]">
              {product.price}
            </span>
            <span className="text-[14px] font-[700] leading-none tracking-normal text-[#a7a7a7] line-through">
              {product.compareAtPrice}
            </span>
          </div>
          <span className="group/add absolute bottom-0 right-0 flex h-[62px] w-[60px] items-center overflow-hidden bg-[#f0f0f0] text-black transition-[width,background-color,color] duration-300 ease-out hover:w-[172px] hover:bg-[#171d23] hover:text-white">
            <span className="flex h-[62px] w-[60px] shrink-0 items-center justify-center">
              <Plus className="h-[19px] w-[19px] stroke-[2.2]" />
            </span>
            <span className="whitespace-nowrap text-[12px] font-[900] uppercase tracking-normal opacity-0 transition-opacity duration-200 group-hover/add:opacity-100">
              Add To Cart
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function OurProductsSection() {
  const [activeTab, setActiveTab] = useState<ProductTab>("new-arrivals");
  const visibleProducts = productsByTab[activeTab];

  return (
    <section
      className={cn(
        suppleroSans.className,
        "bg-[#f5f5f5] px-6 pb-[118px] pt-[76px] lg:px-8"
      )}
      aria-label="Our products"
    >
      <div className="mx-auto max-w-[1290px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:items-center md:justify-between">
          <h2 className="text-[40px] font-[900] leading-none tracking-[-0.035em] text-black">
            Our Products
          </h2>
          <div
            className="flex flex-wrap items-center gap-[4px]"
            role="tablist"
            aria-label="Product categories"
          >
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`product-tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls="product-tab-panel"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "h-[36px] px-[14px] text-[12px] font-[900] uppercase tracking-[-0.025em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2cb1f]",
                  activeTab === tab.id
                    ? "bg-[#f2cb1f] text-black"
                    : "bg-transparent text-[#858585] hover:text-black"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id="product-tab-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${activeTab}`}
          className="mt-[32px] grid gap-[30px] md:grid-cols-2 xl:grid-cols-4"
        >
          {visibleProducts.map((product, index) => (
            <ProductCard key={`${product.name}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
