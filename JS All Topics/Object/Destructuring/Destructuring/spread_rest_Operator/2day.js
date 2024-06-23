// // SPREAD OPERATOR

// // Requirement of spread operator
// // comman way
// let arr = [1,2,3,4,5]
// function add (a,b,c){
//     return a+b+c
// }
// console.log(add(arr[0],arr[1],arr[2]))

// // use spread operator
// let arr = [1,'kk',{a:'kk'}]
// console.log(...arr)                // 1 2 3 4 5

// function add (a,b,c){
//     console.log(typeof(c))
//     return a
// }
// console.log(add(...arr))      // we spread array elements

// // Example = last three transaction

// let trans = [100,-50,200,-100,300,-150]
// // console.log(trans.slice(-3).reduce((acc,el)=>Math.abs(acc)+Math.abs(el)))  // 550
// function add(a,b,c){
//     return Math.abs(a)+Math.abs(b)+Math.abs(c)
// }
// console.log(add(...trans.slice(-3)))


// REST OPERATOR

// function add (...arr){                      // in parameter we recive array (datatype is array)
//     return arr.reduce((acc,el)=>acc+el)
// }
// console.log(add(1,2,3,4,5,6,7,8,8,9,0))    // we can pass randomly values


// // In Rest operator we can seperat out first values and after we can rest remaning elements

// function add (a,...arr){
//     console.log(a)             // 3
//     console.log(...arr)        // kk ravi ad
//     console.log(arr)           // [ 'kk', 'ravi', 'ad' ]
//     console.log(arr.slice(a))   // [ 'ad' ]
//     console.log(arr.slice(-a))  // [ 'ravi', 'ad' ]
// }
// console.log(add(2,'kk','ravi','ad'))




// Spread

let o = [1,2,3]
o = {
    a:'kk'
}
o='kk'                      // we can spread only array and string  NOT Spread object
function add (a,b,c){
    console.log(typeof(c))    // for array each element have datatype which will be present after the spread
    return a
}
console.log(add(...o)) 





// Rest

// function add (...arr){    
//     console.log(typeof(arr))                  
//     return arr.reduce((acc,el)=>acc+el)
// }
// console.log(add(1,2,3,4,5,6,7,8,8,9,0)) 

// let a = [1, 2, 3, 4, 5]
// a = {
//     a: 10
// }
// a = 'krishna'
// function add(...arr) {                            // convert all things (array,string,object, random multiple numbers) in ARRAY   at arrgument
//     console.log(typeof (arr))
//     console.log((arr))
//     //return arr.reduce((acc,el)=>acc+el)
// }
// console.log(add(a))















//Spread operator

// let nums = [2,3,5,6,7,8,9,0]
// function add(a,b,c){
//     return a+b+c
// }
// let j = add(nums[0],nums[1],nums[2])
// console.log(j)

// let nums = [2,3,5,6,7,8,9,0]
// function add(a,b,c){
//     return a+b+c
// }
// let j = add(...nums)
// console.log(j)

// let transactions = [23,44,-55,-66,-77,55,66,77,88,99]
// let  newTransactions = transactions.slice(-5)
// function sumFiveTransaction(a,b,c,d,e){
//     return Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d)+Math.abs(e)
// }
// console.log(sumFiveTransaction(...newTransactions))
// console.log(newTransactions.reduce((acc,el)=> Math.abs(el)+acc))

// rest operator

// function add(...arr){
//    return arr.reduce((acc,el) => acc + el)
// }
// console.log(add(3,4,5,6,7,8,8,9,9,6,4,4,4,5,6,8))

// function add(a,...arr){
//     console.log(a)
//     console.log(arr.slice(0,a))
//     console.log(arr.slice(-a))
//  }
// add(3,"amol","chinmay","sunil","shashank","shushant")





