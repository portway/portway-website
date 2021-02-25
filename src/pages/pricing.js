import React from 'react'
import cx from 'classnames'

import { LINK_SIGNUP } from '../constants'
import Layout from '../layouts/layout'

import FeatureScrollerComponent from '../chunks/FeatureScroller/FeatureScrollerComponent'
import NerdHighlightsComponent from '../chunks/NerdHighlights/NerdHighlightsComponent'

import checkmark from '../img/icon-checkmark.svg'
import styles from '../css/page.module.scss'

const pageClasses = cx({
  [styles.page]: true,
  'container': true
})

const cardFeatureList = [
  'Unlimited projects',
  'Unlimited documents',
  '10GB Storage',
  'Private & Secure',
  'Multiple teams and users',
  'Real-time document collaboration',
]

const PricingPage = () => {
  return (
    <Layout title="Pricing">
      <section className={pageClasses}>
        <div className={styles.page__heading}>
          <h2>The right price for just you,<br />or your whole team.</h2>
          <p className={styles.heading__underlined}>30-day free trial – hassle free</p>
        </div>
        <div className={styles.page__content}>
          <p>
            Give Portway a try with no obligations. Your data is yours, and we don’t sell your information
            to anyone. Do nothing and your trial will expire with no further action. Like what you see?
            Enter your payment info and pick a plan to support independent software.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.card__title}>
                Simple pricing
              </h3>
              <div className={styles.card__content}>
                <ul className={styles.feature__list}>
                  {cardFeatureList.map((feature, index) => {
                    return <li key={`feature-${index}`}><img src={checkmark} width="16" height="16" alt="Included" /> {feature}</li>
                  })}
                </ul>
              </div>
              <div className={styles.card__action}>
                <div>
                  <div className={styles.card__price}>$10</div> per user / month
                </div>
                <a href={LINK_SIGNUP} rel="external" className="button button--green">Try for free</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NerdHighlightsComponent />
      <FeatureScrollerComponent />
    </Layout>
  )
}

export default PricingPage
