const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

const warning = document.querySelector('header.warning')

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 220

    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    for(let header of headers) {
        header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    }
    warning.style.transform = `translateY(${-y*2}vh)`

})