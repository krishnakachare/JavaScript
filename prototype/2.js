// oops

// object literal 
let chinmay = {
    fullName:"chinmaydeshpande",
    age:12,
    display:function(){
        console.log(this.fullName)
    }
}

console.log(chinmay)
chinmay.display()


// Object create



// function constructor 

let Person = function(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    // this.display = function(){
    //     console.log(this.firstName)
    // }

}

Person.prototype.display = function(){
    console.log(this.firstName)
}



let sarika = new Person("sarika","pansare",23)
let sarika2 = new Person("sarika2","pansare2",24)
console.log(sarika)
console.log(sarika2)

/--------------------------------------/
Person.prototype.display = function(){
    console.log(this.firstName)
}
Person.prototype.lang = "Hindi"
// Obj -- _proto_ ===> Person.prototype
console.log(Person.prototype === sarika._proto_)
console.log(sarika instanceof Person)
console.log(sarika.lang)
console.log(sarika.hasOwnProperty('lang'))
console.log(sarika.hasOwnProperty('firstName'))


// Es6 
class Person3 {
    constructor(firstName , lastName ,age){
        this.firstName = firstName
        this.lastName = lastName 
        this.age = age 

    }
    display(){
        console.log(this.firstName)
    }

}
let sarika4 = new Person3("sarika4","pansare4",23)
console.log(sarika4)
console.log(Person3.prototype === sarika4._proto_)

// 3 way to create object 


let proToObj = {

    display:function(){
        console.log(this.firstName)
    },
    lang:"hindi"


}


let sarika5 = Object.create({})
console.log(sarika5)
sarika5.firstName = "sarik5"
sarika5.lastName = "pansare5"
console.log(sarika5)

let sarika6 = Object.create(proToObj)
sarika6.firstName = "sarik6"
sarika6.lastName = "pansare6"
console.log(sarika6._proto_ == proToObj)

// Function construtor 
//  es6 class
// object.create()
// object literal


// Inhertitance

class Student {
    
    fullName= "sarika7"
    adharNo = 123 
    city = "pune"

}

class Teacher extends Student {
   
    salary = 1000
}


let sarika7 = new Teacher()
console.log(sarika7.salary)
console.log(sarika7.fullName)
console.log(sarika7.adharNo)
console.log(sarika7.city)

// let sarika7 = new Student()
// console.log(sarika7)

/--------------------------------------/ 


class Student2 {

    constructor(fullName , adharNo , city){
        this.fullName = fullName
        this.adharNo = adharNo
        this.city = city
    }


}

class Teacher2  extends Student2{

    constructor(fullName,adharNo,city,salary){
        super(fullName , adharNo , city)
        this.salary = salary
    }

}

class Professor2 extends Teacher2{

    constructor(fullName,adharNo,city,salary,spliztion){
        super(fullName,adharNo,city,salary)
        this.spliztion = spliztion
    }


}

let sarika8 = new Professor2("sarika",123,"Pune",1000,"english")
console.log(sarika8)


//let sarika8 = new Teacher2("sarika",123,"Pune",1000)
//let sarika8 = new Student2("sarika",123,"Pune")


// Grandfather , Father , Son


class Grandfather{

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    display(){
        console.log(this.firstName , this.lastName )
    }

}

class Father extends Grandfather {

    constructor(GfirstName,lastName,FfirstName){
        super(GfirstName,lastName)
        this.FfirstName = FfirstName
    }

    display(){
        console.log(this.FfirstName , this.lastName )
        super.display()
    }
}

class Son extends Father {
    constructor(GfirstName,lastName,FfirstName,SfirstName){
        super(GfirstName,lastName,FfirstName)
        this.SfirstName = SfirstName
        
    }

    display(){
        console.log(this.SfirstName , this.lastName )
        super.display()
    }
}


let chinmay4 = new Son("manohar","deshpande","shirsh","chinmay")
chinmay4.display()

































//////////////////////////////////////////////////////////









// function constructor 

let Person = function(firstName, age , roll){
    this.firstName = firstName
    this.age = age 
    this.roll = roll
    // this.display = function(){
    //     console.log(this.firstName)
    // }
}

Person.prototype.display = function(){
    console.log(this.firstName)
}
Person.prototype.lang = "Hindi"
let  amol = new Person("amol",23,222)
let  chinmay = new Person("chinmay",23,223)

amol.display()
chinmay.display()

console.log(chinmay)
console.log(amol)

console.log(chinmay._proto_ === Person.prototype)
console.log(chinmay instanceof Person)
console.log(amol.lang)
console.log(amol.lang)

console.log(amol.hasOwnProperty('lang'))
console.log(amol.hasOwnProperty('age'))

/program/


class Person2 {


    constructor(firstName,age){
        this.firstName = firstName
        this.age = age
    }


    display(){
        console.log(this.fullName)
    }


}
let vasudha = new Person2("vasusha",33)
vasudha.display()
console.log(vasudha)
console.log(vasudha instanceof Person2)
console.log(vasudha)

// program 3



let Protoobj = {

    display:function(){
        console.log('hellol')
    }
}


let qwerty = Object.create(Protoobj)
console.log(qwerty)

// _proto_

qwerty.age = 10 
qwerty.firstName = "chinmay D"
qwerty.rollNumber = 13

console.log(qwerty)
qwerty.display()

/program - 4/

//Inhettiance

class Student {
    fullName = "vasudha "
    roll = 23
    adharNo = 123

}
class Teacher extends Student {
    salary = 1000
}

class Professor extends Teacher{
    specialization = "Physics"
}


let vasudhaOne = new Professor()
console.log(vasudhaOne.salary)
console.log(vasudhaOne.fullName)
console.log(vasudhaOne.roll)
console.log(vasudhaOne.adharNo)
console.log(vasudhaOne.specialization)
console.log(vasudhaOne)

// using constructor 

class Student2 {
    constructor(fullName , age , roll){
        this.fullName = fullName
        this.age = age
        this.roll = roll
    }
}

class Teacher2 extends Student2 {
    constructor(fullName,age,roll,salary){
        super(fullName,age,roll)
        this.salary = salary
    }

}

class Professor2 extends Teacher2{
    constructor(fullName,age,roll,salary,specialization){
        super(fullName,age,roll,salary)
        this.specialization = specialization
    }
}

let amol2 = new Professor2("a1",12,23,1000,"physics")
console.log(amol2)
console.log(amol2.age)
console.log(amol2.firstName)
console.log(amol2.salary)

/------------------------------------------------/

// Grandfather()  //  display()

// Father() //  display()

// Son() // display()

class Grandfather {

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    display(){
        console.log(this.firstName , this.lastName)
    }

}


class Father  extends Grandfather{

    constructor(gFirstName,lastName , fFirstName){
        super(gFirstName,lastName)
        this.fFirstName = fFirstName
    }

    display(){
        console.log(this.fFirstName,this.lastName)
        super.display()
    }


}


class Son  extends Father {

    constructor(gFirstName,lastName , fFirstName,sFirstName){
        super(gFirstName,lastName , fFirstName)
        this.sFirstName = sFirstName
    }

    display(){
        console.log(this.sFirstName,this.lastName)
        super.display()
    }
}



let chinmay2 = new Son("manoharrao","deshpande","shirish","chinmay")
chinmay2.display()
// override






// Interitance ---> property or method