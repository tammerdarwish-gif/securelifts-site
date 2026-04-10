type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    areaServed: {
      "@type": "Place",
      name: "South Florida",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "SecureLifts",
      telephone: "(866) 828-1818",
      url: "https://securelifts.com",
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}