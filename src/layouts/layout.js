import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { identifySignupSource } from '../scripts/utilities'
import SEO from '../components/base/seo'
import Header from '../components/base/header'
import Footer from '../components/base/footer'

function createMarkup(message) {
  return { __html: message }
}

const Layout = ({ children, description, sponsor, title }) => {
  function preventClick(e) {
    e.preventDefault()
    e.stopImmediatePropagation()
  }

  const initScrollDragging = useCallback(() => {
    let isDragged = false
    let isDown = false
    let startX; let scrollLeft
    const scrollerComponents = document.querySelectorAll('.scroller-component')
    scrollerComponents.forEach((slider) => {
      slider.addEventListener('mousedown', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })
      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mouseup', () => {
        isDown = false
        const anchors = slider.querySelectorAll('a, button')
        if (isDragged) {
          anchors.forEach((anchor) => {
            anchor.addEventListener('click', preventClick, { passive: false })
          })
        } else {
          anchors.forEach((anchor) => {
            anchor.removeEventListener('click', preventClick, { passive: false })
          })
        }
        slider.classList.remove('active')
        isDragged = false
      })
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return
        isDragged = true
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = x - startX
        slider.scrollLeft = scrollLeft - walk
      })
    })
  }, [])

  useEffect(() => {
    initScrollDragging()
  }, [initScrollDragging])

  useEffect(() => {
    const source = identifySignupSource()
      const signupLinks = document.querySelectorAll(`a[data-link="portway-signup"]`)
      signupLinks.forEach((link) => {
        link.addEventListener('click', () => {
          window.fathom.trackGoal('QZ29LVBW', 0)
        })
        if (source) {
          if (!link.href.includes('?')) {
            link.href = `${link.href}?source=${source}`
          }
        }
      })
  })

  return (
    <div className="application">
      <SEO title={title} description={description} />
      <Header siteTitle={title} />
      {sponsor && sponsor.showBanner && sponsor.message &&
      <section className="sponsor">
        {sponsor.logo &&
          <img className="sponsor__image" src={sponsor.logo} width={36} height={36} alt={`${sponsor.name} logo`} />
        }
        <div dangerouslySetInnerHTML={createMarkup(sponsor.message)} />
      </section>
      }
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  sponsor: PropTypes.object,
  title: PropTypes.string,
}

export default Layout
