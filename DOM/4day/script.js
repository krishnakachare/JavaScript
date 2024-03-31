let body = document.querySelector('body')
body.addEventListener('click', (event) => {
    // console.log(event.target)
    // console.log(event.target.tagName)
    if (event.target.tagName == 'BUTTON') {
        //console.log("hi")
        if (event.target.classList == "remove") {
            let li = event.target.parentElement
            let ol = li.parentElement
            ol.removeChild(li)
        }
        if (event.target.classList == "up") {
            let li = event.target.parentElement
            let ol = li.parentElement
            let previous = li.previousElementSibling
            if (previous) {
                ol.insertBefore(li, previous)
            }
        }
        if (event.target.classList == "down") {
            let li = event.target.parentElement
            let ol = li.parentElement
            let next = li.nextElementSibling
            if (next) {
                ol.insertBefore(next, li)
            }
        }
    }
})