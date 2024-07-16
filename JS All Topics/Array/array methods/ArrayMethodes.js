// Array   ----> Array is an object in js

// object have properties & methods ==>

//Properties -
// 1. length

//Methodes --->
//Methods have Action & return

//// # Array Methods:

// 1. push()
// 2. pop()
// 3. unshift()
// 4. shift()
// 5. slice()
// 6. fill()
// 7. reverse()
// 8. flat()
// 9. concate()
// 10. includes()
// 11. join()
// 12. sort()
// 13. indexOf()

// Functional methods                (Check func & return covered)
// 14. map()
// 15. filter()
// 16. reduce()
// 17. forEach()
// 18. findIndex()
// 19. some()
// 20. every()


// ------------------------------------------------------------------
// 1. push(arug)

// Action - Adding element of last  // update
// Return - new length (Number)     // Retrive

// var arr = ["a", "b", "c", 2]

//console.log(arr)
// console.log(arr.length)
// // arr.push(10)
// console.log(arr.push()) // 4
// console.log(arr.push(10)) // 5
// console.log(arr)


// console.log(arr)
// var arr = ["a", "b", "c", 2]
// //console.log(arr)
// // var arr = ["a", "b", "c", 2, 1]


// // 2. pop()

// // Action - removing element of last from array // update
// // Return - removed element (datatype is depend)

// var arr = ["a", "b", "c", 2]

// console.log(arr)
// console.log(arr.length)

// console.log(arr.pop()) // 4
// console.log(arr)
// console.log(arr.length)

// // 3. unshift(arug)

// // Action - - Adding element of the first in array
// // Return -   new length (number)

// var arr = ["a", "b", "c", 2]

// console.log(arr)
// console.log(arr.length) // 4

// console.log(arr.unshift("Hi")) // 5
// console.log(arr)  // [ 'Hi', 'a', 'b', 'c', 2 ]
// console.log(arr.length)  // 5

// 4. shift()

// Action - removing first element from array // update
// Return -  Removed element (Depend)

// var arr = ["a", "b", "c", 2]

// console.log(arr)
// console.log(arr.length) // 4

// console.log(arr.shift()) // a
// console.log(arr)  // [ 'b', 'c', 2 ]
// console.log(arr.length)  // 3


// 5. slice(Start ind no, end ind no)
// end ind number is not including

// Action - Cut the array b/t passed points
// Return -  sliced array (Array)

// var arr = ["a", "b", "c", 2]

// // +ve index
// let a = arr.slice(1, 3)
// // Always start point is smaller than end point
// // a = arr.slice(3, 1)  // []

// console.log(a) // [ 'b', 'c' ]
// console.log(arr)  // [ 'b', 'c', 2 ]
// console.log(arr.length)  // 3

// -ve index  --> Slicing accept -ve indeing
// let a = arr.slice(-3, -1)
// // Always start point is smaller than end point//  LHS to RHS
// // a = arr.slice(-1, -3)  // []

// console.log(a) // [ 'b', 'c' ]
// console.log(arr)  // [ 'b', 'c', 2 ]
// console.log(arr.length)  // 3

// // When we not decleare end point its default consider at the end of array
// let a = arr.slice(1)
// console.log(a) // [ 'b', 'c', 2 ]



// 6. fill(element, StartPoint, endPoint)

// Action - replace/fill elements in b/t passed points
// Return - updated array (Array)

// EndPoint not including

// var arr = ["a", "b", "c", 2]

// + ve indexing
// console.log(arr.fill(true, 1, 3))
// console.log(arr)

// // - ve indexing
// console.log(arr.fill(true, -3, -1))
// console.log(arr)

// // not decleared end point
// console.log(arr.fill(true, -3))
// console.log(arr)


// // 7. reverse()

// // Action - Reverse base array
// // Return - Reversed array (Array)

// var arr = ["a", "b", "c", 2]
// console.log(arr.reverse())  // [ 2, 'c', 'b', 'a' ]
// console.log(arr)

//--------------------------------------------------------------------------------

// //## Nested Array --->

// // Array contains another sub array

// var arr = ["a", "b", "c", [10, 20], 2]
// //          0    1    2       3     4
// //                          0   1

// console.log(arr[3])  // [ 10, 20 ]
// console.log(arr[3][0])  // 10
// console.log(arr[3][1])  // 20

//--------------------------------------------------------------------------------------


// // 8. flat()

// // Action - Removing sub arrays from base array
// // Return - New flat array (Array)

// var arr = ["a", "b", "c", [10, 20], 2]
// console.log(arr.flat())  // [ 'a', 'b', 'c', 10, 20, 2 ]
// console.log(arr)       // [ 'a', 'b', 'c', [ 10, 20 ], 2 ]


// 9. concate(arug1, arug2,...)

// // Action - combine arug(array) in base array
// // Return - New combined array (Array)

// let arr1 = ["a", "b", "c", [10, 20], 2]
// let arr2 = ["a", "b", "c"]
// let arr3 = ["a"]

// console.log(arr3.concat(arr1)) // [ 'a', 'a', 'b', 'c', [ 10, 20 ], 2 ]
// // console.log(arr3, arr1)
// console.log(arr3.concat(arr1, arr2))

// // 10. includes(arug)

// // Action - Checking element/value/arug is present in base array
// // Return - true/false (Boolean)

// let arr1 = ["a", "b", "c", [10, 20], 2]

// console.log(arr1.includes("a")) // true
// console.log(arr1.includes(1))  // false

// // its not works on nested array ---->
// console.log(arr1.includes(10))  // false

// // 11. join(arug)

// // Action - combining the each array element in string
// // Return -      String

// let arr1 = ["a", "b", "c", 1]

// console.log(arr1.join())  // a,b,c,1
// console.log(typeof(arr1.join())) // string

// console.log(arr1.join(0))  // a0b0c01
// console.log(arr1.join(" ")) // a b c 1

// console.log(arr1.join(" Wel-Come "))  // a Wel-Come b Wel-Come c Wel-Come 1

//=======================================================================================
// 12. sort()

// By default no arug

// Action - String arrange in Alphabetically
// Return - updated sort array (Updated Array)

// // Works fine for string

// let arr = ["kk", "Ganesh", "Sagar", "Rushi"]

// console.log(arr.sort())  /// [ 'Ganesh', 'Rushi', 'Sagar', 'kk' ]
// console.log(arr)   // Updating base array

//-------------------------------------------------------------------------------------------------
// // js is case sensitive lang

// let arr2 = ["Kk", "Ganesh", "Sagar", "Rushi"]
// console.log(arr2.sort())  /// [ 'Ganesh', 'Kk', 'Rushi', 'Sagar' ]

// let arr3 = ["Kk", "Ganesh", "Sagar", "Rushi", "kk", "ganesh", "sagar", "rushi"]
// console.log(arr3.sort())  /// ['Ganesh', 'Kk', 'Rushi', 'Sagar', 'ganesh', 'kk', 'rushi', 'sagar']

//---------------------------------------------------------------------
// Sort() for numbers===>

// Sort() applied on Single-digit numbers  ---->
// let numArray = [1, 5, 4, 6, 7, 2, 3]

// numArray.sort()
// console.log(numArray)  // [1, 2, 3, 4, 5, 6, 7]

// numArray.reverse()
// console.log(numArray)// [7, 6, 5, 4, 3, 2, 1]

//--------------------------------------------------------
// Method chaining  ---->
// numArray.sort().reverse()

//---------------------------------------------------------
// Sort() applied on multi-digit numbers  ---->

// let numArray2 = [16, 50, 449, 62, 71, 201, 345]
// numArray2.sort()
// console.log(numArray2) //[ 16, 201, 345, 449, 50,  62,  71]

//---------------------------------------------------------------
// // Arug  ---> callback Function
// // function(a,b){ return a - b}

// numArray2.sort(function (a, b) { return a - b })
// console.log(numArray2)    // [16,  50,  62, 71, 201, 345, 449 ]

// -----------------------------------------------
// let numArray = [1, 5, 4, 6, 7, 2, 3]
// numArray.sort(function (a, b) { return b - a })
// console.log(numArray)  // [ 7, 6, 5, 4, 3, 2, 1]


//==========================================================================================
// 13. indexOf(arug, start)

// arug = array value
// start = index no. (Starting point)

// Action - Finding index no for arug which occure firstly (default)
// Return - index no. (Number)

let arr = [1, 2, 1, 3, 1, 4, 2, 2]
// /       0  1  2  3  4  5  6  7

// console.log(arr.indexOf(3))  // Return index no of 3 value is 3

// // Value/arug not exist in array then returns -1
// console.log(arr.indexOf("Hi")) // -1
// console.log(arr.indexOf(0))   /// -1

// Multiple occurances ===>
// Start point considering

// console.log(arr.indexOf(1)) // 0
// console.log(arr.indexOf(2))  // 1

// console.log(arr.indexOf(1, 1))   // 2

// console.log(arr.indexOf(1, 3))  // 4
// console.log(arr.indexOf(1, 4))  // 4

// console.log(arr.indexOf(2, 5))  // 6

// Pass start value as dynamically  =====>

// For second occurance =====>

// console.log(arr.indexOf(2, 5))  // 6

// arr.indexOf(2)==> 1
// 1 + 1 = 2 ---> start point

// console.log(arr.indexOf(2, arr.indexOf(2) + 1)) // 6
// console.log(arr.indexOf(2, arr.indexOf(2) + 1))  // 6

// // For third occurance =====>

// console.log(arr.indexOf(2, (arr.indexOf(2, arr.indexOf(2) + 1) + 1))) // 7

// // For 4th occurance =====>
// ----------------------------------------------------------------------------------------------
