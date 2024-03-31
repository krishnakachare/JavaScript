// variable decleration
// let, const, var

// let keyword

// let x = 10
// //1. can reassigne value for variable
// console.log(x) // 10
// x = 30
// console.log(x) // 30

// y = 30
// console.log(y) //30
// y = 40
// console.log(y) //40

// const keyword

// const x = 10
// //1. can reassigne value for variable
// console.log(x) //10
// x = 30
// console.log(x) // TypeError: Assignment to constant variable. // cant update value


// Arithmetic operators

// +,-,*,/,%

// let x = 10
// let y = 20

// // 10+20
// // console.log(10+20) // 30
// console.log(x + y) // 30
// console.log(x - y) // -10
// console.log(x * y) // 200
// console.log(x / y) // 0.5
// console.log(x % y) // 10
// console.log(10 % 10) // 0


// function

// Requirement 

// let x = 10
// let y = 20
// let a = 10
// let b = 20

// console.log(x + y) // 30
// console.log(x - y) // -10
// console.log(x * y) // 200
// console.log(x / y) // 0.5
// console.log(x % y) // 10

// console.log(a + b) // 30
// console.log(a - b) // -10
// console.log(a * b) // 200
// console.log(a / b) // 0.5
// console.log(a % b) // 10


// Syntax of function-

// function(keyword) functionName(para1 , para2, para3){

// statements

// } // block

// function decleration

function ArtOperations(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
    console.log("function calling")
}

// function calling

// functionName(Arguments)    let a = 10
//                            let b = 20
//ArtOperations(10, 20)

ArtOperations(50, 100)

ArtOperations(1, 2)