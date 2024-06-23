
// Instance variable set

// 1)  Outside the class
// 2)  Using setter and getter methods
// 3)  Using constructor

// instance method proto_type

// static - proto_type constructor


// class Person2 {
//     // class level variables  static variables
//     //  can be called on the class name

//     static namey = "unknow";
//     static fullName = "jinendra";
//     roll = "19"

//     constructor(fullName, birthYear) {
//             // Instance variables
//             // Object create , intialization , method  ....
//             this.fullName = fullName;
//             this.birthdayYear = birthYear;
//         }
//         // Instance methods
//         // Instance Methods will be added to .prototype property
//     calAge() {

//         console.log(2021 - this.birthdayYear);
//     }

//     greeting() {
//         console.log(`Welcome ${this.fullName}`);
//     }


//     set setfullName(name) {
//         this.fullName = name;
//         console.log(` ${this.fullName} is my fullName`);

//     }

//     get getFullName() {
//         return `${this.fullName}`
//     }

//     // static method
//     static info() {
//         console.log(this.namey)
//         console.log(this.fullName)
//     }

// }

// let chinmay = new Person2('Chinmay Deshpande', 1990) // calling function construtor
// console.log(chinmay)
// Person2.info()
// console.log(chinmay._proto_ === Person2.prototype) // checks absolute value and type

// // classes are not hoisted


// var x ;
// console.log(x) // umdefined
// x = 10
// console.log(x)

// console.log(x) //
// let x = 10


// add()
// function add(){
//     console.log(7+7)
// }


// add()
// var add =function add(){
//     console.log(7+7)
// }

//

// const Account = class{
//     holder = "chinmay";
//     transaction = [100,23,45,567,88,999,34,45,7,8,8999,44]

//     // reduce
//     // transaction > 500 filter
//     // tax for 15  map
//     get latest(){
//         return this.transaction[this.transaction.length-1]
//     }

//     set latTransaction(tran){
//         this.transaction.push(tran)
//     }

//     get latestFive(){
//         count = 0
//         for(let i =this.transaction.length - 1 ; i > 0 ; i--){
//             if (count === 5){
//                 break
//             }
//             console.log(this.transaction[i])
//             count += 1
//         }
// }
// }









// // // // Setter and Getters 


// // // const account = {

// // //     fullName: "chinmay",
// // //     marks:[12, 3, 5, 6, 7, 8, 8],

// // //     get lastest() {
// // //         return this.marks[this.marks.length - 1]

// // //     },
// // //     set lastest(mov) {
// // //         this.marks.push(mov)


// // //     }

// // // }

// // // console.log(account.lastest) // Getting the value 
// // // account.lastest = 90 // Setting the value
// // // console.log(account.lastest)

