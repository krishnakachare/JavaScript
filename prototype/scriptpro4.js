// // javscript 

// // function constructor


// // const Person = function (firstName, LastName, Year) {

// //     this.firstName = firstName,
// //     this.LastName = LastName
// //     this.Year = Year


// //     // this.addCal = function () {
// //     //     return 2021 - this.Year
// //     // }



// //}

// // _proto_ === Person.prototype

// // Person.prototype.addCal = function(){
// //     return 2021 - this.Year
// // }

// // Person.prototype.colorr = "green"

// // const amol = new Person("chinmay", "deshpande", 1990)
// // console.log(amol._proto_ === Person.prototype)
// // console.log(amol)


// // console.log(amol.hasOwnProperty('colorr'))
// // console.log(amol.hasOwnProperty('firstName'))
// // console.log(amol._proto_)



// // class Person{


// //     constructor(firstName, LastName, Year){

// //         this.firstName = firstName,
// //         this.LastName = LastName
// //         this.Year = Year

// //     }


// //     addCal(){

// //         return 2021 - this.Year


// //     }



// // }



// // const amol = new Person("chinmay", "deshpande", 1990)
// // console.log(amol._proto_ === Person.prototype)
// // console.log(amol)


// // console.log(amol.hasOwnProperty('colorr'))
// // console.log(amol.hasOwnProperty('firstName'))
// // console.log(amol._proto_)



const PersonProto = {
    addCal() {
        return 2021 - this.Year
    },
    age: 12,

    init(firstName, lastName, language) {

        this.firstName = firstName
        this.lastName = lastName
        this.language = language

    }

}


const amol = Object.create(PersonProto)
    // amol.firstName = "amol"
    // amol.lastName = "rao"
    // amol.language = "Marathi"

amol.init("Amol", "Rao", "Marathi")


console.log(amol)
console.log(PersonProto === amol._proto.proto_)
console.log(amol._proto.proto_)
console.log(amol._proto.proto.proto_)


// // Car 
// //  speed , make
// //break 10 -
// // accelerate 10 +

// class Car {

//     constructor(speed, make) {
//         this.speed = speed,
//             this.make = make
//     }

//     brake() {

//         return this.speed - 10

//     }

//     accelerate() {

//         return this.speed + 10

//     }

//     set SpeedUS(speed) {

//         this.speed = speed * 0.625
//     }


// }


// var BMW = new Car(100, "BMW")
// console.log(BMW.accelerate())
// console.log(BMW.brake())
// BMW.SpeedUS = BMW.speed
// console.log(BMW.speed)


// // Class
// // Object 
// // class  - concept 
// //E A I P






// // let amol = {

// //         firstName:"chinmay",



// // }


// //{}
// // this {}
// // prototype




// // person --- object ---- OBJECT --- hasOwnperty()

// // amol --- protype person .prototyoe



// // amol 

// // person 

// // object  --- 



// // Inheritance with ES6



// class Student {


//     constructor(fullName, id, roll) {

//         this.fullName = fullName
//         this.id = id
//         this.roll = roll

//     }

//     display() {

//         console.log(this.fullName, this.id, this.roll)

//     }


// }


// class Teacher extends Student {
//     constructor(fullName, id, roll, sal) {
//         super(fullName, id, roll)
//         this.sal = sal
//     }
//     displaySalary() {
//         console.log(this.sal)
//     }

// }

// let a = new Teacher("c", 1, 23, 100)
// a.display()
// a.displaySalary()

// console.log(a)