//Two way to create the object

//********************1 way by using hard code********************
// let amol = {
//     fullName: "amolrao",
//     lastName: "patil",
//     display:function(){
//         console.log("Hello")
//     }
// }
// //amol.display() //hello
// console.log(amol) //prototype property get shown and display is added into the function

// //******************2 Way by using class***************************
// class Person1 {
//     constructor(fullname, lastname, age) {
//         this.fullname = fullname
//         this.lastname = lastname
//         this.age = age
//     }
//     display() {
//         console.log(hello)
//     }
// }

// let mayu = new Person1("mayuri", "katwe", 23)
// console.log(mayu)
// let yoge = new Person1("yogesh", "sawant", 30)
// console.log(yoge) //by defalut added in prototype

//******************3. Constructor Function****************************

// let human = function (fullName, lastName, age) {
//     this.fullName = fullName
//     this.lastName = lastName
//     this.age = age
//     this.display = function () {
//         console.log('hello')
//     }
// }

// let amit = new human("amit", "rao", 23)
// let sumit = new human("sumait", "chandra", 72)
// console.log(amit)
// console.log(sumit)

//In above code in both object display method is get inherites we dont want such a think so the solution is as below
//explaination of solution as we dont want to inherit this method in all object but we want to declare this method in one globle object from whic it need to inherites

//----------------------------------------------------------------------------------------
const person = function (fullName, lastName, age) {
    this.fullName = fullName
    this.lastName = lastName
    this.age = age

}
person.prototype.display = function () {
    console.log("hello")
}

let amol = new person("jui", "chawala", 50)
let sonali = new person("sonam", "kappor", 63)
let ram = new person("ram", "leela", 100)
console.log(amol)
console.log(sonali)
console.log(ram)

console.log(amol instanceof person)
console.log(sonali instanceof person )
console.log(ram instanceof person)

console.log(amol.hasOwnProperty("fullName"))
console.log("fullName" in amol)












