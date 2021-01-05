import React from 'react'
import PropTypes from 'prop-types'

import SEO from '../components/base/seo'
import Header from '../components/base/header'
import Footer from '../components/base/footer'

function createMarkup(message) {
  return { __html: message }
}

const Layout = ({ children, description, sponsor, title }) => {
  return (
    <div className="application">
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  sponsor: PropTypes.object,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Home'
}

export default Layout
