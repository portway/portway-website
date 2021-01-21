import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { uuid } from '../scripts/utilities'
import Layout from '../layouts/layout'
import ImageTextComponent from '../components/text/ImageTextComponent'

import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const FeaturesPage = () => {
  const items = useStaticQuery(graphql`
    query {
      allContentJson {
        nodes {
          items {
            title
            description
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
    <Layout title="Features">
      <section className={pageClasses}>
        <div className={styles.page__heading}>
          <h2>Features</h2>
          <p className={styles.heading__underlined}>The full list</p>
        </div>
        <div>
          <ul className={styles.blankList}>
            {items.allContentJson.nodes[0].items.map((feature, index) => {
              const even = index % 2
              return (
                <li key={uuid()}>
                  <ImageTextComponent accent={even ? 'squiggle' : 'stroke'} align={even ? 'left' : 'right'} image={feature.image.childImageSharp.fluid} title={feature.title}>
                    <p>{feature.description}</p>
                  </ImageTextComponent>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default FeaturesPage
