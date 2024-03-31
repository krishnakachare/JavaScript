//If else,else if, switch

//Why we used conditional statemenets=>When we have multipla outcome then we used conditionl statemnets

//Syntax
/* if(condition){
    -----------------------------------------
}
 */

//===========================================================

//All condition are check but give output for true condition only
/* if(true){
    console.log("hello")
}
if(false){
    console.log("hello1")
}
if(true){
    console.log("hello2")
} */

//============================================================
/* if(4>6){
    console.log("hello")
}
else{
    console.log("hello2")
} */

//============================================================

//Need to buy ticket 1-5--10%    ,6-10--20%  , >10 --30%

//prompt method used to accept input from user this method always return the string

// let userInput=Number(prompt("Please Enter the number of ticket to buy"))   //Number('5')=5

// if(userInput>=1 && userInput<=5){
//     console.log('10 % discount')
// }
// if(userInput>=5 && userInput<=10){
//     console.log('20 % discount')
// }
// if(userInput>=10){
//     console.log('30 % discount')
// }
//===================================================================================================

// let userInput=Number(prompt("Please Enter the number of ticket to buy"))   //Number('5')=5
// // here one by one condition check if first fail then only navigate to next
// if(userInput>=1 && userInput<=5){
//     console.log('10 % discount')
// }
// else if(userInput>=5 && userInput<=10){
//     console.log('20 % discount')
// }
// else if(userInput>=10){
//     console.log('30 % discount')
// }
// else{
//     console.log("Incorrect input")
// }

//==================================================================================

// let randomNumber=Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// let userInput= Number(prompt("Please geuss the numberbetween 1 to 5"))
// if(userInput==randomNumber){
//     console.log(`You got the correct random number ${randomNumber}`)
// }
// else{
//     console.log(`You got the incorrect random number ${userInput}`) 
// }

//2 nd chance
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userInput = Number(prompt("Please geuss the numberbetween 1 to 5"))
// if (userInput > 5) {
//     if (userInput == randomNumber) {
//         console.log(`You got the correct random number ${randomNumber}`)
//     }
//     else {
//         console.log(`You got the incorrect random number ${userInput}`)
//         console.log("lets try again")
//         userInput = Number(prompt("Please geuss the numberbetween 1 to 5"))
//         if (userInput == randomNumber) {
//             console.log(`You got the correct random number ${randomNumber}`)
//         }
//         else {
//             console.log(`You got the incorrect random number ${userInput}`)
//         }
//     }
// }
// else {
//     console.log('Invalid input')
// }
//=======================================================================
//by using flag
// let correctGuess = false
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userInput = Number(prompt("Please geuss the numberbetween 1 to 5"))
// if (userInput == randomNumber) {
//     correctGuess = true
// }
// else {
//     correctGuess = false
//     console.log("lets try again")
//     userInput = Number(prompt("Please geuss the numberbetween 1 to 5"))
//     if (userInput == randomNumber) {
//         correctGuess = true
//     }
//     else {
//         correctGuess = false
//     }
// }

// if (correctGuess) {
//     console.log(`You guess correct random number ${randomNumber}`)
// }
// else {
//     console.log(`You guess incorrect random number ${userInput}`)
// }

//===============================================================================================================

//by using flag
let correctGuess = false
let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)
let userInput = guessNumber()
if (userInput == randomNumber) {
    correctGuess = true
}
else {
    correctGuess = false
    console.log("lets try again")
    userInput = guessNumber()
    checkGuess(userInput)
}

if (correctGuess) {
    console.log(`You guess correct random number ${randomNumber}`)
}
else {
    console.log(`You guess incorrect random number ${userInput}`)
}

function guessNumber(){
   return  Number(prompt("Please geuss the numberbetween 1 to 5"))
}

function checkGuess(userInput){
    if (userInput == randomNumber) {
        correctGuess = true
    }
    else {
        correctGuess = false
    } 
}

//==============================================================================================================


