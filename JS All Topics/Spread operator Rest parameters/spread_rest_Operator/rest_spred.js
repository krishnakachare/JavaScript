// example = general way

//let numbers = [1,2,3,4,5,6,7,8,9]

// function add(para){
//     console.log(para[0]+para[1]+para[2])      //6
// }
// add(numbers)


// SPREAD OPERATOR => its allows to give reuired arguments when calling from parameter

// function add(a,b,c){
//     console.log(a+b+c)      //6
// }
// add(...numbers)


// REST OPERATOR  => its convert fun arrgument in array at time it in at parameter place  then in function we can apply all array methods

// function add(...a){

//  return a.reduce(function(acc,el,ind,arr){
//      return acc + el   
//  },0)
// }
// console.log(add(1,2,3,4,5,6,7,8,9))                   // 45






// WE CAN USED IN CYPRESS AFTER MAKING NODELIST
// CAN DESTRUCTUR ARRAY IN ARRAY  OR   ARRAY IN OBJECT   OR MULTIPAL COMLEX STRUCTURE

// BEFORE THE DESTRUCTURING OR AT TIMR WE CAN APPLY DATA TYPE METHODS LIKE IN ARRAY ARRAYMETHODS   AND OBJETMETHODS TO GET REQUIRED PORTION OF ARRAY OR OBJECT
 // WE CAN GET REQUIRED PORTION OF ARRAY OR OBJECT    LIKE FIRST, LAST,  MIDDEL

 // CAN COMPARE RETURN TYPE OF FUNCTION AND FUNCTION ARRGUMENT






































// spread operator 
// rest operarion

// let numbersa = [33,44,66,77,88,99,100]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...numbersa)



// let numbers = [33,44,66,77,88,99,100]
// function add(arr){
//     console.log(arr[0]+arr[1]+arr[2]+arr[3])
// }

// add(numbers)

//------------------------->

// let numbersaa = [33,44,66,77,88,99,100]
// function add(...a){
//     return a.reduce(function(acc,el){
//         return acc + el
//     })
// }
// let ffff = add(1,2,213,13,12,312,321,3,213,213,21,321,3,123,12,312,3,21,312)
// console.log(ffff)














// let [studentOne,studentTwo,studentThree] = body.data
// let {id,first_name,last_name,email,avatar} = studentOne


// spread operator 
// rest operarion

// let numbersa = [33,44,66,77,88,99,100]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...numbersa)



// let numbers = [33,44,66,77,88,99,100]
// function add(arr){
//     console.log(arr[0]+arr[1]+arr[2]+arr[3])
// }

// add(numbers)

//------------------------->

// let numbersaa = [33, 44, 66, 77, 88, 99, 100]
// function add(...a) {
//     return a.reduce(function (acc, el) {
//         return acc + el
//     })
// }
// let ffff = add(1, 2, 213, 13, 12, 312, 321, 3, 213, 213, 21, 321, 3, 123, 12, 312, 3, 21, 312)
// console.log(ffff)



// //-------------------------------->


// let  names = ["ninad","amol","shikrant"]

// // let firstOne = names[0]
// // let firstOneB = names[1]
// // let firstOneC = names[2]
// // console.log(firstOne)
// // console.log(firstOneB)
// // console.log(firstOneC)

// let [firstOne,firstOneB,firstOneC] = names
// console.log(firstOne)
// console.log(firstOneB)
// console.log(firstOneC)

// let transactions = [23,44,55,66,77,55,543,3455,345345,3453,3333]
// //transactions.reverse()
// let [tran1,tran2,tran3,tran4,tran5] =transactions.slice(-5)
// let [tran1,tran2,tran3,tran4,tran5] = transactions.reverse()


// ------------------------------>

//objects 


// let amol = {

//     firstName:"chinmay",
//     age:34,
//     skills:["python","java","javascript"]

// }
// let {firstName:fn,skills:skill,age:ag} = amol

// console.log(fn)
// console.log(skill)
// console.log(ag)


//------------------------------------


//spread 
//let arr = [1,2,3,4,55,66,77,88,99]

//[99,88,77,66,55,4,3,2,1]

// function add(a,b,c,d,e){

//     console.log(a+b+c+d+e)

// }
// add(...arr.reverse())


// let arr = [1,2,3,4,55,66,77,88,99]

//[99,88,77,66,55,4,3,2,1]

// function add(arr){
//     console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5])
// }
// add(arr.reverse())

//-------------------------------- 

//rest operator


// function taxCollection(...arr){


//         let add = arr.reduce(function(acc,el){
//             return acc + el
//         })

//         let add2 = arr.reduce(function(acc,el){
//             return acc + el
//         })

//         return [add,add2]

// }

// let [add,add3] = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)


// function taxCollection(...arr){


//     let add = arr.reduce(function(acc,el){
//         return acc + el
//     })

//     let add2 = arr.reduce(function(acc,el){
//         return acc + el
//     })

//     return {'firstName':"chinmay",'age':23}

// }

// let { firstName:fn ,age:ag} = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)


















