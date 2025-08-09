import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Target, Shield, Compass, Truck, Wrench, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const featured = products.slice(0, 4);
  const placeholder = import.meta.env.BASE_URL + 'placeholder.svg';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Nature's Arsenal",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${typeof window !== 'undefined' ? window.location.origin : ''}/catalog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <SEO
        title="Nature's Arsenal – Veteran‑Owned FFL & Bulk Ammo"
        description="Local FFL dealer and bulk ammo distributor in Hastings, MI. Veteran‑owned, personalized service, and compliant transfers."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section ref={ref} className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-transparent to-transparent p-6 sm:p-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium">
              <Shield className="size-3.5" /> Veteran‑owned FFL • Hastings, MI
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Local FFL. Bulk ammo. Veteran precision.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Personalized transfers, bulk ammunition (cases to pallets), and straight‑talk service for Hastings, Wayland, and Middleville.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/catalog">
                <Button size="lg" variant="tactile" className="hover-scale">Shop the catalog</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">Learn more</Button>
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[{ title: 'Bulk ammo pricing (cases & pallets)', Icon: Truck }, { title: 'By‑appointment FFL transfers', Icon: Wrench }].map(({ title, Icon }) => (
                <div key={title} className="flex items-center gap-2 rounded-lg border bg-card p-3">
                  <Icon className="size-4 text-primary" />
                  <p className="text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div style={{ y }} className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-xl border bg-muted tilt-hover card-elevated">
              <img
                src={placeholder}
                alt="Veteran‑owned FFL and bulk ammo in Hastings, MI"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-6 -bottom-4 hidden select-none gap-3 sm:flex">
              {["Veteran‑owned", "Easy FFL transfers", "Bulk ammo deals"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs shadow-sm">
                  <CheckCircle2 className="size-3.5 text-primary" /> {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-16">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured products</h2>
            <p className="text-sm text-muted-foreground">Curated picks built for performance.</p>
          </div>
          <Link to="/catalog" className="story-link">
            <Button variant="outline" size="sm">View all</Button>
          </Link>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[{ title: 'Bulk ammo distribution', copy: 'From cases to pallets with straightforward pricing.', Icon: Truck }, { title: 'FFL transfers, simplified', copy: 'Clear guidance, compliant paperwork, fast turnaround.', Icon: CheckCircle2 }, { title: 'Veteran technical expertise', copy: 'Attention to detail from a biomedical equipment tech.', Icon: Wrench }].map(({ title, copy, Icon }) => (
          <motion.div key={title} whileHover={{ y: -3 }} className="rounded-lg border p-6 card-elevated">
            <Icon className="size-5 mb-2" aria-hidden />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
          </motion.div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you ship to my state?</AccordionTrigger>
            <AccordionContent>
              We comply with all applicable laws. Certain items may be restricted in your jurisdiction. See individual product pages for details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              Unused accessories may be returned within 30 days. Firearms and regulated items follow applicable regulations—contact us for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do products come with a warranty?</AccordionTrigger>
            <AccordionContent>
              Yes. Manufacturer warranties apply, and we provide workmanship support for two years on qualifying builds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Where are you located?</AccordionTrigger>
            <AccordionContent>
              124 Ashlynn Dr, Hastings, MI 49058. Serving Hastings, Wayland, and Middleville. Call 269‑804‑2118 or email NaturesArsenalFFL@gmail.com. By appointment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-16 overflow-hidden rounded-xl border bg-muted p-8 text-center card-elevated">
        <h2 className="text-2xl font-semibold">Ready to gear up?</h2>
        <p className="mt-2 text-sm text-muted-foreground">Shop now or reach out to schedule a transfer or bulk ammo order.</p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link to="/catalog">
            <Button size="lg" variant="tactile" className="hover-scale">Shop the catalog</Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline">Contact us</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
