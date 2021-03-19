import React from "react"
import Navbar from "@components/navbar"
import Footer from "@components/footer"

interface Props {
  isNavTransparent?: boolean
}

const PageTemplate: React.FC<Props> = ({ children, isNavTransparent }) => {
  return (
    <>
      <Navbar isTransparent={isNavTransparent} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageTemplate
