// console.log("==============Spread Operator===================")

// let num1=[33,45,6,77,88,33,99,66,55,44,99]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...num1)

// console.log("==================Rest Operators====================")


// function add1(...arr){
// return arr.reduce(function(acc,el){
//     return acc+el
// })
// }
// let ff1=add1(22,65,45,837,98,37,98,67,56,45,67,89,05,74,53,76)
// console.log(ff1)


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

// function add (...arr){  // in parameter we recive array (datatype is array)
//     return arr.reduce((acc,el)=>acc+el)
// }
// console.log(add(1,2,3,4,5,6,7,8,8,9,0)) // we can pass randomly values

// // In Rest operator we can seperat out first values and after we can rest remaning elements

// function add (a,...arr){
//     console.log(a)             // 3
//     console.log(...arr)        // kk ravi ad
//     console.log(arr)           // [ 'kk', 'ravi', 'ad' ]
//     console.log(arr.slice(a))   // [ 'ad' ]
//     console.log(arr.slice(-a))  // [ 'ravi', 'ad' ]
// }
// console.log(add(2,'kk','ravi','ad'))



// Spread and rest operator with Destructuring(Array, Object, String)

// Array destructuring
// rest operator with array destructuring

// let arr = [1,2,3,4,5]
// let [a,...rest] = arr
// console.log(a)        // 1
// console.log(...rest)  // 2 3 4 5
// console.log(rest)     // [ 2, 3, 4, 5 ]
// console.log(rest[0])  // 2

// // we can combine two datatypes(array) using spread operator 
//  let arr1 = [1,2,3,4]
//  let arr2 = [1,2,3,4]
// let [a] = [...arr1,...arr2]  // a have different memory
// console.log(a)  // 1
// let [...fullarr] = [...arr1,...arr2]
// console.log(...fullarr)   // 1 2 3 4 1 2 3 4
// console.log(fullarr)      // [1, 2, 3, 4, 1, 2, 3, 4 ]
// console.table(fullarr)
// var [z,...fullarr1] = [...arr1,...arr2]
// console.log(z)   // 1






// spread operator applies on every iterator ?

// let [aaa,...ccc]= [1,2,3,4,5]
// console.log(ccc[0])
// let ya  = [12,3,4]
// let yb = [33,44,55]
// let r = [...ya,...yb]
// let [ra,...bbb] = [...ya,...yb]
// //[ 12, 3, 4, 33, 44, 55 ]
// console.log(ra)
// console.log(bbb)

// // function add(...d){
// //     console.lod(d)
// // }
// // add(12,3,4,5,6,6)

// let jjj = [2,3,4,5,6,7]
// let rjj = [23,5,6,7,7,889]
// let raaaasss = [...jjj,...rjj]
// let [yuy , ...bnm] = [...jjj,...rjj]

// // spread operator with string

// console.log([..."chinmay"])
// let  [ax,bx,...abnn]= [..."chinmay"]
// console.log(ax)
// console.log(abnn.join(''))

// //--------------------------->

// let h = [2,3,5]
// // let t = h 
// // t[0] = 1000
// // console.log(t)
// // console.log(h)

// let f = [...h]       // made seperate memory
// f[0] = 3
// console.log(f)
// console.log(h)

// // let obj = {age:23,t:344}    // made seperate memory
// // let rnc = obj
// // rnc['age'] = 6666
// // console.log(rnc)
// // console.log(obj)

// let df = [1,23,4]
// let ggggg = [...df]
// for(let i = 0 ; i < df.length ; i++){
//     ggggg.push(df[i])
// }
// console.log(df)