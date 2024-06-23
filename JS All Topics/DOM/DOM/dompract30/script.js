

let ol = document.querySelector("ol") //bt tagname
console.log(ol)

let listli = document.querySelectorAll("li") //by tagname
console.log(listli)

let mango = document.querySelector("li[id='mangodb']") //bt attribute
console.log(mango)


let m1 = document.querySelector("#mangodb") //by id
console.log(m1)

let f1 = document.querySelector(".fruit1") //by class
console.log(f1)


//to make event number of list red and odd numbr of list in yellow

//Array.from(listli).forEach((el,index)=>index%2==0?el.style.color="red":el.style.color="green")

//add button

let inputText = document.querySelector("input[type='text']")
console.log(inputText)

let addButton = document.querySelector("#addbtn")
console.log(addButton)

addButton.addEventListener("click", function () {
    let newli = document.createElement("li")
    newli.textContent = inputText.value
     ol.appendChild(newli)
     createButton(newli)
    
})

ol.addEventListener("click",function(e){
    if(e.target.tagName=="BUTTON"){
        if(e.target.classList=="remove"){
            let li=e.target.parentElement
            let ol=li.parentElement
            ol.removeChild(li)
        }

        if(e.target.classList=="up"){
            let li=e.target.parentElement
            let ol=li.parentElement
            let previousSibling=li.previousElementSibling
            if(previousSibling){
            ol.insertBefore(li,previousSibling)
        }}

        if(e.target.classList=="down"){
            let li=e.target.parentElement
            let ol=li.parentElement
            let nextSibling=li.nextElementSibling
            if(nextSibling){
            ol.insertBefore(nextSibling,li)
        }}
    }
})





function createButton(li){
    let removeButton=document.createElement("button")
    removeButton.textContent="Remove"
    removeButton.classList="remove"
    li.appendChild(removeButton)

    let upButton=document.createElement("button")
    upButton.textContent="UP"
    upButton.classList="up"
    li.appendChild(upButton)

    let downButton=document.createElement("button")
    downButton.textContent="Down"
    downButton.classList="down"
    li.appendChild(downButton)
}

for(let i=0;i<listli.length;i++){
    createButton(listli[i])
}