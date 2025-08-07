import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-4 shadow-sm"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-muted">
          <img
            src={product.image}
            alt={`${product.name} product image - Nature's Arsenal`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold leading-tight line-clamp-1">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
          <p className="text-sm font-medium tabular-nums">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
