import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? <span className="text-gray-400">/</span> : null}

                {isLast || !item.href ? (
                  <span className="font-medium text-gray-900">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition hover:text-red-600 hover:underline"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}