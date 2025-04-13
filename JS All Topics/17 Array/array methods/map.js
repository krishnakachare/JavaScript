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

