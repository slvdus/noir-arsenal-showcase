import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

const SEO = ({ title, description, canonical, image }: SEOProps) => {
  const canonicalUrl =
    canonical || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
