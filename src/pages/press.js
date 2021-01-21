import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { uuid } from '../scripts/utilities'
import Layout from '../layouts/layout'

import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const PressPage = () => {
  const items = useStaticQuery(graphql`
  query FullFeatures {
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

  return <Layout title="Press">
    <section className={pageClasses}>
      <div className={styles.page__heading}>
        <h2>Presskit</h2>
        <p className={styles.heading__underlined}>Welcome to Portway</p>
      </div>
      <div className={styles.page__content}>
        <p>Portway is a markdown-based, collaborative document app. It’s backed by an API that allows integrating content from Portway anywhere on the web.</p>
        <p>The collaborative editor allows multiple people to edit a single document in real time. Documents can optionally be published, and if an integration is set up using webhooks, the document can trigger a static site generator build. This allows Portway to play the role of a Content Management System (CMS) when desired.</p>
        <p>Documents are contained in projects, and each project can fulfill different functions for your team. For example, one project may act as a CMS and allow a team to publish their content to a Gatsby site. Another project may contain internal documentation that’s searchable, readable, and editable, all from within the Portway app.</p>
        <h2 id="features">Features</h2>
        <ul className={styles.blankList}>
          {items.allContentJson.nodes[0].items.map((feature) => {
            return <li key={uuid()}><strong>{feature.title}</strong> {feature.description}</li>
          })}
        </ul>
        <h2 id="pricing">Pricing</h2>
        <p>A Portway subscription is $10/month per user. Add and remove users or cancel your subscription at any time.</p>
        <h2 id="about-us">About Us</h2>
        <p>Portway is a creation of <a href="https://bonkeybong.com">BonkeyBong</a>, an independent software development shop. We love using and creating beautiful, efficient apps.</p>
      </div>
    </section>
  </Layout>
}

PressPage.propTypes = {
}

export default PressPage
