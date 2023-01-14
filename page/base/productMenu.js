

function addProductMenuItems() {
    const item1Button = underlineButton('TMT', true)

    const item2Button = underlineButton('Verigon', false)
    const item3Button = underlineButton('all', false)
    const item4Button = underlineButton('surfingem', false)
    const item5Button = underlineButton('Kali', false)

    const bntLst = {item1Button, item2Button, item3Button, item4Button, item5Button}
    const menuList = buttonList(false, bntLst)

    const row1 = row()
    const row2 = row()

    const defaultBanner = imageBanner('desktopPromo2.jpg','Vape Ellipse is a brand new way feeling yourself like in' +
        ' the outer space. ' + 'Stop the\n gravity in one click. ' +
        '\nDefine your favourite between the hottest devices.' +
    '\n We will help you in searching for a real vapour surfing power machine.', 'learn more about all products', 'dodo')

    const item1Banner = imageBanner('desktopPromo3.jpg', 'Hurry. Dream. Fly away. TMT, the first' +
        ' euphoritine-based platform in the world, takes our mind up to these days. The most comfortable and geeky way' +
        ' to chill. Adjustable sizes, diamond mechanics and the beauty have made it`s own. All that you left to do is ' +
        'to research new fields of humanity happiness   ', 'learn more', 'dodo')
    const item2Banner = imageBanner('desktopPromo1.jpg','Verigon is the spirit of mind, power and leading.' +
        ''+ 'Aim of a Verigon machine is to show you how extreme looks' +
        '. Verigon is more than stimulator vapour machine. it makes you really powered up. In Verigon - we trust.' +
        '', 'learn more', 'dodo')

    const item3Banner = imageBanner('desktopPromo4.jpg','SurfinGem is made for people who know what real chill is. The ' +
        'minimalistic "surf" design and vape richness turn your vaping to real surfing. Surf your mind!', 'learn more', 'dodo')
    const item4Banner = imageBanner('desktopPromo3.jpg', 'Turn vape mode to "easy". ' +
        'The smart Kali technology lets you to vape effectively and minimize its consuming with still getting ' +
        'extraordinary vaping experience.', 'learn more', 'dodo')

    row2.append(defaultBanner)

    row1.append(menuList)

    if(product.firstChild === null) {
        product.appendChild(row1)
        product.appendChild(rowLine())
        product.appendChild(row2)
        selectButton(item3Button)
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
        switchBanner(defaultBanner)
        selectButton(item3Button)
    })
    item4Button.addEventListener('mouseenter', () => {
        deselectButton()
        switchBanner(item3Banner)
        selectButton(item4Button)
    })

    item5Button.addEventListener('mouseenter', () => {
        deselectButton()
        switchBanner(item4Banner)
        selectButton(item5Button)
    })
}

productButton[0].addEventListener('mouseover', addProductMenuItems)
