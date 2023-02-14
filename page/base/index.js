const [red, green, blue] = [34, 34, 34]
const headers = document.querySelectorAll('header')

const warning = document.querySelector('header.warning')

const disclaimerYes = document.getElementsByName('disclaimerY')
const disclaimerNo = document.getElementsByName('disclaimerN')
const discLayer = document.querySelector('div.color-layer')
const disclaimer = document.querySelector('div.disclaimer')

let forbidScrolling = true;

/*window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY/5) / 30
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
    warning.style.background = `rgb(${r}, ${g}, ${b})`
    warning.style.transform = `translateY(${-y}vh)`

})*/

disclaimer.addEventListener('load', () => {
    forbidScrolling = true;
    console.log('lol its true')
})

window.addEventListener('scroll', () => {
    if(forbidScrolling) {
        scroll(window.scrollX, 0)
    } else {
    }
})

disclaimerYes[0].addEventListener('mousedown', () => {
    discLayer.style.display = 'none'
    disclaimer.style.display = 'none'
    forbidScrolling = false;
})

disclaimerNo[0].addEventListener('mousedown', () => {
    history.back()
})

function onVisible(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio > 0) {
                callback(element);
            }
        });
    }).observe(element);
}

function onHidden(element, callback) {
    new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.intersectionRatio < 0.0005) {
                callback(element);
                console.log('aaa')
            }
        });
    }).observe(element);

}
const mainArticle = document.querySelector('article.full-screen')
console.log(mainArticle)
/*for(let item of mainArticle.children) {
    item.style.transition = '1s opacity linear'

    onVisible(item, () => {
        item.style.opacity = '1'
    })
    item.style.opacity = '0'

}*/




