// let parent = {
//     fullName: 'Krishna',
//     age: 27,
//     walk: function () {
//         console.log(this.fullName)
//         a = 10
//         return a        // In only object structure in method we can directly declear any variable without any decleration keywords
//     }
// }

// parent.walk()                 // Krishna
// console.log(parent.walk)      // [Function: walk]
// console.log(parent.walk())    // Krishna  ,  10
// console.log(parent.walk())    // Undefined        --> when we not use return keyword (not return) anything in method/function

// NOTE = In class we cant directly declear any variable in method/function

class parent {
    fullName = 'Krishna'
    age = 27
    walk = function () {
        console.log(this.fullName)

    }
}

// First child object made using parent class

// let child1 = new parent()
// console.log(child1)        // parent { fullName: 'Krishna', age: 27, walk: [Function: walk] }
// child1.walk()              // Krishna
// console.log(child1.walk)   // [Function: walk]
// console.log(child1.walk()) // Krishna, undefined


// Second child object made using parent class

let child2 = new parent()
console.log(child2)        // parent { fullName: 'Krishna', age: 27, walk: [Function: walk] }
child2.walk()              // Krishna
console.log(child2.walk)   // [Function: walk]
console.log(child2.walk()) // Krishna, undefined