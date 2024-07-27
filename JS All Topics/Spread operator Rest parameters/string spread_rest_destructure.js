
// Spread
// let o = [1, 2, 3]
// o = {
//     a: 'kk'
// }
// o = 'kk'                      // we can spread only array and string  NOT Spread object
// function add(a, b, c) {
//     console.log(typeof (c))    // for array each element have datatype which will be present after the spread
//     return a
// }
// console.log(add(...o))



// Rest
let a = [1, 2, 3, 4, 5]
// a = {
//     a: 10
// }
// a = 'krishna'
function add(...arr) {// convert all things (array,string,object, random multiple numbers) in ARRAY   at arrgument
    console.log(arr, typeof (arr))
    //return arr.reduce((acc,el)=>acc+el)
}
console.log(add(a))














// Rest and Spread operators with string destructuring

// let str = 'krishna'
// var [a,b] = str
// console.log(a)     // k
// var [a,...b] = [...str]    //  str        // string spread (new memory made)
// // rest        //  spread
// console.log(b)          // [ 'r', 'i', 's', 'h', 'n', 'a' ]
// console.log(...b)       // r i s h n a