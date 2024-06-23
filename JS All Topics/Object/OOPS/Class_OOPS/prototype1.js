//IN OOPS we are creating object by using class and  with the help of class we can make object more proper way and secure way
//So there are 4 concept
//1. Encapsulation
//2. Inheritance
//3. Abstraction
//4. Polymophism

//In order to define class there are 3 ways
//1. Function constructor
//2. ES6 class
//3. Object.create method

/////////////////////////////////////////////////////////////////////////////////

//1. FUNCTION CONSTRUCTOR

//Without declaring method in function consructor
// function Person(fullName, rollNo, age) {
//     this.fullName = fullName
//     this.rollNo = rollNo
//     this.age = age
// }

// let amol = new Person('Amol', 22, 30)
// console.log(amol) //Person { fullName: 'Amol', rollNo: 22, age: 30 }
//-----------------------------------------------------------------------------------------
//With declaring method in function consructor
// function Person(fullName, age, skill) {
//     this.fullName = fullName
//     this.age = age
//     this.skill = skill
//     this.display = function () {
//         console.log(`Birth year is ${2021 - this.age}`)
//     }
// }

// let mayuri = new Person("Mayuri", 23, "JS")
// console.log(mayuri) //Person {fullName: 'Mayuri',age: 23,skill: 'JS',display: [Function (anonymous)]}

// let ganesha = new Person("Ganesha", 30, "JAVA")
// console.log(ganesha) // Person {fullName: 'Ganesha',age: 30,skill: 'JAVA',display: [Function (anonymous)]}

//Here we see the problem is that whenever we are creating new object every time dispplay method adding in our object 
//and we dont want this ,so we are declaring display method in prototype of Person so insted of adding with every object it add __proto__ of object
//i.e. AS BELOW

//---------------------------------------------------------------------------------------------------

// function Person(fullName, age, skill) {
//     this.fullName = fullName
//     this.age = age
//     this.skill = skill

// }

// Person.prototype.display = function () {
//     console.log(`Birth year is ${2021 - this.age}`)
// }

// let mayuri = new Person("Mayuri", 23, "JS")
// console.log(mayuri) //Person { fullName: 'Mayuri', age: 23, skill: 'JS' }
// let ganesha = new Person("Ganesha", 30, "JAVA")
// console.log(ganesha) //Person { fullName: 'Ganesha', age: 30, skill: 'JAVA' }

// //Here we added property in Person.prototype so do u think this will mayuri is taking this property from Person.prototype???
// //Ans is NOOOO.... =>In JS everyting is object and every object has two peroperty 1.prototype and 2.__proto__
// //So when we added display method in Person.prototype it indirectly added in mayuri.__proto__

// console.log(Person.prototype == mayuri.__proto__) //It comes true

// //so that we can call this display method in mayuri as well as ganesha object as it is present in __proto__ of this object

// mayuri.display() // Birth year is 1998
// ganesha.display() // Birth year is 1991

//*********************************************************************************************/

//Array
// let names=["mayur","ganesha","ram","sita"] 
// console.log(names) //[ 'mayur', 'ganesha', 'ram', 'sita' ]
// let names=new Array("mayur","ganesha","ram","sita")
// console.log(names) //[ 'mayur', 'ganesha', 'ram', 'sita' ]

// //so here names is created by using Array so
// console.log(Array.prototype==names.__proto__) //true

//============================================================================================
//Array unique element
// let age = [22, 33, 44, 22, 55, 66, 77,33,99, 88, 99,22]
// let aa = []
// let bb = []
// age.map((el, index, arr) => {
//     if (arr.indexOf(el) == index) {
//         aa.push(el)
//     }
//     else {
//         bb.push(el)
//     }
// })

//=============================================================================================
// for(let i=0;i<age.length;i++){
//     if(aa.includes(age[i])){
//         bb.push(age[i])
//     }
//     else{
//         aa.push(age[i])
//     }
// }

// console.log(aa)
// console.log(bb)

//===============================================================================================

// let a=new Set(age)
// console.log(a)
// console.log([...a])

// Array.prototype.unique=function(arr){
// let a=[...new Set(arr)]
// console.log(a)
// }
// let pq=[12,2,3,4,5,6,7,8,9,98,77,55,44,33,44,55]
// pq.unique(pq)

//------------------------------------------------------------------------------------------------

//We can write function constructor in function expression form also

// let Vehical=function(model,regNo,color){
//     this.model=model
//     this.regNo=regNo
//     this.color=color
// }

// let audi=new Vehical('audi',201,'red')
// console.log(audi instanceof Vehical) //as audi object made by vehical class  //true//
// console.log(audi.hasOwnProperty('model')) //true

// //here we cant user arrow function as it takes parent scope
// // Vehical.prototype.carcolor=()=>{
// //     console.log(this.color)
// // }

// Vehical.prototype.carcolor=function(){
//     console.log(this.color)
// }

// console.log(audi)
// audi.carcolor()
// audi.carcolor()

// console.log(audi.hasOwnProperty('speed')) //false
// console.log(audi.__proto__.hasOwnProperty('speed')) //true
// console.log(Vehical.hasOwnProperty('speed')) //false
// console.log(Vehical.prototype.hasOwnProperty('speed')) //true

/////////////////////////////////////////////////////////////////////////////////

//2type =>ES6 class
class Person{
    constructor(name,age,langauge){
        this.name=name
        this.age=age
        this.langauge=langauge
    
    }
    display(){
        console.log(this.name,this.age)
    }
}

let nayan=new Person("nayan",12,"english")
console.log(nayan)

//byfefault in ES6 class, method gets added in prototype
