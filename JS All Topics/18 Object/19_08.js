// let birth1 = [2000,2001,2002,2003,2004]
// let birth2 = [1995,1996,1997,1998,1999]

// // find current ages of each in both array

// let agearr = [ ]
// let agearr2 = [ ]

// using for loop inside the function

// function age1(arr){
//     for(let i = 0; i < arr.length; i++){
//         agearr.push(2021 - arr[i])
//         //agearr2.push(2021 - arr[i])
//     }  
    
//     //return agearr   
// }
//age1(birth1)
//console.log(agearr)                                  // [ 21, 20, 19, 18, 17 ]

// using map method inside function

// function age1(arr){
//    let x = arr.map(function(el,ind,arr){
//         return 2021 - el
//     })
//     agearr.push(x)
//     agearr2.push(x)
   
// }
// age1(birth2)                                        
// console.log(agearr)                                  // [ 21, 20, 19, 18, 17, 26, 25, 24, 23, 22 ]
// age1(birth1)
// console.log(agearr2)                                 // [ [ 26, 25, 24, 23, 22 ], [ 21, 20, 19, 18, 17 ] ]


// // find birth year increment in 10 year

// using for loop inside function

// let arr10 = [ ]
// function year10(arr){

//     for (let i = 0; i < arr.length; i++){

//        arr10.push(arr[i]+10)
//     }
// }
// year10(birth1)
// console.log(arr10)          // [ 2010, 2011, 2012, 2013, 2014 ]
// year10(birth2)

// // using map method

// let arr10 = [ ]
// function year10(arr){
//      let x = arr.map(function(el,ind,arr){
//          return el + 10
         
//      })
//      arr10.push(x)
// }
// year10(birth1)
// console.log(arr10)                        // [ [ 2010, 2011, 2012, 2013, 2014 ] ]



////////////////////////////////////////////////////////////////////////////////////////////////////


// let birthyear2 = [2000,1999,2008,2006,2009]
// let namess = ["swapnil","avi","vishvajit","krishna"]

// function printArray(arr,fn){
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++){
//         newArr.push(fn(arr[i]))
//     }
//     return newArr
// }
// let greeting = function(el){
//     return `welcome  ${el}!`
// }
// console.log(printArray(namess,greeting))


// let age = function (el){
//     return 2021 -el
// }
// let tenAge = function (el){
//     return el + 10
// }
// let fiveMinus = function (el){
//     return el - 5
// }
// let tenPerent = function(el){
//     return el * .10
// }

// printArray(birthyear2,age)
// printArray(birthyear2,tenAge)
// printArray(birthyear2,tenPerent)



///////////////////////////////////  LEXICAL SCOPE   /////////////////////////////////////////////////

// child function can access all thing(parameters/variables) which have parent function is called lexical scope

// function  addA(x,y){
//     console.log(x+y) // 25
//     let h = 100 
//     let v = 20 

//     //console.log(j+d)                   // cant we go revers

//     addB()                      // WE can call function decleration before and after where function write
//     function addB(){
//         let j = 10
//         let d = 20
//         console.log(h+v)     // 120
//         console.log(j+d)     // 30
    
//         function addC(){
//             console.log(h+v+j+d)    // 150 
//         }
//         addC()
//     }
// }

// addA(12,13)




// CLOSURES




















