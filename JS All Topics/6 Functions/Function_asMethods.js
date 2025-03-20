// Function inside the object is called method()
// for this function expression is used
// in method() here passed values is an (function) arrguments , altimately its parameters of function expression

// IN AN OBJECT PROPERTY[KEY] VALUE IS FUNCTION IS CALLED METHOD()

// Example of method() in object

// object have properties and methods

let person = {

    Firstname : 'krishna',
    age : 25,

    talk : function(){                         // making talk() (method) we used function expression  and here talk is a variable 
        console.log('krishna can talk')
    },

    walk : function(parameter){
        console.log(parameter)
    }
}

// console.log(person.age)  // 25
// person.talk()                    // krishna can talk        // here im calling function (calling function expression)   // but we said that calling methods
// person.walk('i can run')         // i can run



// in methods we can pass arguments (parameters) BUT not for properties

// PROPERTIES = return only number and we can use it
let a = [1,2,3]
let x = (a.length)
console.log(x)        // 3
console.log(x + 5)    // 8

// METHODS = Its return multipal datatypes like (numbers,string,array,boolean) and we can use it







// window is a super object for the browser
// let,var,const,any function write [ means globaly defined ] this all refers to the window(super object)




























// let chinmay = {
    //     'fullName':"chinmay deshpande",
    //     'age':30,
    
    //     'talk':function(){
    //         console.log('hello '+ this.fullName)
    
    
    //     }
    
    // }
    
    // let amol = {
    //     'fullName':"amol rao",
    //     'age':30,
    
    //     'talk':function(){                                       // FUNCTION EXPRESSION  USED TO MAKE METHOD
    //         console.log('hello '+ this.fullName)
    
    
    //     }
    
    // }
    
    // console.log(chinmay.age)
    // chinmay.talk()
    // chinmay.talk()
    // amol.talk()