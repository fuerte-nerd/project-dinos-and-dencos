module.exports = {
  siteMetadata: {
    title: `Fuerteventura Dog Rescue`,
    description: `Taking care of the abandoned and mistreated dogs from the La Oliva area of Fuerteventura since 2013.`,
    author: `Fuertenerd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fuerteventura Dog Rescue`,
        short_name: `FDR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

//REMOVED!!!!
// {
//   resolve: `gatsby-source-filesystem`,
//   options: {
//     name: `images`,
//     path: `${__dirname}/src/images`,
//   },
// },