import React from 'react'
import PropTypes from 'prop-types'

import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'

function createMarkup(message) {
  return {__html: message}
}

const Layout = ({ children, description, sponsor, title }) => {
  return (
    <>
      <SEO title={title} description={description} />
      <Header siteTitle={title} />
      {sponsor && sponsor.showBanner && sponsor.message &&
      <section className="sponsor">
        {sponsor.logo &&
          <img className="sponsor__image" src={sponsor.logo} width={36} height={36} alt={`${sponsor.name} logo`} />
        }
        <div dangerouslySetInnerHTML={createMarkup(sponsor.message)} />
      </section>
      }
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
  sponsor: PropTypes.object,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Home'
}

export default Layout
