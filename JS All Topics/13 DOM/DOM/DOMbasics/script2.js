

//document.write('<h1>Heading2</h1>')

// html 

// javasscript 
//We add  html , del , update , retrive html and also can change theirs and values
// also can add properties and values based on user action
// click,dbclick, mouseover,mouseout


//[1,2,3].push()


// search the element  by tagName
let h1 = document.querySelector('h1') 
let buttonOne = document.querySelector('button') 
// based on user action change the element
// h1.addEventListener('click',function(){
//     h1.style.background = "yellow"
// })

buttonOne.addEventListener('mouseover',function(){
    h1.style.background = "yellow"
})
buttonOne.addEventListener('mouseout',function(){
    h1.style.background = "red"
})

// Searching the element by attribute value
// class , id 


// class ?  stylesheet ? opening tag -- html element
// id ?? not common , stylesheet? openingtag - html


// Selecting the element based on id and class

// let  listClassGreen = document.querySelectorAll(".greenColor")
// console.log(listClassGreen)
// for(let i = 0 ; i <listClassGreen.length;i++ ){
//     listClassGreen[i].style.color = "orange"
//     listClassGreen[i].style.background = "yellow"
// }
// //----------------------------------------------
// let  purpleColor = document.querySelector('#purpleColor')
// purpleColor.style.color = "blue"







// [element, element2, element2]-- nodeList html elements - class -- .colorGreen




















// html 
//<h1 id = "hello">Heading</h1> html element




