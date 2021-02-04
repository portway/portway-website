import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import jCaptcha from 'js-captcha'

import { FORM_SUBMISSION_ACTION_URL } from '../constants'

import Layout from '../layouts/layout'

import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const SupportPage = () => {
  const formRef = useRef()
  const validationRef = useRef()
  const jCaptchaRef = useRef()
  const captchaRef = useRef()

  const isBrowser = typeof window !== `undefined`
  const params = isBrowser ? Object.fromEntries(new URLSearchParams(location.search)) : {}
  const formClasses = cx({
    [styles.form]: true,
    [styles.formSubmitted]: params.received
  })
  const submitClasses = cx({
    [styles.form__result]: true,
    [styles.form__resultSubmitted]: params.received
  })

  useEffect(() => {
    if (captchaRef.current) {
      // Add the form action via javascript, so that bots have to use the captcha
      if (formRef.current) {
        formRef.current.setAttribute('action', FORM_SUBMISSION_ACTION_URL)
        formRef.current.style.display = 'block'
      }
      jCaptchaRef.current = new jCaptcha({
        el: '.bonkcapt',
        requiredValue: '',
        canvasClass: 'bonkCaptCanvas',
        canvasStyle: {
          // required properties for captcha stylings:
          width: 100,
          height: 18,
          textBaseline: 'top',
          font: '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          textAlign: 'left',
          fillStyle: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#fff' : '#333'
        },
        // set callback function for success and error messages:
        callback: ( response, $captchaInputElement, numberOfTries ) => {
          if ( response === 'success' ) {
            // success handle, e.g. continue with form submit
            validationRef.current = true
            return
          }
          if ( response === 'error' ) {
            // error handle, e.g. add error class to captcha input
            $captchaInputElement.classList.add('error')
            if (numberOfTries === 3) {
              // maximum attempts handle, e.g. disable form
              location.href = 'https://xkcd.com/2228/'
            }
          }
          validationRef.current = false
        }
      })
    }
  }, [])

  function formSubmitHandler(e) {
    jCaptchaRef.current.validate()
    if (jCaptchaRef.current.callbackReceived && validationRef.current) {
      return true
    } else {
      e.preventDefault()
    }
    return false
  }

  return (
    <Layout title="Support">
      <section className={pageClasses}>
        <div className={styles.page__heading}>
          <h2>How can we help you?</h2>
        </div>

        <div className={styles.page__content}>
          <h3>Contact us</h3>
          <p>
            Have a feature request or having a problem? Let us know, and we will get back to you as
            soon as we can.
          </p>
          <p>
            We’d love to hear from you.
          </p>
          <p>
            Reach us on Twitter <a href="https://twitter.com/portwayapp" target="_blank" rel="noreferrer noopener">@PortwayApp</a>
          </p>
          <noscript>
            <p>Or email us at <a href="mailto:support@portway.app">support@portway.app</a></p>
          </noscript>
          <form
            id="support-form"
            className={formClasses}
            method="POST"
            onSubmit={formSubmitHandler}
            ref={formRef}
            style={{ display: 'none' }}
          >
            <div className={submitClasses}>
              <svg height="24" viewBox="0 0 16 11" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5.62977041 11.9643422-4.42661184-4.42661188c-.17356635-.17356635-.45497301-.17356635-.62853936 0s-.17356635.45497301 0 .62853936l4.74088889 4.74088892c.17356923.1735692.45498156.1735659.62854672-.0000074l9.48133338-9.48177777c.1735622-.17357042.1735556-.45497708-.0000148-.62853936-.1735704-.17356229-.4549771-.17355569-.6285393.00001473z" fill="#6aca65" fillRule="evenodd" transform="translate(0 -2)"/></svg>
              We’ll talk soon, thanks!
            </div>
            <div className={styles.form__container}>
              <h4>Who are you?</h4>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Your name" name="name" />

              <label htmlFor="email">Email</label>
              <input type="email" placeholder="example@domain.com" name="email" required />

              <label htmlFor="company">Company</label>
              <input type="text" placeholder="Acme, Inc" name="company" />

              <div className={styles.form__options}>
                <h4>What can we help you with?</h4>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Feature request" defaultChecked="checked" /> Feature request
                </label>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Pricing" /> Pricing
                </label>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Bug report" /> Bug
                </label>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Account / billing" /> Account / billing
                </label>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Question" /> Question
                </label>
                <label className="label label--inline">
                  <input type="radio" name="subject" value="[Website] Other" /> Other
                </label>
              </div>

              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Your message..." rows="5" cols="55"></textarea>

              <label htmlFor="bonktcha">Are you a human? Solve this math problem:</label>
              <input id="bonktcha" ref={captchaRef} className="bonkcapt" type="text" placeholder="Type in result please" />
            </div>
            {/* /Form-Container */}
            <button className="button button--green">Send</button>
          </form>
        </div>

      </section>
    </Layout>
  )
}

export default SupportPage
