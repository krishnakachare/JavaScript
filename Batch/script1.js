alert("Join File...")
// Function Expression:

// // Syntax:

// function_name = function(parameter1, parameter2){
//     statements
// }
// function_name()  // functioncall


// // 1) function without parameter & without return type:

// var add = function(){
//     console.log(40+30)
// }
// add()


// // 2) function with parameter & without return type:

// var add = function(a, b){
//     console.log(a+b)
// }
// add(4, 7)


// // 3) function with parameter & with return type:

// var add = function(a, b){
//     return a+b
// }
// // alert(add(14, 7));
// console.log(add(14, 7));


// // 4) function without parameter & with return type:

// var add = function(){
//     return (5+5)
// }
// var c = add()
// console.log(c)
// var d = c+10
// console.log(d)



// 3) Arrow Function:

// function_name = () => {
//     statements
// }
// function_name() // function call


// // 1) function without parameter & without return type:

// var add = () => {
//     console.log(40+30)
// }
// add()


// // 2) function with parameter & without return type:

// var add = (a, b) => {
//     console.log(a+b)
// }
// add(4, 7)


// // 3) function with parameter & with return type:

// var add = (a, b) => {
//     return a+b
// }
// // alert(add(14, 7));
// console.log(add(14, 7));
// console.log(typeof add)

// // 4) function without parameter & with return type:

var add = () => {
    return(5+5)
}
var c = add()
console.log(c)
var d = c+10
console.log(d)