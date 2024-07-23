// let numbers = [1,6,7]
// console.log(numbers)

// numbers[99] = 22
// console.log(numbers.length)
// console.log(numbers)

// //  Destructuring 

// let firstNames = ["Amol","Chinmay","Ram","Sham","Ninad","Vijeet"] 
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

// fetch('https://reqres.in/api/users?page=2', {
//   method: 'GET', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

// fetch("https://reqres.in/api/users?page=2", {
//     method: "get",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// })
//     .then((response) => {
//         return response.json()
//     }).then(function (data) {
//         data = data.data
//         data.forEach(el => {
//             document.write(`You id is: <h1>${el.id}<h1>`)
//             document.write(`You id is: <h1>${el.email}<h1>`)
//             document.write(`You id is: <h1>${el.first_name}<h1>`)
//             document.write(`You id is: <h1>${el.last_name}<h1>`)
//             document.write(`<img  src=${el.avatar}>`)
//         });
//     });

// let body = {
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

// body.data.forEach(function(el){
//         document.write(`You id is: <h1>${el.id}<h1>`)
//         document.write(`You id is: <h1>${el.email}<h1>`)
//         document.write(`You id is: <h1>${el.first_name}<h1>`)
//         document.write(`You id is: <h1>${el.last_name}<h1>`)
//         document.write(`<img  src=${el.avatar}>`)
//     }
// )

// let [studentOne,studentTwo,studentThree] = body.data
// let {id,first_name,last_name,email,avatar} = studentOne

// spread operator 
// rest operarion

// let numbersa = [33,44,66,77,88,99,100]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }
// add(...numbersa)

// let numbers = [33,44,66,77,88,99,100]
// function add(arr){
//     console.log(arr[0]+arr[1]+arr[2]+arr[3])
// }
// add(numbers)
//------------------------->

// let numbersaa = [33, 44, 66, 77, 88, 99, 100]
// function add(...a) {
//     return a.reduce(function (acc, el) {
//         return acc + el
//     })
// }
// let ffff = add(1, 2, 213, 13, 12, 312, 321, 3, 213, 213, 21, 321, 3, 123, 12, 312, 3, 21, 312)
// console.log(ffff)
//-------------------------------->

// let  names = ["ninad","amol","shikrant"]

// let firstOne = names[0]
// let firstOneB = names[1]
// let firstOneC = names[2]
// console.log(firstOne)
// console.log(firstOneB)
// console.log(firstOneC)

// let [firstOne,firstOneB,firstOneC] = names
// console.log(firstOne)
// console.log(firstOneB)
// console.log(firstOneC)

// let transactions = [23,44,55,66,77,55,543,3455,345345,3453,3333]
// //transactions.reverse()
// let [tran1,tran2,tran3,tran4,tran5] =transactions.slice(-5)
// let [tran1,tran2,tran3,tran4,tran5] = transactions.reverse()
// ------------------------------>

//objects 
// let amol = {
//     firstName:"chinmay",
//     age:34,
//     skills:["python","java","javascript"]
// }
// let {firstName:fn,skills:skill,age:ag} = amol

// console.log(fn)
// console.log(skill)
// console.log(ag)
//------------------------------------

//spread 
let arr = [1,2,3,4,55,66,77,88,99]

//[99,88,77,66,55,4,3,2,1]
function add(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
add(...arr.reverse())

let arr = [1,2,3,4,55,66,77,88,99]
//[99,88,77,66,55,4,3,2,1]

function add(arr){
    console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5])
}
add(arr.reverse())
//-------------------------------- 

//rest operator
function taxCollection(...arr){
        let add = arr.reduce(function(acc,el){
            return acc + el
        })
        let add2 = arr.reduce(function(acc,el){
            return acc + el
        })
        return [add,add2]
}

let [add,add3] = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)

function taxCollection(...arr){
    let add = arr.reduce(function(acc,el){
        return acc + el
    })
    let add2 = arr.reduce(function(acc,el){
        return acc + el
    })
    return {'firstName':"chinmay",'age':23}
}

let { firstName:fn ,age:ag} = taxCollection(12,21,12,21,21,12,21,21,2,12,12,1,2,12,12)

// array ,string , objects , functions regularExpression,
