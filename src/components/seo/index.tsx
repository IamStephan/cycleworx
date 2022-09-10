import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
  description: string
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <script
        async
        defer
        data-website-id="71c82372-3cf9-4aed-80ba-b9b2b392c432"
        src="https://web.iamstephan.dev/umami.js"
      />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
      }
    }
  }
`
