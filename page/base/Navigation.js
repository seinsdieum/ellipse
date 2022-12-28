
function rowPoint()
{
    let row = document.createElement('div')
    row.className = 'update-row'
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

const emptiness = rowPoint()

const productButton = document.getElementsByName('product-button')
const newButton = document.getElementsByName('new-button')
const companyButton = document.getElementsByName('company-button')

const element = document.querySelector('article')

let changeableElement;

let productClicked = false;
let newClicked = false;
let companyClicked = false;
let supportClicked = false;
let eventClicked = false;

function showProductMenu() {
    productClicked = !productClicked




    if(productClicked) {
        product.style.display = 'none'
        let current = event.target
        console.log(current)
        changeableElement = element.firstChild
        element.firstChild.replaceWith(product)
        product.style.display = 'block'
        console.log(product)
    } else {
        disposeTestMenu()
    }
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
    element.firstChild.replaceWith(emptiness)
}

