import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import Layout from '../layouts/layout'
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
        <div className={styles.page__content}>
          <dl className={styles.blankList}>
            {items.allContentJson.nodes[0].items.map((feature, index) => {
              return (
                <Fragment key={`feat-${index}`}>
                  <dt>{feature.title}</dt>
                  <dd>{feature.description}</dd>
                </Fragment>
              )
            })}
          </dl>
        </div>
      </section>
    </Layout>
  )
}

export default FeaturesPage
