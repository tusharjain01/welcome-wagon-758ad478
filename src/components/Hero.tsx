import { Link } from "@tanstack/react-router";
import heroImage from "../assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Mindful goods for everyday living
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Curated products designed with care — sustainable materials, timeless aesthetics, and the little details that make a house feel like home.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Our Story
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Soulful Living collection flat lay with tote bag, ceramic vase, earbuds, and succulent"
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
