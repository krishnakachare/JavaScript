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
// {
//     id: 1,
//     email: 'george.bluth@reqres.in',
//     first_name: 'George',
//     last_name: 'Bluth',
//     avatar: 'https://reqres.in/img/faces/1-image.jpg'
//   }


//**************************/2).Object destructuring/*********************************************

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