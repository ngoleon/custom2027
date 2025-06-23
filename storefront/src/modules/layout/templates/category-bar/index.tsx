import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getCategoriesList } from "@lib/data/categories"

export default async function CategoryBar() {
  const { product_categories } = await getCategoriesList(0, 100)
  const categories = product_categories?.filter((c) => !c.parent_category) || []

  return (
    <div className="border-b border-ui-border-base bg-white hidden small:block">
      <div className="content-container flex justify-center gap-6 py-3 text-sm font-medium text-ui-fg-muted">
        <LocalizedClientLink
          href="/store"
          className="hover:text-ui-fg-base whitespace-nowrap"
          data-testid="nav-store-link"
        >
          ALL
        </LocalizedClientLink>
        {categories.map((c) => (
          <LocalizedClientLink
            key={c.id}
            href={`/categories/${c.handle}`}
            className="hover:text-ui-fg-base whitespace-nowrap"
          >
            {c.name.toUpperCase()}
          </LocalizedClientLink>
        ))}
      </div>
    </div>
  )
}
