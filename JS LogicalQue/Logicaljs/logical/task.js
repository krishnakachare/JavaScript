// // [0,1,0,1,1,0,1,1,1,1,0,0,1,0,1]     count max consicatives of 1
// let arr = [0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1]
// let countArr = []
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         count++
//     } else {
//         countArr.push(count)
//         count = 0
//     }
// }

// console.log(countArr.sort((a, b) => a - b).pop()+1)

var today = new Date();
console.log(today)
var dd = (today);
console.log(String(dd).slice(0, 9))