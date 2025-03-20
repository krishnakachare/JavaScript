
let h1=document.querySelector("h1")
console.log(h1)
let body=document.querySelector("body")
console.log(body)

body.addEventListener("click",function(e){
    console.log(e.target.tagName)
})