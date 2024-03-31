// comparision operators in js 

// outputs true or false (Boolean datatypes)
// LHS = RHS

// <, >, <=, >=, ==, ===, !=, !==

// console.log(typeof (true)) // boolean
// console.log(typeof (false)) // boolean

// typeof (true)  // function calling

// 4 < 2
// console.log(4 < 2)  // false
// console.log(2 < 4)  // true
// console.log(2 < 2)  // false

// 4 > 2
// console.log(4 > 2)  // true
// console.log(2 > 4)  // false
// console.log(2 > 2)  // false



// logical operators in js

// 1. And  (&&)

//false && false
// console.log(false && false)   // false
// console.log(false && true)   // false
// console.log(true && false)   // false
// console.log(true && true)   // true

// 2. OR  (||)
// console.log(false || false)   // false
// console.log(false || true)   // true
// console.log(true || false)   // true
// console.log(true || true)   // true

// 3. NOT (!)
// console.log(!true)   // false
// console.log(!false)   // true

// 4 <= 2   
// // js used OR (||) operator for final output
// console.log(4 <= 2)  // false       false || false  //  false 
// console.log(2 <= 4)  // true        true  || false  //  true 
// console.log(2 <= 2)  // true        false  || true  //   true

// 4 >= 2
// // js used OR (||) operator for final output
// console.log(4 >= 2)  // true         true || false  //  true 
// console.log(2 >= 4)  // false        false  || false  //  false
// console.log(2 >= 2)  // true         false  || true  //   true

// ==, ===, !=, !==


// 4
// "4"
// '4'
// console.log(typeof ('4')) // string
// console.log(typeof (4)) // number

// =, ==, ===

// let a = 4
// let b = "4"
// console.log(a == b)  // true 
// console.log(a === b)  // false

// !==, !===    // !=, !==

// console.log(a != b)    // false   // !true  // false
// console.log(a !== b)  // true    // !false   // true
























//  print in js
// console.log("Good")       // Good
// let arr = [5, 4, 3, 2, 1]
// console.table(arr)

// Datatypes in js

// 1. Number
// 2. String
// 3. null
// 4. undefined
// 5. Array
// 6. Object
// 7. Boolean

// typeof ("Good")
// console.log(typeof ("Good"))  // string
// console.log(typeof (20))  // number
// console.log(typeof ("20"))  // string

// " " - Double qoute
// ' ' - Single qoute   ---> Data type is string

// console.log(typeof (null))  // object
// console.log(typeof (undefined))  // undefined
// console.log(typeof ([1, "HI"]))  // object

// console.log(typeof ({
//     name: "Ganesh",
//     age: 27
// }

// ))                          // object

// console.log(typeof (true))   // boolean
// console.log(typeof (false))   // boolean

// Comments in js
// 1. Single line comment

// console.log(typeof (true))   // boolean
// console.log(typeof (false))   // boolean


// 2.Multi line comment

/*  ---> Start point

console.log(typeof ({
    name: "Ganesh",
    age: 27
}
))                          // object

 ---> End point */


// variable decleration in js

// Keywords in js

// let, var, const
// when we not used any keyword then by defaults its decleared by let keyword



// let a = 20
// a = "Hi"         // we can update the value

// console.log(20)  // 20
// console.log(a)  // 20     // Hi
// console.log(typeof a)  // number  // String


// var a = 20

// console.log(a)  // 20
// console.log(typeof a)  // number

// var a = "Hi"    // we can reassign the variable

// //console.log(20)  // 20
// console.log(a)  // "Hi"
// console.log(typeof a)  // string


// const a = 20

// a = 10           // we cant update variable

// // console.log(20)  // 20
// console.log(a)  // 20
// console.log(typeof a)  // number

// when we not used any keyword then by defaults its decleared by let keyword
// a = 10
// console.log(a)  // 10
// console.log(typeof a)  // number