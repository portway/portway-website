import React from 'react'
import cx from 'classnames'

import Layout from '../layouts/layout'

import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const PressPage = () => (
  <Layout title="Press">
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
        <ul>
          <li><strong>Real-time Collaboration</strong> See everyone in the current document, and which field they are currently editing.</li>
          <li><strong>Organize documents with fields</strong> Text fields offer full markdown support, while other types like images, files, and dates allow additional control and features.</li>
          <li><strong>Unlimited Projects</strong> Each collection of documents is organized into a project. Grant access to team members and control API access per project. Create as many projects as you need.</li>
          <li><strong>Customizable access</strong> Choose the people you need on your project. Grant them appropriate access roles (reader, contributor, admin)</li>
          <li><strong>Full API</strong> Portway grants you access to the API which allows you to do anything with your content.</li>
          <li><strong>Structured text data</strong> Markdown text can be consumed raw from the API, or you can use the pre-parsed structured text that turns text into a JSON structure for simple programmatic consumption.</li>
          <li><strong>Document outline</strong> Name and reorder fields within your document in one efficient outline panel.</li>
          <li><strong>Inspired by notes apps</strong> At its core, Portway is designed to be fast and simple. Create a document and start writing.</li>
          <li><strong>Project export</strong> Need to move your content or want a project in plain text files? Download a zip of your project.</li>
          <li><strong>API keys</strong> API access is controlled by project. Create a read-only key for a your website project so a static site generator gets read access. Create writeable keys to add content to a Portway project.</li>
          <li><strong>Search</strong> Quickly find documents in a project using search.</li>
          <li><strong>Drag and drop import</strong> Add content from outside sources by dragging it into a Portway project. It’s really that simple.</li>
          <li><strong>Webhooks</strong> Notify other services when a Portway document is published. Trigger static site builds, post a document to Slack, or perform any other operation compatible with webhooks.</li>
          <li><strong>Global CDN</strong> Any media you add to Portway is accessible via CDN, so you don’t need a separate asset hosting solution.</li>
          <li><strong>Security and Privacy</strong> Your data belongs to you. We encrypt your data across the web and in our databases. We do not and will never sell your data, period. We minimize data sharing with third party services to those required to run and operate Portway. No one has access to your content except you and the Portway application.</li>
          <li><strong>Accessible on all devices</strong> Portway works on your phone, tablet or computer.</li>
          <li><strong>Dark mode</strong> Portway looks great whether you’re in dark or light mode.</li>
        </ul>
        <h2 id="pricing">Pricing</h2>
        <p>A Portway subscription is $10/month per user. Add and remove users or cancel your subscription at any time.</p>
        <h2 id="about-us">About Us</h2>
        <p>Portway is a creation of <a href="https://bonkeybong.com">BonkeyBong</a>, an independent software development shop. We love using and creating beautiful, efficient apps.</p>
      </div>
    </section>
  </Layout>
)

PressPage.propTypes = {
}

export default PressPage
