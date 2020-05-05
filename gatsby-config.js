module.exports = {
  siteMetadata: {
    title: `Portway`,
    description: `Beautiful notes, powering your projects`,
    keywords: `Notes, Collaborative, Writing, Markdown, API, REST, CMS, Content management system, Developers`,
    author: `@portwayapp`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gosquared`,
      options: {
        token: 'GSN-113617-U',
        anonymizeIP: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
