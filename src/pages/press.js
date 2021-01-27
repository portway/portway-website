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

  return <Layout title="Press">
    <section className={pageClasses}>
      <div className={styles.page__heading}>
        <h2>Presskit</h2>
        <p className={styles.heading__underlined}>Welcome to Portway</p>
      </div>
      <div className={styles.page__content}>
        <p>
          Portway is a Markdown-based, collaborative document app. It’s backed by developer-friendly features that allow integrating content from Portway anywhere on the web.
        </p>
        <p>
          The collaborative editor allows multiple people to work on a single document in real time. Trigger events using webhooks when you publish a document: generate a static site, trigger a Zapier automation, or roll out new copy to a custom app.
        </p>
        <p>
          Documents are contained in projects, and each project can fulfill different functions for your team. For example, one project may act as a CMS and allow a team to publish their content to a Gatsby site. Another project may contain documentation that’s searchable, readable, and editable, all from within the Portway app.
        </p>
        <h3 id="features">Features</h3>
        <ul className={styles.blankList}>
          {items.allContentJson.nodes[0].items.map((feature) => {
            return <li key={uuid()}><strong>{feature.title}</strong> {feature.description}</li>
          })}
        </ul>
        <h3 id="pricing">Pricing</h3>
        <p>A Portway subscription is $10/month per user. Add and remove users or cancel your subscription at any time.</p>
        <h3 id="motivation">Motivation</h3>
        <p>
          Like many great apps, Portway arose from a desire for something we wanted but that did not exist. A simple way to collaborate on content <em>and</em> use it. And it had to use Markdown. So we built Portway to do exactly that. Portway provides the essentials to dive in and write with your team in a Markdown-first environment. And it offers you the tools to use that content anywhere.
        </p>
        <p>
          With minimal effort we can integrate content into custom web apps. With a few clicks we can setup an automated workflow to build and publish static sites, using content from Portway. And with the same app we can also collaborate on brainstorming ideas and share meeting notes.
        </p>
        <h3 id="about-us">About Us</h3>
        <p>Portway is a creation of <a href="https://bonkeybong.com">BonkeyBong</a>, an independent software development shop. We love using and creating beautiful, efficient apps.</p>
      </div>
    </section>
  </Layout>
}

PressPage.propTypes = {
}

export default PressPage
