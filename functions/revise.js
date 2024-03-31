


















// function as parameter to another function
// function declaration

// function add(x,y){
//     return x+y
// }
// let addx = add(12,13)
// console.log(addx)


// let x = 10
// console.log(x)


// let sub = function(x,y){
//     return x-y
// }
// // console.log(sub(12,13))
// // console.log(sub)


// // let sb =  function(x,y){
// //     return x-y
// // }



// function addition(sb){

//     let fn = sb(12,13)  // -1
//     return fn + 2  // 1

// }
// let rrr = addition(sub)
// console.log(rrr) // 1

//------------------------

// object  as parameter to another


let human = {
    fullName: "chinmay",
    age: 12,
    skills: ["python", "javascript", "c++"]
}
function changeAge(obj) {

    obj.age = 66
    return obj
    //console.log(obj)

}

let { age, skills: [skillOne, skillTwo] } = changeAge(human)
console.log(age)//
console.log(skillOne, skillTwo)//


// array as parameter to anothe function 


// let arr = function (aa){
//     // let aa = [1,2,3,4,5]
//     return  aa.reduce(function(acc,el){
//         return acc + el
//     },2)
// }

// let yy = arr([1,2,3,4,5])
// console.log(yy)


//--------------------------->


// let arr = function(a,b,c,d,e){
//     // return a + b + c + e
//     // let aa = [1,2,3,4,5]
//     return  aa.reduce(function(acc,el){
//         return acc + el
//     },2)
// }

// let yy = arr(1,2,3,4,5)
// console.log(yy)


// let arr = function(...aa){
//     return  aa.reduce(function(acc,el){
//         return acc + el
//     },2)
// }

// let yy = arr(1,2,3,4,5)
// console.log(yy)



let arr = function (...aa) {
    return aa.filter(function (el) {
        return el > 2
    }).reduce(function (acc, el) {
        return acc + el
    }) + 34
}
let yy = arr(1, 2, 3, 4, 5)
console.log(yy)


// array 
function ff(a, b, c, d, e) {
    return a + b + c + d + e
}
console.log(ff(...[1, 2, 3, 4, 5]))


// 1,2,3,4,5  ---> [1,2,3,4,5] // rest 
// [1,2,3,4,5] ----> 1,2       // spread



function add(...cc) {

    // [10,20,30,40,50]
    // [20,30,40,50,60]
    return cc.map(function (el) {
        return el + 10
    })
}
let [a, b, c, d, e] = add(10, 20, 30, 40, 50)
console.log(d + e)

let human = { fullName: "chinmay", marks: [22, 33, 44] }

function avanti(a, b, c) {
    return c + a
}
let ghg = avanti(...human.marks)
console.log(ghg)