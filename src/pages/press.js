import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'

import { uuid } from '../scripts/utilities'
import Layout from '../layouts/layout'

import portwayLogo from '../img/portway-logo-horizontal.svg'
import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const PressPage = ({ data }) => {
  const pageQuery = useStaticQuery(graphql`
    query {
      allContentJson {
        nodes {
          items {
            title
            description
          }
        }
      }
      desktopScreenshot: file(relativePath: { eq: "press-screenshot--desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 642) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      mobileScreenshot: file(relativePath: { eq: "press-screenshot--mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
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
          Portway is a Markdown-based, collaborative document app. It’s backed by developer-friendly
          features that allow integrating content from Portway anywhere on the web.
        </p>
        <p>
          The collaborative editor allows multiple people to work on a single document in real time.
          Trigger events using webhooks when you publish a document: generate a static site, trigger
          a Zapier automation, automate the creation of Portway documents, or roll out new copy to
          a custom app.
        </p>
        <p>
          Documents are contained in projects, and each project can fulfill different functions for
          your team. For example, one project may act as a CMS for a team to publish their
          content to a Gatsby website. Another project may contain documentation that’s searchable,
          readable, and editable, all from within the Portway app.
        </p>
        <h3 id="features">Features</h3>
        <ul className={styles.blankList}>
          {pageQuery.allContentJson.nodes[0].items.map((feature) => {
            return <li key={uuid()}><strong>{feature.title}</strong> {feature.description}</li>
          })}
        </ul>
        <h3 id="pricing">Pricing</h3>
        <p>
          A Portway subscription is $10/month per user. Add and remove users or cancel your
          subscription at any time.
        </p>
        <h3 id="motivation">Motivation</h3>
        <p>
          Like many great apps, Portway arose from a desire for something we wanted but that did not
          exist. A simple way to collaborate on content <em>and</em> use it. And it had to use
          Markdown. So we built Portway to do exactly that. Portway provides the essentials to dive
          in and write with your team in a Markdown-first environment. And it offers you the tools
          to use that content anywhere.
        </p>
        <p>
          With minimal effort we can integrate content into custom web apps. With a few clicks we
          can setup an automated workflow to build and publish static sites, using content from
          Portway. And with the same app we can also collaborate on brainstorming ideas and share
          meeting notes.
        </p>
        <h3 id="about-us">About Us</h3>
        <p>
          Portway is a creation of <a href="https://bonkeybong.com" target="_blank" rel="noopener noreferrer">BonkeyBong</a>,
          an independent software development shop. We love using and creating beautiful, efficient
          apps.
        </p>
        <hr />
        <h3 id="branding">Logos</h3>
        <figure>
          <a href="/portway-logos.zip" download>
            <img src={portwayLogo} alt="Portway logo" width="214" height="45" />
            <figcaption>Download zip (8KB)</figcaption>
          </a>
        </figure>
        <hr />
        <h3 id="screenshots">Screenshots</h3>
        <figure>
          <a href={pageQuery.desktopScreenshot.childImageSharp.original.src} target="_blank" rel="noreferrer">
            <Img fluid={pageQuery.desktopScreenshot.childImageSharp.fluid} alt="Desktop Portway screenshot" />
            <figcaption>Download Desktop</figcaption>
          </a>
        </figure>
        <figure style={{ width: 320 }}>
          <a href={pageQuery.mobileScreenshot.childImageSharp.original.src} target="_blank" rel="noreferrer">
            <Img fluid={pageQuery.mobileScreenshot.childImageSharp.fluid} alt="Mobile Portway screenshot" />
            <figcaption>Download Mobile</figcaption>
          </a>
        </figure>
      </div>
    </section>
  </Layout>
}

PressPage.propTypes = {
  data: PropTypes.object,
}

export default PressPage
