// function declartion
// function add(){
//     console.log('Hello')
// }

// add()


//  function expression 

// let add = function(){
//     return a+b
// }
// add()


// let add = ()=>{
//     return a+b
// }
// add()

// function declaration 


// sub(12,13)
// function sub(x,y){
//     console.log(x-y)

// }

// ------------------------
// a(22,23)
// let a = function(x,y){
//     console.log(x-y)

// }


// a(22,23)
// let a = (x,y) =>{
//     console.log(x-y)

// }


// let h = [()=>console.log("Bye"),"hello"]
// h[0]()


// let g = {
//     age:23,
//     h:()=>console.log("Bye")
// }

// g['h']()


// let x = 10 
// console.log(x)


// let h = function(){
//     console.log('hello')
// }

// h()
// console.log(h)



let add = function(x,y){
    return x+y
}

// let hh = add(12,13)
// console.log(hh)

console.log(add)

// let fn = function(x,y){
//     return x+y
// }

function sub(fn){
    let a = fn(12,13)
    return a

}
let rr = sub(add)
console.log(rr)




// let h = [()=>console.log("Bye"),"hello"]
// h[0]()



// let g = {
//     age:23,
//     h:()=>console.log("Bye")
// }

// g['h']()


//------------------------------------------------>




// funcntion arr as param and return type is also array 

let h = [1,2,3,4,5]

// [3,4,5,6,7]
function addTwo(arr){

    //[1,2,3,4,5]

    for(let i = 0; i < arr.length; i++){

        arr[i] = arr[i]+2
    }

    return arr

}

let bb = addTwo(h)
console.log(bb)
console.log(bb.reduce((acc,el)=> el+acc))



// passing obj as a parameter to another function 

// let pe = {
//     firstName:"chinmay",
//     age:23
// } 

// function updateObj(obj){

//     obj.firstName ="samay"
//     console.log( obj.firstName)

// }

// updateObj(pe)
// console.log(pe.firstName)



// let pe = {
//     firstName:"chinmay",
//     age:23
// } 

// function updateObj(obj){

//     obj.firstName = "ram"
//     return [obj.age,obj.firstName]


// }

// let bnb = updateObj(pe)
// console.log(bnb[0])



let pe = {
    firstName:"chinmay",
    age:23
} 

function updateObj(obj){
    obj.firstName = "ram"
    return obj
}
let bnb = updateObj(pe)
console.log(bnb['age'])
console.log(bnb['firstName'])