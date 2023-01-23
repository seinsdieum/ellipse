

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

    const item1Banner = imageBanner('ellipse_hotNew.jpeg', 'Hurry. Dream. Fly away. By TMT', '', 'TMT.html', false, false, false, true)
    const item2Banner = imageBanner('ellipse_hotNew.jpeg', 'Spirit of mind. By Verigon', '', 'TMT.html', false, false, false, true)

    const item3Banner = imageBanner('ellipse_hotNew.jpeg', 'The power of chill. By SurfinGem', '', 'TMT.html', false, false, false, true)
    const item4Banner = imageBanner('ellipse_hotNew.jpeg', 'Easy vape mode. By Kali', '', 'TMT.html', false, false, false, true)


    const hotNew = fullScreenBanner('ellipse_hotNew.jpeg',
        ' TMT-46 - release in june 3046. ',
        '',
        'LLALKAA',
        true,
        true,
        true,
        '')
    const hotNew4 = fullScreenBanner('ellipse_hotNew.jpeg',
        '',
        'Our future plans for enhancing your vaping experience',
        'LLALKAA',
        true,
        false,
        true,
        '')
    const hotNew3 = fullScreenBanner('ellipse_hotNew.jpeg',
        '',
        'Drochevo Event',
        'LLALKAA',
        true,
        false,
        true,
        '')
    const hotNew2 = fullScreenBanner('desktopPromo1.jpg',
        'Verigon I - first mind spirit in it`s kind',
        '',
        'dodo',
        true,
        false,
        false,
        '')

    const defSlider = imageBannerList({hotNew, hotNew2, hotNew3, hotNew4}, 'small')

    row2.append(defSlider)

    row1.append(menuList)

    if(product.firstChild === null) {
        product.appendChild(row1)
        product.appendChild(rowLine())
        product.appendChild(row2)
        selectButton(item3Button)
    }
    function switchBanner(ban) {
        let currentBanner = product.querySelector('div.banner-content');
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
        switchBanner(defSlider)
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
