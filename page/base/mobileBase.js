const burgerContainer = articlePoint(true, true)

burgerContainer.style.transition = '1s transform ease-in-out'
burgerContainer.style.width = '100%'
burgerContainer.addEventListener('change', () => {
    if(window.innerWidth >= 700) {
        burgerContainer.style.display = 'none';
    }
})
/*
burgerContainer.style.position = 'absolute'
*/
const Product = mobileScreenBanner(
    'desktopPromo2.jpg',
    'Product',
    'aaaa',
    true,
)
const Sign = mobileScreenBanner(
    'desktopPromo2.jpg',
    'Product',
    'aaaa',
    true,
)
const Tmt = mobileScreenBanner(
    'desktopPromo2.jpg',
    'Product',
    'aaaa',
    true,
)
const Support = mobileScreenBanner(
    'desktopPromo2.jpg',
    'Product',
    'aaaa',
    true,
)
const Ellipse = mobileScreenBanner(
    'desktopPromo2.jpg',
    'Product',
    'aaaa',
    true,
)


const mainH = document.querySelector('header[name="burger-menu"]')
mainH.style.position = 'relative'
mainH.style.left = '0'
mainH.style.right = '0'
mainH.style.zIndex = '1000'
burgerContainer.style.position = 'absolute'
burgerContainer.style.top = '0'
burgerContainer.style.left = '0'
burgerContainer.style.right = '0'

/*mainH.style.bottom = '100%'*/


const burgerButton = document.querySelector('button[name="burger-button"]')

let burgerShow = false;

function toggleBurger() {
    burgerShow = !burgerShow
}

function mobileBurgerRow() {
    const burger = document.createElement('div')
    burger.className = 'row mobile'


    return burger
}

function burgerSlideUp() {
burgerContainer.style.transform = 'translateX(100)'
}

function burgerSlideDown() {
    burgerContainer.style.transform = 'translateX(0)'
}

function toggleBurgerMenu() {
    if(burgerShow) {
        console.log('burger shown')
        mainH.style.display = 'block'
        mainH.scrollTo();
        mainH.style.animation = appearAnim();
        burgerSlideDown()
    } else {
        console.log('burger hidden')
        mainH.style.display = 'none'
        mainH.style.animation = fadeAnim();
        burgerSlideUp();
    }
}

function mobileScreenBanner(src, descTitle, buttonLink, declineDescHiding ) {
    return fullScreenBanner(
        src,
        descTitle,
        '',
        buttonLink,
        declineDescHiding,
        true,
        false,
        'mid',

    )
}

const row1 = mobileBurgerRow();
const row2 = mobileBurgerRow();
const row3 = mobileBurgerRow();
const row4 = mobileBurgerRow();
const row5 = mobileBurgerRow();
row1.appendChild(Product)
row2.appendChild(Sign)
row3.appendChild(Tmt)
row4.appendChild(Support)
row5.appendChild(Ellipse)




burgerContainer.appendChild(row1)
burgerContainer.appendChild(row2)
burgerContainer.appendChild(row3)
burgerContainer.appendChild(row4)
burgerContainer.appendChild(row5)
mainH.appendChild(burgerContainer)
toggleBurgerMenu()


burgerButton.addEventListener('mousedown', () => {
    toggleBurger()
    toggleBurgerMenu()
})


