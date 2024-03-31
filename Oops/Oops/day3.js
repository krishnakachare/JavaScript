// Object literal
// function constructor
// es6 class
// Object.create()


// // program 1 

// function Person(fn,ln){
//     this.firstName = fn
//     this.lastName = ln
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol = new Person("amol","rao")
// let chinmay = new Person("chinmay","deshpande")

// // console.log(amol)
// // console.log(chinmay)
// // Everyobject has one __proto__ === Parent.prototype

// console.log(amol.__proto__ === Person.prototype)
// console.log(amol instanceof Person)
// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }

// Person.prototype.country ="India"

// amol.display()
// chinmay.display()

// console.log(amol)
// console.log(chinmay)

// console.log(amol.country)
// console.log(chinmay.country)


// Program 2

class PersonB {
    constructor(fn,ln){
        this.firstName = fn,
        this.lastName  = ln
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol2 = new PersonB("amol","rao")
let chinmay2 = new PersonB("chinmay","deshpande")

console.log(amol2)
console.log(chinmay2)

amol2.display()
chinmay2.display()

// program 3
//Object.create


let amol3  = Object.create({})
console.log(amol3)


// amol3.firstName = "amol"
// amol3.lastName = "rao"
// amol3.display = function(){
//     console.log(this.firstName + this.lastName)
// }
// amol3.display()


let obj = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let amol4 = Object.create(obj)
console.log(amol4)
amol4.init("amol4","rao4")
amol4.display()
console.log(amol4)


// Proptype inheritance -
// function constructor
// Es6 class 
// Object.create method


// Oops ---- Es6
// Repeat 7 pm


