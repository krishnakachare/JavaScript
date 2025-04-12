let ul = document.querySelector("ul")
let input = document.querySelector("input")
let button = document.querySelector("button")

// console.log(ul)
// console.log(input)
// console.log(button)

button.addEventListener("click", () => {
  
    let newelement = document.createElement('li')
    newelement.textContent = input.value
    creatbutton(newelement)
    ul.appendChild(newelement)
    console.log(newelement)
    
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


let allli = document.querySelectorAll('li')

// Using For loop

for (let i = 0; i < allli.length; i++) {
    if (i % 2 == 0) {
        allli[i].style.color = 'hotpink'
    } else {
        allli[i].style.color = 'blue'
    }
}

// Convert node list in array and apply array method on it

// Array.from(allli).forEach((el,ind,arr)=>{
//  console.log(el)
//     if(ind % 2 == 0){
//         el.style.color = 'red'
//     }
//     else{
//         el.style.color = 'green'
//     }
// })