import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import './BlobComponent.scss'

const BlobComponent = ({ blobImage, blobPixels, blobScreenshot, children }) => {
  return (
    <div className="blob">
      <div className="blob__container">
        <div className="blob__content">
          <Img className="blob__pixels" fixed={blobPixels} />
          <div className="blob__children">
            {children}
          </div>
        </div>
        <div className="blob__screenshot">
          <Img fluid={blobScreenshot} />
        </div>
      </div>
      <div className="blob__artwork">
        <Img className="blob__artwork-image" fluid={blobImage} alt="Blob artwork" />
      </div>
    </div>
  )
}

BlobComponent.propTypes = {
  blobImage: PropTypes.object.isRequired,
  blobPixels: PropTypes.object.isRequired,
  blobScreenshot: PropTypes.object.isRequired,
  children: PropTypes.node,
}

BlobComponent.defaultProps = {
}

export default BlobComponent
