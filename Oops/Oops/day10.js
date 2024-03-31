// lexical scope

function addition() {
    let x = 10
    let y = 20
    console.log(x + y)
    function additionB() {
        let a = 100
        let b = 50
        console.log(x + y + a + b)
        //console.log(s)
        function additionC() {
            let s = 10
            let t = 5
            console.log(x + y + a + b+s+t)
        }
        additionC()
    }
    additionB()
}
addition()

// program 2


function greet(){
    console.log("Hello")
    return "Hello Chinmay !"
    console.log("Bye Chinmay !")
}
let a = greet()
console.log(a)

// program 2b 
function Calculation(x,y){
    return function(){
        console.log(x+y)
    }
}
let r = Calculation(12,1)
console.log(r)
console.log(x)
console.log(y)




// let r =  function(){
//     console.log(x+y)
// }

r()



