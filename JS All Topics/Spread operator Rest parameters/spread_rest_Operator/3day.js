// Spread and rest operator with Destructuring(Array, Object, StringSS)

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
// let [a] = [...arr1,...arr2]                                                // a have different memory
// console.log(a)                         // 1
// let [...fullarr] = [...arr1,...arr2]
// console.log(...fullarr)                       // 1 2 3 4 1 2 3 4
// console.log(fullarr)                      // [1, 2, 3, 4, 1, 2, 3, 4 ]
// console.table(fullarr)
// var [z,...fullarr1] = [...arr1,...arr2]
// console.log(z)                                 // 1




// Rest and Spread operator with Object destructuring

// let man = {
//     fullname:'kk',
//     age:26,
//     skill:"aa"
// }
// // let { fullname,age,skill } = man
// // console.log(age)                        // 26
// let {age} ={...man}             // object spread
// let {fullname,...obj} ={...man}    
// console.log(fullname)       // 26
// console.log({...obj})
// console.log(obj)                         // { age: 26, skill: 'aa' }

// let man2 ={...man}                // man2 have different memory with man2 address
// man2.age=28
// console.log(man2.age)     // 28
// console.log(man.age)      // 26

// NOTE = when we spread somthing means its made SHALLOW COPY (exact copy of that database)(have different address and difference memory)

// we can combined two objects by spread operator 

// var man = {
//     fullname:'kk',
//     age:26,
//     skill:"aa"
// }
// let g = {
//     fullname:'dg',
//     age:23,
//     skill:"bb"
// }
// let fullObj = {...man,...g}
// console.log(fullObj)            // { fullname: 'dg', age: 23, skill: 'bb' }
// when same property then update its value

// var man = {
//     fullname:'kk',
//     age:26,
//     skill:"aa"
// }
// let g = {
//     gfullname:'dg',
//     gage:23,
//     gskill:"bb"
// }
// var fullObj = {...man,...g}       // seperate memory made (Shallow copy)
// console.log(fullObj)             // {fullname: 'kk',age: 26,skill: 'aa',gfullname: 'dg',gage: 23,gskill: 'bb'}   
// var {gfullname,...obj}= {...man,...g}
// console.log(gfullname)    // dg
// console.log(obj)          // { fullname: 'kk', age: 26, skill: 'aa', gage: 23, gskill: 'bb' }


// Rest and Spread operators with string destructuring

// let str = 'krishna'
// var [a,b] = str
// console.log(a)     // k
// var [a,...b] = [...str]    //  str        // string spread (new memory made)
// // rest        //  spread
// console.log(b)          // [ 'r', 'i', 's', 'h', 'n', 'a' ]
// console.log(...b)       // r i s h n a

















// ==============================================================================================================

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

// // object -----

// let  rone = {
//     namev:'rahul',
//     age:34,
//     rollNum:23
// }

// // spread operator with obj

// let {namev,age,rollNum } = rone
// // rest operator with object
// // let{namev,...cccc}= rone
// // console.log(namev)
// // console.log(cccc)

// console.log(namev)
// console.log(age)
// console.log(rollNum)

// // function add(...d){
// //     console.lod(d)
// // }
// // add(12,3,4,5,6,6)

// let jjj = [2,3,4,5,6,7]
// let rjj = [23,5,6,7,7,889]
// let raaaasss = [...jjj,...rjj]
// let [yuy , ...bnm] = [...jjj,...rjj]

// //object 

// let human = {namey:5665 ,age:4455}
// let family = {mother:'kanchan',ageyy:44}
// let iaaaa = {...human,...family}
// let {namey,...ggg} = {...human,...family}
// console.log(ggg)
// console.log(namey)

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

// let obj = {age:23,t:344}
// let rnc = {...obj}
// rnc['age'] = 6666
// console.log(rnc)
// console.log(obj)

// let df = [1,23,4]
// let ggggg = [...df]
// for(let i = 0 ; i < df.length ; i++){
//     ggggg.push(df[i])
// }
// console.log(df)


