import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

import { FORM_MAILCHIMP_ACTION_URL, LINK_GUIDES } from '../../constants'

const Footer = () => {
  const formRef = useRef()
  const isBrowser = typeof window !== `undefined`
  const params = isBrowser ? Object.fromEntries(new URLSearchParams(location.search)) : {}

  useEffect(() => {
    if (params.received && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [params.received])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content-left">
            <div className="footer__logo" />
            <div className="footer__links">
              <ul>
                <li><Link to="/support">Pricing</Link></li>
                <li><a href={LINK_GUIDES} target="_blank" rel="noopener noreferrer">Guides</a></li>
              </ul>
              <ul>
                <li><a href={LINK_GUIDES} target="_blank" rel="noopener noreferrer">API</a></li>
                <li><Link to="/security">Security</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
              <ul>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
          {/* /content-left */}
          <div className="footer__content-right">
            <h4 className="footer__form-title">Get updates and news</h4>
            {!params.received &&
            <form
              action={FORM_MAILCHIMP_ACTION_URL}
              className="footer__form"
              method="post"
              ref={formRef}
            >
              <input type="email" name="email" aria-label="Email address" placeholder="Enter your email address" />
              <button>Sign up</button>
            </form>
            }
            {params.received &&
            <p>Thank you for subscribing!</p>
            }
          </div>
          {/* /content-right */}
        </div>
        {/* /footer__content */}
        <div className="footer__info">
          <div className="footer__social">
            <a href="https://twitter.com/portwayapp" target="_blank" rel="noreferrer noopener">
              <img src="/img/icon-twitter.svg" width="26" height="27" alt="Twitter" />
              <b>Follow us on Twitter</b>
            </a>
          </div>
          <div className="footer__copyright">
            <b>&copy;Portway {new Date().getFullYear()}</b> All rights
          </div>
        </div>
        {/* /footer__info */}
      </div>
      {/* /container */}
    </footer>
  )
}

Footer.propTypes = {
}

export default Footer
