import React from 'react'
import PropTypes from 'prop-types'

import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, description, title }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header siteTitle={title} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Home'
}

export default Layout
