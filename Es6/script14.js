// // // oops 

// // 14 days 

// //Sat  Sun Monday 


// // ES6 rest spread set map , string // 7 pm 


// // 9 pm -- oops and advanced 


// // //  class   oops 

// // // ---- 1 Encapsulation
// // // -----2 Abstraction
// // // -----3 Polymorphism
// // // -----4 Inheritance


// // // Function constructor  //  mostly
// // // Uses Es6 class // mostly used 
// // // Object.create  // very less .... Inheritance 



// // // 


// // // // const Person = function (firstName, lastName, birthdayYear) {
// // // //     this.firstName = firstName
// // // //     this.lastName = lastName
// // // //     this.birthdayYear = birthdayYear

// // // //     //attached to every object 
// // // //     // this.calcAge = function(){
// // // //     //     return this.age = 2021 - birthdayYear

// // // //     // }

// // // // }
// // // // Person.prototype.calcAge = function () {
// // // //     return this.age = 2021 - this.birthdayYear

// // // // }
// // // // Person.prototype.language = "Marathi";
// // // // const chinmay = new Person("chinmay", "deshpande", 1990)
// // // // const aakash = new Person("aakash", "jhadhav", 1990)



// // // // console.log(chinmay.hasOwnProperty('language'))
// // // // console.log(chinmay.hasOwnProperty('firstName'))


// // // // // console.log(chinmay)
// // // // // console.log(aakash)
// // // // // console.log(chinmay.language)
// // // // // console.log(aakash.language)

// // // // console.log(chinmay)

// // // // console.log(chinmay.calcAge())
// // // // console.log(aakash.calcAge())
// // // // console.log(Person.prototype === chinmay.__proto__)
// // // // console.log(chinmay instanceof Person)
// // // // console.log(chinmay instanceof Person)
// // // //console.log(chinmay.__proto__.__proto__.prototype)  // object undefined



// // // // we can override the function in parent prototype
// // // // protype object 
// // // // function object  -- object

// // // // New {}
// // // // function is called , this = {}
// // // // {} linked to protype  
// // // // function automatically returns {}



// // // class Person {

// // //     constructor(firstName, lastName, birthdayYear) {
// // //         this.firstName = firstName
// // //         this.lastName = lastName
// // //         this.birthdayYear = birthdayYear

// // //     }


// // //     calcAge() {
// // //         return this.age = 2021 - this.birthdayYear
// // //     }


// // // }


// // // const chinmay = new Person("chinmay", "deshpande", 1990)
// // // console.log(chinmay.hasOwnProperty('firstName'))
// // // console.log(chinmay)

// // // console.log(Person.prototype === chinmay.__proto__)
// // // console.log(chinmay instanceof Person)



// // // // Setter and Getters 


// // // const account = {

// // //     fullName: "chinmay",
// // //     marks:[12, 3, 5, 6, 7, 8, 8],

// // //     get lastest() {
// // //         return this.marks[this.marks.length - 1]

// // //     },
// // //     set lastest(mov) {
// // //         this.marks.push(mov)


// // //     }

// // // }

// // // console.log(account.lastest) // Getting the value 
// // // account.lastest = 90 // Setting the value
// // // console.log(account.lastest)



// // // class Person {

// // //     constructor(firstName, lastName, birthdayYear) {
// // //         this.firstName = firstName
// // //         this.lastName = lastName
// // //         this.birthdayYear = birthdayYear

// // //     }

// // //     calcAge() {
// // //         return this.age = 2021 - this.birthdayYear
// // //     }


// // //     get lastest() {
// // //         console.log('hello')

// // //     }
// // //     set lastest(msg) {
// // //         console.log(msg)


// // // //     }


// // // // }

// // // // const chinmay = new Person("chinmay", "deshpande", 1990)

// // // // chinmay.lastest
// // // // chinmay.lastest = "name"
// // // // chinmay.lastest

// // // class PersonA {


// // //     constructor(fullName, birthdayYear) {
// // //         this.fullName = fullName
// // //         this.birthdayYear = birthdayYear

// // //     }

// // //     calcAge() {

// // //         console.log(2021 - this.birthdayYear)


// // //     }

// // //     set fullName(name) {
// // //         if (name.includes(' ')) {
// // //             this._fullName = name
// // //         }
// // //         else {

// // //             alert(`${name} is not the fullName`)
// // //         }

// // //     }

// // //     get fullName(){
// // //             return this._fullName
// // //     }


// // //     static hey(){
// // //         console.log('Hello ')
// // //         //console.log(this)
// // //     }



// // // }


// // //PersonA.hey() // Information 

// // // const chinmay = new PersonA("chinmay",1990)
// // // chinmay.fullName = "chinmay deshpande"
// // // console.log(chinmay.fullName)


// // // Object .create


// // // javscript 

// // // function constructor


// // // const Person = function (firstName, LastName, Year) {

// // //     this.firstName = firstName,
// // //     this.LastName = LastName
// // //     this.Year = Year


// // //     // this.addCal = function () {
// // //     //     return 2021 - this.Year
// // //     // }



// // //}

// // // __proto__ === Person.prototype

// // // Person.prototype.addCal = function(){
// // //     return 2021 - this.Year
// // // }

// // // Person.prototype.colorr = "green"

// // // const amol = new Person("chinmay", "deshpande", 1990)
// // // console.log(amol.__proto__ === Person.prototype)
// // // console.log(amol)


// // // console.log(amol.hasOwnProperty('colorr'))
// // // console.log(amol.hasOwnProperty('firstName'))
// // // console.log(amol.__proto__)



// // // class Person{


// // //     constructor(firstName, LastName, Year){

// // //         this.firstName = firstName,
// // //         this.LastName = LastName
// // //         this.Year = Year

// // //     }


// // //     addCal(){

// // //         return 2021 - this.Year


// // //     }



// // // }



// // // const amol = new Person("chinmay", "deshpande", 1990)
// // // console.log(amol.__proto__ === Person.prototype)
// // // console.log(amol)


// // // console.log(amol.hasOwnProperty('colorr'))
// // // console.log(amol.hasOwnProperty('firstName'))
// // // console.log(amol.__proto__)



// // const PersonProto  = {
// //     addCal(){
// //         return 2021 - this.Year
// //     },
// //     age:12,

// //     init(firstName,lastName,language){

// //         this.firstName = firstName
// //         this.lastName = lastName
// //         this.language = language

// //     }

// // }


// // const amol = Object.create(PersonProto)
// // // amol.firstName = "amol"
// // // amol.lastName = "rao"
// // // amol.language = "Marathi"

// // amol.init("Amol","Rao","Marathi")


// // console.log(amol)
// // console.log(PersonProto === amol.__proto__.__proto__)
// // console.log(amol.__proto__.__proto__)
// // console.log(amol.__proto__.__proto__.__proto__)


// // // Car 
// // //  speed , make
// // //break 10 -
// // // accelerate 10 +

// // class Car{

// //     constructor(speed,make){
// //         this.speed = speed,
// //         this.make = make
// //     }

// //     brake(){

// //         return this.speed - 10

// //     }

// //     accelerate(){

// //         return this.speed + 10

// //     }

// //     set SpeedUS(speed){
        
// //         this.speed = speed * 0.625
// //     }


// // }


// // var BMW = new Car(100,"BMW")
// // console.log(BMW.accelerate())
// // console.log(BMW.brake())
// // BMW.SpeedUS = BMW.speed
// // console.log(BMW.speed)


// // // Class
// // Object 
// // class  - concept 
// //E A I P















var d = [1,3,4]












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



// // class Student{
// //     constructor(fullName,id,roll){
// //         this.fullName = fullName
// //         this.id = id
// //         this.roll = roll

// //     }
// //     display(){
// //         console.log(this.fullName,this.id,this.roll)

// //     }

// // }


// // class Teacher extends Student{
// //     constructor(fullName,id,roll,sal){
// //         super(fullName,id,roll)
// //         this.sal = sal
// //     }
// //     displaySalary(){
// //         console.log(this.sal)
// //     }

// // }

// // let a = new Teacher("c",1,23,100)
// // a.display()
// // a.displaySalary()

// // console.log(a)

// // {}  null
// // Inheritane using function constructor



// // const Person = function(firstName,birthYear){
// //     this.firstName = firstName
// //     this.birthYear = birthYear
// // }

// // Person.prototype.calcAge = function(){
// //     console.log(2037 - this.birthYear)

// // }

// // const Student = function(firstName,birthYear,id){
// //     Person.call(this,firstName,birthYear);
// //     this.id = id
// // }

// // // Linking prototype 

// // Student.prototype = Object.create(Person.prototype)

// // Student.prototype.display = function(){
// //     console.log(this.id,this.firstName,this.birthYear)
// // }

// // let amol = new Student("chinmay",2001,12)
// // console.log(amol)
// // amol.calcAge()
// // amol.display()

// // Inheritance --- function constructor ES6 class

// // Multi level inheritance



// // class Student{


// //     constructor(fullName,birthYear,adharNo){
// //         this.fullName = fullName
// //         this.birthYear = birthYear
// //         this.adharNo = adharNo
// //     }

// //     display(){
// //         console.log(` My fullName is ${this.fullName}`)
// //         console.log(` My birthYear is ${this.birthYear}`)
// //         console.log(` My adharNo is ${this.adharNo}`)

// //     }

// //     // display(fullName,birthYear,adharNo){
// //     //     this.fullName = fullName
// //     //     this.birthYear = birthYear
// //     //     this.adharNo = adharNo
// //     //     console.log(` My fullName is ${this.fullName}`)
// //     //     console.log(` My birthYear is ${this.birthYear}`)
// //     //     console.log(` My adharNo is ${this.adharNo}`)

// //     // }



// // }

// // class Teacher extends Student{

// //     constructor(fullName,birthYear,adharNo,salary){
// //         super(fullName,birthYear,adharNo)
// //         this.salary = salary
// //     }

// //     displaySalary(){
// //         console.log(`My salary is ${this.salary}`)
//            //return this.salary
// //     }

// // }

// // class Professor extends Teacher{

// //     constructor(fullName,birthYear,adharNo,salary,subject){
// //         super(fullName,birthYear,adharNo,salary)
// //         this.subject = subject

// //     }

// //     displaySubject(){
// //         console.log(`My subject is ${this.subject}`)
// //     }

// //     displaySalary(){
// //         console.log(`My salary is ${this.salary + 1000 + super().display()}`)
//            //super().displaySalary()
// //     }


// // }

// // let chinmay = new Professor("Chinmay",1990,123,1000000,'Hindi')

// // chinmay.displaySubject()
// // chinmay.displaySalary()
// // chinmay.display()
// // console.log(chinmay.birthYear)

// // chinmay.display("Chinmay",1990,123)


// // overide and overload 
// // polymorphism





// // overload ---- same class same method different signature 
// // override -- different class (inheritance), same method name , same signature




// class OverloadingExample{   

//     constructor(){
//         console.log('Default construtor called')
//     }


//     add(a = undefined , b = undefined , c = undefined){

//         if(a != undefined && b !=undefined && c != undefined ){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b !=undefined  ){
//             console.log(a+b)
//         }
//         else{
//             console.log('Please input correct parameters ')
//         }

//     }

// }

// new OverloadingExample().add(12,23,34)
// new OverloadingExample().add(12,23)
// new OverloadingExample().add()



// var Person = class {


// }

// class Person{


// }


//  var s = null 
//  var f = " "
//  f.length

