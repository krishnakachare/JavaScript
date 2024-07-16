// Functional methods                (Check func & return covered)
// 14. map()
// 15. filter()
// 16. reduce()
// 17. forEach()
// 18. findIndex()
// 19. some()
// 20. every()


// ----------------------------------------------------------------------------------------------
// Arrays functional methods (call back function)

// object have properties & methods
// arr.length  --- > property/variable
// arr.methodName() ----> method

// Call back function 

// function writing
// function calling  ---> functionName()

// call back function not need to call--->

// arr.methodName(function(para1,para2){

// })

// arr.methodName((para1,para2)=>{

// })

// function functionName(para1, para2){ }
// Function expression
// Arrow function

// let variableName = function writing
//--------------------------------------------
// 14. map(callBackFunction, thisValue) 

//  arr.methodName()  ---> method/ function calling
// arr.methodName(function(para1,para2){

// })

// we can use 3 type of functions as callback function

// // Function expression ----->
// arr.map(function (el, ind, array) {
// })
// // Arrow function -----> 
// arr.map((el, ind, array) => {
// })
// // function decleration 


//// -----------------------------------------------------------
// let callBack = (el, ind, array) => {
// }
// arr.map(callBack)

// Arrow function & function expression can use as arug to another function

// Assignement ---->
// Difference between function & method
// Difference between map & filter

//-------------------------------------------------------

// 14. map(callBackFunction, thisValue) 

// Action - operations performe on each array element
// Return - New array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // callBackFunction(currentValue, index, array){ }

// // old for loop
// // Adding 10 in each element of array

// let arr2 = []
// for (let i = 0; i <= (arr.length - 1); i++) {
//           // console.log(arr[i])  // currentValue
//           // console.log(i)  // index no.
//           // console.log(arr[i] + 10)
//           // // let a = arr[i]+ 10
//           // arr2.push(arr[i] + 10)
// }
// // console.log(arr2)

// let mapReturn = arr.map(function (el, index, arr) {
//           // console.log(el)    // currentValue
//           //console.log(index)  // index no.
//           // console.log(arr)   // Array

//           return (el + 10)
// })

// console.log(mapReturn)
// console.log(arr)
//----------------------------------------------------

// // 15. filter()

// // Action -  operations performe on each array element
// // Return - Filtered array (Array)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // for (let i = 0; i < arr.length; i++) {
// //           if (arr[i] >= 6) {
// //                     console.log(arr[i])
// //           }
// // }

// // let filterResult = arr.filter((el, index, array) => {
// //           console.log(el >= 6)        // true/false
// //           return el >= 6
// // })

// // console.log(filterResult)   // [ 6, 7, 8, 9 ]

// // Arrow function
// let filterResult = arr.filter((el, index, array) => el >= 6)
// console.log(filterResult)   // [ 6, 7, 8, 9 ]
// console.log(arr)

//---------------------------------------------------------------
// 16. reduce()

// Accumulator (acc)===>
// default value is zero

// Action -operations performe on each array element
// Return - Depend (single value)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // let total = 0
// //  for (let i = 0; i<arr.length; i++){
// //           total = total + arr[i]
// //  }
// //  console.log(total)  // 45

// // arr.reduce(function (acc, el, ind, array) {
// //           console.log(acc + el)
// //           return acc + el
// // })
// // // When we not passing second parameter to reduce then el == acc

// // arr.reduce(function (acc, el, ind, array) {
// //           console.log(acc + el)
// //           return acc + el
// // }, 0)

// let output = arr.reduce(function (acc, el, ind, array) {
//           // console.log(acc + el)
//           return acc + el
// }, 10)
// console.log(output)  // 55

//---------------------------------------------------------
// 17. forEach()

// Action - operations performe on each array element
// return - Nothing (undefine)

// let arr1 = [1, 2, 3, 4]

// let output = arr1.forEach(function (el, ind, arr) {
//           console.log(el + 10)
//           return el + 10
// })
// console.log(output)   // undefined

//--------------------------------------------------

// let transitions = [100, -300, 500, -200, -400, 500, 800]

// let withdraw = transitions.filter((el) => {
//           return el < 0
// })
// console.log(withdraw)

// let totalWithdraw = withdraw.reduce((acc, el) => {
//           // console.log(el)
//           // console.log(Math.abs(el))
//           // return acc + el
//           return acc + Math.abs(el)
// }, 0)
// console.log(totalWithdraw)

// math is object in js
// abs()
// Action - gives absulute values
// return - number

// Refactoring of code

// let totalWithdraw = transitions.filter(el => el < 0).reduce((acc, el) => (acc + Math.abs(el)), 0)
// console.log(totalWithdraw) // 900

// let totalDeposite = transitions.filter(el => el > 0).reduce((acc, el) => (acc + el), 0)
// console.log(totalDeposite) // 1900

//-------------------------------------------------------------
// 18. findIndex(callBackfunction, thisvalue)

// Action - Finding first occurance of value
// Return - index number (number)

// if element is not exist in array then return -1

// let arr = [1, "Hi", 8, 3, 0]
// // let output = arr.findIndex((el, ind, arr) => {
// //           // console.log(el)
// //           // console.log(el > 2)
// //           return el > 2
// // })
// // console.log(output) // 2(index no)

// let output = arr.findIndex((el, ind, arr) => {
//           // console.log(el)
//           // console.log(el > 2)
//           return el > 2 || el == "Hi"
//           // false || false ---> false (not finding index no)
//           // false || true ---> true ( Finding index no)  // Return index no.
//           // true || false ---> true ( Finding index no)
//           // true || false ---> true ( Finding index no)
// })
// console.log(output) // 1(index no)
// ----------------------------------------------------------------------
// 19. some(clFunct, thisValue)
// Action - Doing operation on arrays each element
// Return - true/false (Boolean)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let output = arr.some((el, index, arr) => {
          console.log(el > 5)
          return el > 5
          // false || false -- false || false --> false || true --> true
})
// console.log(output) // true

// -----------------------------------------------------------
// 20. every(clFunct, thisValue)
// Action -  Doing operation on arrays each element
// Return -  true/false (Boolean)

// let output = arr.every((el, index, arr) => {
//           return el > 5
// })
// console.log(output)  // false




//------------------------------------------------------------------------------

// Arrays functional methods (call back function)

// object have properties & methods
// arr.length  --- > property/variable
// arr.methodName() ----> method

// Call back function 

// function writing
// function calling  ---> functionName()

// call back function not need to call--->

// arr.methodName(function(para1,para2){

// })

// arr.methodName((para1,para2)=>{

// })

// function functionName(para1, para2){ }
// Function expression
// Arrow function

// let variableName = function writing


// let arr = [1, 2, 1, 3, 1, 4, 2, 2]

//  arr.methodName()  ---> method/ function calling
// arr.methodName(function(para1,para2){

// })

// Function expression ----->

arr.map(function (el, ind, array) {

})

// Arrow function -----> 
arr.map((el, ind, array) => {

})


//// -----------------------------------------------------------
let callBack = (el, ind, array) => {

}

arr.map(callBack)

// Arrow function & function expression can use as arug to another function








// Assignement ---->
// Difference between function & method
// Difference between map & filter
// Diff indexOf & findIndex
