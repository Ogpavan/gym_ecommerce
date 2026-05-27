"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

type CategoryMenuProps = {
  categories: readonly string[];
};

export function CategoryMenu({ categories }: CategoryMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="category-menu"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-full w-full items-center gap-3 bg-[#f2cb1f] px-6 py-3 text-left"
      >
        <Menu className="h-6 w-6 shrink-0 stroke-[2.25] text-black" />
        <span className="whitespace-nowrap text-[0.9375rem] font-semibold uppercase tracking-normal text-black">
          Shop by Categories
        </span>
      </button>

      {isOpen ? (
        <div
          id="category-menu"
          className="absolute left-0 top-full z-40 w-[300px] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.45)]"
        >
          <span
            aria-hidden="true"
            className="absolute -top-[7px] left-[34px] h-0 w-0 border-x-[7px] border-b-[7px] border-x-transparent border-b-white"
          />
          <ul className="border border-[#e5e5e5] border-t-0 bg-white">
            {categories.map((item) => (
              <li key={item} className="border-b border-[#e8e8e8] last:border-b-0">
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-[56px] items-center px-[15px] text-[0.875rem] font-normal leading-tight text-[#171717] transition-colors hover:bg-[#f8f8f8] hover:text-[#f2cb1f]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
