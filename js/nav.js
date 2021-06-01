const btnClose = document.querySelector ('nav button')
const btnOpen = document.querySelector ('.home button')
const navButtons = document.querySelectorAll ('nav .btn')
const nav = document.querySelector ('nav')

navButtons.forEach ((navButton) => {
  navButton.addEventListener ('click', () => nav.classList.remove ('open'))
})
btnClose.addEventListener ('click', () => nav.classList.remove ('open'))
btnOpen.addEventListener ('click', () => nav.classList.add ('open'))

