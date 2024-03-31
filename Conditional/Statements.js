// conditional statements in js

// syntax---> if

// if(keyword)(conditionalStatements){
// statements
//}  // Block

// if (3 > 2) {
//           console.log("Statement is true")
// }

// if (3 < 2) {
//           console.log("Statement is true")
// }


// syntax---> if-else

// if(keyword)(conditionalStatements){
// statements
//} else(keyword){
// statements      
//}

// if (3 < 2) {
//           console.log("Statement is true")
// } else {
//           console.log("Statement is false")
// }


// syntax---> if-else if- else

// if(keyword)(conditionalStatements 1){
// statements (block 1)
//} else if(keyword)(conditionalStatements 2){
// statements (block 2)  
//} else {
// statements       
// }


//Ex-
// let marks = 95
// marks > 90  -- -> "A Grade"
// marks > 60 && marks < 90 -- -> "B Grade"
// marks <= 60  -- -> "C Grade"

// if (marks > 90) {
//           console.log("A Grade")
// } else if (marks > 60 && marks < 90) {
//           console.log("B Grade")
// } else {
//           console.log("invalid o/p")
// }

// Ternery operator ---->

// Syntax-->

// condition ? statement (if condition is true):  statement (if condition is false)

// true ? console.log("if TRUE") : console.log("if FALSE")   // if TRUE

// false ? console.log("if TRUE") : console.log("if FALSE")   // if False



// switch case ----->

// Syntax --->

// switch(keyword)(comparision statement){
//   case(keyword) comparing statement :
//                   statements

//   case(keyword) comparing statement :
//                   statements

//   case(keyword) comparing statement :
//                   statements

// default(keyword):
//          statement

//}


// Ex-

// let city = "indore"

// switch (city) {
//           case "pune":
//                     console.log("MH")
//           case "indore":
//                     console.log("MP")
//           case "jaipur":
//                     console.log("RJ")
//           default:
//                     console.log("Invalid i/p")
// }

// city = "pune"

// switch (city) {
//           case "pune":
//                     console.log("MH")
//           case "indore":
//                     console.log("MP")
//                     break;
//           case "jaipur":
//                     console.log("RJ")
//                     break;
//           default:
//                     console.log("Invalid i/p")
// }