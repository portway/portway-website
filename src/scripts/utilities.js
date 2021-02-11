export const throttle = (action) => {
  let isRunning = false
  return () => {
    if (isRunning) return
    isRunning = true
    window.requestAnimationFrame(() => {
      action()
      isRunning = false
    })
  }
}

// https://stackoverflow.com/a/2117523
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

// Helper function to determine where the signup source is coming from
// e.g. google ad campaign via utm query params, or targeted landing page etc.
export function identifySignupSource(sponsor) {
  if (sponsor && sponsor.slug && typeof window !== 'undefined') {
    if (window.location.toString().includes(sponsor.slug)) {
      return sponsor.slug
    }
  }
  if (typeof window !== 'undefined' && window.location.search !== '') {
    const params = new URLSearchParams(window.location.search)
    // Multiple utm params
    if (params.has('utm_source') && params.has('utm_campaign')) {
      return encodeURIComponent(`UTM ${params.get('utm_source')} ${params.get('utm_campaign')}`)
    }
    // Single utm param
    if (params.has('utm_source')) {
      return encodeURIComponent(`UTM ${params.get('utm_source')}`)
    }
  }
}
