# Episode 7: Scope, Scope Chain & Lexical Environment

## 🔹 What is Scope?
- **Scope** = Where a variable is accessible in your program.  
- In JavaScript, scope is closely tied to the **Lexical Environment**.

---

## 🔹 What is Lexical Environment?
- Every **Execution Context** (global or function) has a **Lexical Environment (LE)**.  
- A Lexical Environment =  
  - **Local memory** (variables/functions declared inside it)  
  +  
  - **Reference to its parent’s Lexical Environment**  

👉 In short: Local memory + Parent link.  

---

## 🔹 Example Cases

### ✅ Case 1
```js
function a() {
  console.log(b); // 10
}
var b = 10;
a();
````

* Function `a` can access `b` from the **global scope**.

---

### ✅ Case 2

```js
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```

* Nested function `c` can still access global `b`.

---

### ✅ Case 3

```js
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```

* Local `b = 100` (inside `c`) takes **precedence** over global `b`.

---

### ✅ Case 4

```js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // ❌ ReferenceError: b is not defined
```

* Functions can access variables from outer scopes.
* But the **Global Context cannot access a function’s local variable**.

---

## 🔹 Scope Chain in Action

Think of the scope chain as **a path the engine follows** when looking for a variable:

```
call_stack = [GEC, a(), c()]

c() → Local: { b: 100 }
       Parent: a()

a() → Local: { b: 10, c: {} }
       Parent: GEC

GEC → Local: { a: {}, b: 10 }
       Parent: null
```

If a variable isn’t found locally → JS looks outward step by step → until it either finds it or reaches `null`.

---

## 🔹 Lexical = "In Order"

* Functions are **lexically nested** in the code.
* Example:

```js
function a() {
  function c() {
    // c is lexically inside a
  }
  c();
}
// a is lexically inside Global
```

Lexical = “by placement in code.”

---

## 🔹 Visualization

```js
Global {
   Outer {
      Inner
   }
}
```

* `Inner` is inside `Outer`’s lexical scope.
* Therefore, `Inner` can access `Outer`’s variables.

---
![Lexical Scope Explaination](./assets/lexical.jpg "Lexical Scope") ![Lexical Scope Explaination](./assets/lexical2.jpg "Lexical Scope")
---

## ✨ TL;DR

* Each Execution Context has a **Lexical Environment**.
* Inner functions can access variables of outer functions (scope chain).
* The search for variables moves **outward step by step**.
* Global scope can’t access inside local scopes.
