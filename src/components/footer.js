import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="container page-footer">
      <span className="page-footer__copyright">
        &copy; 2019 &ndash; {new Date().getFullYear()}, BonkeyBong, LLC
      </span>
      <span className="page-footer__links">
        <Link to="/support">Contact us</Link> – <Link to="/privacy">Privacy policy</Link> – <Link to="/terms">Terms of service</Link>
      </span>
    </footer>
  )
}

Footer.propTypes = {
}

export default Footer
