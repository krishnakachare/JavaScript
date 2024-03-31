// Encapsulation = For particular requirement have particular class
// Constructor not return anything and not required to call it seperatly.






























// let chinmay ={
//     age:23,
//     fullName:"chinmaydeshpande"

// }
// let amol ={
//     age:23,
//     fullName:"amolrao"
// }


// class Person{

//     language = "Hindi"
//     city = "pune"

// }

// let amol = new Person()
// let chinmay = new Person()

// console.log(amol)
// console.log(chinmay)

// // Updating the property for a particular element
// chinmay.city = "Nagpur"

// // Adding the value outside the class
// chinmay.skills = ["python","c"] 

// // deleting the value 
// delete chinmay.skills

// // retrive 

// console.log(chinmay.skills)
// console.log(amol)
// console.log(chinmay)


// using constructor 

class Person {

    language = "Hindi"

    constructor(name,age,rollNumber){
        this.age = age
        this.name = name
        this.rollNumber = rollNumber

    }

}

// let amol = new Person("amolrao",12,122)
// let chinmay = new Person("chinmay",22,123)

let persons = [] // [obj,obj,]
let users = Number(prompt("How many objects you want create"))


for(let i = 0 ; i < users; i++){
    let age = Number(prompt('Enter the age'))
    let name = prompt('Enter the Name')
    let rollNumber = prompt('Enter the rollNumber')
    let obj = new Person(name,age,rollNumber)
    persons.push(obj)

}
console.log(persons)
console.log(typeof(persons[0]))

// for(let i = 0 ; i < 3; i++){
//     persons.push(new Person(prompt('Enter the Name'),Number(prompt('Enter the age')),prompt('Enter the rollNumber')))
// }

for (let {key} of persons.entries()){
    console.log(key)
}
// persons.forEach(function(el){
//     for(let [key,val] of Object.entries(el)){
//         console.log(key,val)
//     }
//     // for(let val of el.values()){
//     //     console.log(val)
//     // }
//     // for(let key of el.keys()){
//     //     console.log(key)
//     // }
// })

// outside the class , using constructor , using set and get 
// class Person {
//     setAge(age){
//         this.age = age
//     }
//     setRollNumber(roll){
//         this.rollNumber = roll
//     }

//     getAge(){
//         return this.age
//     }
    
//     getRollNumber(){
//         return this.rollNumber
//     }

// }

// let amol = new Person()
// amol.setAge(12)
// amol.getAge()

// amol.setRollNumber(122)
// amol.getRollNumber()


//prototype --->
// object creation 
// inheritance