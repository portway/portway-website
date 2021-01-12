import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const UNDERLINE_STYLES = {
  SQUIGGLE: 'squiggle',
  STRAIGHT: 'straight',
}

const ImageTextComponent = ({ align, children, image, title, underline }) => {
  const titleClasses = cx({
    'image-text__title': true,
    'image-text__title--squiggle': underline === UNDERLINE_STYLES.SQUIGGLE,
    'image-text__title--straqight': underline === UNDERLINE_STYLES.STRAIGHT,
  })
  return (
    <div className={`image-text image-text--${align}`}>
      {image &&
      <picture>
        <source srcSet={image.src} media="(max-width: 767px)" />
        <source srcSet={image.src2x} media="(min-width: 768px)" />
        <img src={image.src} width={image.width} height={image.height} alt={image.alt} />
      </picture>
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
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    src2x: PropTypes.string,
    width: PropTypes.number.isRequired,
  }),
  title: PropTypes.string,
  underline: PropTypes.oneOf(Object.values(UNDERLINE_STYLES))
}

ImageTextComponent.defaultProps = {
  align: 'left',
  underline: UNDERLINE_STYLES.STRAIGHT,
}

export default ImageTextComponent
