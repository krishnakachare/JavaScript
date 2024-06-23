// // Cant change or update assigned value for variable which declared by const
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c);
// a = 12;
// b = 22;
// // c = 32; // TypeError: Assignment to constant variable.
// console.log(a, b, c);

// //===================================================================
// // Initialization of variable is mandatory with const
// var a;
// let b;
// // const c; // SyntaxError: Missing initializer in const declaration
// console.log(a, b); // undefined undefined

// //===================================================================
// // Redeclaration of variable possible only with the var
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c);
// var a = 100;
// let b = 200; // SyntaxError: Identifier 'b' has already been declared
// const c = 300; // SyntaxError: Identifier 'c' has already been declared
// console.log(a); // 100

// //===================================================================
// // TDZ - Temporal Dead Zone
// console.log(a);  // undefined
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ReferenceError: Cannot access 'c' before initialization
// console.log(d);  // ReferenceError: d is not defined
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c); // 10 20 30

