// // Real time example for particular class have particular methods
// // In js from  using inbuild class we criate Object
// // e.g.
// var arr = [1,2,3]
// console.log(arr)            // [ 1, 2, 3 ]
// console.log(typeof(arr))     // object
// // or
// var array = Array(1,2,3)
// console.log(array)          // [ 1, 2, 3 ]
// console.log(typeof(array))   // object

// // Here i created array from using inbuild class Array

// // Object have properties and methods  (In Js all things are object)

// // Here array (object) have property 
// // e.g. length
// console.log(array.length)      // 3

// // Here array (object) have methods
// // e.g push,pop      (all array methods)
// array.push(4)
// console.log(array)     // [ 1, 2, 3, 4 ]


// // we  can same go with other datatypes like string


// In js we create Object by following 3 ways

// 1. Using inbuild class we create object
// inbuild class = class defined globaly

let arr = [1, 2, 3]
console.log(typeof (arr))   // object
let str = 'javaScript'
console.log(typeof (str))  // string
//or
let x = String('krishna')
console.log(typeof (x))

// 2. User defined object

let obj = {
    fullName: 'abc',
    method: function () {
        console.log('hi')
    }
}
console.log(obj.method)   // [Function: method]
obj.method()             // hi

// 3. Object made from class 
//  class is user defined datatype

class person {
    fullName = null
    method2 = function(){
        console.log('class')
    }
}
let kk = new person()
console.log(kk)
kk.method2()

