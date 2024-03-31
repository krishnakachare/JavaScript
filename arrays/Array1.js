// Datatypes in js -->

// 1. Number  // 1, 2, 3.....
// 2. String  // " ", ' ', ` `
// 3. null
// 4. undefined
// 5. Array
// 6. Object 
// 7. Boolean   // true, false

// 5. Array 

// Array is Datatype of js
// CURD
// Properties & methods
// loop

// Variable in js -->
// let, const, var ---> keyword for variable decleration

// let a = 1  // store only one value
// console.log(a)
// console.table(a)

// Store multiple values in one variable then we can use array datatype
// e.g. 1 to 10
// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// Indexing in Array--->
// 1. +ve index
// 2. -ve index

// Always index start with zero(0) for +ve indexing
// Index start with -1 for -ve indexing
// Array Stores its values in index

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   ---> variable value (Array)

//  0  1  2  3  4  5  6  7  8  9    ---> Index no.  (+ve index)

// -10 -9 -8 -7 -6 -5 -4 -3 -2  -1    ---> Index no.  (-ve index)


// CURD ---> Create, Update, Read/Retrive/Fetch/get, Delete

// Need to create datatype

// 1. (C) Create an Array --->

// 1. By requirement:

// e.g let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. using class:

// let arr = new Array(4)
// // let arr = [ ] // have fix length 4
// console.log(arr)  // emty array
// console.table(arr)


let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   // b is address
//       0  1  2  3  4  5  6  7  8  9     // index no.s are sub-address

// console.log(b)
// console.log(typeof (b))

// Expected --> Array
// Ans. --> object       // Bcoz in js everything is object

// console.table(b)

// 2. (R) Retrive/get values from Array --->

// In object we can retrive values by -->
// 1. Bracket notation ([])
// 2. Dot notation (.)

// Array is object

// b[3]
// console.log(b[3])  // 4
// console.log(b[-3])  // 8

// console.log(b[0])  
// console.log(b[1]) 
// console.log(b[2])
// console.log(b[3]) 

// Array property
// length
console.log(b.length) // 10


// for (let i = 0; i < b.length; i++) {  // 0 to 9,   0 - 10
//           // console.log(i)  // Array index no.
//            console.log(b[i]) // Array values
// }


// undefine

// for (let i = 0; i <= b.length; i++) {  // 0 to 9,   0 - 10
//           // console.log(i)  // Array index no.
//            console.log(b[i]) // Array values
// }

for (let i = 0; i <= (b.length - 1); i++) {  // 0 to 9,   0 - 10
          // console.log(i)  // Array index no.
          console.log(b[i]) // Array values
}



// Last index of array == (Array.length-1)

