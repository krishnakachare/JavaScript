
//Js is used to change the element

//element add

//element update

//element delete

//element property 

//based on user action

//To add element
document.write('<p>I learn Javascript</p>')
//document.write('<p>I am mayuri katwe</p>')

let listA=document.querySelectorAll('p')
console.log(listA)

//Update element
for(let i=0;i<listA.length;i++){
    listA[i].style.color="white"
    listA[i].textContent="hello All"
    
}


