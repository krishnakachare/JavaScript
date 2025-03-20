
document.write("<p>I am new to js</p>")
document.write("<h1>This this Js class</h1>")

let pp=document.querySelector("h1")
pp.textContent="asadafagah"

listA=document.querySelectorAll("p")
for(let i=0;i<listA.length;i++){
    listA[i].style.color="black"
    listA[i].style.backgroundColor="orange"
    listA[i].textContent="mayuri only"
}

