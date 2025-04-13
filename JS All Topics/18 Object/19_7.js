// In javascript all are object and its have properties and methods
// Object doesnot stores the value by index
// Key value / property value   in elements are stored

// let person = {
//     firstName:'krishna',
//     lastName:'kachare',
//     age:24,
//     id:11117
// }

// // elements (values) get from object  have a two ways

// // 1. dot notation
// // syntax ---    objectName.property
// console.log(person.firstName)             // krishna

// // 2. bracket notation
// // syntax ---    objectName['propertyName']
// console.log(person['id'])                     // 11117

// // e.g. tranversing throug object
// let students = {
//     firstName:'chinmay',
//     lastName:'deshpande',
//     age:34,
//     skills:['javascript','python','html','css'],
//     isAdult:'yes',
//     family:{
//         father:'shirish deshpande',
//         mother:'kanchan deshpande',
//         sister:'gauri deshpande',
//         flat:['f1','f2','f3']
//     }
// }


//  console.log(students.skills)             // [ 'javascript', 'python', 'html', 'css' ]
//  console.log(students['skills'])          // [ 'javascript', 'python', 'html', 'css' ]

// console.log(students['skills'][0])          // javascript

// console.log(students['family']['flat'])     // [ 'f1', 'f2', 'f3' ]

// console.log(students['family']['flat'][1])   // f2



// // e.g.  javascript --- object--- properties and methods

    //  let person = {
    //     firstName:'krishna',
    //     lastName:'kachare',
    //     age:24,
    //     id:11117,

    //     walk:function(){
    //         console.log('Hi i am walking')
    //     }
    // }

    // console.log(person['firstName'])                   // krishna
    // person.walk()                                      // Hi i am walking
    // console.log()                                 // console is object and log is method

    // console.log(typeof(person.walk))                   // FUNCTION



// we are updating the value for a property and insert new property with values

// let car = {
//     company:'mahindra',
//     mname:'marshal',
//     model:2001,
//     regno:123
// }
//  console.log(car)              // { company: 'mahindra', mname: 'marshal', model: 2001, regno: 123 }
//  console.log(car['company'])    // mahindra

// car.regno = 456
// console.log(car)                   // { company: 'mahindra', mname: 'marshal', model: 2001, regno: 456 }                 // updated regno
// car['regno'] = 789
// console.log(car)                // { company: 'mahindra', mname: 'marshal', model: 2001, regno: 789 }

// car.city = 'akluj'
// console.log(car)          //  {company: 'mahindra', mname: 'marshal', model: 2001, regno: 123, city: 'akluj' }    // city added

//  car['color'] = 'black'
//  console.log(car)         // {company: 'mahindra', mname: 'marshal',model: 2001, regno: 123,city: 'akluj', color: 'black'}    // color added



// // Loop
// // Dot notation does not works inside a loop                    max. use of bracket notation

// let car = {
//     company: 'mahindra',
//     mname: 'marshal',
//     model: 2001,
//     regno: 123,
//     city: 'akluj',
//     color: 'black'
//   }


//   for(let key in car){
//       console.log(key)          // company, mname, model, regno, city, color     // print all keys in car object
//       console.log(key,car[key])   // {company: 'mahindra', mname: 'marshal',model: 2001, regno: 123,city: 'akluj', color: 'black'}  // print all keys and its values in car object 
//   }


//   // here we can use other word rather than key

//   //e.g. 
//   for(let z in car){
//     console.log(z)          // company, mname, model, regno, city, color     // print all keys in car object
//     console.log(z,car[z])   // {company: 'mahindra', mname: 'marshal',model: 2001, regno: 123,city: 'akluj', color: 'black'}  // print all keys and its values in car object 
// }

