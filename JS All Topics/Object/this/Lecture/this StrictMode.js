'use strict';

// console.log("Outer this", this) // window
// console.log("Outer globalThis", globalThis) // window

//------------------------------------------------------------
// Normal Functions : Where function is called
function fun() {
  console.log("fun", this)
}
// fun() // undefined
// window.fun() // window

// let funExpression = function () {
//   console.log("funExpression", this) 
// } // getting error when calling on window
var funExpression = function () {
  console.log("funExpression", this)
}
// funExpression()  // undefined
// window.funExpression() // window

let arrowFun = () => {
  console.log("arrowFun", this)
}
// arrowFun() // window

/* 
**Regular functions : have their own `this` context which can change depending on how they are called. In strict mode, if called without a context, `this` is `undefined`.

**Arrow functions : do not have their own `this` context. They inherit `this` from the surrounding lexical context where the arrow function is defined, which avoids the issue of `this` being `undefined` in strict mode.
-------------------------------------------------------------
*/

//# constructor :
function printName(name) {
  this.name = name;
  console.log("function constructor", this) // obj2
}
// let obj2 = new printName("js");

class abc {
  constructor(name) {
    this.name = name;
    console.log("class constructor", this) // abcNew
  }
}
// let abcNew = new abc("js");

//------------------------------------------------------------
// # In method, function nested structure:  

let obj = {
  fNmae: "I am Obj",
  lastName: this,  // window

  // printName1: function () {
  //   console.log("NormalFun", this) // obj 
  // },
  // printName2: () => {
  //   console.log("arrowFun", this) // window
  // },

  // printName1: function () {
  //   console.log("NormalFun1", this) // obj 
  //   let printName2 = function () {
  //     console.log("NormalFun2", this) // undefined
  //   }
  //   printName2();
  // },

  // printName1: function () {
  //   console.log("NormalFun", this) // obj --> Function called on obj
  //   let printName2 = () => {
  //     console.log("arrowFun", this) // obj --> Enclosing lexical context
  //   }
  //   printName2();
  // },

  // printName1: () => {
  //   console.log("arrowFun", this) // window
  //   let printName2 = function () {
  //     console.log("NormalFun", this) // undefined
  //   }
  //   printName2();
  // },

  printName1: () => {
    console.log("arrowFun", this) // window
    let printName2 = () => {
      console.log("arrowFun", this) // window
    }
    printName2();
  }
}
obj.printName1();
// obj.printName2();
