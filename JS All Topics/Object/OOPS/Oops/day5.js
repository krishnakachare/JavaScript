
// class Person {
//     firstName = undefined
//     lastName = undefined
//     rollNo  = undefined
//     age = undefined
// }

// let amol = new Person()
// console.log(amol)
// //dot notation and bracket notation

// amol.firstName = "amol"
// amol.lastName = "rao"
// amol.rollNo = 34
// amol.age = 32
// console.log(amol)
// console.log(amol instanceof person)

// let amolB = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     rollNo:45
// }


// program 2

class PersonB {
    // constructor(){
    //     console.log("Called")
    // }
    constructor(fn,ln,age,rollNo){
        this.firstName  = fn
        this.lastName = ln
        this.age  = age 
        this.rollNo = rollNo
    }

}

// let sarika = new PersonB("sarika","pansare",23,55)
// console.log(sarika)
// let mayuri = new PersonB("mayuri","rao",32,54)
// console.log(mayuri)
let students = [
    new PersonB("chinmay","deshpande",13,5),
    new PersonB("chinmay1","deshpande1",11,51),
    new PersonB("chinmay2","deshpande2",14,57),
    new PersonB("chinmay3","deshpande3",130,8),
    new PersonB("chinmay4","deshpande4",17,58)
]

students.forEach(function(el){
    console.log(el.firstName)
    console.log(el.lastName)
    console.log(el.age)
    console.log(el.rollNo)
})

let studentss = {
    studentOne:new PersonB("s1","l1",23,5),
    studenTwo:new PersonB("s2","l2",24,6),
    studentThree:new PersonB("s3","l3",25,7),
    studentFour:new PersonB("s4","l4",25,8)

}

for(let [k,v] of Object.entries(studentss.studentFour)){
    console.log(k,v)
}

// set and get method



class PersonC {
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setAge(ag){
       this.age = ag
        
    }

    setRollNo(rl){
        this.rollNo = rl
    }

}

let ninad = new PersonC()
console.log(ninad)
ninad.setFirstName("ninad")
ninad.setLastName("dani")
ninad.setRollNo(23)
ninad.setAge(55)
console.log(ninad)

// set  and get keyword 

//let namea = ["ram","sham","ganesh"]
// namea.length = 4
// namea.push()


class PersonD {

    set firstN(fn){
        this.firstName = fn
    }
    set lastN(ln){
        this.lastName = ln
    }
    set Age(ag){
        this.age = ag
    }
    set rollN(rn){
        this.rollNo = rn
    }
    get rollN(){
        return this.rollNo
    }

}

let vijeet = new PersonD()
vijeet.rollN = 99
vijeet.lastN = "dani"
vijeet.Age = 44
vijeet.firstN = 55

console.timeLog(vijeet.rollN)


