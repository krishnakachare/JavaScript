class Student {
    constructor(fullName, adharNo, DOB) {
        this.fullName = fullName
        this.adharNo = adharNo
        this.DOB = DOB
    }
    display() {
        console.log(`My fullName is ${this.fullName}`)
    }
}

class Teacher extends Student {
    constructor(fullName, adharNo, DOB, salary) {
        super(fullName, adharNo, DOB)
        this.salary = salary
    }

    displaySalaryName() {
        console.log(`My fullName is ${this.fullName}`)
        console.log(`My salary is ${this.salary}`)
    }
}

class Professor extends Teacher {
    constructor(fullName, adharNo, DOB, salary, skills) {
        super(fullName, adharNo, DOB, salary)
        this.skills = skills
    }

    displaySkillSalaryName(){
        console.log(`My name is ${this.fullName}`)
        console.log(`My salary is ${this.salary}`)
        console.log(`My skills are ${this.skills}`)
    }
}

let mayuri = new Teacher("mayuri", 12, "12/12/12", 10000)
mayuri.displaySalaryName()

let mayurik=new Professor("mayurik",121,"21/3/1998",2000,["java,python"])
mayurik.displaySkillSalaryName()











