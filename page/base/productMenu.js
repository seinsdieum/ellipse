
function button(str, borders) {
    const butt = document.createElement('button')
    if(borders) {
        butt.className = 'article-navigation'
    } else {
        butt.className = 'text-navigation'
    }
    /*if(window.innerWidth > 768) {
        butt.style.maxHeight = '10vh'
    } else {
        butt.style.maxHeight = '5vh'
        butt.style.maxWidth = '15vw'
        butt.style.margin = '1vw'
    }*/
    butt.append(header(str))
    return butt

}

function underlineButton(str) {
    const butt = button(str, false)
    butt.className = 'underline-navigation'
    butt.style.margin = '0'
    return butt
}

function rowLine() {
    const l = document.createElement('div')
    l.className = 'white-line'
    return l
}

function buttonList(horizontal, _buttonList) {
    const buttonLst = document.createElement('ul')
    buttonLst.className = 'text-button-list'
    for(let bu of Object.values(_buttonList)) {
        let li = document.createElement('li')
        li.appendChild(bu)
        buttonLst.appendChild(li)
    }
    return buttonLst
}

function buttonContainer(buttonL) {
    const container = document.createElement('div')
    container.className = 'less-container'
    for(let bu of buttonL.values) {
        container.appendChild(bu)
    }
}

let defBanner = imageBanner('desktopPromo2.jpg', 'Choose your huinia or know', 'more about vape series', 'dodo')
function switchHiding() {
    hiding = !hiding
}

let currentButton = undefined

function selectButton(button) {
    const text = button.childNodes[0]
    text.style.color = '#A7B7D0FF'
    console.log(text.style.color)
    currentButton = button
}

function deselectButton() {
    if(currentButton) {

        const text = currentButton.childNodes[0]

        text.style.color = '#BEBEBEFF'
    }
}

function addProductMenuItems() {
    const item1Button = underlineButton('TMT-46', true)
    const item2Button = underlineButton('Verigon', false)
    const item3Button = underlineButton('TMT-45', false)
    const item4Button = underlineButton('Kali', false)

    const bntLst = {item1Button, item2Button, item3Button, item4Button}
    const menuList = buttonList(false, bntLst)

    const row1 = row()
    const row2 = row()

    const defaultBanner = imageBanner('desktopPromo2.jpg', 'Stop the gravity in one click', 'see all products', 'dodo')
    const item1Banner = imageBanner('desktopPromo3.jpg', 'TMT-46 - Release soon', 'learn more', 'dodo')
    const item2Banner = imageBanner('desktopPromo1.jpg', 'One-step future with Verigon  ', 'learn more', 'dodo')

    row2.append(defaultBanner)

    row1.append(menuList)

    if(product.firstChild === null) {
        product.appendChild(row1)
        product.appendChild(rowLine())
        product.appendChild(row2)
    }
    function switchBanner(ban) {
        let currentBanner = product.querySelector('div.promo-container');
        if (!(currentBanner === ban)) {
            switchHiding()

            currentBanner.replaceWith(ban)
            show(ban)
        }
    }
    item1Button.addEventListener('mouseenter', () => {
        deselectButton()
        switchBanner(item1Banner)
        selectButton(item1Button)
    })
    item2Button.addEventListener('mouseenter', () => {
        deselectButton()
        switchBanner(item2Banner)
        selectButton(item2Button)
    })
    item3Button.addEventListener('mouseenter', () => {
        deselectButton()
        switchBanner(item2Banner)
        selectButton(item2Button)
    })
}

console.log(product)

productButton[0].addEventListener('mouseover', addProductMenuItems)
