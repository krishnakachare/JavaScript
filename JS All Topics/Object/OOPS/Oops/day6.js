// Inheritance
// Program1
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     age = 32
//     adharNo = 7


// }

// class Teacher  extends Student{ 
//     salary = 1000
// }
// let chinmayT = new Teacher()
// console.log(chinmayT.firstName)
// console.log(chinmayT.lastName)
// console.log(chinmayT.age)
// console.log(chinmayT.adharNo)

// let chinmay = new Student()
// console.log(chinmay)


// program 2

class StudentB {
    constructor(fn, ln, ag, adharNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.adharNo = adharNo
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }

}


class Teacher extends StudentB {
    salary = 1000
    displaySalary() {
        console.log(this.salary)
    }
}

let mayuriB = new Teacher("maya", "rao", 33, 21)

// properties 

console.log(mayuriB.adharNo)
console.log(mayuriB.age)
console.log(mayuriB.firstName)
console.log(mayuriB.lastName)
console.log(mayuriB.salary)

mayuriB.displaySalary()
mayuriB.displayName()

//let mayuri = new StudentB("maya","rao",33,21)

// program 3

class StudentC {
    constructor(fn, ln, age, adharNo) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.adharNo = adharNo
    }

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class TeacherC extends StudentC {
    constructor(fn, ln, age, adharNo, salary) {
        super(fn, ln, age, adharNo)
        this.salary = salary
    }
    displaySalary() {
        console.log(this.salary)
    }
}

let poorva = new TeacherC("poorva", "vyas", 29, 29, 13000000)
console.log(poorva.adharNo)
console.log(poorva.age)
console.log(poorva.firstName)
console.log(poorva.lastName)
console.log(poorva.salary)
poorva.displaySalary()
poorva.displayName()


class GrandFather {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(firstName, lastName,ffirstName){
        super(firstName, lastName)
        this.ffirstName= ffirstName
    }
    displayFName(){
        console.log(this.ffirstName + this.lastName)
    }
}

class Son extends Father {
    constructor(firstName, lastName,ffirstName,sname){
        super(firstName, lastName,ffirstName)
        this.sname = sname
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmaya = new Son("manohar","deshpande","shirish","chinmay,")
console.log(chinmaya.firstName)
console.log(chinmaya.lastName)
console.log(chinmaya.sname)
console.log(chinmaya.ffirstName)

chinmaya.displayFName()
chinmaya.displayGName()
chinmaya.displaySName()
