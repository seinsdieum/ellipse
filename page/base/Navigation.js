function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function headToFootDist() {

}

let elementShow = false;

function row() {
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function column() {
    let col = document.createElement('div')
    col.className = 'column'
    return col
}

function articlePoint()
{
    let row = document.createElement('article')
    row.className = 'full-screen'

    row.style.background = 'black'
    row.style.position = 'absolute'
    row.style.left = '0'
    row.style.right = '0'
    row.style.top = 'auto'
    row.style.borderRadius = '0'
    row.style.aspectRatio = '16/9'
    row.style.zIndex = '100'
    return row
}

function imageBanner(src) {
    let banner = document.createElement('img')
    banner.className = 'promo'
    banner.src = `../../src/img/banner/${src}`
    return banner
}

function rightHeaderPos() {
    const warning = document.querySelector('header.warning')
    const emptySpacer = document.querySelector('div.empty')
    let warningRect = warning.getBoundingClientRect()
    let emptyRect = emptySpacer.getBoundingClientRect()

    let distance = ((emptyRect.bottom+emptyRect.top)+(warningRect.bottom-warningRect.top))

    return distance
}

/*function text(str) {
    return str
}
function header(str) {
    return str
}*/
function switchImage(imageElement, list, number) {
    number++
    if (number == list.length) {
        number = 0
    }
    imageElement.src = list[number];

}



const product = articlePoint()

/*const productFirstRow = row()
const productSecondRow = row()
const productThirdRow = row()
const productBanner = imageBanner()
let productBannerImages = ('../../src/img/banner/promo1.jpg','../../src/img/banner/promo2.jpg')
let thisImg = 1;
productBanner.src = '../../src/img/banner/promo1.jpg'
product.style.backgroundColor = 'black'
productFirstRow.append(header('product'))
productSecondRow.append(productBanner)
productThirdRow.append(header('product'))
switchImage(productBanner, productBannerImages, thisImg)
product.appendChild(productFirstRow)
product.appendChild(productSecondRow)
product.appendChild(productThirdRow)*/
const sign = articlePoint()

const newPoint = articlePoint()
newPoint.style.backgroundColor = 'black'
newPoint.append('krasava')

const company = articlePoint()
company.style.backgroundColor = 'black'

const emptiness = articlePoint()
emptiness.style.display = 'none'

const productButton = document.getElementsByName('product-button')
const signButton = document.getElementsByName('sign-button')
const newButton = document.getElementsByName('new-button')
const companyButton = document.getElementsByName('company-button')

const mainHeader = productButton[0].parentElement

const updateRow = document.querySelector('div.update-row')

const element = document.querySelector('article')

let changeableElement;

const head = element
const rect = head.getBoundingClientRect()

/*const position = (rect.bottom-rect.top)/1.2*/

mainHeader.append(emptiness)
changeableElement = emptiness


function scrollToArticle() {
}

function hideElement(elem) {
}

function showElement(elem) {
    for(let el of elem.childNodes) {
        if(parseFloat(el.style.opacity) > 0) {
            el.style.animation = 'none'
        } else {

            el.style.animation = `0.9s appearing ease-out`
        }
    }
}

function showProductMenu() {
    changeableElement.replaceWith(product)
    changeableElement = product
}

function showSignMenu() {
    changeableElement.replaceWith(sign)
    changeableElement = sign
}

function showCompanyMenu() {
    changeableElement.replaceWith(company)
    changeableElement = company
}

function disposeMenu() {
    changeableElement.replaceWith(emptiness)
    changeableElement = emptiness
}

for (let butt of document.querySelectorAll('button')) {
    butt.addEventListener('mouseenter', () => {
        disposeMenu()
        elementShow = false;
    })
}

productButton[0].addEventListener("mouseenter", () => {

    showProductMenu()
    scrollToArticle()
    addLeaveListener(product)
    showElement(product)
})

companyButton[0].addEventListener("mouseenter", () => {

    showCompanyMenu()
    scrollToArticle()
    addLeaveListener(company)
    showElement(company)

})

signButton[0].addEventListener('mouseenter', () => {
    showSignMenu()
    addLeaveListener(sign)
    showElement(sign)
})

function addLeaveListener(elem) {

    elem.addEventListener('mouseleave', () => {

        disposeMenu()
        scrollToArticle()
        elementShow = false;
    })
}


