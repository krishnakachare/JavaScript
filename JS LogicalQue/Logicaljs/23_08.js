// Problem = concate subarray in array (remove sub array and made one)

// let arr = [ [20,30],[40,50,60],[70,80,90]]
// let array = [ ]

// for (let i = 0; i < arr.length; i++){
//   for (let m = 0; m < arr[i].length; m++){
//     array.push(arr[i][m])
//   }
// }
// console.log(array)                         // [ 20, 30, 40, 50, 60, 70, 80, 90 ]

//------------------------------------------------------------------------------------------

// find no. of characters in string

// let kk = 'Shrikrishna G Kachare'
// let count  = 0
// for(let i = 0 ; i < kk.length ; i++){
//     if(kk[i]){
//         count  = count + 1
//     }
// }
// console.log(count)   // 21

//-----------------------------------------------------------------------------------------

// compress given string
// Using for loop
// let compstri = ''
// let count = 0

// function comp(stri){
// for(let i = 0; i < stri.length; i++){
//     count = count + 1
//     if(stri[i] != stri[i+1]){
//         compstri += count + stri[i]
//         count = 0
//     }
// }
//     console.log(compstri)      //6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')
//----------------------------------------------------------------------------------------

// Using method
// let compstri = ''
// let count = 1

// function  comp(stri){
//     for(let i=0; i < stri.length; i++){
//         if(stri.charAt(i) === stri.charAt(i+1)){
//             count = count + 1
//         }else{
//             compstri +=`${count}${stri.charAt(i)}`
//             count = 1
//         }
//     }
//     console.log(compstri)   // 6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')

//---------------------------------------------------------------------------------------

// let compstri = []
// let count = 0

// function comp(stri){
//         let arr = stri.split('')
// for(let i = 0; i < arr.length; i++){

//     if(Number(arr[i])){
//             console.log('hi')
//         compstri.push(arr[i].repeat(arr[i])    )
//     }
// }
//     console.log(compstri)      //6a7c6v4n6y
// }
// comp('aaaaaacccccccvvvvvvnnnnyyyyyy')
//------------------------------------------------------------------------------------------

// function compress(string) {
//         let stringC = "";
//         let countC = 1;
//         let index = 0;
//         for (let i = 0; i < string.length; i++) {
//           if (string.charAt(i) === string.charAt(i + 1)) {
//             countC += 1;
//           } else {
//             stringC += `${string.charAt(i)}${countC}`;
//             countC = 1;
//           }
//         }
//         console.log(stringC);   // a4b3c2d1
//       }

//       compress("aaaabbbccd");

//       // //or

//       function Compressed2(stringA) {
//         let CompressedString = "";
//         let countU = 0;
//         for (let i = 0; i < stringA.length; i++) {
//           countU++;
//           if (stringA[i] != stringA[i + 1]) {
//             CompressedString += stringA[i] + countU;
//             countU = 0;
//           }
//         }
//         console.log(CompressedString);     // a4b3c2d1
//       }
//       Compressed2("aaaabbbccd");
//=============================================================================================

//  expand in string:

// let stri = '2z3x2c'
// let num = [ ]
// let char = [ ]

// for (let i = 0; i < stri.length; i++ ){
//   if( i % 2 == 0){
//     num.push(stri[i])
//   }else{
//     char.push(stri[i])
//   }
// }
// console.log(num)       // [ '2', '3', '2' ]
// console.log(char)      // [ 'z', 'x', 'c' ]

// let expstri = ''
// for (let i = 0; i < num.length; i++){
//   expstri = expstri + char[i].repeat(Number(num[i]))
// }
// console.log(expstri)                                             // zzxxxcc
//--------------------------------------------------------------------------------------

// expanding string by using repeat method
// let expstri = ''
// function comp(stri) {
//         let arr = stri.split('')
//         for (let i = 0; i < arr.length; i++) {
//                 if (Number(arr[i])) {
//                         expstri = expstri + (arr[i + 1].repeat(arr[i]))
//                 }
//         }
//         console.log(expstri)      //aaaazzvvvvvv
// }
// comp('4a2z6v')

//--------------------------------------------------------------------------------------

// //Problem 10---->Compresing the string


// print output is ans=123 from given input is [123]

// let arr = [123]
// let stri = ""
// for (let i = 0; i < arr.length; i++){
//   stri = stri + `ans=${arr[i]}`
// }
// console.log(stri)  // ans=123

//====================================================================================================================


// let stri = 'aabbbbxxxxzzzz'
// let obj = { }

// for (let i = 0; i < stri.length; i++){

//     if(obj.hasOwnProperty(stri[i])){
//         obj[stri[i]] =  obj[stri[i]]  +  1         // updating properties value
//     }else{
//             obj[stri[i]] = 1                     //  adding property in object with intial value 1
//     }
// }
// console.log(obj)        // { a: 2, b: 4, x: 4, z: 4 }

//Example 2.

// let input ="abdkahajfadka"
// output ={
//   a : count of a;
// }


//+==================================================================================================================

// //Q. find out count of word(substring) in given string

// let statementA ="I am new to javascript and i wish to learn every concept of javascript . javascript is great";
// let spr = statementA.split(" ");
// let count = 0;
// for (let a = 0; a < spr.length; a++) {
//   if (spr[a].includes("javascript")) {
//     count++;
//   }
// }
// console.log(count);   // 3

//===========================================================================================
