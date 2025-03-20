/* 
  What is prototype ?
  What is __proto__ ?  
  What is use of prototype & __proto__?
  What is prototype chain?
  What is relation bt prototype & __proto__?

  prototype chain ends at null
*/
// __proto__ and prototype :
let obj = {
    a: 10
};
// console.log(obj.a)
// console.log(obj.hasOwnProperty(a))
// Frist checking its own properties and methods and then its checking in prototype
// console.log(obj) 
// can see prototype:
// console.log(obj[[Prototype]]) // not able to see
console.log(obj.__proto__) // old way
// console.log(Object.getPrototypeOf(obj)) // new way
console.log(Object.prototype)
console.log("str".__proto__)
console.log(String.prototype)
console.log(true.__proto__)
console.log(Boolean.prototype)
//-----------------------------------------
// Use of __proto__ and prototype :
// class abc {
//     static a = 10
//     constructor() {
//         this.name = "JS"
//     }
// }
// class abc2 {
//     static a2 = 100
//     b = "abc2"
// }
// console.log(abc.prototype, abc2.prototype); // Access, Add, Update direct properties and methods in class 
// // console.log(abc)
// // abc.name2 = "JS2" // cant set properties
// // abc.prototype.name2 = "JS2" // can set properties on class level by using prototype
// // console.log(abc)
// // console.log(abc.prototype, abc2.prototype);

// let objabc2 = new abc2();
// console.log(objabc2);
// console.log(objabc2 instanceof abc2);

// let objabc = new abc();
// console.log(objabc.hasOwnProperty('name'));
// console.log(objabc.hasOwnProperty('name2'));
// console.log('name2' in objabc);
//-----------------------------------------------

// prototype chain :
// Relation bt __proto__  & prototype :
Array.prototype.__proto__ === Object.prototype // true
String.prototype.__proto__ === Object.prototype // true
Boolean.prototype.__proto__ === Object.prototype // true
Function.prototype.__proto__ === Object.prototype // true
// prototype chain ends at null.
Array.prototype.__proto__.__proto__ // null 
Object.prototype.__proto__ // null


let arr = ['1', '2']
arr.__proto__ === Array.prototype // true
console.log(arr.__proto__ === Array.prototype) // true
console.log(arr.__proto__.__proto__ === Array.prototype.__proto__) // true
console.log(arr.__proto__.__proto__ === Object.prototype) // true
console.log(arr.__proto__.__proto__.__proto__) // null

//---------------------------------------------
// Examples:

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

//----------------------------------------
// const Car = function (speed, make) {
//     this.speed = speed;
//     this.make = make;

// }
// Car.prototype.acclerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at the speed ${this.speed}`)
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at the speed ${this.speed}`)
// }

// const bmw = new Car(0, 'BMW')
// bmw.acclerate() // 10
// bmw.brake() // 5

// const audi = new Car(0, 'Audi')
// audi.acclerate() // 10
// audi.brake() // 5


