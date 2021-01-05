/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/

// @todo Remove this if we end up not wanting to split for each page
// exports.onCreateWebpackConfig = ({
//   actions,
//   stage
// }) => {
//   if (stage === `build-javascript`) {
//     actions.setWebpackConfig({
//         optimization: {
//             runtimeChunk: {
//                 name: `webpack-runtime`,
//             },
//             splitChunks: {
//                 name: false,
//                 cacheGroups: {
//                     styles: {
//                         name: `styles`,
//                         test: /\.(css|scss)$/,
//                         chunks: `initial`,
//                         enforce: true,
//                     },
//                 },
//             }
//         }
//     });
//   }
// }

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
