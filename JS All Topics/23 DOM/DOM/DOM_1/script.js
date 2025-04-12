
let ol = document.querySelector("ol")
let input = document.querySelector("#input")
let button = document.querySelector("#buttonButton")
let body = document.querySelector("body")


let listA = document.querySelectorAll("li")
console.log(listA)
for (let i = 0; i < listA.length; i++) {
    //console.log(listA[i])
    createButton(listA[i])
}


button.addEventListener("click", function () {
    let ol1=document.createElement("ol")
    console.log(ol)
    let element1 = document.createElement("li")
    element1.textContent = input.value
    ol1.appendChild(element1)
    createButton(element1)
    console.log(element1)
})


function createButton(li) {
    let removeButton = document.createElement("button")
    removeButton.classList = "remove"
    removeButton.textContent = "Remove"
    console.log(removeButton)
    li.appendChild(removeButton)

    let upButton = document.createElement("button")
    upButton.classList = "up"
    upButton.textContent = "UP"
    console.log(upButton)
    li.appendChild(upButton)

    let downButton = document.createElement("button")
    downButton.classList = "down"
    downButton.textContent = "DOWN"
    console.log(downButton)
    li.appendChild(downButton)

}

body.addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
        if (e.target.classList == "remove") {
            let li = e.target.parentElement
            ol = li.parentElement
            ol.removeChild(li)
        }
    }
        if(e.target.classList=="down"){
            let li=e.target.parentElement
            let ol=li.parentElement
            let nextSibling=li.nextElementSibling
            ol.insertBefore(nextSibling,li)

        }
        if(e.target.classList=="up"){
            let li=e.target.parentElement
            let ol=li.parentElement
            let previousSibling=li.previousElementSibling
            ol.insertBefore(li,previousSibling)

        }
})




