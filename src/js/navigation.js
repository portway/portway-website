(() => {
  let expanded = false
  const menuBtn = document.querySelector('#menu-btn')
  const menu = document.querySelector('#menu')
  const menuInfo = document.querySelector('#info')

  function toggleMenu() {
    if (!expanded) {
      menuBtn.setAttribute('aria-expanded', 'true')
      menuBtn.classList.add('active')
      menu.classList.add('active')
      menuInfo.classList.add('active')
      document.body.style.overflow = 'hidden'
      expanded = true
    } else {
      menuBtn.setAttribute('aria-expanded', 'false')
      menuBtn.classList.remove('active')
      menu.classList.remove('active')
      menuInfo.classList.remove('active')
      document.body.style.overflow = 'auto'
      expanded = false
    }
  }

  menuBtn.addEventListener('click', toggleMenu, false)
  menuBtn.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'enter') {
      toggleMenu()
    }
  }, false)

})()
