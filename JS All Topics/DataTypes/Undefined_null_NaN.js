//1. UNDECLEARED

//a
//console.log(b)     // ReferenceError: a is not defined

//2. UNDEFINED

let kk
console.log(kk)            // undefined
console.log(typeof (kk))    // undefined
// Global object have property undefined and its initial value is undefined
console.log(kk === undefined)

//3. NULL

// kk = null
// console.log(kk)                  // null
// console.log(typeof (kk))         // object
// console.log(undefined == null)    // true       // null and undefined have same value
// console.log(undefined === null)   // false      // null and undefined have different datatype

//4. NaN

// kk = NaN
// console.log(kk)                 //  NaN      // when we assign null value it gives the null return
// console.log(typeof (kk))        //  number
// console.log(Number('krishna'))  //  NaN

// // Example
// let a = 10
// let b ='js'
// console.log(a*b)              // NaN
// console.log(typeof(a*b))     // number
// NaN is a global object property


