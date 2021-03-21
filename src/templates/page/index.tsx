import React from "react"
import Navbar from "@components/navbar"
import Footer from "@components/footer"
import SEO from "@components/seo"

interface Props {
  title: string
  description: string
  isNavTransparent?: boolean
}

const PageTemplate: React.FC<Props> = ({
  title,
  description,
  isNavTransparent,
  children,
}) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Navbar isTransparent={isNavTransparent} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageTemplate
