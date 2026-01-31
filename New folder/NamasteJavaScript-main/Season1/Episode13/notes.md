# Episode 13: First-Class Functions & Anonymous Functions in JS

> Functions are the ❤️ of JavaScript.

---

### Q1: What is a Function Statement?
A normal way of declaring a function.

```js
function a() {
  console.log("Hello");
}
a(); // Hello
````

---

### Q2: What is a Function Expression?

Assigning a function to a variable.
Here, the function acts like a **value**.

```js
var b = function () {
  console.log("Hello");
};
b(); // Hello
```

---

### Q3: Function Statement vs Function Expression

The **main difference** is in **hoisting**:

```js
a(); // "Hello A"
b(); // ❌ TypeError: b is not a function

function a() {
  console.log("Hello A");
}

var b = function () {
  console.log("Hello B");
};
```

* `a` → fully hoisted with function definition.
* `b` → only hoisted as `undefined`, actual function assigned at runtime.

---

### Q4: What is a Function Declaration?

Just another name for **Function Statement**.

---

### Q5: What is an Anonymous Function?

A function **without a name**.

```js
function () {
  console.log("Hi");
}; 
// ❌ SyntaxError — function statements need a name
```

✅ Anonymous functions are valid when used as **values**, e.g. in function expressions:

```js
var b = function () {
  console.log("Hello from anonymous");
};
b();
```

---

### Q6: What is a Named Function Expression?

A function expression with a **name**.

```js
var b = function xyz() {
  console.log("b called");
};

b();   // ✅ "b called"
xyz(); // ❌ ReferenceError: xyz is not defined
```

⚠️ The name `xyz` exists **only inside** the function’s local scope, not globally.

---

### Q7: Parameters vs Arguments

* **Parameters** → placeholders inside function definition.
* **Arguments** → actual values passed during call.

```js
function add(x, y) {   // x, y = parameters
  return x + y;
}
console.log(add(5, 10)); // 5, 10 = arguments
```

---

### Q8: What are First-Class Functions?

Functions in JS are **first-class citizens**, meaning they can:

1. Be passed as arguments
2. Be returned from other functions
3. Be stored in variables

Examples:

```js
// 1. Pass as argument
function greet(fn) {
  fn();
}
greet(function () {
  console.log("Hello World");
});

// 2. Return from function
function outer() {
  return function inner() {
    console.log("Returned function");
  };
}
const fn = outer();
fn(); // "Returned function"

// 3. Store in variable
const sayHi = function () {
  console.log("Hi");
};
sayHi();
```

---

## ✨ Key Takeaways

* **Function statement = declaration** (hoisted fully).
* **Function expression** (anonymous/named) = hoisted as variable (`undefined`).
* Functions in JS are **first-class citizens**: they can be **assigned, passed, and returned**.
* Anonymous functions are only useful **as values**.
* Named function expressions give better stack traces but aren’t globally accessible.