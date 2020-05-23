const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Vegetace - MUNI`,
    description: `Vegetation Science Group - Masaryk University`,
    url: "https://botzool-vegetation.netlify.com",
    image: "/mainLogo.png",
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/static/images/`,
      name: `images`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/content/`,
      name: `content`
    }
  },
  "gatsby-transformer-javascript-frontmatter",
  "gatsby-transformer-remark",
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  ],
  pathPrefix: `/vegsci`,
}
