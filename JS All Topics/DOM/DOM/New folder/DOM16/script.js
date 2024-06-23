// function declaration 
function addition(x,y){
    return x + y
}
let q1 = addition(12,14)
console.log(q1)

// program 2
let addition2 = function(x,y){
    return x + y
}
let q2 = addition2(123,1)
console.log(q2)

// program 3
// let addition3 = (x,y)=>{
//     return x + y
// }
// let q3 = addition2(123,1)
// console.log(q3)

// let addition3 = (x,y)=> x + y
// let q3 = addition2(123,1)
// console.log(q3)
// ------------------------------------------->


// string as a parameter nad string as a return type
function greet(word){
    return word
}
let a1 = greet("hello")
console.log(a1)


let names = ["chinmay","sarika","ramesh","suresh"]


// array as a parameter and array as return type
function printArray(names2){
    //let names2  = names
    names2[0] = "poorva"
    console.log(names2) //["poorva","sarika","ramesh","suresh"]
    return names2
}

let ss = printArray(names)
console.log(names) //["poorva","sarika","ramesh","suresh"]
console.log(ss)


let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}


// object as a parameter and object as return type
function displayFullName(info2){
    //let info2 = info
    info2.firstName = "mayuri"
    console.log(info2.firstName+ info2.lastName) //
    return info2
}
console.log(info) //
let info2a = displayFullName(info)
console.log(info)
console.log(info2a)



// boolean as parameter and boolean as return type 
// string as parameter and  string as return type







