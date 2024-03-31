let button = document.querySelector('button')
let inputtext = document.querySelector('input[type="text"]')
let change = document.querySelector('h3')

// we can select html element (document element) by .querySelector() method we can pass this tagName, class, id for fetching (geting element) from document
// above element present(created) in html page we can add in this id or class and on that we can select particular element by queryselector

// console.log(button)
// console.log(inputtext)
// console.log(change)

button.addEventListener('click',()=>{

    change.textContent = inputtext.value
    // textContent = simply fetch the html element text
    // inputtext.value = ENTERED value in that box 
    change.style.color = inputtext.value
// we are here simply updating values of object

})

