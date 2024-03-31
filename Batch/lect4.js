// loops in js -

// 1. for loop
// 2. while loop
// 3. do while loop

// 4. for in loop (Object)
// 5. forEach loop (Arry)


// 1. for loop
// syntax-

// let i = 0 ;

// for(keyword)(intialization/decleration; conditionCheck; increment/decrement){
// for loop statements

// } block

// EX. for loop
// increment ++

// for (let i = 0; i < 5; i++) {
//           console.log(i)
// }

// Decrement --

// for (let i = 5; i > 0; i--) {
//           console.log(i)
// }

// break in for loop
// break the loop of execution & exit from loop where break keyword hit in block of statement

// for (let i = 5; i > 0; i++) {
//           console.log(i)
//           if (i == 10) {
//                     break;
//           }
// }
// 5,6,7,8,9,10

// condition in ternery operator

// for (let i = 5; i > 0; i++) {
//           if (i == 10) {
//                     break;
//           }
//           console.log(i) // 5,6,7,8,9
//           // condition ? statement(true): statement(true)
//           // i == 10 ? break : null;   // break & continoue are not work in ternery opeator
// }

// continue in for loop
// skip that particular loop of execution & continue from next loop where continue keyword hit in block of statement

// for (let i = 0; i <= 10; i++) {
//          // console.log(i)
//           if (i == 5) {
//                     continue;
//           } 
//           console.log(i)    
// }

// using multiple contitions

// for (let i = 0; i <= 10; i++) {  // 5,6,7,8
//           // i = 0; , i = 1
//           // console.log(i)
//           // i = 5
//           // // And (&&) operator
//           // // true && false --> false && false --> false && false --> false
//           // if (i == 5 && i == 6 && i == 7 && i == 8) {
//           //           continue;
//           // }
//           // OR (||) operator : (false || false --> false)
//           // true || false --> true || false --> true || false --> true
//           if (i == 5 || i == 6 || i == 7 || i == 8) {
//                     continue;
//           }
//           console.log(i)
// }


// pickup even values
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         0  1  2  3  4  5  6  7  8   9   // index no.

// console.log(arr.length)
// console.log(arr[1])      // 2


// for (let i = 1; i <= 10; i++) {  // i >  -->greater than ,  i <  -->less than ,
//           if (i % 2 == 0) {           // 1 % 3 == 0
//                     //console.log(i)   /// Even no
//           } else {
//                     console.log(i)  // odd no
//           }
// }


// using continue

// for (let i = 1; i <= 10; i++) {  // i >  -->greater than ,  i <  -->less than ,
//           // if (i % 2 == 0) {  // 2 % 2 == 0
//           //           continue   // skip for even no
//           // } else {
//           //           console.log(i)  // odd no
//           // }

//           if (!(i % 2 == 0)) {
//                     continue  // skip odd no
//           }
//           console.log(i) // even no
// }



// 2. while loop

// syntax

// initialization/ declaration
// while(keyword)(conditionCheck){

// Statements
// increment/decrement

//} blocks


// Ex.

// let i = 0
// while (i <= 10) {
//           console.log(i)
//           i++         
// }

//
//

// 3. do while loop

// syntax

// initialization/ declaration
// do(keyword){
// Statements
// increment/decrement
//} while(keyword)(conditionCheck)

// Ex.

let i = 0
do {
          console.log(i)
          i++
} while (i <= 10)

//
//

