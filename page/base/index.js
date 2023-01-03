const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

const warning = document.querySelector('header.warning')

const disclaimerYes = document.getElementsByName('disclaimerY')
const disclaimerNo = document.getElementsByName('disclaimerN')
const discLayer = document.querySelector('div.color-layer')
const disclaimer = document.querySelector('div.disclaimer')

window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY/5 || window.pageYOffset) / window.innerHeight*window.innerWidth/60
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    for(let header of headers) {
        header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    }
    warning.style.transform = `translateY(${-y}vh)`

})

disclaimerYes[0].addEventListener('mousedown', () => {
    discLayer.style.display = 'none'
    disclaimer.style.display = 'none'
})

disclaimerNo[0].addEventListener('mousedown', () => {
    history.back()
})

