// // if else else if switch
// // conditional statments??

// // When we have multiple outcomes

// //  5  - 10%
// //  10  - 20%

// // if(condition){

// //--------------------------
// //}

// if(true){
//     console.log('helllo1')
// }
// if(false){
//     console.log('helllo')
// }
// if(true){
//     console.log('helllo2')
// }

// // --------------------------------------------->

// if(4 > 6){
//     console.log('helllo1')
// }
// else{
//     console.log('hello 2')
// }

// --------------------------------------->


// 1-5 -- 10 %   , 6-10 -- 20 % ---- 11 ---- 30 % 

// let userInput = Number(prompt('Please Enter the number of tickets to buy')) // String
// //Number('5') // 5
// if(userInput > 1 && userInput <=5){
//     console.log('10 % discount')
// }

// if(userInput > 5 && userInput <=10){
//     console.log('20 % discount')
// }

// if(userInput > 10){
//     console.log('30 % discount')
// }


//----------------------------->

// let userInput = Number(prompt('Please Enter the number of tickets to buy')) // String
// //Number('5') // 5
// if(userInput > 1 && userInput <=5){
//     console.log('10 % discount')
// }

// else if(userInput > 5 && userInput <=10){
//     console.log('20 % discount')
// }

// else if(userInput > 10){
//     console.log('30 % discount')
// }
// else {
//     console.log('Incorrect input')
// }

//--------------------------------------
// random guess number
// let randomNumber = Math.floor(Math.random()*5)+1
// console.log(randomNumber)
// let userNInput = Number(prompt('Please guess a number between 1 to 5'))
// if(userNInput == randomNumber){
//     console.log(`you got the correct random number ${randomNumber}`)
// }
// else{
//     console.log(`you got the incorrect random number ${userNInput}`)
// }

// 2 chance

// let correctGuess =  false

// let randomNumber = Math.floor(Math.random()*5) + 1
// console.log(randomNumber)
// let userNInput = Number(prompt('Please guess a number between 1 to 5'))

// if(userNInput > 5){
// if (userNInput == randomNumber) {
//     console.log(`you got the correct random number ${randomNumber}`)
// }
// else {
//     console.log(`you got the incorrect random number ${userNInput}`)
//     console.log(`let's try again`)
//     userNInput = Number(prompt('Please guess a number between 1 to 5'))
//     if (userNInput == randomNumber) {
//         console.log(`you got the correct random number ${randomNumber}`)
//     }
//     else{
//         console.log(`you got the incorrect random number ${userNInput}`)
//     }
// }

// } else{
//     console.log('Invalid input ...!')
//     userNInput = Number(prompt('Please guess a number between 1 to 5'))
//     if (userNInput == randomNumber) {
//         console.log(`you got the correct random number ${randomNumber}`)
//     }
//     else{
//         console.log(`you got the incorrect random number ${userNInput}`)
//     }

// }


// function guessNumber() {
//     return Number(prompt('Please guess a number between 1 to 5'))
// }

// function checkGuess(userInput) {
//     if (userInput == randomNumber) {
//         correctGuess = true
//     }
//     else {
//         correctGuess = false
//     }
// }


// let correctGuess = false
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userNInput = guessNumber()

// if (userNInput <= 5) {

//     if (userNInput == randomNumber) {
//         correctGuess = true
//     }
//     else {
//         correctGuess = false
//         console.log(`let's try again`)
//         userNInput = guessNumber()
//         checkGuess(userNInput)
//     }

// } else {
//     console.log('Invalid input ...!')
//     userNInput = guessNumber()
//     checkGuess(userNInput)

// }

// if (correctGuess) {
//     console.log(`you guess the number correct ${randomNumber}`)
// }
// else {
//     console.log('you guess is incorrect')
//     console.log(`Game over please try`)
// }













































// random number 

let randomNumber = Math.floor(Math.random()*6)+1
let userInput = Number(prompt('Please enter any vakues betweeen one to six'))
let correctGuess = false

if(randomNumber ==  userInput){
    correctGuess = true
}
else {
    console.log('You have one more chance ')
    userInput = Number(prompt('Please enter any vakues betweeen one to six'))
    if(randomNumber ==  userInput){
        correctGuess = true
    }
    else {
        correctGuess = false
        
    }

}
if(correctGuess) {
    console.log('you guess it right')
}
else{
    connsole.log('Try again next time')

}