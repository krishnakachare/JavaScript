

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });


// Advanced DOM ----


// Selection the elements 


// Selecting the element inside a DOM
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

//let sectionA  = document.getElementById('section--1')


// let section = document.querySelector('#section--3')
// let sections = document.querySelectorAll('section')  // NodeList
// let sectionHtmlCollection = document.getElementsByTagName('section')   // Html Collection



// Event 
// let buttons = document.getElementsByTagName('button')
// console.log(buttons)
// document.getElementsByClassName()
// document.getElementById()


// Create ??



// let li =document.createElement('li')
// li.className = "red"
// li.textContent = "Mango"
// li.innerHTML = "<li> Hello i am new to new</li>"
// Difference between innner HTMl and texy content

// console.log(sectionA.textContent)
// console.log(sectionA.innerHTML)

//------------------------------

// Placing the html element 

// let header = document.querySelector('.header')
// let divElement = document.createElement('div') // <div></div>
// divElement.classList.add('cookie-message')
// divElement.textContent = "New element added to my DOM"
// divElement.innerHTML = "We used the cookie <button class='btn'>Hi<button>"


// Where to add the elements 



//header.prepend(divElement)
// header.append(divElement)

/////////////////////// within 
// header.after(divElement)
// header.before(divElement)
// outside the header managemenr 


// Ajacent 


//delete the element



// removeChild is old 


// let p = divElement.parentElement
// p.removeChild('div')

// New way to remove the elements in javascript
//divElement.remove()


// Styles 
// divElement.style.backgroundColor = "green"
// divElement.style.color = "green"
// console.log(divElement.style.backgroundColor)
let modalElement = document.querySelector('.modal')
    // console.log(modalElement.style.backgroundColor)
    // modalElement.style.backgroundColor = "red"
    // console.log(modalElement.style.backgroundColor)

// console.log(getComputedStyle(modalElement).backgroundColor)
// console.log(getComputedStyle(modalElement).height)
// console.log(getComputedStyle(modalElement).width)



// Attribute 

//document.querySelector('img').src = `dice-${1}-png`
//data-cy


//{/* <img src = "one.png" class = "red yello green" name = "dice" alt = "diceroll" id = 'new' designer = "logo" data-cy = "new">
// let idElement = document.getElementById('#new')

// console.log(idElement.getAttribute('data-cy'))  'new'
// console.log(idElement.className) //red yello green
// console.log(idElement.src)
// console.log(idElement.getAttribute('data-cy')) 
// //console.log(idElement.designer) */}


// Set Attribute 
// modalElement.setAttribute('data-cy','logo') 
// console.log(modalElement)


// Classes 


// modalElement = document.querySelector('.modal')
// modalElement.className
// modalElement.classList.add('green')
// modalElement.classList.toggle('red') // red removed else appied
// modalElement.classList.contains('green')


// 8 -- pm -- event 

// 10 - 1 -- API project 

// 8 - AJAX -- ajax

// 10 - Ajax 

// 8 - Ajax


// Dates javascript