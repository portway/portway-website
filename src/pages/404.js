import React from 'react'

import Layout from '../layouts/layout'

const notFoundStyles = {
  minHeight: '70vh',
  padding: '4rem 0',
  textAlign: 'center'
}

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <div style={notFoundStyles}>
      <h2>Page not found</h2>
      <p>If you think this is in error, please <a href="mailto:support@portway.app">contact us</a></p>
    </div>
  </Layout>
)

export default NotFoundPage
