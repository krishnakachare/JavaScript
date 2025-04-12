/* 
JSON (JavaScript Object Notation) is a lightweight data interchange format.

# JSON methods:
  1. JSON.stringify()
  2. JSON.parse()
*/


/* 
 1. JSON.stringify()
     Action : converts javascript object into string (JSON)
     Return : string
*/
let obj = { name: "John", age: 30, skills: ["Play"] };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: {"name":"John","age":30,"skills":["Play"]}
console.log(typeof (jsonString)); // string
// console.log(obj)

/*
  2. JSON.parse()
     Action : converts JSON string into javascript object
     Return : JavaScript object
*/
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Output: { name: 'John', age: 30, skills: ["Play"]}
console.log(typeof (parsedObj)); // object

// After the getting javascript object we can handel it in javascript