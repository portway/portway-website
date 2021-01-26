import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CardScrollerComponent from '../../components/card-scroller/CardScrollerComponent'

const GuidesScrollerComponent = () => {
  const query = useStaticQuery(graphql`
    query {
      allPortwayDocument {
        nodes {
          name
          slug
          updatedAt
          childrenPortwayField {
            value
            name
            remoteImage {
              publicURL
              extension
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  const items = query.allPortwayDocument.nodes.map((node) => {
    const cardImageItem = node.childrenPortwayField.find(field => field.name === 'card-image')
    const cardDescription = node.childrenPortwayField.find(field => field.name === 'description').value
    return {
      title: node.name,
      description: cardDescription,
      image: cardImageItem.remoteImage.extension !== 'svg' ? cardImageItem.remoteImage.childImageSharp.fluid : cardImageItem.remoteImage.publicURL,
      url: `https://docs.portway.app/guides/${node.slug}`
    }
  })
  return <CardScrollerComponent items={items} title="Guides" />
}

export default GuidesScrollerComponent
