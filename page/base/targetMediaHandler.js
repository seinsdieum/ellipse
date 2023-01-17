const targetBannersContainers = document.querySelectorAll('div.row.banner')

const targetHotNewContainer = targetBannersContainers[0]
const targetCompanyShopContainer = targetBannersContainers[1]
const targetTeaserContainer = targetBannersContainers[2]
const targetAllVapesContainer = targetBannersContainers[3]
const targetCompanyHistoryContainer = targetBannersContainers[4]

function fullScreenBanner(src, descTitle, buttonTitle, buttonLink, declineDescHiding,showViaScroll, noBack, textSize) {
    const banner = imageBanner(src, descTitle, buttonTitle, buttonLink, true, declineDescHiding,showViaScroll, noBack)
    banner.style.width = '100%'
    banner.style.borderRadius = '0'
    banner.style.position = 'relative'
    banner.style.zIndex = '0'
    if(textSize === 'big') {
        banner.style.fontSize = '2em'
    } else if(textSize === 'small') {
        banner.style.fontSize = '0.5em'
    } else if(textSize === 'medium') {
        banner.style.fontSize = '1.4em'
    }
    banner.addEventListener('scroll' ,() => {
        show(banner)
    })
    return banner
}

const hotNew = fullScreenBanner('ellipse_hotNew.jpeg', 'It becomes legendary...' +
    ' TMT-46 - release in june 3046. ', '', 'dodo', true, true, true, 'medium')
const teaser = fullScreenBanner('desktopPromo1.jpg', 'Verigon I', '', 'dodo', true, true, false, 'big' )
const allVapes = fullScreenBanner('desktopPromo1.jpg', '' +
    'Vape Catalog', '', 'dodo', true, true, false, 'big')
const companyHistory = fullScreenBanner('ellipse_companyHistory.jpeg', 'Ellipse history' +
    '', '', 'dodo', true, true, true, 'big' )
const shop = fullScreenBanner('desktopPromo2.jpg', 'Ellipse Shop', '', 'shop.html', true, true, false, 'big' )
console.log(targetBannersContainers)
targetHotNewContainer.appendChild(hotNew)
targetTeaserContainer.appendChild(teaser)
targetAllVapesContainer.appendChild(allVapes)
targetCompanyHistoryContainer.appendChild(companyHistory)
targetCompanyShopContainer.appendChild(shop)
