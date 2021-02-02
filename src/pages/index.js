import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../layouts/layout'
import HeroComponent from '../components/hero/HeroComponent'
import ImageTextComponent from '../components/text/ImageTextComponent'
import BlobComponent from '../components/blob/BlobComponent'

import FeatureScrollerComponent from '../chunks/FeatureScroller/FeatureScrollerComponent'
import GuidesScrollerComponent from '../chunks/GuidesScroller/GuidesScrollerComponent'
import NerdHighlightsComponent from '../chunks/NerdHighlights/NerdHighlightsComponent'

const IndexPage = ({ data, pageContext }) => {
  const sponsor = pageContext && pageContext.sponsor

  const screenshotSources = [
    data.mobileScreenshotLight.childImageSharp.fluid,
    {
      ...data.mobileScreenshotDark.childImageSharp.fluid,
      media: `(max-width: 767px) and (prefers-color-scheme: dark)`
    },
    {
      ...data.desktopScreenshotLight.childImageSharp.fluid,
      media: `(min-width: 768px) and (prefers-color-scheme: light)`,
    },
    {
      ...data.desktopScreenshotDark.childImageSharp.fluid,
      media: `(min-width: 768px) and (prefers-color-scheme: dark)`,
    }
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
          loading="eager"
          fluid={data.heroImage.childImageSharp.fluid}
        />
      </HeroComponent>
      <ImageTextComponent accent="squiggle" align="left" image={data.integrationImage.childImageSharp.fluid} title="Integrations and a powerful API">
        <p>Share and publish your content, wherever you need it.</p>
      </ImageTextComponent>
      <ImageTextComponent
        accent="stroke"
        align="right"
        image={data.markdownImage.childImageSharp.fluid}
        title="Write in Markdown, but don’t stop there"
        offset={true}
      >
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
      <NerdHighlightsComponent />
      <FeatureScrollerComponent />
      <GuidesScrollerComponent />
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
    heroImage: file(relativePath: { eq: "hero@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 642) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    integrationImage: file(relativePath: { eq: "integrations@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 557) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    markdownImage: file(relativePath: { eq: "markdown@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 556) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    blobImage: file(relativePath: { eq: "blob-background-art.png" }) {
      childImageSharp {
        fluid(maxWidth: 707) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
    mobileScreenshotLight: file(relativePath: { eq: "collab-mobile--light.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mobileScreenshotDark: file(relativePath: { eq: "collab-mobile--dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopScreenshotLight: file(relativePath: { eq: "collab-desktop--light.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopScreenshotDark: file(relativePath: { eq: "collab-desktop--dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
