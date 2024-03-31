
// 7:30 DOM
let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')
ulList.addEventListener('click', function (e) {
    // console.log(e.target)
    // console.log(e.target.tagName)
    //console.log(e.target.className)
    if (e.target.tagName === "BUTTON") {

        if (e.target.className == "remove") {

        }
        else if (e.target.className == "down") {

        }
        else if (e.target.className == "up") {

        }

    }



})








buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newL = document.createElement('li') // <li></li>
    newL.textContent = text // // <li>Papaya</li>
    newL.textContent = text // // <li>Papaya</li>
    createButtons(newL)
    ulList.appendChild(newL)
    inputText.value = ""

})


function createButtons(li) {
    let r = document.createElement('button')  // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class = "Remove">remove</button>
    li.appendChild(r)

    let d = document.createElement('button')  // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add('down') // <button class = "Down">down</button>
    li.appendChild(d)

    let u = document.createElement('button')  // <button></button>
    u.textContent = "Up" //<button>Up</button>
    u.classList.add('up') //<button class = "Up">up</button>
    li.appendChild(u)

}