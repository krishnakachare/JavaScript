// Math  ---> js object
// have properties & methods
// methods of maths --->
// 1. floor --- Min.
// 2. ceil  --- Max
// 3. round
// 4. random
// 5. abs()

// methods have action & return

// // floor
// console.log(Math.floor(9.4)) // 9
// // ceil
// console.log(Math.ceil(9.4))  // 10
// // round
// console.log(Math.round(9.3)) // 9
// console.log(Math.round(9.4)) // 9
// console.log(Math.round(9.5)) // 10
// console.log(Math.round(9.6)) // 10

// random
// console.log(Math.random())  // return number b/t 0 to 1

// console.log(Math.random() * 2)

// let a = Math.random() * 2
// console.log(Math.floor(a))
// console.log(Math.ceil(a))
// console.log("Hi")

// document.write("Hi Js")

// html - hyper text markup lang


// Global(window) object method  --->
// 1. prompt() 
// 2. Number()
// 3. String()

// Action --> recive user inputs from browser
// return --> String (user input)

// let userInput = prompt()
// console.log(userInput)  // recive user inputs from browser
// console.log(typeof (userInput))   // String

// let userInput = prompt("Plz enter no. b/t 0 to 1")
// console.log(userInput)
// console.log(typeof (userInput))  // String

// let randomNo = Math.ceil(Math.random() * 1)  // 1, 2
// console.log(randomNo)
// console.log(typeof (randomNo))  // number

// if (randomNo == userInput) {
//           document.write(" Guess is CORRECT")
// } else {
//           document.write(" Guess is IN-CORRECT")
// }

// Ternory operator ---->
// randomNo == userInput ? console.log("CORRECT"):console.log("IN-CORRECT")


// Datatypes in js
// 1. Number  // 1, 2, 3.....
// 2. String  // " ", ' ', ` `
// 3. null
// 4. undefined
// 5. Array
// 6. Object 
// 7. Boolean   // true, false



//randomNo === userInput ? console.log("CORRECT") : console.log("IN-CORRECT")   // diff b/t ==, ===
//String(1) === number(1)   // false

//1. String(1) === String(1)   /// true

//2. number(1) === number(1)   // true

// Going to change datatype

// 2. Number()

// Action ---> Convert arug in number datatype
// Return ---> Number

// let a = "1"
// // 1 ---> number
// // "1" ---> string

// console.log(typeof (a)) // string
// let b = Number(a)
// console.log(b)   // 1
// console.log(typeof (b)) // number

// let z = "hi"
// console.log(typeof (z)) // string
// let x = Number(z)
// console.log(x)      // NaN      ---> Not A Number
// console.log(typeof (x)) // number


// 2. String()

// Action ---> Convert arug in string datatype
// Return ---> String

// let a = 10
// console.log(typeof (a)) // number
// let b = String(a)
// console.log(b)   // "10"
// console.log(typeof (b)) // string



// Diff in for & while loop
// Array
