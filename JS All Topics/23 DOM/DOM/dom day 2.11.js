var ulList = document.getElementById('ulList');
// console.log(ulList)
// var listElement = ulList.children
// console.log(listElement)

var listElement = document.querySelectorAll('li')
    // console.log(listElement)

var upButton = document.querySelector('button[name="up"]')
var downButton = document.querySelector('button[name="down"]')
var removeButton = document.querySelector('button[name="remove"]')

var inputText = document.querySelector('input[type="text"]')
var addItem = document.querySelector('button[name="add"]')


ulList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.name === 'remove') {
            var li = event.target.parentNode // <li>....</li>
                // console.log(li)
            var ul = li.parentNode // <ul id="ulList">.....</ul>
                // console.log(ul)
            ul.removeChild(li)
        }

        if (event.target.name === 'up') {
            var li = event.target.parentNode // <li>....</li>
                // console.log(li)
            var ul = li.parentNode // <ul id="ulList">.....</ul>
                // console.log(ul)
            var preli = li.previousElementSibling
            console.log(preli)
            ul.insertBefore(li, preli)
        }

        if (event.target.name === 'down') {
            var li = event.target.parentNode // <li>....</li>
                // console.log(li)
            var ul = li.parentNode // <ul id="ulList">.....</ul>
                // console.log(ul)
            var nextli = li.nextElementSibling
            console.log(nextli)
            ul.insertBefore(nextli, li)
        }

    }
});


function createButton(li) {
    var up = document.createElement('button') // <button></button>
    console.log(up)
    up.name = 'up' // <button name='up'></button>
    up.textContent = 'UP' // <button name='up'>UP</button>
    li.appendChild(up) // <li><button name='up'>UP</button></li>

    var down = document.createElement('button') // <button></button>
    console.log(down)
    down.name = 'down' // <button name='down'></button>
    down.textContent = 'Down' // <button name='down'>Down</button>
    li.appendChild(down) // <li><button name='down'>Down</button></li>

    var remove = document.createElement('button') // <button></button>
    console.log(remove)
    remove.name = 'remove' // <button name='remove'></button>
    remove.textContent = 'Remove' // <button name='remove'>Remove</button>
    li.appendChild(remove) // <li><button name='remove'>Remove</button></li>

}


for (var i = 0; i < listElement.length; i++) {
    createButton(listElement[i])
}


addItem.addEventListener('click', () => {
    var li = document.createElement('li') // <li></li>
    li.textContent = inputText.value // <li>Rose</li>
    ulList.appendChild(li)
    createButton(li)
    inputText.value = ''
});
i