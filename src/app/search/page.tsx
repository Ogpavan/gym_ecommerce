"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

const products = [
  {
    name: "Optimum Nutrition Gold Standard Pre Advanced",
    category: "Protein",
    price: "₹5,799",
    image: "/images/protein-product-1.webp",
  },
  {
    name: "Redcon1 Total War Pre-Workout 30 Servings",
    category: "Energy",
    price: "₹2,179",
    image: "/images/protein-product-2.webp",
  },
  {
    name: "Hi-Tech Pharmaceuticals Arimistane Cycle",
    category: "Recovery",
    price: "₹2,099",
    image: "/images/protein-product-3.webp",
  },
  {
    name: "CarbRite Chocolate Mug Cake Mix 468g",
    category: "Food",
    price: "₹5,699",
    image: "/images/protein-product-4.webp",
  },
  {
    name: "Intelligent Wool Bottle",
    category: "Accessories",
    price: "₹5,699",
    image: "/images/product-1.webp",
  },
  {
    name: "Aerodynamic Silk Shirt",
    category: "Apparel",
    price: "₹5,699",
    image: "/images/product-4.webp",
  },
  {
    name: "Sleek Wool Bench",
    category: "Equipment",
    price: "₹5,699",
    image: "/images/product-3.webp",
  },
  {
    name: "Enormous Wooden Pants",
    category: "Apparel",
    price: "₹5,699",
    image: "/images/product-2.webp",
  },
  {
    name: "Small Silk Bottle",
    category: "Accessories",
    price: "₹5,699",
    image: "/images/product-5.webp",
  },
  {
    name: "Enormous Paper Table",
    category: "Home",
    price: "₹5,699",
    image: "/images/product-6.webp",
  },
  {
    name: "Incredible Rubber Coat",
    category: "Apparel",
    price: "₹5,699",
    image: "/images/product-7.webp",
  },
  {
    name: "Gorgeous Linen Chair",
    category: "Home",
    price: "₹5,699",
    image: "/images/product-8.webp",
  },
  {
    name: "Power Whey",
    category: "Protein",
    price: "₹3,799",
    image: "/images/promo-power-whey.webp",
  },
] as const;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!query) return products;
    return products.filter((product) =>
      `${product.name} ${product.category}`.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <main className="bg-[#f5f5f5] px-4 py-10 lg:px-8">
      <div className="mx-auto max-w-[1290px]">
        <div className="flex items-center gap-3 border-b border-[#d9d9d9] pb-5">
          <Search className="h-5 w-5 stroke-[2] text-black" />
          <h1 className="text-[28px] font-[900] leading-none tracking-[-0.035em] text-black">
            Search Results
          </h1>
        </div>

        <div className="mt-6 max-w-[540px]">
          <form action="/search" method="get" className="flex h-[48px] overflow-hidden border border-[#d9d9d9] bg-white">
            <input
              name="q"
              defaultValue={searchParams.get("q") ?? ""}
              placeholder="Search products..."
              className="h-full flex-1 border-0 px-4 text-[15px] outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#f2cb1f] px-5 text-[12px] font-[900] uppercase tracking-normal text-black"
            >
              Search
            </button>
          </form>
        </div>

        <p className="mt-6 text-[14px] font-[600] tracking-normal text-[#6d6d6d]">
          {query ? `Showing results for "${searchParams.get("q")}"` : "Showing all products"}
        </p>

        <div className="mt-8 grid gap-[24px] sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article key={product.name} className="overflow-hidden bg-white">
              <div className="relative h-[260px] bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-[12px] font-[700] uppercase tracking-[0.2em] text-[#8a8d92]">
                  {product.category}
                </p>
                <h2 className="mt-3 min-h-[40px] text-[15px] font-[900] leading-[1.35] tracking-normal text-black">
                  {product.name}
                </h2>
                <p className="mt-4 text-[16px] font-[900] leading-none text-black">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
