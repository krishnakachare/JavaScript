

// -----    oops   ------ Dom 

// class , object , encapsulation , inheritace , private variable 


// protype

// creating object using function constructor

// Prototype inheritance



//Function constructor

// function Person(age,name){
//     this.name = name;
//     this.age = age;
//     // this.displayName = function(){

//     //     console.log(this.age)

//     // }

// }

// protype inheritance




// Person.prototype.displayName = function(){

//     console.log(this.age)

// }

// var x = new Person(2,'s')
// var y = new Person(3,'n')
// var w = new Person(4,'m')
// var e = new Person(5,'t')
// var r = new Person(4,'n')

// console.log(x)
// console.log(y)

// var b = [1,2,3,4,5,6]
// var n = "chinmay"
// console.log(b.pop())



// ES6 classes


// class Person{

//     constructor(name,age){
//         this.name = name;
//         this.age = age

//     }
//     displayName(){
//         console.log(this.age)
//     }
// }

// var a = new Person('chinmay',23)
// a.displayName()
// Person.prototype.x = 14
// console.log(a)



//closure

//arrow functions 

// lexical scope 

// protype , prototype inheritance

// this keyword , arrow function and function

// object creation using --- function constructor , class 

// object -- looping though 

//array 

// array --- forEach , reduce , filter , map with example

// hoisting 




// var age = "sham"
// var roll = 29


// Hoisting

// var x ;
// console.log(x)  // undefined
// x = 10


// console.log(x)
// var x = 10         


// let 

// let x = 20
// x = 30

// const x = 10 
// x = 30


//var is functioned scope 

// let and const are  blocked scope





// function add(){

//     var x = 10

//     {

//         let y = 10 
//         const t = 20


//         console.log(y +t)


//     }

//     console.log(y)
//     console.log(x) //
//     console.log(t)



// }








// console.log(x)
// let x = 10

// console.log(x)
// const x = 10


// Hoisting with function  


// function declartion

// add(2,3)
// function add(x,y){
//     console.log(x+y)
// }


// var add ;
// console.log(add)
// //add(2,4)
// var add = function(x,y){
//     console.log(x+y)

// }



// add(2,4)
// let add = function(x,y){
//     console.log(x+y)

// }


// same is the case with constant


// function add(){


//     add2 (7,8)

//     function add2(x,y){
//         console.log(x+y)
//     }


// }

// add()

// function add(){


//     add2 (7,8)

//     var add2 = function(x,y){
//         console.log(x+y)
//     }


// }

// add()


// function add(){


//     add2 (7,8)

//     var add2 = (x,y)=>{
//         console.log(x+y)
//     }


// }

// add()

//------------------------------------------------------

// this keyword

// var firstName = "raj"
// var lastName = "sharma"
// var age = 30


// var obj = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:30,
//     add:function(){
//         //console.log(this)
//         // string interpolation
//         //console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)
//         console.log(` My name is ${firstName+" "+lastName} and my age is ${age}`)
//         add2()
//         function add2(){


//             console.log(this)
//             console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)//



//         }

//     }


// }

// this = obj


// obj.add()




// var firstName = "raj"
// var lastName = "sharma"
// var age = 30


// var obj = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:30,
//     add:function(){
//         //console.log(this)
//         // string interpolation
//         //console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)
//         console.log(` My name is ${firstName+" "+lastName} and my age is ${age}`)
//         let add2 =()=>{
//             console.log(this)
//             console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)//

//         }

//         add2()

//     }


// }

// // this = obj
// obj.add()


//  lexical scope 

// var firstName = "raj"
// var lastName = "sharma"
// var age = 30

// // this - window


// var obj = {

//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:30,
//     add:() =>{
//         //this
//         //console.log(this)
//         // string interpolation
//         //console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)
//         console.log(` My name is ${firstName+" "+lastName} and my age is ${age}`)
//         let add2 =()=>{
//             console.log(this) // parent
//             console.log(` My name is ${this.firstName+" "+this.lastName} and my age is ${this.age}`)//

//         }

//         add2()

//     }


// }

// // this = obj
// obj.add()


// Lexical scope

function functionOne() {

    var a = 10
    var b = 20
    //console.log(c)
    functionTwo()

    function functionTwo() {

        var c = 20
        console.log(a + b + c)
        console.log(d)

        functionThree()
        function functionThree() {
            var d = 40
            console.log(a + b + c + d)
            console.log(e)

        }


    }
}

// closure 


function add(){

    console.log(10) // 10

    return 10 

    console.log(10)

}


var y = add()
console.log(y) // 10



// closures

// parent function methods and properties accessible in returned function 
// This is closure



// function add(){
//     var x = 10 
//     return function(){
//         console.log(x) // 10
//     }
// }

// var y = add()
// console.log(y)
// y()



b = [2000,1999]

// [21,22]


n = []
for(var i = 0 ; i < b.length ; i++){
    n.push(2021 -b[i])
}
console.log(n)

// .each()

var e = b.map(function(el,index,arr){

    return 2021-el

})
console.log(e)


var e = b.filter(function(el){

    return el > 1000

})
console.log(e)

//---------------------------------
var e = b.reduce(function(acc = 0 , el){
    return el+ acc
})
console.log(e)


e.array.forEach(element => {
    
});







































































