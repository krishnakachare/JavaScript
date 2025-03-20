{/* <h1 id = "one" class = "two" name = "three">Hello</h1>
<ul>
    <li class = "fr" >Apple</li>
    <li class = "fr">Banana</li>
    <li class = "fr">Grapes</li>
    <li class = "fr">Papaya</li>
</ul> */}


// let headOne = document.querySelector('h1')
// let classN = document.querySelector('.two')
// let att = document.querySelector('h1[name="three"]')
// let byId = document.querySelector('#one')


// let idA = document.getElementById('one')
// console.log(idA)


// // all li elements

// let liList = document.querySelectorAll('li')  // nodeList
// console.log(liList)

// let liListByClassName = document.querySelectorAll('.fr')
// console.log(liListByClassName)

// // all li elements 
// let byClassName = document.getElementsByClassName('fr') // htmlCollection
// console.log(byClassName)

// let byTagName = document.getElementsByTagName('li')
// console.log(byTagName)

// let nodeList = document.getElementsByName('r')
// console.log(nodeList)

//<h1 id = "one" class = "two" name = "three">Hello</h1>


let o = document.getElementById('one')
console.log(o)

console.log(o.className)
console.log(o.className)
console.log(o.classList)

o.classList.remove('two')
o.classList.add('four')
o.classList.toggle('four')
o.classList.toggle('four')
console.log(o)

console.log(o.getAttribute('id'))
console.log(o.getAttribute('name'))
o.setAttribute('j',"jkl")

// Events -----------






