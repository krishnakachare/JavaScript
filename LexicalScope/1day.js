


// let human = {

//     fullName:'chinmay deshpande',
//     rollNumber:12,
//     display:function(){
//         console.log(this.fullName) // 
//     }


// }

// console.log(human)
// human.display()

// -------------------------------->

// Lexical scope -- function inside a function parent functions variable , accessible in child function

let e = 100
let d = 200
function add(){

    let a = 10 
    let b = 20
    console.log(a+b) // 30
    console.log(e + d)
    // parent function does not have access to child function variable
    
    function addTwo(){
        let e = 20
        let d= 40

        console.log(e+d+a+b)
        function addThree(){
            let i = 200
            let u = 300
            console.log(i+u+e+d+a+b)
        }
        addThree()   
    }
    addTwo()
}
add()

// office boy ------  CEO (10 am) 

// function addTwo(){
//     return 8 + 5
//     console.log(3+4)
// }
// let rrr = addTwo()
// console.log(rrr)

function addThree(){
    let a =10
    let b = 20 
    return function(){
        return "hello"
    }
}

let freeY = addThree()
let rrr = freeY() // calling the function 
console.log(rrr) // "hello"

// closure
function addThreeB(){
    let a =10
    let b = 20 
    return function(){
        console.log(a+b)
    }    

    // return {
    //     "funOne":function(){
    //         console.log('hello')
    //     },
    //     "funtwo":function(){
    //         console.log("hello")
    //     }
    // }
}

let rrr = addThreeB()
rrr()
