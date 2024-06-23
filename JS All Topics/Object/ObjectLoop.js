// Array new loop ES-6

// Syntax --->
// for (let variableName of ArrayName){}

// let arr = [1, 2, 3, 4, 5]
// for (let val of arr) {
//           console.log(val); // values
// };
// arrays keys is index no.

//-----------------------------
// Loop on object =>
// Syntax --->
// for (let variableName in ObjectName){}

let student = {
          fname: "kk",
          age: 20,
          adharNo: 123
}
// for (let val in student) {
//           // console.log(val);  // keys of object  ---> fname,age,adharNo
//           // console.log(student[val])  // Retrive object values ---> kk,20,123
//           console.log(val, student[val])
// };
// // We can use only bracket notation in object loop

//-------------------------------------------------------------------------------

// New array loop =>
// Syntax --->
// for (let variableName of ArrayName){}

// // Object.values(student) ---> converting object in array
// console.log(Object.keys(student))  // Return => [ 'fname', 'age', 'adharNo' ]
// console.log(Object.values(student)) // Return Array => [ 'kk', 20, 123 ]
// console.log(Object.entries(student)) // Multidiamensional/Nested Array => [ [ 'fname', 'kk' ], [ 'age', 20 ], [ 'adharNo', 123 ] ]

// for (let value of Object.keys(student)) {
//           console.log(value)  // fname,age,adharNo
// }

// for (let value of Object.values(student)) {
//           console.log(value)  //kk,20,123
// }

// for (let value of Object.entries(student)) {
//           console.log(value)  //[ 'fname', 'kk' ],[ 'age', 20 ],[ 'adharNo', 123 ]
// }

// Destructuring array --->

// [ 'fname', 'kk' ]
let [a, b] = ['fname', 'kk']

// Value -- > Value is array
for (let [a, b] of Object.entries(student)) {
          console.log(a)  // keys
          console.log(b) // values
}

//============================
// Summary -->
// Syntax --->
// for (let variableName of ArrayName){}

// Loop on object
// Syntax --->
// for (let variableName in ObjectName){}

// Object.entries(student)

//---------------------------------
// Logical question on object

let str = "aaabbbcckkkii" //"gsffdsh"
let ObjOutput = {
          a: 3,
          b: 3,
          c: 2,
          k: 3,
          i: 2
}







