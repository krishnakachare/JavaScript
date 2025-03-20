// class Bank {
//     constructor(fullName, accNo, bal, type) {
//     this.fullName = fullName
//     this.accNo = accNo
//     this.bal = bal
//     this.type = type
//     this.transactions = []
//     this.personalInfo = {
//         "fullName":this.fullName,
//         "accNo":this.accNo
//     }
// }

// deposit(amount) {
//     this.bal = this.bal + amount
//     this.transactions.push({amount:amount,bal:this.bal})
//     return this.bal
// }

// deposit(amount) {
//     this.bal = this.bal + amount
//     this.transactions.push(amount)
//     return this.bal
// }

// withdrawl(amount) {
//     if (amount < this.bal) {
//         this.bal = this.bal - amount
//         this.transactions.push(-amount)
//           return this.bal
//     }
//     else{
//         console.log(`Insufficent balance: current Bal ${this.bal}`)
//     }
// }

// displayTransaction(arr){
//     return  arr.slice(-5)
// }
// }

// let nikhil = new Bank("nikhil",1223,100000,"saving")
// nikhil.deposit(20000)
// nikhil.withdrawl(130000)
// nikhil.deposit(1000)
// nikhil.withdrawl(8000)
// nikhil.deposit(4000)
// nikhil.withdrawl(4500)
// let fiveTrasanctions = nikhil.displayTransaction(nikhil.transactions)
// console.log(fiveTrasanctions)


// //[11,22,-33,44,-55]


// let totaldespoist = nikhil.transactions
// .filter((el)=>el > 0) // [11,22,33] 
// .reduce((acc,el)=>acc+el) // 66

// console.log(totaldespoist)

// let totalwithDrawl = nikhil.transactions 
// .filter((el)=>el < 0)//  [-33,-55]
// .reduce((acc,el)=>acc+ Math.abs(el)) // 88

// //Math.abs(-6) // 6

// // 12     13      14   //----->[12,13,14]

// // 23     55      66    //------>[23,55,66]


// // 33      55      77   // ------->[]


// // 44      66       66  // -------->[]

// let {fullName,accNo} = nikhil.personalInfo
// console.log(`Account name : ${fullName}`)
// console.log(`AccountNo : ${accNo}`)


// let fiveTotal = function(arr){
// arr = arr.map(function(el){
//     return Math.abs(el)
// })
// let [a,b,c,d,e] = [...arr]
// return a + b + c + d + e

// }
// fiveTotal(nikhil.transactions)
// console.log(fiveTotal())

// // array - length 
// // array - filter