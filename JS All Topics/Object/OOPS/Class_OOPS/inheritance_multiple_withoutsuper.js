class Student {

    country = "India"
    constructor(fullName, adharNo, DOB) {
        this.fullName = fullName
        this.adharNo = adharNo
        this.DOB = DOB
    }
    display() {
        console.log(`My name is ${this.fullName}`)
    }
}

class Teacher extends Student {
    setSalary(amount) {
        this.salary = amount
    }

    displaySalaryName() {
        console.log(`My name is ${this.fullName}`) //My name is ayuri1
        console.log(`My salary is ${this.salary}`) //
    }
}

class Professor extends Teacher {
    setSubject(subject) {
        this.subject = subject
    }
    displaySubjectSalaryName() {
        console.log(`My name is ${this.fullName}`)
        console.log(`My salary is ${this.salary}`)
        console.log(`My splSubject is ${this.subject}`)
    }

}


//Methods
let mayu = new Student("mayuri", 123456, "12/12/12")
mayu.display() 


let mayu1 = new Teacher("mayuri1", 12334568, "12/34/56")
mayu1.display()
mayu1.setSalary(1000)
mayu1.displaySalaryName()

let mayu2 = new Professor("Mayuri2", 098765, "546/67/789")
mayu2.display()
mayu2.setSalary(20000)
mayu2.displaySalaryName()
mayu2.setSubject("marathi")
mayu2.displaySubjectSalaryName()

//Property
console.log(mayu2.salary)
console.log(mayu2.subject)
console.log(mayu2.fullName)
console.log(mayu2.adharNo)
console.log(mayu2.DOB)

