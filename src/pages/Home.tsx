import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Target, Shield, Compass } from "lucide-react";
import { useRef } from "react";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <>
      <SEO
        title="Nature's Arsenal – Tactical Desert-Noir Firearms"
        description="Explore high-contrast, tactical desert-noir firearms. Rifles, shotguns, and pistols engineered by Nature's Arsenal."
      />
      <section ref={ref} className="grid gap-10 md:grid-cols-2 md:items-center">
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
              <Button size="lg" variant="tactile" className="hover-scale">Browse Catalog</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">About Us</Button>
            </Link>
          </div>
        </div>
        <motion.div style={{ y }} className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted tilt-hover card-elevated">
            <img
              src="/placeholder.svg"
              alt="Tactical desert-noir hero banner for Nature's Arsenal"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          { title: "Rifles", Icon: Target },
          { title: "Shotguns", Icon: Shield },
          { title: "Pistols", Icon: Compass },
        ].map(({ title, Icon }) => (
          <motion.div key={title} whileHover={{ y: -3 }} className="rounded-lg border p-6 card-elevated">
            <Icon className="size-5 mb-2" aria-hidden />
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
