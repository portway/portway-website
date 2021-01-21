import React from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ContentScrollerComponent from '../../components/content-scroller/ContentScrollerComponent'

const FeatureScrollerComponent = () => {
  const items = useStaticQuery(graphql`
  query FeaturedFeatures {
    allContentJson {
      nodes {
        items {
          description
          featured
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1480) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  `)
  return (
    <ContentScrollerComponent
      className="feature-scroller"
      title="Do more with your documents"
      items={items.allContentJson.nodes[0].items.filter(item => item.featured)}
    />
  )
}

// FeatureScrollerComponent.propTypes = {
// }

export default FeatureScrollerComponent
