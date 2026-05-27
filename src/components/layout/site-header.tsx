import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Heart,
  Phone,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

import { CategoryMenu } from "@/components/layout/category-menu";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const verticalCategories = [
  "Protein",
  "Creatine",
  "Diet & Weight Management",
  "Endurance & Energy",
  "Food Products, Meals Snack",
  "Protein Bars & Cookies",
  "Vegan Nutrition",
  "Weight Gainers",
  "Hot Offers",
] as const;

type MainNavItem = {
  label: string;
  href: string;
  active?: boolean;
};

const mainNav: readonly MainNavItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "Shop", href: "#" },
  { label: "Page", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
] as const;

function IconButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 w-8 items-center justify-center text-[#111111] transition-colors hover:text-[#f2cb1f] sm:h-10 sm:w-10"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="relative bg-white text-black">
      <div className="px-4 pt-5 lg:px-8">
        <div className="mx-auto max-w-[1300px] lg:grid lg:grid-cols-[minmax(220px,1fr)_minmax(0,2.65fr)_minmax(220px,1fr)] lg:items-center lg:gap-6">
          <div className="flex justify-center lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/site-logo.webp"
                alt="Ap supplero"
                width={122}
                height={28}
                priority
                className="h-auto w-[122px]"
              />
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-between lg:hidden">
            <div className="flex items-center gap-[17px]">
              <MobileMenu items={mainNav} />
              <Link
                href="/search"
                aria-label="Search"
                className="inline-flex h-9 w-9 items-center justify-center text-black"
              >
                <Search className="h-[24px] w-[24px] stroke-[2]" />
              </Link>
            </div>

            <div className="flex items-center justify-end">
              <span className="mr-[16px] h-[28px] w-px bg-[#e4e4e4]" aria-hidden="true" />
              <Link
                href="#"
                aria-label="Account"
                className="inline-flex h-9 w-9 items-center justify-center text-black"
              >
                <User className="h-[22px] w-[22px] stroke-[1.8]" />
              </Link>
              <span className="mx-[14px] h-[28px] w-px bg-[#e4e4e4]" aria-hidden="true" />
              <Link
                href="#"
                aria-label="Cart"
                className="inline-flex h-9 w-9 items-center justify-center text-black"
              >
                <span className="relative">
                  <ShoppingBag className="h-[22px] w-[22px] stroke-[1.8]" />
                  <span className="absolute -right-[9px] -top-[9px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#dc4a4a] px-[4px] text-[10px] font-bold leading-none text-white">
                    0
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <Link href="/" className="hidden items-center gap-2 lg:inline-flex">
            <Image
              src="/images/site-logo.webp"
              alt="Ap supplero"
              width={122}
              height={28}
              priority
              className="h-auto w-[122px]"
            />
          </Link>

          <div className="hidden lg:block">
            <form action="/search" method="get" role="search" className="mx-auto flex max-w-[640px] items-stretch">
              <div className="flex h-[2.75rem] w-full items-stretch overflow-hidden border-2 border-[#f2cb1f] bg-white">
                <div className="flex w-[3rem] items-center justify-center">
                  <Search className="h-[1rem] w-[1rem] text-[#111111]" />
                </div>
                <Input
                  name="q"
                  placeholder="Search over 1000 products"
                  aria-label="Search over 1000 products"
                  className="h-full flex-1 border-0 px-0 text-[0.9375rem] placeholder:text-[#8c8c8c] focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  className="h-full w-[6.35rem] shrink-0 rounded-none border-0 bg-transparent px-0 text-[0.75rem] font-extrabold uppercase tracking-normal text-black hover:bg-transparent hover:text-black"
                >
                  <span className="inline-flex translate-y-px items-center gap-[9px] leading-none">
                    Search
                    <span className="text-[0.95rem] leading-none">→</span>
                  </span>
                </Button>
              </div>
            </form>
          </div>

          <div className="hidden items-center justify-end gap-2 lg:flex">
            <IconButton href="#">
              <User className="h-5 w-5 stroke-[1.7] sm:h-6 sm:w-6" />
            </IconButton>
            <span className="h-7 w-px bg-[#d7d7d7]" aria-hidden="true" />
            <IconButton href="#">
              <Heart className="h-5 w-5 stroke-[1.7] sm:h-6 sm:w-6" />
            </IconButton>
            <span className="h-7 w-px bg-[#d7d7d7]" aria-hidden="true" />
            <IconButton href="#">
              <span className="relative">
                <ShoppingBag className="h-5 w-5 stroke-[1.7] sm:h-6 sm:w-6" />
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#dc4a4a] px-1 text-[0.625rem] font-bold leading-none text-white">
                  0
                </span>
              </span>
            </IconButton>
          </div>
        </div>
      </div>

      <div className="mt-5 px-4 lg:px-8">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)]">
          <CategoryMenu categories={verticalCategories} />

          <nav className="hidden bg-black lg:block">
            <ul className="flex h-full items-stretch">
              {mainNav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-full items-center px-8 text-[0.875rem] font-medium uppercase tracking-normal transition-colors hover:text-[#f2cb1f]",
                      item.active ? "text-[#f2cb1f]" : "text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-20 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="border border-[#e5e5e5] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                      <ul className="grid gap-3">
                        <li>
                          <Link
                            href="#"
                            className="text-[0.875rem] font-medium text-[#222222] transition-colors hover:text-[#f2cb1f]"
                          >
                            Sample menu item
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-[0.875rem] font-medium text-[#222222] transition-colors hover:text-[#f2cb1f]"
                          >
                            Sample menu item
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
              <li className="ml-auto flex items-center px-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#f2cb1f]"
                >
                  <Phone className="h-4 w-4 stroke-[2.2]" />
                  Ask our experts: <span className="text-[#f2cb1f]">1-888-333-5226</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
  );
}
