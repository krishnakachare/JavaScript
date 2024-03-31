
// // let objectA = {
// //     'age':10,
// //     'rollNum':30

// // }

// // // Bracket notation
// // // console.log(objectA['age'])
// // // console.log(objectA['rollNum'])

// // // // Dot notation

// // // console.log(objectA.age)
// // // console.log(objectA.rollNum)

// // // // properties and method
// // // // human - name , age , color 
// // // // methods - eat() , walk()
// // // // function inside object method


// // // // function declaration 
// // // function add(){
// // //     console.log(9+8)
// // // }
// // // add()

// // // // function expression

// // // let add = function (){
// // //     console.log(9+8)
// // // }
// // // add()


// // // // Arrow function

// // // let add = ()=> {
// // //     console.log(9+8)
// // // }
// // // add()


// // //---------------------------->
// // let chinmay = {
// //     'fullName':"chinmay deshpande",
// //     'age':30,

// //     'talk':function(){
// //         console.log('hello '+ this.fullName)


// //     }

// // }

// // let amol = {
// //     'fullName':"amol rao",
// //     'age':30,

// //     'talk':function(){
// //         console.log('hello '+ this.fullName)


// //     }

// // }

// // console.log(chinmay.age)
// // chinmay.talk()
// // chinmay.talk()
// // amol.talk()


// //-----------------------------

// // let x  = 10

// // function add(){

// //     x = 30

// //     console.log(x) //30

// //     x = 40

// //     console.log(x) // 40




// // }
// // add()
// // console.log(x)



// // difference between let , const ,var

// // var x = 10 
// // console.log(x)

// // {
// //     console.log(x)

// // }

// // program 2


// // {
// //     var x = 10 
// //     console.log(x)  // 10
// // }

// // console.log(x) //10

// // program 3

// // variable defined with let keyword is blocked scope

// // {
// //     let x = 10 
// //     console.log(x)
// // }

// // console.log(x)


// // program 4

// // {
// //     const x = 10 
// //     console.log(x)
// // }

// // console.log(x)



// // let and const are blocked scope and var is function scoped


// //  let d = 10

// // {

// //     d = 30
// //     console.log(d) // 30


// // }

// // console.log(d) // 30


// //  program 5


// // let d = 10
// // {
// //     let d = 30
// //     console.log(d)  //30
// // }

// // console.log(d)  // 10


// // program  6

// // const r = 50;
// // {
// //     const r = 10 
// //     console.log(r)
// // }
// // console.log(r)
// //---------------------------->


// // program 6
// // var f = 10
// // function add() {
// //     var f = 30
// //     console.log(f) // 30

// // }
// // console.log(f) // 10
// // add()

// // ----------


// // program 6
// // var f = 10
// // function add(){
// //      f = 30
// //     console.log(f) // 30

// // }
// // console.log(f) // 10
// // add()



// // program 7

// // let d = 400
// // var f = 10
// // function add() {

// //     let d = 30
// //     f = 30
// //     console.log(f) // 30
// //     {
// //         let d = 45
// //         console.log(d) // 45
// //     }

// //     d = 70
// //     {
// //         console.log(d) // 70
// //     }

// // }
// // console.log(f) // 10
// // add()
// // console.log(d)//400

// // let counter = {
// //     count:0,
// //     next:function(){

// //         console.log(this)
// //         let r = this.count = this.count + 1
// //         return r 

// //     }

// // }

// // let r = counter.next()
// // console.log(r)

// // console.log(this)

// // alert('hello')
// // window.alert()

// // var f = 10 
// // console.log(window.f)
// // console.log(window === this)



// // console.log(this)

// // var f = 10
// // console.log(window.f)

// // //alert('hello')
// // window.alert("hello")



// // // function movie(){
// // //     console.log(this === window);
// // // }

// // // movie()
// // // window.movie()


// // //--------------------------------->




// // let bike = {
// //     brand:'KTM',
// //     getBrand:function(){
// //         return this.brand
// //     }

// // }

// // let bike2 = {
// //     brand:'KTM2'

// // }


// // let r = bike.getBrand()
// // console.log(r)

// // let b = bike.getBrand.bind(bike2)
// // console.log(b())




// // // let b = function(){
// // //     return bike2.brand
// // // }
// // // bind
// // console.log(b())


// // // call apply 

// // //var brand = "defaultBrand"


// // function getCompany(prefix){
// //     console.log(prefix + this.brand)
// // }

// // getCompany('Hi this is')

// // let audi = {
// //     brand:"Audi"
// // }

// // let BMW = {
// //     brand:"BMW"
// // }

// // getCompany.call(audi,'New to ')
// // getCompany.call(BMW,'New a ')

// // //---------------------------->

// // getCompany.apply(audi,['New to '])
// // getCompany.apply(BMW,['New a '])


// //--------------------------------->

















// //console.log(bike.getBrand())

// // let b = bike.getBrand
// // // let b = function(){
// // //     return this.brand
// // // }
// // console.log(b())



// // let a = function(){
// //     console.log(a+b)
// // }

// // console.log(a)

// // a()


// //------------------------------------------------------->





// // let person = {

// //     age:12,
// //     fullName:"chinmay",
// //     display:function(){
// //         return [12,13]
// //     }

// // }

// // let [a,b]= person.display()
// // console.log(a)
// // console.log(b)


// //--------------------------------

// let add = function(){
//     return 10 + 12
// }


// // let a = function(){
// //     return 10 + 12
// // }

// function addition(a){
//     return a
// }

// // let f = function(){
// //     return 10 + 12
// // }



// let f = addition(add)
// let adda = f()
// console.log(adda)







// // let person = {

// //     age:12,
// //     fullName:"chinmay",
// //     display:function(){
// //         return [12,13]
// //     }

// // }

// // let [a,b]= person.display()
// // console.log(a)
// // console.log(b)


// // let v = person.display
// // console.log(v())

// // var age = 10

// // let person = {
// //     age:12,
// //     fullName:"chinmay",
// //     display:function(){
// //         return this.age
// //     }

// // }


// // let person2 = {
// //     age:23,
// //     fullName:"chinmay deshpande",

// // }
// // console.log(person['age'])
// // let a= person.display()
// // console.log(a)


// // let v  = function(){
// //     return this.age
// // }

// // let v = person.display.bind(person2)
// // let va = person.display.bind(person)
// // console.log(v())
// // console.log(va())


// // //call and apply 
// // console.log(v.call(person2))
// // console.log(v.call(person))

person = {
    age:12,
    fullName:"chinmay",
    display:function(){
        return this.age
    }

}


person2 = {
    age:23,
    fullName:"chinmay deshpande",

}


// let r = function(a,b){
//     return  b + this.fullName
// }


// // r.call(person2,"good morning")
// // r.call(person,"good evening")


// r.apply(person2,...["good morning","goodevening"])
// r.apply(person,["good evening","goodmorning"])


// //--------------------------------------------------->


// var nam = "rohan"

// // let  g = {
// //     nam:"chinmay",
// //     age:30,
// //     display:function(){
// //         console.log("welcome "+this.nam)
// //         function greet(){
// //             console.log("welcome "+this.nam) // not chinmay

// //         }
// //         greet()

// //     }

// // }
// // g.display()


// //--------------------------->

// // let  g = {
// //     nam:"chinmay",
// //     age:30,
// //     display:function(){
// //         console.log("welcome "+this.nam)
// //         let  greet = ()=>{
// //             console.log("welcome "+this.nam) // not chinmay

// //         }
// //         greet()

// //     }

// // }
// // g.display()


// //----------------------------------------->


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

// // arrowfunction and function expression/functionExpression














person = {
    age:12,
    fullName:"chinmay",
    display:function(){
        return this.age
    }

}


person2 = {
    age:23,
    fullName:"chinmay deshpande",

}



// let r = function(b){
//     return  b + this.fullName
// }


// let f = r.call(person2,"good morning")
// let n = r.call(person,"good evening")

// console.log(f)
// console.log(n)



// let r = function(a){
//     return  [a[0] + this.fullName + a[1] + this.fullName]
// }
// console.log(r.apply(person2,["good morning","goodevening"]))
// //r.apply(person,["good evening","goodmorning"])


let arr = ["good morning","goodevening"]


let r = function(a,b){
    return  [a + this.fullName + b + this.fullName]
}
console.log(r.apply(person2,[...arr]))
//r.apply(person,["good evening","goodmorning"])




let amol = {
    age:23,
    firstName:'chinmay deshpande',
    language:"Hindi"
}
//  updating the value
amol.age = 24 
// Adding the new value 
amol.color = "white"
// del the value
delete amol.firstName

























