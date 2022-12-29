
function row() {
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function articlePoint()
{
    let row = document.createElement('article')
    row.className = 'half-transparent'
    row.style.background = 'black'
    return row
}

function text(str) {
    let textCase = document.createElement('p')
    textCase.append(str)
    return textCase
}

function header(str) {
    let textCase = document.createElement('h1')
    textCase.append(str)
    return textCase
}

const endLine = document.createElement("br")

const product = articlePoint()
const productFirstRow = row()
const productSecondRow = row()
const productThirdRow = row()
product.style.backgroundColor = 'black'
productFirstRow.append(header('product'))
productSecondRow.append(text('product'))
productThirdRow.append(header('product'))

product.appendChild(productFirstRow)
product.appendChild(productSecondRow)
product.appendChild(productThirdRow)

const newPoint = articlePoint()
newPoint.style.backgroundColor = 'black'
newPoint.appendChild(header('krasava'))

const company = articlePoint()
company.style.backgroundColor = 'black'

const emptiness = articlePoint()
emptiness.style.display = 'none'

const productButton = document.getElementsByName('product-button')
const newButton = document.getElementsByName('new-button')
const companyButton = document.getElementsByName('company-button')

const updateRow = document.querySelector('div.update-row')

const element = document.querySelector('article')

let changeableElement;

let productClicked = false;
let newClicked = false;
let companyClicked = false;
let supportClicked = false;
let eventClicked = false;

function showProductMenu() {
    productClicked = !productClicked
    if(true) {
        changeableElement = element.firstChild
        element.firstChild.replaceWith(product)
        product.scrollIntoView({block:"center", behavior: "smooth"})
        product.focus()
        console.log(product)
    } else {
    }

}

function showNewMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(newPoint)

    newPoint.scrollIntoView({block:"center", behavior: "smooth"})
    console.log(newPoint)
}

function showCompanyMenu() {
    changeableElement = element.firstChild
    element.firstChild.replaceWith(company)

    company.scrollIntoView({block:"center", behavior: "smooth"})
    console.log(company)
}


function disposeMenu() {
    element.firstChild.replaceWith(emptiness)

}

console.log(productButton)

productButton[0].addEventListener("focusin", showProductMenu)
element.firstChild.addEventListener("focusout", disposeMenu)
newButton[0].addEventListener("focusin", showNewMenu)
newButton[0].addEventListener("focusout", disposeMenu)
companyButton[0].addEventListener("focusin", showCompanyMenu)
companyButton[0].addEventListener("focusout", disposeMenu)
