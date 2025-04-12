// Spread and rest operator with Destructuring(Array, Object, String)

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
// var fullObj = {...man,...g}// seperate memory made (Shallow copy)
// console.log(fullObj) // {fullname: 'kk',age: 26,skill: 'aa',gfullname: 'dg',gage: 23,gskill: 'bb'}   
// var {gfullname,...obj}= {...man,...g}
// console.log(gfullname)    // dg
// console.log(obj)          // { fullname: 'kk', age: 26, skill: 'aa', gage: 23, gskill: 'bb' }



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

// let obj = {age:23,t:344}
// let rnc = {...obj}
// rnc['age'] = 6666
// console.log(rnc)
// console.log(obj)

// //object 

// let human = {namey:5665 ,age:4455}
// let family = {mother:'kanchan',ageyy:44}
// let iaaaa = {...human,...family}
// let {namey,...ggg} = {...human,...family}
// console.log(ggg)
// console.log(namey)
