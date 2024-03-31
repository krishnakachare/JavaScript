//-------------
// function add(){
//     console.log("hello")
// }
// add()


// for(let i = 0 ; i < 10; i++){
//     add()
// }

// can i call loop inside a function ?


// let j = [3,44,5,6,6,7,8]


// function addTwo(arr){
//     for(let i = 0 ; i < arr.length; i++){
//         console.log(arr[i]+3)
//     }

// }
// addTwo(j)


// for(let i = 0 ; i < 3; i++){
//     function add(){
//         console.log('hello')
//     }
//     add()

// }




// let h = "hello"
// let u = ""
// for(let i = 1 ; i < h.length-1; i++ ){
//     u  = u+h[i]
// }

// console.log(u)


// while 

// let i = 1

// while(i < h.length-1){

//     u  = u+h[i]
//     i++

// }

// console.log(u)


// loops 

// chinmay

// let i = 1

// while(i < 3){

//     u  = u+h[i]
//     i++

// }

// console.log(u)



// let i = 1

// while(i < 3){

//     u  = u+h[i]
//     i++

// }

// console.log(u)

// let h = "chinmay deshpande"

// for(let i = 1 ; i < h.length ; i++){

//     if(i == 3){
//         break;
//     }
//     console.log(i)
// }

// let h = "chinmay deshpande"
// for(let i = 0 ; i < h.length ; i++){
//     if(i == 3){
//         break;
//     }
//     console.log(h[i])
// }

// cypress


// ternary operator??


let fruit = ["mango","apple","chiku"]
let userInput = "chku"
let val = fruit.indexOf(userInput) > 0 ? "Fruit is available":"Fruit is not available"
console.log(val)



// if(fruit.indexOf(userInput) > 0){
//     console.log('Fruit is available')
// }
// else{
//     console.log('Fruit is not  available')
// }

//let r =["mango","apple","chiku"].filter((el)=>{return el.length > 0}).length > 0 ? "hello":"bye"

let a = "dragon"

switch(a){

    case "apple":
        console.log('40 rs')
        break;
        
        
    case "mango":
        console.log('50 rs')
        break ;
      
        

    case "grapes":
    case "dragon":
        console.log('330 rs')
        break
       
     

    default:
        console.log('hello')
    

}