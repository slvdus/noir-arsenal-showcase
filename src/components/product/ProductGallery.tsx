import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const gallery = images && images.length > 0 ? images : ["/public/placeholder.svg"]; // safety fallback

  return (
    <section aria-label="Product media" className="group relative animate-fade-in">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {gallery.map((src, idx) => (
            <CarouselItem key={idx} className="md:basis-full">
              <AspectRatio ratio={1}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full rounded-xl border bg-muted object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ProductGallery;
