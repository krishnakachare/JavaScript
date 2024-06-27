// Function constructor  //  mostly
// Uses Es6 class // mostly used 
// Object.create  // very less .... Inheritance 

const Person = function(firstName, lastName, birthdayYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthdayYear = birthdayYear
    //attached to every object 
    // this.calcAge = function(){
    //     return this.age = 2021 - birthdayYear
    // }
}
Person.prototype.calcAge = function() {
    return this.age = 2021 - this.birthdayYear

}
Person.prototype.language = "Marathi";
const chinmay = new Person("chinmay", "deshpande", 1990)
const aakash = new Person("aakash", "jhadhav", 1990)

console.log(chinmay.hasOwnProperty('language'))
console.log(chinmay.hasOwnProperty('firstName'))

console.log(chinmay)
console.log(aakash)
console.log(chinmay.language)
console.log(aakash.language)

// // console.log(chinmay)

// // console.log(chinmay.calcAge())
// // console.log(aakash.calcAge())
// // console.log(Person.prototype === chinmay._proto_)
// // console.log(chinmay instanceof Person)
// // console.log(chinmay instanceof Person)
// //console.log(chinmay._proto.proto_.prototype)  // object undefined



// // we can override the function in parent prototype
// // protype object 
// // function object  -- object

// // New {}
// // function is called , this = {}
// // {} linked to protype  
// // function automatically returns {}



// class Person {
//     constructor(firstName, lastName, birthdayYear) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthdayYear = birthdayYear
//     }
//     calcAge() {
//         return this.age = 2021 - this.birthdayYear
//     }
// }

// const chinmay = new Person("chinmay", "deshpande", 1990)
// console.log(chinmay.hasOwnProperty('firstName'))
// console.log(chinmay)

// console.log(Person.prototype === chinmay._proto_)
// console.log(chinmay instanceof Person)



