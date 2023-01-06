let hiding = false;

function row() {
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function appearAnim() {
    return `0.32s appearing ease-out`
}

function fadeAnim() {
    return `0.12s fading ease-out`
}

function imageDesc(desc,buttonText, link) {
    const description = document.createElement('div')

    description.className = 'img-desc'

    description.style.zIndex = '5'

    const linkedButton = button(buttonText, false)
    linkedButton.className = 'underline-navigation'

    description.appendChild(text(desc))
    description.appendChild(linkedButton)
    linkedButton.addEventListener('mouseclick', () => {
        window.location.href = link
    })
    return description
}

function show(elem) {
    elem.style.visibility = 'visible'
    elem.style.animation = appearAnim()

}
function hideFunc(elem) {

    elem.style.visibility = 'hidden'
    elem.style.animation = 'none'

}
function hide(elem) {


    elem.style.animation = fadeAnim()
    elem.addEventListener('animationend', () => {
        if(hiding) {
            hideFunc(elem)
        }
    })

}

function imageBanner(src, desc, buttonText, link) {
    const bannerContainer = document.createElement('div')
    bannerContainer.className = 'promo-container'
    const banner = document.createElement('img')
    banner.className = 'promo'
    banner.src = `../../src/img/banner/${src}`

    const description = imageDesc(desc,buttonText,  link)
    bannerContainer.appendChild(banner)
    bannerContainer.appendChild(description)

    bannerContainer.addEventListener('mouseenter', () => {
        hiding = false;
        show(description)
    })


    bannerContainer.addEventListener('mouseleave', () => {
        hiding = true;
        hide(description)
    })

    return bannerContainer
}

