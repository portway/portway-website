import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import HeroComponent from '../components/hero/HeroComponent'
import ImageTextComponent from '../components/text/ImageTextComponent'

const IndexPage = ({ data, pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  console.log(data)

  return (
    <Layout title="Your collaborative markdown writing app" sponsor={sponsor}>
      <HeroComponent
        title="A Content Platform Built on Collaborative Markdown Documents"
        description="Manage and collaborate on all your content, from meeting notes to website copy, on any device."
        showSignup={true}
      >
        <Img
          alt="Content platform illustration"
          loading={true}
          fluid={data.heroImage.childImageSharp.fluid}
        />
      </HeroComponent>
      <ImageTextComponent accent="squiggle" align="left" image={data.integrationImage.childImageSharp.fluid} title="Integrations and a powerful API">
        <p>Share and publish your content, wherever you need it.</p>
      </ImageTextComponent>
      <ImageTextComponent accent="stroke" align="right" image={data.markdownImage.childImageSharp.fluid} title="Write in Markdown, but don’t stop there">
        <p>Write in Markdown just like you do in your favorite notes app. Then when you need to add media or additional data, insert fields to structure your document.</p>
        <p>Named fields are then available in the API so you can output your document wherever you need, and display it however you desire.</p>
      </ImageTextComponent>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export default IndexPage

// Image queries
export const pageQuery = graphql`
  query HomepageImageQuery {
    heroImage: file(relativePath: { eq: "fpo_hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 642) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    integrationImage: file(relativePath: { eq: "fpo_integrations.png" }) {
      childImageSharp {
        fluid(maxWidth: 557) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownImage: file(relativePath: { eq: "fpo_markdown.png" }) {
      childImageSharp {
        fluid(maxWidth: 556) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
