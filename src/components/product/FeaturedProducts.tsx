import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface FeaturedProductsProps {
  currentId: string;
  category: string;
}

const FeaturedProducts = ({ currentId, category }: FeaturedProductsProps) => {
  const related = products.filter((p) => p.category === category && p.id !== currentId).slice(0, 8);
  const fallback = products.filter((p) => p.id !== currentId).slice(0, 8);
  const items = related.length > 0 ? related : fallback;

  if (items.length === 0) return null;

  return (
    <section aria-label="Related products" className="mt-16 animate-fade-in">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">You might also like</h2>
        <p className="text-muted-foreground">Explore related picks our customers love.</p>
      </header>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {items.map((product) => (
            <CarouselItem key={product.id} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedProducts;
