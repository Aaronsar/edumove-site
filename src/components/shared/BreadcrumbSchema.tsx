/**
 * Injects BreadcrumbList JSON-LD structured data.
 * Usage: <BreadcrumbSchema items={[{ name: "Accueil", href: "/" }, { name: "Formations", href: "/#formations" }, { name: "Médecine" }]} />
 * The last item should NOT have an href (it's the current page).
 */
export default function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; href?: string }>;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://www.edumove.fr${item.href}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
