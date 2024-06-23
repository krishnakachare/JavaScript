// //multiple occurance of index of method

// let kk = [1,1,2,2,2]
// //By default index of method find the first occurance of element and return its index no.

// let indexNo = kk.indexOf(1)
// console.log(indexNo)         // 0
// //----------------------------------------------------------
// // second occurence

// let indexNo = kk.indexOf(1,kk.indexOf(1)+1)
// console.log(indexNo)  // 1
// //----------------------------------------------------------
// // Third occurance

// let indexNo = kk.indexOf(1,kk.indexOf(1)+2)
// console.log(indexNo)  // -1

// let indexNo = kk.indexOf(2,kk.indexOf(2)+2)
// console.log(indexNo)  // 4


// let str = 'AABHTRRRDDCF'
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//         let kk = str.indexOf(str[i], str.indexOf(str[i]) + j)
//         if (kk != -1) {
//             if (str[i] == str[i + 1]) {
//                 console.log(str[i+1])
//                 //console.log(kk)
//             }
//         }
//     }
// }

//-----------------------------------------------------------------------------

// let string = 'ABHTRRRRDDDCF'
// let count = 1

// function check(str) {
//     count++     //2//3
//     let strReturn = "" //RRR//RR//R
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) strReturn += str[i]
//     }
//     if (strReturn.length !== 1) check(strReturn)
//     else if (strReturn.length == 1) console.log(strReturn.repeat(count))
// }

// check(string)



//-----------------------------------------------------------------------------------------------------




// let string = 'ABHTRRRRDDDDCF'
// let count = 1

// function check(str) {
//     count++//2//3
//     let strReturn = ""//RRR//RR//R
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) strReturn += str[i]
//     }
//     if (strReturn.length !== 2) check(strReturn)
//     else if (strReturn.length !== 1) check(strReturn)
//     else if (strReturn.length == 2) {
//         let a = strReturn.split("")[0].repeat(count)
//         let b = strReturn.split("")[1].repeat(count)
//         console.log(a, b)
//     }
//     else if (strReturn.length == 1) console.log(strReturn.repeat(count))
// }

// check(string)









//--------------------------------------------------------------------------


// let string = 'ABHTRRRRDDDDCF'
// let count = 1
// let countt = 1
// function check(str) {
//     count++//2//3
//     let strReturn = ""//RRRDDD//RRDD//RD
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {

//             strReturn += str[i]
//         }
//         else {
//             countt++
//             console.log(countt)
//             console.log(strReturn)
//             console.log(strReturn.length)
//             console.log(strReturn.length == count)


//         }
//         //countt = 0
//     }

//     console.log(typeof countt)
//     if (strReturn.length !== 2) {
//         check(strReturn)
//     } else {
//         console.log("Hi")
//         console.log(strReturn)
//         console.log(strReturn.length)
//     }



//     // else if (strReturn.length == 2) {
//     //     let a = strReturn.split("")[0].repeat(count)
//     //     let b = strReturn.split("")[1].repeat(count)
//     //     console.log(a, b)
//     // }
//     countt = 0
// }

// check(string)


//---------------------------------------------------------------------------------

// function returnBoolean(){

// }









// function check (k){

//     let kk = str.indexOf(k)

//     let subStr = str.slice(kk+1)
//     for (let i = 0; i < subStr.length; i++) {
//         let ind = subStr.indexOf(subStr[i])
//         if(ind==-1){

//         }
//     }
// }
//--------------------------------------------------------------------------------------------------------------------
// Qut. => Made function which take array and return boolean value false for -ve & true for +ve

// let arrQuetion = [1, 0, -6]

// function ans(arr) {
//     arr.filter(el => {
//         let kk = el >= 0 ? true : false
//         console.log(kk)
//     })
// }
// ans(arrQuetion)


//----------------------------------------------------------------------------------------------------------

// Qut. => Made function which take array of numbers as argument and return boolean value
//         The function returns true if there is atleast one duplicate number in the array else false

// let arrQuetion = [1, 2, 3, 2, 4]  // [1, 2, 3, 5, 4]

// function ans(arr) {
//     let Flag = false
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1))
//         if (arr.indexOf(arr[i], arr.indexOf(arr[i]) + 1) !== -1) {
//             Flag = true
//             break;
//         } else {
//             Flag = false
//         }
//     }
//     return Flag
// }
// console.log(ans(arrQuetion))



//==========================================================================================
// For loop
/* Quetion: - We have 11 no.in input like
       input: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110
       we need in output : 110, 10, 100, 20, 90, 30, 80, 40, 70, 50, 60 
*/

// let arrInput = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let arrOut = []

// let kk = (Math.ceil(arrInput.length / 2))

// for (let i = 0; i <= kk; i++) {
//     arrOut.push(arrInput.pop())
//     arrOut.push(arrInput[i])
// }



//------------------------------------
// while loop

/* Quetion: - We have 11 no.in input like
       input: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110
       we need in output : 110, 10, 100, 20, 90, 30, 80, 40, 70, 50, 60 
*/

// let arrInput = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]

// let arrOut = []

// let kk = (Math.ceil(arrInput.length / 2));

// let i = 0;
// while (i < kk) {
//     arrOut.push(arrInput.pop());
//     arrOut.push(arrInput[i]);
//     i++;
// }

// if (kk % 2 == 0) {
//     arrOut.pop();
//     console.log(arrOut);
// } else {
//     console.log(arrOut);
// }
// [110, 10, 100, 20, 90, 30, 80,  40, 70, 50, 60]
//=================================================================



for (let i = 0; i < 5; i++) {

    let a = 1;
    let b = 1;
    let flag = false;

    if (a == b) {
        console.log("Hi");
        //flag = true;
    } else if (true) {
        i = 5;
    }

    // if (flag) {
    //     i = 5;
    // }

    console.log(i);
}