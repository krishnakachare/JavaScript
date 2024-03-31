// Map stores the value inform of key value 


var person = {
    name: 'chinmay',
    age: 20
}

//Map  can hold objects and primitive data types as 
//their keys and values 

// Normal object 

// Array object 

// object literal

// Iterator -  an ordered is maintain



// let map1 = new Map([[1,2],[2,3],[3,4],[4,5]])
// console.log(map1)
// var map2 = new Map([["firstName",'chinmay'],["lastName","deshpande"],['rollNumber',34]])
// console.log(map2)
// var map2 = new Map([["wholenumber",[1,2,3,4,5]],["decimal",[13.5,2.4,5,6]],['negative',[-1,-2,-3,-4]]])
// console.log(map2)

// let  quiz = new Map([
//     ['question','answer'],


//     ['capital of MH','mumbai'],
//     ['capital of MP','bhopal'],
//     ['capital of UP','Lucknow']

// ])


// let sum = 0 ;

// let bb = quiz.entries()[0]
// console.log(bb)


// for(let [key,value] of quiz.entries()){

//     if(key != 'question' ){
//        let answer =  prompt(key)
//         if (answer == value){
//             sum += 0
//         }


//     }

// }












// Set method is used to set the value in the map
// console.log(quiz)
// quiz.set('capital of Rajasthan','jaipur')
// console.log(quiz)
// console.log(quiz.get('question'))   
// console.log(quiz.size)



// deleting the value from the map 
//quiz.delete('question')
// console.log(quiz)
// quiz.clear()
// console.log(quiz)
//console.log(quiz.has('capital of M'))






// let a = quiz.entries()
// console.log(a)

// for(let [key,value] of quiz.entries()){
//     console.log(key,value)
// }



// for(let [key,value] of quiz.entries()){
//     console.log(key,value)
// }

// for(let key of quiz.keys()){
//     console.log(key)
// }


// for(let key of quiz.values()){
//     console.log(key)
// }
// Set -- datastructure --
const menu = new Set([

    'dosa',
    'wada',
    'dosa',
    'samosa',
    'pulav',
    'biryani'


])

//  console.log(menu)
//  console.log(menu.add('paper dosa'))
//  console.log(menu.clear())
//  console.log(menu.size)
//  console.log(menu.has(dosa))
//  menu.delete(samosa) 



// for(let order of menu ){
//     console.log(order)
// }

// let b = ['A','B','C','B','C']
// let unique = [...new Set(b)]
// console.log(unique)

// let questions = new Map([

//     ['question','please tell my favourite subject?'],
//     [1,'java'],
//     [2,'javascript'],
//     [3,'python'],
//     [4,'react js'],
//     ['correct',2],
//     [true,'Answer is correct'],
//     [false,'Answer is incorrect']

// ])
// questions.get('question')

// for(let [key,value] of questions.entries()){

//     if(typeof key === 'number'){
//         console.log(`${key} -  Answer ${value}`)
//     }
// }
// const answer = Number(prompt('your answer'))

// if(questions.get('correct') === answer){
//     console.log(questions.get(true))
// }
// else{
//     console.log(questions.get(false))
// }

// //  object literal 

// var days = {

//     mon:2,
//     tue:3

// }

// let person2 = {
//     name:'chinmay',
//     age:30,
//     days

// }

// console.log(person2)



// let person3 = {
//     name:'chinmay',
//     age:30,
//     age:function(){
//         console.log(`${this.age} ${this.name}`)
//     }

// }

// console.log(person3)

// // -------------------------------------------------------------------
// let person4 = {
//     name:'chinmay',
//     age:30,
//     age(){
//         console.log(`${this.age} ${this.name}`)
//     }
// }
// console.log(person4)

//---------------------------------------------------------------------------

// let weeks = ['sun','monday']


// let person4 = {
//     name:'chinmay',
//     age:30,
//     [weeks[0]]:2,
//     age(){
//         console.log(`${this.age} ${this.name}`)
//     }
// }
// console.log(person4)





///  


let days = {

    sun: {

        js: 2,
        python: 3

    },
    mon: {
        js: 2,
        python: 3

    },



}



console.log(days.mon.js)
console.log(days.tue?.js)


if(days.tue){
    console.log(days.tue.js)
}else{
    console.log('Not available on tue')
}









































// let  login = new Map([
//     [document.querySelector('#login'),loginForm],
//     [document.querySelector('#login'),loginForm],

// ])


//  let b = document.querySelector('#login')


















