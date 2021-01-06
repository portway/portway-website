import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'

// import { LINK_LOGIN, LINK_REGISTRATION_FORM } from '../constants'

import Layout from '../layouts/layout'
import HeroComponent from '../components/hero/HeroComponent'

const IndexPage = ({ pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  return (
    <Layout title="Your collaborative markdown writing app" sponsor={sponsor}>
      <HeroComponent
        title="A Content Platform Built on Collaborative Markdown Documents"
        description="Manage and collaborate on all your content, from meeting notes to website copy, on any device."
        showSignup={true}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object
}

export default IndexPage
