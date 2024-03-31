// Datatypes in js -->
// 1. Number  // 1, 2, 3.....
// 2. String  // " ", ' ', ` `
// 3. null
// 4. undefined
// 5. Array
// 6. Object 
// 7. Boolean   // true, false

//-------------------------------------------------------
// Object requirement ----------------->

// User define datatype
// CURD
// C --> Create object

// Reuirement ->  Need to store info of student
// e.g Student ---> name, class, age, rollNo

// // Try -- >using string datatype ---->
// // Problem - All in string, Need to store single entity data in different variable
// let StudentName = "Ram"
// let calss = "6th"
// let age = "10"
// let rollNo = "8"

// // Try --> using array datatype ---->
// // // Problem - Data is not self-descriptive
// let studentInfo = ["Ram", "6th", 10, 8]
// //                   0      1     2  3

// We need to use object for store data in descriptive form

// Object  --> Stores information in descriptive way (self-Descriptive)

// CURD
// C - Create Datatype

//We can create object by 3 way =>

// object syntax --->
// let/const/var variableName = { property1/key1 : "key1Value", property2/key2 : "key2Value"}

//----------------------------------------
// 1. Object literal ===>
// Example -->
// let student = {
//           firstName: "Ram",
//           class: "6th",
//           age: 10,
//           rollNo: 8
// }
// console.log(student)

// student.firstName = "Ganesh"
// // if exist already in object then property will be update
// // if property is not exist then it will be insert in object

//-------------------------------------------------------------------
// 2. By creating instance of object   ===>

// class ----> creating object
// in js Object is a class --> Inbuild in javascript

// Example -->
// let newObject = new Object()
// console.log(newObject)            // {}
// console.log(typeof (newObject))   // object


//-----------------------------------------------------
// 3. By using object constructor  ===>

// class student {
//           constructor(fname, className, age, rollNo) {
//                     this.firstName = fname  // property will be insert
//                     this.className = className
//                     this.age = age
//                     this.rollNo = rollNo
//           }
// }
// let studentObject = new student("Ram", "6th", 10, 8)
// console.log(studentObject) // student { firstName: 'Ram', className: '6th', age: 10, rollNo: 8 }   

//---------------------------------------------------
// Avoide bellow in codeing for general purposes
// class
// constructor
// function
// for
// continue
// brake
// name
// if else
// new
//---------------------------------------------
// ------------------------------------------------
// Class ==>

// in js datatypes is object
// Objects ---> Properties & Methods
// Methods ---> Action & Return


// let student = {
//           // Properties
//           firstName: "Ganesh",
//           age: 22,
//           // Method
//           // write : function(){
//           //           console.log("He can write")
//           // }  // ---> Function expression
//           // ES-6
//           write() {
//                     console.log("He can write")
//           }
// }
// console.log(student.firstName)  // Ganesh
// student.write()   // He can write
// // Action - print msg
// // Return - undefined
// console.log(student.write())  // undefined
// // console.log(student.firstName)
// -------------------------------------------------

// let st1 = {
//           fname: "sagar"
// }
// let st2 = {
//           fname: "Ganesh"
// }


// -------------------------------------------

// // What is class?
// calss ---> Skeleton, Blueprint, mold

// class student {
//           // Properties
//           firstName = "Ram"
//           age = 20
//           // Methods
// }

// // Creating object from class
// // Syntax ===>

// // Second way of object creating ---->
// // let/const/var ObjectName = new className()
// let MinStud = new student()
// console.log(MinStud)

// let MinStud2 = new student()
// console.log(MinStud2)

//-----------------------------------------
// constructor in class ---->
// class student {
//           constructor(fname, age) {
//                     this.firstName = fname
//                     this.age = age
//           }
// }

// let stud1 = new student("Ram", 20)
// console.log(stud1)
// let stud2 = new student("Sagar", 23)
// console.log(stud2)

//---------------------------------------------
// Inbuild class in js for string & Array --->
// For String ==>
// let a = new String("Ram")
// console.log(a)           // [String: 'Ram']
// console.log(typeof (a))  // object
// let b = new String("kk")
// console.log(b)           // [String: 'kk']

//-----------------------------
// For Array ----> 
// let arr = new Array(4)
// console.log(arr)       // [ <4 empty items> ]
// console.log(arr.length) // 4

//================================
// Datatype---> CURD (properties & methods[Action & Return]), loop

//-------------------------------------
// R - Retrive object properties
// Two ways ==>
// 1. Dot Notation 
// 2. Bracket Notation


// let student = {
//           // Properties
//           firstName: "Ganesh",
//           age: 22,
//           // Method
//           // write : function(){
//           //           console.log("He can write")
//           // }  // ---> Function expression
//           // ES-6
//           write() {
//                     console.log("He can write")
//           }
// }

// // Two ways ==>
// // 1. Dot Notation 
// // Syntax --> ObjectName.PropertiesName/methodName()

// console.log(student.firstName)  // "Ganesh"
// console.log(student.write())  // "He can write" , undefined

// // 2. Bracket Notation
// // Syntax --> ObjectName["PropertiesName"]
// console.log(student["firstName"])  // "Ganesh"

//What is difference b/t Dot notation & Brackect notation (Why we have two types ?)

///=======================================

// U - Updating object(Insert/Update property)

// We have 3 way to insert properties in object ==>
// Def adding property - when going to add new property in object
// Def updating property - prev existing properties value can be update

//------------------------------------
// 1. Ouside the class -->

// let newObj = new Object()
// console.log(newObj)

// newObj.fname = "sagar"   // adding property
// console.log(newObj)
// newObj.fname = "Ganesh"
// console.log(newObj)     // updating property

// // Retrive property
// ObjectName.PropertyName  // Return property value
// ObjectName.PropertyName = value

// // Comparing with variable decleration
// let a = 10  // Assign value
// a = 20 // Updating value 

//-----------------------------------------
// 2. Using function ==>

// class student {
//           firstName = null
//           age = null
//           setFname(fname) {
//                     this.firstName = fname  // updating value
//           }
//           setAge(age) {
//                     this.age = age  // updating value
//           }
// }
// let Ram = new student()
// console.log(Ram)
// Ram.setFname("Nilesh")
// console.log(Ram)        // student { firstName: 'Nilesh', age: null }
// Ram.setAge(25)
// console.log(Ram)    // student { firstName: 'Nilesh', age: 25 }

//---------------------------------------------------------------------------
// 3. Using constructor ==>
// class student {
//           constructor(fname, age) {
//                     this.firstName = fname // updating property
//                     this.age = age
//           }
// }

// let Ram = new student("Ram", 10)
// console.log(Ram)     // student { firstName: 'Ram', age: 10 }
// Ram.MobNo = "123"
// console.log(Ram)   // student { firstName: 'Ram', age: 10, MobNo: '123' } // adding property

//----------------------------------------------
// D - Deleting property
// syntax => delete(keyword) Object.proprtyName
// delete Ram.MobNo
// console.log(Ram)  // student { firstName: 'Ram', age: 10 }

//------------------------------------------
// Inbuild methods of object --->
// Syntax ==> Object.methodName(ObjName)

// 1. keys()
// 2. values()
// 3. entries()
// 4. hasOwnProperty(Arug)

// Example -->
let student = {
          // Properties -->
          firstName: "Ganesh",
          age: 22,
          // Method -->
          write() {
                    console.log("He can write");
          }
};

//------------------------------------------
// 1. keys(Arug)
// Arug ==> local object / object
// Action - Extracting object keys only
// Return - Array

console.log(Object.keys(student))  // [ 'firstName', 'age', 'write' ]

//----------------------------------------------
// 2. values(Arug)
// Arug ==> local object / object
// Action - Extracting object values only
// Return - Array

console.log(Object.values(student))  // [ 'Ganesh', 22, [Function: write] ]

//-------------------------------------
// 3. entries(Arug)
// Arug ==> local object / object
// Action - Extracting object propertes
// Return - Nested Array

console.log(Object.entries(student))   // [[ 'firstName', 'Ganesh' ],[ 'age', 22 ],[ 'write', [Function: write] ]]

//------------------------------------------------
// 4. hasOwnProperty(Arug)
// Arug ==> Object key (String)
// Action - Checking key is present in object
// Return - true/false (Boolean)

console.log(student.hasOwnProperty('firstName')) // true
console.log(student.hasOwnProperty('MobNO')) //false
// Not check values (values considering as key)
console.log(student.hasOwnProperty('Ganesh')) // false

