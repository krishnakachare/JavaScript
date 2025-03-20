
let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let input = document.querySelector('input')

//<h2 class = "three"  id = "four" name = "nm">Heading2</h2>
// document.querySelector(h1)
// document.querySelector('.three')
// document.querySelector('#four')
// document.querySelector('h2[name= "nm"]')


ulList.addEventListener('click', function (event) {

    //console.log(event.target) // element
    //console.log(event.target.tagName) // element tagName 
    // console.log(event.target.className)

    if (event.target.tagName === "BUTTON") {

        if (event.target.className === "remove") {

        }

        else if(event.target.className === "up"){

        }

        else if(event.target.className === "up"){
            
        }


    }



})







buttonOne.addEventListener('click', function () {
    let text = input.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    input.value = ""
})

{/* <button class = "remove">Remove</button>
            <button class = "up">Up</button>
            <button class = "down">Down</button> */}


function createButtons(li) {

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add("remove") // <button class = "remove">Remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" // <button>Up</button>
    up.classList.add("up") //<button class = "up">Up</button>
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add('down')
    li.appendChild(down)






}