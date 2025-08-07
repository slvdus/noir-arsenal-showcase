import { useParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Heart } from "lucide-react";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

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

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    sku: product.sku,
    brand: { "@type": "Brand", name: "Nature's Arsenal" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: typeof window !== "undefined" ? window.location.href : "",
    },
  };

  const handleAddToCart = () => {
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

  return (
    <>
      <SEO title={`${product.name} – Nature's Arsenal`} description={product.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="overflow-hidden rounded-xl border bg-muted">
          <img
            src={product.image}
            alt={`${product.name} product image - Nature's Arsenal`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.category}</p>
          <p className="mt-6 text-2xl font-semibold tabular-nums">${product.price.toFixed(2)}</p>
          <p className="mt-6 leading-relaxed">{product.description}</p>

          <div className="mt-8 flex gap-3">
            <Button size="lg" variant="tactile" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 size-4" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" onClick={handleWishlist}>
              <Heart className="mr-2 size-4" /> Wishlist
            </Button>
            <Link to="/catalog">
              <Button size="lg" variant="ghost">Back to Catalog</Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default Product;
