# Episode 3: Hoisting in JavaScript (Variables & Functions)

## 🔹 What is Hoisting?
**Hoisting** is JavaScript’s behavior of moving variable and function declarations to the top of their scope **before execution**.  

This happens because of the **Memory Creation Phase** in the Execution Context:
- **Variables** → stored as `undefined` (until a value is assigned).  
- **Functions** → the entire function code is stored.  

---

## 🔹 Example 1

```js
getName();         // Output: Namaste JavaScript
console.log(x);    // Output: undefined

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}
````

👉 Step-by-step:

1. During memory creation:

   * `x` → stored as `undefined`
   * `getName` → function code stored
2. During execution:

   * `getName()` runs → prints `"Namaste JavaScript"`
   * `console.log(x)` → prints `undefined`
   * `x = 7` assigns value

✨ In other languages, this would throw an error because variables aren’t available before declaration.
But in JS, **variables exist with `undefined`** and **functions are fully available**.

---

## 🔹 Example 2: Variable not declared

```js
getName();           // Output: Namaste JavaScript
console.log(x);      // ❌ ReferenceError: x is not defined
console.log(getName) // Logs full function code

function getName() {
  console.log("Namaste JavaScript");
}
```

👉 Here, since `x` was never declared, JS throws a **ReferenceError**.
Functions, however, are still hoisted completely.

---

## 🔹 Example 3: Function Expression

```js
getName(); // ❌ TypeError: getName is not a function
console.log(getName);

var getName = function () {
  console.log("Namaste JavaScript");
};
```

👉 Why error?

* During memory creation:

  * `getName` → stored as `undefined` (because it’s a **variable** here, not a function declaration).
* During execution:

  * JS tries to run `getName()` while it’s still `undefined`.
  * Hence: **TypeError: getName is not a function**.

⚡ Function expressions are **not hoisted like function declarations**.

✨ **Summary**

* Variables are hoisted as `undefined`.
* Function declarations are fully hoisted.
* Function expressions behave like variables (not available before assignment).