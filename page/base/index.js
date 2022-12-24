const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

const text = 'kek lol karvalol'
const textElement = document.createElement('h1')
textElement.append(text)
const menuInfo = document.createElement('div.row')
menuInfo.appendChild(textElement)
const element = document.querySelector('article')

let changeableElement;

console.log(headers)
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 500
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    for(let header of headers) {
        header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }

})

function showTestMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(menuInfo)
}

function disposeTestMenu() {
    element.firstChild.replaceWith(changeableElement)
}