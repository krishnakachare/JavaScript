// Datatypes in js

// 1. Number
// 2. String
// 3. null
// 4. undefined
// 5. Array
// 6. Object
// 7. Boolean



//1. String
// To datatypes we have properties & Methods

// Properties of string - length

// Methods of string - toUpperCase(), toLowerCase()

// E.g   Human 
// Properties = color, Height, weight 

// Methods of Human = walk, talk  (action, return)



// Properties of string - length
let firstName = "Rushi"

// console.log("Rushi".length)    // 5

// console.log("Poonam".length)    // 6

// console.log(firstName.length)    // 5


// Methods of string - toUpperCase(), toLowerCase()

// Action of method
// Return type of method

// 1. touppercase() 

//console.log(firstName.toUpperCase())   // RUSHI

// Action = all characters in string make in uppercase
// Return = New upper case string

// 2. toLowerCase() 

//console.log(firstName.toLowerCase())   // rushi

// Action = all characters in string make in lowercase
// Return = New lower case string

// 3. indexOf()

// Action = Finds the index number
// Return = index number (number)

// "R  u  s  h  i"
//  0  1  2  3  4     // index no.

// last index is less than its length

// Sub-String :-

// "Rushi"  // full String
// "Ru" , "R" // Sub-String

// console.log(firstName.indexOf("i"))   // 4
// console.log(firstName.indexOf("u"))   // 1    // If character are present in string then return its index number
// console.log(firstName.indexOf("z"))   // -1   // If character are not present in string then return -1

// console.log(firstName.indexOf("r"))   // -1
// JavaScript is case sensetive lang.

// console.log(firstName.indexOf("us")) // 1
// console.log(firstName.indexOf("Ru")) // 0

//console.log("aai".indexOf("a"))  // 0


// Operations performed on object-

// CURD operations
// C - Create
// U - Update
// R - Retrive (get)  // Dot notation & Bracket notation
// D - Delete

// console.log(firstName)  // Rushi
// console.log(firstName[1])   // u
console.log(firstName[-1])  // i


// 4. includes()

// Action = char or substring finding/checking inside the string
// Return = true/false (Boolean)

// Rushi
// console.log(firstName.includes("Ru"))  // true
// console.log(firstName.includes("u"))   // true
// console.log(firstName.includes("z"))  // false

// console.log(firstName.includes(2))  // false
// console.log(firstName.includes("2"))  // false
// console.log(30.includes(2)) // Error

// 5. trim()

// Action = Remove space from starting & ending
// Return = New string (free from empty spaces)

// let example = "   Rushi  "   // "Rushi"
// console.log(example.trim())   // "Rushi"
// console.log(example.length)   // 7
// console.log(example.trim().length) // 5

// 6. trimStart()

// Action = Remove space from starting 
// Return = New string 

// let example = " Rushi "   // "Rushi"
// console.log(example.trimStart())   // "Rushi "
// console.log(example.length)   // 7
// console.log(example.trimStart().length) // 6

// 7. trimEnd()

// Action = Remove space from Ending 
// Return = New string 

// let example = "  Rushi "   // "Rushi"
// console.log(example.trimEnd())   // "  Rushi"
// console.log(example.length)   // 8
// console.log(example.trimEnd().length) // 7

// 8. startWith()

// Action = Checking start with given Chara/Substring
// Return = True/False (Boolean)

//"Rushi"
// console.log(firstName.startsWith("R"))  // true
// console.log(firstName.startsWith("u"))  // false
// console.log(firstName.startsWith("Ru"))  // true

// 8. endWith()

// Action = Checking End with given Chara/Substring
// Return = True/False (Boolean)

//"Rushi"
// console.log(firstName.endsWith("i"))  // true
// console.log(firstName.endsWith("u"))  // false
// console.log(firstName.endsWith("hi"))  // true


// 9. slice(startPoint, EndPoint)  // index no.

// "R  u  s  h  i"
//  0  1  2  3  4     // index no.


// Action = Cut the string by requirement
// Return = Sliced sub-string

// "Rushi"
// console.log(firstName.slice(0, 3))     // "Rush" // "Rus"  // Not considering Endpoint
// console.log(firstName.slice(3, 0))        // "" // We need to maintain forword flow to slice our string ( Start point is smaller than the end point)
// console.log(firstName.slice(0, 2))     // "Ru"
// console.log(firstName.slice(0))          // "Rushi"  // When we not pass endpoint then he will consider by default endpoint at the last
// console.log(firstName.slice(3))        // "hi"


// "R  u  s  h  i"
//  0  1  2  3  4     // +Ve index no. (forword)      // +ve starting with zero(0)
// -5 -4 -3 -2 -1     // -Ve index no. (Backword)     // -ve starting with -1


// console.log(firstName.slice(-1, -4))     // "" // ( Start point is smaller than the end point)
// console.log(firstName.slice(-4, -1))  // "ush"
// console.log(firstName.slice(-5, -2))     // "Rus"
// console.log(firstName.slice(-3))          // "shi"


// console.log(firstName)  // Rushi
// console.log(firstName[-2])   // h   // undefined   // we can use only +ve index for data retrive
// console.log(firstName[-4])  // u    // undefined    // we can use only +ve index for data retrive
