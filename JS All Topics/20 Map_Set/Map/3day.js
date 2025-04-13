
// objects 
// let days = {
//     monday:1,
//     tuesday:2,
//     wednesday:3,
//     thursday:4,
//     friday:5,
//     saturday:6,
//     sunday:7
// }

// old ways

// let person = {
//         fullName:"chinmay",
//         age:34,
//         skills:['python',"c++"],
//         days:days,
//         display:function(){
//             console.log('hello')
//         }
// }

// let person = {
//     fullName:"chinmay",
//     age:34,
//     skills:['python',"c++"],
//     days,
//     display:function(){
//         console.log('hello')
//     }
// }

// let person = {
//     fullName:"chinmay",
//     age:34,
//     skills:['python',"c++"],
//     days,
//     display(){
//         console.log('hello')
//     }
// }
// person.display()
//console.log(person)

// --------------------------------->

// let names = ["chinmay","sarika","poorva"]
// // for(let i = 0 ; i < names.length ; i++){
// //     console.log(names[i])
// // }

// for(let h of names){
//     console.log(h)
// }

// let person = {
//     fullName:"chinmay",
//     age:34,
//     skills:['python',"c++"],   
// }

// for(let key in person){
//     console.log(key,person[key])
// }

// console.log(Object.keys(person))

// for(let a of Object.keys(person)){
//     console.log(a) 
// }

// for(let a of Object.values(person)){
//     console.log(a) 
// }

// for(let a of Object.entries(person)){
//     console.log(a) 
// }

//console.log(Object.entries(person))

person = {
    fullName:"chinmay",
    age:34,
    skills:['python',"c++"],    
}

for(let arr of Object.entries(person)){
    console.log(arr)
}
// for(let [key ,value] of Object.entries(person)){
//     console.log(key,value)
// }
// console.log(Object.entries(person))

//let [a,b]= Object.entries(person)[0]
// [
//     [ 'fullName', 'chinmay' ],
//     [ 'age', 34 ],
//     [ 'skills', [ 'python', 'c++' ] ]
//   ]

// let h = [
//     {namee:"chinmay",rollNo:45},
//     {namee:"chinmayr",rollNo:454},    
//   ]

// for(let {namee,rollNo} of h){
//     console.log(namee,rollNo)
// }