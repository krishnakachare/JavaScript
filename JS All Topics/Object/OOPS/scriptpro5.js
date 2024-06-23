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