import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, ArrowRight, Tag } from "lucide-react";
interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const labels: string[] = [];
  if (product.category === "Handgun" || product.category === "Rifle" || product.category === "Shotgun") {
    labels.push("FFL transfer required");
  }
  if (product.category.includes("Ammo") || product.category === "Ammunition") {
    labels.push("Bulk pricing available");
  }
  if (product.category.includes("Less-Lethal")) {
    labels.push("Less‑lethal");
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image }, 1);
    toast({ title: "Added to cart", description: `${product.name} added to your cart.` });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm card-elevated hover-scale"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden rounded-md bg-muted">
          <img
            src={product.image}
            alt={`${product.name} – ${product.category}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border bg-card/90 px-2 py-0.5 text-[11px] font-medium backdrop-blur">
            <Tag className="size-3 text-primary" /> {product.category}
          </span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold leading-tight line-clamp-1">{product.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          </div>
          <p className="text-sm font-semibold tabular-nums">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      {labels.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {labels.map((l) => (
            <span key={l} className="inline-flex items-center rounded-full border bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
              {l}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <Link to={`/product/${product.id}`} className="story-link">
          <Button variant="outline" size="sm">
            View details
            <ArrowRight className="ml-1" />
          </Button>
        </Link>
        <Button
          aria-label={`Add ${product.name} to cart`}
          onClick={handleAddToCart}
          variant="tactile"
          size="icon"
          className="hover-scale"
        >
          <ShoppingCart />
        </Button>
      </div>
    </motion.article>
  );
};

export default ProductCard;
