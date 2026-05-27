import { HeroShowcase } from "@/components/home/collection-showcase";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { OurProductsSection } from "@/components/ecommerce/our-products-section";
import { ProteinCategorySection } from "@/components/ecommerce/protein-category-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <main>
      <HeroShowcase />
      <ProteinCategorySection />
      <TestimonialSection />
      <OurProductsSection />
      <SiteFooter />
    </main>
  );
}
