

alert("Hello")

// Map , filter , reduce , forEach ?? 

// Array 


var names = ["chinmay","amol","ram"]
console.log(typeof names)
console.log(names)

// Array


for(var i = 0 ; i < names.length ; i++){
    console.log("welcome "+names[i])
}


names.forEach((element,index,arr )=>{
    console.log("welcome "+ element)
})

// map  

// Method -----  action -- return 


var greeting = names.map((element,index)=>{
    return  index + 1 + " welcome "+ element
})
console.log(greeting)
console.log(names)


var birthdayYear  = [1999,2014,2003,1989,2004]
//[22,7]
var ages = birthdayYear.map((el)=>{
    return 2021 - el
})


// filter  return array 
var e = ages.filter((el)=>{
    return (el > 18)  
})
console.log(e)

// filtering the element
//filer / find 


// reduce element 


// -----------------------

var s = [1,2,3,4,5,6,7,8]
var sum = s.reduce((acc , el ,index, arr)=>{
    acc += el
    return acc
})
console.log(sum)

// var sumA = 0

// for(var i = 0 ; i < s.length ; i++){

//     sumA += s[i]

// }

// Of loop in js 


// var hindi = [1,2,3,4,5,6,7,8,9,10]
// for(var x of hindi){
//     console.log(x)
// }

// Normal for // map , filter , reduce, forEach


// Prototype ....


// What is prototype and proto type inheritance in js 

// 


// var chinmay = {
//     name:"chinmay",
//     age:23
// }

// var shraddha = {
//     name:"shraddha",
//     age:29
// }

// construtor ...

// Method added to every object

// const  Person = function(name,age){

//     // Instance variables
//     this.name = name
//     this.age = age 
//     this.calAge = function(){
//         console.log(2021 - this.age)
//     }

// }

// var chinmay = new Person("chinmay",23)
// var ram = new Person("ram",33)



// const  Person = function(name,age){

//     // Instance variables
//     this.name = name
//     this.age = age 
   

// }

// Person.prototype.calAge = function(){

//     console.log(2021 - this.age)

// }




// var chinmay = new Person("chinmay",23)
// chinmay.calAge()
// var ram = new Person("ram",33)
// ram.calAge()

// console.log(ram)
// console.log(chinmay)



// -----------------------------
class Person {

    constructor(name , age){
        this.age = age 
        this.name = name 
    }

    calAge(){
        console.log(2021 - this.age)

    }
}

Person.prototype.x = 10


var c = new Person("chinmay",23)
console.log(c)

var d= new Person("ram",32)
console.log(d)

d.x = 20

console.log(c.x)
console.log(d.x)




// Every object has inbuilt property prototype
// var names  = ["chinmay","chinmay2"]
// console.log(names)


// function constructor // object 





const Person = function(name, age){
    this.name = name 
    this.age = age


    // Never use this 

    this.calAge = function(){
        console.log(2021- d.age)

    }

}

// new --- keyword
// this --  basically refers to the current calling object
// function returns object withpu




var d = new Person("c" ,23)
console.log(d.calAge())



var age = 10

function person(){
    console.log(age) // window
    console.log(age)
    console.log(this)

}
window.alert()



// var person = {

//     age:12,
//     name:"chinmay",

//     cal:function(){
//         console.log(this)

//     }



// }


var person = {

    age:12,
    name:"chinmay",

    cal:function(){
        console.log(this)

        function add(){

            console.log(this)
        }

    }



}



var person = {

    age:12,
    name:"chinmay",

    cal:function(){
        console.log(this)

        var add = ()=> {

            console.log(this)
        }

    }



}


var person = {

    age:12,
    name:"chinmay",

    cal:function(){
        console.log(this)

        var add = ()=> {

            console.log(this)
        }

    }



}
















































