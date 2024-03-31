// alert('Hi')

// Selecting the element 



// Javscript ---
//C  R  U  D --- html elements

// Htmlelement --- object ---- properties and methods





let lista = document.querySelector('ul')
let addButtona = document.querySelector('#add')
let addText = document.querySelector('#addtext')

console.log(lista)
console.log(addButtona)
console.log(addText)

lista.addEventListener('click',(event)=>{
    console.log(event.target.tagName)
    console.log(event.target.className)
})








// console.log(addText)



addButtona.addEventListener('click',()=>{
    let li = document.createElement('li') // <li></li>
    li.textContent = addText.value // <li>Grapes</li>
    addButton(li)   // <li> </li>
    list.appendChild(li)

})


function addButton(li){
    let remove = document.createElement('button') // <button> </button>
    remove.textContent = "Remove"
    remove.className = "remove" 
    li.appendChild(remove)

    let up = document.createElement('button') // <button> </button>
    up.textContent = "Up"
    up.className = "up" 
    li.appendChild(up)

    let down = document.createElement('button') // <button> </button>
    down.textContent = "Down"
    down.className = "down" 
    li.appendChild(down)

    return list

}


lista.addEventListener('click',(event)=>{

    if(event.target.tagName === 'BUTTON'){

    if(event.target.className = 'remove'){
        let li = event.target.parentNode; //
        let ul = li.parentNode
        ul.removeChild(li)

    }


    

    }


})













// document.getElementById('addButton')
// document.getElementById('#addButton')