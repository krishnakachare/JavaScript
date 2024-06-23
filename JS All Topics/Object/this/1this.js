// this = current calling object    (Always referce to any object  OR its a object )

let krishna = {
    fullName : 'krishna',
    age : 25,
    lang : ['python'],

    write : function(){
        console.log('i can write js and ' + this.lang)
    }
}
let ravi = {

    fullName : 'RaviKumar Dongare',
    age : 31,
    lang : ['Java'],

    write : function add(){
        console.log('i can write js and ' + this.lang)
    }
}

// let aa = ravi.write()               // i can write js and Java
// krishna.write()             // i can write js and python
// console.log(aa)          // undefined                                 // not defined



console.log(typeof (ravi.write))   // function




// window is a super object for the browser
// let,var,const,any function write [ means globaly defined ] this all refers to the window(super object)






































// let objectA = {
//     'age': 10,
//     'rollNum': 30
// }

// //  Bracket notation
// console.log(objectA['age'])
// console.log(objectA['rollNum'])

// // Dot notation
// console.log(objectA.age)
// console.log(objectA.rollNum)

// // properties and method
// // human - name , age , color 
// // methods - eat() , walk()
// // function inside object method


// // function declaration 
// function add() {
//     console.log(9 + 8)
// }
// add()

// // function expression
// let add = function () {
//     console.log(9 + 8)
// }
// add()

// // Arrow function
// let add = () => {
//     console.log(9 + 8)
// }
// add()

// //---------------------------->
// let chinmay = {
//     'fullName': "chinmay deshpande",
//     'age': 30,

//     'talk': function () {
//         console.log('hello ' + this.fullName)
//     }
// }

// let amol = {
//     'fullName': "amol rao",
//     'age': 30,

//     'talk': function () {
//         console.log('hello ' + this.fullName)
//     }
// }

// console.log(chinmay.age)
// chinmay.talk()
// chinmay.talk()
// amol.talk()





