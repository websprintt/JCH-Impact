import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Language, translations } from '../translations';

interface SEOProps {
  lang: Language;
}

const SEO: React.FC<SEOProps> = ({ lang }) => {
  const { seo } = translations[lang];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "JCH.Impact",
    "image": "https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-1.webp",
    "description": seo.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hollywood",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.0112,
      "longitude": -80.1495
    },
    "url": "https://ais-dev-cy6qiq6liliiqbvbe7sc5b-372441323539.europe-west2.run.app",
    "telephone": "+17862345403",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <html lang={lang} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content="https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-1.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/websprintt/JCH-Impact/dc9b72ffff3937b8917933fce8714a0bdf89e19a/img/ventana-1.webp" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://ais-dev-cy6qiq6liliiqbvbe7sc5b-372441323539.europe-west2.run.app" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
