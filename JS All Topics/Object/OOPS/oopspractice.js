
// let mayuri={
//     fullName:"mayu",
//     age:20
// }


// let parsad={
//     fullname:"parsu",
//     age:32
// }

// class person{
//     fullName="mayuri"
//     age=23
// }

// //1. Setting property of object outside of the class
// let vinaya=new person()
// console.log(vinaya)
// let soniya=new person()
// console.log(soniya)

// //add property
// soniya.skill="java"
// soniya.language="english"
// console.log(soniya)

// //update the property
// soniya.skill="python"
// console.log(soniya)

// //retrive the peroperty
// console.log(soniya.language)

// //delete the property
// delete soniya.skill
// console.log(soniya)

//2. By using constructor

// class fruits {
//     constructor(name, price, color) {
//         this.name = name
//         this.price = price
//         this.color = color
//     }
// }
// let mango = new fruits("Mango", 100, "yellow")
// console.log(mango)
// let apple = new fruits("Apple", 200, "Red")
// console.log(apple)
// let dragoan = new fruits("Dragoan", 500, "Pink")
// console.log(dragoan)

// mango.quality="good"
// console.log(mango)

/
//////////////////////////////////////////////////////////



//Problem =>I have to create object as per user input
let human = []
let objectNum = prompt("Please enter the number of object u have to create")//2

for (let i = 0; i < objectNum; i++) {
    let age = prompt("Please Enter the age") 
    let firstName = prompt("Please Enter the firstname ")
    let langauge = prompt("Please Enter the langauge")
    let skill=prompt("plez entrt your skill")
    let obj = new person(age, firstName, langauge,skill)
    human.push(obj)

}

human.map(function(el){
    console.log(el)
    for(let [key,value] of Object.entries(el)){
        console.log(key,value)
    }
})
