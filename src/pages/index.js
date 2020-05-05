import React from 'react'
import { Helmet } from 'react-helmet'

import { LINK_LOGIN, LINK_REGISTRATION_FORM } from '../constants'

import Layout from '../layouts/layout'

import homeHero from '../img/home-hero.png'
import homeHero2x from '../img/home-hero@2x.png'
import simpleNotes from '../img/illo_simple-notes.png'
import simpleNotes2x from '../img/illo_simple-notes@2x.png'
import teamImage from '../img/illo_team.png'
import teamImage2x from '../img/illo_team@2x.png'
import queryImage from '../img/illo_query.png'
import queryImage2x from '../img/illo_query@2x.png'

import '../css/home.scss'

const IndexPage = () => (
  <>
    <Helmet>
      <body className="theme-default" />
    </Helmet>
    <Layout>
      <div className="container home">
        <section className="intro">
          <h2 className="intro__title">Your collaborative writing app</h2>
          <p>
            Beautiful notes, <br /><span id="use-cases">powering your projects</span>
          </p>
          <img className="home__hero" src={homeHero} srcSet={`${homeHero}, ${homeHero2x} 2x`} alt="" width="924" height="560" />
          <p>
            Create a document and begin writing. Jot down some thoughts, manage content for your projects,
            or collaborate with your team on documentation. Write anywhere, on any device with Portway.
          </p>
        </section>
        {/* /Intro */}
        <section className="home__footer">
          <ul className="home__features">
            <li>
              <div className="home__feature-image">
                <img src={simpleNotes} srcSet={`${simpleNotes}, ${simpleNotes2x} 2x`} alt="Simple notes" width="123" height="118" />
              </div>
              <div className="home__feature-content">A frictionless notes app. No overhead. Get in there and write.</div>
            </li>
            <li>
              <div className="home__feature-image">
                <img src={teamImage} srcSet={`${teamImage}, ${teamImage2x} 2x`} alt="Collaborate" width="138" height="132" />
              </div>
              <div className="home__feature-content">
                Collaborate with your team. Add, organize, and name fields to structure your document. See real-time updates.
              </div>
            </li>
            <li>
              <div className="home__feature-image">
                <img src={queryImage} srcSet={`${queryImage}, ${queryImage2x} 2x`} alt="APIs" width="138" height="152" />
              </div>
              <div className="home__feature-content">
                Content that doesn’t dictate presentation. The API’s structured content output gives you full control.
              </div>
            </li>
          </ul>
          {/* /Features */}
          <div className="home__signup card">
            <h2 className="card__title">Try Portway for 30 days, no credit card required. We think you’ll like it.</h2>
            <form action={LINK_REGISTRATION_FORM} method="post">
              <label>
                Your full name
                <input type="text" name="name" placeholder="Enter your full name" required />
              </label>
              <label>
                Your email address
                <input type="email" name="email" placeholder="Enter your email" required />
              </label>
              <button className="btn btn--full" type="submit">Try for free</button>
              <div className="centered">
                Already using Portway? <a href={LINK_LOGIN}>Sign in</a>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* /container */}
    </Layout>
  </>
)

export default IndexPage
