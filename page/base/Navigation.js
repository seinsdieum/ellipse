let elementShow = false;
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

function imageBanner() {
    let banner = document.createElement('img')
    banner.className = 'promo'
    return banner
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

function text(str) {
    let textCase = document.createElement('p')
    textCase.append(str)
    return textCase
}

function switchImage(imageElement, list, number) {
    number++
    if (number == list.length) {
        number = 0
    }
    imageElement.src = list[number];

}

function header(str) {
    let textCase = document.createElement('h1')
    textCase.append(str)
    return textCase
}

const product = articlePoint()

const productFirstRow = row()
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
product.appendChild(productThirdRow)
product.addEventListener('waiting', () => {
    switchImage(productBanner, productBannerImages, thisImg)
})

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

const head = element
const rect = head.getBoundingClientRect()

const position = (rect.bottom-rect.top)/1.2


function scrollToArticle() {
    if(elementShow) {
        window.scrollTo({
            top: position,
            behavior: "auto"
        })
    }
}

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

function disposeMenu() {
    element.firstChild.replaceWith(emptiness)
}

productButton[0].addEventListener("mouseenter", () => {
    elementShow = true;
    showProductMenu()
    scrollToArticle()
})
newButton[0].addEventListener("mouseenter", () => {
    elementShow = true;
    showNewMenu()
    scrollToArticle()
})
companyButton[0].addEventListener("mouseenter", () => {
    elementShow = true;
    showCompanyMenu()
    scrollToArticle()
})

element.addEventListener('mouseleave', () => {
    disposeMenu()
    scrollToArticle()
    elementShow = false;
})

