let ulList = document.querySelector('ul')

let button = document.querySelector('#clickButton')
let inputText = document.querySelector('input');
let listElement = document.querySelectorAll('li')
    // console.log(ulList)
    // console.log(typeof listElement) 
    //[<li>Grapes</li>,<li>Mango</li>,"grapes"]

// <button name = "remove">Remove<button>

ulList.addEventListener('click', (event) => {
    // console.log(event.target.tagName)
    if (event.target.tagName === 'BUTTON') {
        if (event.target.name === 'remove') {
            // <li>grapes</li>
            let li = event.target.parentNode
                // console.log(li)
            let ul = li.parentNode
                // console.log(ul)
            ul.removeChild(li)
        }

        if (event.target.className === 'up') {
            let li = event.target.parentNode
            let ul = li.parentNode
            let prev = li.previousElementSibling
                // console.log(prev)
            ul.insertBefore(li, prev)
        }

        if (event.target.className === 'down') {
            let li = event.target.parentNode
            let ul = li.parentNode
            let nextli = li.nextElementSibling
                //  console.log(nextli)
            ul.insertBefore(nextli, li)
        }
    }
})


// ==   5 == '5' // true
// ===  5 === '5' // false

button.addEventListener('click', function() {
    let li = document.createElement('li') // <li></li> 
    li.textContent = inputText.value // <li>grapes</li>
    createButton(li) // <li>grapes</li>
    ulList.appendChild(li)
    inputText.value = '';
})

for (let i = 0; i < listElement.length; i++) {
    createButton(listElement[i])
}


function createButton(li) {

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" //<button>Up</button>
    remove.name = "remove" // <button name = "remove">Remove<button>
    li.appendChild(remove) // <li><button class = "remove">Remove<button></li>

    let up = document.createElement('button') // <button></button>
    up.textContent = "Up" //<button>Up</button>
    up.className = "up" // <button class = "up">Up<button>
    li.appendChild(up)


    let down = document.createElement('button') // <button></button>
    down.textContent = "Down" //<button>Down</button>
    down.className = "down" // <button class = "down">Down<button>
    li.appendChild(down)

}