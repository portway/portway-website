import React from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import ContentScrollerComponent from '../../components/content-scroller/ContentScrollerComponent'
import outlineIcon from '../../img/icon-outline.svg'

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
      title={
        <>
          <h2>Do more with your documents</h2>
          <Link to="/features"><img src={outlineIcon} width="16" height="16" alt="Bulleted list icon" />See all features</Link>
        </>
      }
      items={items.allContentJson.nodes[0].items.filter(item => item.featured)}
    />
  )
}

// FeatureScrollerComponent.propTypes = {
// }

export default FeatureScrollerComponent
