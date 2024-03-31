










// Loops iteration 


// for loop , while loop , dowhile loop

// for 


// for([intialization];[conditionCheck];[increment/decrement]){

// }



// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }


// let i = 0

// for (; i < 10;) {
//     console.log(i) //// 0-9
//     i++  // i -- 10
// }
// console.log(i) // 10



// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }


// let k = 'amol'
// let a = ""
// let b = ""

// for (let i = 0; i < k.length; i++) {
//     a = k[i] + a

// }

// for (let i = k.length - 1; i >= 0; i--) {
//     b = b + k[i]
// }

// console.log(a)
// console.log(b)


// // -------------------->


let r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
let rk = [] // [2]
let du = []

// //[55,66,3]
// // 1st iteration 
// for (let x = 0; x < r.length; x++) {
//     if (rk.indexOf(r[x]) < 0) {
//         rk.push(r[x])
//     }
//     else {
//         du.push(r[x])
//     }
// }


// r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
// rk = [] // [2]
// du = []


// for(let i = 0 ; i < r.length ; i++){
//     if(! rk.includes(r[i])){
//         rk.push(r[i])
//     }
//     else {
//         du.push(r[i])
//     }
// }
// console.log(rk)
// console.log(du)

// let ia = "chinmay deshpande is learning javascript"
// let count = 0
// for(let i = 0 ; i < ia.length ; i++){
//     if(ia[i] == " "){
//         count = count + 1
//     }
// }
// console.log(count)
// console.log("chinmay deshpande is learning javascript".split(' ').length-1)

// hn = "chinmay deshpande is learning javascript"
// a = ""
// for (let i = 0; i < hn.length; i++) {
//     a = hn[i] + a

// }
// console.log(a)


// while  loop 

// let iaa = 0

// while(iaa <= 10){

//     console.log(iaa)  // 0  1

//     iaa = iaa + 1 

// }

// random number ------ >  while loop


//console.log(arr)





















// [2, 3, 2, 44, 55, 66, 55, 3, 66].filter(function(el,index,arr){
// })
// let chars = [33,55,33,22,45,33,55,33,33]
// let uniqueChars = chars.filter((el, index) => {
//     return chars.indexOf(el) > index;
// })
// //[33,55]
// console.log(uniqueChars)












let arr = [1, 2, 3, 4, 5]
for (let [key, val] of arr.entries()) {
    console.log(key, val)
}

let kk = new Map(

    [4, 1],
    ['kk', 2])
console.log(kk)