/* 
# Object constructor methods :

Action : calling the required function/method(with its parameters) with required this value

    1. call() :  functionName.call(thisValue, arg1, arg2, ...); 
    Return : depends on function working

    2. bind() : functionName.bind(thisValue, arg1, arg2, ...);
    Return : new function

    3. apply() : functionName.bind(thisValue, [arg1, arg2, ...]);
    Return : depends on function working

*/

function calculateAge(a, b) {
    console.log(`I am ${this.name}. I am ${2024 - this.birthDate} yrs old`)
    if (typeof (a) == "number") console.log("Addition :" + a + b)
    console.log(a, b)
    // return "Returning..."
}

let Ram = {
    name: "Ram",
    birthDate: 2002,
    skills: ["Read", "write"]
}

let sham = {
    name: "Sham",
    birthDate: 2000
}

// call() :
// calculateAge.call(Ram, 3, 3)
// console.log(calculateAge.call(sham, 2, 2)) // undefined

// console.log(calculateAge.bind(sham, 2, 2)) // calculateAge function returning with sham object

// bind() :
let bindFun = calculateAge.bind(sham, 2, 2);
// bindFun();
// console.log(bindFun()); // undefined

// apply() :
calculateAge.apply(Ram, Ram.skills)


