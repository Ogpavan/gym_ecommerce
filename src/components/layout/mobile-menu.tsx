"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

type MobileMenuProps = {
  items: readonly {
    label: string;
    href: string;
    active?: boolean;
  }[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center text-black"
      >
        <Menu className="h-[24px] w-[24px] stroke-[2]" />
      </button>

      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-50 lg:hidden",
          isOpen && "pointer-events-auto"
        )}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 ease-out",
            isOpen && "opacity-100"
          )}
        />
        <aside
          className={cn(
            "relative h-full w-[250px] -translate-x-full transform-gpu bg-white transition-[transform,box-shadow] duration-300 ease-out",
            isOpen
              ? "translate-x-0 shadow-[12px_0_30px_rgba(0,0,0,0.18)]"
              : "shadow-none"
          )}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute right-[10px] top-[9px] inline-flex h-[27px] w-[27px] items-center justify-center bg-[#f1f1f1] text-black"
          >
            <X className="h-[20px] w-[20px] stroke-[1.6]" />
          </button>

          <nav className="pt-[48px]" aria-label="Mobile navigation">
            <ul className="border-t border-[#e7e7e7]">
              {items.map((item) => (
                <li key={item.label} className="border-b border-[#e7e7e7]">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex min-h-[45px] items-center justify-between px-[9px] text-[14px] font-[900] uppercase leading-none tracking-normal text-black",
                      item.active && "text-[#f2cb1f]"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-[19px] w-[19px] stroke-[2.2] text-black" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
