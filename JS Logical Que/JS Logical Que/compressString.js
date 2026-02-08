
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
