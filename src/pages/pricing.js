import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'
import SignUp from '../components/sign-up'

import '../css/pricing.scss'

const PricingPage = () => (
  <>
    <Helmet>
      <body className="theme-pricing" />
    </Helmet>
    <Layout title="Pricing">
      <div className="container pricing">
        <section className="intro">
          <h2 className="intro__title">The right price for just you, or your whole team.</h2>
          <p className="intro__subtitle">30-day free trial – hassle free</p>
          <p>
            Give Portway a try with no obligations. Your data is yours, and we don’t sell your information
            to anyone. Do nothing and your trial will expire with no further action. Like what you see?
            Enter your payment info and pick a plan to support independent software.
          </p>
        </section>
        {/* /Intro */}
        <section className="plans">
          <div className="plan card">
            <h3 className="plan__title">Solo plan</h3>
            <div>
              <span className="plan__cost">$10</span>
              <span className="plan__period">/mo.</span>
            </div>
            <p className="plan__notes">&nbsp;</p>
            <ul className="feature-list">
              <li className="feature-list__item feature-list__item--yes">Unlimited projects</li>
              <li className="feature-list__item feature-list__item--yes">Unlimited documents</li>
              <li className="feature-list__item feature-list__item--yes">10GB Storage</li>
              <li className="feature-list__item feature-list__item--yes">Private &amp; Secure</li>
            </ul>
          </div>
          {/* Plan */}
          <div className="plan card">
            <h3 className="plan__title">Team plan</h3>
            <div>
              <span className="plan__cost">$50</span>
              <span className="plan__period">/mo.</span>
            </div>
            <p className="plan__notes">5 users included, $10/user after</p>
            <ul className="feature-list">
              <li className="feature-list__item feature-list__item--yes">Unlimited projects</li>
              <li className="feature-list__item feature-list__item--yes">Unlimited documents</li>
              <li className="feature-list__item feature-list__item--yes">10GB Storage</li>
              <li className="feature-list__item feature-list__item--yes">Private &amp; Secure</li>
              <li className="feature-list__item feature-list__item--yes">Multiple teams and users (5 included)</li>
              <li className="feature-list__item feature-list__item--yes">Real-time document collaboration</li>
            </ul>
          </div>
          {/* /Plan */}
        </section>
        {/* /Plans */}
        <SignUp />
      </div>
      {/* /container */}
    </Layout>
  </>
)

export default PricingPage
