import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Catalog = () => {
  return (
    <>
      <SEO
        title="Catalog – Nature's Arsenal"
        description="Browse minimalist, high-contrast firearms from Nature's Arsenal. Rifles, shotguns, and pistols designed for reliability."
      />
      <h1 className="text-3xl font-bold">Product Catalog</h1>
      <p className="mt-2 text-muted-foreground">
        Explore our curated selection engineered for precision.
      </p>
      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </>
  );
};

export default Catalog;
