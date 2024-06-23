// // In javascript all things are OBJECT 
// // OBJECT = object have properties and methods



// // MADE ARRAY (object) BY TWO DIFFERENT WAY  (AND we can apply all arrays properties and methods)

// // 1.
// //let names = ['vishwajit','avi','swapnil','krishna']

// // 2.
 let names = new Array(4)      // 4 is array length        (made object by using inbuild Array class)
// names[0] = 'vishwajit'
// names[1] = 'avi'
// names[2] = 'swapnil'
// names[3] = 'krishna'
//console.log(names)         // [ 'vishwajit', 'avi', 'swapnil', 'krishna' ]

for(let i = 0; i < names.length; i++){

    //console.log(names[i])
    let object = names[i]

    for (let key in object){
    //console.log(key)
    console.log(key,object[key])

    }
}


// NOTE == Array and string also a object and here keys are index values and values are elements





// MADE STRING (object) BY TWO DIFFERENT WAYT   (AND we can apply all string properties and methods)

// let MyName = 'shrikrishna'

// let MyName =  new String('shrikrishna kachare')   // [String: 'shrikrishna kachare']    //  ( made object by using inbuild class with constructor )

// console.log(MyName.toLocaleUpperCase())     // SHRIKRISHNA KACHARE





// // WE CAN MADE OBJECT BY TWO WAY---------->

//  1)  globaly defined object(inbuild defined objects)
//  2)  user defined object
//  3)  object made from class and class is user defined
//  4)  object made from class and class is INBUILT  like  inbuild class




// let firstName = 'krishna'                           //  1)  globaly defined object(inbuild defined objects)

// let swapnil = {                                     //   2)  user defined object
//         age : 24,
//         firstName : 'swapnil',
//         // displayName(){
//         //     console.log(`My name is ${this.firstName} .`)
//         // },                                                                       // we can wrigt function like this
//         displayName : function(){
//             console.log(`My name is ${firstName} .`)         // My name is krishna.
//             console.log(`My name is ${this.firstName} .`)    // My name is swapnil.
//         }
// }
// let avi ={
//     age : 26,
//     firstName : 'Aviraj',
//     displayName : function(){
//         console.log(`My name is ${firstName} .`)        // My name is krishna.
//         console.log(`My name is ${this.firstName} .`)   // My name is avi.
//     }
// }
// console.log(firstName)          // krishna              //  called globaly defined object property
// console.log(swapnil.firstName)  // swapnil 
// swapnil.displayName()
// avi.displayName()




// object made by using class and class in user defined


// class person {

//     constructor (firstName,age){
//         this.firstName = firstName
//         this.age = age
//     }
//     display(){
//         console.log(`My name is ${this.firstName} .`)
//     }
// }

// let krishna = new person('krishna',25)
// let ravi = new person ('Ravi',30)

// console.log(krishna)      // person { firstName: 'krishna', age: 25 }
// console.log(ravi)         // person { firstName: 'Ravi', age: 30 }

























































// let firstName = "ninad"
// let amol = {
//     age:34,
//     firstName:"amolrao",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }

// let chinmay = {
//     age:37,
//     firstName:"chinmay",
//     displayName:function(){
//         console.log(`My name is ${this.firstName}`)
//     }
//}

// console.log(amol.age)
// console.log(amol.firstName)
// amol.displayName()

// let lastName = new String("Chinmay")
// let deshpande = "deshpande"
// console.log(lastName.toUpperCase())
// console.log(lastName.length)

// let names = ["chinmay","poorva","abhisha","ram"]
// let lastName = new Array(5)
// lastName[0] = "deshpande"
// lastName[1] = "vyas"
// lastName[2] = "burande"
// lastName[3] = "dani"
// lastName[4] = "hh"
// console.log(lastName)

// String  Array  Regex

// Person
// class Person{
//     constructor(age, firstName){
//         this.firstName = firstName
//         this.age = age
//     }
//     display(){
//         console.log(`My name is ${this.firstName}`)
//     }
// }
// let amol = new Person(23,"amol")
// let chinmay = new Person(24,"chinmay")
//--------------------------------------
// console.log(amol)
// console.log(chinmay)
//-------------------------->
// let students = new Array(2) //[amol,chinmay]
// students[0] = amol
// students[1] = chinmay

// for(let i = 0 ; i < students.length ; i++ ){
//     let obj = students[i]
//     for(let key in obj){
//         console.log(key , obj[key])
//     }
// }
// let regex1 = new RegExp("hello");
// let regex2 = /worlds/;

// let regex2 = /python/i;
// let rr  = "Hi i am to PYTHON and learning python"
// let h = rr.search(regex2)
// console.log(h)

// let regex3 = /python/gi;
// let rra  = "Hi i am to PYTHON and learning python"
// let gg = rra.match(regex3)
// console.log(gg)

// let dd = rra.replace(regex3,"js")
// console.log(dd)

