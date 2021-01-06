import React from 'react'
import PropTypes from 'prop-types'

import { LINK_SIGNUP } from '../../constants'
import './HeroComponent.scss'

const HeroComponent = ({ description, image, showSignup, signupLanguage, title }) => {
  function renderSignupSnippet(modifier) {
    return (
      <div className={`hero__signup hero__signup--${modifier}`}>
        <a href={LINK_SIGNUP} className="button button--large button--orange">{signupLanguage}</a>
        <small>No credit card required</small>
      </div>
    )
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          {title && <h1 className="hero__title">{title}</h1>}
          {description && <p className="hero__description">{description}</p>}
          {showSignup && renderSignupSnippet('large') }
        </div>
        {image &&
        <div className="hero__image">
          <img src={image} width="642" height="498" alt={title} />
        </div>
        }
        {showSignup && renderSignupSnippet('small') }
      </div>
    </div>
  )
}

HeroComponent.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  showSignup: PropTypes.bool,
  signupLanguage: PropTypes.string,
  title: PropTypes.string,
}

HeroComponent.defaultProps = {
  signupLanguage: 'Try for free'
}

export default HeroComponent
