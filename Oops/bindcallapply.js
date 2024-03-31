// // document.querySelector('h1').addEventListener('click',function(){

// //     document.querySelector('h1').style.color = "green";

// // })

// // bind apply call

// // this

// const person = {

//     firstName:'John',
//     lastName:'Deo',
//     printName:function(){
//         console.log(this.firstName + ' '+ this.lastName)
//     }
// }

// person.printName()
// let a = person.printName
// console.log(a)
// a()


// const counter = {

//     count:0,

//     incrementCounter:function(){
//         console.log(this);
//         this.count ++
//     }


// }

// document.querySelector('.btn').addEventListener('click',counter.incrementCounter)


// // ------------


// //bind()   - return function 




// function greeting(){

//     console.log('hello world')


// }

// function 

// greeting.language = "Hindi";
// console.log(greeting.language )


// const john = {

//     namey:"john",
//     age:20

// };


// const poorva = {

//     namey:"poorva",
//     age:29

// };


// function greeting(){

//     console.log(`Hi , I am ${this.namey} and I am ${this.age} years old` )


// }

// let a = greeting.bind(john)
// let b = greeting.bind(poorva)
// b()

// namey = 'chinmay'
// age = 20


// const john = {
//     //console.log(thos)
//     namey:"john",
//     age:20

// };


// const poorva = {

//     namey:"poorva",
//     age:29

// };







// function greeting(lang){
//     console.log(`Hi , I am ${this.namey} and I am ${this.age} years old` )
//     console.log(`${lang}`)
// }

// let a = greeting.bind(john,'hind')
// a()
// let b = greeting.bind(poorva,'eng')
// b()


// call 



// const john = {
//     //console.log(thos)
//     namey:"john",
//     age:20

// };


// const poorva = {

//     namey:"poorva",
//     age:29

// };


// function greeting(lang){
//     console.log(`Hi , I am ${this.namey} and I am ${this.age} years old` )
//     console.log(`${lang}`)
// }


// //bind is mostly used in call back function 
// //call() is used to immediately invoked function

// greeting.call(john,'hindi')
// greeting.call(poorva,'eng')


// apply .. call() , []

// const john = {
//     //console.log(thos)
//     namey:"john",
//     age:20

// };


// const poorva = {

//     namey:"poorva",
//     age:29

// };


// function greeting(lang){
//     console.log(`Hi , I am ${this.namey} and I am ${this.age} years old` )
//     console.log(`${lang}`)
// }


// //bind is mostly used in call back function 
// //call() is used to immediately invoked function

// greeting.apply(john,['eng'])
// greeting.apply(poorva,['hind'])



let a = {

    namey: 'chinmay',
    age: 23,
    greet: function() {

        console.log(`${this.age},${this.namey}`)
        greet2()

        function greet2() {
            console.log(`${this.age},${this.namey}`)

        }


    }


}

a.greet()

let a = {

    namey: 'chinmay',
    age: 23,
    greet: function() {

        console.log(`${this.age},${this.namey}`)


        var greet2 = () => {
            console.log(`${this.age},${this.namey}`)

        }

        greet2()

    }

}
a.greet()

