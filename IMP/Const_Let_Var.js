// object have properties and methods
// we feach values from object dot and bracket notation
// functions called inside object methods()

// we have 1) function deleration 
// function decl(para){
// }

// 2) function expression 
// let kk = function(para){
// }

// 3) arrow function
// let kk = ()=>{
// }

// This = current calling object (see which object called this method() that perticular method called)




//##########//////////////// CONST //////////////// LET //////////////// VAR //////////////////////////////########################

// NOTE

// check the code sequence when function call and values updates in globaly defined variables
// variables defined with let and const have block scope when its defined in the block BUT its defined globaly we can access in it block
// var not a block scope it have function scope
// when two times of variables are defined inside and outside of block with let or const its made two different memories
// variables defined with var two times inside and outside of function have two different memories

// let and const are block scoped (when its defined inside block) and var is a function scope




//******************************************************************************************************************/

// LET = We can be  reassign value to the variable when it defined to let     { it have scope upto blocks } { when its defined globaly then its global is a one bracket and it have upto globaly scope}


// # check sequence of coading

// let l = 10
// function add(){
//     l = 30
//     console.log(l) // 30
//     l = 40
//     console.log(l) // 40     // x updated
// }
// console.log(l) // 10            // its gives globaly defined value before the function calling
// add()
// console.log(l)  // 40   // after function calling x value updated   ( remember and check coding running flow (steps))

//=================================================================================================================
// # variables defined with let keyword is blocked scope when its defined inside blocks but its defined outside of block it accsses inside of block

// let l = 3
// console.log(l) // 3
// {
//    console.log(l)  // 3    { accsses in block bcoz l defined globaly}
// }

//--------------------------------------------------------------------------------------------------------------

// {
//     let l = 3
//    console.log(l)  // 3  (only acsses inside of blocks)
// }
// console.log(l) // l is not defined    { l defined keyword let not acsses outside of block }

//==================================================================================================================

// # TWO TIMES same variables defined with let inside and outside of block have two different storage memories

// let l = 10
// console.log(l)  // 10
// {
//     let l = 20
//     console.log(l)  // 20
// }
// console.log(l)  // 10











///********************************************************************************************************************/

// CONST = We cant reassign value to the variable when it defined to const    { it have scope upto blocks }

// # variables defined with const keyword its have upto block scope WHEN its defined inside of block  BUT globaly scoped variables can access inside the block

// const c = 12
// console.log(c)       // 12
// {
//     console.log(c)   // 12   (can accsses becoz c defined globaly not a block)
// }

//--------------------------------------------------------------------------------------------

// {
//     const c = 12
//     console.log(c)   // 12   (can accsses becoz c defined in block)
// }

// console.log(c)       // c is not defined      (cant accsses becoz c defined in a block and const have block scope)

//======================================================================================================================

// # TWO TIMES same variables defined with const inside and outside of block have two different storage memories

// const l = 10
// console.log(l)  // 10
// {
//     const l = 20
//     console.log(l)  // 20
// }
// console.log(l)  // 10







//******************************************************************************************************************* */

// VAR =

// have function scope 
// { its have scope outside of block (DOESNT MATTER ITS DEFINED INSIDE OR OUTSIDE OF BLOCK) }


// var have scope outsides of blocks

// var x = 10
// console.log(x)   // 10
// {
//     console.log(x)  // 10       can acsses in block also
// }

//---------------------------------------------------------------

// {
//     var x = 10
//     console.log(x)  // 10       can acsses in block also
// }
// console.log(x)   // 10

//====================================================================================================================

// # variables defined with var two times inside and ouside of function have two different memories

// var v = 10
// function add(){
//     var v = 30
//     console.log(v)  // 30     ( memory 1 )
// }
// console.log(v)  // 10
// add()
// console.log(v) // 10       ( memory 2 )    ( two times var defined variables inside and outside function )

//--------------------------------------------------------

// var v = 10
// function add(){
//      v = 30
//     console.log(v)  // 30
// }
// console.log(v)  // 10
// add()
// console.log(v) // 30   ( ony value upadeted becoz not two memories)





// comman example

// let x = 10
// var z = 20
// function call(){

//     let x = 30
//     z = 40
//     console.log(z)  // 40
//     {
//         let x = 35
//         console.log(x)   // 35
//     }
//     x = 5
//     {
//         console.log(x)  // 5
//     }
// }
// console.log(x)  // 10
// console.log(z)  // 20
// call()
// console.log(x)  // 10
// console.log(z)  // 40


//=============================================================================================================
// we cant redecleared variables using let keyword
// let a = 10
// let a = 15
// console.log(a)    // SyntaxError: Identifier 'a' has already been declared



// we can redecleared variables using var keyword and its gives updated value
// var a = 10
// var a = 15

// console.log(a)  // 15

//=================================================================================================================

// let num = 123
// console.log(typeof(num))  // number
// let str = String(num)     // 123
// console.log(typeof(str))  // string


let str = '123'
console.log(typeof(str))    // string
let num = Number(str)
console.log(typeof(num))    // number











































// let x  = 10

// function add(){
//     x = 30
//     console.log(x) //30
//     x = 40
//     console.log(x) // 40
// }
// add()
// console.log(x)



// difference between let , const ,var

// var x = 10 
// console.log(x)
// {
//     console.log(x)
// }

// program 2
// {
//     var x = 10 
//     console.log(x)  // 10
// }
// console.log(x) //10

// program 3
// variable defined with let keyword is blocked scope
// {
//     let x = 10 
//     console.log(x)
// }
// console.log(x)


// program 4
// {
//     const x = 10 
//     console.log(x)
// }
// console.log(x)

// let and const are blocked scope and var is function scoped
//  let d = 10
// {
//     d = 30
//     console.log(d) // 30
// }
// console.log(d) // 30

//  program 5
// let d = 10
// {
//     let d = 30
//     console.log(d)  //30
// }
// console.log(d)  // 10

// program  6
// const r = 50;
// {
//     const r = 10 
//     console.log(r)
// }
// console.log(r)
//---------------------------->


// program 6
// var f = 10
// function add() {
//     var f = 30
//     console.log(f) // 30
// }
// console.log(f) // 10
// add()

// ----------

// program 6
// var f = 10
// function add(){
//      f = 30
//     console.log(f) // 30
// }
// console.log(f) // 10
// add()

// program 7
// let d = 400
// var f = 10
// function add() {
//     let d = 30
//     f = 30
//     console.log(f) // 30
//     {
//         let d = 45
//         console.log(d) // 45
//     }
//     d = 70
//     {
//         console.log(d) // 70
//     }
// }
// console.log(f) // 10
// add()
// console.log(d)//400