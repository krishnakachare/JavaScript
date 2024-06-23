
// // call  bind apply
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:34,
//     skills:["python","javascript"],
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// info.display()
// let info2 = {
//     firstName:"poorva",
//     lastName:"vyas",
//     age:25,
//     rollNo:27,
//     skills:["python","javascript","css"]
// }

// let brdm = info.display

// // let brdm = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// brdm()


// // call , bind , apply

// // bind()
// let brdm2 = brdm.bind(info2)
// // let brdm2 = function(){
// //     console.log(info2.firstName + info2.lastName)
// // }
// brdm2()

// program 2

let john = {
    firstName:"john",
    lastName:"desuza"
}

let smith = {
    firstName:"steven",
    lastName:"smith"
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande"
}

let displayName = function(){
    console.log(this.firstName + this.lastName)
}
displayName()


// let s1 = displayName.bind(john)
// // displayName.bind(john)()
// // displayName.bind(chinmay)()
// // displayName.bind(smith)()
// // s1 = function(){
// //     console.log(john.firstName + john.lastName)
// // }

// s1()


// call 

displayName.call(john)
displayName.call(smith)
displayName.call(chinmay)

let displayName2 = function(greet){
    console.log(`${greet} ${this.firstName} ${this.lastName}`)
}
displayName2()

displayName2.call(john,"Gm")
displayName2.call(smith,"Ge")
displayName2.call(chinmay,"Ga")

// apply()
displayName2.apply(chinmay,["gm"])









// let firstName = "abhisha"
// let lastName = "dani"

// My firstName is abhisha and lastName is dani
// console.log("My firstName is "+firstName+" My lastName name is "+lastName)
// console.log(`My firstName is ${firstName}  My lastName is ${lastName}`)
// console.log(`${1+4}`)
































