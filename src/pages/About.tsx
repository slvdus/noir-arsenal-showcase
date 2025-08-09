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
    telephone: '269-804-2118',
    email: 'NaturesArsenalFFL@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '124 Ashlynn Dr',
      addressLocality: 'Hastings',
      addressRegion: 'MI',
      postalCode: '49058',
      addressCountry: 'US'
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '269-804-2118',
      email: 'NaturesArsenalFFL@gmail.com',
      areaServed: ['Hastings MI','Wayland MI','Middleville MI']
    }]
  };

  return (
    <>
      <SEO
        title="About Nature's Arsenal – Veteran‑Owned FFL (MI)"
        description="Home‑based FFL dealer and bulk ammo distributor in Hastings, MI. Veteran‑owned with technical precision and personalized service."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">About Nature's Arsenal</h1>
        <p className="mt-4 text-muted-foreground">
          Nature's Arsenal is a home‑based, veteran‑owned FFL and bulk ammunition distributor in Hastings, Michigan. We pair
          military discipline with biomedical‑tech precision to deliver compliant transfers, reliable gear, and straight‑talk guidance.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[{ title: 'Veteran‑owned', copy: 'US Army background—accountability, discipline, and service.', Icon: Shield }, { title: 'Technical expertise', copy: 'Biomedical equipment tech: meticulous troubleshooting and QA.', Icon: Target }, { title: 'Personalized service', copy: 'Direct owner interaction, fair pricing, and local knowledge.', Icon: Compass }].map(({ title, copy, Icon }) => (
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
            Serve the West Michigan community with compliant, confidence‑building solutions. Bulk ammunition (cases to pallets),
            by‑appointment FFL transfers, and honest recommendations tailored to how you actually train and live.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Wrench className="mt-0.5 size-4" /> By‑appointment FFL transfers with clear guidance</li>
            <li className="flex items-start gap-2"><Shield className="mt-0.5 size-4" /> Bulk ammo supply—cases to pallets, competitive pricing</li>
            <li className="flex items-start gap-2"><Target className="mt-0.5 size-4" /> Compliance‑first process and careful documentation</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            FFL: 4-38-015-01-7G-15464 • Expires July 1, 2027 • License holder: STOTTS, CORY LEE
          </p>
        </article>
        <aside className="rounded-xl border bg-muted p-6 card-elevated">
          <h3 className="text-lg font-semibold">What guides us</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Simple, readable controls. Durable finishes. Thoughtful tolerances. If it doesn’t improve safety or performance, we leave it out.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold">FFL 01</p>
              <p className="text-xs text-muted-foreground">License Type</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Region 4</p>
              <p className="text-xs text-muted-foreground">District 38</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Hastings</p>
              <p className="text-xs text-muted-foreground">Michigan</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-12 prose prose-invert max-w-none">
        <h2>Field testing</h2>
        <p>
          Attention to detail—born from veteran service and healthcare precision. We emphasize safe handling, compliance,
          and reliable performance so your gear works when you need it.
        </p>
      </section>
    </>
  );
};

export default About;
