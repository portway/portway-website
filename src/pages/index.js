import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'

// import { LINK_LOGIN, LINK_REGISTRATION_FORM } from '../constants'

import Layout from '../layouts/layout'

const IndexPage = ({ pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  return (
    <Layout title="Your collaborative markdown writing app" sponsor={sponsor}>
      <h2>A Content Platform Built on Collaborative Markdown Documents</h2>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object
}

export default IndexPage
