// let person = {

//     namey:"chinmay",
//     age:28

// // }

// // let {namey,age} = person

// // console.log(namey)
// // console.log(age)


// // let {namey:fullName,age:totalAge} = person
// // console.log(fullName)
// // console.log(totalAge)


// // let student = [

// //     {
// //         fullName:'chinmay',
// //         lastName:'deshpande',
// //         age:29

// //     },

// //     {
// //         fullName:'amol',
// //         age:29

// //     },
// //     {
// //         fullName:'mayuri',
// //         lastName:'rao',

// //     }


// // ]


// // for(let i = 0 ; i < student.length; i++){
// //     const { fullName = 'notgiven', lastName:surname = "nolastname",age:totalAge= 0} = student[i]
// //     console.log(fullName)
// //     console.log(surname)

// // }



// // Array 

// // nested array 

// // let a = [1,2,3,[6,7,8,9]]
// // let [e,b,c,[d,r,f,g]] = a 
// // console.log(e,b,c,d,r,f,g)

// // // nested object 

// // let obj = {

// //     fullName:'chinmay deshpande',
// //     parent:{
// //             mother:'kanchan',
// //             father:'shirish'
// //     }

// // }

// // let {fullName:name,parent:{mother=" noname",father}} = obj
// // console.log(fullName)
// // console.log(mother)
// // console.log(father)


// // let a = 20
// // let b = 11

// // let x = { a:23,b:19};
// // ({a,b} = x);

// // console.log(a)
// // console.log(b)


// // spread ---- complex and rest operator 



// // const arr = [7,8,9,10]
// // const arr2 = [1,2,3,4,57,6]
// // console.log(arr[0],...arr)


// // let a = [...arr,...arr2]
// // console.log(a)
// // console.log(arr)
// // console.log(arr2)

// // let b = [...arr,30000]
// // console.log(b)


// // // let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 

// // // function display(a,b,c,d,e){

// // //     console.log(a,b,c,d,e)


// // // }
// // // display(person[0],person[1],person[2],person[3],person[4])




// // let  person = [1,2,3,44,55,6,77,88,99,00,66,77,8,99] 
// // function display(a,b,c,d,e){
// //     console.log(a,b,c,d,e)
// // }
// // display(...person)


// // //spread   string map set 

// // let fullName = "sweta"

// // console.log(...fullName)



// //Rest operator = Spread operators



// let arr = [1,23,5]
// let arr2 = [12,3,4]
// console.log(...arr,...arr2)

// let skills = ["marathi","hindi","tamil"]
// console.log(...skills,'sankrit')


// // spread interables 


// // index


// namet = "chinmay"
// console.log(...namet,' ','r')



// var info = [4, 'automatic' , 'auto' , 'blue' ]

// function vehicle(wheel,brakes,gear){
//     console.log(wheel)
//     console.log(brakes)
//     console.log(gear)
// }
// vehicle(...info)

// // object --- spread

// var person = {

//     name:"chinmay",
//     age:20,
//     roll:23


// }

// var lang = {
//     lang:"Marathi"
// }

// console.log({...person,...lang})
// console.log(person)
// console.log(lang)



// let h = [1,2,4]
// let n = [3,46,4]

// let newArr = [...h,...n]
// let u = newArr.reduce(function(acc,ele){
//   return acc + ele
// })
// console.log(u)


// // Rest pattern 

// account = [

//     {
//         name:'chinmay',
//         age:30,
//         id:12

//     },

//     {

//         accountBal:10000,
//         transaction:[1,3,4,4,5,6,7,7,66,6,6,66,6,6,6,6,6,6,6,324,2,34,234,2,4]


//     }

// ]


// function add(a,...arr){
//     return arr.reduce(function(acc,ele){
//         return acc + ele
//       })
// }
// console.log(add(...account[1]['transaction']))


// function add(a,...arr){
//     console.log(a)
//     return arr.reduce(function(acc,ele){
//         return acc + ele
//       })
// }
// console.log(add(...account[1]['transaction']))




// function add(a,...arr){  // rest parameter
//     console.log(a)
   
// }
// console.log(add(...account[1]['transaction'])) // spread operator



// ingredents = ['mushroom','bread','onions','tomato','potota']

// function pizzaC(a,b,c){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// pizzaC(...ingredents) // spread operator



// // rest parameter 


// let ay = [1,2,3,1,3,4];
// let [a, ,b,...others] = [1,2,3,1,3,4];
// console.log(a)
// console.log(b)
// console.log(others)

//------------- 

//python - Array -- [1,"A"]
//[1,"A"] -- List 

//Array- [12,23,1,4,41] .... typeScript --Num

































































