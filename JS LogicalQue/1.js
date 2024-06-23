// Q. We have to change in this no.  0-5, 1-9, 2-8, 3-7, 4-6 and vice versa
//-------------------------------------------------------------------------------------
// let strInput = "0123456789"
// //strOutput = '5987604321'
// let strOutput = ""

// for (let key of strInput) {
//     switch (key) {
//         case '0': case '5':
//             strOutput += key == '0' ? '5' : '0'
//             break;
//         case '1': case '9':
//             strOutput += key == '1' ? '9' : '1'
//             break;
//         case '2': case '8':
//             strOutput += key == '2' ? '8' : '2'
//             break;
//         case '3': case '7':
//             strOutput += key == '3' ? '7' : '3'
//             break;
//         case '4': case '6':
//             strOutput += key == '4' ? '6' : '4'
//     }
// }
// console.log(strOutput)   // 5987604321

//-----------------------------------------------------------------------------------
// let strInput = "0123456789"
// //strOutput = '5987604321'
// let strOutput = ""

// for (let key of strInput) {
//     key = Number(key)
//     if (key === 0 || key === 5) strOutput += key == 0 ? '5' : '0'
//     else if (key == 1 || key == 9) strOutput += key == 1 ? '9' : '1'
//     else if (key == 2 || key == 8) strOutput += key == 2 ? '8' : '2'
//     else if (key == 3 || key == 7) strOutput += key == 3 ? '7' : '3'
//     else if (key == 4 || key == 6) strOutput += key == 4 ? '6' : '4'
// }
// console.log(strOutput)   // 5987604321
//-----------------------------------------------------------------------------------------------

// let strInput = "0123456789" // "5987604321", "0123456789"
// //strOutput = '5987604321'
// let strOutput = ""

// for (let key of strInput) {
//     key = Number(key)
//     if (key === 0 || key === 5) strOutput += key == 0 ? '5' : '0'
//     else strOutput += 10 - key

// }
// console.log(strOutput)   // 5987604321 // "0123456789"


//////////////////////////////////////////////////////////////

// let abc = '0123456789'
// let pattern = ""
// for (let i = 0; i < abc.length; i++) {
//     if (abc[i] != 5 && abc[i] != 0) {
//         pattern = pattern + String(10 - Number(abc[i]))
//         //console.log(pattern)
//     }
//     else {
//         val =  Number(abc[i])=== 0?5:0
//         pattern = pattern + val
//     }

// }
// console.log(pattern)

//console.log("0" != 0, "0" !== 0)