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
    <Layout title="Your Collaborative Content Hub" sponsor={sponsor}>
      <HeroComponent
        title="Your Collaborative Content Hub"
        description={`<p>Publish an ebook. Update a website. Record your meeting notes.<br />Work on a whole range of projects with your team, on any device.</p>`}
        showSignup={true}
      >
        <Img
          alt="Content Hub illustration"
          loading="eager"
          fluid={data.heroImage.childImageSharp.fluid}
        />
      </HeroComponent>
      <ImageTextComponent
        accent="squiggle"
        align="left"
        image={data.integrationImage.childImageSharp.fluid}
        title={`Integrations<br />and a powerful API`}
      >
        <p>
          Share and publish your content, wherever you need it. Publish websites, events, or your
          next book. Automate the creation of documents in your workflow.
        </p>
      </ImageTextComponent>
      <ImageTextComponent
        accent="stroke"
        align="right"
        image={data.markdownImage.childImageSharp.fluid}
        title={`Write in Markdown,<br />but don’t stop there`}
        offset={true}
      >
        <p>
          Write in Markdown just like in your favorite notes app. Add custom fields such as
          images, dates, and files. Structure your projects and documents however you like.
        </p>
        <p>
          Like a headless CMS, document fields allow you to render your document wherever you need,
          and display it however you want.
        </p>
        <p>
          It’s simple. Your code is on Github, your content is in Portway.
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
  query HomepageQuery {
    site {
      siteMetadata {
        description
      }
    }
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
