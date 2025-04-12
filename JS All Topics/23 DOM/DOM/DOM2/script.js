

// id ,class attribute ,tagName

// id unique  ---> one element one 
// class ---->  multiple elements same properties

// class-- Brahmin , OBC ,

let headingOne = document.querySelector('h1')
let element = document.querySelector('#newId')
console.log(element)

let elementTwo = document.querySelector('.newClass')
console.log(elementTwo)
//<button name = "addButton">add</button> 
//tagName[attribute="value"]
let buttonButton = document.querySelector('button[name="addButton"]')
console.log(buttonButton)

//<input type="text">

let inputText = document.querySelector('input[type="text"]')
console.log(inputText)


// <h1>hello</h1>

buttonButton.addEventListener('click',function(){

    elementTwo.textContent = inputText.value // orange
    elementTwo.style.color = inputText.value // orange

    

})


console.log(headingOne.textContent)
console.log(headingOne['textContent'])

headingOne['textContent'] = "redasfdsf"

// let person = {
//     age:23,
//     rollNumber:23
// }
// person.age = 34

// console.log(person.age)
// console.log(person['age'])
// person.age = 35






//------------------------------------------>
// css selector
// tagName[attribute="value"]