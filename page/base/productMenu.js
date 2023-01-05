
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

function addMenuItems() {
    const item1Button = button('TMT-46', false)
    const item2Button = button('Verigon I', false)
    const item3Button = button('TMT-45', false)
    const item4Button = button('Kali', false)

    const bntLst = {item1Button, item2Button, item3Button, item4Button}
    const menuList = buttonList(false, bntLst)

    const testButt = button('lolkaa', false)

    const row1 = row()
    const row2 = row()

    row1.append(menuList)
    row2.append(testButt)
    if(product.firstChild === null) {
        product.appendChild(row1)
        product.appendChild(row2)
    }
}

console.log(product)

productButton[0].addEventListener('mouseover', addMenuItems)