const Person = function(firstName, birthdayYear) {

    this.firstName = firstName
    this.birthdayYear = birthdayYear
        // this.calAge = function(){
        //     console.log(2021-this.birthdayYear)
        // }

}

// const abhishek = new Person('abhishek',1991)
// const abhishek1 = new Person('abhishek2',19911)
// console.log(abhishek)
// console.log(abhishek1)


Person.prototype.calAge = function() {
    console.log(2021 - this.birthdayYear)

}

const abhishek = new Person('abhishek', 1991)
const abhishek1 = new Person('abhishek2', 19911)
console.log(abhishek)
console.log(abhishek1)
abhishek.calAge()


Person.hello = function() {
    console.log('Hello hi')
}

Person.hello()


// **** rough 


// const abhishek3 = new Person('abhishek3',1991)
// abhishek3.hello()


//console.log(typeof Person)
// Static method

// Person.year = function(){
//     console.log('hello hi')
//     console.log("hello ")
// }


// Person.year()  // calling the method on function constructor
// // Person.roll = '12'


// Person.prototype.year = function(){
//     console.log('hello hi')
//     console.log("hello ")
// }


// Person.prototype.cal = function(){
//     console.log(2021 - this.birthdayYear )
// }


// const jonas = new Person('jonas',1991)
// console.log(jonas)
// jonas.year()

// const amit = new Person('amit',1991)
// // const abhishek = new Person('abhishek',1991)
// // console.log(typeof jonas)
// // console.log(jonas)
// // console.log(jonas instanceof Person) // Boolean
// console.log(amit)
// console.log(jonas)

// console.log(Person)

// rough ************


// ---

//prototype

// console.log(Person.prototype)

// Person.prototype.hello = function(){
//     console.log(hello)
// }

// console.log(abhishek._proto_=== Person.prototype)




console.log(abhishek) // object of same fucntion constructor
console.log(Person) // function constructor

console.log(abhishek._proto_ === Person.prototype)

abhishek.hello = function() {
    console.log('Hellooooooooooooo')
}
console.log(abhishek)

// Updating the property 

// abhishek._proto_ = function(){
//     console.log('hello')
// }

abhishek._proto_.namey = function() {
    console.log('hello')
}

console.log(abhishek._proto_ === Person.prototype)
console.log(abhishek)
console.log(abhishek1)