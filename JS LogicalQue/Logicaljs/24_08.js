// Problem  = Seperate Alphabets,Numbers and Symbols(Special Chara) from given string
// Example 1.
// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let numbers = 0             
// let alpha = 0
// let specialChar = 0

// for (let i = 0; i < str.length; i++) {
//     //console.log((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z'))
// 	if (Number(str[i])) {
// 		numbers = numbers + 1;
// 	}
// 	else if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {     // its gives all alphabets in abcd order from a to z 
// 		alpha = alpha + 1;
// 	}
// 	else{
// 		specialChar = specialChar + 1;
// 	}
// }
// console.log(numbers, alpha, specialChar)      // 5 12 5


//////////////////////////////////////////CHINMAY SIR///////////////////////////////////////////////////////

// Example 2.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){

// 	if((caa[i].charCodeAt() >= 65 && caa[i].charCodeAt() <= 90) || (caa[i].charCodeAt() >= 97 && caa[i].charCodeAt() <= 122) ){
// 		a = a + 1
// 	}
// 	else if ((caa[i].charCodeAt() >= 48 && caa[i].charCodeAt() <= 57)) {
//          n = n + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9

//-----------------------------------------------------------------------------------------------------------
// Example 3.

// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let n = 0
// let a = 0
// let symbol = 0

// for(let i = 0; i < caa.length; i++){
// 	if(Number(caa[i])){
// 		n = n + 1
// 	}
// 	else if ((caa[i] >= 'A' && caa[i] <= 'Z') || (caa[i] >= 'a' && caa[i] <= 'z')) {
// 		a = a + 1
// 	}
// 	else{
// 		symbol = symbol + 1
// 	}                                   // rather than alphabets (upper and lower),numbers all are here (all symboles/special char,space,del)
// }
// console.log(n,a,symbol)                    // 24 11 9


//-----------------------------------------------------------------------------------------------------------


// Prob = seperate the numbers and strings from given array

// FIRST APPROACH

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// for (let i = 0; i < arr.length; i++){

//     if(typeof(arr[i]) == 'number'){
//         number.push(arr[i])
//     }
//     else{
//         char.push(arr[i])
//     }
// }
// console.log(number)      // [ -6, 2, 0, 22, 78 ]
// console.log(char)        // [ 'krishna', 'swapnil', 'vishwajit' ]
// console.log(number.concat(char))     // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]
//------------------------------------------------------------------------------------------------------------
//SECOND APPROACH ( USING FOREACH METHOD)

// let arr = [-6, 'krishna', 2, 'swapnil', 0, 'vishwajit',22,78]
// let number = [];
// let char = [];

// arr.forEach(arr => {
//   if (typeof arr == 'number'){
//     number.push(arr);
//   } 
//   else {
//     char.push(arr);
//   }
// })
// let sortedNum = number.concat(char);
// console.log(sortedNum)                      // [ -6, 2, 0, 22, 78, 'krishna', 'swapnil', 'vishwajit' ]

//---------------------------------------------------------------------------------------------------------------

//********************************************  REGULAR EXPRESSION  *************************************************/
// Q. seperate small and capital characters

// Example1. 
// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"
// let C  = str.match(/[A-Z]/g).join("")                    // [\w] we can use
// let L = str.match(/[a-z]/g).join("")

// console.log(`Original string = ${str}`)     // Original string = QFGZHhghjgjhghjgQFdghfhjgjgj
// console.log(`Capital Letters = ${C}`)      // Capital Letters = QFGZHQF
// console.log(`Lower Letters = ${L}`)       // Lower Letters = hghjgjhghjgdghfhjgjgj

//--------------------------------------------------------------------------------------------------
// Q. seperate capital letters

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
// let regex =  /[A-Z]/
// let bigavi = str.split('').filter(function(el,index,arrey){
//     if(regex.test(el)){
//          return true
//     }
// })
//  console.log(bigavi.join(''))                                        // QFGZHQF
//-----------------------------------------------------------------------------------------

//  let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"  
//   let regex =  /[A-Z]/m
//   let smallstr = "" 
//   let capstr = ""
// for(let i = 0; i< str.length; i++){
//     if(regex.test(str[i])){
//         capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i] 
//     }
// }
// console.log(smallstr)     // hghjgjhghjgdghfhjgjgj
// console.log(capstr)      // QFGZHQF

//-----------------------------------------------------------------------------------------

// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj" 
// let capstr = ""
// let smallstr = ""
// for(let i = 0; i<str.length; i++){
//     if(str[i] >= 'A' && str[i] <= 'Z' ){
//     capstr = capstr + str[i]
//     }
//     else{
//         smallstr = smallstr + str[i]
//     }
// } 
// console.log(capstr)     // QFGZHQF
// console.log(smallstr)   // hghjgjhghjgdghfhjgjgj

//=====================================================================================================
// rest operator

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function print(...a) {
//    let sum = 0
//     a.map((el, i) => {
//         if(i >= 2 && i <= a.length - 4 ){
//             sum = sum + el
//         }
//     })
//     return sum
// }
// let s = print(...abc)
// console.log(s)         // 25

//================================================================================================================

// NOTE = By using destructuring  we can access STARTING, MIDDLE (anywhere) , LAST values of array and also object

// let abc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [a,b,c,d,e] = abc.slice(3,8)
// let xyz = [a,b,c,d,e].reduce((acc,el)=>{
//     return acc + el
// })
// console.log(xyz)     // 30

// we can change slice parameters by our requirement to get array elements

//====================================================================================================================

//Q. count elements
// let str = '123456789'
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     count = i + 1
// }
// console.log(count)      // 9

//=========================================================================================================

// sort method working
// let ja = [12,33,133,133,1333]
// console.log(ja.sort())          // [ 12, 133, 133, 1333, 33 ]

// let kk = 'Krishna'
// console.log(kk.split('').sort().join(''))   // Kahinrs          its gives capital first
// kk = 'krishna'
// console.log(kk.split('').sort().join(''))    // ahiknrs

//=================================================================================================================


// find age
// Using for loop

// let birthYear = [1990,1989,2001]
// let ages = []
// for(let i = 0 ; i < birthYear.length ; i++){
//     let age = 2021 - birthYear[i]  
//     ages.push(age)
// }
// console.log(ages)         // [ 31, 32, 20 ]
//-------------------------------------------------------------
// //Using Method
// let xx = birthYear.map(function(el,index,arr){
//     console.log(el,index,arr)
//     return 2021-el
// })
// console.log(xx) 

//===================================================================================

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0; i<arr.length; i++){
//     //  let  a = setTimeout(i)
//      console.log(setTimeout(),[i])
//      console.log(setTimeout(),arr[i])
// }

// =============================================================================

// code for ascending and descending orders include negative no.

// let arr = [1, 6, 3, -3, 1, 2, 0]
// console.log(arr.sort())   
// console.log(arr.reverse()) 

// function order(...arr) {
//     console.log(arr.sort())
//     console.log(arr.reverse())

// }
// order(1, 6, 3, -3, 1, 2, 0)



// let a = arr.sort((a, b) => {
//     return a - b

//     //console.log(a,b)
// })

// console.log(a)

//==============================================================================

// Find Max. and Min. value 

// let arr = [88, 94, 1, 100, 2, 0, -22, -3, 101]
// arr.sort((a, b) => a - b)
// console.log(`Min.value ${arr[0]}`)
// console.log(`Max.value ${arr[arr.length - 1]}`)
//  console.log(arr)
// console.log(Math.max.apply(null, arr))  // 101
// console.log(Math.min.apply(null, arr))  // -22

//======================================================================================

// find PRIME NO.




//==================================================================================================


// let arr = ["9,999", "8,999", "8,999", "1,399", "9,999", "9,499", "6,999", "749", "6,999", "7,799", "7,799", "1,099", "7,799", "9,999", "8,049", "1,099", "9,999", "8,049", "6,999", "999", "6,999", "7,999", "7,799", "749"]


// for (let j = 0; j < arr.length; j++) {
//     let str = ''
//     for (let i = 0; i < arr[j].length; i++) {
//         if (arr[j][i] == ',') {
//         } else {
//             str = (str) + arr[j][i]
//         }
//     }
//     arr[j] = Number(str)
// }
// console.log(arr)

//--------------------------------------------------
// let arr = ['hh', 'kk']
// arr[0] = 1
// console.log(arr)        // [ 1, 'kk' ]

//----------------------------------------------------------------------

// let arr = ['krishna']
// console.log(arr[0][1])  // r

//-------------------------------------------------------------------------------

// let c = 2
// console.log(typeof (c))          // number
// console.log(typeof(String(c)))   // string
// console.log(typeof (c))          //  number         // original data not updated

//--------------------------------------------------------------------------------------------