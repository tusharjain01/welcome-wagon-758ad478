import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-lg font-semibold tracking-tight">
              Soulful Living
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Curated goods for mindful, intentional living.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2">
              {["All Products", "New Arrivals", "Best Sellers", "Sale"].map((item) => (
                <li key={item}>
                  <a href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2">
              {["About Us", "Sustainability", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="mt-3 space-y-2">
              {["Shipping", "Returns", "FAQ", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Soulful Living. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
