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

function imageDesc(desc,buttonText, link, textPreparation) {
    const description = document.createElement('div')

    description.className = 'img-desc'

    description.style.zIndex = '5'

    const linkedButton = button(buttonText, false)
    linkedButton.className = 'underline-navigation'
    const textSection = document.createElement('h1')
    textSection.append(desc)
    description.appendChild(textSection)


    if(textPreparation) {
    }

    if(buttonText != '') {
        description.appendChild(linkedButton)

    } else {
        description.style.flexDirection = 'row'
        textSection.style.textAlign = 'center'
        textSection.style.alignSelf = 'center'
    }

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

function imageBanner(src, desc, buttonText, link, textPreparation, declineDescHiding, showingViaScroll, severalImages, imageList) {
    const bannerContainer = document.createElement('div')
    bannerContainer.className = 'promo-container'
    const banner = document.createElement('img')
    banner.className = 'promo'
    banner.src = `../../src/img/banner/${src}`

    const description = imageDesc(desc,buttonText,  link, textPreparation)

    const loading = document.createElement('h1')
    loading.append('Loading, please wait')
/*

    bannerContainer.appendChild(loading)

*/

    banner.addEventListener('load', () => {
        loading.remove()
        console.log('loaded')
        bannerContainer.appendChild(banner)
        bannerContainer.appendChild(description)

        if(showingViaScroll) {
            bannerContainer.addEventListener('mouseover', () => {
                hiding = false;
                show(description)
            }, {passive: true})
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
    return bannerContainer
}

