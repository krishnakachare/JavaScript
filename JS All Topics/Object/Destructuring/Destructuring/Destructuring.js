let person = {

    namey: "chinmay",
    age: 28

}

let { namey, age } = person

console.log(namey)
console.log(age)


let { namey: fullName, age: totalAge } = person
console.log(fullName)
console.log(totalAge)


// let student = [

//     {
//         fullName:'chinmay',
//         lastName:'deshpande',
//         age:29

//     },

//     {
//         fullName:'amol',
//         age:29

//     },
//     {
//         fullName:'mayuri',
//         lastName:'rao',

//     }


// ]


// for(let i = 0 ; i < student.length; i++){
//     const { fullName = 'notgiven', lastName:surname = "nolastname",age:totalAge= 0} = student[i]
//     console.log(fullName)
//     console.log(surname)

// }



// Array 

// nested array 

// let a = [1,2,3,[6,7,8,9]]
// let [e,b,c,[d,r,f,g]] = a 
// console.log(e,b,c,d,r,f,g)

// // nested object 

// let obj = {

//     fullName:'chinmay deshpande',
//     parent:{
//             mother:'kanchan',
//             father:'shirish'
//     }

// }

// let {fullName:name,parent:{mother=" noname",father}} = obj
// console.log(fullName)
// console.log(mother)
// console.log(father)


// let a = 20
// let b = 11

// let x = { a:23,b:19};
// ({a,b} = x);

// console.log(a)
// console.log(b)


// spread ---- complex and rest operator 



// const arr = [7,8,9,10]
// const arr2 = [1,2,3,4,57,6]
// console.log(arr[0],...arr)


// let a = [...arr,...arr2]
// console.log(a)
// console.log(arr)
// console.log(arr2)

// let b = [...arr,30000]
// console.log(b)


// let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 

// function display(a,b,c,d,e){

//     console.log(a,b,c,d,e)


// }
// display(person[0],person[1],person[2],person[3],person[4])




// let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 
// function display(a,b,c,d,e){
//     console.log(a,b,c,d,e)
// }
// display(...person)


// //spread   string map set 
// let fullName = "sweta"
// console.log(...fullName)