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

//----------------------------------