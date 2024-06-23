// // oops 

// 14 days 

//Sat  Sun Monday 


// ES6 rest spread set map , string // 7 pm 


// 9 pm -- oops and advanced 


// //  class   oops 

// // ---- 1 Encapsulation
// // -----2 Abstraction
// // -----3 Polymorphism
// // -----4 Inheritance


// // Function constructor  //  mostly
// // Uses Es6 class // mostly used 
// // Object.create  // very less .... Inheritance 



// // 


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




// // Setter and Getters 


// const account = {

//     fullName: "chinmay",
//     marks:[12, 3, 5, 6, 7, 8, 8],

//     get lastest() {
//         return this.marks[this.marks.length - 1]

//     },
//     set lastest(mov) {
//         this.marks.push(mov)


//     }

// }

// console.log(account.lastest) // Getting the value 
// account.lastest = 90 // Setting the value
// console.log(account.lastest)



// class Person {

//     constructor(firstName, lastName, birthdayYear) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthdayYear = birthdayYear

//     }

//     calcAge() {
//         return this.age = 2021 - this.birthdayYear
//     }


//     get lastest() {
//         console.log('hello')

//     }
//     set lastest(msg) {
//         console.log(msg)


// //     }


// // }

// // const chinmay = new Person("chinmay", "deshpande", 1990)

// // chinmay.lastest
// // chinmay.lastest = "name"
// // chinmay.lastest

// class PersonA {


//     constructor(fullName, birthdayYear) {
//         this.fullName = fullName
//         this.birthdayYear = birthdayYear

//     }

//     calcAge() {

//         console.log(2021 - this.birthdayYear)


//     }

//     set fullName(name) {
//         if (name.includes(' ')) {
//             this._fullName = name
//         }
//         else {

//             alert(`${name} is not the fullName`)
//         }

//     }

//     get fullName(){
//             return this._fullName
//     }


//     static hey(){
//         console.log('Hello ')
//         //console.log(this)
//     }



// }


//PersonA.hey() // Information 

// const chinmay = new PersonA("chinmay",1990)
// chinmay.fullName = "chinmay deshpande"
// console.log(chinmay.fullName)


// Object .create