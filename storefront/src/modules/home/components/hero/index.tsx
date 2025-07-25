import { getCategoriesList } from "@lib/data/categories"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = async () => {
  const { product_categories } = await getCategoriesList(0, 6)

  const topLevelCategories =
    product_categories?.filter((cat) => !cat.parent_category) || []

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Fabrication.
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Precision. No limits.
          </Heading>
        </span>

        {/* Category Buttons */}
        {/* <div className="flex flex-wrap gap-3 justify-center">
          {topLevelCategories.map((cat) => (
            <LocalizedClientLink
              href={`/categories/${cat.handle}`}
              key={cat.id}
            >
              <Button variant="secondary">{cat.name}</Button>
            </LocalizedClientLink>
          ))}
        </div> */}

        <div className="flex flex-wrap gap-3 justify-center">
          <LocalizedClientLink
            href="/store"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            <Button variant="secondary">{"Browse Store"}</Button>
          </LocalizedClientLink>
        </div>

        {/* <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>Visit the tutorial</h1>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
