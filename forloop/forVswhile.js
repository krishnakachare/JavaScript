// For loop --->

let randomNo = Math.floor(Math.random() * 6)
console.log(randomNo)  // 0 - 5 // number
// 1

// let userInput = prompt("Plz enter no. in b/t 0-5")
// console.log(userInput)        // string

// /// 1 --> "1"               "1"

// if (String(randomNo) === userInput) {
//           console.log("UR Guess is CORRECT")
// } else {
//           console.log("UR Guess is IN-CORRECT")
// }

// for (let i = 0; i < 6; i++) {
//           let userInput1 = prompt("Plz enter no. in b/t 0-5")
//           if (String(randomNo) === userInput1) {
//                     console.log("UR Guess is CORRECT")
//                     document.write("UR Guess is CORRECT")
//                     break;
//           } else {
//                     console.log("UR Guess is IN-CORRECT")
//                     document.write("UR Guess is IN-CORRECT")
//           }
// }


// While loop

// let i = 0;
// while (i < 6) {
//           let userInput1 = prompt("Plz enter no. in b/t 0-5")
//           if (String(randomNo) === userInput1) {
//                     console.log("UR Guess is CORRECT")
//                     document.write("UR Guess is CORRECT")
//                     break;
//           } else {
//                     console.log("UR Guess is IN-CORRECT")
//                     document.write("UR Guess is IN-CORRECT")
//           }
//           i++
// }


// Difference b/t for loop & while loop---->

let userInput1
while (randomNo != userInput1) {
          let userInput1 = prompt("Plz enter no. in b/t 0-5")
          if (String(randomNo) === userInput1) {
                    console.log("UR Guess is CORRECT")
                    document.write("UR Guess is CORRECT")
                    break;
          } else {
                    console.log("UR Guess is IN-CORRECT")
                    document.write("UR Guess is IN-CORRECT")
          }
}

