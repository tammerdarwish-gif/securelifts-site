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
  const parsedUrl = new URL(url);
  const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_IDENTITY.baseUrl}/`,
    },
    ...pathParts.map((part, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name:
        index === pathParts.length - 1
          ? name
          : part
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
      item: `${SITE_IDENTITY.baseUrl}/${pathParts.slice(0, index + 1).join("/")}`,
    })),
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url.replace(/\/$/, "")}#service`,
        name,
        description,
        serviceType: name,
        areaServed: {
          "@type": "Place",
          name: "South Florida",
        },
        provider: {
          "@id": SITE_IDENTITY.businessId,
        },
        url,
      },
      ...(breadcrumbItems.length >= 2
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${url.replace(/\/$/, "")}#breadcrumb`,
              itemListElement: breadcrumbItems,
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
import { SITE_IDENTITY } from "@/lib/siteIdentity";
