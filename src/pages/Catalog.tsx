import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Filter, RotateCcw } from "lucide-react";

const Catalog = () => {
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], []);
  const prices = useMemo(() => products.map(p => p.price), []);
  const max = Math.max(...prices);

  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState<number>(max);

  const filtered = products.filter(p => (category === "All" || p.category === category) && p.price <= price);

  return (
    <>
      <SEO
        title="Catalog – Nature's Arsenal"
        description="Browse minimalist, tactical desert-noir firearms from Nature's Arsenal. Rifles, shotguns, and pistols designed for reliability."
      />

      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Catalog</h1>
          <p className="mt-2 text-muted-foreground">Explore our curated selection engineered for precision.</p>
        </div>
        <p className="text-sm text-muted-foreground">{filtered.length} result{filtered.length !== 1 && "s"}</p>
      </header>

      <Card className="mt-6">
        <CardContent className="grid gap-4 p-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2"><Filter className="size-4" /> Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium">Max Price: ${price.toFixed(0)}</label>
            <Slider value={[price]} onValueChange={v => setPrice(v[0] ?? max)} max={max} min={0} step={10} />
            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm" onClick={() => { setCategory("All"); setPrice(max); }}>
                <RotateCcw className="mr-2 size-4" /> Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </motion.section>
    </>
  );
};

export default Catalog;
