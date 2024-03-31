
// Function declartion
// lexical scope 

//var c = 30
function hello(){
        var a = 10 
        hi()

        function hi(){
            var b = 20
            console.log(a)
            console.log(b)
            //console.log(c)

            bye()

            function bye(){
                var c = 90
                console.log(a)
                console.log(b)
                console.log(c)

            }
        }


}

hello()

// closures in javascript




// function add(x,y){
//      console.log(x+y); // 30
//      return x+y
//      console.log(x+y)

// }
// var r = add(10,20)
// console.log(r)


// closures 
// function add(){
//     return function(){
//         console.log(7+6)

//     }
// }

//  var b = add()
//  console.log(b)
//  b()


// closures 


// function add(){
//     var a = 10 ;
//     var b = 20;
//     return function sub(){
//         console.log(b-a)
//     }
// }
// var r = add()
// console.log(r)
// r()










// console.log(b.name)
// connsole.log(b.age)

// for(var i in b){

//     console.log(b[i])
// }

var namey = "ram"
var age = 30


var a = {

        namey: "poorva",
        age :28,
        display:function(){
            console.log(`My name is ${this.namey} and age is ${this.age}`)
            sub()


            function sub(){

                console.log(this.namey)
                console.log(this.age)



            }

        }

}

a.display()

var a = {

    namey: "poorva",
    age :28,
    display:function(){
        console.log(`My name is ${this.namey} and age is ${this.age}`)
            var sub = ()=>{
            console.log(this.namey)
            console.log(this.age)
        }
        sub()
    }
}

a.display()



var a = {

    namey: "poorva",
    age :28,
    display:()=>{
        console.log(`My name is ${this.namey} and age is ${this.age}`)
            var sub = ()=>{
            console.log(this.namey)
            console.log(this.age)
        }
        sub()
    }
}
a.display()
















