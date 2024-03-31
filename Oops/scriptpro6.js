alert('hello');



// // // polymorphism -- overloading overding 
// // class User {

// //     constructor(fullName, adharCard) {
// //         this.fullName = fullName
// //         this.adharCard = adharCard

// //     }


// // }


// // class Account extends User {

// //     constructor(fullName, adharCard, bal, accoutNumber, pin) {
// //         super(fullName, adharCard)
// //         this.accoutNumber = accoutNumber
// //         this.pin = pin
// //         this.bal = bal
// //         this.transaction = []

// //     }

// //     // [12,12,2,3,3,4,5]

// //     // pop push

// //     getTrasaction() {
// //         if (this.transaction.length === 0) {
// //             console.log('No transactions')
// //         }
// //         else {
// //             // for (var i = 0; i < this.transaction.length; i++) {
// //             //     console.log(this.transaction[i])

// //             //     if (i === 5) {
// //             //         break;
// //             //     }
// //             // }
// //             let [a,b,c,d,e]= this.transaction
// //             console.log(`first trasaction is ${a}`)
// //             console.log(`first trasaction is ${b}`)
// //             console.log(`first trasaction is ${c}`)
// //             console.log(`first trasaction is ${d}`)
// //             console.log(`first trasaction is ${e}`)

// //         }

// //     }

// //     depoist(amount) {
// //         this.bal += amount
// //         this.transaction.unshift(amount)

// //     }
// //     withdraw(amount) {
// //         var userpin = parseInt(prompt('Enter the pin'))
// //         if (userpin === this.pin) {
// //             this.bal -= amount
// //             this.transaction.unshift(-amount)
// //         }
// //         else {
// //             console.log("Incorrect pin")
// //         }
// //     }

// //     balance() {
// //         console.log(this.bal)
// //     }

// //     requestLoan(val) {
// //         if (this.approveLoan()) {
// //             this.depoist(val)

// //         }

// //     }

// //     // abstraction

// //     approveLoan() {
// //         return true
// //     }

// //     totalTransaction(){
// //         let totalTrnasaction = this.transaction.reduce((acc,vl)=>{
// //             acc += vl
// //         })
// //         return totalTrnasaction

// //     }

// //     static help() {
// //         console.log('Create acc');
// //         console.log('Call on num +917709192');
// //         console.log('Welcome to Minskole');
// //     }


// // }

// // let chinmay = new Account(fullName = "chinmay", adharCard = "AD23", bal = 100000, accoutNumber = 123, pin = 2233)


// // chinmay.depoist(40000)
// // chinmay.withdraw(10000)
// // chinmay.balance()
// // chinmay.getTrasaction()

// // chinmay.requestLoan(100000)
// // chinmay.balance()



// // const [a,b,c,d,e]=[12,13,4,55,66,77,88,99]
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(d)
// // console.log(e)

// // var arr = [1,2,3,4,5,6,7]

// // for(var i = 0 ; i < arr.length ;i++){
// //     console.log(arr[i])
// // }

// // const a = arr[0]
// // const b= arr[1]
// // const c = arr[2]


// // const [a,b,c]= arr


// const PersonProto = {

//     calcAge() {
//         console.log(2021 - this.birthdayYear)
//     },

//     init(firstName, birthdayYear) {

//         this.firstName = firstName
//         this.birthdayYear = birthdayYear

//     }


// }

// //const ram = Object.create(PersonProto)
// // const studentProto = Object.create(PersonProto)

// // studentProto.init = function (firstName, birthdayYear, course) {
// //     PersonProto.init(firstName, birthdayYear)
// //     this.course = course

// // }
// // studentProto.display = function () {
// //     console.log(this.course)
// // }
// // let student = Object.create(studentProto)
// // student.init("chinmay", 1990, 'java')
// // student.display()
// // student.calcAge()


// // var A = function() { 

// // };
// // A.prototype.x = 10;
// // A.prototype.say = function() { 
// //     alert(this.x) 
// // };

// // var a = new A();
// // a.say(); //alerts 10

// // var b = Object.create(a);
// // b.say(); //alerts 10
// // b.x = 'hello';
// // b.say(); //alerts 'hello'


// // class Person {
// //     constructor(firstName, birthdayYear) {
// //         this.firstName = firstName;
// //         this.birthdayYear = birthdayYear
// //     }
// //     calcAge() {
// //         console.log(2021 - this.birthdayYear)
// //     }

// // }
// // class Student extends Person {
// //     constructor(firstName, birthdayYear, course) {
// //         super(firstName, birthdayYear)
// //         this.course = course

// //     }


// //     display() {
// //         console.log(this.course)
// //     }
// // }

// // let c = new Student("chinmay", 2021, 'python')
// // c.display()
// // c.calcAge()


// // polymorphism 


// // overloading- same class , same method name , different signature
// // overriding - different class , same method name , same signature

// // class World {

// //     saving() {
// //         console.log('saving method worldbank')
// //     }

// //     loan() {
// //         console.log('loan method world bank')

// //     }

// //     bank() {
// //         console.log('Not a cryto currency')
// //     }

// // }

// // class SBI extends World {

// //     saving() {
// //         console.log('saving method sbi')
// //     }

// //     loan() {
// //         console.log('loan method sbi')
// //     }
// //     sbi() {
// //         console.log('old bank in india')
// //     }

// // }
// // sbi = new SBI()

// // sbi.saving()
// // sbi.loan()
// // sbi.bank()
// // sbi.sbi()


// // // overloading 

// // class add {


// //     add(a = undefined, b = undefined, c = undefined, d = undefined) {
// //         if (a != undefined && b != undefined && c != undefined && d != undefined) {
// //             console.log(a + b + c + d)
// //         }
// //         else if (a != undefined && b != undefined && c != undefined) {
// //             console.log(a + b + c)
// //         }
// //         else if (a != undefined && b != undefined) {
// //             console.log(a + b)
// //         }
// //     }

// // }

// // let x = new add()

// // x.add(12,23,34,56)
// // x.add(12,34)
// // x.add(12,13,14)