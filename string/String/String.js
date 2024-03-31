// Datatypes in js ==>
// 1. Number --> number
// 2. String --> string
// 3. null     --> object
// 4. undefined --> undefined
// 5. Array ----> object
// 6. Object --> object
// 7. Boolean --> Boolean
//----------------------------------

// 2. String ---> 

// // Typeof --> to check datat type
// // Array is object in js
// let a = [1, 3, 4]
// console.log(typeof (a)) // object ( Array )

// console.log(typeof (undefined))  // undefined
// console.log(typeof (null))  // object

// // String is object in js
// // " "  --> Double qoute
// let b = "Hi"
// console.log(typeof (b)) // string
// // ' '  --> single qoute
// b = 'Hello'
// console.log(typeof (b)) // string
// // Backticks
// b = `Hello`
// console.log(typeof (b)) // string

// Sub-string of b
// H  --> sub string
// llo --> sub string

//------------------------------------------------
// String stores its characters on index number
// Indexing ==>
// +ve indexing & -ve indexing

// let str = "Ganesh"

// //  G  a  n  e  s  h
// //  0  1  2  3  4  5  --> +ve
// // -6 -5 -4 -3 -2 -1  --> -ve   

// // Empty space is string in js
// console.log(str[5],str[6])
// console.log(str.length)
// // When we write any entity in quote like number, special symbol, empty sapce are string in js
// // e.g -->  "10" , " ", "@"

//-----------------------------------
// Operations performed on object-
// CURD operations -->
// C - Create
// U - Update
// R - Retrive (get)  // Dot notation & Bracket notation
// D - Delete

// c 
let str = "Hello"
// u
// Will see methods
// R
console.log(str[3]) // 1
// For string works only +ve indexing
console.log(str[-1])  // undefined
// D
// Will see methods

//-------------------------------------------------
// String concatination===>
// 1. Addition (+) -->

//1. string + string
let a = "Hi"
let b = "Ganesh"
// console.log(a + b) // HiGanesh
// console.log(a + " " + b) // Hi Ganesh

//-----------------------
//2. string + number
a = "Hi"
b = 10
let c = 5
// console.log(a + b) // Hi10
// // string + number ---> string
// console.log(typeof(a + b)) // string
// // string + number + number ---> string + number ---> string
// console.log(a + b + c)  // Hi105

//--------------------
//3. number + string
// console.log(b + a)    // 10Hi 
// console.log(typeof (b + a))  // string
// // number + number --> number + string --> string
// console.log(c + b + a)  // 15Hi

//--------------------------------------
// "Hello Ganesh & Ram"  -- Required output
// "Hello  & Ram"  --> input
let z = "Ganesh"

// "Hello z & Ram" --> Not able to fetch z variable value

// 2. Placeholder ==> Allow to get variable values in string

// Backticks (` `)  
// Place holder -->  ${ VariableName } 

console.log(`Hello ${z} & Ram`)  // Hello Ganesh & Ram

// object--->
// object have properties & methods
// Methods have action & return








