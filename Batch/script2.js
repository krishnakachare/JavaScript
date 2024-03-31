//String:

var name = "Gauri";
console.log(name);
console.log(typeof name);
console.log("Sarika");
console.log("****");

// Method perform some action & it return something:

//Upper:
var upper = name.toUpperCase(); //GAURI
console.log(upper)
console.log(typeof upper);
console.log("****");

// //Lower
// // var lower = name.toLowerCase(); //gauri
// // console.log(lower)
// console.log(typeof lower);
// // console.log("****");

// var namey = "Chinmay";
// var a = namey.toLowerCase();
// console.log(a)
// console.log("****");

// // var b = namey.toUpperCase();
// // console.log(b)
// console.log("****");


// startsWith:
// let flower = "Orchids";
// let f = flower.startsWith('p'); //false
// console.log(f);
// console.log(typeof f);


// // endsWith:
// let fruit = "Mango";
// let ft = fruit.endsWith('o'); // true
// console.log(ft);
// console.log(typeof ft);


// var lastName = "Pansare";
// console.log(lastName);
// console.log(lastName[0]);

// // P a n s a r e
// // 0 1 2 3 4 5 6

// // indexOf
// va lname = lastName.indexOf('s'); //3
// var lname = lastName.indexOf('a'); //1
// console.log(lnrame);
// console.log(typeof lname);


// // replace:
var lastName = "Pansare";
var replaceString = lastName.replace('s', 'n'); //Pannare
console.log(replaceString);
console.log(typeof replaceString);

// var replaceString = lastName.replace('n',1); 
// console.log(replaceString);
// console.log(typeof replaceString);

// console.log(lastName.length) //7


// var boy = "anay";
// // a n a y
// // 0 1 2 3
// console.log(boy.indexOf('a'));  // 0
// console.log(boy.indexOf('a'));  // 0
// console.log(boy.lastIndexOf('a'))  // 2
// console.log("Hindi".indexOf('i')) // 1
// console.log("Hindi".lastIndexOf('i')) // 4

// // Search:
// console.log(boy.search('y'));  // 3
// console.log("Chinmay".search('y'));  // 6
// console.log("Chinmay".search('s'));  // -1


// var fruits = "APPLE BANANA CHIKU PAPAYA GRAPES";
// var userChoice = prompt("Please enter the fruits you wish to buy..").toUpperCase();  // APPLE
// console.log(typeof userChoice);
// if( fruits.search(userChoice) >= 0 ){
//     console.log("Fruits Available");
// }
// else{
//     console.log("Fruits is not Available")
// }


// // Slice -- split:
// var fullName = "Sarika Pansare";
// var arr = fullName.split("a") // s rik p ns re
// console.log(arr)
// console.log(typeof arr)


// Conditional Statements:

// Whenever in any programming language expect multiple output, use conditional statement..
//  if-- else, else--if, switch...

// syntax:

// if(condition){ // true or false
//     // statements
// }else{
//     // statements
// }

// elseif -- to specify a new condition to test if first condition is false
// switch -- select one of many blocks of code tobe executed..

// 1 - 20 ==> 20%
// 20> ==> 50%

// var userNumber = prompt("Please enter the number of tickets..");
// if(userNumber < 20){
//     console.log("You get 20% discount..");
// }else{
//     console.log("You get 50% discount..")
// }