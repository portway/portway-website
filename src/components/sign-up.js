import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { LINK_LOGIN, LINK_REGISTRATION_FORM } from '../constants'

const SignUp = () => {
  const signupRef = useRef()

  function tosCheckHandler(e) {
    if (e.target.checked) {
      signupRef.current.removeAttribute('disabled')
    } else {
      signupRef.current.setAttribute('disabled', true)
    }
  }

  return (
    <figure className="signup-promo">
      <div className="signup-promo__content">
        <figcaption className="signup-promo__title">Try Portway for 30 days, <br />no credit card required.</figcaption>
        <p className="signup-promo__body">Already using Portway? <a href={LINK_LOGIN}>Sign in</a></p>
      </div>
      <form className="signup-promo__form" action={LINK_REGISTRATION_FORM} method="post">
        <label>
          Your full name
          <input type="text" name="name" placeholder="Jane Doe" required />
        </label>
        <label>
          Your email address
          <input type="email" name="email" placeholder="jane@example.com" required />
        </label>
        <label>
          <input type="checkbox" name="tos" onClick={tosCheckHandler} />
          I agree to the <Link to="/terms">terms of service</Link>
        </label>
        <button className="btn btn--full" type="submit" disabled ref={signupRef}>Try for free</button>
      </form>
    </figure>

  )
}

SignUp.propTypes = {
}

export default SignUp
