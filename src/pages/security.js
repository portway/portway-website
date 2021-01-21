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
        <h2>Security</h2>
        <p className={styles.heading__underlined}>Portway is secure</p>
      </div>

      <div className={styles.page__content}>
        <p>TBD</p>
      </div>
    </section>
  </Layout>
)

SecurityPage.propTypes = {
}

export default SecurityPage
