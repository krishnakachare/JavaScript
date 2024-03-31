// Encapsulation 

// private variables 
// private methods 
// public variables 
// public methods 
// static variables 
// static methods 



class Account {

    //public variables or fields
    bank = "SBI"
    static city = "Pune"

    // private varibles

    // private variables cannot be defined inside the constructor 
    // and be updated inside a a constructor

    #
    transactions = [];#
    pin;


    constructor(bal, name, pin, accno) {
        // public varibales 
        this.name = name
        this.#pin = pin
        this.accno = accno
        this.bal = bal

    }

    // public  method

    withdraw(amt) {
        this.bal -= amt
        return this
    }

    depoist(amt) {
        this.bal += amt
        return this
    }

    //private method
    __person() {
        console.log(this.name)
    }


    // helper
    static greeting() {
        console.log('hello')
    }



}

let c = new Account('chinmay', 2334, 9766900110)
console.log(c.name)

//console.log(c.#pin)
c.withdraw(122) // public
c.depoist(1231231) // public

c.#person()
console.log(Account.city)
console.log(Account.greeting)

// method chaint

c.depoist(122).withdraw(2323)


// Advanced  data structure 


// let person = {

//     name:"chinmay",
//     age:23


// }

// console.log(person.name)
// console.log(person['age'])

// for(var key in person){
//     console.log(key,person[key])
// }