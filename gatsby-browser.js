/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/css/main.scss'
import './src/css/shared.scss'

const sendPageView = () => {
  window._gs('GSN-113617-U')
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  // Manually track with GoSquared
  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      sendPageView()
    })
  } else {
    // simulate 2 rAF calls
    setTimeout(sendPageView, 32)
  }
}
