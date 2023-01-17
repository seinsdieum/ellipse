let hiding = false;

function row() {
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function appearAnim() {
    return `0.32s appearing ease-out`
}

function longerAppearAnim() {
    return `2s appearing ease-out`
}

function delayedAppearAnim() {
    return `0.3s appearing ease-out 1s`
}

function fadeAnim() {
    return `0.12s fading ease-out`
}

function button(str, borders) {
    const butt = document.createElement('button')
    if(borders) {
        butt.className = 'article-navigation'
    } else {
        butt.className = 'text-navigation'
    }
    butt.append(str)
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

function switchHiding() {
    hiding = !hiding
}

let currentDesc = undefined
let currentButton = undefined

function selectButton(button) {
    button.style.color = '#A7B7D0FF'
    currentButton = button
}

function deselectButton() {
    if(currentButton) {
        currentButton.style.color = '#BEBEBEFF'
    }
}

function imageDesc(desc,buttonText, link, textPreparation, noBack) {
    const description = document.createElement('div')
    if(noBack) {
        description.className = 'img-desc no-back'
    } else {
        description.className = 'img-desc'
    }
    const hrefMoment = document.createElement('a')

    let result = hrefMoment;


    description.style.zIndex = '5'

    const linkedButton = button(buttonText, false)
    linkedButton.className = 'underline-navigation'
    hrefMoment.href = 'vk.com'
    const textSection = document.createElement('h1')
    textSection.append(desc)


    description.appendChild(textSection)
    if(textPreparation) {

    }
    if(buttonText != '') {
        description.appendChild(linkedButton)
        linkedButton.addEventListener('mouseclick', () => {
            window.location.href = link
        })
        result = description
    } else {
        description.style.flexDirection = 'row'
        textSection.style.textAlign = 'center'

        textSection.style.alignSelf = 'center'
        hrefMoment.appendChild(description)
        result = hrefMoment
    }

    console.log(description)
    console.log(result)
    return description

}

function show(elem, mode) {

    if(mode === 'slow') {
        elem.style.animation = longerAppearAnim()
    } else if(mode === 'delayed') {
        elem.style.animation = delayedAppearAnim()
    } else {
        elem.style.animation = appearAnim()
    }

    elem.addEventListener('animationstart', () => {
        elem.style.visibility = 'visible'
    })
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

function imageBanner
    (src,
     desc,
     buttonText,
     link,
     textPreparation,
     declineDescHiding,
     showingViaScroll,
     noBack,
     additionalDescriptionsList)
{
    
    const bannerContainer = document.createElement('div')
    bannerContainer.className = 'promo-container'
    const banner = document.createElement('img')
    banner.className = 'promo'
    banner.src = `../../src/img/banner/${src}`

    const description = imageDesc(desc,buttonText,  link, textPreparation, noBack)

    const loading = document.createElement('h1')
    loading.append('Loading, please wait')

    const caseLink = document.createElement('a')

    caseLink.href = link;



/*

    bannerContainer.appendChild(loading)

*/

    banner.addEventListener('load', () => {
        loading.remove()
        console.log('loaded')

        bannerContainer.appendChild(banner)
        if(buttonText === '') {
            caseLink.appendChild(description)
            bannerContainer.appendChild(caseLink)
        } else {
            bannerContainer.appendChild(description)
        }

        if(showingViaScroll) {
            onVisible(bannerContainer, () => {
                hiding = false;
                show(description, 'delayed')
                console.log(bannerContainer + 'visible')
            })
        } else {

            bannerContainer.addEventListener('mouseover', () => {
                hiding = false;
                show(description)
            }, {passive: true})

        }

        if(!declineDescHiding) {

            bannerContainer.addEventListener('mouseleave', () => {
                hiding = true;
                hide(description)
            })

        }
    })

    return bannerContainer;
}

