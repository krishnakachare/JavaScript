

let num=[4,5,6]
num[99]=34
console.log(num)
console.log(num.length)

// console.log("============Destructuring=================")
// //used=> There are huge data and we want specific data means there are 100 user and we want data of first 5 user then we are using destructing.

// console.log("=======For array:   let [first,second,third]=arrayname ========")
// console.log("=====for object:  let{proprtyone:aliasname,propertytwo:aliasname,propertythree:aliasname}=objectname.propertyname =====")

// //For Array
// // let firstname=["Amol","chinmay","ram","sham","ninad","vijeet"]
// // // Student1=firstname[0]
// // // Student2=firstname[1]
// // // Student3=firstname[2]
// // // Student4=firstname[3]
// // // console.log(Student1)
// // // console.log(Student2)
// // // console.log(Student3)
// // // console.log(Student4)

// // let [Student1,Student2,Student3,Student4]=firstname
// // console.log(Student1)
// // console.log(Student2)
// // console.log(Student3)
// // console.log(Student4)

// //For Object
// let student={
//     firstname:"chinmay",
//     age:23,
//     language:["marathi","hindi"]
// }

// // firstname=student.firstname
// // age=student.age
// // language=student.language
// // console.log(firstname)
// // console.log(age)
// // console.log(language)

// // let{firstname,age,language}=student
// // console.log(firstname)
// // console.log(age)
// // console.log(language)

// // let body= {
// //     Student:[
// //         {
// //             StudentOne:"Student1",
// //             age:1

// //         },
// //         {
// //             StudentTwo:"Student2",
// //             age:2

// //         },
// //         {
// //             StudentThree:"Student3",
// //             age:3

// //         },
// //         {
// //             StudentFour:"Student4",
// //             age:4

// //         },
// //         {
// //             StudentFive:"Student5",
// //             age:5

// //         },
// //         {
// //             StudentSix:"Student6",
// //             age:6

// //         },
// //         {
// //             StudentSeven:"Student7",
// //             age:7

// //         },
// //         {
// //             StudentEight:"Student8",
// //             age:8

// //         },
// //         {
// //             StudentNine:"Student9",
// //             age:9

// //         },
// //         {
// //             StudentTen:"Student10",
// //             age:10

// //         },
// //     ]
// // }

// // let[one,Two,Three]=body.Student
// // console.log(one)
// // console.log(Two)
// // console.log(Three)


// console.log("=============================================================")

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

// let[one,two,three]=body.data
// console.log(one)
// console.log(two)
// console.log(three)

// // let {id,email,first_name,last_name,avtar}= one
// // console.log(id)
// // console.log(email)
// // console.log(first_name)
// // console.log(last_name)
// // console.log(avtar)
// //OR//
// let {id:a,email:b,first_name:c,last_name:d,avtar:e}= one
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


console.log("==============Spread Operator===================")

let num1=[33,45,6,77,88,33,99,66,55,44,99]
function add(a,b,c,d){
    console.log(a+b+c+d)
}
add(...num1)

console.log("==================Rest Operators====================")


function add1(...arr){
return arr.reduce(function(acc,el){
    return acc+el
})
}
let ff1=add1(22,65,45,837,98,37,98,67,56,45,67,89,05,74,53,76)
console.log(ff1)
