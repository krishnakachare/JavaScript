
let list = document.querySelectorAll("li")
let button = document.querySelector("button")

button.addEventListener("click", () => {
  
//    for(let i = 0; i < list.length; i++){
//     creatbutton(list[i])
//    }

   Array.from(list).forEach((el)=>{
    creatbutton(el)
   })
})

function creatbutton(newli) {

    let removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList = 'remove'
    console.log(removeButton)
    newli.appendChild(removeButton)

    let upButton = document.createElement('button')
    upButton.textContent = 'up'
    upButton.classList = 'up'
    console.log(upButton)
    newli.appendChild(upButton)

    let downButton = document.createElement('button')
    downButton.textContent = 'down'
    downButton.classList = 'down'
    console.log(downButton)
    newli.appendChild(downButton)

}


