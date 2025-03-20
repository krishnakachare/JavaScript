
// //Prog 1=>make even number in list as red and odd number in list as green

// //To featch all li element
// let ol = document.querySelector('ol')
// console.log(ol)
// let listA = document.querySelectorAll('li')
// console.log(listA)

// for(let i=0;i<listA.length;i++){
//     CreateButton(listA[i])
// }

// //if tap on remove remove button if tap on up swipe upward if swipe downward then swipe down

// ol.addEventListener("click",function(e){
//     console.log(e.target)
// if(e.target.tagName =="BUTTON"){
//     if(e.target.classList =="remove"){
//         let li=e.target.parentElement
//         let ol=li.parentElement
//         ol.removeChild(li)
//     }

//     if(e.target.classList=="down"){
//         let li=e.target.parentElement
//         let ol=li.parentElement
//         let nextSibling=li.nextElementSibling
//         if(nextSibling){
//         ol.insertBefore(nextSibling,li)
//     }}

//     if(e.target.classList="up"){
//         let li=e.target.parentElement
//         let ol=li.parentElement
//         let previousSibling=li.previousElementSibling
//         if(previousSibling){
//         ol.insertBefore(li,previousSibling)
//         }
//     }
// }
// })







// // //pgm1 chnage colour of element in list add odd and even 
// // Array.from(listA).forEach(function (el, index) {
// //     if (index % 2 == 0) {
// //         el.style.color = "red"
// //     }
// //     else {
// //         el.style.color = "green"
// //     }
// // })


// //prog2 add element in list which add in box

// let input = document.querySelector("input")
// console.log(input)

// let button = document.querySelector("#btn")
// console.log(button)

// button.addEventListener("click", function () {
//     let newE = document.createElement("li")
//     newE.textContent = input.value
//     CreateButton(newE)
//     ol.appendChild(newE)
                        
// })

// //pgm 3 to add remove up down button for every added element

// function CreateButton(li){
//     let removeButton=document.createElement("button")
//     removeButton.textContent="Remove"
//     removeButton.classList="remove"
//     li.appendChild(removeButton)

//     let upButton=document.createElement("button")
//     upButton.textContent="UP"
//     upButton.classList="up"
//     li.appendChild(upButton)

//     let downButton=document.createElement("button")
//     downButton.textContent="Down"
//     downButton.classList="down"
//     li.appendChild(downButton)
// }





