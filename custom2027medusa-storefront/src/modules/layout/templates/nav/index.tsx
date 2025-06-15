import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

const categories = [
  { name: "Vehicles", href: "/vehicles" },
  { name: "Exterior", href: "/exterior" },
  { name: "Interior", href: "/interior" },
  { name: "Electronics", href: "/electronics" },
]

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-white">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <img src="/2027.svg" alt="Logo" className="w-60 h-60" />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
        {/* Second row for categories */}
        <div className="w-full border-b border-gray-300 bg-white">
          <div className="content-container flex justify-center space-x-8 py-4 txt-large-plus text-ui-fg-subtle">
            {categories.map((category) => (
              <LocalizedClientLink
                className="hover:text-ui-fg-base flex gap-2"
                key={category.href}
                href={category.href}
              >
                {category.name}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      </header>
    </div>
  )
}

// const categories = [
//   { name: "Vehicles", href: "/vehicles" },
//   { name: "Exterior", href: "/exterior" },
//   { name: "Interior", href: "/interior" },
//   { name: "Electronics", href: "/electronics" },
// ]

// export default async function Nav() {
//   const regions = await listRegions().then((regions: StoreRegion[]) => regions)

//   return (
//     <div className="sticky top-0 inset-x-0 z-50 group bg-white shadow-sm">
//       <header className="mx-auto border-b border-gray-200">
//         <nav className="content-container flex items-center justify-between h-16 text-sm text-gray-700">
//           <div className="flex flex-1 items-center">
//             <SideMenu regions={regions} />
//           </div>

//           <LocalizedClientLink href="/" className="uppercase">
//             <img src="/2027.svg" alt="Logo" className="w-60 h-auto" />
//           </LocalizedClientLink>

//           <div className="flex flex-1 justify-end items-center gap-6">
//             <LocalizedClientLink
//               className="hover:text-gray-900"
//               href="/account"
//             >
//               Account
//             </LocalizedClientLink>
//             <Suspense
//               fallback={
//                 <LocalizedClientLink
//                   className="hover:text-gray-900"
//                   href="/cart"
//                 >
//                   Cart (0)
//                 </LocalizedClientLink>
//               }
//             >
//               <CartButton />
//             </Suspense>
//           </div>
//         </nav>
//         {/* Second row for categories */}
//         <div className="content-container flex justify-center gap-8 border-t border-gray-200 bg-white text-sm">
//           {categories.map((category) => (
//             <LocalizedClientLink
//               key={category.href}
//               href={category.href}
//               className="py-4 hover:text-gray-900 hover:underline transition-all"
//             >
//               {category.name}
//             </LocalizedClientLink>
//           ))}
//         </div>
//       </header>
//     </div>
//   )
// }
