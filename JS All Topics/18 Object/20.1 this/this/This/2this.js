// IN OBJECT PROPERTY VALUE IS FUNCTION IS CALLED METHOD()
// WINDOW is super object
// whenever variables defined with let, const, var and any method/function directly call then its altimatly call/defined on super object/WINDOW
// Window refers to browser(DOM) and window is have global scope

// this = current calling object
// this always refers to any object
// this value is complete object


// let counter = {
//     count: 0,
//     next: function () {                     // here property(key) next have value is function    (thats its called method)

//         console.log(this)              // { count: 0, next: [Function: next] }      // this have value of complete object 

//         let kk = this.count = this.count + 1
//         console.log(kk)                // 1
//         return kk

//         // this.count++
//         // ++this
//         // this.count += 1                  // increase value of count by 1

//     }
// }

// next()          // next is not defined  bcoz its call on window and in window object next not defined
// counter.next()                  // next() method called on counter object and counter object defined in window
// counter.next()

// let zz = counter.next() // in zz stores next() method

// let zz1 = counter.next  // in zz1 stores property next value   and  which is a function and
// AND this time THIS keywords not focused on counter object its seperated from counter object
// when this have not any object referance then its refers to global (window) object and its (this) value is window 



// var x = 10                    
// console.log(x)        // 10
// console.log(window.x) // 10   // we can also write it like this (result shows on browser) // type of window is globalthis

// var have global scope when we want se results in window we must use of var insted of let,const
// window results not seen in VSC terminal its shows on only browser(DOM)

// alert('hello')
// window.alert('hello')          (we can also write like this)


// console.log(this)   // { }     means its gives global object(window) becoz its currenty refers to window
// console.log(window === this)             // true


// function global(){
//     console.log(window === this)
// }
// global()         // true      // becoz function global() calling on global object/function write in globaly altimatly its refers to window
// window.global()  // true     // we can also write like this 


//-----------------------------------------------------

// let bike1 = {
//     brand: 'HONDA',
//     getbrand: function () {
//         console.log(this.brand)    // HONDA
//          return this.brand
//     }
// }

// let bike2 = {
//     brand: 'HERO',
//     // getbrand : function(){
//     //     console.log(this.brand)
//     // }
// }

// let x = bike1.getbrand()
// console.log(x)                 // HONDA  when function not return this.brand then its undefined

// let xx = bike1.getbrand
// console.log(xx)               // its value is function ( simply  we fetch value of object property from object)


// let xx1 = bike1.getbrand  // in xx1 stores property getbrand value   and  which is a function and
// AND this time THIS keywords not focused on bike1 object its seperated from bike1 object
// when this have not any object referance then its refers to global (window) object and its (this) value is window (object) 

// // let xx1 = function(){
//     //     console.log(this.brand)          // undefined  ( becoz in object window not have property brand)
//     // }

// // this = window
// // this.brand = undefined         



// ####################################### THIS METHODS ####################################



// ## 1). bind()


// set/pass this value
// make replica of function
// () in this we set this (object) value
// its method apply on object property


// let xx = bike1.getbrand.bind(bike2)     // HERO            // we assign value to the property . value is function and its pass arguments = this = object
// //    xx = function () {
// //         console.log(this.brand)
// //     }                                      // this = bike2        // here xx is a method() becoz its value is function
// console.log(xx())   // HERO  or  Undefined



// method calling  = inside the method console.log used then its print that particular in terminal when method/function call
// print method   =  when function return anything then its gives method value otherwise (not return) its undefined  when print all function



//==========================================================================================================

//## 2). call(" "," ")

// call have two parameters one is this value (object name) and other is function parameter(argument)
//  its method apply on function
// e.g    .call("objectName","argument")


//--------------------------------------------------------------------------------------------
// function calling(para){
//     console.log(para  +  this.brand)    // This = window  and  this.brand = undefined
// }
// calling('HI ')   // HI undefined


//--------------------------------------------------------------------------------------------

// // var brand = 'Kirloskar'

// function calling(para){
   
//     console.log(para  +  this.brand)       // // HI Kirloskar       (result shows in browser becoz var defined globaly)
// }
// calling('HI ')           

// //---------------------------------------------------------------------------------------------------------

// let bike1 = {
//     brand: 'HONDA',
//     getbrand: function () {
//         console.log(this.brand)    
//          return this.brand
//     }
// }

// let bike2 = {
//     brand: 'HERO',
// }

// calling.call(bike1,"my bike is ")       // my bike is HONDA
// calling.call(bike2,"my bike is ")       // my bike is HERO



//============================================================================================

//## 3) .apply(" "," ")

//  apply have two parameters one is this value (object name) and other is function parameter(argument) as an ARRAY
//  its method apply on function
// e.g    .apply("objectName","ARRAY")


// calling.apply(bike1,["i have "])      // i have HONDA
// calling.apply(bike2,["i have "])      // i have HERO



































































///*************************************************************************************** */


// let counter = {
//     count:0,
//     next:function(){

//         console.log(this)
//         let r = this.count = this.count + 1
//         return r 

//     }

// }

// let r = counter.next()
// console.log(r)

// console.log(this)

// alert('hello')
// window.alert()

// var f = 10 
// console.log(window.f)
// console.log(window === this)



// console.log(this)

// var f = 10
// console.log(window.f)

// //alert('hello')
// window.alert("hello")



// function movie(){
//     console.log(this === window);
// }

// movie()
// window.movie()


//--------------------------------->




// let bike = {
//     brand:'KTM',
//     getBrand:function(){
//         return this.brand
//     }

// }

// let bike2 = {
//     brand:'KTM2'

// }


// let r = bike.getBrand()
// console.log(r)

// let b = bike.getBrand.bind(bike2)
// console.log(b())




// // let b = function(){
// //     return bike2.brand
// // }
// // bind
// console.log(b())


// // call apply 

// var brand = "defaultBrand"


// function getCompany(prefix){
//     console.log(prefix + this.brand)
// }

// getCompany('Hi this is')

// let audi = {
//     brand:"Audi"
// }

// let BMW = {
//     brand:"BMW"
// }

// getCompany.call(audi,'New to ')
// getCompany.call(BMW,'New a ')

// //---------------------------->

// getCompany.apply(audi,['New to '])
// getCompany.apply(BMW,['New a '])


//--------------------------------->


