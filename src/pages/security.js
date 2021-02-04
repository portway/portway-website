import React from 'react'
import cx from 'classnames'

import Layout from '../layouts/layout'

import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const SecurityPage = () => (
  <Layout title="Security">
    <section className={pageClasses}>
      <div className={styles.page__heading}>
        <h2>Privacy and Security</h2>
        <p className={styles.heading__underlined}>Your data belongs to you. Period.</p>
      </div>

      <div className={styles.page__content}>
        <p>We take user privacy seriously, and do everything within reason to protect our users’ data.</p>

        <ul>
          <li>All traffic is encrypted between the user and the production infrastructure</li>
          <li>Database access occurs over encrypted, firewalled connections only allowed from our production environment</li>
          <li>The database is encrypted at rest</li>
          <li>No user created data is accessible to any employees</li>
          <li>No user created data is ever sent to third party services, outside of our infrastructure providers</li>
          <li>No user created data is ever logged by any of our systems</li>
          <li>User created data is available to our application code to perform validation, parse structured data, etc. on behalf of the user</li>
          <li>Internal policy, process, and systems work to ensure your data remains private and secure</li>
          <li>We keep full internal audit logs of user actions (but no user created data!)</li>
        </ul>
      </div>
    </section>
  </Layout>
)

SecurityPage.propTypes = {
}

export default SecurityPage
