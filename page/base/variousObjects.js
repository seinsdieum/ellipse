let hiding = false;

function row() {
    let row = document.createElement('div')
    row.className = 'row'
    return row
}

function appearAnim() {
    return `0.32s appearing ease-out`
}
function mediumAppearAnim() {
    return `1s appearing-no-blur ease-out`
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

function loadingDesc(loadingMessage) {
    const loadingContainer = document.createElement('div')
    loadingContainer.className = 'loading-point'

    if(loadingMessage === '') {
        loadingContainer.append('Loading. Please Wait')
    }
    return loadingContainer
}

function imageDesc(desc,buttonText, link, textPreparation, noBack, listButtons) {
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
    const textSection = document.createElement('h1')
    textSection.append(desc)

    if(buttonText != '') {
        if(listButtons === undefined) {
            description.appendChild(linkedButton)
            linkedButton.addEventListener('mouseclick', () => {
                window.location.href = link
            })
        }
        result = description
    } else {
        if(listButtons === undefined){
            description.appendChild(textSection)
            description.style.flexDirection = 'row'

            hrefMoment.appendChild(description)
            result = hrefMoment
        } else {
            result = description

        }
    }

    if(listButtons !== undefined) {
        const descriptionLayer = document.createElement('div')
        descriptionLayer.className = 'layering-desc'

        descriptionLayer.appendChild(textSection)
        descriptionLayer.appendChild(linkedButton)

        textSection.style.fontSize = '10px';
        textSection.style.margin = '5px;'
        const bannerButtonsLayer = document.createElement('div')
        bannerButtonsLayer.className = 'button-layering'
        for(let button of Object.entries(listButtons)) {
            bannerButtonsLayer.appendChild(button[1])
        }

        description.appendChild(bannerButtonsLayer)
        bannerButtonsLayer.appendChild(descriptionLayer)
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
     listButtons)
{
    
    const bannerContainer = document.createElement('div')
    bannerContainer.className = 'promo-container banner-content'
    const banner = document.createElement('img')
    banner.className = 'promo'
    banner.src = `../../src/img/banner/${src}`
    const description = imageDesc(desc,buttonText,  link, textPreparation, noBack, listButtons)

    const loading = loadingDesc()

    const caseLink = document.createElement('a')

    caseLink.href = link;

    console.log('loaded')
    loading.remove()
    bannerContainer.appendChild(banner)
    if(buttonText === '') {
        if(listButtons === undefined){
            caseLink.appendChild(description)
            bannerContainer.appendChild(caseLink)
        } else {
            bannerContainer.appendChild(description)
        }
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


    banner.style.position = 'relative'
    banner.appendChild(loading)

    console.log(loading)


    banner.addEventListener('load', () => {
        loading.remove()
    })

    return bannerContainer;
}

function slide(element, slidePercent) {
    for(let child of element) {
        if(child.className !== 'slide-navigation absolute left'
            && child.className !== 'slide-navigation absolute right'
            && child.className !== 'slide-line-list absolute'
            && child.className !== 'slide-navigation absolute') {
            child.style.transform = `translateX(${slidePercent}%)`
        }
    }
}

function slideTo(elementsList, element) {
    for(let child of elementsList) {
        if(child.className !== 'slide-navigation absolute left'
            && child.className !== 'slide-navigation absolute right'
            && child.className !== 'slide-line-list absolute'
            && child.className !== 'slide-navigation absolute') {
            child.style.transform = `translateX(${element.style.translate}%)`
        }
    }
}

function slideOne(element, slidePercent) {
        if(element.className !== 'slide-navigation absolute left'
            && element.className !== 'slide-navigation absolute right'
            && element.className !== 'slide-line-list absolute'
            && element.className !== 'slide-navigation absolute') {
            element.style.transform = `translateX(${slidePercent}%)`
        }
}

function Timer(f, t) {
    let timer = setInterval(f,t)
    this.stop = function () {
        if(timer) {
            clearInterval(timer)
            timer = null
        }
    }
    this.start = function () {
        if(!timer) {
            this.stop()
            timer = setInterval(f, t)
        }
    }
    this.reset = function(newT = t) {
        t = newT
        this.stop()
        this.start()
    }
}

function imageBannerList(bannerList, size) {
    let autoSliding = true

    const banList = document.createElement('div')
    banList.style.overflow = 'hidden'
    if(size === 'small') {
        banList.style.maxWidth = '60%'
    } else if(size === 'medium') {
        banList.style.maxWidth = '80%'
    } else if(size === 'big') {
        banList.style.maxWidth = '90%'
    } else {
        banList.style.maxWidth = '100%'
    }

    banList.className = 'banner-content'
    banList.style.display = 'flex'
    banList.style.flexDirection = 'row'
    banList.style.position = 'relative'

    const slideControls = document.createElement('div')
    slideControls.className = 'slide-controls'

    const leftButton = document.createElement('button')
    leftButton.className = 'slide-navigation absolute left'
    leftButton.style.maxHeight = '20%'
    leftButton.style.alignSelf = 'center'
    leftButton.append('\u2039')

    const rightButton = document.createElement('button')
    rightButton.className = 'slide-navigation absolute right'
    rightButton.style.maxHeight = '20%'
    rightButton.style.alignSelf = 'center'
    rightButton.append('\u203A')

    const slideLine = document.createElement('ul')
    slideLine.className = 'slide-line-list absolute'

    const stopperButton = document.createElement('button')
    stopperButton.className = 'slide-navigation absolute'
    stopperButton.style.fontSize = '10vh'
    stopperButton.style.float = 'bottom'
    stopperButton.alignItems = 'center'
    stopperButton.style.bottom = '1vh'
    stopperButton.append('\u23F8') // \u1405 for play

    console.log(bannerList)
    let translation = 0;
    let bannerCounter = 0
    let bannerIndex = 1

    let a = 0;

    for(const banner of Object.entries(bannerList)) {
        banner[1].style.transition = '1.45s transform ease-in-out'
        bannerCounter++
        banner[1].style.minWidth = '100%'
        banList.appendChild(banner[1])

        const slideLineItem = document.createElement('li')
        slideLine.appendChild(slideLineItem)
    }


    banList.appendChild(leftButton)
    banList.appendChild(rightButton)
    banList.appendChild(slideLine)
    banList.appendChild(stopperButton)

    function toggleSlider() {
        autoSliding = !autoSliding
        if(autoSliding) {
            slideInterval.start()
            stopperButton.innerText = '\u23F8'
        } else {
            slideInterval.stop()
            stopperButton.innerText = '\u1405'

        }
    }

    function point(slideLineItem) {
        slideLineItem.style.background = '#A7B7D0FF'
        slideLineItem.style.animation = '15s slide-line-going linear'
    }

    function pointOut(slideLineItem) {
        slideLineItem.style.background = '#BEBEBEFF'
        slideLineItem.style.animation = 'none'
    }
    point(slideLine.firstChild)

    function slideRight() {
        if(autoSliding) {
            slideInterval.reset()
        }
        slide(banList.children, translation - 100)
        translation -=100
        pointOut(slideLine.children[bannerIndex-1])
        noneAnimate(banList.children[bannerIndex-1].querySelector('img'))
        bannerIndex += 1
        point(slideLine.children[bannerIndex-1])
        scaleAnimate(banList.children[bannerIndex-1].querySelector('img'))
    }

    function slideLeft() {
        if(autoSliding) {
            slideInterval.reset()
        }
        slide(banList.children, translation + 100)
        translation +=100
        pointOut(slideLine.children[bannerIndex-1])
        noneAnimate(banList.children[bannerIndex-1].querySelector('img'))
        bannerIndex -= 1
        point(slideLine.children[bannerIndex-1])
        scaleAnimate(banList.children[bannerIndex-1].querySelector('img'))
    }

    function returnSlidePosition() {
        if(autoSliding) {
            slideInterval.reset()
        }
        slide(banList.children, 0)
        translation = 0
        pointOut(slideLine.children[bannerIndex-1])
        noneAnimate(banList.children[bannerIndex-1].querySelector('img'))
        bannerIndex = 1
        point(slideLine.children[bannerIndex-1])
        scaleAnimate(banList.children[bannerIndex-1].querySelector('img'))
    }

    function moveSlidePositionTOTheEnd() {
        if(autoSliding) {
            slideInterval.reset()
        }
        translation = (bannerCounter-1)*(-100)
        slide(banList.children, translation)
        pointOut(slideLine.children[bannerIndex-1])
        noneAnimate(banList.children[bannerIndex-1].querySelector('img'))
        bannerIndex = bannerCounter
        point(slideLine.children[bannerIndex-1])
        scaleAnimate(banList.children[bannerIndex-1].querySelector('img'))
    }

    function moveToSlideLinePoint(point) {
        pointOut(slideLine.children[bannerIndex-1])
        bannerIndex = point
        translation = (bannerIndex-1)*(-100)
        slide(banList.children, translation)
        point(slideLine.children[bannerIndex-1])
    }

    function setSlideInterval() {
    }

    rightButton.addEventListener('mousedown', () => {
        if(bannerIndex+1 <= bannerCounter) {
            slideRight()
        } else {
            returnSlidePosition()
        }

    })


    leftButton.addEventListener('mousedown', () => {
        if(bannerIndex-1 > 0) {
            slideLeft()
        } else {
            moveSlidePositionTOTheEnd()
        }
    })
    stopperButton.addEventListener('mousedown', () => {
        toggleSlider()
    })

    function scaleAnimate(element) {
        element.style.transition = '10s all linear'
        element.style.transform = 'scale(1.5)'
       // element.style.animation = '10s zoomIn linear'
/*        element.addEventListener('animationend', () => {
            element.style.transform = 'scale(1)'
            element.style.animation = 'none'
        })*/
    }

    function noneAnimate(element) {
        element.style.transition = '1.45s all ease-in-out'
        element.style.transform = 'scale(1)'
        //element.style.animation = '1s zoomOut linear'
    }

    function autoSlide() {
        if (autoSliding) {
            if (bannerIndex + 1 <= bannerCounter) {
                slideRight()
            } else {
                returnSlidePosition()
            }
        }
    }

    let slideInterval = new Timer(autoSlide, 15000)
    slideInterval.start()

    return banList
}

function fullScreenBanner(src, descTitle, buttonTitle, buttonLink, declineDescHiding,showViaScroll, noBack, textSize, listButtons, bannerHeight) {
    const banner = imageBanner(src, descTitle, buttonTitle, buttonLink, true, declineDescHiding,showViaScroll, noBack, listButtons)
    banner.style.width = '100%'
    banner.style.borderRadius = '0'
    banner.style.position = 'relative'
    banner.style.zIndex = '0'
    banner.style.aspectRatio = '21/9'
    if(textSize === 'big') {
        banner.style.fontSize = '2em'
    } else if(textSize === 'small') {
        banner.style.fontSize = '0.5em'
    } else if(textSize === 'moderate') {
        banner.style.fontSize = '1em'
    } else if(textSize === 'medium') {
        banner.style.fontSize = '1.4em'
    }
    if(bannerHeight === 'small') {
        banner.style.maxHeight = '1/6';
    }
    if(bannerHeight === 'smaller') {
        banner.style.maxHeight = '1/5';
    }
    if(bannerHeight === 'normal') {
        banner.style.maxHeight = '1/4';
    }
    banner.addEventListener('scroll' ,() => {
        show(banner)
    })
    return banner
}

function styledLayerButton(text, link, image) {
    const teaserButton = document.createElement('a')
    teaserButton.className = 'button-layer'
    teaserButton.style.overflow = 'hidden'
    teaserButton.style.position = 'relative'

    const textLabel = imageDesc(text, '', link, false, false)
    textLabel.style.zIndex = '10';
        /*document.createElement('p')
    textLabel.append(text)*/


    if(image !== undefined) {

        const buttonImage = document.createElement('img')
        buttonImage.style.minHeight = '100%'
        console.log(buttonImage)
        buttonImage.src = image
        teaserButton.appendChild(buttonImage)
    }

    teaserButton.appendChild(textLabel)

    teaserButton.href = link

    return teaserButton
}



