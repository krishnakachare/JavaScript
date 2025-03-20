
//Loop iteration
//for loop, while loop,dowhile loop

//for loop used when duration is fix (need to check head tail condition we need to toss 2 time)

// for ([intialization];[conditioncheck],[incremenet/decremenet]){

// }

//forward loop==>
// for (let i=0;i<10;i++){
//     console.log(i)
// }

//OR
// let i=0
// for(;i<=10;){
//     console.log(i)
//     i++
// }
// console.log(i)

//reverse loop===>
// for (let i=10;i>=0;i--){
//     console.log(i)
// }

// let k = 'amol'
// let a = ""
// let b = ""

// for (let i = 0; i < k.length; i++) {
//     a = k[i] + a
// }
// console.log(a)

// for (let i = k.length - 1; i >= 0; i--) {
//     b = b + k[i]
// }
// console.log(b)

// let r = [2, 3, 2, 44, 77, 55, 444, 99, 99,77, 88, 44]
// let pa = []
// let qa = []
// for (let i = 0; i < r.length; i++) {
//     if (pa.indexOf(r[i]) <= 0) {
//         pa.push(r[i])
//     }
//     else {
//         qa.push(r[i])
//     }
// }
// console.log(pa)
// console.log(qa)

// let r = [2, 3, 2, 44, 77, 55, 444, 99, 99,77, 88, 44]
// let pa = []
// let qa = []
// for (let i = 0; i < r.length; i++) {
//     if (!pa.includes(r[i])) {
//         pa.push(r[i])
//     }
//     else {
//         qa.push(r[i])
//     }
// }
// console.log(pa)
// console.log(qa)


//count the number of space
// let name1="chinmay deshpand is learing javascrip"
// let count=0
// for(let i=0;i<name1.length;i++){
//     if(name1[i]==" "){
//         count++
//     }
// }
// console.log(count)

// console.log(name1.split(" ").length-1)


//break and continue statement 
//Break=> Not execute the statement which came after break means execure from loop
// for (let i=0;i<=10;i++){
//     console.log(i)
//     if(i==5){
//         break;
//     }
// }

//continue=>only skip the perticular statement given in condition block
// for (let i=0;i<10;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }


//while loop ==>infinite condition

// let ia = 0
// while (ia <= 10) {
//     console.log(ia)
//     ia = ia + 1

// }

// //print random until given number condition match
// let number = 100
// let randomnum = 0
// while (randomnum !== number) {
//     randomnum = Math.floor(Math.random() * 100) + 1
//     console.log(randomnum)
// }



/* //While loop Syntax

Initialization
while(condition){
    statemenet
    incremenet/decremenet
} */

// let a = 0
// while (a <= 10) {
//     console.log(a)
//     a++
// }

// //random number by using while loop

// let randomNumber = Math.floor(Math.random() * 5) + 1
// let userInput = Number(prompt("Enter number between 1 to 6"))
// while (randomNumber != userInput) {
//     userInput = Number(prompt("Enter number between 1 to 6"))
// }

//if we want to give only two chance to user to guess number

// let randomNumber = Math.floor(Math.random() * 5) + 1
// let userInput = Number(prompt("Enter number between 1 to 6"))
// let guess = 2
// while (guess > 0) {
//     if (randomNumber == userInput) {
//         guessNumber = true
//         break;
//     }
//     userInput = Number(prompt("Enter number between 1 to 6"))
//     guess--
//     alert(`Number of guess number remain ${guess}`)
// }

// if (guessNumber) {
//     document.write(`You guess the correct number`)
// }
// else {
//     document.write(`You guess the incorrect number`)
// }

//pgm to print even number
// let even = 1
// while (even <= 50) {
//     if (even % 2 == 0) {
//         document.write(`Even number is : ${even}</br>`)
//     }
//     even++
// }

//pgm to print odd number
// let odd = 1
// while (odd <= 50) {
//     if (odd % 2 != 0) {
//         document.write(`odd number is : ${odd} </br>`)
//     }
//     odd++
// }

//pgm to print first 10 even number
// let count = 0
// let even = 1
// while (even <= 50) {
//     if (even % 2 == 0) {
//         document.write(`Even number is ${even}</br>`)
//         count++
//         if (count == 10) {
//             break
//         }
//     }
//     even++
// }



//ternary operator =>used when there is only two ondition are given

//age>18== you can drive or you cant drive

// let age=27

// let drive=age>18?"You can drive":"You cant drive"
// console.log(drive)

//=====================================================================================================
// function add() {
//     console.log("hello")
// }
// add()

// for (let i = 0; i < 10; i++) {
//     add()
// }
//Can i call loop inside function?  Yes

// let arr = [2, 7, 9.8, 7, 6]
// function addTwo() {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + 3)
//     }
// }
// addTwo()

//can i call function inside loop =>yes

// for (let i = 0; i < 3; i++) {
//     function add1() {
//         console.log("hello")
//     }
//     add()
// }

// let h = "hello"
// let u = " "
// for (let i = 1; i < h.length-1; i++) {
//     u = h[i]+u
// }
// console.log(u)

// let i = 1
// while (i < h.length - 1) {
//     u = u + h[i]
//     i++
// }
// console.log(u)

// let name1 = "Mayuri"
// let blank = ""
// for (let i = 1; i < name1.length - 1; i++) {
//     blank = blank + name1[i]
// }
// console.log(blank)


// let m = "chinmay deshpande"
// let n = ""
// for (let i = 0; i < m.length; i++) {
//     if (i == 3) {
//         break
//     }
//     n = n + m[i]
// }
// console.log(n)


//Ternary Operator => If there is only one condition need to check then we used ternary operator
// let fruits = ["mango", "Chiku", "Banana"]

// let userInput = "mango"
// let mm = fruits.indexOf(userInput) > 1 ? "Fruits available" : "Fruits not available"
// console.log(mm)

//Switch Operator => if value pass in switch and value given in case matches then execute sttement otherwise give default value
//if not take the break then execure all statement
// let a = "apple"
// switch (a) {
//     case 'apple':
//         console.log("40 Rs")
//         break;

//     case 'mango':
//         console.log("40 Rs")
//         break;

//     case 'Chiku':
//         console.log("40 Rs")
//         break;

//     default:
//         console.log("hello")

// }

//if break is not used the execute all statement
// let a = "apple"
// switch (a) {
//     case 'apple':
//         console.log("40 Rs")


//     case 'mango':
//         console.log("40 Rs")


//     case 'Chiku':
//         console.log("40 Rs")


//     default:
//         console.log("hello")

// }


//=====================================================================================

// //Function declaration
// function add(){
//     console.log("hello")
// }
// add()

// //Function expression
// let add1=function(){
//     console.log("Hey")
// }
// add1()

// //Arrow Function
// let add3=()=>{
//     console.log("Bye")
// }
// add3()

//Hoisting =>call function above the function declarion known as hoisting it possible only in function declartion
// sub(33,10)
// function sub(x,y){
//     console.log(x-y)
// }

//hosting not possible in function expression
// a(20,10)
// let a=function(x,y){
//     console.log(x-y)
// }

//hosting not possible in arrow function
// a(20,10)
// let a=(x,y)=>{
//     console.log(x-y)
// }

// let h = [() => console.log("Bye"), "hello"]
// h[0]()

// let g = {
//     age: 23,
//     h: () => console.log("Bye")
// }
// g['h']()

// let h = function () {
//     console.log("Hello")
// }
// h()
// console.log(h)


//====================================================================================

//function array as parameter and return type also array

// let a=[1,2,3,4,5]
// function addTwo(arr){
//     for (let i=0;i<a.length;i++){
//         arr[i]=arr[i]+2
//     }
//     return arr
// }
// let a1=addTwo(a)
// console.log(a1)
// console.log(a1.reduce((acc,el)=>el+acc))

//Passing object as parameter to another function

// let a1 = {
//     firstname: "chinmay",
//     age: 23
// }
// function updateObj(obj) {
//     obj.firstName = "Samir"
//     console.log(obj.firstName)
// }

// updateObj(a1)
// console.log(a1.firstName)

// let a2 = {
//     firstname: "chinmay",
//     age: 23
// }
// function updateObj(obj) {
//     obj.firstName = "radha"
//     return[obj.firstName,obj.age]
// }

// let a3=updateObj(a2)
// console.log(a3[0])


//==============================================================================================================

// let names = ["chinmay", "poorva", "ram"]
// names.forEach(function(el){
//     console.log(`Welcome ${el} !`)
// })

//OR by using loop

// let r=[]
// for (let i=0;i<names.length;i++){
//     r.push(`Welcome ${names[i]} !`)
// }

// console.log(r)

// //OR by using map

// let mm=names.map(function(el){
//     return(`Welcome ${el} !`)
// })
// console.log(mm)

// let ages = [0, 10, 5, 6, 7, 8, 9, 12, 45, 67, 89, 54, 34, 56, 78]
// //above 18
// let mm2 = ages.filter(function (el) {
//     return el > 18
// })
// console.log(mm2)
// let r1 = []
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] > 18) {
//         r1.push(ages[i])
//     }

// }
// console.log(r1)

// age = [23, 4, 56, 67, 89, 76, 54, 43]
// sum = 0
// for (let i = 0; i < age.length; i++) {
//     sum = sum + age[i]
// }
// console.log(sum)

// let a1 = age.reduce(function (acc, el) {
//     return acc + el
// }, 0)
// console.log(a1)

//========================================================================================================

// let person={
//     age:12
// }
// console.log(person.age)

// //Refactoring example
// let ages=[22,55,66,77,54,56,78,98]
// function calAge(arr){
//     let a1=[]

// }

//===========================================================================================================



// ------------------------------>
// refactoring example 
// let ages = [22,33,34,55,66,77] // 2
// //[1999]
// function calAge(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(2021-arr[i])
//     }
//     return barr
// }
// let f = calAge(ages)
// console.log(f)
// //---------------------------
// function calTwo(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]+2)
//          //[24,]
//     }
//     return barr
// }
// let b= calTwo(ages)
// console.log(b)

// function tenPer(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]*0.10)
//          //[24,]
//     }
//     return barr
// }
// let c= tenPer(ages)
// console.log(c)

// let ages = [22,33,34,55,66,77] 

// let bills = [1000,34000,444,5555,6666]

// function returnArray(arr,fn){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//         barr.push(fn(arr[i]))
//     }
//     return barr
// }


// function ck(cssSelector){
//     cy.get(cssSelector).click()
// }



// let birthyear = (el)=> 2021-el
// let tenPer = (el)=> el * 0.10
// let twoPlus = (el) => el +2
// let discout10 = (el) => el - tenPer(el)


// let birthyeara = returnArray(ages,birthyear)
// let tw = returnArray(ages,twoPlus)
// let ee = returnArray(ages,tenPer)
// let eebills = returnArray(bills,discout10)

// console.log(birthyeara,tw,ee)
// console.log(eebills)


// bills = [1000,34000,444,5555,6666]


//===============================Self write==================================================
let age1 = [22, 44, 55, 66, 77]//2021-22=ans te print karne

// function calAge(arr){
//     let a1=[]
//     for(let i=0;i<arr.length;i++){
//         a1.push(2021-arr[i])
//     }
//     return a1
// }
// let a2=calAge(age1)
// console.log(a2)


//Add 2 in each age
// function addTwo(mayuri){
//     let b1=[]
//     for (let i=0;i<mayuri.length;i++){
//         b1.push(mayuri[i]+2)
//     }
//     return b1
// }
// let b3=addTwo(age1)
// console.log(b3)



// let mm=age1.map(function(el){
//     return el+3
// })
// console.log(mm)

//find 10 % of each value

// function tenPercent(arr) {
//     let s1 = []
//     for (let i = 0; i < arr.length; i++) {
//         s1.push(arr[i] * 0.10)
//     }
//     return s1
// }
// let m3 = tenPercent(age1)
// console.log(m3)


function calculator(arr, fn) {
    let avi = []
    for (let i = 0; i < arr.length; i++) {
        avi.push(fn(arr[i]))
    }
    return avi
}

let birthYear=(el)=>2021-el //(map method)
let m1=calculator(age1,birthYear)
console.log(m1)

// let addTwo=(el)=>el+2
// let m2=calculator(age1,addTwo)
// console.log(m2)

// let tenPer=(el)=>el*0.10
// let m3=calculator(age1,tenPer)
// console.log(m3)















