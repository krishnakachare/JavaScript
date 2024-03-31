





// // oops 

// // class --- separation scope 

// // class ---> Encapsulation , Inhertitance , Abstraction , Polymorphism 

// // -----> Encapsulation --- js

// // Inheritance -----

// // Object ---- 

// //----------------------------------->
// //function constructor 

// // ES6 class

// // Object Create 

// //------------------------------

// // function Person(namee,rollNo,age){
// //     this.name = namee 
// //     this.rollNo = rollNo,
// //     this.age = age

// // }

// // let amol =new Person("chinmay",23,12)
// // console.log(amol)

// //---------------------------------->



// // function Person(namee,rollNo,age){
// //     this.name = namee 
// //     this.rollNo = rollNo,
// //     this.age = age
// //     this.calAge =function(){
// //         console.log(`2021-${this.age}`)
// //     } 
    
// // }

// // let amol =new Person("amol",23,12)
// // let chinmay  =new Person("chinmay",23,12)
// // console.log(amol,chinmay)


// //  {} 
// // function constructor 
// // {} ---->  _proto_ (linked)
// // Person.prototype == amol._proto_


// function Person(namee,rollNo,age){
//     this.name = namee 
//     this.rollNo = rollNo,
//     this.age = age
 
// }

// Person.prototype.calAge = function(){
//     console.log(2021 -this.age)
// }

// // new {}, function() , {}---> _proto_

// let amol =new Person("amol",23,1989)
// let chinmay  = new Person("chinmay",23,1990)
// console.log(amol)

// amol.calAge()
// chinmay.calAge()
// // Every object ---- has _proto_
// console.log(Person.prototype === amol._proto_)

// // Array 

// let names = ["chinmay","poorva","ram","shivani"]
// //let names = new Array("chinmay","poorva","ram")
// console.log(Array.prototype === names._proto_)

// // // 23 ....
// // let ages = [11,22,22,33,55,66,77,88]
// // console.log(new Set(ages))
// // let a = [...new Set(ages)]
// // console.log(a)

// // Array.prototype.unique = function(arr){
// //     return [...new Set(arr)]
// // }
// // let agesss= [11,22,22,44,55,33,44,] //_proto_
// // console.log(agesss.unique(agesss))



// let Vehicle = function(no,reg,color){
//     this.no = no
//     this.reg = reg
//     this.color = color
// }

// // console.log(audi instanceof Vehicle)
// // console.log(audi.hasOwnProperty('no'))


// Vehicle.prototype.country = "India"
// let audi = new Vehicle(12,233,'blue')
// console.log(audi.country)
// console.log(audi.hasOwnProperty('country'))
// console.log(Vehicle.prototype.hasOwnProperty('country'))

// //audi.prototype = "hello"
// console.log(audi._proto_.hasOwnProperty('country'))

//console.log(Vehicle._proto_)
//-----------------------------
// let vehicle = {
//     protype:{
//         country:"India"
//     }
// }
// Proto type

// let human = {
//     fullName:"chinmay",
//     age:23
// }
// console.log(human.hasOwnProperty('fullName'))

//----------------------------------->

// ES6

class Person {

    constructor(name,age,lanaguage){

        this.name = name
        this.lanaguage = lanaguage
        this.age = age
    }

    display(){
        console.log(2021 -this.age)
    }


}

let amol = new Person("chinmay",12,"hindi")
console.log(amol)
console.log(amol._proto_ === Person.prototype)
console.log(amol instanceof Person)
console.log(amol.hasOwnProperty('age'))