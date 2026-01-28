// logical operator : &&, ||, !
// Short circuit :

/* 
# optional operator (?.) :

    keyName1?.keyName2
    keyName1?.['keyName2']

    If keyName1 have value null or undefined (not retriving value), the it will stop execution & returns undefined. Not will go to retrive value of keyName2, bcoz of that error will be avoid.
*/

let obj = {
    name : "JS",
    age : 10,
    // skill : {
    //     a : "ABC"
    // }
}
console.log(obj.name) // "JS"
console.log(obj.lastName) // undefined
// console.log(obj.skill.a) // "ABC" // Error : when skill key not present
console.log(obj.skill?.a) // undefined
// console.log(obj.skill?.['a'])

//-----------------------------------------------------------------
// Ternery operator : working base on truthy & falsy value
let output = true ? "Hi" : "By" 
console.log(output) // "Hi"

/* 
# nullish coalescing operator (??) : working base on value not present
    LHS ?? RHS
    If LHS is null or undefined then only will executing RHS, otherwise LHS will execute
*/
console.log(true ?? "Hi") // true
console.log(false ?? "Hi") // false
console.log(0 ?? "Hi") // 0
console.log(NaN ?? "Hi") // NaN
console.log(null ?? "Hi")  // Hi
console.log(undefined ?? "Hi")  // Hi

 
