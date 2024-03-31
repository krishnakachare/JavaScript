// -----    oops   ------ Dom 

// class , object , encapsulation , inheritace , private variable 


// protype

// creating object using function constructor

// Prototype inheritance



//Function constructor

// function Person(age, name) {
//     this.name = name;
//     this.age = age;
//     this.displayName = function() {

//         console.log(this.age)

//     }

// }

// // protype inheritance




// Person.prototype.displayName = function() {

//     console.log(this.age)

// }

// var x = new Person(2, 's')
// var y = new Person(3, 'n')
// var w = new Person(4, 'm')
// var e = new Person(5, 't')
// var r = new Person(4, 'n')

// console.log(x)
// console.log(y)

// var b = [1, 2, 3, 4, 5, 6]
// var n = "chinmay"
// console.log(b.pop())



// ES6 classes


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age

    }
    displayName() {
        console.log(this.age)
    }
}

var a = new Person('chinmay', 23)
a.displayName()
Person.prototype.x = 14
console.log(a)



// //closure

// //arrow functions 

// // lexical scope 

// // protype , prototype inheritance

// // this keyword , arrow function and function

// // object creation using --- function constructor , class 

// // object -- looping though 

// //array 

// // array --- forEach , reduce , filter , map with example






// // var age = "sham"
// // var roll = 29