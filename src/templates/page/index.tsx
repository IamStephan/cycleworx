import React from "react"
import Navbar from "@components/navbar"
import Footer from "@components/footer"

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageTemplate
