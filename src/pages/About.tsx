import SEO from "@/components/SEO";
import { Shield, Target, Compass, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Nature's Arsenal",
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : undefined,
  };

  return (
    <>
      <SEO
        title="About Nature's Arsenal – Minimalist, Field‑Tested"
        description="Learn about Nature's Arsenal: minimalist, high-contrast platforms engineered for reliability in real‑world conditions."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">About Nature's Arsenal</h1>
        <p className="mt-4 text-muted-foreground">
          Born from the outdoors and refined by engineering, Nature's Arsenal crafts minimalist, high‑contrast platforms
          that disappear in the hand and perform when it matters.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[{ title: 'Reliability', copy: 'Duty‑grade parts, tolerance‑checked, and test‑fired.', Icon: Shield }, { title: 'Precision', copy: 'Tight groups through quality barrels and QC.', Icon: Target }, { title: 'Ergonomics', copy: 'Controls and textures designed for confident handling.', Icon: Compass }].map(({ title, copy, Icon }) => (
          <div key={title} className="rounded-lg border p-6 card-elevated">
            <Icon className="size-5 mb-2" aria-hidden />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="text-2xl font-semibold">Our mission</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Build tools that enable confident, ethical use in complex environments. We prioritize safety, reliability, and
            clarity of user experience over trends.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Wrench className="mt-0.5 size-4" /> Armorer‑level QC and function checks</li>
            <li className="flex items-start gap-2"><Shield className="mt-0.5 size-4" /> Field validation under weather and dust</li>
            <li className="flex items-start gap-2"><Target className="mt-0.5 size-4" /> Consistent accuracy standards</li>
          </ul>
        </article>
        <aside className="rounded-xl border bg-muted p-6 card-elevated">
          <h3 className="text-lg font-semibold">What guides us</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Simple, readable controls. Durable finishes. Thoughtful tolerances. If it doesn’t improve safety or performance, we leave it out.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold">2yr</p>
              <p className="text-xs text-muted-foreground">Support</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">QC</p>
              <p className="text-xs text-muted-foreground">Armorer</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">EDC</p>
              <p className="text-xs text-muted-foreground">Focused</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-12 prose prose-invert max-w-none">
        <h2>Field testing</h2>
        <p>
          Every platform is validated across dust, moisture, and vibration exposure. Sights are tracked for return‑to‑zero,
          and controls are checked for consistency under gloves.
        </p>
      </section>
    </>
  );
};

export default About;
