require("dotenv").config()
module.exports = {
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: process.env.spaceId,
          accessToken: process.env.accessToken,
      },
  },
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
        postCssPlugins: [require(`autoprefixer`)],
    },
}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
