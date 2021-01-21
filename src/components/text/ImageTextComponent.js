import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Img from 'gatsby-image'

import './ImageTextComponent.scss'

const ACCENT_STYLES = {
  SQUIGGLE: 'squiggle',
  STROKE: 'stroke',
}

const ImageTextComponent = ({ accent, align, children, image, offset, title }) => {
  const titleClasses = cx({
    'image-text__title': true,
    'image-text__title--squiggle': accent === ACCENT_STYLES.SQUIGGLE,
    'image-text__title--stroke': accent === ACCENT_STYLES.STROKE,
  })
  const imageClasses = cx({
    'image-text__image': true,
    'image-text__image--offset': offset,
  })
  return (
    <div className={`image-text image-text--${align} container`}>
      {image &&
      <div className="image-text__image-container">
        <Img className={imageClasses} fluid={image} alt={title} />
      </div>
      }
      <div className="image-text__content">
        {title &&
        <h2 className={titleClasses}>{title}</h2>
        }
        {children}
      </div>
    </div>
  )
}

ImageTextComponent.propTypes = {
  accent: PropTypes.oneOf(Object.values(ACCENT_STYLES)),
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  image: PropTypes.object,
  offset: PropTypes.bool,
  title: PropTypes.string,
}

ImageTextComponent.defaultProps = {
  accent: ACCENT_STYLES.STROKE,
  align: 'left',
  offset: false,
}

export default ImageTextComponent
