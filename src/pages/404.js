import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'

const notFoundStyles = {
  minHeight: '70vh',
  padding: '4rem 0',
  textAlign: 'center'
}

const NotFoundPage = () => (
  <>
    <Helmet>
      <body className="theme-default" />
    </Helmet>
    <Layout title="404: Not found">
      <div style={notFoundStyles}>
        <h1>Page not found</h1>
        <p>If you think this is in error, please <a href="mailto:support@portway.app">contact us</a></p>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
