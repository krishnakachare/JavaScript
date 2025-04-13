// let r = "chinmay deshpande"
// console.log(`My name is ${r}`)

// // ---------------- object 

// let h = {

// }
// h['age'] = 10
// console.log(h)


// {
//     'day 1': 'Sunday',
//     'day 2': 'Monday',
//     'day 3': 'Tuesday',
//     'day 4': 'Wednesday',
//     'day 5': 'Thursday',
//     'day 6': 'Friday',
//     'day 7': 'Satursay'
//   }


// let human = {

//     'person':"chinmay",
// }

// let b = {
//     [`day ${days[0]}`]:'Sunday',
//     [`day ${days[1]}`]:'Monday',
//     [`day ${days[2]}`]:'Tuesday',
//     [`day ${days[3]}`]:'Wednesday',
//     [`day ${days[4]}`]:'Thursday',
//     [`day ${days[5]}`]:'Friday',
//     [`day ${days[6]}`]:'Satursay'  
// }

// console.log(b)


// let days = [1,2,3,4,5,6,7]
// let names = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]

// let g = {}

// for(let i = 0 ; i < days.length;i++){
//     g[`day ${days[i]}`]= names[i]
// }
// console.log(g)



//console.log(7:'michael.lawson@reqres.in')

// let person = {
//     7:"michael.lawson@reqres.in"
// }

// let objA = {
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
//         }
//     ] 
// }

// for(let i = 0 ; i < objA.data.length ; i++){
//     person[`7`] = `${objA.data[i]['email']}`
// }
// console.log(person)

//---------------------------->

// let person = {
//     'fullName':"chinmay deshpande",
//     'age':23,
//     'skills':["python","java","js"],
//     'parents':{
//         "father":'shirish',
//         "mother":"kanchan"
//     }
// }
// console.log(person.parents.mother)



// let k = {
//     true:[23,45,66],
//     [1,2,3]:true
// }
// console.log(k)
// console.log(true)


// Map 
// let map = {

// }

let b = [1,2,3]

let abc = new Map()
abc.set(true,'hello')
abc.set([1,2,3],'hello')
abc.set(b,'hello')

console.log(abc.keys())
console.log(abc.values())
console.log(abc.entries())

// abc.clear()
// console.log(abc)

console.log(abc.has(true))
console.log(abc.has(b))