
// // polymorphism -- overloading overding 
// class User {

//     constructor(fullName, adharCard) {
//         this.fullName = fullName
//         this.adharCard = adharCard

//     }


// }


// class Account extends User {

//     constructor(fullName, adharCard, bal, accoutNumber, pin) {
//         super(fullName, adharCard)
//         this.accoutNumber = accoutNumber
//         this.pin = pin
//         this.bal = bal
//         this.transaction = []

//     }

//     // [12,12,2,3,3,4,5]

//     // pop push

//     getTrasaction() {
//         if (this.transaction.length === 0) {
//             console.log('No transactions')
//         }
//         else {
//             // for (var i = 0; i < this.transaction.length; i++) {
//             //     console.log(this.transaction[i])

//             //     if (i === 5) {
//             //         break;
//             //     }
//             // }
//             let [a,b,c,d,e]= this.transaction
//             console.log(`first trasaction is ${a}`)
//             console.log(`first trasaction is ${b}`)
//             console.log(`first trasaction is ${c}`)
//             console.log(`first trasaction is ${d}`)
//             console.log(`first trasaction is ${e}`)

//         }

//     }

//     depoist(amount) {
//         this.bal += amount
//         this.transaction.unshift(amount)

//     }
//     withdraw(amount) {
//         var userpin = parseInt(prompt('Enter the pin'))
//         if (userpin === this.pin) {
//             this.bal -= amount
//             this.transaction.unshift(-amount)
//         }
//         else {
//             console.log("Incorrect pin")
//         }
//     }

//     balance() {
//         console.log(this.bal)
//     }

//     requestLoan(val) {
//         if (this.approveLoan()) {
//             this.depoist(val)

//         }

//     }










