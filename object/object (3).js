// Array -

let names = ["chinmay","amol","aviraj","poorva"]
console.log(names[0])

for(let i = 0 ; i < names.length ;i++){
    console.log(names[i])
}

//let person = ["chinmay","deshpande",12,23]
// Taking the values from array 

//console.log(person[0])

// propert value 
// key value 

// let person = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     id:23
// }

// Object doesnot stores the value by index


// Dot notation 

// objName.property -----> value
// console.log(person.firstName) // chinmay
// console.log(person.age) //12

// console.log('------------------')
// // bracket notation
// //objName['propertyName']
// console.log(person['age']) // 12


// Javascript ---- object --- properties and methods


// let person = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:12,
//     id:23,

//     walk:function(){
//         console.log('Hi i am walking')
//     }
// }

// 

// console.log(person.age)
// console.log(person['id'])
// person.walk()
//console.log("Hello")

// --------------->




let students = {
    firstname:"chinmay",
    lastName:"deshpande",
    age:12,
    skills:["javascript","python","html","css"],
    isAdult:false,
    family:{
        father:"shirish deshpande",
        mother:"kanchan deshpande",
        sister:"gauri deshpande",
        flat:['flat1','flat2','flat3']
    }

}



// Tranversing through object
 
let skillsArray = students['skills']
let skillsArra2 = students.skills
console.log(skillsArray[3])

//---------------------------------------
console.log(students.skills[3])
console.log(students['skills'][3])
console.log(students.family['mother'])
console.log(students.family.mother)
//---------------------------------
console.log(students.family.flat[2])


// ----------------------------------->

let car = {
    color:"red",
    model:"SUV",
    regNo:"123"

}
// We are updating the value for a property
console.log(car.color)
console.log(car['color'])

car.color = "green"
console.log(car)
car['color'] = "blue"
console.log(car)

// Inserting a value 
car.color = "Grey"
car.city = "Nagpur"
// car = {
//     color:"red",
//     model:"SUV",
//     regNo:"123",
//     city:"Nagpur"

// }

console.log(car)
console.log(car.state)

// ------------------------>


let teacher = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    salary:2000
}

console.log(teacher['age'])


console.log(teacher.firstname)
console.log(teacher['firstname'])
// Loop ---------->

console.log('--------------------')
// Dot notation  does not works inside a loop 
for(let key in teacher){
    console.log(key,teacher[key])
    //teacher[key]
}


let personC = {

    fullName:"chinmay deshpande",
    age:20,
    languages:"marathi"


}

for(let  x in personC){
    console.log(x,personC[x])
}
























