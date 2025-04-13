/* 
# Encapsulation :  Binding variables and methods in a single component.

        private variables, methods 
        public variables, methods  
        static variables, methods  
*/

class Account {
    //public variables or fields
    bank = "SBI"
    static city = "Pune"
    /* 
      private varibles (#)
        private variables cannot be defined inside the constructor 
        and be updated inside a constructor 
    */
    transactions = []; #pin;
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

let acc = new Account('chinmay', 2334, 9766900110)
console.log(acc.name)

//console.log(c.#pin)
acc.withdraw(122) // public
acc.depoist(1231231) // public

acc.#person()
console.log(Account.city)
console.log(Account.greeting)

// method chain:
acc.depoist(122).withdraw(2323)

