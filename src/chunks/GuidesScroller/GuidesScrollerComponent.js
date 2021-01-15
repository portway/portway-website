import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CardScrollerComponent from '../../components/card-scroller/CardScrollerComponent'

const GuidesScrollerComponent = () => {
  const query = useStaticQuery(graphql`
    query {
      allPortwayDocument {
        nodes {
          id
          name
          slug
          updatedAt
          childrenPortwayField {
            value
            name
          }
        }
      }
    }
  `)
  const items = query.allPortwayDocument.nodes.map((node) => {
    const cardImage = node.childrenPortwayField.find(field => field.name === 'card-image')
    const cardDescription = node.childrenPortwayField.find(field => field.name === 'description').value
    return {
      title: node.name,
      description: cardDescription,
      image: cardImage,
      url: `https://docs.portway.app/guides/${node.slug}`
    }
  })
  return <CardScrollerComponent items={items} title="Guides" />
}

export default GuidesScrollerComponent
