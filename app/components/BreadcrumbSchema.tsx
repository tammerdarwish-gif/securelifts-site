type BreadcrumbSchemaItem = {
  label: string;
  href: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbSchemaItem[];
};

export default function BreadcrumbSchema({
  items,
}: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}