module.exports = {
  siteMetadata: {
    title: "Cycleworx Langebaan",
    titleTemplate: "%s | Bicycle Retailer and Workshop",
    description: "Bicycle retailer and workshop located in langebaan.",
    siteUrl: `https://cycleworxlangebaan.com/`,
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: "ee411701-fc7a-494d-ab6e-1992a9930455",
        srcUrl: "https://web.iamstephan.dev/web-iamstephan.js",
      },
    },
  ],
}
