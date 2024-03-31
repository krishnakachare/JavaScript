{/* <ul>
<li>Apple</li>
<li>Mango</li>
<li>Banana</li>
</ul>
<input type="text">
<button>Add element</button> */}

// <li></li>
// <li>Payapa</li>
// place the element under ul

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let listText = document.querySelector('input')
console.log(ulList)
console.log(buttonA)

buttonA.addEventListener('click',function(){
    // reading the value from inputText
    let litext = listText.value
    // Creating the element
    let newLi = document.createElement('li')  // <li></li>.
    // Add text to the element
    newLi.textContent = litext  // <li>Papaya</li>
    // Append the newly created element to ul list
    ulList.appendChild(newLi)
    listText.value = ""
})