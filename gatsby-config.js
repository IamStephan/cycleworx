module.exports = {
  siteMetadata: {
    title: "Cycleworx Langebaan",
    titleTemplate: "%s | Bicycle Retailer and Workshop",
    description: "Bicycle retailer and workshop located in langebaan.",
    url: "cycleworxlangebaan.com",
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
  ],
}
