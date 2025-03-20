
//  <h1 id = "one" class = "two"></h1>
//  <ul>
//      <li>Apple</li>
//      <li>Mango</li>
//      <li>Grapes</li>
//      <li>Orange</li>
//  </ul>


let h1 = document.getElementById('one')
console.log(h1)

// Html colleaction
let htmlc1 =    document.getElementsByTagName('li')
let htmlc2 =    document.getElementsByClassName('fr')


// nodeList
let htmlc3 = document.getElementsByName('nm')
let nodelist1 = document.querySelectorAll('li')
let nodeList2 = document.querySelectorAll('.fr')

console.log(htmlc1)
console.log(htmlc2)
console.log(htmlc3)
console.log(nodelist1)
console.log(nodeList2)