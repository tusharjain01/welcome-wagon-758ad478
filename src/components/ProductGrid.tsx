import { ShoppingBag } from "lucide-react";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Sage Ceramic Mug",
    price: "$28.00",
    image: product1,
    alt: "Matte sage green ceramic coffee mug",
  },
  {
    id: 2,
    name: "Canvas Market Tote",
    price: "$45.00",
    image: product2,
    alt: "Natural oatmeal canvas tote bag with leather handles",
  },
  {
    id: 3,
    name: "Studio Wireless Headphones",
    price: "$149.00",
    image: product3,
    alt: "Matte black over-ear wireless headphones",
  },
];

export function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Featured Products
          </h2>
          <p className="mt-2 text-muted-foreground">
            Handpicked favorites from our latest collection.
          </p>
        </div>
        <a
          href="/shop"
          className="hidden text-sm font-medium text-foreground underline-offset-4 hover:underline sm:inline-block"
        >
          View all
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.alt}
                width={600}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-background shadow-sm"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm font-medium text-foreground">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <a
          href="/shop"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          View all products
        </a>
      </div>
    </section>
  );
}
