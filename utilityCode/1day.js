// Refactoring of code = (Reduce repeated code) make as code utility and for changes make small small fuctions and pass in utility code
// loosly coupled code

// let arr = [()=>console.log('kk'),'kk2']
// arr[0]()                                 // kk
// console.log(arr[0])                      // [Function (anonymous)]
// console.log(arr[0]())    // kk    // undefined


// let obj = {
//     fname:'krishna',
//     method:()=>
//         console.log('hello')

// }
// console.log(obj.method)    // [Function: method]
// obj.method()               // hello
// console.log(obj.method())  // hello    // undefined



// Function parameter pass as array and its return also array

// let arg = [1, 2, 3, 4, 5]
// function array(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 1
//     }
//     return arr
// }
// array(arg)
// console.log(arg)   // [ 2, 3, 4, 5, 6 ]


// Object pass as parameter to function





















// // function declartion
// // function add(){
// //     console.log('Hello')
// // }

// // add()


// //  function expression 

// // let add = function(){
// //     return a+b
// // }
// // add()


// // let add = ()=>{
// //     return a+b
// // }
// // add()

// // function declaration 


// // sub(12,13)
// // function sub(x,y){
// //     console.log(x-y)

// // }

// // ------------------------
// // a(22,23)
// // let a = function(x,y){
// //     console.log(x-y)

// // }


// // a(22,23)
// // let a = (x,y) =>{
// //     console.log(x-y)

// // }


// // let h = [()=>console.log("Bye"),"hello"]
// // h[0]()


// // let g = {
// //     age:23,
// //     h:()=>console.log("Bye")
// // }

// // g['h']()


// // let x = 10 
// // console.log(x)


// // let h = function(){
// //     console.log('hello')
// // }

// // h()
// // console.log(h)



// let add = function(x,y){
//     return x+y
// }

// // let hh = add(12,13)
// // console.log(hh)

// console.log(add)

// // let fn = function(x,y){
// //     return x+y
// // }

// function sub(fn){
//     let a = fn(12,13)
//     return a

// }
// let rr = sub(add)
// console.log(rr)




// // let h = [()=>console.log("Bye"),"hello"]
// // h[0]()



// // let g = {
// //     age:23,
// //     h:()=>console.log("Bye")
// // }

// // g['h']()


// //------------------------------------------------>




// // funcntion arr as param and return type is also array 

// let h = [1,2,3,4,5]

// // [3,4,5,6,7]
// function addTwo(arr){

//     //[1,2,3,4,5]

//     for(let i = 0; i < arr.length; i++){

//         arr[i] = arr[i]+2
//     }

//     return arr

// }

// let bb = addTwo(h)
// console.log(bb)
// console.log(bb.reduce((acc,el)=> el+acc))



// // passing obj as a parameter to another function 

// // let pe = {
// //     firstName:"chinmay",
// //     age:23
// // } 

// // function updateObj(obj){

// //     obj.firstName ="samay"
// //     console.log( obj.firstName)

// // }

// // updateObj(pe)
// // console.log(pe.firstName)



// // let pe = {
// //     firstName:"chinmay",
// //     age:23
// // } 

// // function updateObj(obj){

// //     obj.firstName = "ram"
// //     return [obj.age,obj.firstName]


// // }

// // let bnb = updateObj(pe)
// // console.log(bnb[0])



// let pe = {
//     firstName:"chinmay",
//     age:23
// } 

// function updateObj(obj){
//     obj.firstName = "ram"
//     return obj
// }
// let bnb = updateObj(pe)
// console.log(bnb['age'])
// console.log(bnb['firstName'])




// let names = ["chinmay","poorva","ram"]


// //["welcome chinmay","welcome poorva","welcome ram"]


// let r = []
// for(let i = 0 ; i < names.length ; i++){
//     r.push('welcome '+names[i])
// }
// console.log(r)


// // method - action 

// // returns 

// // map - function array
// // map function is called on every element of array


// let hhh = names.map(function(el,index,arr){
//     return `welcome `+el
// })

// console.log(hhh)


// let age = [22,33,14,19]

// let aobve18 = []


// for(let i = 0 ; i < age.length ; i++){
//     if(age[i] > 18){
//         aobve18.push(age[i])
//     }
// }
// console.log(aobve18)

// let uuu = age.filter(function(el,index,arr){
//     return el > 18
// })
// console.log(uuu)



// // 

// age = [22,33,14,19]
// let sum  = 0 

// for(let i = 0 ; i < age.length ; i++){
//     sum = sum + age[i]
// }
// console.log(sum)

// // reduce 

// let ff = age.reduce(function(acc,el,index,arr){
//     if(index > 0){
//         return acc + el
//     }
// },5)

// console.log(ff)



// let uuu = age.filter((el) =>el > 18)
// console.log(uuu)


// let age2 = [22,33,14,19]  // property method
// console.log(age2.length)
// console.log(age2.push('55'))


// let person = {

//     age :12
// }
// person.age = 23
// ------------------------------>
// refactoring example 
// let ages = [22,33,34,55,66,77] // 2
// //[1999]
// function calAge(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(2021-arr[i])
//     }
//     return barr
// }
// let f = calAge(ages)
// console.log(f)
// //---------------------------
// function calTwo(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]+2)
//          //[24,]
//     }
//     return barr
// }
// let b= calTwo(ages)
// console.log(b)

// function tenPer(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]*0.10)
//          //[24,]
//     }
//     return barr
// }
// let c= tenPer(ages)
// console.log(c)

// let ages = [22,33,34,55,66,77] 

// let bills = [1000,34000,444,5555,6666]

// function returnArray(arr,fn){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//         barr.push(fn(arr[i]))
//     }
//     return barr
// }


// function ck(cssSelector){
//     cy.get(cssSelector).click()
// }



// let birthyear = (el)=> 2021-el
// let tenPer = (el)=> el * 0.10
// let twoPlus = (el) => el +2
// let discout10 = (el) => el - tenPer(el)


// let birthyeara = returnArray(ages,birthyear)
// let tw = returnArray(ages,twoPlus)
// let ee = returnArray(ages,tenPer)
// let eebills = returnArray(bills,discout10)

// console.log(birthyeara,tw,ee)
// console.log(eebills)

// bills = [1000,34000,444,5555,6666]