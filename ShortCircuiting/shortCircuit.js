
// if (0) {
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if (null) {
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if (undefined) {
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// if (5<3) {
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

//if there is 0,null,undefined ,and condition false then it execute false condition

// if(1){
//     console.log('hello')
// }
// else{
//     console.log(3)
// }

// if (-1) {
//     console.log('hello')
// }
// else {
//     console.log(3)
// }

// if (true) {
//     console.log('hello')
// }
// else {
//     console.log(3)
// }

// if (false) {
//     console.log('hello')
// }
// else {
//     console.log(3)
// }

// if('a'){
//     console.log('hello')
// }
// else{
//     console.log(3)
// }

// if('#'){
//     console.log('hello')
// }
// else{
//     console.log(3)
// }


//Logical Operator
//1. And operator =>check all condition

//if we are use "and" operator and if any false condition came then value update with falsy value
// let u = 8 && false && 6 === 6 && 9
// console.log(u)
//===============================================================================================

//if we are use "and" operator and all conditions are true then value update with last value in condtion
// let u = 8 && true && 6 === 6 && 9
// console.log(u)
//==============================================================================================

// let u = 8 && 6!=='6' && 6 === 6 && 9
// console.log(u)//9
//==============================================================================================

//  '6' == 6  // true
//  '6' === 6 // false
//  '6' !== 6 // true
//=============================================================================================

// let u = 8 && 6!=='6' && 0 && 9
// console.log(u)//0
//==============================================================================================

//OR Operator
//if we are usin or operator and if any condition show thrue then ot update with true value
// let vv = 77 == 66 || 5 || false || true 
// console.log(vv)//5

//================================================================================================

// let tt = 77 == 66 || false || false||  undefined == undefined || true 
// console.log(tt)

//==================================================================================================

// let tt = 77 == 66 || false || false|| undefined  
// console.log(tt)

//====================================================================================================

// let rr = 77 == 66 || 7 !== 8 || true || false|| undefined  
// console.log(rr)
//===================================================================================================


//let tickets=prompt("How Many tickets You have")
// if(0){
//     console.log("correct Input")
// }
// else{
//     console.log("incorrect input")
// }//output is incorrect cause prompt mthod return string and 0 is in form of number

//====================================================================================================

// let tickets=Number(prompt("How Many tickets You have"))
// if(0){
//     console.log("correct Input")
// }
// else{
//     console.log("incorrect input")
// }//o/p is incorrect cause falsy value

//====================================================================================================

// let tickets=Number(prompt("How Many tickets You have"))
// if(tickets>=0){
//     console.log("correct Input")
// }
// else{
//     console.log("incorrect input")
// }

//=====================================================================================================

// let aa
// console.log(aa) //output undefined

//=====================================================================================================

//console.log(bb)  //output bb is not defined

//=====================================================================================================
//datatypes in js
//String,array,number,Boolean,objects,null,undefined,RegExp,function