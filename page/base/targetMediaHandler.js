const targetBannersContainers = document.querySelectorAll('div.row.banner')

const targetHotNewContainer = targetBannersContainers[0]
const targetCompanyShopContainer = targetBannersContainers[1]
const targetTeaserContainer = targetBannersContainers[2]
const targetAllVapesContainer = targetBannersContainers[3]
const targetCompanyHistoryContainer = targetBannersContainers[4]

/*function fullScreenBanner(src, descTitle, buttonTitle, buttonLink, declineDescHiding,showViaScroll, noBack, textSize) {
    const banner = imageBanner(src, descTitle, buttonTitle, buttonLink, true, declineDescHiding,showViaScroll, noBack)
    banner.style.width = '100%'
    banner.style.borderRadius = '0'
    banner.style.position = 'relative'
    banner.style.zIndex = '0'
    if(textSize === 'big') {
        banner.style.fontSize = '2em'
    } else if(textSize === 'small') {
        banner.style.fontSize = '0.5em'
    } else if(textSize === 'moderate') {
        banner.style.fontSize = '1em'
    } else if(textSize === 'medium') {
        banner.style.fontSize = '1.4em'
    }
    banner.addEventListener('scroll' ,() => {
        show(banner)
    })
    return banner
}*/

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
    'Some Event',
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

teaserSlider = imageBannerList({hotNew, hotNew2, hotNew3, hotNew4}, '')

const allVapes = fullScreenBanner('desktopPromo1.jpg', '' +
    'Vape Catalog', '', 'dodo', true, true, false, 'big')
const companyHistory = fullScreenBanner('ellipse_companyHistory.jpeg', 'Ellipse history' +
    '', '', 'dodo', true, true, true, 'big' )
const shop = fullScreenBanner('desktopPromo2.jpg', 'Ellipse Shop', '', 'shop.html', true, true, false, 'big' )

const teaserButton1 = styledLayerButton('hey', 'dodo.html', '../../src/img/banner/desktopPromo1.jpg')
const teaserButton2 = styledLayerButton('hey', 'dodo')
const teaserButton3 = styledLayerButton('hey', 'dodo')
const teaserButton4 = styledLayerButton('hey', 'dodo')

const buttonsTeaser = fullScreenBanner('desktopPromo2.jpg', 'here is description', 'here is the button', 'shop.html', true, true, false, 'big', {teaserButton1,teaserButton2,teaserButton3,teaserButton4} )

targetHotNewContainer.appendChild(teaserSlider)
targetAllVapesContainer.appendChild(allVapes)
targetCompanyShopContainer.appendChild(shop)
targetCompanyHistoryContainer.appendChild(companyHistory)
/*targetTeaserContainer.appendChild(buttonsTeaser)*/

/*
targetHotNewContainer.appendChild(hotNew)
*/
/*targetTeaserContainer.appendChild(teaser)
targetAllVapesContainer.appendChild(allVapes)
targetCompanyHistoryContainer.appendChild(companyHistory)
targetCompanyShopContainer.appendChild(shop)*/
