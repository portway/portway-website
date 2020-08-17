module.exports = {
  siteMetadata: {
    title: `Portway`,
    description: `Beautiful documents, powering your projects`,
    keywords: `Documents, Notes, Collaborative, Writing, Markdown, API, REST, CMS, Content management system, Developers`,
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
      {
        logo: '/sponsors/macstories.svg',
        message: 'Welcome, MacStories fans! Check out our <a href="https://docs.portway.app/guides/creating-an-ios-shortcut" target="_blank" rel="noreferrer noopener">iOS shortcut guide</a>.',
        name: 'MacStories',
        showBanner: true,
        slug: 'macstories',
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
