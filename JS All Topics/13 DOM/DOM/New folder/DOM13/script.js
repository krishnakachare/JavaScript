{/* <p id = "one" class = "two" name = "nm">para</p>
<ul>
    <li class = "fr">Apple</li>
    <li class = "fr">Mango</li>
    <li class = "fr">Grapes</li>
    <li class = "fr">Banana</li>
</ul> */}

// let tagName = document.querySelector('p')
// let byId = document.querySelector('#one')
// let byClass = document.querySelector('.two')
// let byName= document.querySelector('p[name = "nm"]')

// selecting the multiple elements

let nl = document.querySelectorAll('li')  // [li,li,li,li]
let cl = document.querySelectorAll('.fr') // [li,li,li,li]
let nm = document.querySelectorAll('li[name= "nm"]')
let buttonA = document.querySelector('button')
console.log(nl)
console.log(cl)
console.log(nm)

// for(let i = 0 ; i < nl.length ; i++){
//     //console.log(i)
//     //console.log(nl[i].textContent)
//     if(i % 2 == 0){
//         nl[i].style.color = "red"
//     }
//     else {
//         nl[i].style.color = "green"
//     }
// }

// Program 1

// buttonA.addEventListener('click',function(){
//     for(let i = 0 ; i < nl.length ; i++){
//             //console.log(i)
//             //console.log(nl[i].textContent)
//             if(i % 2 == 0){
//                 nl[i].style.color = "red"
//             }
//             else {
//                 nl[i].style.color = "green"
//             }
//         }
// })


{/* <p id = "one" class = "two" name = "nm">para</p>
<ul>
    <li class = "fr">Apple</li>
    <li class = "fr">Mango</li>
    <li class = "fr">Grapes</li>
    <li class = "fr">Banana</li>
</ul> */}


let byId = document.getElementById('one')
let htmlCollectionFC = document.getElementsByClassName('fr') // htmlCollection
let htmlCollectionT = document.getElementsByTagName('li')
let cNodeList = document.querySelectorAll('.fr')  // nodeList
let nodeListName =  document.getElementsByName('nm')
console.log(byId)
console.log(htmlCollectionFC)
console.log(htmlCollectionT)
console.log(nodeListName)


// Retrive by attribute
//<h3 id = "one" class = "two" name = "three">Head</h3>


let headingThree = document.querySelector('h3')
console.log(headingThree)
console.log(headingThree.classList)

headingThree.classList.add('ten')
headingThree.classList.remove('ten') // not added
headingThree.classList.toggle('ten') // added
headingThree.classList.toggle('ten') // remove





