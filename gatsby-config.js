module.exports = {
  siteMetadata: {
    title: `Portway`,
    description: `Beautiful notes, powering your projects`,
    keywords: `Notes, Collaborative, Writing, Markdown, API, REST, CMS, Content management system, Developers`,
    author: `@portwayapp`,
    sponsors: [
      {
        logo: '/sponsors/ror-podcast.jpg',
        message: 'Welcome, Ruby on Rails podcast listeners!',
        name: 'Ruby on Rails podcast',
        showBanner: true,
        slug: 'ror',
      },
      {
        logo: '/sponsors/remote-tools.png',
        message: 'Welcome, Remote Tools fans!',
        name: 'Remote Tools',
        showBanner: true,
        slug: 'remote-tools',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
