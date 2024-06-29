/* 

browser ==> window object --> this
Node.js ==> global object --> globalThis

Q. what is 'this'?
   - js reserved keyword or variable
   - 'this' always containing dynamic value which is object
   - 'this' is a object (Dynamic object)
   - which object ?
    - containing dynamic value/object according to its scope:
      1. In script & functions : this ==> window 
      2. In method  : this ==> owner object
          Depends on function type and its nested structure
      3. In constructor : this ==> new instance.

# this scope depends on function type and its nested structure :
  # Type of function:
   1. Normal function : (function declaration & expression)
    - 'this' value is dynamic
    - Depends on how/where the function is called

   2. Arrow function :
    - 'this' value is static
    - Depends on the where the function is declared/written
    - Enclosing lexical context/scope        

*/


// console.log(Window) --> constructor
// console.log(window) --> instance object
console.log(window instanceof Window); // true
console.log(Window.prototype); // Window {}

// window.alert("Hello, world!"); // Displays an alert dialog

// console.log("Outer this", this) // window
// console.log("Outer globalThis", globalThis) // window

// Normal Functions : Where function is called
function fun() {
  console.log("fun", this) // window
}
// fun()

let funExpression = function () {
  console.log("funExpression", this) // window
}
// funExpression()

/* Arrow Function : Where function is defined
    Arrow functions do not have their own this. Instead, they inherit this from the enclosing lexical context (the scope in which the arrow function was defined). In this case, since the arrow function is defined in the global scope, it inherits this from the global scope, which is the window object in a browser environment.
*/
let arrowFun = () => {
  console.log("arrowFun", this) // window
}
// arrowFun()

//--------------------------------------------------------------
//# Function constructor : Before the ES6 way of object create. IN ES6 class introduced
function printName(name) {
  this.name = name;
  console.log("function constructor", this)
}
// let obj2 = new printName("js");
//----------------------------------------------------------------------

/* 
  # In method, function nested structure:  
*/
let obj = {
  fNmae: "I am Obj",
  lastName: this,  // window

  // printName1: function () {
  //   console.log("NormalFun", this) // obj 
  //   let printName2 = function () {
  //     console.log("NormalFun", this) // window
  //   }
  //   printName2();
  // },

  printName1: function () {
    console.log("NormalFun", this) // obj --> Function called on obj
    let printName2 = () => {
      console.log("arrowFun", this) // obj --> Enclosing lexical context
    }
    printName2();
  },

  // printName1: () => {
  //   console.log("arrowFun", this) // window
  //   let printName2 = function () {
  //     console.log("NormalFun", this) // window
  //   }
  //   printName2();
  // },

  // printName1: () => {
  //   console.log("arrowFun", this) // window
  //   let printName2 = () => {
  //     console.log("arrowFun", this) // window
  //   }
  //   printName2();
  // }
}

// obj.printName1()
