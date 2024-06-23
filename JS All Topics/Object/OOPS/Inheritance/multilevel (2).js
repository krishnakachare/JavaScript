// Multilevel inheritance
// we can inherit properties and methods from step by step (student,teacher,father) or multilevel
// its also call forward inheritance
// Reverce inheritance not possible

class student{
    education = 'Graduation'
    constructor(fName,rollNo,age){
        this.fName = fName
        this.rollNo = rollNo
        this.age = age
    }
    display(){
        console.log(`My Name is ${this.fName}`)
    }
}

class teacher extends student {
    setSalary(amount){
        amount = this.amount
    }
    displaySalary(){
        console.log(`My Name is ${this.fName}`)
        console.log(`My salary is ${this.salary}`)
    }
}

class professor extends teacher {
    setExp(year){
        year = this.year
    }
    displaySalaryExp(){
        console.log(`My Name is ${this.fName}`)
        console.log(`My salary is ${this.salary}`)
        console.log(`My Experiance is ${this.year}`)
    }
}



let kk = new professor('kk',2020,26)


// set properties by methods

kk.setSalary(20)
kk.setExp(30)

// properties

console.log(kk.education)
console.log(kk.fName)
console.log(kk.rollNo)
console.log(kk.age)
console.log(kk.amount)
console.log(kk.year)

// methods

kk.display()
kk.displaySalary()
kk.displaySalaryExp()



















