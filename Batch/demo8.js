// String Concat

// console.log("Hi" + "Hi")  // HiHi
// console.log("Hi" + "Ganesh") // HiGanesh  /// Hi Ganesh
// console.log("Hi" + " Ganesh")  // Hi Ganesh
// console.log("Hi" + " " + "Ganesh")  // Hi Ganesh


// console.log(4 + 4)      // 8(number)
// console.log("4" + "4")  // 44 (string)
// console.log("4" + 4)    // 44  (string)
// console.log(4 + "4")    // 44

// console.log(4 + 4 + "4")    // 84   (string)      // 8 +"4"  = "84"
//  console.log("4" + 4 + 4)    // 48   (string)     // "4"+4 = "44" + 4 = 444
//  console.log(2 + 2 + "4" + 4 + 4)  // 4444


// console.log("Hi Ganesh")
// " "  --> Double qoute
// ' '  --> single qoute

// "   ''  "  OR  '  " " ' 
// "My name is 'Ganesh' & Hi"
// 'My name is 'Ganesh' & Hi'

// 'My name is "Ganesh" & Hi'
// "My name is "Ganesh" & Hi"


// Backticks (` `)   (PlaceHolder  ( ${ Variable } ))

// Use of backticks = we can get/retrive value of any variable in a string

// let a = `Hi Ganesh`   // Backticks
// console.log(typeof (a))   // string     // " ", ' ', ` `

//let b = "Aniket"  // 80 // true

// a = `Hi Ganesh & Hi Aniket`
// console.log(a)

// a = `Hi Ganesh & Hi b`
// console.log(a)


// // ${ VariableName }  --> Place holder

// a = `Hi Ganesh & H ${b}`
// a = 'Hi Ganesh & Hi ${b}'
// // 'Hi Ganesh & Hi (b)'
// console.log(a)   // Hi Ganesh & Hi Aniket   // Hi Ganesh & Hi ${b}



// Example ==>

// console.log("Hi Ganesh, Good Morning...")
// console.log("Hi sagar, Good Morning...")
// console.log("Hi Rushi, Good Morning...")
// console.log("Hi Poonam, Good Morning...")
// console.log("Hi Aniket, Good Morning...")
// console.log("Hi Nagendra, Good Morning...")

// console.log("Hi ..., Good Morning...")

// let array = ["Aniket", "Sagar", "Poonam", "Ganesh", "Nagendra", "Rushi"]

// for (let i = 0; i < array.length; i++) {
//     console.log(`Hi ${array[i]}, Good Morning...`)
// }

// Hi Aniket, Good Morning...
// Hi Sagar, Good Morning...
// Hi Poonam, Good Morning...
// Hi Ganesh, Good Morning...
// Hi Nagendra, Good Morning...
// Hi Rushi, Good Morning...



// console.log(arr.length)

// for (let i = 0; i < arr.length; i++) {
//     console.log(`Hii ${arr[i]}`)
// }

// for (let i = 1 ; i < 16;i++){
//     console.log(i)
// }

//console.log(15 < 15)

// for (let i =1 ; i < 6 ;i++){
//     console.log(i)
// }


//print the reverse no from 10 to 1
for (let i = 10 ; i > 0 ;i--){
    console.log(i)
}

//Rushi
for (let i = 5 ; i > 0 ;i--){
    console.log(i)
}

//Sager
// 15 to 10
for(let i =15 ; i > 9 ;i--){
    console.log(i)
}
console.log(10 > 10)