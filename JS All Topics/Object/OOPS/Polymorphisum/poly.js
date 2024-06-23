
// polymorphism 


// overloading- same class , same method name , different signature
// overriding - different class , same method name , same signature

// class World {

//     saving() {
//         console.log('saving method worldbank')
//     }

//     loan() {
//         console.log('loan method world bank')

//     }

//     bank() {
//         console.log('Not a cryto currency')
//     }

// }

// class SBI extends World {

//     saving() {
//         console.log('saving method sbi')
//     }

//     loan() {
//         console.log('loan method sbi')
//     }
//     sbi() {
//         console.log('old bank in india')
//     }

// }
// sbi = new SBI()

// sbi.saving()
// sbi.loan()
// sbi.bank()
// sbi.sbi()


// // overloading 

// class add {


//     add(a = undefined, b = undefined, c = undefined, d = undefined) {
//         if (a != undefined && b != undefined && c != undefined && d != undefined) {
//             console.log(a + b + c + d)
//         }
//         else if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         }
//         else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         }
//     }

// }

// let x = new add()

// x.add(12,23,34,56)
// x.add(12,34)
// x.add(12,13,14)




////----------------



// // overide and overload 
// // polymorphism





// // overload ---- same class same method different signature 
// // override -- different class (inheritance), same method name , same signature




// class OverloadingExample{   

//     constructor(){
//         console.log('Default construtor called')
//     }


//     add(a = undefined , b = undefined , c = undefined){

//         if(a != undefined && b !=undefined && c != undefined ){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b !=undefined  ){
//             console.log(a+b)
//         }
//         else{
//             console.log('Please input correct parameters ')
//         }

//     }

// }

// new OverloadingExample().add(12,23,34)
// new OverloadingExample().add(12,23)
// new OverloadingExample().add()



// var Person = class {


// }

// class Person{


// }


//  var s = null 
//  var f = " "
//  f.length

