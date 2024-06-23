
class Bank {
    constructor(name, accNo, balance, typeOfacc) {
        this.name = name
        this.accNo = accNo
        this.balance = balance
        this.typeOfacc = typeOfacc
        this.transcation = []
        this.personalInfo = { fullName: this.name, accNo: this.accNo }
    }

    deposite(amount) {
        this.balance = this.balance + amount
        this.transcation.push(amount)
        return this.balance
    }

    withdrown(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount
            this.transcation.push(-amount)
            return this.balance
        }
        else {
            console.log(`Insufficient balance : your current balnacee is ${this.balance}`)

        }
    }

    myNoOfTranscation() {
        this.transcation.slice(-5)
    }
}

let mayuri = new Bank("Mayuri", 121, 10000, "saving")
mayuri.deposite(2000)
mayuri.withdrown(1200)
mayuri.deposite(4000)
mayuri.withdrown(5000)
mayuri.deposite(2000)
mayuri.withdrown(10000)
console.log(mayuri.transcation)
//console.log(mayuri.personalInfo)

let totalDeposite = mayuri.transcation.filter((el) => el > 0).reduce((acc, el) => acc + el)
//console.log(totalDeposite)

let totalwithDrown = mayuri.transcation.filter((el) => el < 0).reduce((acc, el) => acc + Math.abs(el))
//console.log(totalwithDrown)

//===================================================================================

// let fiveTransaction=function (a,b,c,d,e){
//     return(Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d)+Math.abs(e))
// }
// console.log(fiveTransaction(...mayuri.transcation))//14200

//=======================*********OR******===========================================

// let fiveTransaction = function (arr) {
//     arr = arr.map((el) => Math.abs(el))
//     let [a, b, c, d, e] = [...arr]
//     return a + b + c + d + e
// }
// console.log(fiveTransaction(mayuri.transcation))//14200

//--------------------------*******OR*******----------------------------------------

// let fiveTransaction = function (arr) {
//     arr = arr.map((el) => Math.abs(el))
//     let [a, b, c, d, e] = arr
//     return a + b + c + d + e
// }
// console.log(fiveTransaction(mayuri.transcation))//14200







