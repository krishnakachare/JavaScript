

//document.querySelector()

let ol = document.querySelector('ol')
let listA = document.querySelectorAll('li') // nodeList
let button = document.querySelector('#addButton')
let input = document.querySelector('input')
//let nodeList = document.querySelectorAll('li')
for (let i = 0; i < listA.length; i++) {
    //console.log(listA[i])
    CreateButton(listA[i])
}

ol.addEventListener('click', function (e) {

    console.log(e.target)

    if (e.target.tagName == "BUTTON") {
        if (e.target.classList == "remove") {
            let li = e.target.parentElement
            let ol = li.parentElement
            ol.removeChild(li)
        }

        if (e.target.classList == "down") {
            let li = e.target.parentElement
            let ol = li.parentElement
            let nextSibling = li.nextElementSibling
            if (nextElementSibling) {
                ol.insertBefore(nextSibling, li)
            }

        }

        if (e.target.classList == "up") {

            let li = e.target.parentElement
            let ol = li.parentElement
            let previous = li.previousElementSibling
            if (previous) {
                ol.insertBefore(li, previous)
            }

        }

    }




})








button.addEventListener('click', function () {

    let newE = document.createElement('li') // <li></li>
    newE.textContent = input.value // <li>e</li>
    CreateButton(newE)  //<li>e
    /* <button class='remove'>Remove</button>
    <button class='up'>Up</button>
    <button class='down'>Down</button> */
    //

    ol.appendChild(newE)

})


{/* <button class='remove'>Remove</button>
<button class='up'>Up</button>
<button class='down'>Down</button> */}


function CreateButton(li) {

    let removeButton = document.createElement('button') // <button></button>
    removeButton.textContent = "Remove" // <button>Remove</button>
    removeButton.classList = "remove" // <button class="remove">Remove<button>
    li.appendChild(removeButton)


    let upButton = document.createElement('button') // <button></button>
    upButton.textContent = "Up"  // <button>Up</button>
    upButton.classList = "up" // <button class = "up">Up</button>
    li.appendChild(upButton)


    let downButton = document.createElement('button') // <button></button>
    downButton.textContent = "Down"
    downButton.classList = "down"
    li.appendChild(downButton)


}




















// Array.from(listA).forEach(function(el,index){
//     if(index % 2 == 0){
//         el.style.color = "red"
//     }
//     else{
//         el.style.color = "green"
//     }

// })


//--------------------------