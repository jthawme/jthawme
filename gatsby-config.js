module.exports = {
  siteMetadata: {
    title: `JT`,
    description: `Portfolio site of Jonny Thaw. Thats me, I'm typing this.`,
    author: `@jthawme`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/data/assets`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-extract-image-colors`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JT`,
        short_name: `JT`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#109782`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-htaccess`,
  ],
}
