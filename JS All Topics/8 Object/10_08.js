// Object  = This data structure strored descriptive information .
// cant stored values by index


// CURD OPERATION

//  C = Create property
//  U = Update property
//  R = Retrive property
//  D = delete property

// 1. Fetching(Retrive) the value from an object

//      I. Dot notation  = ObjectName.PropertyName
//     II. Bracket notation = ObjectName['PropertyName']

// 2. Update values in object     ( Dot , Bracket )   e.g. ObjectName.PropertyName = value       (PropertyName also called key)

// 3. Add/Insert properties in object ( Dot , Bracket )

// 4. delete property from an object       e.g. delete ObjectName.PropertyName

// Example =

// let person = {
//     pname: 'kriahna',
//     lastName: 'kachare',
//     age: 25
// }

// // 1. fetching values from an object

// console.log(person.pname)          // krishna
// console.log(person['pname'])       // krishna

// // 2.  Updating values in an object

// //or// person.pname = 'shrikrishna'
// person['pname'] = 'shrikrishna'
// console.log(person)          // { pname: 'shrikrishna', lastName: 'kachare', age: 25 }


// // 3. Add properties in an object

// //or// person.weight = 65
// person['weight'] = 65
// console.log(person)              // { pname: 'kriahna', lastName: 'kachare', age: 25, weight: 65 }


// // 4. delete properties from an object

// // delete person.weight
// delete person['weight']
// console.log(person)                 // { pname: 'kriahna', lastName: 'kachare', age: 25 }


// // for loop for array

// let a = [1,2,3,4]
// for(let i = 0; i < a.length; i++){
//     //console.log(i)                  // 0 1 2 3   ( print array index )
//     console.log(a[i])      // 1 2 3 4         ( all array elements )
// }

// // comapire above array loop for object loop

// // for loop for object

// for (let key in person) {
//     //console.log(key)               // pname  lastName  age
//     //console.log(person[key])       // kriahna  kachare  25
//     console.log(key,person[key])     // pname kriahna, lastName kachare, age 25
// }



// // passing array as parameter in function

// let j = [1,2,3,4,5,6]

// function printarr(arr){          //  arr =j

//     arr[0]=9
//     console.log(arr)       // [ 9, 2, 3, 4, 5, 6 ]

// }
// console.log(j)             // [ 1, 2, 3, 4, 5, 6 ]
// printarr(j)
// console.log(j)             // [ 9, 2, 3, 4, 5, 6 ]




// let x = 10
// function printx(y){
//     y = 30
//     console.log(y)       // 30
// }
// console.log(x)         // 10
// printx(x)
// console.log(x)        // 10


// // passing object as a parameter in function

// function printobj(obj){

//     person['pname'] = 'kk'
//     person['age'] = 22
//     console.log(obj)            // { pname: 'kk', lastName: 'kachare', age: 22 }
// }
// console.log(person)             // { pname: 'kriahna', lastName: 'kachare', age: 25 }
// printobj(person)
// console.log(person)             // { pname: 'kk', lastName: 'kachare', age: 22 }


















































































































// let person = ["chinmay", "deshpande", 14, 20]
// console.log(person[0])
// console.log(person.length)


// let person2 = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     rollNo: 12,
//     age: 14

// }

// // Dot notation
// //(Object.propertyname)
// // Bracket notation
// //Object['firstName']

// // Fetching the value from an object
// console.log(person2.firstName) // chinmay
// console.log(person2['age']) // 14

// // Updating the value for object

// person2.firstName = "tanmay"
// person2['firstName'] = "gauri"
// console.log(person2)

// // Adding property to object 
// person2.language = "marathi"
// person2['language'] = "hindi"
// console.log(person2)


// // Array 

// let h = [1, 2, 3, 4, 5]

// for (let i = 0; i < h.length; i++) {
//     console.log(i)
//     console.log(h[i])
// }

// person2 = {
//     firstName: "chinmay",
//     lastName: "deshpande",
//     rollNo: 12,
//     age: 14,
//     color: "Fair",
//     height: 6,
//     weight: 60
// }

// console.log(person2['rollNo'])
// // Dot notation or Bracket 
// // Dot notation does work in loops

// for (let key in person2) {
//     console.log(key, person2[key])
// }

// // delete is used to delete some property
// delete person2.firstName
// console.log(person2)


// // function 
// let j = [1, 2, 3, 4, 5, 6]

// function printArr(arr) {

//     //let arr = j
//     console.log(arr)
//     arr[0] = 56
//     console.log(arr)

// }
// printArr(j)
// console.log(j)


// let x = 10
// function printX(y) {
//     y = 30
//     console.log(y) // 30
//     console.log(x) // 10
// }
// printX(x)
// console.log(x) // 10


// ------------------------->

// let persond = {
//     namee: "chinmay",
//     age: 34
// }


// function printObj(obj2) {
//     obj2.namee = "chin"
//     console.log(obj2)     //     

// }
// console.log(persond) 
// printObj(persond)          // obj2 = persond
// console.log(persond)