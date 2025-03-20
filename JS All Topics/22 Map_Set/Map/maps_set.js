// const car={}
// car['color']="red"
// console.log(car)

//===========================================================================================

//car=[2,3,4]
//console.log(car)//If we use const then we can change or update the property or value inside it but not datatypes

//============================================================================================

// const a=[1,3,4,5,6]
// a[0]=10
// console.log(a)

//============================================================================================

//let mk=new String("hello")

//============================================================================================

// class person {
//     constructor(name,rollNumber){
//         this.name=name,
//         this.rollNumber=rollNumber

//     }
//     display(){
//         console.log(this.name,this.rollNumber)
//     }

// }

// let amol=new person("mayuri",12)
// console.log(amol.name)
// console.log(amol.rollNumber)
// amol.display()

//==============================================================================================

//There are two datatypes 1.map and 2.
//Map is very similar to the object

// let person = {
//     fullName:"Mayuri",
//     skills:12345

// }
// console.log(person)

//=============================================================================================================

// let person = {
//     fullName:"Mayuri",
//     [1,2,3,4,5,6,7]:12345 //unexpected token

// }
// console.log(person)//in object we cant used different datatypes in key 

//=============================================================================================================

//creating the object of map
// let a1 = new Map()

// // setting the object of map with different data structure as keys
// a1.set('names', "mayu")
// a1.set(true, "nature")
// a1.set(1, 123456)
// console.log(a1)

// //getting the values from the map
// console.log(a1.get("names"))
// console.log(a1.get(true))
// console.log(a1.get(1))
// console.log(a1.size)

//===============================================================================================================

// let ram = { names: "ram chakore" }
// let sham = { names: "sham chakore" }
// let info = {}
// info[ram] = 1234 //it consider ram as '[object Object]'                

// meaning of 82 line 
//info{
//{names: "ram chakore"}=1234
//  }

// console.log(info)

// info[sham] = 9876
// console.log(info)//it consider sham as '[object Object]' only and update its value

//here ram and sham are both diffrent object but in case of object it just update property when it passes to the another blank object

//======================================================================================================================

//Adding the multiple key and value

// let b = new Map([
//     ['cucumber', 60],
//     ['apple', 1000],
//     ['banana', 45],
// ]);

// //feaching all keys 
// for (let a1 of b.keys()) {
//     console.log(a1)
// }

// //feaching all value
// for (let a2 of b.values()) {
//     console.log(a2)
// }

// //feaching both keys and value
// for (let [key, value] of b.entries()) {
//     console.log([key, value])
// }

//=============================================================================

// let fruits=new Map([
//     ["apple",10],
//     ["dragon",100],
//     ["mango",20]

// ])
// for(let key of fruits.keys()){
// console.log(key)
// }

// for(let value of fruits.values()){
//     console.log(value)
// }

// for (let [keys,values] of fruits.entries()){
//     console.log(keys,values)
// }

//=======================================================================================

// let day = {
//     monday: 1,
//     tuesday: 2,
//     Wednesday: 3,
//     thrusday: 4,
//     friday: 5,
//     daturday: 6,
//     sunday: 7
// }
// skills = ["java", "js", "manual"]
// //in old java script we declared object inside onject as given in line number 160
// // let person={
// //     fullName:"Chinmay",
// //     age:30,
// //     display:function(){
// //         console.log("hello")
// //     },
// //     days:day

// // }
// // console.log(person)

//     let person = {
//     fullName: "Chinmay",
//     age: 30,
//     display: function () {
//         console.log("hello")
//     },
//     day,
//     skills
// }
// console.log(person)

// for (let key in person) {
//     console.log(key, person[key])
// }

//============================================================================

// let names=["mayuri","rohini","kajal","surekha"]
// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// for(let a of names){
//     console.log(a)
// }

//=============================================================================

// let person={
//     fullName:"chinmay",
//     age:39,
//     skills:["java","paython","js","manual"]
// }
// for(let key in person){
//     console.log(person[key])
// }

//console.log((Object.keys(person)))//give key value in the form of array

// for(let a of (Object.keys(person))){
//     console.log(a)
// }

// for(let a of (Object.values(person))){
//     console.log(a)
// }

//console.log(Object.entries(person))

// for(let [a,b] of (Object.entries(person))){
//     console.log(a,b)
// }

//in 213 we are using destructuring concept for array
//Object.entries[person] return the array
//Object.entries[person][0] return the first element of array
//let [a,b]=Object.entries[person][0] it forms the destructring

//===========================================================================================


// let h = [
//      //fullname="mayu",
//     {namee:"chinmay",rollNo:45},
//     {namee:"chinmayr",rollNo:454},

//   ]

// let[{namee,rollNo}]=h
// console.log(namee,rollNo)

// for(let {namee,rollNo} of h){
//     console.log(namee,rollNo)
// }

//========================================================================================

// let a1 = "mayui katwe"
// console.log(`My Name is ${a1}`) //string interpolation

//========================================================================================

// let days=[1,2,3,4,5,6,7]
// let a2={
//     [`day ${days[0]}`]:"Sunday",
//     [`day ${days[1]}`]:"Monday",
//     [`day ${days[2]}`]:"Tuesday",
//     [`day ${days[3]}`]:"Wednesday",
//     [`day ${days[4]}`]:"Thrusday",
//     [`day ${days[5]}`]:"Friday",
//     [`day ${days[6]}`]:"Saturday",

// }
// console.log(a2)

//=========================================================================================

//in order to reduce code we can used below syntax
// let days=[1,2,3,4,5,6,7]
// let dayName=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
// let a3={}
// for(let i=0;i<days.length;i++){
//     a3[`days ${days[i]}`]=dayName[i]
// }
// console.log(a3)


//========================================================================================

//just for practice
// let fruits=[1,2,3,4]
// let price=[10,20,30,40]
// let a11=[]
// for(let i=0;i<fruits.length;i++){
//     a11.push(fruits[i]=price[i])
// }
// console.log(a11)

//=========================================================================================

// let person={
//     fullName:"Mayuri",
//     lastname:"katwe",
//     family:{
//         Father:"Mahendra",
//         Mother:"Jyoti"

//     }
// }
// console.log(person.family.Father)

//========================================================================================
//real time use of 263,247 line pgm 


// let object =
// {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }
//task is in this object i need id=email id of each person

// let blankObj = {}
// for (let i = 0; i < object.data.length; i++) {
//     blankObj[`${object[data[0]['id']]}`] = `${object.data[i]["email"]}`
// }
// console.log(blankObj)

// let blankObj = {}
// for (let i = 0; i < object.data.length; i++) {
//     blankObj[`${object['data'][i]['id']}`] = `${object['data'][i]["email"]}`
// }
// console.log(blankObj)


// let blankObj = {}
// for (let i = 0; i < object.data.length; i++) {
//     blankObj[`${object['data[i]']['id']}`] = `${object.data[i]["email"]}`
// }
// console.log(blankObj)

// let person = {

//     'fullName':"chinmay deshpande",
//     'age':23,
//     'skills':["python","java","js"],
//     'parents':{

//         "father":'shirish',
//         "mother":"kanchan"

//     }

// }
// let bb={}
// console.log(person['fullName'])
// console.log(person.fullName)

//========================================================================================================

// let abc={
//     true:"boolean",
//     [1,2,3]:"array"
// }
// console.log(abc.true)//in object we cant declare different datatypes in key so we go for maps 

//========================================================================================================

// let abc = {
//     true: "boolean",
//     [1, 2, 3]: "array"
// }

// let abc=new Map()
// abc.set(true,"mayuri")
// abc.set([1,2,3],'array')
// console.log(abc)

// // console.log(abc.keys())
// // console.log(abc.values())
// // console.log(abc.entries())

// console.log(abc.has('[1,2,3]'))//it gives false by direct entrig value so in that case need to give indirect value as below
//==============================================================================================================
// let b1=[1,2,3]
// let a1={a0:2,b0:3}
// let a2={a9:2,b9:3}

// let abc=new Map()
// abc.set(true,"mayuri")
// abc.set(b1,'array')
// abc.set(44,"num")
// abc.set(a1,a2)
// //console.log(abc)

// console.log(abc.get(true))
// console.log(abc.get(b1))
// console.log(abc.get(44))
// console.log(abc.get(a1))


// console.log(abc.has(a1))
// console.log(abc.has(true))
// console.log(abc.has(b1))

// abc.clear()
// console.log(abc)


//========================================next day==========================================================


// let human = {
//     fullname: "mayuri",
//     age: 23
// }
// //old way
// for (let keys in human) {
//     console.log(keys, human[keys])
// }

//---------------------------------------------------------------------------------
//new way
// console.log(Object.keys(human))//return type is array
// for (let keys of Object.keys(human)) {
//     console.log(keys)
// }
// //-----------------------------------------------------
// for (let value of Object.values(human)) {
//     console.log(value)
// }
// //-----------------------------------------------------
// console.log(Object.entries(human))

// for (let a of Object.entries(human)) {
//     console.log(a)
// }
// //------------------------------------------------------
// for (let [keys, value] of Object.entries(human)) {
//     console.log(keys, value)
// }

//-----------------------------------------------------------------------------------


// let quiz = {
//     "what is the capital of india": "a",
//     "what is the capital of pakistan": "b",
//     "what is the capital of brazil": "c",
//     "what is the capital of noida": "d"
// }


// let userAns = []
// let correctAnsCount = 0
// for (let question of Object.keys(quiz)) {
//     let userInput = prompt(question)
//     userAns.push(userInput)
// }
// console.log(userAns)
// let actualAns = Object.values(quiz)

// for (let i = 0; i < actualAns.length; i++) {
//     if (actualAns[i] ===userAns[i] ) {
//         correctAnsCount++
//     }
// }
// if (correctAnsCount == 4) {
//     document.write("You won the gold award")
// }

// else if (correctAnsCount == 3) {
//     document.write("You won the silver award")
// }

// else if (correctAnsCount == 1 && correctAnsCount <= 2) {
//     document.write("You won the bronze award")
// }
// else {
//     document.write("Please try again")
// }

//============================================================


// let quiz = {
//     "what is the capital of india": "a",
//     "what is the capital of pakistan": "b",
//     "what is the capital of brazil": "c",
//     "what is the capital of noida": "d"
// }

// let correctAnsCount=0
// for(let [que,ans] of Object.entries(quiz)){
// let userAns=prompt(que)
// if (userAns===ans){
//     correctAnsCount++
// }
// }
// if (correctAnsCount == 4) {
//     document.write("You won the gold award")
// }

// else if (correctAnsCount == 3) {
//     document.write("You won the silver award")
// }

// else if (correctAnsCount >0 && correctAnsCount <= 2) {
//     document.write("You won the bronze award")
// }
// else {
//     document.write("Please try again")
// }

//just for practice
// let quize = {
//     'What is Electrical': "EE",
//     "What is Mechanical": "ME",
//     "What is Computer": 'CE',
//     "What is Electronics": "ETC",
// }
// let count = 0
// for (let [key, value] of Object.entries(quize)) {
//     let inp = prompt(key)
//     if (inp == value) {
//         count++
//     }
// }
// switch (count) {
//     case 4:document.write("gold") 
//     break;

//     case 3:document.write("silver")
//         break;

//     case 2:document.write("bronze") 
//         break;

//     default:
//         document.write("plez try again")
// }


//=========================================================

//by using map method

// let que = new Map([
//     ["what is the capital of india", "a"],
//     ["what is the capital of pakisthan", "b"],
//     ["what is the capital of bangladesh", "c"],
//     ["what is the capital of afrika", "d"],
// ])
// correctCount = 0
// for (let [question, answer] of que.entries()) {
//     let userInput = prompt(question)
//     if (userInput == answer) {
//         correctCount++
//     }
// }
// if (correctCount == 4) {
//     document.write("Won Gold")
// }
// else if (correctCount == 3) {
//     document.write("Won silver")
// }
// else if (correctCount > 0 && correctCount <= 2) {
//     document.write("Won bronze")
// }
// else {
//     document.write("Plez try again")
// }

//======================================================================

// let days={
//     "monday":"stress",
//     "sunday":"relax"
// }

// for(let key of Object.keys(days)){
//     console.log(key)
// }

// for(let value of Object.values(days)){
//     console.log(value)
// }

// for(let [keys,value] of Object.entries(days)){
//     console.log(keys,value)
// }

//=====================================================================
// let a=10
// let aa=new Map()
// aa.set(true1,"mayu")
// console.log(aa)


//=============================================== <Next Day >====================================================

//object loop for key, value , entries
/* let person = {
    fullName: "mayuri",
    age: 23
}

for (let key of Object.keys(person)) {
    console.log(key)
}

for (let value of Object.values(person)) {
    console.log(value)
}

for (let [keys, value] of Object.entries(person)) {
    console.log(keys, value)
} */

//====================================================================================

// let user = new Map()

//-------------------------------------------------------------------
// user.set("fullname", "Mayu")
// user.set("age", 23)
// console.log(user)
// console.log(user.size)

//--------------------------------------------------------------------

// console.log(user.get("fullname"))
// console.log(user.get("age"))

//--------------------------------------------------------------------

// for(let key of user.keys()){
//     console.log(key)
// }

// for(let value of user.values()){
//     console.log(value)
// }

// for(let [key,val] of user.entries()){
//     console.log(key,val)
// }

//-----------------------------------------------------------------------

// let person = new Map([
//     ["fullName", "mayu"],
//     ["age", 23],
//     ["language", "english"]
// ])
// console.log(person)
// console.log(person.size) //return the given sixe of map
// console.log(person.has("age")) //check the property if found

// person.delete("age")
// console.log(person)

// person.clear()
// console.log(person)

//===============================================================================

//******      SET     ******//

// let person = new Set()
// person.add("names")
// person.add("age")
// person.add(true)
// person.add(null)
// console.log(person)


let user = new Set([
    "apple", "banana", "grapes"
])
// console.log(user)
// user.delete("apple")
// console.log(user)

// // user.clear()
// // console.log(user)

// for (let value of user.values()) {
//     console.log(value)
// }
console.log(user.has("apple"))

user.forEach((el)=>console.log(`${el} is best`))




let new1=new Set([
    "apple",true,[1,2,3],null,undefined,"apple"
])
console.log(new1)


let a1=[1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,1,2,3,4]
// let b1=new Set(a1)
// console.log(b1)

let mm=a1.filter(function(el,index){
    return a1.indexOf(el)==index

})
console.log(mm)








