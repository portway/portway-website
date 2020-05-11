import React from 'react'

import { LINK_LOGIN, LINK_REGISTRATION_FORM } from '../constants'

const SignUp = () => {
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
        <button className="btn btn--full" type="submit">Try for free</button>
      </form>
    </figure>

  )
}

SignUp.propTypes = {
}

export default SignUp
