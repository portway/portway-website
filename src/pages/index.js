import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../layouts/layout'
import HeroComponent from '../components/hero/HeroComponent'
import ImageTextComponent from '../components/text/ImageTextComponent'

import heroImage from '../img/fpo_hero.png'
import heroImage2x from '../img/fpo_hero@2x.png'
// Text-Media
import integrationsImage from '../img/fpo_integrations.png'
import integrationsImage2x from '../img/fpo_integrations@2x.png'

const integrationImage = {
  alt: 'Publishing illustration',
  height: 372,
  src: integrationsImage,
  src2x: integrationsImage2x,
  width: 557,
}

const IndexPage = ({ pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  return (
    <Layout title="Your collaborative markdown writing app" sponsor={sponsor}>
      <HeroComponent
        title="A Content Platform Built on Collaborative Markdown Documents"
        description="Manage and collaborate on all your content, from meeting notes to website copy, on any device."
        showSignup={true}
      >
        <picture>
          <source srcSet={heroImage} media="(max-width: 767px)" />
          <source srcSet={heroImage2x} media="(min-width: 768px)" />
          <img src={heroImage} width="631" height="478" alt="" />
        </picture>
      </HeroComponent>
      <ImageTextComponent align="left" image={integrationImage} title="Integrations and a powerful API">
        <p>Share and publish your content, wherever you need it.</p>
      </ImageTextComponent>
    </Layout>
  )
}

IndexPage.propTypes = {
  pageContext: PropTypes.object
}

export default IndexPage
