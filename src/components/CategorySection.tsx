import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Home & Kitchen",
    description: "Beautiful essentials for everyday meals.",
    color: "bg-amber-50",
    textColor: "text-amber-900",
  },
  {
    name: "Accessories",
    description: "Thoughtfully crafted bags and travel gear.",
    color: "bg-stone-100",
    textColor: "text-stone-800",
  },
  {
    name: "Audio & Tech",
    description: "Clean design meets great sound.",
    color: "bg-slate-100",
    textColor: "text-slate-800",
  },
];

export function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight md:text-3xl">
        Shop by Category
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="/shop"
            className={`group flex flex-col justify-between rounded-xl p-6 ${cat.color} transition-transform hover:-translate-y-1`}
          >
            <div>
              <h3 className={`text-lg font-semibold ${cat.textColor}`}>
                {cat.name}
              </h3>
              <p className={`mt-1 text-sm ${cat.textColor} opacity-80`}>
                {cat.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-sm font-medium">
              <span className={cat.textColor}>Explore</span>
              <ArrowRight className={`h-4 w-4 ${cat.textColor} transition-transform group-hover:translate-x-1`} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
