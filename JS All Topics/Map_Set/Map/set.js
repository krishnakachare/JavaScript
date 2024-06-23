
// SET DATATYPE

// Set not allows duplicate values

// CURD OPERATION

// // Create object using set datatype
// // 1. Pass values to constructor

// let setD = new Set(['hi','its','set','datatype'])
// console.log(setD)                                          // Set(4) { 'hi', 'its', 'set', 'datatype' }

// // 2. Using add method add elements in the set

// let setDatatype = new Set()

// console.log(setDatatype)          // Set(0) {}
// console.log(typeof (setDatatype))  //  object

// // add or update set
// // add()   =>  Action = add elements in set datatypes    Return = all set

// setDatatype.add('kk')
// setDatatype.add(3)
// setDatatype.add(true)
// setDatatype.add(undefined)
// setDatatype.add([1, 2, 3])
// console.log(setDatatype.add({ n: 'krishna' }))

// console.log(setDatatype)                          //   Set(6) { 'kk', 3, true, undefined, [ 1, 2, 3 ], { n: 'krishna' } }
// console.table(setDatatype)

// // delete elements from set  
// // delete ()  =>  Action = delete element from set       Return type = Boolean

// console.log(setDatatype.delete(true))

// // Properties for Set
// // 1. SIZE   =>  Action = count elements present in Set       ReturnType = number

// console.log(setDatatype.size)             // 6

// // METHODS for Set
// // 1. has ()  =>   Action = check element present in Set or not         ReturnType = Boolean

// console.log(setDatatype.has(true))   // true
// console.log(setDatatype.has('jS'))  // false

// // 2. clear()    =>  Action = delet all element present in Set       Return =

// console.log(setDatatype.clear())     // undefined
// console.log(setDatatype)             // Set(0) {}

// LOOP ON Set

// console.log(setDatatype.keys())
// console.log(setDatatype.values())
// console.log(setDatatype.entries())

// for (let kk of setDatatype.keys()) {
//     console.log(kk)
// }

// for (let kk of setDatatype.values()) {
//     console.log(kk)
// }

// for (let kk of setDatatype.entries()) {
//     console.log(kk)
// }












//=============================================================================================================
// // Set 

// let setA = new Set()

// // add 

// setA.add('apples')
// setA.add('apples')
// setA.add('grapes')

// console.log(setA)

// setA.delete('grapes')
// console.log(setA)

// // setA.clear()
// // console.log(setA)
// console.log(setA.has('apples'))

// // Loop 

// for(let val of setA.values()){
//     console.log(val)
// }

// for(let [val,vals] of setA.entries()){
//     console.log(val,vals)
// }

// // ----------------->

// let arrayA = [1,2,3,4,33,44,44,55,77] 

// let setB = new Set(arrayA)
// console.log(setB)
// console.log([...setB])
// // array , objects , string Html element , maps , set , class,boolean 
