import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import CategoryBar from "@modules/layout/templates/category-bar"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      {/* <CategoryBar /> */}
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
