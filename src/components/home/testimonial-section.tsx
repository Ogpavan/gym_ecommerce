import Image from "next/image";
import { MessageSquareText } from "lucide-react";

import { cn } from "@/lib/utils";
import { suppleroSans } from "@/lib/fonts";

const testimonials = [
  {
    quote:
      "Good product good price prompt efficient service. Gives you energy to workout harder and longer. Many thanks for your help.",
    name: "Brian G. Moore",
    role: "Gym Mod",
    avatar: "/images/testimonial-avatar-2.webp",
  },
  {
    quote:
      "Best supplements best results. Colton is an amazing consultant with tons of knowledge! Always has the right suggestions!",
    name: "Kevin Hart",
    role: "Bodybuilding",
    avatar: "/images/testimonial-avatar-1.webp",
  },
  {
    quote:
      "Discount Supplements is probably the best protein supplement company in the UK in every respect. Thoroughly recommended.",
    name: "Ken Haywood",
    role: "Cunningham Store",
    avatar: "/images/testimonial-avatar-4.webp",
  },
] as const;

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <article className="text-white">
      <Image
        src="/images/testimonial-rating.webp"
        alt="Five star rating"
        width={98}
        height={18}
        className="h-[18px] w-[98px]"
      />
      <p className="mt-[34px] min-h-[96px] text-[18px] font-[700] leading-[1.65] tracking-normal text-white">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-[30px] flex items-center gap-[20px]">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={50}
          height={50}
          className="h-[50px] w-[50px] object-cover"
        />
        <div>
          <p className="text-[15px] font-[900] leading-none tracking-normal text-white">
            {testimonial.name}
          </p>
          <p className="mt-[9px] text-[14px] font-[600] leading-none tracking-normal text-white/60">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialSection() {
  return (
    <section
      className={cn(
        suppleroSans.className,
        "bg-[#f5f5f5] px-6 py-[118px] lg:px-8"
      )}
      aria-label="Customer testimonials"
    >
      <div className="relative mx-auto min-h-[440px] max-w-[1305px] overflow-hidden bg-[#720606]">
        <Image
          src="/images/testimonial-bg.webp"
          alt=""
          fill
          sizes="1305px"
          className="object-cover"
        />

        <div className="relative z-10 grid min-h-[440px] items-center gap-[62px] px-[17px] py-[60px] lg:grid-cols-[340px_360px_360px] lg:gap-[84px] lg:py-0 lg:pr-[60px]">
          <div className="text-white lg:self-start lg:pt-[80px]">
            <MessageSquareText className="h-[48px] w-[48px] stroke-[2.4]" />
            <h2 className="mt-[28px] text-[38px] font-[900] leading-[1.08] tracking-normal">
              Here&apos;s what
              <br />
              our happy clients
              <br />
              are saying
            </h2>
          </div>

          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
