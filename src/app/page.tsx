// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 py-24">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            E-Commerce
          </h1>
          <p className="text-lg text-muted-foreground">
            Tienda virtual.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/catalogue">Browse Catalogue</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductPreviewCard name="iPhone 15" price={1199} image="/iphone.jpg" />
            <ProductPreviewCard name="MacBook Pro" price={2399} image="/macbook.jpg" />
            <ProductPreviewCard name="AirPods Max" price={549} image="/airpods.jpg" />
          </div>
        </div>
      </section> */}
    </div>
  );
}

