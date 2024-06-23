// // 1. reverse  string

// let myname = 'krishna'

// let reversedstring = ''
// for (let i = myname.length-1; i >= 0; i--){
//     //reversedstring = myname[i] + reversedstring    //  krishna
//     //reversedstring = reversedstring + myname[i]       // anhsirk       ( when intilization from last of string element)
// }
// console.log(reversedstring)

//--------------------------------------------------------------------------------------------------------------

// // 2. count vowels(a,e,i,o,u) in above string

// let count = 0
// for (let i = 0; i < myname.length; i++){
//     if(myname[i]== 'a' || myname[i]== 'e' || myname[i]== 'i' || myname[i]== 'o' || myname[i]== 'u' )
//     { count = count + 1 }
// }
// console.log(count)          //   2

//-----------------------------------------------------------------------------------------------------------------

//      Capital only first letter  in string

//1. one word

// let kk ='krishna'

// let KK = kk[0].toUpperCase() + kk.slice(1)
// console.log(KK)                                    // Krishna

// let KK2=' '
// for(let i = 0; i < kk.length; i++){

//     if(i === 0){
//       KK2 = KK2 + kk[i].toUpperCase()
//       console.log(kk[i])                     // K
//     }
//     else{
//         KK2 = KK2 + kk[i]
//     }
// }
// console.log(KK2)                  // Krishna

//-------------------------------------------------------------------------------------------
//2.LOGICAL -- convert to upper case of each word first letter in given sentence

// let sentence = 'my good name is krishna.'
// let arr = sentence.split(' ')
// //console.log(arr)                     
// let x = [ ]
// function cal(zz){
//     let sentence2 = ' '
//     for (let i = 0; i < zz.length; i++){

//         if(i == 0){
//            sentence2 = sentence2 + zz[i].toUpperCase()
//         }
//         else{
//             sentence2 = sentence2 + zz[i]
//         }
//     }
//         return sentence2
// }

// for (let i = 0; i < arr.length; i++){
//     x.push(cal(arr[i]))
// }

// let y = x.join(' ')
// console.log(y)                    //  My  Good  Name  Is  Krishna.


//-----------------------------------------------------------------------------------------------------------

// Find what type of error are occured (Pratiksha raut interv que )

// var v1 = 10
// let v2;
// function pr(){
//     console.log(v1);     // 10
//     console.log(v2);    //  undefined
// }
// pr()
// console.log(window.write)    //undefined
// console.log(window.v1)      // 10
// console.log(window.v2)      // undefined

// console.log(v1)         // 10
// console.log(v2)        /// undefined

// ------------------------------------------------------------------------------------------------------------

//================================================================================================
// Q. given email first letter convert upper case and only give before @ string ( its related to nikhil project)

// let email = "krishnakachare2@gmail.com"
// let ne =" "
// let r = /[\w]/
// let con = true
// for(let i=0; i<email.length; i++){
// if(con){
//     if(i==0){
//         ne = ne + email[i].toUpperCase()
//     }else if(r.test(email[i])){
//         ne = ne + email[i]
//     }else{
//         con = false
//     }
// }   
// }
// console.log(ne)  //  Krishnakachare2
//========================================================================================================

// Q. change date format

// let date = '27/09/2021'
// let arr = date.split('/')
// let requiredDate = arr.reverse().join('-')
// console.log(requiredDate)  // 2021-09-27
// //OR
// let requireddate = date.split('/').reverse().join('-')
// console.log(requireddate) // 2021-09-27


//==========================================================================

// Q. collect even PLACE numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenPlace = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((i%2 == 0)){
//         evenPlace.push(arr[i])
//     }
// }
// console.log(evenPlace)         // [ 1, 3, 5, 7, 9 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((ind%2) == 0){
//         evenPlace.push(el)
//     }
// })
// console.log(evenPlace)       // [ 1, 3, 5, 7, 9 ]

//=======================================================================================================

// Q. collect even  numbers

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let evenNo = [ ]
//--------------------------------------------------------------------------
// By for loop

// for(let i =0; i < arr.length; i++){

//     if((arr[i]%2 == 0)){
//         evenNo.push(arr[i])
//     }
// }
// console.log(evenNo)        // [ 2, 4, 6, 8, 10 ]
//------------------------------------------------------------------
// By Using Method

// arr.filter((el,ind,arr)=>{
//     if((el%2) == 0){
//         evenNo.push(el)
//     }
// })
// console.log(evenNo)     // [ 2, 4, 6, 8, 10 ]


//===========================================================================================================
// problem ----------
// // separate out the even and odd numbers from the arrey

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let evenarr = []
// let oddarr = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenarr.push(arr[i])
//   }
//   else {
//     oddarr.push(arr[i])
//     // console.log(arr[i])

//   }
// }

// console.log(evenarr)     //[ 2, 4, 6, 8, 10 ]
// console.log(oddarr)   // [ 1, 3, 5, 7, 9 ]

//----------------------------------------------------------------------------------------------

// problem ------------
// separate out  alphabets and numbers 

// let sss = ['a',2,'d',6,'y','j',8,55,'e','k']

// let alphaarr = []
// let numarr = []

// for(let i=0; i<sss.length; i++){
//   if(sss[i] === Number(sss[i])){

//     numarr.push(sss[i])
//   }
//   else{
//     alphaarr.push(sss[i])
//   }
// }
// console.log(alphaarr)  // [ 'a', 'd', 'y', 'j', 'e', 'k' ]  
// console.log(numarr)   // [ 2, 6, 8, 55 ]

// -------------------------------------------------------

// problem----------------

// use of  Number() method

// let dd = 'h'
// console.log(Number(dd))  // NaN

// let hh = '5'
// console.log(Number(hh))   // 5

// let  jj = 5
// console.log(Number(jj))   // 5

//=======================================================================================================

// problem ------------

// find the length of the number

// let kk = 1234568836892

// console.log(String(kk).length)   // 13

//========================================================================================================

// problem ------------
// count the characters from given string

// Using method
// let n = 'swapnil'
// console.log(n.length) // 7
//-------------------------------------
// For loop
//  let count = 0                    
// for(let i= 0; i<n.length; i++){
// count = 1 + i
// }
// console.log(count)   // 7

//===========================================================================



// let email = 'krishnakachare2@gmail.com'
// let nam = 'krishna kachare'
// //email =email.split('')
// let req = ''

//     for (let j = 0; j < nam.length; j++) {
//         if (email.includes(nam[j]) ) {
//             req = req + nam[j]
//         }
//     }

// console.log(req)



//==============================================================


// let email = 'krishnakachare2@gmail.com'
// let nam = 'krishna'
// let req = ''
// for (let j = 0; j < nam.length; j++) {
//     for (let i = 0; i < email.length; i++) {
//         if ((nam[j]) !== email[i]) {
//             break;
//         }
//     }
//     req = req + nam[j]
// }
// console.log(req)



//=============================================================================================


// let email = 'krishnakachare2@gmail.com'
// let nam = 'krishna'
// let req = ''
// for (let j = 0; j < email.length; j++) {
//     for (let i = 0; i < nam.length; i++) {
//         if ((nam[j]) == email[i]) {
//             req = req + nam[j]
//         }
//     }

// }
// console.log(req)

//========================================================================================================

// // How we recive multiple user inputs

// let arr = []
// let i = 0
// while (i <= 3) {
//     i++
//     let userIn = prompt('Enter Input')
//     if (Number(userIn)) {
//         let n = Number(userIn)
//         arr.push(n)
//         console.log(typeof (n))
//         //console.log(arr)
//     } else {
//         arr.push(userIn)
//         // console.log(typeof (userIn))
//         //console.log(arr)
//     }
//     console.log(arr)
// }
// //console.log(arr)

//=============================================================================================================



//==================================================


// let a = [4, 56, 8, 9, 6, 6, 7]

// let max = 0
// let min = 8

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > max) {
//         max = a[i]
//     }
//      if (a[i] < min) {
//         min = a[i]
//     }
// }
// console.log(max)    // 56
// console.log(min)    // 4


//=======================================================

// find prime numbers of given range like[ 0 to 10]
// let arr = []
// let i = 0
// while (i <= 10) {    // can change your range
//     prime(i)
//     i++
// }
// console.log(arr)
// function prime(n) {
//     if (n < 2) return false             // particular condition return false that condition its ignore(skip) and other code will be run
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     arr.push(n)         // after the filtter  its give specific code
// }

//----------------------------------------------------------------------------------------

// // Find prime numbers of given range like [ 0 to 10]

// let arr = []
// function prime(n) {
//     if (n < 2) return false             
//     for (let j = 2; j < n; j++) {
//         if (n % j === 0) {
//             return false
//         }
//     }
//     arr.push(n)         
// }

// let i = 0
// while (i <= 10) {    
//     prime(i)
//     i++
// }
//  console.log(arr)   // [ 2, 3, 5, 7 ]

//--------------------------------------------------------------------------

// let count = 0

// for (let j = 2; j <= 10; j++) {
//     //console.log(j)    // 2 
//     for (let i = 1; i <= j; i++) {   // 1 2
//        // console.log(i)
//         if (j % i == 0)
//             count++
//     }
//     if (count == 2)
//         console.log(j)  // 2 3
//         count = 0
// }
//=========================================================================

// let ra = 10

// function prime() {
// for (let i = 2; i < ra; i++) {

//     for (let j = 1; j <= i; j++) {

//        if(j%2 == 0){
//         console.log(j)

//        }



//     }
// }

// let count = 0
// for (let i = 2; i < 10; i++) {
//     // console.log(i)
//     for (let j = 1; j <= i; j++) {

//         if (i % j == 0) {

//             count++
//         }

//     }
//     if (count == 2) {
//         console.log(i)
//         count = 0
//     }
//     //console.log(count)
// }

// for (let j = 1; j <= i; j++) {

//    if(j%2 == 0){
//     console.log(j)

//    }
// }
// }
// prime()
//============================================================================icici 18601207777
// let count = 0
// for (let i = 2; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
//     if (count == 2) {
//         console.log(i)
//     }
//     count = 0
// }


//=======================================================





























//=====================================================================


// let str = "Status of Order Detail ID: 93344 has been changed to Return Requested;ProductID: 142063;New Possible Status are: [];Order Status: ReturnRequested;REASON GIVEN: NO REASON;PreviousStatusID:6;NewStatusID:13;"
// let req = ''
// let flag = true
// for (let i = 0; i < str.length; i++) {
//     if (flag) {
//         if (str[i] == ':') {
//             flag = false
//         }
//         req = req + str[i].bold()
//     }
//     else {
//         if (str[i] == ';') {
//             flag = true
//         }
//         req = req + str[i]
//     }
// }
// //console.log(req)
// document.write(req)
// //document.write(str)

//========================================================================================================



