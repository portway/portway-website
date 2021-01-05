import React from 'react'

import Layout from '../layouts/layout'

const PrivacyPage = () => (
  <Layout title="Privacy policy">
    <div className="container support">
      <section className="intro">
        <h2 className="intro__title">We are dedicated to your privacy</h2>
        <p className="intro__subtitle">We’ve made this as easy as possible</p>
      </section>
      {/* /Intro */}
      <section className="privacy">

        <div className="privacy__section">
          <h3>Personal information:</h3>
          <p>We collect the following personal information:</p>
          <ul>
            <li><span className="pill pill--green-light">Name</span></li>
            <li><span className="pill pill--green-light">Email</span></li>
            <li><span className="pill pill--green-light">Billing address</span></li>
          </ul>
          <p>
            We collect your <strong>name and email address</strong>. This information is only used by the Portway application.
          </p>
          <p>
            If you are on a paid Portway plan, we will collect your <strong>billing address</strong> in order to remain in compliance with local authorities, including the collection and remission of appropriate taxes. Your location information is used for no other purpose.
          </p>
          <p>We do not collect any additional Personally Identifiable Information (PII.)</p>
        </div>

        <div className="privacy__section">
          <h3>Marketing &amp; advertising:</h3>
          <p>
            We do not sell your information to anyone. We do not provide your information to anyone.
            Portway is not an ad company.
          </p>
        </div>

        <div className="privacy__section">
          <h3>Cookie Disclosure</h3>
          <p>
            The Portway app uses a single cookie to authorize your access after you log in. The cookie does not contain Personally Identifiable Information. The cookie is deleted when you log out of the app.
          </p>
        </div>

        <div className="privacy__section">
          <h3>Third-parties:</h3>
          <p>
            We use the following vendors for support services. These vendors may receive your email
            address and name:
          </p>
          <ul>
            <li><span className="pill pill--green-light">Name and email</span>Zendesk</li>
            <li><span className="pill pill--green-light">Name and email</span>Slack</li>
          </ul>
          <p>We use the following services for processing and hosting data, which may include your name and email:</p>
          <ul>
            <li><span className="pill pill--green-light">Name and email</span> Rapid7</li>
            <li><span className="pill pill--green-light">Name and email</span> Amazon AWS </li>
            <li><span className="pill pill--green-light">Name and email</span> DigitalOcean</li>
          </ul>
          <p>We use Stripe for payment processing. We do not have access to your payment account numbers, such as your credit card number. Stripe securely processes the payments and informs us when payments succeed or fail.</p>
          <ul>
            <li><span className="pill pill--green-light">Name, email, address, payment info</span> Stripe</li>
          </ul>
        </div>

      </section>
    </div>
    {/* /container */}
  </Layout>
)

export default PrivacyPage
