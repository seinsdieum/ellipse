const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

function rowPoint()
{
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function text(str) {
    let textCase = document.createElement('p')
    textCase.append(str)
    return textCase
}

const product = rowPoint()
product.style.backgroundColor = 'black'
product.appendChild(text('lalala'));

const newPoint = rowPoint()
newPoint.style.backgroundColor = 'yellow'
newPoint.append(text('krasava'))

const company = rowPoint()
company.style.backgroundColor = 'red'

const element = document.querySelector('article')

let changeableElement;

let productClicked = false;
let newClicked = false;
let companyClicked = false;
let supportClicked = false;
let eventClicked = false;


function showProductMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(product)
    console.log(product)
}

function showNewMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(newPoint)
    console.log(newPoint)
}

function showCompanyMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(company)
    console.log(company)
}



function disposeTestMenu() {
    element.firstChild.replaceWith(changeableElement)
}
const warning = document.querySelector('header.warning')
window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / window.innerHeight

    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    for(let header of headers) {
        header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    }
    warning.style.opacity = `${0}`

})