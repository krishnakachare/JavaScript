// var id = 100
// let person = {
//     id: 1,
//     mail: "dinga@gmail.com",
//     display() {

//         console.log(this)
//         console.log(typeof (this))
//         console.log("wlcm" + this.id) //1
//     }


//     //  dinga =  ()=> {
//     //     console.log(this)
//     //     console.log(typeof (this))
//     //     console.log("wlcm" + this.id)//100
//     // }
//     // dinga()

// }
// person.display()



// var 
// var n = 10

// let win = {
//     n: 'kk',
//     vsc: {
//         na: a,
//         n:3,
//         method:()=> {
//             console.log(this.n)
//             console.log(this)
//         }
//     }
// }
// a = win.n
// console.log(win.vsc.na)   // undefined
// win.vsc.method()


// var id = 100
// let person = {
//     id: 1,
//     mail: "dinga@gmail.com",
//     hi: {
//         a: 'hi'
//     },
//     display: function () {

//         // console.log(this)
//         // console.log(typeof(this))
//         // console.log("wlcm" + this.id) //error

//         dinga = function () {
//             console.log(this)
//             console.log(typeof (this))
//             console.log("wlcm" + this.id)
//             console.log('hello')
//         }
//         dinga()
//     }
// }
// person.display()


//------------------------------------------------------------------------------------------------------

let obj = {
    n:'kk',
    method(){
        console.log(this.n)
    }
}


obj.method()

// NOTE = Here in this new method writing syntax we by defalt use function decleration

//------------------------------------------------------------------------------------------------------------
























































//console.log(bike.getBrand())

// let b = bike.getBrand
// // let b = function(){
// //     return this.brand
// // }
// console.log(b())

// let a = function(){
//     console.log(a+b)
// }
// console.log(a)
// a()
//------------------------------------------------------->


// let person = {

//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return [12,13]
//     }

// }

// let [a,b]= person.display()
// console.log(a)
// console.log(b)


//--------------------------------

// let add = function(){
//     return 10 + 12
// }


// let a = function(){
//     return 10 + 12
// }

// function addition(a){
//     return a
// }

// let f = function(){
//     return 10 + 12
// }


// let f = addition(add)
// let adda = f()
// console.log(adda)


// let person = {

//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return [12,13]
//     }
// }

// let [a,b]= person.display()
// console.log(a)
// console.log(b)


// let v = person.display
// console.log(v())

// var age = 10

// let person = {
//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return this.age
//     }
// }


// let person2 = {
//     age:23,
//     fullName:"chinmay deshpande",

// }
// console.log(person['age'])
// let a= person.display()
// console.log(a)


// let v  = function(){
//     return this.age
// }

// let v = person.display.bind(person2)
// let va = person.display.bind(person)
// console.log(v())
// console.log(va())


// //call and apply 
// console.log(v.call(person2))
// console.log(v.call(person))

// person = {
//     age:12,
//     fullName:"chinmay",
//     display:function(){
//         return this.age
//     }
// }


// person2 = {
//     age:23,
//     fullName:"chinmay deshpande",
// }


// let r = function(a,b){
//     return  b + this.fullName
// }


// r.call(person2,"good morning")
// r.call(person,"good evening")


//r.apply(person2,...["good morning","goodevening"])
//r.apply(person,["good evening","goodmorning"])

//--------------------------------------------------->

var nam = "rohan"

// let g = {
//     nam: "chinmay",
//     age: 30,
//     display: function () {
//         // console.log("welcome "+this.nam)
//         let greet = () => {
//             console.log(this)
//             console.log(typeof (this))
//             // console.log("welcome "+this.nam) // not chinmay
//         }
//         greet()
//     }
// }
// g.display()

//--------------------------->

// let  g = {
//     nam:"chinmay",
//     age:30,
//     display:function(){
//         console.log("welcome "+this.nam)
//         let  greet = ()=>{
//             console.log("welcome "+this.nam) // not chinmay
//         }
//         greet()
//     }
// }
// g.display()


//----------------------------------------->


// let  g = {
//     nam:"chinmay",
//     age:30,
//     display:()=>{
//         console.log("welcome "+this.nam)
//         let  greet = ()=>{
//             console.log("welcome "+this.nam) // not chinmay

//         }
//         greet()

//     }
// }
// g.display()

// arrowfunction and function expression/functionExpression