// DOM ??
// alert('hello')
// window.alert('hello')


// //document is another property of window

// var window = {
//     alert:function(){

//     },
//     name:'chinmay',
//     age:20,
//     document:{
//         mother:'kanchan deshpande',
//         father:'shirish deshpande',
//         grandfather:{}
//     }

// }

// window['age'] = 30
// window.age = 30


// var let and const


// Selecting the element 

// Manipulate 

// User action

// var a = document.getElementById('one')  
// console.log(typeof a)
// a.style.color = "red"
// console.log(a.textContent)  
// a.textContent = "New value"




// a.addEventListener('click',function(){
//     a.style.color = "green"
// })

// a.addEventListener('mouseover',()=>{

//     a.style.color = "blue"
//     a.style.fontSize = "100px"
//     a.style.background = "yellow"

// })


// a.addEventListener('dblclick',()=>{
//     a.style.color = "blue"
//     a.style.fontSize = "100px"
//     a.style.background = "yellow"

// })



// Javscript to add , dele , updated , insert ??? 
// html element ?? Where?? in DOM  (Documet object model )


// program 2

let buttonA = document.querySelector('#hello')
console.log(buttonA)
let input = document.getElementsByTagName('input')[0] // [elel,element2]
let headingOne = document.getElementsByTagName('h1')[0]
var fruitList = document.getElementsByTagName('li')

// buttonA.addEventListener('click',()=>{

//     console.log(input.value)
//     headingOne.style.color = input.value // green

// })

// console.log(fruitList)


// buttonA.addEventListener('click',()=>{
//     for(let i = 0 ; i < fruitList.length ;i++){
//         fruitList[i].style.color = input.value
//     }
// })


//<h1 id = "hello"> HeadingOne </h2>  //element

// textContent , innerhtml ,innertext



//# number of character in string if odd then  red
for(let i = 0 ; i < fruitList.length ;i++){
    if ((fruitList[i].textContent.length % 2) === 0){
        fruitList[i].style.color ="blue"
    }
    else{
        fruitList[i].style.color ="red"
    }
}


for(let i = 0 ; i < fruitList.length ;i++){
    if (i  % 2 == 0){

        fruitList[i].style.color = "green"

    }
    else {

        fruitList[i].style.color = "red"


    }
}





