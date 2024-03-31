// Array   ----> Array is an object in js

//// # Array Methods:

// 1. push()
// 2. pop()
// 3. unshift()
// 4. shift()
// 5. slice()
// 6. indexOf()
// 7. reverse()
// 8. flat()
// 9. concate()
// 10. includes()
// 11. join()
// 12. sort()

// Functional methods

// 13. map()
// 14. filter()
// 15. reduce()
// 16. forEach()
// 17. find()
// 18. findIndex()
// 19. some()
// 20. every()
// 21. flatmap()
// 22. fill()
// 23. splice() 


//------------------------------------------------------------------------

// let a = 10;

// let b = [10, 20, 30, 40]
// //        0  1   2    3

// console.log(b)
// console.table(b)

// b = [10, true, "Ram", null]
// //    0   1      2     3       // index number
// //    1   2      3     4       // count of values

// console.log(b)
// console.table(b)

// Object have properties & methods

// Properties --> 
// 1. length --> Return length of array

// console.log(b.length)      // 4
// console.log(b.length - 1)  // 3

// Methods of Array-->
// Methods have action & return type

let array = [1, 2, 3, "ram", "true", null, 4, 5]

// 1. push()

// Action --> Adding element at the end of array
// Return --> New length of array

// Before the update
// console.log(array.length)         // 8
// console.table(array)

// let output = array.push(false)
// // After the update
// console.log(output)               // 9
// console.log(array.length)         // 9
// console.table(array)

// We can able to add multiple elements by using push()
// output = array.push("sagar", "Rushi")                // (["sagar", "Rushi"])
// // After the update
// console.log(output)               // 9
// console.log(array.length)         // 9
// console.log(array)
// console.table(array)


// 2. pop()

// Action --> Remove the last element of array
// Return --> Gives removed element

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // 8

// let output = array.pop()

// // After the update
// console.log(output)               // 5
// console.log(array.length)         // 7
// console.log(array)
// console.table(array)


// 3. unshift()

// Action --> Adding element infront of array
// Return --> New length of array

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // length of array 8,  last index 7

// let output = array.unshift(false)

// // After the update
// console.log(output)               // 9
// console.log(array.length)         // 9
// console.log(array)
// console.table(array)

// We can able to add multiple elements by using unshift()
// output = array.unshift("Ganesh", "Mahesh")

// // After the update
// console.log(output)               // 9
// console.log(array.length)         // 9
// console.log(array)
// console.table(array)


// 4. shift()

// Action --> Remove the first element from array
// Return --> Removed element

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // length of array 8,  last index 7

// let output = array.shift()

// // // After the update
// console.log(output)               // 1
// console.log(array.length)         // 7
// console.log(array)
// console.table(array)

// CURD

// 5. slice(startPoint, endPoint)

// Action --> Cut the base array from required points
// Return --> New Cut/Sliced array

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // length of array 8,  last index 7
//             0  1  2    3       4      5   6  7  +ve index
//            -8 -7 -6   -5      -4     -3  -2 -1  -ve index numbers

//  +ve index number
//let output = array.slice(0, 3)  //[1, 2, 3]

//  -ve index number
// let output = array.slice(-8, -5)  //[1, 2, 3]

// // After the update
// console.log(output)               // [1, 2, 3]
// console.log(array.length)         // 8
// console.log(array)
// console.table(array)

// 6. indexOf(ArrayElement)

// Action --> Findes the arrays element index number
// Return --> Index number

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // length of array 8,  last index 7
//             0  1  2    3       4      5   6  7  +ve index numbers

//  +ve index number
// let output = array.indexOf("ram")   // 3
// output = array.indexOf()            // -1
// output = array.indexOf("Ganesh")    // -1

// // After the update
// console.log(output)               // 3
// console.log(array.length)         // 8
// console.log(array)
// console.table(array)


// 7. reverse()

// Action --> Reverse the base array
// Return --> Reversed array

//let array = [1, 2, 3, "ram", "true", null, 4, 5]  // length of array 8,  last index 7
//             0  1  2    3       4      5   6  7  +ve index numbers

//  +ve index number
// let output = array.reverse()   // 3

// // // After the update
// console.log(output)               // [5, 4, null,'true', 'ram', 3, 2, 1]
// console.log(array.length)         // 8
// console.log(array)
// console.table(array)


//// Nested array

// let nestedArray = [10, 20, ["Hi", 3], 30]
//                  0   1       2      3
//                           0    1

// console.log(nestedArray[1])  // 20
// console.log(nestedArray[2])  // [ 'Hi', 3 ]
// console.log(nestedArray[2][0])  // "Hi"
// console.log(nestedArray[2][1])  // 3


// 8. flat ()

// Action --> Remove sub-array from base array
// Return --> new array

// console.log(nestedArray.flat()) //  [ 10, 20, 'Hi', 3, 30 ]
// console.table(nestedArray)
// console.table(nestedArray.flat())


// 9. concate()

// Action --> join two/more different array
// Return --> new array

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// console.log(arr1.concat(arr2))   // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr2.concat(arr1))   // [ 4, 5, 6, 1, 2, 3 ]
// console.log(arr1.concat(arr2,nestedArray))   // [ 1, 2, 3, 4, 5, 6, 10, 20, [ 'Hi', 3 ], 30 ]


// 10. includes()

// Action --> Check element is present or not in array
// Return --> True/False (Boolean)

// let array = [1, 2, 3, "ram", "true", null, 4, 5]

// console.log(array.includes(1))  // true
// console.log(array.includes("Ganesh"))  // false


// 11. join()

// Action --> joining array elements
// Return --> joined array elements (string)

// let arr1 = [1, 2, 3]

// console.log(arr1.join())  //1,2,3
// console.log(typeof (arr1.join()))  // string

// console.log(arr1.join(" ")) // 1 2 3
// console.log(arr1.join(6))   // 16263








// Functional methods




