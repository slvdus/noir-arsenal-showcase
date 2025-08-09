import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Heart, Star, ShieldCheck, Truck, RefreshCcw, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductGallery from "@/components/product/ProductGallery";
import DetailsTabs from "@/components/product/DetailsTabs";
import FeaturedProducts from "@/components/product/FeaturedProducts";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-muted-foreground">The requested product does not exist.</p>
        <Link to="/catalog">
          <Button variant="outline">Back to Catalog</Button>
        </Link>
      </div>
    );
  }

  const placeholder = import.meta.env.BASE_URL + 'placeholder.svg';
  const imageUrl = typeof window !== "undefined" ? new URL(placeholder, window.location.origin).toString() : placeholder;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [imageUrl],
    description: product.description,
    sku: product.sku,
    category: product.category,
    brand: { "@type": "Brand", name: "Nature's Arsenal" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "128",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: typeof window !== "undefined" ? window.location.href : "",
    },
  };

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  const handleWishlist = () => {
    toast({
      title: "Saved",
      description: `${product.name} added to your wishlist.`,
    });
  };

  // Micro-interactions (gamification): live viewers + low-stock hint
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * 20) + 12);
  const [stockLeft] = useState(() => Math.floor(Math.random() * 7) + 3);
  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => Math.max(5, Math.min(99, v + (Math.random() > 0.5 ? 1 : -1))));
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SEO title={`${product.name} – Nature's Arsenal`} description={product.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="grid gap-10 md:grid-cols-2 md:items-start">
        <ProductGallery images={[placeholder]} alt={`${product.name} product image - Nature's Arsenal`} />

        <div>
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4" fill="currentColor" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.8/5 · 128 reviews</span>
              </div>
              <Badge variant="secondary">In stock</Badge>
              <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                <Eye className="size-4" />
                <span aria-live="polite" className="text-sm">{viewers} viewing now</span>
              </div>
            </div>
            <p className="mt-6 text-2xl font-semibold tabular-nums">${product.price.toFixed(2)}</p>
            <p className="mt-4 leading-relaxed text-foreground/90">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" variant="tactile" onClick={handleAddToCart} className="hover-scale">
                <ShoppingCart className="mr-2 size-4" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" onClick={handleWishlist} className="hover-scale">
                <Heart className="mr-2 size-4" /> Wishlist
              </Button>
              <span className="self-center text-sm text-muted-foreground">Only {stockLeft} left at this price</span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <Truck className="size-4 text-primary" />
                <p className="text-sm">Fast, tracked shipping</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <ShieldCheck className="size-4 text-primary" />
                <p className="text-sm">Secure checkout</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-card p-3">
                <RefreshCcw className="size-4 text-primary" />
                <p className="text-sm">Hassle-free returns</p>
              </div>
            </div>
          </div>

          <DetailsTabs description={product.description} sku={(product as any).sku} category={product.category} />
        </div>
      </article>

      <FeaturedProducts currentId={product.id} category={product.category} />
    </>
  );
};

export default Product;
