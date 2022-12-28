const textList = document.querySelectorAll('p')
function handleMotionEvent(event) {

    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    // Do something awesome.
    for(let text of textList) {
        text.style.transform = `translateX(${x}) translateY(${y}) translateZ(${z})`
    }
    document.querySelector('article').style.transform = `translateX(${x}) translateY(${y}) translateZ(${z})`

}

window.addEventListener("devicemotion", handleMotionEvent, true);