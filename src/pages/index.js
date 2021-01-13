import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import HeroComponent from '../components/hero/HeroComponent'
import ImageTextComponent from '../components/text/ImageTextComponent'
import BlobComponent from '../components/blob/BlobComponent'
import { HighlightsComponent, Highlight } from '../components/highlights/HighlightsComponent'

import securityIcon from '../img/icon-security.svg'
import globalIcon from '../img/icon-global.svg'
import permissionsIcon from '../img/icon-permissions.svg'

const IndexPage = ({ data, pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  const screenshotSources = [
    data.mobileScreenshot.childImageSharp.fluid,
    {
      ...data.desktopScreenshot.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

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
        <p>
          Write in Markdown just like you do in your favorite notes app. Then when you need to add media
          or additional data, insert fields to structure your document.
        </p>
        <p>
          Named fields are then available in the API so you can output your document wherever you need,
          and display it however you desire.
        </p>
      </ImageTextComponent>
      <BlobComponent
        blobImage={data.blobImage.childImageSharp.fluid}
        blobPixels={data.blobPixels.childImageSharp.fixed}
        blobScreenshot={screenshotSources}
      >
        <h2>Collaborate with teammates</h2>
        <p>
          Work with a team? Bring them along and see real time updates to documents as you work together.
          Conflict notices keep you from stepping on each others toes.
        </p>
      </BlobComponent>
      <HighlightsComponent>
        <Highlight title="Security" icon={securityIcon}>
          <p>
            Your content is yours alone. We ensure it’s encrypted in transit, and in our database.
            Read more about our security practices and promises
          </p>
        </Highlight>
        <Highlight title="Global Media CDN" icon={globalIcon}>
          <p>
            Images, videos, and other assets you upload are available on a global CDN, ready to be
            embedded anywhere
          </p>
        </Highlight>
        <Highlight title="Permissions" icon={permissionsIcon}>
          <p>
            Control which projects are accessible to everyone on your team, and add members to
            specific private projects.
          </p>
        </Highlight>
      </HighlightsComponent>
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
    blobImage: file(relativePath: { eq: "blob-background-art.png" }) {
      childImageSharp {
        fluid(maxWidth: 707) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    blobPixels: file(relativePath: { eq: "blob-pixels.png" }) {
      childImageSharp {
        fixed(width: 4, height: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileScreenshot: file(relativePath: { eq: "screenshot_small.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopScreenshot: file(relativePath: { eq: "screenshot_large.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
