// Class = User defined data type (our made data type)
// this = means current calling object


class student  {
    firstname = null
    age = null
    id = null
}


// 1. Setting the object properties outside the class

console.log(student)                 // [class student]
let krishna = new student()
console.log(krishna)                // student { firstname: null, age: null, id: null }
krishna['firstname'] = 'kachare'
krishna['id'] = 'oo7'
console.log(krishna)                // student { firstname: 'kachare', age: null, id: 'oo7' }


let swapnil = new student()
console.log(swapnil)               // student { firstname: null, age: null, id: null }
swapnil['language'] = 'marathi'
swapnil.firstname = 'swapnil'
swapnil.age = 26                   // we can use dot and braket notation for add, update, delete, fetching the properties
console.log(swapnil)               // student { firstname: 'swapnil', age: 26, id: null, language: 'marathi'}

// Here two objects (Memorys) are made for the two addresses (krishna  and swapnil)  wrt  class (blueprint).  we can create multipal object using class(blueprint or class structure)


// 2. Setting the properties using the function 

class student  {
    firstname = null
    age = null
    id = null

    setfullName(a){
        this.fullname = a         // its printed in object  e.g fullname : 'krishna'
        // this means current calling object
    }
    setAdhar(A){
        this.Adharno = A
    }
}

let kk = new student()
kk.setfullName('krishna')
console.log(kk)                          // student { firstname: null, age: null, id: null, fullname: 'krishna' }

let sm = new student()
sm.setfullName('swapnil')
sm.setAdhar(1111111111111111)
console.log(sm)                          // student {firstname: null, age: null, id: null, fullname: 'swapnil', Adharno: 1111111111111111 }



// 3. making object using constructor

class person {

    constructor(fullname, age, id, mob, adhar){
        this.FirstNmae = fullname
        this.Age = age
        this. Id = id
        this.Mob = mob
        this.Adhar = adhar
    }
}


let Akshay = new person('AD', 27, 'oo7',93953802389,0101010101)
let kk = new person()
console.log(Akshay)     // person {FirstNmae: 'AD', Age: 27, Id: 'oo7',     Mob: 93953802389, Adhar: 17043521   }
console.log(kk)         // in object values are undefined
























































































































// class Person{  
//     age= null
//     roll = null
//     fullName = null
//     setAge(a){
//         this.age = a
//     }
//     setRoll(rollno){
//         this.roll = rollno
//     }
//     fullName(name){
//         this.fullName = name
//     }
// }

///////----------------33------//

// setting the properies using the function

// let amol = new Person()
// amol.setAge(20)
// console.log(amol.age)

// let rahul = new Person()
// rahul.setAge(34)

// console.log(rahul)
// console.log(amol)


//////////////1111---/////////////

// Setting the object properties outside the class
// let amol = new Person()
// amol.age = 20
// amol.roll = 30
// amol.fullName = "Amol Rao"
// console.log(amol)

// //------------------
// amol['age'] = 20
// amol['roll'] = 30
// amol['fullName'] = "Amol Rao"
// console.log(amol)

// let amol = {

//     age:30,
//     roll:34,
//     fullName:"amol"


// }

// let chinmay = new Person()
// let poorva = new Person()
// let abhisha = new Person()
// let mayuri = new Person()
// console.log(mayuri.age)


//------------------4----------------------//
// class Person{
//     constructor(fullName ,age ,rollno){
//         this.fname = fullName,
//         this.ageNo = age,
//         this.rollNo = rollno
//     }
// }

// let amol = new Person("amol",23,34)
// let chinmay = new Person("chinmay",12,33)
// let poorva = new Person("poorva",12,33)

// let students = [amol,chinmay,poorva]

// let sum = 0

// for(let i = 0 ; i < students.length; i++){
//     //console.log(students[i])
//     sum = sum + students[i].ageNo
// }
// console.log(sum/students.length)