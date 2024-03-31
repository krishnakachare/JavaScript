// // alert("Hello..");

// var person = {
//     name : 'Gauri',
//     age:{
//         'after':10,
//         'before':20
//     },
//     walk : function(){
//         // console.log(this.name, this.age);
//         console.log(this.name, this.age.after); // gauri 10
//     }
// }

// person.walk();
// person.age.after = 15;
// // console.log(person.age.after);
// person.walk(); 
// console.log(person['name']);


// ID:

var elementOne = document.getElementById('green');
elementOne.style.color = 'green';
elementOne.style.fontSize = '65px';
elementOne.style.fontFamily = 'Constantia';


// selecting the element:
var elementTwo = document.getElementById('yellow');
elementTwo.style.background = 'yellow';
elementTwo.style.color = 'purple';
elementTwo.style.fontSize = '40px';


// TagName:

var elementThree = document.getElementsByTagName('h3')[0];
elementThree.style.color = 'crimson';


// ClassName:

// var ulList = document.getElementsByTagName('ul')[0];
// for(var i = 0; i < ulList.length; i++){
//     ulList.style.color = 'red'
// }


// var elementFour = document.getElementsByClassName('red')[0];
// elementFour.style.color = 'red';


// textContet


// console.log(elementFour.textContent)
// elementFour.textContent = 'Heading 5';
// console.log(elementFour.textContent)

// var headingElement = document.getElementById('hi')

// var textChange = function(){
//     headingElement.textContent = 'Gauri'
// }
// headingElement.addEventListener('click', textChange)



// // mouseOver
// var textChange = function(){
//     headingElement.style.color = 'red'
//     headingElement.textContent = 'Pranali'
// }
// headingElement.addEventListener('mouseover', textChange)


// // mouseOut
// var textChange = function(){
//     headingElement.style.color = 'blue'
// }
// headingElement.addEventListener('mouseout', textChange)


// var elementOne = document.getElementById('changeMe')
// var clickMe = document.getElementById('myButton')
// var elementTwo = document.getElementsByName("myName")[0]
// console.log(elementTwo)

// clickMe.addEventListener('click',function(){
//     elementOne.textContent = 'Hello Student';
//     elementTwo.style.color = 'orange';
// })


var clickMe = document.getElementById('myButton')


clickMe.addEventListener('click', function() {
    document.getElementById('hione').style.color = 'crimson'
    document.getElementsByClassName('red')[0].style.background = 'skyblue'
    document.getElementsByName('headFirst')[0].style.fontSize = '60px'
    document.getElementsByTagName('p')[0].textContent = 'All three Methods are works..'
});