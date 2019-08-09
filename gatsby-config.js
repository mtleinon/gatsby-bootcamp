/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const secrets = require("./.secrets.js")

module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "Mika Leinonen",
  },

  /* Your site config here */
  // "develop": "SET GATSBY_GRAPHQL_IDE=playground&gatsby develop",
  // CONTENTFUL_SPACE_ID=590wuj3hb1ir
  // CONTENTFUL_ACCESS_TOKEN=oiBvJezGlR_FqK8ZsG5MzVAd9CGpK0LDH7PbPUDjkZ8
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: secrets.spaceId,
        accessToken: secrets.accessToken,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
