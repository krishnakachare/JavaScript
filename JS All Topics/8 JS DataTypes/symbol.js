// let user = {}; // object = { key(String/Symbol) : value (Any)}

// user['name'] = 'sanjay';
// user['age'] = 50;
// let id = Symbol('user id');
// user[id] = 101;
// console.log(user);

// console.log(user['name'])
// console.log(user['age'])
// console.log(user[id])

// for (key in user) {
//     console.log(key + " = " + user[key])
// }
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));

// console.log(Object.getOwnPropertySymbols(user));

// // copy data from user to user2
// let user2 = Object.assign(user);
// console.log(user2)

let obj = {};

obj['a'] = 100;
obj['a'] = 200;

let symbol1 = Symbol('hi')
let symbol2 = Symbol('hi')

obj[symbol1] = 10;
obj[symbol2] = 20;

console.log(obj[symbol1])
console.log(obj[symbol2])



