import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images");

const assets = [
  {
    file: "hero-bg-1",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/bg-1.png?v=1661482200",
  },
  {
    file: "hero-product-1",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-slide-1.png?v=1661482200",
  },
  {
    file: "hero-promo-1",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-2_b5166f1c-a23b-476c-855b-272785bcad08.png?v=1661481899",
  },
  {
    file: "hero-promo-2",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-3_6a7fcb5c-cb57-4169-99d1-6d1bfd95ec76.png?v=1661481899",
  },
  {
    file: "hero-bg-2",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/bg-2.png?v=1661482199",
  },
  {
    file: "hero-product-2",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-slide-2.png?v=1661482199",
  },
  {
    file: "protein-product-1",
    url: "https://ap-supplero.myshopify.com/cdn/shop/products/25_0779a2ae-c9e8-4235-aaa3-fd407a135963_720x.png?v=1660386947",
  },
  {
    file: "protein-product-2",
    url: "https://ap-supplero.myshopify.com/cdn/shop/products/12_fc696433-cc03-4d0f-90f1-ca18a919246c_720x.png?v=1659671058",
  },
  {
    file: "protein-product-3",
    url: "https://ap-supplero.myshopify.com/cdn/shop/products/31_720x.png?v=1660387011",
  },
  {
    file: "protein-product-4",
    url: "https://ap-supplero.myshopify.com/cdn/shop/products/30_720x.png?v=1660527034",
  },
  {
    file: "promo-best-selling",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-7.png?v=1661501724",
  },
  {
    file: "promo-power-whey",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-8.png?v=1661501724",
  },
  {
    file: "category-whey",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-5_59de2091-52aa-4ae6-b0cc-0d45c18d45be.png?v=1661497497",
  },
  {
    file: "category-recovery",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-6.png?v=1661501402",
  },
  {
    file: "category-vitamins",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-9.png",
  },
  {
    file: "category-energy",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-10.png",
  },
  {
    file: "testimonial-bg",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/img-11.png?v=1661502293",
  },
  {
    file: "testimonial-avatar-1",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/avatar-1_66x.jpg?v=1661506018",
  },
  {
    file: "testimonial-avatar-2",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/avatar-2_66x.jpg?v=1661506018",
  },
  {
    file: "testimonial-avatar-4",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/avatar-4_66x.jpg?v=1661506018",
  },
  {
    file: "testimonial-rating",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/rating_66x.png?v=1660033123",
  },
  {
    file: "site-logo",
    url: "https://ap-supplero.myshopify.com/cdn/shop/files/logo_1a94d5b6-d559-42ac-a681-8ccabb0a34a0.png?v=1661327607",
  },
  {
    file: "product-1",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/1-400x373.png",
  },
  {
    file: "product-2",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/2-400x373.png",
  },
  {
    file: "product-3",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/3-400x373.png",
  },
  {
    file: "product-4",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/4-400x373.png",
  },
  {
    file: "product-5",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/5-400x373.png",
  },
  {
    file: "product-6",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/6-400x373.png",
  },
  {
    file: "product-7",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/7-400x373.png",
  },
  {
    file: "product-8",
    url: "https://demo2.wpopal.com/supplero/wp-content/uploads/2020/12/8-400x373.png",
  },
];

async function main() {
  await mkdir(outDir, { recursive: true });

  for (const asset of assets) {
    const response = await fetch(asset.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${asset.url}: ${response.status}`);
    }

    const input = Buffer.from(await response.arrayBuffer());
    const ext = path.extname(new URL(asset.url).pathname).toLowerCase();
    const isJpeg = ext === ".jpg" || ext === ".jpeg";
    const image = sharp(input);
    const metadata = await image.metadata();

    const output = path.join(outDir, `${asset.file}.webp`);
    const webpBuffer = await image.webp({
      quality: 86,
      effort: 4,
      alphaQuality: 95,
      smartSubsample: true,
      lossless: false,
    }).toBuffer();

    await writeFile(output, webpBuffer);
    console.log(
      `wrote ${path.relative(process.cwd(), output)} (${metadata.width}x${metadata.height}, ${isJpeg ? "from jpeg" : "from png"})`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
