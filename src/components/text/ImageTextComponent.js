import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Img from 'gatsby-image'

import './ImageTextComponent.scss'

const ACCENT_STYLES = {
  SQUIGGLE: 'squiggle',
  STROKE: 'stroke',
}

const ImageTextComponent = ({ accent, align, children, image, title }) => {
  const titleClasses = cx({
    'image-text__title': true,
    'image-text__title--squiggle': accent === ACCENT_STYLES.SQUIGGLE,
    'image-text__title--stroke': accent === ACCENT_STYLES.STROKE,
  })
  return (
    <div className={`image-text image-text--${align} container`}>
      {image &&
      <div className="image-text__image-container">
        <Img className="image-text__image" fluid={image} alt={title} />
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
  title: PropTypes.string,
}

ImageTextComponent.defaultProps = {
  accent: ACCENT_STYLES.STROKE,
  align: 'left',
}

export default ImageTextComponent
