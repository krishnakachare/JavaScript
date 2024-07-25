// Destructuring on object
// Object --> 1. Array  2. Object

//-----------------------------------------------------------
// 1. Array
// Syntax --> let/const/var [variableName] = Array/ArrayName

// Variable delecration
// let a = 10

// let arr = ["ab", "bc", 10, true]
// // let [w, x, y, z] = ["ab", "bc", 10, true] 
// let [w, x, y, z] = arr  // Position is considered for values

// Note - Seperate memory allocate for LHS

// console.log(w)  // ab
// console.log(y)  // 10

// Multidiamensional/Nested array

// let arrNested = ["ab", "bc", [10, 20], [true, false]]
// // let/const/var [variableName] = Array/ArrayName

// let [n, p, q, r] = arrNested
// console.log(q)  // [ 10, 20 ]   Array

// let [a, b, [c, d], [e, f]] = arrNested
// console.log(c) // 10

//----------------------------------------------------------
// 2. Object -->
// Syntax --> let/const/var {KeyName} = Object/ObjectName
// KeyName/PropertyName = Custome name

// let acb = {
//           fname: "abc",
//           age: 10
// }

// let { fname, age } = acb
// console.log(fname)  // abc

//----------------------------------------------------------
// We can assign alise/variable for custome name
// Syntax --> let/const/var {KeyName:xyz} = Object/ObjectName

// let { fname: firstName, age: Age } = acb
// console.log(firstName)  // abc
// console.log(Age)  // 10

// // Note - Seperate memory allocate for LHS
//----------------------------------------------------------

// Can Destructure any complex structure of object
let Person = {
          fname: "abc",
          age: 10,
          family: {
                    son1: {
                              sName: "abcSon",
                              skillSon1: ["writing", "Reading"]
                    },
                    son2: {
                              sNameSon2: "xyzSon",
                              skillSon2: ["writing2", "Reading2"]
                    },
          },
          skill: [{ skill1: "Gamming" }, { Skill2: "Playing" }]
}

// let { fname, age, family: { son1, son2 }, skill } = Person
let { fname, age, family: { son1: { sName, skillSon1: [a, b] }, son2: { sNameSon2, skillSon2: [x, y] } }, skill: [{ skill1 }, { skill2 }] } = Person

console.log(a)
console.log(x)
console.log(skill1)