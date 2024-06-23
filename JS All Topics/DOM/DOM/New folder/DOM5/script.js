//<h1 id = "one" class = "two">Heading</h1>
// program
let headingOne = document.querySelector('h1')
let inputText = document.querySelector('input')
let button = document.querySelector('button')

console.log(headingOne)
console.log(inputText)
console.log(button)

button.addEventListener('click',function(){
    let colorText = inputText.value // red
    headingOne.style.color = colorText
    inputText.value = ""
})

// program 2
// document.querySelector('button').addEventListener('click',function(){
//     document.querySelector('h1').style.color=  document.querySelector('input').value
//     document.querySelector('input').value = ""
// })



