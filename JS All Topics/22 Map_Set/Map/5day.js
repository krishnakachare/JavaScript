// var quize = {
//     'What is Thermal': "T",
//     "what is design": "D",
//     "what is Machine": 'M',
//     ["what is TOM"]: "O",
//     names: "kk"
// }

// console.log(quize."what is TOM")                 // we cant here used dot notation
//  let inputarr = []
//  let count = 0
//  let ans =  Object.values(quize)

// for(let loop of Object.keys(quize)){
//     //console.log(loop)
//     var input = prompt(loop)
//     inputarr.push(input)
// }

// for(let loop of Object.values(quize)){
//     console.log(loop)
// }

// console.log(typeof(ans))
// for(let loop of Object.entries(quize)){
//     console.log(loop)
// }

// for(let i=0;i<ans.length;i++){
//     if(ans[i]===inputarr[i]){
//         count++
//     }
// }

// if(count === 5){
//     console.log('GOLD')
// }else if(count === 4){
//     console.log('SILVER')
// }else if(count === 3){
//     console.log('BRONZE')
// }else if(count === 2){
//     console.log('UR SCORE IS 2')
// }else if(count === 1){
//     console.log('UR SCORE IS 1')
// }else{
//     console.log('NAKO KHELU')
// }


//-------------------------------------------------------------------------------------------------------

// // // Short code (Using Ternery operator )

// var quize = {
//     'What is Thermal': "T",
//     "what is design": "D",
//     "what is Machine": 'M',
//     ["what is TOM"]: "O",
//     names: "kk"
// }

// let count = 0
// for (let [key, value] of Object.entries(quize)) {
//     let inp = prompt(key)
//     if (inp == value) {
//         count++
//     }
// }
// // var display
// // display = count === 5 ? 'Gold' : display
// // display = count === 4 ? 'Silver' : display
// // display = count === 3 ? 'Bronze' : display
// // display = count === 2 ? 'U R Score is 2 ' : display
// // display = count === 1 ? 'U R Score is 1 ' : display
// // display = count === 0 ? 'Try Next Time' : display
// // console.log(display)

// // let re = ['Try Next Time','U R Score is 1 ','U R Score is 2 ', 'Bronze', 'Silver','Gold']
// // console.log(re[count])   // when we need arrays elements    and we required its position use indexOf method

// NOTE = when multiple statements are present that time array look like bulky and here we used tightly coupled code

// Mayuri  ( Using switch case )-----------------------------------------------------------------------

// let quize = {
//     'What is Electrical': "EE",
//     "What is Mechanical": "ME",
//     "What is Computer": 'CE',
//     "What is Electronics": "ETC",
// }
// let count = 0
// for (let [key, value] of Object.entries(quize)) {
//     let inp = prompt(key)
//     if (inp == value) {                                     // one by one comparison here done
//         count++
//     }
// }
// switch (count) {
//     case 4:document.write("gold") 
//     break;                                           // break change switch case nature and return perticular output

//     case 3:document.write("silver")
//         break;

//     case 2 || 1:document.write("bronze")        // when we use && operator must need both condtion true  but its not work bcoz we recive only one input at one time
//         break;

//     default:
//         document.write("plez try again")
// }


//===============================================================================================================




























//==========================================================================================

// let one = "chinmay"

// // 0  1  2  3  4  5  6 
// // c  h  i  n  m  a  y
// console.log(one[0])
// console.log(one[1])
// console.log(one[2])
// // object -  
// //human --- properties and method
// console.log(one.length)
// // last index
// console.log(one.length-1)
// console.log(one[one.length-1])
// //-------------------- length-1 is last index

// let name2 = "deepali"
// console.log(name2.length)

// console.log(name2[0])
// console.log(name2[1])

// Loops
// console.log('-------------------')

// for(let i = 0 ; i < 7 ;i++){ // 1 //2 //3//4//5//6//7
//     console.log(i) // 0 // 1//2///3//4//6
// }
// let name3 = "apoorva"

//console.log(name3[0])

// for(let i = 0 ; i < 7;i++){
//     //console.log(i)
//     console.log(name3[i])
// }

// for(intialization ;condition;increment/decrement){
//     //console.log(i) // statement
//     console.log(name3[i])
// }
// let name4 = "amol"
// // 0 1 2 3
// // a m o l

// for(let i = name4.length-1; i >=0 ; i--){
//     console.log(name4[i])
// }
// l
// o
// m
// a

// let human = {

//     fullName:"chinmay",
//     age:20
// }
// //human['fullName']
// //human.age

// for(let key in human){
//     console.log(key,human[key])
// }

// let namesw = ["chinmay","poorva","sarika"]

// for(let i = 0 ; i < namesw; i++){
//     console.log(namesw[i])
// }

// for(let h of namesw){
//     console.log(h)
// }

// human = {

//     fullName:"chinmay",
//     age:20
// }

// console.log(Object.keys(human))        //  [ 'fullName', 'age' ]
// console.log(Object.values(human))   //  ["chinmay",20]
// console.log(Object.entries(human))  //  [ [ 'fullName', 'chinmay' ], [ 'age', 20 ] ]

// for(let j of Object.values(human)){
//     console.log(j)
// }

// let amol = [2,4]
// let [a,b] = amol

// let hhh = [ 
//     [ 'fullName', 'chinmay' ],
//     [ 'age', 20 ] 
// ]

// for(let i = 0 ; i < hhh.length ; i++){
//    let [a,b] = hhh[i]
// }

// [ 
//     [ 'fullName', 'chinmay' ],
//     [ 'age', 20 ] 
// ]

// for(let [key,value] of Object.entries(human)){
//     console.log(key ,value)

// }

// for(let a of Object.entries(human)){
//     console.log(key ,value)
// }
// console.log(hhh[0][0])
// console.log(hhh[0][1])



// let questions = {
//     'what is capital of India':"a",
//     'what is capital of Pakistan':"b",
//     'what is capital of Srilanka':"c",
//     'what is capital of South Africa':"d",
// }

// // let userAnswers = []
//  correctAnswer = 0

// // for(let question of Object.keys(questions)){
// //     let userInput = prompt(question)
// //     userAnswers.push(userInput)
// // }

// // let actualAnswers = Object.values(questions)

// // for(let i = 0 ; i < actualAnswers.length ;i++){

// //     if(actualAnswers[i] === userAnswers[i]){
// //         correctAnswer =   correctAnswer  + 1
// //     }

// // }


// for(let [question,answer] of Object.entries(questions)){
//     let userAns = prompt(question)
//     if(userAns=== answer){
//         correctAnswer = correctAnswer +1
//     }
// }
// if(correctAnswer === 4){
//     console.log("Gold")
// }
// else if(correctAnswer === 3){
//     console.log('silver')
// }
// else if(correctAnswer > 0 &&  correctAnswer <= 2){
//     console.log('bronze')
// }
// else{
//     console.log('please try again')
// }