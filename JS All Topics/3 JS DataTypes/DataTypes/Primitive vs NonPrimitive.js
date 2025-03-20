// ========================= Primitive vs NonPrimitive =============

let str = 'Hello World';
str[0] = 'h';
str[1] = 'f'; // primitive
console.log(str);

let arr = [10, 20, 30, 40, 50]
arr[0] = 12;
arr[1] = 22;
console.log(arr)


// // Primitives are compared by value, non-primitives are compared by address
// let a = 10;
// let b = 10;
// console.log(a == b); // value comparision

// let str1 = 'sachin'
// let str2 = 'sachin'
// console.log(str1 == str2); // value comparision

// let arr1 = [10, 20, 30]
// let arr2 = [10, 20, 30]
// console.log(arr1 == arr2); // address comparision

// let obj1 = {}
// let obj2 = {}
// console.log(obj1 == obj2)


//===================== NonPrimitive ============================
let obj = { 'a': 10, b: 20 };
console.log(obj, typeof obj);

let arr = [10, 20, 30]
console.log(arr, typeof arr);

// How Can we differentiate array & object
console.log(obj instanceof Array); // false
console.log(arr instanceof Array); // true

console.log(Array.isArray(obj)); // false
console.log(Array.isArray(arr)); // true


// instanceof : The instanceof operator determines whether an object is an instance of another object.
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

// Syntax : object instanceof constructor
// object: The object to test.
// constructor: Constructor to test against.




