//     // abstraction

//     approveLoan() {
//         return true
//     }

//     totalTransaction(){
//         let totalTrnasaction = this.transaction.reduce((acc,vl)=>{
//             acc += vl
//         })
//         return totalTrnasaction

//     }

//     static help() {
//         console.log('Create acc');
//         console.log('Call on num +917709192');
//         console.log('Welcome to Minskole');
//     }


// }

// let chinmay = new Account(fullName = "chinmay", adharCard = "AD23", bal = 100000, accoutNumber = 123, pin = 2233)


// chinmay.depoist(40000)
// chinmay.withdraw(10000)
// chinmay.balance()
// chinmay.getTrasaction()

// chinmay.requestLoan(100000)
// chinmay.balance()



// const [a,b,c,d,e]=[12,13,4,55,66,77,88,99]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// var arr = [1,2,3,4,5,6,7]

// for(var i = 0 ; i < arr.length ;i++){
//     console.log(arr[i])
// }

// const a = arr[0]
// const b= arr[1]
// const c = arr[2]


// const [a,b,c]= arr


const PersonProto = {

    calcAge() {
        console.log(2021 - this.birthdayYear)
    },

    init(firstName, birthdayYear) {

        this.firstName = firstName
        this.birthdayYear = birthdayYear

    }


}

//const ram = Object.create(PersonProto)
// const studentProto = Object.create(PersonProto)

// studentProto.init = function (firstName, birthdayYear, course) {
//     PersonProto.init(firstName, birthdayYear)
//     this.course = course

// }
// studentProto.display = function () {
//     console.log(this.course)
// }
// let student = Object.create(studentProto)
// student.init("chinmay", 1990, 'java')
// student.display()
// student.calcAge()


// var A = function() { 

// };
// A.prototype.x = 10;
// A.prototype.say = function() { 
//     alert(this.x) 
// };

// var a = new A();
// a.say(); //alerts 10

// var b = Object.create(a);
// b.say(); //alerts 10
// b.x = 'hello';
// b.say(); //alerts 'hello'


// class Person {
//     constructor(firstName, birthdayYear) {
//         this.firstName = firstName;
//         this.birthdayYear = birthdayYear
//     }
//     calcAge() {
//         console.log(2021 - this.birthdayYear)
//     }

// }
// class Student extends Person {
//     constructor(firstName, birthdayYear, course) {
//         super(firstName, birthdayYear)
//         this.course = course

//     }


//     display() {
//         console.log(this.course)
//     }
// }

// let c = new Student("chinmay", 2021, 'python')
// c.display()
// c.calcAge()


