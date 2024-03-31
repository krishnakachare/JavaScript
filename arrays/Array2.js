

//function declaration
// function add(x,y){
//     return x + y
// }

// let h = add(12,13)
// console.log(h)

// function expression 

// let add = function(x,y){
//     return x + y
// }

// let h = add(12,13)
// console.log(h)

// Arrow function
// let add = (x,y)=>{
//     return x + y
// }

// let h = add(12,13)
// console.log(h)


let add = (x,y)=>x + y
let h = add(12,13)
console.log(h)


// Array String.....
// 8 pm attend
 
//                 0         1       2
let students = ["chinmay","poorva","ram"]

// Index starts from zero
// Length of Array

console.log(students[0])
console.log(students.length)



// Every object have properties and methods
// Object -- person 

// human --- weight ,height, color ,name , age
// human --  walk(),talk(),running()

// Vehicle 

// properties -- name ,color , regNo,type
// methods -- start stop


// Top overeverthing everything in javascript is object 

students = ["chinmay","poorva","ram"]

console.log(students.length)


students.push('abhisha')
console.log(students)

// 23 methods

// Method 

// Action ---
// Return 

// push 
//Action --- add element at the last 
// Returns the new length of array 


students = ["chinmay","poorva","ram"]
let g = students.push("abhisha")

console.log(students) // 
console.log(g) //


// pop 
// Action -- removes the element from the last
// Return -- returns the removed element 
let  i = students.pop()
console.log(i)
console.log(students)

// shift 

// Action - removes the element from the first 
// Return the removed element

let ya = students.shift()
console.log(ya)
console.log(students)

// unshift 

// Action - add the element at the beginning 
// Return the new lenght of the array 

let qq = students.unshift("hemant")
console.log(qq)
console.log(students)

// pop push shift unshift

    
let fruits = ["apple","banana","mango"]

// Action -- revers the element inside the array
// return - returns the revered array

let ff = fruits.reverse()
console.log(ff)
console.log(fruits)

// Action - finds the index of the element
// Return the number which is nothing but index


let vb = fruits.indexOf("apple")
console.log(vb)

// includes 
// Action -- search for element in array , if found 
// return boolean (either true or false)
let hh = fruits.includes("chiku")
console.log(hh)























