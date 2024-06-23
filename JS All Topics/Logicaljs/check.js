// we required to convert all arrays values in absulute when we required total of array
// Example = 

// let a = [-100, -100, 100, 500]

// let x = a.reduce(function (acc, el) {

//     // return acc + el                           // 400
//     // return acc + Math.abs(el)                 // 600
//     return Math.abs(acc) + Math.abs(el)          // 800

// },0)

// console.log(x)

//********************************************************************************************* */


// let strarr = [ 'hi','krishna']
// //console.log(strarr.length)        // 2

// for(let i = 0; i < strarr.length; i++){

//     console.log(strarr[i].length)          // 2    7   

// }

//******************************************************************************************************************

// let a = 10
// let b = 10
// console.log(a > b)        // TRUE

//**********************************************************************************************/

// // user defined function  and  inbuilt functions


// let q = console.log('hello')               //  hello       
// console.log(q)                        //  Undefined              (NOT RETURN ANYTHING)

// =========================================================================================================================


// let k = 'krishna'
// let kk
// console.log(kk)
// kk = 10
// console.log(kk)


// let a = 'sanchita is good girl ?'
// let count = ''
// for (let i = 0; i < a.length; i++) {
//     if (a[i] == ' ') {
//         continue;
//     }
//     count++
// }
// console.log(count)


// let a = 'sanchita is good girl ?'
// console.log(a.split(' ').length)
// let count = 0
// for (let i = 0; i < a.length; i++) {
//     if (a[i]!==' ') {
//         count++
//     }

// }
// console.log(count)


// let a = 'sanchita is good girl ?'
// let count = 1
// for (let i = 0; i < a.length; i++) {
//     if (a[i] ==' ') {
//         count++
//     }
// }
// console.log(count)


// max. two no. from array
// let a = [1, 5, 4, 22, 66, 33, 12, 4, 8, 9]
// let lst = 0
// let lst1 = 0
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > lst) {
//         lst = a[i]
//         continue;
//     }
//     if (a[i] > lst1) {
//         lst1 = a[i]
//     }
// }
// console.log(lst)
// console.log(lst1)


// let a = [1, 5, 4, 22, 66, 33, 75, 12, 4, 8, 99]
// let arr = []
// let lst = 0
// let lst1 = 0
// for (let i = 0; i < a.length; i++) {
//     arr.push(a[i])
//     for (let i = 0; i < arr.length; i++) {

//         if (a[i] > lst) {
//             lst = a[i]
//             continue;
//         }
//         if (a[i] > lst1) {
//             lst1 = a[i]
//         }

//     }

// }
// console.log(lst)
// console.log(lst1)




// let s = "4a3b2c"

// console.log(s)

// console.log("---------------------------")

// let aa = []
// let a
// let b
// let c

// let a2 = []
// let b2 = []
// let c2 = []


// // sepret the string

// for (let i = 0; i < s.length; i++) {
//     aa.push(s[i])
// }

// console.log(aa)

// console.log("---------------------------")

// // converting string into Number

// a = Number(aa[0])
// b = Number(aa[2])
// c = Number(aa[4])

// a1 = aa[1]
// b1 = aa[3]
// c1 = aa[5]

// //  multiply the word with number

// for (i = 0; i < a.valueOf(a.length); i++) {
//     a2.push(a1)
// }
// for (i = 0; i < b.valueOf(b.length); i++) {
//     b2.push(b1)
// }
// for (i = 0; i < c.valueOf(c.length); i++) {
//     c2.push(c1)
// }
// let j=a2.concat(b2)
//  j=j.concat(c2)

//  console.log(j.join("")) // aaaabbbcc

//==============================================================================
// expanding the string
// function exp(s) {
//     let n = 0
//     let expStr = ''
//     for (let i = 0; i < s.length; i++) {
//         if (Number(s[i])) {
//             n += s[i]
//             continue;
//         } else {
//             expStr += s[i].repeat(n)
//             n = 0
//         }
//     }
//     return expStr
// }
// console.log(exp("4a3b2c"))   // aaaabbbcc


//================================================================================================

// console.log(/^Fruits/.test('All Fruits'))


//===============================================================================

// console.log(Boolean.parseBoolean('true'))
// console.log(true == 'true')
// console.log(`${true}` == 'true')
// console.log(`${true}` === 'true')
// console.log(typeof ('true'))
// console.log(typeof (`${true}`))

// let flag = true

// console.log(flag == 'true')
// console.log(flag === 'true')
// console.log(`${flag}` == 'true')
// console.log(`${flag}` === 'true')

// console.log(flag, typeof (flag))
// let flag2 = `${flag}`
// console.log(flag2, typeof (flag2))

// let object = { n: 'kk' }
// let strObj = "{ n: 'kk' }"

// Regular Object (or also same with JSON)

// let object = { names: 'kk' }
// let strObj = "{ names: 'kk' }"

// let kk = `${object}`
// console.log(`${object}`)    // [object Object]
// console.log(kk)             // [object Object]
// console.log(typeof (kk))       // string
// console.log(typeof (object))   // object
// console.log(typeof (strObj))   // string

// console.log(kk == strObj)    // false
// console.log(kk === strObj)   // false


// let val = undefined
// let inp = typeof (null)
// console.log(typeof (`${undefined}`))
// console.log(inp === typeof (null))


// let val = undefined
// switch (val) {
//     case undefined: console.log('hi')
// }

// val = 'object'
// console.log(val)

// console.log(typeof (undefined) == undefined)   // false



// let val = 'hi'
// switch (val) {
//     case 'kk' || 'hi': console.log('hi')
// }

//---------------------------------------------

// let str = 'kk'
// console.log(typeof(typeof(str)))





// let kk =  ''  //{n:'kk'}


// if(kk){
//     console.log('true')
// }else{
//     console.log('false')
// }

//----------------------------------------------------------------------------------

// let names = 'Sanchita Dhole'
// console.log(names.split(" ").reverse().join("   "))      // Dhole Sanchita

//-------------------------------------------------------------------------------------------------

// function add() {

//     a = 3
//     console.log(a)
// }

// add()
// console.log(add())
// {
//     a = 3
//     console.log(a)
// }
// Note = we can declear variable inside the function and also inside the block without using any keyword for the variable decleration
// whenever variables defined with let, const, var and any method/function directly call then its altimatly call/defined on super object/WINDOW

//------------------------------------------------------------------------------------------------------------------
// var a
// var n = 10

// let win = {
//     n: 'kk',
//     vsc: {
//         na: a,
//         n:3,
//         method:()=> {
//             console.log(this.n)
//         }
//     }
// }
// a = win.n
// console.log(win.vsc.na)   // undefined
// win.vsc.method()


// Note = we cant access big object values in inside of its small object coz of in small object that properties not defined
// note = Directly use arrow function we have a global scope wheter we have inside of small object
//----------------------------------------------------------------------






// setInterval(function krish(){
//     console.log(2 + 3); 
// }, 3000)



// setTimeout(
//    function(){
//        console.log(23)
//    } , 5000
// )

// let a = 10
// let str = `my age is`
// console.log(typeof (str))   // string

// str = `my age is ${a}`    
// console.log(str)               // my age is 10
// console.log(typeof (str))     //  string

/* NOTE = 
1) Single/Double quotes and back ticks returns "string" datatype.
2) In back ticks we have advantage we can use variable value directly by using "PLACE HOLDER".
3) Have any variable value (Datatype) like Object (RegEx).....
*/
////////////////////////////////////////////////////////////////////////////















