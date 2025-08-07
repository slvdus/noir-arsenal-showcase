import SEO from "@/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About – Nature's Arsenal"
        description="Learn about Nature's Arsenal: minimalist, high-contrast firearms with field-tested reliability."
      />
      <h1 className="text-3xl font-bold">About Nature's Arsenal</h1>
      <div className="prose prose-invert mt-4 max-w-none">
        <p>
          Born from the outdoors and refined by engineering, Nature's Arsenal
          crafts minimalist, high-contrast firearms for real-world conditions.
        </p>
        <p>
          Our mission is simple: build tools that disappear in your hands and
          perform when it matters. Every platform is tested for durability,
          precision, and usability.
        </p>
      </div>
    </>
  );
};

export default About;
