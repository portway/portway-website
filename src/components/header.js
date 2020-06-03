import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import { LINK_LOGIN, LINK_SIGNUP } from '../constants'

import logo from '../img/logo-horizontal.svg'

const Header = ({ siteTitle }) => {
  const [expanded, setExpanded] = useState(false)
  const menuClasses = cx({
    'menu': true,
    'active': expanded
  })
  return (
    <>
      <header className="masthead">
        <div className="container header">
          <Link to="/">
            <h1 hidden>Portway</h1>
            <img className="masthead__logo" src={logo} alt="Portway Logo" width="161" height="40" />
          </Link>
          <nav className="navigation" role="navigation">
            <button
              id="menu-btn"
              className="menu-btn"
              onClick={() => {
                setExpanded(!expanded)
              }}
              aria-controls="menu"
              aria-expanded={expanded}
              aria-label="Navigation menu"
            >
              <div className="visually-hidden">Menu</div>
              <svg className="menu-btn__close" height="24" viewBox="0 0 36 36" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m-.11029539.06710056.08318861-.09420734c.36048396-.36048396.92771502-.3882135 1.32000622-.08318861l.09420734.08318861 15.61289322 15.61210678 15.6128932-15.61210678c.360484-.36048396.927715-.3882135 1.3200062-.08318861l.0942074.08318861c.3604839.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-15.6131068 15.61289322 15.6131068 15.6128932c.3604839.360484.3882135.927715.0831886 1.3200062l-.0831886.0942074c-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-15.6128932-15.6131068-15.61289322 15.6131068c-.36048396.3604839-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886c-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074 15.61210678-15.6128932-15.61210678-15.61289322c-.36048396-.36048396-.3882135-.92771502-.08318861-1.32000622l.08318861-.09420734z" fill="#333" fillRule="evenodd" transform="translate(1 1)"/></svg>
              <svg className="menu-btn__open" height="24" viewBox="0 0 36 36" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm-13 0c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm26 0c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" fill="#333" fillRule="evenodd"/></svg>
            </button>
            <ul id="menu" className={menuClasses}>
              <li><Link activeClassName="active" to="/features" className="features"><span>Features</span></Link></li>
              <li><Link activeClassName="active" to="/pricing" className="pricing"><span>Pricing</span></Link></li>
              <li><Link activeClassName="active" to="/support" className="support"><span>Support</span></Link></li>
            </ul>
          </nav>
          <div id="info" className="masthead__info">
            <b><a href={LINK_LOGIN}>Log in</a></b> or <a className="btn" href={LINK_SIGNUP}>Try for free</a>
          </div>
        </div>
      </header>
      <div className="visually-hidden">
        <h1>{siteTitle}</h1>
      </div>
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
