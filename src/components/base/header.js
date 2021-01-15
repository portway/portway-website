import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { throttle } from '../../scripts/utilities'

// Polyfills
import smoothscroll from 'smoothscroll-polyfill'

import { LINK_LOGIN, LINK_SIGNUP } from '../../constants'

const Header = ({ siteTitle }) => {
  const logoRef = useRef()
  const scrollHandler = () => {
    if (logoRef && logoRef.current) {
      if (window.scrollY >= 120) {
        logoRef.current.classList.remove('visible')
      } else {
        logoRef.current.classList.add('visible')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(scrollHandler), false)
    scrollHandler()
    smoothscroll.polyfill()
  }, [])

  return (
    <>
      <header className="masthead">
        <div className="container">
          <Link to="/" className="masthead__logo" ref={logoRef}>
            <h1>Portway</h1>
          </Link>
          <div className="masthead__info">
            <b><a href={LINK_LOGIN} className="text-link">Log in</a></b> or <a className="button button--clear" href={LINK_SIGNUP}>Try for free</a>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
