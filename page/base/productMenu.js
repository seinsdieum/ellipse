

function button(str, borders) {
    const butt = document.createElement('button')
    if(borders) {
        butt.className = 'article-navigation'
    } else {
        butt.className = 'text-navigation'
    }
    butt.append(text(str))
    return button
}

function buttonList(horizontal, _buttonList) {
    const buttonLst = document.createElement('ul')
    buttonLst.className = 'text-button-list'
    if (!horizontal) {
        buttonLst.id = 'vertical'
    }
    for(let bu of _buttonList) {
        const li = document.createElement('li')
        li.append(bu)
        buttonLst.append(li)
    }
    return buttonLst
}

function addMenuItems() {
    const item1Button = button('tmt-46', false)
    const item2Button = button('tmt-46', false)
    const item3Button = button('tmt-46', false)
    const item4Button = button('tmt-46', false)

    const menuList = buttonList(false, {item1Button, item2Button, item3Button, item4Button})
    product.appendChild(menuList)
}

product.addEventListener('load', addMenuItems)