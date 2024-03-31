// comparision operators
// RHS    LHS
// Return in output -----> true/false  (Boolean)

// <, >, ==, ===, <=, >=, !=, !==

// LHS   <  RHS

// console.log(3 < 2)   // false
// console.log(3 < 3)   // false
// let check = 3 < 2
// console.log(check)     // false
// let z = typeof (check)
// console.log(z)                  // boolean
// console.log((3 * 3) < (2 + 4))    /// false


// LHS   >  RHS

// console.log(3 > 2)   // true
// console.log(3 > 3)   // false
// let check = 3 > 2
// console.log(check)     // true
// let z = typeof (check)
// console.log(z)                  // boolean
// console.log((3 * 3) > (2 + 4))    /// true


// LHS   ==  RHS    (only value checked in comparision)

// console.log(3 == 3)  // true
// console.log(3 == 2)  // false
// console.log("Hi" == "Hi")  /// true
// console.log("Hi" == "hi")  /// false        // js is case sensitive lang
// console.log(3 == "3")  // true


// // LHS   ===  RHS    (only value & data type checked in comparision)

// console.log(3 === 3)  // true
// console.log(3 === "3")  //       true  &&  false  ----> false


// ! ----> not (logical operator)

// LHS   !=  RHS      (only value checked in comparision)

// console.log(3 != 3)  //   ! true  --->  false
// console.log(3 != "3")  //  ! true  ---> false


// LHS   !==  RHS      (only value & data type checked in comparision)

// console.log(3 !== 3)  //   ! true  --->  false
// console.log(3 !== "3")  //  ! false  ---> true


// LHS   <=  RHS

// console.log(3 <= 3)  // true    // checked two conditions
// console.log(2 <= 3)  // true


// LHS   >=  RHS

// console.log(3 >= 3)  // true    // checked two conditions
// console.log(2 >= 3)  // false




/// logical operators in js

// And (&&), or (||), not (!)

// return in output ---> true / false (Boolean)

// 1. And (&&)

// LHS  &&  RHS  ---> 

// console.log(true && true)     // true
// console.log(true && false)    // false
// console.log(false && true)    // false
// console.log(false && false)   // false
// console.log((3 > 4) && (4 <= 2))  // false && false  ----> false


// 2. OR (||)

// LHS  ||  RHS  ---> 

// console.log(true || true)     // true
// console.log(true || false)    // true
// console.log(false || true)    // true
// console.log(false || false)   // false
// console.log((3 > 4) || (4 <= 2))  // false || false  ----> false
// console.log((3 > 4) || (1 <= 2))  // false || true  ----> true


// 3. not (!)

// !output ---> 

// console.log(true)
// console.log(!true)  // false
// console.log(!false)  // true


// <=, >=  ( OR operator used)

console.log(3 <= 3)  // 3<3--> false,   3==3--> true,    false || true  ---> true
console.log(5 <= 3)  //  5<3--> false,  5==3--> false,   false || false ----> false

// ===  ( And operator used)
console.log(3 === "3")  // 3==3-->true(value is same), 3==3--->false(data type is different),      true  &&  false  ----> false


