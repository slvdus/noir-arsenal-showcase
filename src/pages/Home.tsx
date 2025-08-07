import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <SEO
        title="Nature's Arsenal – Noir Firearms Catalog"
        description="Explore high-contrast, minimalist firearms built for the wild. Rifles, shotguns, and pistols engineered by Nature's Arsenal."
      />
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Minimalist precision. Built for the wild.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            High-contrast engineering meets field-tested reliability. Discover the
            collection from Nature's Arsenal.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/catalog">
              <Button size="lg">Browse Catalog</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">
                About Us
              </Button>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted">
            <img
              src="/placeholder.svg"
              alt="Noir hero banner for Nature's Arsenal"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {["Rifles", "Shotguns", "Pistols"].map((title) => (
          <motion.div
            key={title}
            whileHover={{ y: -3 }}
            className="rounded-lg border p-6"
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              High-contrast minimal design with reliable performance.
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Home;
