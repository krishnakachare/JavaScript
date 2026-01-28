/* 
# Object constructor methods :
Action : calling the required function/method(with its parameters) with required this value

    1. call() : functionName.call(thisValue, arg1, arg2, ...); 
    Return : depends on function working

    2. bind() : functionName.bind(thisValue, arg1, arg2, ...);
    Return : new function

    3. apply() : functionName.apply(thisValue, [arg1, arg2, ...]);
    Return : depends on function working 
*/

function add(a, b) {
    console.log(a + b)
}
// add(1, 1)

//-------------------------------------
let obj = {
    z: 10,
    print: function () {
        console.log(this.z)
    }
}
// obj.print() // 10

//--------------------------------------
let person1 = {
    name: "Ram",
    birthDate: 2000,
    calculateAge: function () {
        console.log(this.name + " Age :")
        console.log(2024 - this.birthDate)
    }
}
// person1.calculateAge() // 24

let person2 = {
    name: "sham",
    birthDate: 2002,
    // calculateAge: function () {
    //     console.log(this.name + " Age :")
    //     console.log(2024 - this.birthDate)
    // }
}
// person2.calculateAge() // 22
// person1.calculateAge.call(person2)

//------------------------------------------------

function printName(a, b) {
    console.log(this) //
    console.log(this.name + " " + this.lastName)
    console.log(a, b)
    return "I am comman function";
}
// printName()

let person3 = {
    name: "JS1",
    lastName: "TS1"
}
let person4 = {
    name: "JS2",
    lastName: "TS2"
}
// printName.call(person3)
// printName.call(person4, 20, 10)

//----------------------------------
// bind() : functionName.bind(thisValue, arg1, arg2, ...);
// Return : new function

// let bindFun = printName.bind(person3, 10, 20);
// bindFun();
// console.log(bindFun())

//---------------------------------------

// 3. apply() : functionName.apply(thisValue, [arg1, arg2, ...]);
printName.apply(person4, [10, 20])