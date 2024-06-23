

// // add or write element
// document.write("<p> I am mayuri</p>")

// //retrive element
// let pp=document.querySelector("input")
// console.log(pp)

// let p=document.querySelectorAll("p")
// console.log(p)

// for(let i=0;i<p.length;i++){
//     p[i].style.color="red"
//     p[i].textContent="apple"
// }

let ele1=document.querySelector("#heading1") //find element by id
let ele2=document.querySelector(".two2")
console.log(ele2)
let ele3=document.querySelector('input[type="text"]')
console.log(ele3)
let ele4=document.querySelector("button[id=btn]")
console.log(ele4)

ele4.addEventListener("click",function(){
    ele2.textContent=ele3.value
    ele2.style.color=ele3.value
})







