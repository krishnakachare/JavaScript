// class 

// user defined data type

// class ---- object 
// class --- 4 -- Inheritance , polymorphism , abstraction 
// encapsulation 

// properties --accName, accNo , bal ,lastFiveT
// Methods -deposit() , withdDrawl() , displayLastFiveT() totalDeposit() , totalWithdraw()

class Bank {

    constructor(accName ,accNo ,bal){
        this.accName = accName 
        this.accNo = accNo
        this.bal = bal
        this.transaction = [bal]
    }

    deposit(amount){
        this.bal = this.bal + amount
        this.transaction.push(amount)
        return this.bal
    }

    withdrawl(amount){
        if(this.bal >= amount){
            this.bal = this.bal - amount 
            this.transaction.push(-amount)
            return this.bal
        }
        else {
            console.log('Insufficient balance')
        }
    }

    totalDeposit(){
       return  this.transaction.filter(function(el){
            return el > 0
        })
        .reduce(function(acc,el){
            return acc + el
        },0)
    }

    totalWithdrawl(){
        return  this.transaction.filter(function(el){
             return el < 0
         })
         .reduce(function(acc,el){
             return acc + el
         },0)
     }


    lastFiveTransaction(){
      return   this.transaction.slice(-5)
    }

}


let chinmay = new Bank("chinmay",7,1000)
console.log(chinmay.withdrawl(500))
console.log(chinmay.deposit(500))
console.log(chinmay.withdrawl(100))
console.log(chinmay.deposit(200))
console.log(chinmay.withdrawl(100))
console.log(chinmay.withdrawl(500))
console.log(chinmay.lastFiveTransaction())
console.log(chinmay.totalDeposit())
console.log(chinmay.totalWithdrawl())

// tricky ----

let firstName = "chinmay"
let lastName = "deshpande"

console.log("My firstname is "+firstName+" lastName is "+lastName)
console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)
console.log(`${firstName}`)
console.log(`${chinmay.totalDeposit()}`)







