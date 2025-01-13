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




//EXAMPLE ---1.
// let str = 'AAAAAC2345@#$&6CCCDD%Z'
// let x = str.split('')
// //console.log(x)                              // // we can get results with or without
// let num = 0
// let special = 0
// let alpha = 0

// for (let i = 0; i < x.length; i++) {
//     if (Number(x[i])) {
//         num = num + 1
//     }
//     else if ((x[i] == '@') || (x[i] == '#') || (x[i] == '$') || (x[i] == '&') || (x[i] == '%')) {
//         special = special + 1
//     }
//     else { alpha = alpha + 1 }
// }
// console.log(num, special, alpha)


//EXAMPLE---2.
// let caa = "123AAAAbaca3435354@@2222!!!&&&&3534535354sca"
// let aa = 0
// let nn = 0
// let ss = 0
// for (let i = 0; i < caa.length; i++) {
//     if (Number(caa[i])) {
//         nn = nn + 1
//     }
//     else if ((caa[i] == '@') || (caa[i] == '!') || (caa[i] == '&') ) {
//         ss = ss + 1
//     }
//     else { aa = aa + 1 }
// }
// console.log(aa, nn, ss)  // 11 24 9