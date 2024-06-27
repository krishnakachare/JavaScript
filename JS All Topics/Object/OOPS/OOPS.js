/* 
1. Inheritance --> extends, super().

2. Abstraction : 
    Involves hiding complex implementation details and showing only the necessary features of an object.
    Example : calculate age, ATM GUI

3. Encapsulation: 
    Is the practice of wrapping data(variables) and methods (functions) into a singleunit called a class.
    “enclosing” or hiding something, that’s exactly what is! With encapsulation, object’s methods and properties are enclosed within the object, so there are not exposed.

4. Polymorphism: It is the combination of both overloading and overriding.
            Poly: Multipal
            morphism: Transformation
    1. Overloading :
        same class , same method name (same declaration), different signature(different defination).

    2. Overriding :
        different class , same method name (different declaration), same signature(same defination).
        Existing functionality override

    # Signature : type of arguments, no of arguments, order of arguments.
*/

class GrandFather {
    #atmPIN
    constructor(name, lastName, birtD) {
        this.grandFName = name
        this.grandFLastName = lastName
        this.grandFBirthDate = birtD
        this.#atmPIN = null // Encapsulation
    }
    printGrandFatherName = function () { // Overriding 
        console.log(`${this.grandFName} ${this.grandFLastName}`)
    }
    set atmPIN(num) {
        this.#atmPIN = num
    }
    // printAge = function () {
    //     console.log(`My GrandFather age : ${2024 - this.grandFBirthDate}`)
    // }
    get printAge() {
        console.log(`My GrandFather age : ${2024 - this.grandFBirthDate}`)
    }

    withdrawGFMoney = function (pin) { // Abstraction
        if (this.#atmPIN === pin) console.log('Correct PIN : Can withdraw money')
        else console.error('Incorrect PIN : Access Denied !!!');
    }
}

class Father extends GrandFather {
    constructor(name, lastName, birtD, fname, fBirtD) {
        super(name, lastName, birtD)
        this.fatherName = fname
        // this.fatherLastName = flastName
        this.fatherBirthDate = fBirtD
    }
    printFatherName = function () { // Overriding 
        console.log(`${this.fatherName} ${this.grandFLastName}`)
        // super.printGrandFatherName(); // will automatically call printGrandFatherName()
    }
    printAge = function () {
        console.log(`My Father age : ${2024 - this.fatherBirthDate}`)
    }
}

class Son extends Father {
    constructor(name, lastName, birtD, fname, fBirtD, sname, sBirtD) {
        super(name, lastName, birtD, fname, fBirtD)
        this.sonName = sname
        // this.sonLastName = slastName
        this.sonBirthDate = sBirtD
    }
    printSonName = function () {  // Overriding 
        console.log(`${this.sonName} ${this.grandFLastName}`);
        // super.printGrandFatherName();
        // super.printFatherName();
        // will automatically call printGrandFatherName() & printFatherName()
    }
    printAge = function () { // overloading
        console.log(`My age : ${2024 - this.sonBirthDate}`)
    }
}

let son = new Son("grandFather", "surName", 1950, "Father", 1980, "Son", 2010);
// console.log(son)
// console.log(son.sonName)
// son.printSonName();
// // Can call father properties & Methods on Son class instance
// console.log(son.fatherName)
// son.printFatherName();
// // Can call grandfather properties & Methods on Son class instance
// console.log(son.grandFName)
// console.log(son.grandFLastName)
// son.printGrandFatherName();

// Abstraction :
son.printAge(); // My age : 14

let father = new Father("grandFather", "surName", 1950, "Father", 1980);
father.printAge(); // My Father age : 44
let grandFather = new GrandFather("grandFather", "surName", 1950);
// grandFather.printAge(); // My GrandFather age : 74
grandFather.printAge // My GrandFather age : 74

// Encapsulation :
console.log(grandFather.atmPIN = 123)

/* 
Trying to access the private field directly will result in an error
console.log(grandFather.#atmPIN); 
SyntaxError: Private field '#atmPIN' must be declared in an enclosing class
*/

grandFather.withdrawGFMoney(123) // Correct PIN : Can withdraw money
grandFather.withdrawGFMoney(124) // Incorrect PIN : Access Denied !!!