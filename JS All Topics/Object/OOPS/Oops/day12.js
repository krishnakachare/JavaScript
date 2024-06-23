

// assignment 

let a = 10
a = 30
console.log(a)


var k = 80
k = 90
console.log(k)

const i = 90
console.log(i)
//i = 800

// scope 

// let is block scope

// const is block scope 

// var is function scope
// program 1

{
    let h = 900
    console.log(h)
}
//console.log(h)


// program 2
let n = 10 
{
    let n = 89
    console.log(n) // 89
}
console.log(n) // 10


// program  3

let m  = 190
{
    console.log(m) //190
    m = 900
    console.log(m) // 900
}
console.log(m) //900

// program 4
// const j = 9000
// {
//     const j = 100
//     console.log(j) // 100
// }
// console.log(j)  // 9000

// program 5
// const k = 9090
// {
//     console.log(k) // 9090
//     k = 909090
//     console.log(k) //
// }
// console.log(k)

// program 6

var kl = 9000
function addition(){
    kl = 90
    console.log(kl) // 90
}
console.log(kl) // 9000
addition()
console.log(kl) //90


// program 7

var kl = 9000
function addition(){
    var kl = 90
    console.log(kl)  // 90
}
console.log(kl)   // 9000
addition()
console.log(kl)  // 9000


let j = 9000
var k = 10000
function subtraction(){
    let j = 90
    console.log(j) // 90
    console.log(k) // 10000
    k = 909090
    console.log(k) // 0909090
    {
        k= 100
    }
    {
        j = 9
        console.log(j) // 9
    }

}
console.log(j) // 9000
console.log(k) //10000
subtraction()
console.log(j) // 9000
console.log(k) // 100























// functions


