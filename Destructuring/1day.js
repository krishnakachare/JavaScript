// Destructuring = Required starting portion (can achive required portion of an object) of object getting that for used destructuring
// Types of destructuring = 1) Array destructuring  2) Object destructuring  3) String destructuring

// let numbers = [1,2,3,4]
// numbers[99] = 0
// console.log(numbers.length)
// console.log(numbers)            // [ 1, 2, 3, 4, <95 empty items>, 0 ]


//*******************/ 1). Array destructuring   /*****************************************/

// Syntax =>    let [elNames,elNames,elNames] = Array (or object)

// elNames you can gives anythings with comma seperated (becoz Array stored elements in index value )

// Example 1 =>

// let n = ['ravi','swapnil','vishwajit','avi','kk']

// let [fone,ftwo,fthree,ffoure] = n
// console.log(fone,ftwo)                         // ravi swapnil


// Example 2 =>  API response body

// let body ={
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


// let [obj1,obj2,obj3] = body.data

// console.log(obj1)
// // {
// //     id: 1,
// //     email: 'george.bluth@reqres.in',
// //     first_name: 'George',
// //     last_name: 'Bluth',
// //     avatar: 'https://reqres.in/img/faces/1-image.jpg'
// //   }


//**************************/   2).Object destructuring   **************************************************

// syntax =>  let {keyName:alias, keyName:alias, keyName:alias} = object

// keyName is exact of in object keyName and its comma seperated
// we can use alias rather than keyName when we print/use property value but first required assign keyName to alias which is above shows
                        

// let student = {
//     firstName : 'krishna',
//     lastName : 'kachare',
//     age : 25
// }

// let {age,firstName} = student             // keys must be as it is from object .  its (key) order does not matter 
// console.log(age)     // 25

// Print values using alias

// let {age:a,firstName:n} = student             // keys must be as it is from object .  its (key) order does not matter 

// console.log(a)     // 25
// console.log(n)     // krishna

//----------------------------------------------------------------------------------------------------
















































// let numbers = [1,6,7]
// console.log(numbers)

// numbers[99] = 22
// console.log(numbers.length)
// console.log(numbers)


//  Destructuring 


//let firstNames = ["Amol","Chinmay","Ram","Sham","Ninad","Vijeet"] 
// studentOne = firstNames[0]
// studentTwo = firstNames[1]
// studentThree = firstNames[2]
// studentFour = firstNames[3]
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)


// ES6
// let [studentOne,studentTwo,studentThree,studentFour,studentFive] = firstNames
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)
// console.log(studentFive)

//let [studentOne,studentTwo,studentThree,studentFour,studentFive]= 
// let body = {
//         students:[
//             {
//                 studentOne:"student1",
//                 age:1
//             },
//             {
//                 studentOne:"student2",
//                 age:2
//             },
//             {
//                 studentOne:"student3",
//                 age:3
//             },
//             {
//                 studentOne:"student4",
//                 age:4
//             },
//             {
//                 studentOne:"student5",
//                 age:5
//             },
//             {
//                 studentOne:"student6",
//                 age:6

//             },{
//                 studentOne:"student7",
//                 age:7

//             },
//             {
//                 studentOne:"student8",
//                 age:8

//             },{
//                 studentOne:"student9",
//                 age:9

//             },
//             {
//                 studentOne:"student10",
//                 age:10


//             }


//         ]


// }


// body.students.forEach(function(el){
//     console.log(el.studentOne)
//     console.log(el.age)

// })



// let [studentOne,studentTwo,studentThree,studentFour,studentFive]=  body.students
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)
// console.log(studentFive)

//--------------------------------------------------------->


// let studentOne = {
//     firstName:"chinmay",
//     age:23,
//     languages:['marathi','hindi'] 

// }

// let {propertyName:aliasName,propertyName:aliasName} = obj
// let [firstName,secondName] = obj


// let {firstName:fn,age:a,languages:lang} = studentOne
// console.log(fn)
// console.log(a)
// console.log(lang)


// let studentName = studentOne['firstName']
// let studentAge = studentOne['age']
// console.log(studentName,studentAge)

//------------------------------------------------>


// let body ={
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }



// let [studentOne,studentTwo,studentThree] = body.data
// let {id,first_name,last_name,email,avatar} = studentOne

