
//id,class,attribute,tagname

//id unique=> one element
//class=> multiple element same property

let element1=document.querySelector('#newId')
console.log(element1)

let element2=document.querySelector('.newClass')
console.log(element2)

let element3=document.querySelector('input[type=text]')
console.log(element3)

let element4=document.querySelector("button[name='addButton']")
console.log(element4)

element4.addEventListener("click",function(){
    element2.textContent=element3.value
    element2.style.color=element3.value
})

let asdf=document.querySelector("h1")
asdf.textContent="mayuri"


