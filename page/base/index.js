const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

const warning = document.querySelector('header.warning')

const disclaimerYes = document.getElementsByName('disclaimerY')
const disclaimerNo = document.getElementsByName('disclaimerN')
const discLayer = document.querySelector('div.color-layer')
const disclaimer = document.querySelector('div.disclaimer')

/*window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY/5) / 30
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    warning.style.background = `rgb(${r}, ${g}, ${b})`
    warning.style.transform = `translateY(${-y}vh)`

})*/

disclaimerYes[0].addEventListener('mousedown', () => {
    discLayer.style.display = 'none'
    disclaimer.style.display = 'none'
})

disclaimerNo[0].addEventListener('mousedown', () => {
    history.back()
})

function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                callback(element);
                observer.disconnect();
            }
        });
    }).observe(element);
}

function onHidden(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio <= 0) {
                callback(element);
                observer.disconnect();
            }
        });
    }).observe(element);
}
const mainArticle = document.querySelector('article.full-screen')
console.log(mainArticle)
console.log(mainArticle.childNodes)
for(let item of mainArticle.children) {
    onHidden(item, () => {
        item.style.visibility = 'none'
        item.style.animation = 'none'
    })
    onVisible(item, () => {
        item.style.visibility = 'visible'
        item.style.animation = appearAnim()
    })
}




