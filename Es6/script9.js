

const ulList = document.querySelector('#ulList')
const inputText = document.querySelector('#addtext')
const list = document.getElementsByTagName('li')
const buttonA = document.querySelector('#add')
const removeButton = document.querySelector('.remove')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')


buttonA.addEventListener('click',()=>{

   let li =  document.createElement('li') // <li></li>
   li.textContent = inputText.value   // <li>Apple</li>
   ulList.appendChild(li) // <ul> <li> Apple</li> </ul>
   addButtontolist(li)

  


})


{/* <li>
             Mango
            <button class = "up">Up</button>
            
    </li> */}





function addButtontolist(li){
    // HTML creation code
    let up = document.createElement('button')
    up.className = 'up' 
    // <button class = 'up'> <button>
    up.textContent = "Up"
    // <button class = 'up'> Up <button>
    li.appendChild(up)

    let down = document.createElement('button')
    down.className = 'down' 
    // <button class = 'up'> <button>
    down.textContent = "Down"
    // <button class = 'up'> Up <button>
    li.appendChild(down)

    let remove = document.createElement('button')
    remove.className = 'remove' 
    // <button class = 'up'> <button>
    remove.textContent = "Remove"
    // <button class = 'up'> Up <button>
    li.appendChild(remove)
   

}


// {/* <li>Apple<li> */}


// var person = {

//     name:'jinendra'
//     age:20

// }

// console.log(person.name)

// person.name = 'jinendra'

// person.age = 20


// <h1 >   </h1>  // object 

// let h1 = document.querySelector('h1')


// h1.className = "button"
// h1.textContent = "UP"


// <h1 class = "button"> UP  </h1> 