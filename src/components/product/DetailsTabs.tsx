import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DetailsTabsProps {
  description: string;
  sku?: string;
  category: string;
}

const DetailsTabs = ({ description, sku, category }: DetailsTabsProps) => {
  return (
    <section aria-label="Product details" className="mt-10 animate-fade-in">
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="specs">Specs</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <article className="prose prose-neutral max-w-none dark:prose-invert">
            <p className="leading-relaxed">{description}</p>
          </article>
        </TabsContent>
        <TabsContent value="specs">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">Category</p>
              <p className="font-medium">{category}</p>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <p className="text-sm text-muted-foreground">SKU</p>
              <p className="font-medium">{sku || "—"}</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="shipping">
          <div className="rounded-lg border bg-card p-4 leading-relaxed">
            <p>
              Fast processing and tracked shipping. Returns accepted within 30 days on unused items in original
              packaging. See full policy at checkout.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DetailsTabs;
