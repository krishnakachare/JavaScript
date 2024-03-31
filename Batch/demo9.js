// For loop

// Arithematic operators -->  +, -, *, /, %,      ++, --
// ++ => increment
// -- => decrement

// let a = 10
// a++   //   11, 12, 13....
// a--   //   9, 8, 7....

// For condition check  we use comparision operators

// // For loop syntax

// for(keyword) (let initialization; conditionCheck; increment/Decrement ) {

// Statements

// } // block


// let a = "Ram"
// let b = ["Ram", 20, 8888888888]
// Array is a object


// for(keyword) (let initialization; conditionCheck; increment/Decrement ) {

// Statements

// } // block


// increment

// 1,2,3,4,5
// 5 < 5 (false)  // For loop execution will stop
// for (let i = 0; i < 5; i++) {
//     console.log(i)  // 0,1,2,3,4
// }

// for (let i = 1; i < 5; i++) {
//     console.log(i)  // 1,2,3,4
// }


// Decrement

// for(keyword) (let initialization; conditionCheck; increment/Decrement ) {
// Statements
// } // block
// 4
// 4 > 4
// for (let i = 5; i > 4; i--) {
//     console.log(i)  // 5
// }

// 0
// 0 > 0
// for (let i = 5; i > 0; i--) {
//     console.log(i)    // 5,4,3,2,1
// }

let a = "Ganesh"
//       012345

// console.log(a[2])  // n



// let array = ["Aniket", "Sagar", "Poonam", "Ganesh", "Nagendra", "Rushi"]
// //               0        1        2          3         4          5

// console.log(array.length)  // 6
// console.log(array[0]) // "Aniket"  
// console.log(array[1]) // "Sagar"
// console.log(array[2]) // "Poonam"
// console.log(array[3])  // "Ganesh"         


// for (let i = 0; i < array.length; i++) {
//     // console.log(i)                                     // 0,1,2,3,4,5
//     // console.log(array[i])   // 0, 1, 2, 3......
//     console.log(`Hi ${array[i]}, Good Morning...`)
// }

// Hi Aniket, Good Morning...
// Hi Sagar, Good Morning...
// Hi Poonam, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Rushi, Good Morning...



let array = ["Aniket", "Sagar", "Poonam", "Ganesh", "Nagendra", "Rushi"]
// 


// Hi Rushi, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Poonam, Good Morning...
// Hi Sagar, Good Morning...
// Hi Aniket, Good Morning...




// 6        // -6 <   // never false
// for (let i = array.length - 1; i >= 0; i--) {
//     //console.log(i)
//     console.log(`Hi ${array[i]}, Good Morning...`)
//     //console.log(Hi +array[i].length)

// }

// console.log(array[6])
// Hi Rushi, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Poonam, Good Morning...
// Hi Sagar, Good Morning...
// Hi Aniket, Good Morning...


// for (let i = array.length - 1; i >= 0; i--) {
//     //console.log(i)
//     //console.log(`Hi ${array[i]}, Good Morning...`)
//     console.log('Hi ' + array[i] + ', '+ 'Good Morning...')

// }
// Hi Rushi, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Poonam, Good Morning...
// Hi Sagar, Good Morning...
// Hi Aniket, Good Morning...

// break Statement

// for (let i = array.length - 1; i >= 0; i--) {
//     //console.log(i)
//     console.log('Hi ' + array[i] + ', ' + 'Good Morning...')
//     if (i == 4) {
//         break;
//     }
// }

// Hi Rushi, Good Morning...
// Hi Nagendra, Good Morning...


// continue Statement

// for (let i = array.length - 1; i >= 0; i--) {
//     //console.log(i)
//     if (i == 0) {
//         continue;
//     }
//     console.log('Hi ' + array[i] + ', ' + 'Good Morning...')
// }

// Hi Rushi, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Poonam, Good Morning...
// Hi Sagar, Good Morning...

for (let i = array.length - 1; i >= 0; i--) {
    console.log(i) // 5, 4, 3, 2, 1, 0
    if (i == 0 || i == array.length - 1) {
        continue;
    }
    console.log('Hi ' + array[i] + ', ' + 'Good Morning...')
}

// Hi Nagendra, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Poonam, Good Morning...
// Hi Sagar, Good Morning...