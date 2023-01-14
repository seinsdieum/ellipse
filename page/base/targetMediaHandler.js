const targetBannersContainers = document.querySelectorAll('div.row.banner')

const targetHotNewContainer = targetBannersContainers[0]
const targetCompanyShopContainer = targetBannersContainers[1]
const targetTeaserContainer = targetBannersContainers[2]
const targetAllVapesContainer = targetBannersContainers[3]
const targetCompanyHistoryContainer = targetBannersContainers[4]

function fullScreenBanner(src, descTitle, buttonTitle, buttonLink, declineDescHiding,showViaScroll, makeImageChanger, imageList) {
    const banner = imageBanner(src, descTitle, buttonTitle, buttonLink, true, declineDescHiding,showViaScroll, makeImageChanger, imageList)
    banner.style.width = '100%'
    banner.style.borderRadius = '0'
    banner.style.position = 'relative'
    banner.style.zIndex = '0'
    banner.addEventListener('scroll' ,() => {
        show(banner)
    })
    return banner
}

const hotNew = fullScreenBanner('desktopPromo1.jpg', 'It becomes legendary...' +
    ' TMT-46 - release in june 3046. ', '', 'dodo', true, true)
const teaser = fullScreenBanner('desktopPromo1.jpg', 'It becomes legendary...' +
    ' TMT-46 will be released in june 3046. Subscribe to stay in tune and make a pre-order now.', 'learn more', 'dodo', true)
const allVapes = fullScreenBanner('desktopPromo1.jpg', 'It becomes legendary...' +
    ' TMT-46 will be released in june 3046. Subscribe to stay in tune and make a pre-order now.', 'learn more', 'dodo', true, )
const companyHistory = fullScreenBanner('desktopPromo3.jpg', 'It becomes legendary...' +
    ' TMT-46 will be released in june 3046. Subscribe to stay in tune and make a pre-order now.', 'learn more', 'dodo', true, )
const shop = fullScreenBanner('desktopPromo2.jpg', '                Ellipse, as the premium certified Emirates brand, has been focusing on technology innovation and\n' +
    '                investment, which is only to give you more vape life possibilities and enjoy the beauty of vape.\n' +
    '                The instant vape surfing effect is our main target to present you innovative vape experience, giving\n' +
    '                you the unique possibilities and feelings.', 'vape ellipse shop', 'dodo', true, )
console.log(targetBannersContainers)
targetHotNewContainer.appendChild(hotNew)
targetTeaserContainer.appendChild(teaser)
targetAllVapesContainer.appendChild(allVapes)
targetCompanyHistoryContainer.appendChild(companyHistory)
targetCompanyShopContainer.appendChild(shop)
