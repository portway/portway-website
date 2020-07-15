/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query SponsorshipPages {
      site {
        siteMetadata {
          sponsors {
            logo
            message
            name
            showBanner
            slug
          }
        }
      }
    }
  `)
  data.site.siteMetadata.sponsors.forEach((sponsor) => {
    actions.createPage({
      path: `/${sponsor.slug}`,
      component: require.resolve('./src/pages/index.js'),
      context: { sponsor: sponsor, slug: sponsor.slug }
    })
  })
}
