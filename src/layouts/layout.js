import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

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
  // useEffect(() => {
  //   // Save the queryParams so we can attach them to any external link
  //   if (typeof window !== `undefined` && window.location.search !== '') {
  //     window.portwayParams = window.location.search
  //   }
  //   const externaLinks = document.querySelectorAll('[rel="external"]')
  //   if (window.portwayParams) {
  //     externaLinks.forEach((link) => {
  //       if (!link.href.includes('?')) {
  //         link.href = link.href + `${window.portwayParams}`
  //       }
  //     })
  //   }
  // })
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
