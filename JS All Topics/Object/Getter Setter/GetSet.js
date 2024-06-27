// Setter and Getters :

// Instance variable set :

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


// // classes are not hoisted :

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

//==================================================================


// const account = {
//     fullName: "chinmay",
//     marks:[12, 3, 5, 6, 7, 8, 8],
//     get lastest() {
//         return this.marks[this.marks.length - 1]
//     },
//     set lastest(mov) {
//         this.marks.push(mov)
//     }
// }

// console.log(account.lastest) // Getting the value
// account.lastest = 90 // Setting the value
// console.log(account.lastest)

//========================================================================


// const account = {
//     fullName: "chinmay",
//     marks:[12, 3, 5, 6, 7, 8, 8],
//     get lastest() {
//         return this.marks[this.marks.length - 1]
//     },
//     set lastest(mov) {
//         this.marks.push(mov)
//     }
// }

// console.log(account.lastest) // Getting the value 
// account.lastest = 90 // Setting the value
// console.log(account.lastest)

// class Person {
//     constructor(firstName, lastName, birthdayYear) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.birthdayYear = birthdayYear
//     }
//     calcAge() {
//         return this.age = 2021 - this.birthdayYear
//     }
//     get lastest() {
//         console.log('hello')
//     }
//     set lastest(msg) {
//         console.log(msg)
//     }
// }

// const chinmay = new Person("chinmay", "deshpande", 1990)

// chinmay.lastest
// chinmay.lastest = "name"
// chinmay.lastest

// class PersonA {
//     constructor(fullName, birthdayYear) {
//         this.fullName = fullName
//         this.birthdayYear = birthdayYear
//     }
//     calcAge() {
//         console.log(2021 - this.birthdayYear)
//     }
//     set fullName(name) {
//         if (name.includes(' ')) {
//             this._fullName = name
//         }
//         else {
//             alert(`${name} is not the fullName`)
//         }
//     }
//     get fullName(){
//             return this._fullName
//     }
//     static hey(){
//         console.log('Hello ')
//         //console.log(this)
//     }
// }

//PersonA.hey() // Information 

// const chinmay = new PersonA("chinmay",1990)
// chinmay.fullName = "chinmay deshpande"
// console.log(chinmay.fullName)


// set and get method



class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setAge(ag){
       this.age = ag
        
    }

    setRollNo(rl){
        this.rollNo = rl
    }

}

let ninad = new PersonC()
console.log(ninad)
ninad.setFirstName("ninad")
ninad.setLastName("dani")
ninad.setRollNo(23)
ninad.setAge(55)
console.log(ninad)

// set  and get keyword 

//let namea = ["ram","sham","ganesh"]
// namea.length = 4
// namea.push()


class PersonD {

    set firstN(fn){
        this.firstName = fn
    }
    set lastN(ln){
        this.lastName = ln
    }
    set Age(ag){
        this.age = ag
    }
    set rollN(rn){
        this.rollNo = rn
    }
    get rollN(){
        return this.rollNo
    }

}

let vijeet = new PersonD()
vijeet.rollN = 99
vijeet.lastN = "dani"
vijeet.Age = 44
vijeet.firstN = 55

console.timeLog(vijeet.rollN)



