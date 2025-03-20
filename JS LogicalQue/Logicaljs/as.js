// Reverse string:
// let str = "Krishna";
// let revStr = '';
// for (let i = 0; i < str.length; i++) {
//     revStr += str[i];
// }
// console.log(revStr)
//-------------------------------------------------

// Reverse only string words
// let str = "Hello! Hi, i am 'krishna'."
// let arr = str.split(" ");
// let revWordArr = [];
// for (let val of arr) {
//     reverseWords(val);
// };
// function reverseWords(word) {
//     let revWord = "";
//     for (let val of word) {
//         revWord = val + revWord
//     }
//     revWordArr.push(revWord);
// }
// console.log(revWordArr);
// let revWordStr = revWordArr.join();
// console.log(revWordStr);
//------------------------------------------------------------------

// check palindrome:
// let str = 1211; // 121, "madam", 1211
// let revStr = "";
// for (let i = 0; i < String(str).length; i++) {
//     revStr = str[i] + revStr;
// };
// let check = str == revStr ? `${str} is Palindrome` : `${str} is NOT Palindrome`;
// console.log(check);

//------------------------------------------------------------------
//Even/odd places value:
// let arr = [2, 8, 9, 1, 3, 7, 5, 4];
// let evenPlaceNoArr = [];
// let oddPlaceNoArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         // Even place numbers
//         evenPlaceNoArr.push(arr[i]);
//     } else {
//         // Odd place numbers
//         oddPlaceNoArr.push(arr[i]);
//     }
// }
// console.table(evenPlaceNoArr);
// console.table(oddPlaceNoArr);

//------------------------------------------------------------------
//Even/odd value:
// let arr = [2, 8, 9, 1, 3, 7, 5, 4];
// let evenArr = [];
// let oddArr = [];
// for (let ind in arr) {
//     (arr[ind] % 2) == 0 ? evenArr.push(arr[ind]) : oddArr.push(arr[ind]);
// }
// console.table(evenArr);
// console.table(oddArr);

//------------------------------------------------------------------
// Prime Number: A number that can be divided exactly only by itself and 1.
// The prime numbers list up to 100 is as follows:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let ind in arr) {
//     checkPrime(arr[ind]) ? console.log(`${arr[ind]} is a prime number`) : console.log(`${arr[ind]} is NOT a prime number`);
// };
// function checkPrime(no) {
//     if (no < 2) {
//         return false;
//     }
//     for (let i = 2; i < no; i++) {
//         if (no % i == 0) {
//             return false;
//         };
//     }
//     return true;
// };

//----------------------------------------------------------
// Find Max. Min values:
// let arr = [10, 2, 88, 32, 6, 42, 1, 22, 31, 51]
// let Max = 0;
// let Min = 32; // any random value from arr
// for (let val of arr) {
//     if (val > Max) {
//         Max = val;
//     };
//     if (val < Min) {
//         Min = val;
//     };
// };

//By Default methods:
// let sortArr = arr.sort((a, b) => a - b);
// Max = sortArr[sortArr.length - 1];
// Min = sortArr[0];
// console.log(Min, Max);


// find factorial

let no = 0;
let factorial = 1;
for (let i = 1; i <= no; i++) {
    factorial *= i
}
console.log(factorial)

function factorialFind(no) {
    // let factorial = 1;
    if (no == 0) {
        return 1
    } else if (no < 0) {
        return "No Factorial able to find"
    } else {
        return no * factorialFind(no - 1)
    }
}
console.log(factorialFind(-5))







let str = "shrikrishna kachare"
let carCount = {};

for (let val of str) {
    // console.log(carCount.hasOwnProperty(val))
    if (!carCount.hasOwnProperty(val)) {
        carCount[val] = 1
    } else {
        carCount[val] = carCount[val] + 1
    }
}
console.log(carCount);
//  { s: 2, h: 3, r: 3, i: 2, k: 2, n: 1, a: 3, ' ': 1, c: 1, e: 1 }