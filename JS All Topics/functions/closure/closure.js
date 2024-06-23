

//////////////////////////// Closure ///////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// Closure Scope Chain
// Every closure has three scopes:

// 1.Local Scope (Own scope)
// 2.Outer Functions Scope
// 3.Global Scope

//-----------------------------------------------------

// global scope
// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4)); // log 20
// You can also write without anonymous functions:
//=====================================================
// var e = 10;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// var sum2 = sum(1);
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
// console.log(result) //log 20

/////////////////////////////////////////////////////

// function add (x,y){
//     return function add1(){
//         console.log(x+y);
//         return function add2(){
//             console.log(x*y);
//             return function add3(){
//                 console.log(x-y);
                
//             }
//         }
//     }
// }
// let oo = add(133,144)
// //console.log(oo)
// oo()()()

///////////////////////////////

// function add(x, y) {
//     x + y;
//     "add"
//     console.log(x + y);
//     // console.log("add");
//     return function add1() {
//         x + y;
//         "add1"
//         console.log(x + y);
//         //console.log("add1");
//         return function add2() {
//             x * y;
//             "add2"
//             console.log(x * y);
//             //console.log("add2");
//             return function add3() {
//                 x - y;
//                 "add3"
//                 console.log(x - y);
//                // console.log("add3");
//             }
//         }
//     }
// }
//console.log(add)
// add(1, 1)
// console.log(add(1,1))
//add(1,1)()
// console.log(add(1,1)())
// add(1,1)()()
// console.log(add(1, 1)()())






