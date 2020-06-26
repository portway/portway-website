import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className="container page-footer">
      <span className="page-footer__copyright">
        &copy; 2019 &ndash; {new Date().getFullYear()}, <a href="https://bonkeybong.com" rel="noopener noreferrer" target="_blank">BonkeyBong, LLC</a>
      </span>
      <span className="page-footer__links">
        <Link to="/support">Contact us</Link>&nbsp;–&nbsp;
        <Link to="/privacy">Privacy policy</Link>&nbsp;–&nbsp;
        <Link to="/terms">Terms of service</Link>&nbsp;–&nbsp;
        <a href="https://twitter.com/portwayapp" target="_blank" rel="noreferrer noopener"><b>@PortwayApp</b></a>
      </span>
    </footer>
  )
}

Footer.propTypes = {
}

export default Footer
