import React from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import ContentScrollerComponent from '../../components/content-scroller/ContentScrollerComponent'

const FeatureScrollerComponent = () => {
  const items = useStaticQuery(graphql`
  query FeaturesQuery {
    allContentJson {
      nodes {
        items {
          description
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1480) {
                ...GatsbyImageSharpFluid_withWebp
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
      items={items.allContentJson.nodes[0].items}
    />
  )
}

// FeatureScrollerComponent.propTypes = {
// }

export default FeatureScrollerComponent
