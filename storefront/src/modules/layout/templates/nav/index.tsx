import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Search, ShoppingCart } from "lucide-react"
import { User } from "lucide-react"
import CategoryBar from "@modules/layout/templates/category-bar"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto duration-200 bg-white">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-30">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img
                src="/images/2027.svg"
                alt="Logo"
                className="inline-block h-20 w-41"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <ShoppingCart className="w-8 h-8" /> (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                <User className="w-8 h-8" />
              </LocalizedClientLink>
            </div>
            {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/search"
                scroll={false}
                data-testid="nav-search-link"
              >
                <Search className="w-8 h-8" />
              </LocalizedClientLink>
            )}
          </div>
        </nav>
      </header>
      <CategoryBar></CategoryBar>
      {/* Mobile-only fake line to replace hidden CategoryBar */}
      <div className="block small:hidden border-b border-ui-border-base h-[1px] bg-white" />
    </div>
  )
}
