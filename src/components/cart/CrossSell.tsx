import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CrossSellProps {
  excludeIds: string[];
}

const CrossSell = ({ excludeIds }: CrossSellProps) => {
  const { addItem } = useCart();
  const candidates = products.filter((p) => !excludeIds.includes(p.id)).slice(0, 8);
  if (candidates.length === 0) return null;

  return (
    <section aria-label="You might also like" className="animate-fade-in">
      <header className="mb-3">
        <h2 className="text-xl font-semibold">You might also like</h2>
        <p className="text-sm text-muted-foreground">Add popular picks without leaving your cart.</p>
      </header>
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {candidates.map((p) => (
            <CarouselItem key={p.id} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="h-full rounded-lg border p-4 card-elevated">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
                  <img src="/placeholder.svg" alt={`${p.name} placeholder`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium leading-tight line-clamp-2">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 tabular-nums">${p.price.toFixed(2)}</p>
                  </div>
                </div>
                <Button
                  className="mt-3 w-full"
                  variant="outline"
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: "/placeholder.svg" })}
                >
                  Add
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CrossSell;
