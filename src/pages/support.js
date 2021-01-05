import React, { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import cx from 'classnames'
import jCaptcha from 'js-captcha'

import { FORM_SUBMISSION_ACTION_URL } from '../constants'

import Layout from '../layouts/layout'

const SupportPage = () => {
  const formRef = useRef()
  const validationRef = useRef()
  const jCaptchaRef = useRef()
  const captchaRef = useRef()

  const isBrowser = typeof window !== `undefined`
  const params = isBrowser ? Object.fromEntries(new URLSearchParams(location.search)) : {}
  const formClasses = cx({
    'support__form': true,
    'support__form--submitted': params.received
  })
  const submitClasses = cx({
    'support__form-result': true,
    'support__form-result--submitted': params.received
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
          fillStyle: '#fff'
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
    <>
      <Helmet>
        <body className="theme-support" />
      </Helmet>
      <Layout title="Support">
        <div className="container support">
          <section className="intro">
            <h2 className="intro__title">How can we help you?</h2>
            <p className="intro__subtitle">Guides, API documentation, and more</p>
          </section>
          {/* /Intro */}
          <section className="support__cards grid row row--two">
            <a className="card" href="https://docs.portway.app/">
              <h2>Guides</h2>
              <div className="card-content">
                <p>Example integrations and use cases</p>
                <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6.75986872-.05708393.03697271-.04186993c.16021509-.16021509.41231779-.17253933.58666943-.03697271l.04186993.03697271 6.89562291 6.8956229.0407863.04685274.0330617.05062963.020309.04122476.0205392.05900254.0065394.02743187.0081689.06284261v.05253401l-.0040791.03963327-.0072029.03732838-.0145878.04869336-.0152026.03664412-.0238869.04425239-.0187429.02792865-.013167.01724868-.0325353.03629235-6.89562291 6.8956229c-.17356635.1735663-.45497301.1735663-.62853936 0-.16021509-.1602151-.17253933-.4123178-.03697271-.5866694l.03697271-.04187 6.13649187-6.13718079-12.71784508.00027205c-.22792704 0-.41578097-.17157341-.44145435-.39261283l-.0029901-.05183161c0-.22792704.17157342-.41578096.39261283-.44145434l.05183162-.0029901 12.71784508-.00027206-6.13649187-6.13663671c-.16021509-.1602151-.17253933-.41231779-.03697271-.58666944l.03697271-.04186993z" transform="translate(.889 .889)"/></svg>
              </div>

            </a>
            <a className="card" href="https://docs.portway.app/api">
              <h2>API</h2>
              <div className="card-content">
                <p>Portway API reference documentation</p>
                <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6.75986872-.05708393.03697271-.04186993c.16021509-.16021509.41231779-.17253933.58666943-.03697271l.04186993.03697271 6.89562291 6.8956229.0407863.04685274.0330617.05062963.020309.04122476.0205392.05900254.0065394.02743187.0081689.06284261v.05253401l-.0040791.03963327-.0072029.03732838-.0145878.04869336-.0152026.03664412-.0238869.04425239-.0187429.02792865-.013167.01724868-.0325353.03629235-6.89562291 6.8956229c-.17356635.1735663-.45497301.1735663-.62853936 0-.16021509-.1602151-.17253933-.4123178-.03697271-.5866694l.03697271-.04187 6.13649187-6.13718079-12.71784508.00027205c-.22792704 0-.41578097-.17157341-.44145435-.39261283l-.0029901-.05183161c0-.22792704.17157342-.41578096.39261283-.44145434l.05183162-.0029901 12.71784508-.00027206-6.13649187-6.13663671c-.16021509-.1602151-.17253933-.41231779-.03697271-.58666944l.03697271-.04186993z" transform="translate(.889 .889)"/></svg>
              </div>
            </a>
          </section>
          {/* /Cards */}
          <section className="support__content grid row row--two">
            <div>
              <h2>Contact us</h2>
              <p>
                Have a feature request or having a problem? Let us know, and we will get back to you as soon as we can.
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
            </div>
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
              <div className="support__form-container">
                <label>
                  Name
                  <input type="text" placeholder="Your name" name="name" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="example@domain.com" name="email" required />
                </label>
                <label>
                  Company
                  <input type="text" placeholder="Acme, Inc" name="company" />
                </label>
                <div className="support__form-radio-buttons">
                  <span className="label">What can we help you with?</span>
                  <div className="grid row row--two">
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
                </div>
                <label>
                  Message
                  <textarea name="message" placeholder="Your message..."></textarea>
                </label>
                <label>
                  Are you a human? Solve this math problem:
                  <input ref={captchaRef} className="bonkcapt" type="text" placeholder="Type in result please" />
                </label>
                <button className="btn">Send</button>
              </div>
              {/* /Form-Container */}
            </form>
          </section>
        </div>
        {/* /container */}
      </Layout>
    </>
  )
}

export default SupportPage
