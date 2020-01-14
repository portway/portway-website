import '../css/shared.scss'
import '../css/support.scss'

import './navigation'

(() => {
  const params = new URLSearchParams(location.search)
  const success = params.get('received')
  if (success === 'true') {
    const supportForm = document.querySelector('#support-form')
    supportForm.classList.add('support__form--submitted')
  }
})()
