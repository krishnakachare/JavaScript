
// <h1 id = "one" class = "head">Fruits</h1>
//     <ul>
//         <li class = "fruit">Apple</li>
//         <li class = "fruit">Mango</li>
//         <li class = "fruit">Banana</li>
//         <li class = "fruit">Grapes</li>
//     </ul>


let tagName = document.querySelector('h1')
let byClassName = document.querySelector('.head')
let byId = document.querySelector('#one')
let byCommon = document.querySelector('h1[class="head"]')

console.log(tagName)
console.log(byClassName)
console.log(byId)
console.log(byCommon)


// [li,li,li,li]

let liList = document.querySelectorAll('li')
let listB = document.querySelectorAll('.fruit')
console.log(listB)
console.log(liList)
for (let i = 0; i < liList.length; i++) {
    if (i % 2 == 0) {
        liList[i].style.color = "green"
    }
    else {
        liList[i].style.color = "red"
    }
}
let q1 = document.querySelectorAll('li[name="a"]')
console.log(q1)

// document.querySelector()
// document.querySelectorAll()