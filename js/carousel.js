const prev = document.querySelector ('.carousel .prev')
const next = document.querySelector ('.carousel .next')
const items = document.querySelectorAll ('.carousel .carousel-items .item')

let current = 0


next.addEventListener ('click', () => {
  items.forEach ((item) => item.classList.remove ('show'))
  items[
    current >= items.length - 1 ? items.length - 1 : current += 1
  ].classList.add ('show')
})

prev.addEventListener ('click', () => {
  items.forEach ((item) => item.classList.remove ('show'))
  items[
    current <= 0 ? 0 : current -= 1
  ].classList.add ('show')
})
