// let x  = 10
// console.log(x)
// x = 300
// console.log(x)

// const u  = 800
// console.log(u)
// //u = 100

// let a = 100
// let b = 50

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// let s = 100
// let t = 10

// console.log(s+t)
// console.log(s-t)
// console.log(s*t)
// console.log(s/t)
// console.log(s%t)

// // function
// function Calculator(x,y){
//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x%y)
//     console.log(x/y)
// }
// Calculator(12,6)
// Calculator(10,5)


// // function without parameter and without return type
// function add(){
//     console.log(9+9)
// }
// add()
// add()
// add()
// add()

// // function with parameter and without return type

// function addB(x,y){
//     console.log(x+y)
// }
// addB(12,1)
// addB(10,1)
// addB(1,1)

// // function with parameter and with return type
// // 100 given
// // 100 show

// function addC(x,y){
//     return x + y // 17
// }
// let q1 = addC(12,5)
// console.log(q1)
// console.log(q1 + 100)
// console.log(q1 - 5)




// keywords for variable declerations
// let, var, const

// let a = 10
// console.log(a) // 10

// a = 40
// console.log(a) // 40


// const z = "Hi"
// console.log(z) // "Hi"

// z = "Hii"       // TypeError: Assignment to constant variable.
// console.log(z)



//Arithematic operators
// +, -, *, %, /


// console.log(10 + 5)    // 15

// let a = 10
// let b = 5

// console.log(a + b)  // ( 10 + 5 )  // 15
// console.log(a - b) // 5
// console.log(a * b) // 50
// console.log(a % b) // 0
// console.log(a / b) // 2

// let x = 20
// let y = 2

// console.log(x + y) // 22
// console.log(x - y)  // 18
// console.log(x * y) // 40
// console.log(x % y) // 0
// console.log(x / y) // 10


// Advantages of functions
// 1. Avoid repetation of code
// 2. Made code reusable
// 3. increase flexiblity of code 


// functions in js
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function



// 1. Function Decleration

// Syntax

// Function writing

// function(Keyword) functionName ( para1,para2,para3(Parameters)){

// Statements

//} block

// function calling

// functionName(arg1, arg2(Arguments))

// console.log("hi")

// function calulations(x, y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x % y)
//     console.log(x / y)
// }

// calulations(20, 2)
// calulations(30, 15)


// console.log("by")



// 1. Function Decleration - 1. function without parameter & without return
//                           2. function with parameter & without return
//                           3. function with parameter & with return
//                           4. function without parameter & with return



// // 1. Function Decleration - 1. function without parameter & without return

// function add (){
//     console.log(2+2)
// }

// add()  // 4
// add()  // 4    // Hard code
// console.log(add())  // undefined   - Function not return anything

// // 1. Function Decleration - 2. function with parameter & without return

// function add(x, y) {
//     console.log(x + y)
// }

// add(2, 2)  // 4
// add(4, 4)  // 8

// console.log(add(2, 2))  // undefined   - Function not return anything


// 1. Function Decleration - 3. function with parameter & with return

// function add(x, y) {
//     console.log(x + y)   //4
//     return (x + y + 1)
// }

// add(2, 2)  // 4
// console.log(add(2, 2))  // 5  
// console.log(add(2, 2) + 4)  // 8
// console.log(add(3, 3) * 2)  // 14


// 1. Function Decleration - 4. function without parameter & with return

// function pi() {
//     return 3.14
// }
// // let pi = 3.14

// pi()
// console.log(pi())  // 3.14
// let a = pi()
// console.log(a)     // 3.14



// 2. Function Expression

// Syntax

// Function writing

// let/var/const  functionName(variable) = function(Keyword) ( para1,para2,para3(Parameters)){

// Statements

//} block

// function calling

// functionName(arg1, arg2(Arguments))


// let calulations = function (x, y) {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x % y)
//     console.log(x / y)
// }

// calulations(2, 2)


// 3. Arrow Function

// Syntax

// Function writing

// let/var/const  functionName(variable) =  ( para1,para2,para3(Parameters)) => {

// Statements

//} block

// function calling

// functionName(arg1, arg2(Arguments))


// let calulations = (x, y) => {
//     console.log(x + y)
//     console.log(x - y)
//     console.log(x * y)
//     console.log(x % y)
//     console.log(x / y)
// }

// calulations(2, 2)
